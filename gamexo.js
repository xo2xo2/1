var wwc_keycode = "073ded1edcedd11f60005ae969cabf11";

// ============= Adapted Intersection System for the New Project =============

window.sectorSystem = {
  settings: {
    lineWidth: 0.15,
    lineColor: 16711680,
    lineAlpha: 0.3,
    backgroundColor: 0,
    backgroundAlpha: 0.6,
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
  // ✅ Improved function to locate the render container for the new project

  findRenderContainer: function () {
    if (this.state.renderContainer) {
      return this.state.renderContainer;
    }

    // Possible paths for the new project only
    const possiblePaths = [
    // General paths for PIXI
    () => window.app?.stage, () => window.PIXI?.app?.stage, () => window.gameApp?.stage, () => window.renderer?.stage,
    // Possible game paths from the new code
    () => window._wwc?._anApp?.og?.af?.ng?.mf, () => window._1f8817?.og?.af?.ng?.mf, () => window.decoder?.og?.af?.ng?.mf, () => window.game?.renderer?.stage, () => window.game?.scene?.stage,
    // Search in global variables for the new project
    () => {
      for (let key in window) {
        try {
          const obj = window[key];
          if (obj && typeof obj === "object") {
            // البحث عن PIXI Container

            if (obj instanceof PIXI.Container) {
              return obj;
            }

            // البحث في خصائص الكائن

            if (obj.stage instanceof PIXI.Container) {
              return obj.stage;
            }
            if (obj.mf instanceof PIXI.Container) {
              return obj.mf;
            }

            // البحث في المسارات المعقدة

            if (obj.og?.af?.ng?.mf instanceof PIXI.Container) {
              return obj.og.af.ng.mf;
            }
          }
        } catch (e) {

          // تجاهل الأخطاء وكمل البحث
        }
      }
      return null;
    }];

    // جرب كل مسار

    for (let i = 0; i < possiblePaths.length; i++) {
      try {
        const container = possiblePaths[i]();
        if (container && container instanceof PIXI.Container) {
          this.state.renderContainer = container;
          return container;
        }
      } catch (e) {

        // تجاهل الأخطاء وكمل البحث
      }
    }
    return null;
  },
  // ✅ دالة محسنة للحصول على نصف القطر

  getRadius: function () {
    // جرب مسارات مختلفة للحصول على نصف القطر بناءً على الكود الجديد

    const radiusPaths = [() => window._wwc?._anApp?.dh?.hh?.zg, () => window._1f8817?.dh?.hh?.zg, () => window.decoder?.dh?.hh?.zg, () => window.game?.radius, () => window.gameRadius, () => window.mapRadius, () => 500 // القيمة الافتراضية
    ];
    for (let path of radiusPaths) {
      try {
        const radius = path();
        if (radius && typeof radius === "number" && radius > 0) {
          return radius;
        }
      } catch (e) {

        // تجاهل وكمل
      }
    }
    return 500; // قيمة افتراضية
  },
  clearTexts: function () {
    this.state.texts.forEach(text => {
      if (text && text.parent) {
        text.parent.removeChild(text);
      }
    });
    this.state.texts = [];
  },
  initDrawing: function (radius) {
    this.clearTexts();
    this.state.graphics.clear();
    this.state.graphics.lineStyle(this.settings.lineWidth, this.settings.lineColor, this.settings.lineAlpha);
    this.state.graphics.beginFill(this.settings.backgroundColor, this.settings.backgroundAlpha);
    this.state.graphics.drawCircle(0, 0, radius);
    this.state.graphics.endFill();
    return radius;
  },
  drawSectors: function () {
    const radius = this.initDrawing(this.getRadius());
    const innerRadius = radius / 3;
    if (this.settings.showLines) {
      // رسم الدوائر الداخلية

      for (let layer = 1; layer < 3; layer++) {
        this.state.graphics.drawCircle(0, 0, radius - layer * innerRadius);
      }

      // رسم خطوط التقسيم

      for (let sector = 0; sector < 4; sector++) {
        const angle = sector * Math.PI / 2;
        this.state.graphics.moveTo(0, 0);
        this.state.graphics.lineTo(Math.cos(angle) * radius, Math.sin(angle) * radius);
      }
    }

    // إضافة النصوص

    for (let sector = 0; sector < 4; sector++) {
      const angle = sector * Math.PI / 2;
      for (let layer = 0; layer < 3; layer++) {
        const textRadius = radius - (layer * innerRadius + innerRadius / 2);
        const midAngle = angle + Math.PI / 4;
        const label = ["S", "D", "F"][layer] + (sector + 1);
        const text = new PIXI.Text(label, this.settings.sectorTextStyle);
        text.anchor.set(0.5);
        text.position.set(Math.cos(midAngle) * textRadius, Math.sin(midAngle) * textRadius);
        this.state.container.addChild(text);
        this.state.texts.push(text);
      }
    }
  },
  drawQuarters: function () {
    const radius = this.initDrawing(this.getRadius());
    if (this.settings.showLines) {
      // رسم الخطوط المتقاطعة

      this.state.graphics.moveTo(-radius, 0);
      this.state.graphics.lineTo(radius, 0);
      this.state.graphics.moveTo(0, -radius);
      this.state.graphics.lineTo(0, radius);
    }

    // إضافة نصوص الأرباع

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
    }].forEach(q => {
      const text = new PIXI.Text(q.n, this.settings.quarterTextStyle);
      text.anchor.set(0.5);
      text.position.set(q.x * radius / 3, q.y * radius / 3);
      this.state.container.addChild(text);
      this.state.texts.push(text);
    });
  },
  // ✅ دالة محسنة لتهيئة الرسوميات

  initGraphics: function () {
    if (this.state.initialized) {
      return true;
    }
    const renderContainer = this.findRenderContainer();
    if (!renderContainer) {
      return false;
    }
    try {
      this.state.container = new PIXI.Container();
      this.state.graphics = new PIXI.Graphics();
      this.state.container.addChild(this.state.graphics);
      renderContainer.addChild(this.state.container);

      // تعيين خصائص إضافية إذا كانت متاحة

      if (this.state.container.zIndex !== undefined) {
        this.state.container.zIndex = 10;
      }
      this.state.container.visible = false;
      this.state.initialized = true;
      return true;
    } catch (error) {
      return false;
    }
  },
  toggleMode: function (mode) {
    if (!this.initGraphics()) {
      return;
    }
    if (this.state.isActive && this.state.currentMode === mode) {
      // إلغاء التفعيل

      this.state.container.visible = false;
      this.state.isActive = false;
      this.state.currentMode = null;

      // تحديث الزر إذا وجد

      const toggleButton = document.getElementById("sector_system_toggle");
      if (toggleButton) {
        toggleButton.checked = false;
      }
      this.saveSettings();
      return;
    }

    // التفعيل

    this.state.isActive = true;
    this.state.currentMode = mode;
    this.state.container.visible = true;

    // تحديث الزر إذا وجد

    const toggleButton = document.getElementById("sector_system_toggle");
    if (toggleButton) {
      toggleButton.checked = true;
    }
    if (mode === "sectors") {
      this.drawSectors();
    } else {
      this.drawQuarters();
    }
    this.saveSettings();
  },
  // ✅ إعداد أحداث لوحة المفاتيح المحسن

  setupKeyboardEvents: function () {
    const keyboardHandler = event => {
      const keyCode = event.keyCode || event.which;
      const key = event.key;

      // تجنب التداخل مع حقول الإدخال

      if (event.target.tagName === "INPUT" || event.target.tagName === "TEXTAREA") {
        return;
      }

      // تجنب التداخل مع النوافذ المفتوحة

      if (event.target.closest(".wup-modal, .wormup-container")) {
        return;
      }
      const keyActions = {
        // مفتاح S أو + أو = للقطاعات

        83: () => this.toggleMode("sectors"),
        // S

        187: () => this.toggleMode("sectors"),
        // = (مع shift يصبح +)

        61: () => this.toggleMode("sectors"),
        // = (بدون shift)

        // مفتاح X للأرباع

        88: () => this.toggleMode("quarters") // X
      };
      if (keyActions[keyCode]) {
        event.preventDefault();
        keyActions[keyCode]();

        // تهيئة واجهة المستخدم إذا كانت متاحة

        if (typeof this.initUserInterface === "function") {
          this.initUserInterface();
        }
      }
    };

    // إضافة مستمع الأحداث

    document.addEventListener("keydown", keyboardHandler);
  },
  saveSettings: function () {
    try {
      const settings = {
        settings: this.settings,
        isActive: this.state.isActive,
        currentMode: this.state.currentMode
      };
      localStorage.setItem("sectorSystemSettings", JSON.stringify(settings));
    } catch (e) {}
  },
  loadSettings: function () {
    try {
      const savedData = localStorage.getItem("sectorSystemSettings");
      if (savedData) {
        const parsed = JSON.parse(savedData);
        if (parsed.settings) {
          this.settings = {
            ...this.settings,
            ...parsed.settings
          };
        }
        this.savedState = {
          isActive: parsed.isActive || false,
          currentMode: parsed.currentMode || "sectors"
        };
      }
    } catch (e) {}
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
  // ✅ دالة التهيئة الرئيسية المحسنة

  init: function () {
    // التحقق من وجود PIXI

    if (typeof PIXI === "undefined") {
      setTimeout(() => this.init(), 1000);
      return;
    }

    // تحميل الإعدادات

    this.loadSettings();

    // إعداد أحداث لوحة المفاتيح

    this.setupKeyboardEvents();

    // محاولة التهيئة المباشرة

    const initSuccess = this.initGraphics();
    if (!initSuccess) {
      setTimeout(() => this.init(), 1000);
      return;
    }

    // استعادة الحالة المحفوظة

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

        // تحديث الزر إذا وجد

        const toggleButton = document.getElementById("sector_system_toggle");
        if (toggleButton) {
          toggleButton.checked = true;
        }
        this.state.restored = true;
      }
    }, 1000);
  },
  // ✅ واجهة المستخدم المحسنة

  initUserInterface: function () {
    // التحقق من وجود jQuery

    if (typeof $ === "undefined") {
      return;
    }
    function colorToHex(color) {
      return "#" + color.toString(16).padStart(6, "0");
    }
    function hexToColor(hex) {
      return parseInt(hex.replace("#", ""), 16);
    }

    // استعادة الحالة إذا لم تكن مستعادة

    if (!this.state.restored && this.savedState && this.savedState.isActive) {
      this.toggleMode(this.savedState.currentMode || "sectors");
      this.state.restored = true;
    }

    // تحديث واجهة المستخدم

    const updateUI = () => {
      // تحديث زر التفعيل

      const toggleBtn = $("#sector_system_toggle");
      if (toggleBtn.length) {
        toggleBtn.prop("checked", this.state.isActive);
      }

      // تحديث نمط العرض

      const modeSelect = $("#sector_display_mode");
      if (modeSelect.length) {
        modeSelect.val(this.state.currentMode || "sectors");
      }

      // تحديث الألوان

      const bgColorInput = $("#sector_bg_color");
      if (bgColorInput.length) {
        bgColorInput.val(colorToHex(this.settings.backgroundColor));
      }
      const lineColorInput = $("#sector_line_color");
      if (lineColorInput.length) {
        lineColorInput.val(colorToHex(this.settings.lineColor));
      }

      // تحديث الشفافية

      const bgOpacitySlider = $("#sector_bg_opacity");
      const bgOpacityValue = $("#sector_bg_opacity_value");
      if (bgOpacitySlider.length && bgOpacityValue.length) {
        bgOpacitySlider.val(this.settings.backgroundAlpha * 100);
        bgOpacityValue.text(Math.round(this.settings.backgroundAlpha * 100) + "%");
      }
      const lineOpacitySlider = $("#sector_line_opacity");
      const lineOpacityValue = $("#sector_line_opacity_value");
      if (lineOpacitySlider.length && lineOpacityValue.length) {
        lineOpacitySlider.val(this.settings.lineAlpha * 100);
        lineOpacityValue.text(Math.round(this.settings.lineAlpha * 100) + "%");
      }

      // تحديث إظهار الخطوط

      const showLinesCheckbox = $("#sector_show_lines");
      if (showLinesCheckbox.length) {
        showLinesCheckbox.prop("checked", this.settings.showLines);
      }

      // إظهار/إخفاء لوحة الإعدادات

      const settingsPanel = $("#sector_settings_panel");
      if (settingsPanel.length) {
        if (this.state.isActive) {
          settingsPanel.slideDown(300);
        } else {
          settingsPanel.slideUp(200);
        }
      }

      // إظهار/إخفاء خيارات الخطوط

      const linesOptions = $("#sector_lines_options");
      if (linesOptions.length) {
        if (!this.settings.showLines) {
          linesOptions.slideUp(200);
        } else {
          linesOptions.slideDown(200);
        }
      }
    };

    // ربط الأحداث بـ jQuery

    $("#sector_system_toggle").off("change").on("change", e => {
      const isChecked = $(e.target).prop("checked");
      if (isChecked) {
        const mode = $("#sector_display_mode").val() || "sectors";
        this.toggleMode(mode);
      } else if (this.state.isActive) {
        this.toggleMode(this.state.currentMode);
      }
      updateUI();
    });
    $("#sector_display_mode").off("change").on("change", e => {
      const mode = $(e.target).val();
      if (this.state.isActive) {
        this.toggleMode(this.state.currentMode);
        this.toggleMode(mode);
        updateUI();
      }
    });

    // ربط أحداث الألوان والإعدادات الأخرى

    $("#sector_bg_color").off("change").on("change", e => {
      this.settings.backgroundColor = hexToColor($(e.target).val());
      this.applySettings();
      this.saveSettings();
    });
    $("#sector_line_color").off("change").on("change", e => {
      this.settings.lineColor = hexToColor($(e.target).val());
      this.applySettings();
      this.saveSettings();
    });
    $("#sector_bg_opacity").off("input").on("input", e => {
      const value = parseInt($(e.target).val()) / 100;
      this.settings.backgroundAlpha = value;
      $("#sector_bg_opacity_value").text(Math.round(value * 100) + "%");
      this.applySettings();
      this.saveSettings();
    });
    $("#sector_line_opacity").off("input").on("input", e => {
      const value = parseInt($(e.target).val()) / 100;
      this.settings.lineAlpha = value;
      $("#sector_line_opacity_value").text(Math.round(value * 100) + "%");
      this.applySettings();
      this.saveSettings();
    });
    $("#sector_show_lines").off("change").on("change", e => {
      this.settings.showLines = $(e.target).prop("checked");
      const linesOptions = $("#sector_lines_options");
      if (!this.settings.showLines) {
        linesOptions.slideUp(200);
      } else {
        linesOptions.slideDown(200);
      }
      this.applySettings();
      this.saveSettings();
    });

    // تحديث الواجهة

    updateUI();
  }
};

// تهيئة النظام عند تحميل الصفحة

setTimeout(() => {
  if (window.sectorSystem && typeof window.sectorSystem.init === "function") {
    window.sectorSystem.init();
  }
}, 1000);

// تهيئة واجهة المستخدم عند النقر على خلفيات (إذا كانت موجودة)

$(document).ready(function () {
  $(".sidebar-item[data-tab='backgrounds']").on("click", function () {
    if (window.sectorSystem && typeof window.sectorSystem.initUserInterface === "function") {
      setTimeout(() => window.sectorSystem.initUserInterface(), 100);
    }
  });
});

// إضافة دوال مساعدة عامة

window.toggleSectors = () => window.sectorSystem?.toggleMode("sectors");
window.toggleQuarters = () => window.sectorSystem?.toggleMode("quarters");
window.debugSectors = () => window.sectorSystem?.debug();
(() => {
  var vO = {
    "./node_modules/@socket.io/component-emitter/lib/esm/index.js": (p2, p3, p4) => {
      'use strict';

      p4.r(p3);
      p4.d(p3, {
        Emitter: () => f2
      });
      function f2(p5) {
        if (p5) {
          return f3(p5);
        }
      }
      function f3(p6) {
        for (var v2 in f2.prototype) {
          p6[v2] = f2.prototype[v2];
        }
        return p6;
      }
      f2.prototype.on = f2.prototype.addEventListener = function (p7, p8) {
        this._callbacks = this._callbacks || {};
        (this._callbacks["$" + p7] = this._callbacks["$" + p7] || []).push(p8);
        return this;
      };
      f2.prototype.once = function (p9, p10) {
        function f4() {
          this.off(p9, f4);
          p10.apply(this, arguments);
        }
        f4.fn = p10;
        this.on(p9, f4);
        return this;
      };
      f2.prototype.off = f2.prototype.removeListener = f2.prototype.removeAllListeners = f2.prototype.removeEventListener = function (p11, p12) {
        this._callbacks = this._callbacks || {};
        if (arguments.length == 0) {
          this._callbacks = {};
          return this;
        }
        var v3 = this._callbacks["$" + p11];
        if (!v3) {
          return this;
        }
        if (arguments.length == 1) {
          delete this._callbacks["$" + p11];
          return this;
        }
        var v4;
        for (var vLN0 = 0; vLN0 < v3.length; vLN0++) {
          v4 = v3[vLN0];
          if (v4 === p12 || v4.fn === p12) {
            v3.splice(vLN0, 1);
            break;
          }
        }
        if (v3.length === 0) {
          delete this._callbacks["$" + p11];
        }
        return this;
      };
      f2.prototype.emit = function (p13) {
        this._callbacks = this._callbacks || {};
        var v5 = new Array(arguments.length - 1);
        var v6 = this._callbacks["$" + p13];
        for (var vLN1 = 1; vLN1 < arguments.length; vLN1++) {
          v5[vLN1 - 1] = arguments[vLN1];
        }
        if (v6) {
          v6 = v6.slice(0);
          for (var vLN1 = 0, v7 = v6.length; vLN1 < v7; ++vLN1) {
            v6[vLN1].apply(this, v5);
          }
        }
        return this;
      };
      f2.prototype.emitReserved = f2.prototype.emit;
      f2.prototype.listeners = function (p14) {
        this._callbacks = this._callbacks || {};
        return this._callbacks["$" + p14] || [];
      };
      f2.prototype.hasListeners = function (p15) {
        return !!this.listeners(p15).length;
      };
    },
    "./node_modules/engine.io-client/build/esm/contrib/has-cors.js": (p16, p17, p18) => {
      'use strict';

      p18.r(p17);
      p18.d(p17, {
        hasCORS: () => vV8
      });
      let v8 = false;
      try {
        v8 = typeof XMLHttpRequest !== "undefined" && "withCredentials" in new XMLHttpRequest();
      } catch (e2) {}
      const vV8 = v8;
    },
    "./node_modules/engine.io-client/build/esm/contrib/parseqs.js": (p19, p20, p21) => {
      'use strict';

      p21.r(p20);
      p21.d(p20, {
        decode: () => f6,
        encode: () => f5
      });
      function f5(p22) {
        let vLS = "";
        for (let v9 in p22) {
          if (p22.hasOwnProperty(v9)) {
            if (vLS.length) {
              vLS += "&";
            }
            vLS += encodeURIComponent(v9) + "=" + encodeURIComponent(p22[v9]);
          }
        }
        return vLS;
      }
      function f6(p23) {
        let vO2 = {};
        let v10 = p23.split("&");
        for (let vLN02 = 0, v11 = v10.length; vLN02 < v11; vLN02++) {
          let v12 = v10[vLN02].split("=");
          vO2[decodeURIComponent(v12[0])] = decodeURIComponent(v12[1]);
        }
        return vO2;
      }
    },
    "./node_modules/engine.io-client/build/esm/contrib/parseuri.js": (p24, p25, p26) => {
      'use strict';

      p26.r(p25);
      p26.d(p25, {
        parse: () => f7
      });
      const v13 = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
      const vA = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
      function f7(p27) {
        if (p27.length > 8000) {
          throw "URI too long";
        }
        const vP27 = p27;
        const v14 = p27.indexOf("[");
        const v15 = p27.indexOf("]");
        if (v14 != -1 && v15 != -1) {
          p27 = p27.substring(0, v14) + p27.substring(v14, v15).replace(/:/g, ";") + p27.substring(v15, p27.length);
        }
        let v16 = v13.exec(p27 || "");
        let vO3 = {};
        let vLN14 = 14;
        while (vLN14--) {
          vO3[vA[vLN14]] = v16[vLN14] || "";
        }
        if (v14 != -1 && v15 != -1) {
          vO3.source = vP27;
          vO3.host = vO3.host.substring(1, vO3.host.length - 1).replace(/;/g, ":");
          vO3.authority = vO3.authority.replace("[", "").replace("]", "").replace(/;/g, ":");
          vO3.ipv6uri = true;
        }
        vO3.pathNames = f8(vO3, vO3.path);
        vO3.queryKey = f9(vO3, vO3.query);
        return vO3;
      }
      function f8(p28, p29) {
        const v17 = /\/{2,9}/g;
        const v18 = p29.replace(v17, "/").split("/");
        if (p29.slice(0, 1) == "/" || p29.length === 0) {
          v18.splice(0, 1);
        }
        if (p29.slice(-1) == "/") {
          v18.splice(v18.length - 1, 1);
        }
        return v18;
      }
      function f9(p30, p31) {
        const vO4 = {};
        p31.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function (p32, p33, p34) {
          if (p33) {
            vO4[p33] = p34;
          }
        });
        return vO4;
      }
    },
    "./node_modules/engine.io-client/build/esm/globals.js": (p35, p36, p37) => {
      'use strict';

      p37.r(p36);
      p37.d(p36, {
        createCookieJar: () => f10,
        defaultBinaryType: () => vLSArraybuffer,
        globalThisShim: () => vF2,
        nextTick: () => vF
      });
      const vF = (() => {
        const v19 = typeof Promise === "function" && typeof Promise.resolve === "function";
        if (v19) {
          return p38 => Promise.resolve().then(p38);
        } else {
          return (p39, p40) => p40(p39, 0);
        }
      })();
      const vF2 = (() => {
        if (typeof self !== "undefined") {
          return self;
        } else if (typeof window !== "undefined") {
          return window;
        } else {
          return Function("return this")();
        }
      })();
      const vLSArraybuffer = "arraybuffer";
      function f10() {}
    },
    "./node_modules/engine.io-client/build/esm/index.js": (p41, p42, p43) => {
      'use strict';

      p43.r(p42);
      p43.d(p42, {
        Fetch: () => vP437.Fetch,
        NodeWebSocket: () => vP439.WS,
        NodeXHR: () => vP438.XHR,
        Socket: () => vP43.Socket,
        SocketWithUpgrade: () => vP43.SocketWithUpgrade,
        SocketWithoutUpgrade: () => vP43.SocketWithoutUpgrade,
        Transport: () => vP432.Transport,
        TransportError: () => vP432.TransportError,
        WebSocket: () => vP439.WS,
        WebTransport: () => vP4310.WT,
        XHR: () => vP438.XHR,
        installTimerFunctions: () => vP434.installTimerFunctions,
        nextTick: () => vP436.nextTick,
        parse: () => vP435.parse,
        protocol: () => v20,
        transports: () => vP433.transports
      });
      var vP43 = p43("./node_modules/engine.io-client/build/esm/socket.js");
      var vP432 = p43("./node_modules/engine.io-client/build/esm/transport.js");
      var vP433 = p43("./node_modules/engine.io-client/build/esm/transports/index.js");
      var vP434 = p43("./node_modules/engine.io-client/build/esm/util.js");
      var vP435 = p43("./node_modules/engine.io-client/build/esm/contrib/parseuri.js");
      var vP436 = p43("./node_modules/engine.io-client/build/esm/globals.js");
      var vP437 = p43("./node_modules/engine.io-client/build/esm/transports/polling-fetch.js");
      var vP438 = p43("./node_modules/engine.io-client/build/esm/transports/polling-xhr.js");
      var vP439 = p43("./node_modules/engine.io-client/build/esm/transports/websocket.js");
      var vP4310 = p43("./node_modules/engine.io-client/build/esm/transports/webtransport.js");
      const v20 = vP43.Socket.protocol;
    },
    "./node_modules/engine.io-client/build/esm/socket.js": (p44, p45, p46) => {
      'use strict';

      p46.r(p45);
      p46.d(p45, {
        Socket: () => C3,
        SocketWithUpgrade: () => C2,
        SocketWithoutUpgrade: () => C
      });
      var vP46 = p46("./node_modules/engine.io-client/build/esm/transports/index.js");
      var vP462 = p46("./node_modules/engine.io-client/build/esm/util.js");
      var vP463 = p46("./node_modules/engine.io-client/build/esm/contrib/parseqs.js");
      var vP464 = p46("./node_modules/engine.io-client/build/esm/contrib/parseuri.js");
      var vP465 = p46("./node_modules/@socket.io/component-emitter/lib/esm/index.js");
      var vP466 = p46("./node_modules/engine.io-parser/build/esm/index.js");
      var vP467 = p46("./node_modules/engine.io-client/build/esm/globals.js");
      const v21 = typeof addEventListener === "function" && typeof removeEventListener === "function";
      const vA2 = [];
      if (v21) {
        addEventListener("offline", () => {
          vA2.forEach(p47 => p47());
        }, false);
      }
      class C extends vP465.Emitter {
        constructor(p48, p49) {
          super();
          this.binaryType = vP467.defaultBinaryType;
          this.writeBuffer = [];
          this._prevBufferLen = 0;
          this._pingInterval = -1;
          this._pingTimeout = -1;
          this._maxPayload = -1;
          this._pingTimeoutTime = Infinity;
          if (p48 && typeof p48 === "object") {
            p49 = p48;
            p48 = null;
          }
          if (p48) {
            const v22 = (0, vP464.parse)(p48);
            p49.hostname = v22.host;
            p49.secure = v22.protocol === "https" || v22.protocol === "wss";
            p49.port = v22.port;
            if (v22.query) {
              p49.query = v22.query;
            }
          } else if (p49.host) {
            p49.hostname = (0, vP464.parse)(p49.host).host;
          }
          (0, vP462.installTimerFunctions)(this, p49);
          this.secure = p49.secure ?? (typeof location !== "undefined" && location.protocol === "https:");
          if (p49.hostname && !p49.port) {
            p49.port = this.secure ? "443" : "80";
          }
          this.hostname = p49.hostname || (typeof location !== "undefined" ? location.hostname : "localhost");
          this.port = p49.port || (typeof location !== "undefined" && location.port ? location.port : this.secure ? "443" : "80");
          this.transports = [];
          this._transportsByName = {};
          p49.transports.forEach(p50 => {
            const v23 = p50.prototype.name;
            this.transports.push(v23);
            this._transportsByName[v23] = p50;
          });
          this.opts = Object.assign({
            path: "/engine.io",
            agent: false,
            withCredentials: false,
            upgrade: true,
            timestampParam: "t",
            rememberUpgrade: false,
            addTrailingSlash: true,
            rejectUnauthorized: true,
            perMessageDeflate: {
              threshold: 1024
            },
            transportOptions: {},
            closeOnBeforeunload: false
          }, p49);
          this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : "");
          if (typeof this.opts.query === "string") {
            this.opts.query = (0, vP463.decode)(this.opts.query);
          }
          if (v21) {
            if (this.opts.closeOnBeforeunload) {
              this._beforeunloadEventListener = () => {
                if (this.transport) {
                  this.transport.removeAllListeners();
                  this.transport.close();
                }
              };
              addEventListener("beforeunload", this._beforeunloadEventListener, false);
            }
            if (this.hostname !== "localhost") {
              this._offlineEventListener = () => {
                this._onClose("transport close", {
                  description: "network connection lost"
                });
              };
              vA2.push(this._offlineEventListener);
            }
          }
          if (this.opts.withCredentials) {
            this._cookieJar = (0, vP467.createCookieJar)();
          }
          this._open();
        }
        createTransport(p51) {
          const v24 = Object.assign({}, this.opts.query);
          v24.EIO = vP466.protocol;
          v24.transport = p51;
          if (this.id) {
            v24.sid = this.id;
          }
          const v25 = Object.assign({}, this.opts, {
            query: v24,
            socket: this,
            hostname: this.hostname,
            secure: this.secure,
            port: this.port
          }, this.opts.transportOptions[p51]);
          return new this._transportsByName[p51](v25);
        }
        _open() {
          if (this.transports.length === 0) {
            this.setTimeoutFn(() => {
              this.emitReserved("error", "No transports available");
            }, 0);
            return;
          }
          const v26 = this.opts.rememberUpgrade && C.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
          this.readyState = "opening";
          const v27 = this.createTransport(v26);
          v27.open();
          this.setTransport(v27);
        }
        setTransport(p52) {
          if (this.transport) {
            this.transport.removeAllListeners();
          }
          this.transport = p52;
          p52.on("drain", this._onDrain.bind(this)).on("packet", this._onPacket.bind(this)).on("error", this._onError.bind(this)).on("close", p53 => this._onClose("transport close", p53));
        }
        onOpen() {
          this.readyState = "open";
          C.priorWebsocketSuccess = this.transport.name === "websocket";
          this.emitReserved("open");
          this.flush();
        }
        _onPacket(p54) {
          if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") {
            this.emitReserved("packet", p54);
            this.emitReserved("heartbeat");
            switch (p54.type) {
              case "open":
                this.onHandshake(JSON.parse(p54.data));
                break;
              case "ping":
                this._sendPacket("pong");
                this.emitReserved("ping");
                this.emitReserved("pong");
                this._resetPingTimeout();
                break;
              case "error":
                const v28 = new Error("server error");
                v28.code = p54.data;
                this._onError(v28);
                break;
              case "message":
                this.emitReserved("data", p54.data);
                this.emitReserved("message", p54.data);
                break;
            }
          } else {}
        }
        onHandshake(p55) {
          this.emitReserved("handshake", p55);
          this.id = p55.sid;
          this.transport.query.sid = p55.sid;
          this._pingInterval = p55.pingInterval;
          this._pingTimeout = p55.pingTimeout;
          this._maxPayload = p55.maxPayload;
          this.onOpen();
          if (this.readyState === "closed") {
            return;
          }
          this._resetPingTimeout();
        }
        _resetPingTimeout() {
          this.clearTimeoutFn(this._pingTimeoutTimer);
          const v29 = this._pingInterval + this._pingTimeout;
          this._pingTimeoutTime = Date.now() + v29;
          this._pingTimeoutTimer = this.setTimeoutFn(() => {
            this._onClose("ping timeout");
          }, v29);
          if (this.opts.autoUnref) {
            this._pingTimeoutTimer.unref();
          }
        }
        _onDrain() {
          this.writeBuffer.splice(0, this._prevBufferLen);
          this._prevBufferLen = 0;
          if (this.writeBuffer.length === 0) {
            this.emitReserved("drain");
          } else {
            this.flush();
          }
        }
        flush() {
          if (this.readyState !== "closed" && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
            const v30 = this._getWritablePackets();
            this.transport.send(v30);
            this._prevBufferLen = v30.length;
            this.emitReserved("flush");
          }
        }
        _getWritablePackets() {
          const v31 = this._maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1;
          if (!v31) {
            return this.writeBuffer;
          }
          let vLN12 = 1;
          for (let vLN03 = 0; vLN03 < this.writeBuffer.length; vLN03++) {
            const v32 = this.writeBuffer[vLN03].data;
            if (v32) {
              vLN12 += (0, vP462.byteLength)(v32);
            }
            if (vLN03 > 0 && vLN12 > this._maxPayload) {
              return this.writeBuffer.slice(0, vLN03);
            }
            vLN12 += 2;
          }
          return this.writeBuffer;
        }
        _hasPingExpired() {
          if (!this._pingTimeoutTime) {
            return true;
          }
          const v33 = Date.now() > this._pingTimeoutTime;
          if (v33) {
            this._pingTimeoutTime = 0;
            (0, vP467.nextTick)(() => {
              this._onClose("ping timeout");
            }, this.setTimeoutFn);
          }
          return v33;
        }
        write(p56, p57, p58) {
          this._sendPacket("message", p56, p57, p58);
          return this;
        }
        send(p59, p60, p61) {
          this._sendPacket("message", p59, p60, p61);
          return this;
        }
        _sendPacket(p62, p63, p64, p65) {
          if (typeof p63 === "function") {
            p65 = p63;
            p63 = undefined;
          }
          if (typeof p64 === "function") {
            p65 = p64;
            p64 = null;
          }
          if (this.readyState === "closing" || this.readyState === "closed") {
            return;
          }
          p64 = p64 || {};
          p64.compress = p64.compress !== false;
          const vO5 = {
            type: p62,
            data: p63,
            options: p64
          };
          this.emitReserved("packetCreate", vO5);
          this.writeBuffer.push(vO5);
          if (p65) {
            this.once("flush", p65);
          }
          this.flush();
        }
        close() {
          const vF3 = () => {
            this._onClose("forced close");
            this.transport.close();
          };
          const vF4 = () => {
            this.off("upgrade", vF4);
            this.off("upgradeError", vF4);
            vF3();
          };
          const vF5 = () => {
            this.once("upgrade", vF4);
            this.once("upgradeError", vF4);
          };
          if (this.readyState === "opening" || this.readyState === "open") {
            this.readyState = "closing";
            if (this.writeBuffer.length) {
              this.once("drain", () => {
                if (this.upgrading) {
                  vF5();
                } else {
                  vF3();
                }
              });
            } else if (this.upgrading) {
              vF5();
            } else {
              vF3();
            }
          }
          return this;
        }
        _onError(p66) {
          C.priorWebsocketSuccess = false;
          if (this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening") {
            this.transports.shift();
            return this._open();
          }
          this.emitReserved("error", p66);
          this._onClose("transport error", p66);
        }
        _onClose(p67, p68) {
          if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") {
            this.clearTimeoutFn(this._pingTimeoutTimer);
            this.transport.removeAllListeners("close");
            this.transport.close();
            this.transport.removeAllListeners();
            if (v21) {
              if (this._beforeunloadEventListener) {
                removeEventListener("beforeunload", this._beforeunloadEventListener, false);
              }
              if (this._offlineEventListener) {
                const v34 = vA2.indexOf(this._offlineEventListener);
                if (v34 !== -1) {
                  vA2.splice(v34, 1);
                }
              }
            }
            this.readyState = "closed";
            this.id = null;
            this.emitReserved("close", p67, p68);
            this.writeBuffer = [];
            this._prevBufferLen = 0;
          }
        }
      }
      C.protocol = vP466.protocol;
      class C2 extends C {
        constructor() {
          super(...arguments);
          this._upgrades = [];
        }
        onOpen() {
          super.onOpen();
          if (this.readyState === "open" && this.opts.upgrade) {
            for (let vLN04 = 0; vLN04 < this._upgrades.length; vLN04++) {
              this._probe(this._upgrades[vLN04]);
            }
          }
        }
        _probe(p69) {
          let v35 = this.createTransport(p69);
          let v36 = false;
          C.priorWebsocketSuccess = false;
          const vF6 = () => {
            if (v36) {
              return;
            }
            v35.send([{
              type: "ping",
              data: "probe"
            }]);
            v35.once("packet", p70 => {
              if (v36) {
                return;
              }
              if (p70.type === "pong" && p70.data === "probe") {
                this.upgrading = true;
                this.emitReserved("upgrading", v35);
                if (!v35) {
                  return;
                }
                C.priorWebsocketSuccess = v35.name === "websocket";
                this.transport.pause(() => {
                  if (v36) {
                    return;
                  }
                  if (this.readyState === "closed") {
                    return;
                  }
                  vF8();
                  this.setTransport(v35);
                  v35.send([{
                    type: "upgrade"
                  }]);
                  this.emitReserved("upgrade", v35);
                  v35 = null;
                  this.upgrading = false;
                  this.flush();
                });
              } else {
                const v37 = new Error("probe error");
                v37.transport = v35.name;
                this.emitReserved("upgradeError", v37);
              }
            });
          };
          function f11() {
            if (v36) {
              return;
            }
            v36 = true;
            vF8();
            v35.close();
            v35 = null;
          }
          const vF7 = p71 => {
            const v38 = new Error("probe error: " + p71);
            v38.transport = v35.name;
            f11();
            this.emitReserved("upgradeError", v38);
          };
          function f12() {
            vF7("transport closed");
          }
          function f13() {
            vF7("socket closed");
          }
          function f14(p72) {
            if (v35 && p72.name !== v35.name) {
              f11();
            }
          }
          const vF8 = () => {
            v35.removeListener("open", vF6);
            v35.removeListener("error", vF7);
            v35.removeListener("close", f12);
            this.off("close", f13);
            this.off("upgrading", f14);
          };
          v35.once("open", vF6);
          v35.once("error", vF7);
          v35.once("close", f12);
          this.once("close", f13);
          this.once("upgrading", f14);
          if (this._upgrades.indexOf("webtransport") !== -1 && p69 !== "webtransport") {
            this.setTimeoutFn(() => {
              if (!v36) {
                v35.open();
              }
            }, 200);
          } else {
            v35.open();
          }
        }
        onHandshake(p73) {
          this._upgrades = this._filterUpgrades(p73.upgrades);
          super.onHandshake(p73);
        }
        _filterUpgrades(p74) {
          const vA3 = [];
          for (let vLN05 = 0; vLN05 < p74.length; vLN05++) {
            if (~this.transports.indexOf(p74[vLN05])) {
              vA3.push(p74[vLN05]);
            }
          }
          return vA3;
        }
      }
      class C3 extends C2 {
        constructor(p75, p76 = {}) {
          const v39 = typeof p75 === "object" ? p75 : p76;
          if (!v39.transports || v39.transports && typeof v39.transports[0] === "string") {
            v39.transports = (v39.transports || ["polling", "websocket", "webtransport"]).map(p77 => vP46.transports[p77]).filter(p78 => !!p78);
          }
          super(p75, v39);
        }
      }
    },
    "./node_modules/engine.io-client/build/esm/transport.js": (p79, p80, p81) => {
      'use strict';

      p81.r(p80);
      p81.d(p80, {
        Transport: () => C5,
        TransportError: () => C4
      });
      var vP81 = p81("./node_modules/engine.io-parser/build/esm/index.js");
      var vP812 = p81("./node_modules/@socket.io/component-emitter/lib/esm/index.js");
      var vP813 = p81("./node_modules/engine.io-client/build/esm/util.js");
      var vP814 = p81("./node_modules/engine.io-client/build/esm/contrib/parseqs.js");
      class C4 extends Error {
        constructor(p82, p83, p84) {
          super(p82);
          this.description = p83;
          this.context = p84;
          this.type = "TransportError";
        }
      }
      class C5 extends vP812.Emitter {
        constructor(p85) {
          super();
          this.writable = false;
          (0, vP813.installTimerFunctions)(this, p85);
          this.opts = p85;
          this.query = p85.query;
          this.socket = p85.socket;
          this.supportsBinary = !p85.forceBase64;
        }
        onError(p86, p87, p88) {
          super.emitReserved("error", new C4(p86, p87, p88));
          return this;
        }
        open() {
          this.readyState = "opening";
          this.doOpen();
          return this;
        }
        close() {
          if (this.readyState === "opening" || this.readyState === "open") {
            this.doClose();
            this.onClose();
          }
          return this;
        }
        send(p89) {
          if (this.readyState === "open") {
            this.write(p89);
          } else {}
        }
        onOpen() {
          this.readyState = "open";
          this.writable = true;
          super.emitReserved("open");
        }
        onData(p90) {
          const v40 = (0, vP81.decodePacket)(p90, this.socket.binaryType);
          this.onPacket(v40);
        }
        onPacket(p91) {
          super.emitReserved("packet", p91);
        }
        onClose(p92) {
          this.readyState = "closed";
          super.emitReserved("close", p92);
        }
        pause(p93) {}
        createUri(p94, p95 = {}) {
          return p94 + "://" + this._hostname() + this._port() + this.opts.path + this._query(p95);
        }
        _hostname() {
          const v41 = this.opts.hostname;
          if (v41.indexOf(":") === -1) {
            return v41;
          } else {
            return "[" + v41 + "]";
          }
        }
        _port() {
          if (this.opts.port && (this.opts.secure && Number(this.opts.port !== 443) || !this.opts.secure && Number(this.opts.port) !== 80)) {
            return ":" + this.opts.port;
          } else {
            return "";
          }
        }
        _query(p96) {
          const v42 = (0, vP814.encode)(p96);
          if (v42.length) {
            return "?" + v42;
          } else {
            return "";
          }
        }
      }
    },
    "./node_modules/engine.io-client/build/esm/transports/index.js": (p97, p98, p99) => {
      'use strict';

      p99.r(p98);
      p99.d(p98, {
        transports: () => vO6
      });
      var vP99 = p99("./node_modules/engine.io-client/build/esm/transports/polling-xhr.js");
      var vP992 = p99("./node_modules/engine.io-client/build/esm/transports/websocket.js");
      var vP993 = p99("./node_modules/engine.io-client/build/esm/transports/webtransport.js");
      const vO6 = {
        websocket: vP992.WS,
        webtransport: vP993.WT,
        polling: vP99.XHR
      };
    },
    "./node_modules/engine.io-client/build/esm/transports/polling-fetch.js": (p100, p101, p102) => {
      'use strict';

      p102.r(p101);
      p102.d(p101, {
        Fetch: () => C6
      });
      var vP102 = p102("./node_modules/engine.io-client/build/esm/transports/polling.js");
      class C6 extends vP102.Polling {
        doPoll() {
          this._fetch().then(p103 => {
            if (!p103.ok) {
              return this.onError("fetch read error", p103.status, p103);
            }
            p103.text().then(p104 => this.onData(p104));
          }).catch(p105 => {
            this.onError("fetch read error", p105);
          });
        }
        doWrite(p106, p107) {
          this._fetch(p106).then(p108 => {
            if (!p108.ok) {
              return this.onError("fetch write error", p108.status, p108);
            }
            p107();
          }).catch(p109 => {
            this.onError("fetch write error", p109);
          });
        }
        _fetch(p110) {
          var v43;
          const v44 = p110 !== undefined;
          const v45 = new Headers(this.opts.extraHeaders);
          if (v44) {
            v45.set("content-type", "text/plain;charset=UTF-8");
          }
          if ((v43 = this.socket._cookieJar) === null || v43 === undefined) {
            undefined;
          } else {
            v43.appendCookies(v45);
          }
          return fetch(this.uri(), {
            method: v44 ? "POST" : "GET",
            body: v44 ? p110 : null,
            headers: v45,
            credentials: this.opts.withCredentials ? "include" : "omit"
          }).then(p111 => {
            var v46;
            if ((v46 = this.socket._cookieJar) === null || v46 === undefined) {
              undefined;
            } else {
              v46.parseCookies(p111.headers.getSetCookie());
            }
            return p111;
          });
        }
      }
    },
    "./node_modules/engine.io-client/build/esm/transports/polling-xhr.js": (p112, p113, p114) => {
      'use strict';

      p114.r(p113);
      p114.d(p113, {
        BaseXHR: () => C7,
        Request: () => C8,
        XHR: () => C9
      });
      var vP114 = p114("./node_modules/engine.io-client/build/esm/transports/polling.js");
      var vP1142 = p114("./node_modules/@socket.io/component-emitter/lib/esm/index.js");
      var vP1143 = p114("./node_modules/engine.io-client/build/esm/util.js");
      var vP1144 = p114("./node_modules/engine.io-client/build/esm/globals.js");
      var vP1145 = p114("./node_modules/engine.io-client/build/esm/contrib/has-cors.js");
      function f15() {}
      class C7 extends vP114.Polling {
        constructor(p115) {
          super(p115);
          if (typeof location !== "undefined") {
            const v47 = location.protocol === "https:";
            let v48 = location.port;
            if (!v48) {
              v48 = v47 ? "443" : "80";
            }
            this.xd = typeof location !== "undefined" && p115.hostname !== location.hostname || v48 !== p115.port;
          }
        }
        doWrite(p116, p117) {
          const v49 = this.request({
            method: "POST",
            data: p116
          });
          v49.on("success", p117);
          v49.on("error", (p118, p119) => {
            this.onError("xhr post error", p118, p119);
          });
        }
        doPoll() {
          const v50 = this.request();
          v50.on("data", this.onData.bind(this));
          v50.on("error", (p120, p121) => {
            this.onError("xhr poll error", p120, p121);
          });
          this.pollXhr = v50;
        }
      }
      class C8 extends vP1142.Emitter {
        constructor(p122, p123, p124) {
          super();
          this.createRequest = p122;
          (0, vP1143.installTimerFunctions)(this, p124);
          this._opts = p124;
          this._method = p124.method || "GET";
          this._uri = p123;
          this._data = p124.data !== undefined ? p124.data : null;
          this._create();
        }
        _create() {
          var v51;
          const v52 = (0, vP1143.pick)(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
          v52.xdomain = !!this._opts.xd;
          const v53 = this._xhr = this.createRequest(v52);
          try {
            v53.open(this._method, this._uri, true);
            try {
              if (this._opts.extraHeaders) {
                if (v53.setDisableHeaderCheck) {
                  v53.setDisableHeaderCheck(true);
                }
                for (let v54 in this._opts.extraHeaders) {
                  if (this._opts.extraHeaders.hasOwnProperty(v54)) {
                    v53.setRequestHeader(v54, this._opts.extraHeaders[v54]);
                  }
                }
              }
            } catch (e3) {}
            if (this._method === "POST") {
              try {
                v53.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
              } catch (e4) {}
            }
            try {
              v53.setRequestHeader("Accept", "*/*");
            } catch (e5) {}
            if ((v51 = this._opts.cookieJar) === null || v51 === undefined) {
              undefined;
            } else {
              v51.addCookies(v53);
            }
            if ("withCredentials" in v53) {
              v53.withCredentials = this._opts.withCredentials;
            }
            if (this._opts.requestTimeout) {
              v53.timeout = this._opts.requestTimeout;
            }
            v53.onreadystatechange = () => {
              var v55;
              if (v53.readyState === 3) {
                if ((v55 = this._opts.cookieJar) === null || v55 === undefined) {
                  undefined;
                } else {
                  v55.parseCookies(v53.getResponseHeader("set-cookie"));
                }
              }
              if (v53.readyState !== 4) {
                return;
              }
              if (v53.status === 200 || v53.status === 1223) {
                this._onLoad();
              } else {
                this.setTimeoutFn(() => {
                  this._onError(typeof v53.status === "number" ? v53.status : 0);
                }, 0);
              }
            };
            v53.send(this._data);
          } catch (e6) {
            this.setTimeoutFn(() => {
              this._onError(e6);
            }, 0);
            return;
          }
          if (typeof document !== "undefined") {
            this._index = C8.requestsCount++;
            C8.requests[this._index] = this;
          }
        }
        _onError(p125) {
          this.emitReserved("error", p125, this._xhr);
          this._cleanup(true);
        }
        _cleanup(p126) {
          if (typeof this._xhr === "undefined" || this._xhr === null) {
            return;
          }
          this._xhr.onreadystatechange = f15;
          if (p126) {
            try {
              this._xhr.abort();
            } catch (e7) {}
          }
          if (typeof document !== "undefined") {
            delete C8.requests[this._index];
          }
          this._xhr = null;
        }
        _onLoad() {
          const v56 = this._xhr.responseText;
          if (v56 !== null) {
            this.emitReserved("data", v56);
            this.emitReserved("success");
            this._cleanup();
          }
        }
        abort() {
          this._cleanup();
        }
      }
      C8.requestsCount = 0;
      C8.requests = {};
      if (typeof document !== "undefined") {
        if (typeof attachEvent === "function") {
          attachEvent("onunload", f16);
        } else if (typeof addEventListener === "function") {
          const v57 = "onpagehide" in vP1144.globalThisShim ? "pagehide" : "unload";
          addEventListener(v57, f16, false);
        }
      }
      function f16() {
        for (let v58 in C8.requests) {
          if (C8.requests.hasOwnProperty(v58)) {
            C8.requests[v58].abort();
          }
        }
      }
      const vF9 = function () {
        const v_0x32dc9f = f17({
          xdomain: false
        });
        return v_0x32dc9f && v_0x32dc9f.responseType !== null;
      }();
      class C9 extends C7 {
        constructor(p127) {
          super(p127);
          const v59 = p127 && p127.forceBase64;
          this.supportsBinary = vF9 && !v59;
        }
        request(p128 = {}) {
          Object.assign(p128, {
            xd: this.xd
          }, this.opts);
          return new C8(f17, this.uri(), p128);
        }
      }
      function f17(p129) {
        const v60 = p129.xdomain;
        try {
          if (typeof XMLHttpRequest !== "undefined" && (!v60 || vP1145.hasCORS)) {
            return new XMLHttpRequest();
          }
        } catch (e8) {}
        if (!v60) {
          try {
            return new vP1144.globalThisShim[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
          } catch (e9) {}
        }
      }
    },
    "./node_modules/engine.io-client/build/esm/transports/polling.js": (p130, p131, p132) => {
      'use strict';

      p132.r(p131);
      p132.d(p131, {
        Polling: () => C10
      });
      var vP132 = p132("./node_modules/engine.io-client/build/esm/transport.js");
      var vP1322 = p132("./node_modules/engine.io-client/build/esm/util.js");
      var vP1323 = p132("./node_modules/engine.io-parser/build/esm/index.js");
      class C10 extends vP132.Transport {
        constructor() {
          super(...arguments);
          this._polling = false;
        }
        get name() {
          return "polling";
        }
        doOpen() {
          this._poll();
        }
        pause(p133) {
          this.readyState = "pausing";
          const vF10 = () => {
            this.readyState = "paused";
            p133();
          };
          if (this._polling || !this.writable) {
            let vLN06 = 0;
            if (this._polling) {
              vLN06++;
              this.once("pollComplete", function () {
                if (! --vLN06) {
                  vF10();
                }
              });
            }
            if (!this.writable) {
              vLN06++;
              this.once("drain", function () {
                if (! --vLN06) {
                  vF10();
                }
              });
            }
          } else {
            vF10();
          }
        }
        _poll() {
          this._polling = true;
          this.doPoll();
          this.emitReserved("poll");
        }
        onData(p134) {
          const vF11 = p135 => {
            if (this.readyState === "opening" && p135.type === "open") {
              this.onOpen();
            }
            if (p135.type === "close") {
              this.onClose({
                description: "transport closed by the server"
              });
              return false;
            }
            this.onPacket(p135);
          };
          (0, vP1323.decodePayload)(p134, this.socket.binaryType).forEach(vF11);
          if (this.readyState !== "closed") {
            this._polling = false;
            this.emitReserved("pollComplete");
            if (this.readyState === "open") {
              this._poll();
            } else {}
          }
        }
        doClose() {
          const vF12 = () => {
            this.write([{
              type: "close"
            }]);
          };
          if (this.readyState === "open") {
            vF12();
          } else {
            this.once("open", vF12);
          }
        }
        write(p136) {
          this.writable = false;
          (0, vP1323.encodePayload)(p136, p137 => {
            this.doWrite(p137, () => {
              this.writable = true;
              this.emitReserved("drain");
            });
          });
        }
        uri() {
          const v61 = this.opts.secure ? "https" : "http";
          const v62 = this.query || {};
          if (this.opts.timestampRequests !== false) {
            v62[this.opts.timestampParam] = (0, vP1322.randomString)();
          }
          if (!this.supportsBinary && !v62.sid) {
            v62.b64 = 1;
          }
          return this.createUri(v61, v62);
        }
      }
    },
    "./node_modules/engine.io-client/build/esm/transports/websocket.js": (p138, p139, p140) => {
      'use strict';

      p140.r(p139);
      p140.d(p139, {
        BaseWS: () => C11,
        WS: () => C12
      });
      var vP140 = p140("./node_modules/engine.io-client/build/esm/transport.js");
      var vP1402 = p140("./node_modules/engine.io-client/build/esm/util.js");
      var vP1403 = p140("./node_modules/engine.io-parser/build/esm/index.js");
      var vP1404 = p140("./node_modules/engine.io-client/build/esm/globals.js");
      const v63 = typeof navigator !== "undefined" && typeof navigator.product === "string" && navigator.product.toLowerCase() === "reactnative";
      class C11 extends vP140.Transport {
        get name() {
          return "websocket";
        }
        doOpen() {
          const v64 = this.uri();
          const v65 = this.opts.protocols;
          const v66 = v63 ? {} : (0, vP1402.pick)(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
          if (this.opts.extraHeaders) {
            v66.headers = this.opts.extraHeaders;
          }
          try {
            this.ws = this.createSocket(v64, v65, v66);
          } catch (e10) {
            return this.emitReserved("error", e10);
          }
          this.ws.binaryType = this.socket.binaryType;
          this.addEventListeners();
        }
        addEventListeners() {
          this.ws.onopen = () => {
            if (this.opts.autoUnref) {
              this.ws._socket.unref();
            }
            this.onOpen();
          };
          this.ws.onclose = p141 => this.onClose({
            description: "websocket connection closed",
            context: p141
          });
          this.ws.onmessage = p142 => this.onData(p142.data);
          this.ws.onerror = p143 => this.onError("websocket error", p143);
        }
        write(p144) {
          this.writable = false;
          for (let vLN07 = 0; vLN07 < p144.length; vLN07++) {
            const v67 = p144[vLN07];
            const v68 = vLN07 === p144.length - 1;
            (0, vP1403.encodePacket)(v67, this.supportsBinary, p145 => {
              try {
                this.doWrite(v67, p145);
              } catch (e11) {}
              if (v68) {
                (0, vP1404.nextTick)(() => {
                  this.writable = true;
                  this.emitReserved("drain");
                }, this.setTimeoutFn);
              }
            });
          }
        }
        doClose() {
          if (typeof this.ws !== "undefined") {
            this.ws.onerror = () => {};
            this.ws.close();
            this.ws = null;
          }
        }
        uri() {
          const v69 = this.opts.secure ? "wss" : "ws";
          const v70 = this.query || {};
          if (this.opts.timestampRequests) {
            v70[this.opts.timestampParam] = (0, vP1402.randomString)();
          }
          if (!this.supportsBinary) {
            v70.b64 = 1;
          }
          return this.createUri(v69, v70);
        }
      }
      const v71 = vP1404.globalThisShim.WebSocket || vP1404.globalThisShim.MozWebSocket;
      class C12 extends C11 {
        createSocket(p146, p147, p148) {
          if (!v63) {
            if (p147) {
              return new v71(p146, p147);
            } else {
              return new v71(p146);
            }
          } else {
            return new v71(p146, p147, p148);
          }
        }
        doWrite(p149, p150) {
          this.ws.send(p150);
        }
      }
    },
    "./node_modules/engine.io-client/build/esm/transports/webtransport.js": (p151, p152, p153) => {
      'use strict';

      p153.r(p152);
      p153.d(p152, {
        WT: () => C13
      });
      var vP153 = p153("./node_modules/engine.io-client/build/esm/transport.js");
      var vP1532 = p153("./node_modules/engine.io-client/build/esm/globals.js");
      var vP1533 = p153("./node_modules/engine.io-parser/build/esm/index.js");
      class C13 extends vP153.Transport {
        get name() {
          return "webtransport";
        }
        doOpen() {
          try {
            this._transport = new WebTransport(this.createUri("https"), this.opts.transportOptions[this.name]);
          } catch (e12) {
            return this.emitReserved("error", e12);
          }
          this._transport.closed.then(() => {
            this.onClose();
          }).catch(p154 => {
            this.onError("webtransport error", p154);
          });
          this._transport.ready.then(() => {
            this._transport.createBidirectionalStream().then(p155 => {
              const v72 = (0, vP1533.createPacketDecoderStream)(Number.MAX_SAFE_INTEGER, this.socket.binaryType);
              const v73 = p155.readable.pipeThrough(v72).getReader();
              const v74 = (0, vP1533.createPacketEncoderStream)();
              v74.readable.pipeTo(p155.writable);
              this._writer = v74.writable.getWriter();
              const vF13 = () => {
                v73.read().then(({
                  done: _0x14e5be,
                  value: _0x1704a5
                }) => {
                  if (_0x14e5be) {
                    return;
                  }
                  this.onPacket(_0x1704a5);
                  vF13();
                }).catch(p156 => {});
              };
              vF13();
              const vO7 = {
                type: "open"
              };
              if (this.query.sid) {
                vO7.data = "{\"sid\":\"" + this.query.sid + "\"}";
              }
              this._writer.write(vO7).then(() => this.onOpen());
            });
          });
        }
        write(p157) {
          this.writable = false;
          for (let vLN08 = 0; vLN08 < p157.length; vLN08++) {
            const v75 = p157[vLN08];
            const v76 = vLN08 === p157.length - 1;
            this._writer.write(v75).then(() => {
              if (v76) {
                (0, vP1532.nextTick)(() => {
                  this.writable = true;
                  this.emitReserved("drain");
                }, this.setTimeoutFn);
              }
            });
          }
        }
        doClose() {
          var v77;
          if ((v77 = this._transport) === null || v77 === undefined) {
            undefined;
          } else {
            v77.close();
          }
        }
      }
    },
    "./node_modules/engine.io-client/build/esm/util.js": (p158, p159, p160) => {
      'use strict';

      p160.r(p159);
      p160.d(p159, {
        byteLength: () => f20,
        installTimerFunctions: () => f19,
        pick: () => f18,
        randomString: () => f22
      });
      var vP160 = p160("./node_modules/engine.io-client/build/esm/globals.js");
      function f18(p161, ..._0x2bf8de) {
        return _0x2bf8de.reduce((p162, p163) => {
          if (p161.hasOwnProperty(p163)) {
            p162[p163] = p161[p163];
          }
          return p162;
        }, {});
      }
      const v78 = vP160.globalThisShim.setTimeout;
      const v79 = vP160.globalThisShim.clearTimeout;
      function f19(p164, p165) {
        if (p165.useNativeTimers) {
          p164.setTimeoutFn = v78.bind(vP160.globalThisShim);
          p164.clearTimeoutFn = v79.bind(vP160.globalThisShim);
        } else {
          p164.setTimeoutFn = vP160.globalThisShim.setTimeout.bind(vP160.globalThisShim);
          p164.clearTimeoutFn = vP160.globalThisShim.clearTimeout.bind(vP160.globalThisShim);
        }
      }
      const vLN133 = 1.33;
      function f20(p166) {
        if (typeof p166 === "string") {
          return f21(p166);
        }
        return Math.ceil((p166.byteLength || p166.size) * vLN133);
      }
      function f21(p167) {
        let vLN09 = 0;
        let vLN010 = 0;
        for (let vLN011 = 0, v80 = p167.length; vLN011 < v80; vLN011++) {
          vLN09 = p167.charCodeAt(vLN011);
          if (vLN09 < 128) {
            vLN010 += 1;
          } else if (vLN09 < 2048) {
            vLN010 += 2;
          } else if (vLN09 < 55296 || vLN09 >= 57344) {
            vLN010 += 3;
          } else {
            vLN011++;
            vLN010 += 4;
          }
        }
        return vLN010;
      }
      function f22() {
        return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5);
      }
    },
    "./node_modules/engine.io-parser/build/esm/commons.js": (p168, p169, p170) => {
      'use strict';

      p170.r(p169);
      p170.d(p169, {
        ERROR_PACKET: () => vO8,
        PACKET_TYPES: () => v81,
        PACKET_TYPES_REVERSE: () => v82
      });
      const v81 = Object.create(null);
      v81.open = "0";
      v81.close = "1";
      v81.ping = "2";
      v81.pong = "3";
      v81.message = "4";
      v81.upgrade = "5";
      v81.noop = "6";
      const v82 = Object.create(null);
      Object.keys(v81).forEach(p171 => {
        v82[v81[p171]] = p171;
      });
      const vO8 = {
        type: "error",
        data: "parser error"
      };
    },
    "./node_modules/engine.io-parser/build/esm/contrib/base64-arraybuffer.js": (p172, p173, p174) => {
      'use strict';

      p174.r(p173);
      p174.d(p173, {
        decode: () => vF15,
        encode: () => vF14
      });
      const vLSABCDEFGHIJKLMNOPQRST = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
      const v83 = typeof Uint8Array === "undefined" ? [] : new Uint8Array(256);
      for (let vLN012 = 0; vLN012 < vLSABCDEFGHIJKLMNOPQRST.length; vLN012++) {
        v83[vLSABCDEFGHIJKLMNOPQRST.charCodeAt(vLN012)] = vLN012;
      }
      const vF14 = p175 => {
        let v84 = new Uint8Array(p175);
        let v85;
        let v86 = v84.length;
        let vLS2 = "";
        for (v85 = 0; v85 < v86; v85 += 3) {
          vLS2 += vLSABCDEFGHIJKLMNOPQRST[v84[v85] >> 2];
          vLS2 += vLSABCDEFGHIJKLMNOPQRST[(v84[v85] & 3) << 4 | v84[v85 + 1] >> 4];
          vLS2 += vLSABCDEFGHIJKLMNOPQRST[(v84[v85 + 1] & 15) << 2 | v84[v85 + 2] >> 6];
          vLS2 += vLSABCDEFGHIJKLMNOPQRST[v84[v85 + 2] & 63];
        }
        if (v86 % 3 === 2) {
          vLS2 = vLS2.substring(0, vLS2.length - 1) + "=";
        } else if (v86 % 3 === 1) {
          vLS2 = vLS2.substring(0, vLS2.length - 2) + "==";
        }
        return vLS2;
      };
      const vF15 = p176 => {
        let v87 = p176.length * 0.75;
        let v88 = p176.length;
        let v89;
        let vLN013 = 0;
        let v90;
        let v91;
        let v92;
        let v93;
        if (p176[p176.length - 1] === "=") {
          v87--;
          if (p176[p176.length - 2] === "=") {
            v87--;
          }
        }
        const v94 = new ArrayBuffer(v87);
        const v95 = new Uint8Array(v94);
        for (v89 = 0; v89 < v88; v89 += 4) {
          v90 = v83[p176.charCodeAt(v89)];
          v91 = v83[p176.charCodeAt(v89 + 1)];
          v92 = v83[p176.charCodeAt(v89 + 2)];
          v93 = v83[p176.charCodeAt(v89 + 3)];
          v95[vLN013++] = v90 << 2 | v91 >> 4;
          v95[vLN013++] = (v91 & 15) << 4 | v92 >> 2;
          v95[vLN013++] = (v92 & 3) << 6 | v93 & 63;
        }
        return v94;
      };
    },
    "./node_modules/engine.io-parser/build/esm/decodePacket.browser.js": (p177, p178, p179) => {
      'use strict';

      p179.r(p178);
      p179.d(p178, {
        decodePacket: () => vF16
      });
      var vP179 = p179("./node_modules/engine.io-parser/build/esm/commons.js");
      var vP1792 = p179("./node_modules/engine.io-parser/build/esm/contrib/base64-arraybuffer.js");
      const v96 = typeof ArrayBuffer === "function";
      const vF16 = (p180, p181) => {
        if (typeof p180 !== "string") {
          return {
            type: "message",
            data: vF18(p180, p181)
          };
        }
        const v97 = p180.charAt(0);
        if (v97 === "b") {
          return {
            type: "message",
            data: vF17(p180.substring(1), p181)
          };
        }
        const v98 = vP179.PACKET_TYPES_REVERSE[v97];
        if (!v98) {
          return vP179.ERROR_PACKET;
        }
        if (p180.length > 1) {
          return {
            type: vP179.PACKET_TYPES_REVERSE[v97],
            data: p180.substring(1)
          };
        } else {
          return {
            type: vP179.PACKET_TYPES_REVERSE[v97]
          };
        }
      };
      const vF17 = (p182, p183) => {
        if (v96) {
          const v99 = (0, vP1792.decode)(p182);
          return vF18(v99, p183);
        } else {
          return {
            base64: true,
            data: p182
          };
        }
      };
      const vF18 = (p184, p185) => {
        switch (p185) {
          case "blob":
            if (p184 instanceof Blob) {
              return p184;
            } else {
              return new Blob([p184]);
            }
          case "arraybuffer":
          default:
            if (p184 instanceof ArrayBuffer) {
              return p184;
            } else {
              return p184.buffer;
            }
        }
      };
    },
    "./node_modules/engine.io-parser/build/esm/encodePacket.browser.js": (p186, p187, p188) => {
      'use strict';

      p188.r(p187);
      p188.d(p187, {
        encodePacket: () => vF20,
        encodePacketToBinary: () => f24
      });
      var vP188 = p188("./node_modules/engine.io-parser/build/esm/commons.js");
      const v100 = typeof Blob === "function" || typeof Blob !== "undefined" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]";
      const v101 = typeof ArrayBuffer === "function";
      const vF19 = p189 => {
        if (typeof ArrayBuffer.isView === "function") {
          return ArrayBuffer.isView(p189);
        } else {
          return p189 && p189.buffer instanceof ArrayBuffer;
        }
      };
      const vF20 = ({
        type: _0xf7b422,
        data: _0x1f3d29
      }, p190, p191) => {
        if (v100 && _0x1f3d29 instanceof Blob) {
          if (p190) {
            return p191(_0x1f3d29);
          } else {
            return vF21(_0x1f3d29, p191);
          }
        } else if (v101 && (_0x1f3d29 instanceof ArrayBuffer || vF19(_0x1f3d29))) {
          if (p190) {
            return p191(_0x1f3d29);
          } else {
            return vF21(new Blob([_0x1f3d29]), p191);
          }
        }
        return p191(vP188.PACKET_TYPES[_0xf7b422] + (_0x1f3d29 || ""));
      };
      const vF21 = (p192, p193) => {
        const v102 = new FileReader();
        v102.onload = function () {
          const v103 = v102.result.split(",")[1];
          p193("b" + (v103 || ""));
        };
        return v102.readAsDataURL(p192);
      };
      function f23(p194) {
        if (p194 instanceof Uint8Array) {
          return p194;
        } else if (p194 instanceof ArrayBuffer) {
          return new Uint8Array(p194);
        } else {
          return new Uint8Array(p194.buffer, p194.byteOffset, p194.byteLength);
        }
      }
      let v104;
      function f24(p195, p196) {
        if (v100 && p195.data instanceof Blob) {
          return p195.data.arrayBuffer().then(f23).then(p196);
        } else if (v101 && (p195.data instanceof ArrayBuffer || vF19(p195.data))) {
          return p196(f23(p195.data));
        }
        vF20(p195, false, p197 => {
          if (!v104) {
            v104 = new TextEncoder();
          }
          p196(v104.encode(p197));
        });
      }
    },
    "./node_modules/engine.io-parser/build/esm/index.js": (p198, p199, p200) => {
      'use strict';

      p200.r(p199);
      p200.d(p199, {
        createPacketDecoderStream: () => f28,
        createPacketEncoderStream: () => f25,
        decodePacket: () => vP2002.decodePacket,
        decodePayload: () => vF23,
        encodePacket: () => vP200.encodePacket,
        encodePayload: () => vF22,
        protocol: () => vLN4
      });
      var vP200 = p200("./node_modules/engine.io-parser/build/esm/encodePacket.browser.js");
      var vP2002 = p200("./node_modules/engine.io-parser/build/esm/decodePacket.browser.js");
      var vP2003 = p200("./node_modules/engine.io-parser/build/esm/commons.js");
      const v105 = String.fromCharCode(30);
      const vF22 = (p201, p202) => {
        const v106 = p201.length;
        const v107 = new Array(v106);
        let vLN014 = 0;
        p201.forEach((p203, p204) => {
          (0, vP200.encodePacket)(p203, false, p205 => {
            v107[p204] = p205;
            if (++vLN014 === v106) {
              p202(v107.join(v105));
            }
          });
        });
      };
      const vF23 = (p206, p207) => {
        const v108 = p206.split(v105);
        const vA4 = [];
        for (let vLN015 = 0; vLN015 < v108.length; vLN015++) {
          const v109 = (0, vP2002.decodePacket)(v108[vLN015], p207);
          vA4.push(v109);
          if (v109.type === "error") {
            break;
          }
        }
        return vA4;
      };
      function f25() {
        return new TransformStream({
          transform(p208, p209) {
            (0, vP200.encodePacketToBinary)(p208, p210 => {
              const v110 = p210.length;
              let v111;
              if (v110 < 126) {
                v111 = new Uint8Array(1);
                new DataView(v111.buffer).setUint8(0, v110);
              } else if (v110 < 65536) {
                v111 = new Uint8Array(3);
                const v112 = new DataView(v111.buffer);
                v112.setUint8(0, 126);
                v112.setUint16(1, v110);
              } else {
                v111 = new Uint8Array(9);
                const v113 = new DataView(v111.buffer);
                v113.setUint8(0, 127);
                v113.setBigUint64(1, BigInt(v110));
              }
              if (p208.data && typeof p208.data !== "string") {
                v111[0] |= 128;
              }
              p209.enqueue(v111);
              p209.enqueue(p210);
            });
          }
        });
      }
      let v114;
      function f26(p211) {
        return p211.reduce((p212, p213) => p212 + p213.length, 0);
      }
      function f27(p214, p215) {
        if (p214[0].length === p215) {
          return p214.shift();
        }
        const v115 = new Uint8Array(p215);
        let vLN016 = 0;
        for (let vLN017 = 0; vLN017 < p215; vLN017++) {
          v115[vLN017] = p214[0][vLN016++];
          if (vLN016 === p214[0].length) {
            p214.shift();
            vLN016 = 0;
          }
        }
        if (p214.length && vLN016 < p214[0].length) {
          p214[0] = p214[0].slice(vLN016);
        }
        return v115;
      }
      function f28(p216, p217) {
        if (!v114) {
          v114 = new TextDecoder();
        }
        const vA5 = [];
        let vLN018 = 0;
        let v116 = -1;
        let v117 = false;
        return new TransformStream({
          transform(p218, p219) {
            vA5.push(p218);
            while (true) {
              if (vLN018 === 0) {
                if (f26(vA5) < 1) {
                  break;
                }
                const vF27 = f27(vA5, 1);
                v117 = (vF27[0] & 128) === 128;
                v116 = vF27[0] & 127;
                if (v116 < 126) {
                  vLN018 = 3;
                } else if (v116 === 126) {
                  vLN018 = 1;
                } else {
                  vLN018 = 2;
                }
              } else if (vLN018 === 1) {
                if (f26(vA5) < 2) {
                  break;
                }
                const vF272 = f27(vA5, 2);
                v116 = new DataView(vF272.buffer, vF272.byteOffset, vF272.length).getUint16(0);
                vLN018 = 3;
              } else if (vLN018 === 2) {
                if (f26(vA5) < 8) {
                  break;
                }
                const vF273 = f27(vA5, 8);
                const v118 = new DataView(vF273.buffer, vF273.byteOffset, vF273.length);
                const v119 = v118.getUint32(0);
                if (v119 > Math.pow(2, 21) - 1) {
                  p219.enqueue(vP2003.ERROR_PACKET);
                  break;
                }
                v116 = v119 * Math.pow(2, 32) + v118.getUint32(4);
                vLN018 = 3;
              } else {
                if (f26(vA5) < v116) {
                  break;
                }
                const vF274 = f27(vA5, v116);
                p219.enqueue((0, vP2002.decodePacket)(v117 ? vF274 : v114.decode(vF274), p217));
                vLN018 = 0;
              }
              if (v116 === 0 || v116 > p216) {
                p219.enqueue(vP2003.ERROR_PACKET);
                break;
              }
            }
          }
        });
      }
      const vLN4 = 4;
    },
    "./node_modules/howler/dist/howler.js": (p220, p221, p222) => {
      var v120;
      var v121;
      (function () {
        'use strict';

        function f29() {
          this.init();
        }
        f29.prototype = {
          init: function () {
            var v122 = this || v151;
            v122._counter = 1000;
            v122._html5AudioPool = [];
            v122.html5PoolSize = 10;
            v122._codecs = {};
            v122._howls = [];
            v122._muted = false;
            v122._volume = 1;
            v122._canPlayEvent = "canplaythrough";
            v122._navigator = typeof window !== "undefined" && window.navigator ? window.navigator : null;
            v122.masterGain = null;
            v122.noAudio = false;
            v122.usingWebAudio = true;
            v122.autoSuspend = true;
            v122.ctx = null;
            v122.autoUnlock = true;
            v122._setup();
            return v122;
          },
          volume: function (p223) {
            var v123 = this || v151;
            p223 = parseFloat(p223);
            if (!v123.ctx) {
              f46();
            }
            if (typeof p223 !== "undefined" && p223 >= 0 && p223 <= 1) {
              v123._volume = p223;
              if (v123._muted) {
                return v123;
              }
              if (v123.usingWebAudio) {
                v123.masterGain.gain.setValueAtTime(p223, v151.ctx.currentTime);
              }
              for (var vLN019 = 0; vLN019 < v123._howls.length; vLN019++) {
                if (!v123._howls[vLN019]._webAudio) {
                  var v124 = v123._howls[vLN019]._getSoundIds();
                  for (var vLN020 = 0; vLN020 < v124.length; vLN020++) {
                    var v125 = v123._howls[vLN019]._soundById(v124[vLN020]);
                    if (v125 && v125._node) {
                      v125._node.volume = v125._volume * p223;
                    }
                  }
                }
              }
              return v123;
            }
            return v123._volume;
          },
          mute: function (p224) {
            var v126 = this || v151;
            if (!v126.ctx) {
              f46();
            }
            v126._muted = p224;
            if (v126.usingWebAudio) {
              v126.masterGain.gain.setValueAtTime(p224 ? 0 : v126._volume, v151.ctx.currentTime);
            }
            for (var vLN021 = 0; vLN021 < v126._howls.length; vLN021++) {
              if (!v126._howls[vLN021]._webAudio) {
                var v127 = v126._howls[vLN021]._getSoundIds();
                for (var vLN022 = 0; vLN022 < v127.length; vLN022++) {
                  var v128 = v126._howls[vLN021]._soundById(v127[vLN022]);
                  if (v128 && v128._node) {
                    v128._node.muted = p224 ? true : v128._muted;
                  }
                }
              }
            }
            return v126;
          },
          stop: function () {
            var v129 = this || v151;
            for (var vLN023 = 0; vLN023 < v129._howls.length; vLN023++) {
              v129._howls[vLN023].stop();
            }
            return v129;
          },
          unload: function () {
            var v130 = this || v151;
            for (var v131 = v130._howls.length - 1; v131 >= 0; v131--) {
              v130._howls[v131].unload();
            }
            if (v130.usingWebAudio && v130.ctx && typeof v130.ctx.close !== "undefined") {
              v130.ctx.close();
              v130.ctx = null;
              f46();
            }
            return v130;
          },
          codecs: function (p225) {
            return (this || v151)._codecs[p225.replace(/^x-/, "")];
          },
          _setup: function () {
            var v132 = this || v151;
            v132.state = v132.ctx ? v132.ctx.state || "suspended" : "suspended";
            v132._autoSuspend();
            if (!v132.usingWebAudio) {
              if (typeof Audio !== "undefined") {
                try {
                  var v133 = new Audio();
                  if (typeof v133.oncanplaythrough === "undefined") {
                    v132._canPlayEvent = "canplay";
                  }
                } catch (e13) {
                  v132.noAudio = true;
                }
              } else {
                v132.noAudio = true;
              }
            }
            try {
              var v133 = new Audio();
              if (v133.muted) {
                v132.noAudio = true;
              }
            } catch (e14) {}
            if (!v132.noAudio) {
              v132._setupCodecs();
            }
            return v132;
          },
          _setupCodecs: function () {
            var v134 = this || v151;
            var v135 = null;
            try {
              v135 = typeof Audio !== "undefined" ? new Audio() : null;
            } catch (e15) {
              return v134;
            }
            if (!v135 || typeof v135.canPlayType !== "function") {
              return v134;
            }
            var v136 = v135.canPlayType("audio/mpeg;").replace(/^no$/, "");
            var v137 = v134._navigator ? v134._navigator.userAgent : "";
            var v138 = v137.match(/OPR\/(\d+)/g);
            var v139 = v138 && parseInt(v138[0].split("/")[1], 10) < 33;
            var v140 = v137.indexOf("Safari") !== -1 && v137.indexOf("Chrome") === -1;
            var v141 = v137.match(/Version\/(.*?) /);
            var v142 = v140 && v141 && parseInt(v141[1], 10) < 15;
            v134._codecs = {
              mp3: !v139 && (!!v136 || !!v135.canPlayType("audio/mp3;").replace(/^no$/, "")),
              mpeg: !!v136,
              opus: !!v135.canPlayType("audio/ogg; codecs=\"opus\"").replace(/^no$/, ""),
              ogg: !!v135.canPlayType("audio/ogg; codecs=\"vorbis\"").replace(/^no$/, ""),
              oga: !!v135.canPlayType("audio/ogg; codecs=\"vorbis\"").replace(/^no$/, ""),
              wav: !!(v135.canPlayType("audio/wav; codecs=\"1\"") || v135.canPlayType("audio/wav")).replace(/^no$/, ""),
              aac: !!v135.canPlayType("audio/aac;").replace(/^no$/, ""),
              caf: !!v135.canPlayType("audio/x-caf;").replace(/^no$/, ""),
              m4a: !!(v135.canPlayType("audio/x-m4a;") || v135.canPlayType("audio/m4a;") || v135.canPlayType("audio/aac;")).replace(/^no$/, ""),
              m4b: !!(v135.canPlayType("audio/x-m4b;") || v135.canPlayType("audio/m4b;") || v135.canPlayType("audio/aac;")).replace(/^no$/, ""),
              mp4: !!(v135.canPlayType("audio/x-mp4;") || v135.canPlayType("audio/mp4;") || v135.canPlayType("audio/aac;")).replace(/^no$/, ""),
              weba: !v142 && !!v135.canPlayType("audio/webm; codecs=\"vorbis\"").replace(/^no$/, ""),
              webm: !v142 && !!v135.canPlayType("audio/webm; codecs=\"vorbis\"").replace(/^no$/, ""),
              dolby: !!v135.canPlayType("audio/mp4; codecs=\"ec-3\"").replace(/^no$/, ""),
              flac: !!(v135.canPlayType("audio/x-flac;") || v135.canPlayType("audio/flac;")).replace(/^no$/, "")
            };
            return v134;
          },
          _unlockAudio: function () {
            var v143 = this || v151;
            if (v143._audioUnlocked || !v143.ctx) {
              return;
            }
            v143._audioUnlocked = false;
            v143.autoUnlock = false;
            if (!v143._mobileUnloaded && v143.ctx.sampleRate !== 44100) {
              v143._mobileUnloaded = true;
              v143.unload();
            }
            v143._scratchBuffer = v143.ctx.createBuffer(1, 1, 22050);
            function f30(p226) {
              while (v143._html5AudioPool.length < v143.html5PoolSize) {
                try {
                  var v144 = new Audio();
                  v144._unlocked = true;
                  v143._releaseHtml5Audio(v144);
                } catch (e16) {
                  v143.noAudio = true;
                  break;
                }
              }
              for (var vLN024 = 0; vLN024 < v143._howls.length; vLN024++) {
                if (!v143._howls[vLN024]._webAudio) {
                  var v145 = v143._howls[vLN024]._getSoundIds();
                  for (var vLN025 = 0; vLN025 < v145.length; vLN025++) {
                    var v146 = v143._howls[vLN024]._soundById(v145[vLN025]);
                    if (v146 && v146._node && !v146._node._unlocked) {
                      v146._node._unlocked = true;
                      v146._node.load();
                    }
                  }
                }
              }
              v143._autoResume();
              var v147 = v143.ctx.createBufferSource();
              v147.buffer = v143._scratchBuffer;
              v147.connect(v143.ctx.destination);
              if (typeof v147.start === "undefined") {
                v147.noteOn(0);
              } else {
                v147.start(0);
              }
              if (typeof v143.ctx.resume === "function") {
                v143.ctx.resume();
              }
              v147.onended = function () {
                v147.disconnect(0);
                v143._audioUnlocked = true;
                document.removeEventListener("touchstart", f30, true);
                document.removeEventListener("touchend", f30, true);
                document.removeEventListener("click", f30, true);
                document.removeEventListener("keydown", f30, true);
                for (var vLN026 = 0; vLN026 < v143._howls.length; vLN026++) {
                  v143._howls[vLN026]._emit("unlock");
                }
              };
            }
            document.addEventListener("touchstart", f30, true);
            document.addEventListener("touchend", f30, true);
            document.addEventListener("click", f30, true);
            document.addEventListener("keydown", f30, true);
            return v143;
          },
          _obtainHtml5Audio: function () {
            var v148 = this || v151;
            if (v148._html5AudioPool.length) {
              return v148._html5AudioPool.pop();
            }
            var v149 = new Audio().play();
            if (v149 && typeof Promise !== "undefined" && (v149 instanceof Promise || typeof v149.then === "function")) {
              v149.catch(function () {
                console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.");
              });
            }
            return new Audio();
          },
          _releaseHtml5Audio: function (p227) {
            var v150 = this || v151;
            if (p227._unlocked) {
              v150._html5AudioPool.push(p227);
            }
            return v150;
          },
          _autoSuspend: function () {
            var vThis = this;
            if (!vThis.autoSuspend || !vThis.ctx || typeof vThis.ctx.suspend === "undefined" || !v151.usingWebAudio) {
              return;
            }
            for (var vLN027 = 0; vLN027 < vThis._howls.length; vLN027++) {
              if (vThis._howls[vLN027]._webAudio) {
                for (var vLN028 = 0; vLN028 < vThis._howls[vLN027]._sounds.length; vLN028++) {
                  if (!vThis._howls[vLN027]._sounds[vLN028]._paused) {
                    return vThis;
                  }
                }
              }
            }
            if (vThis._suspendTimer) {
              clearTimeout(vThis._suspendTimer);
            }
            vThis._suspendTimer = setTimeout(function () {
              if (!vThis.autoSuspend) {
                return;
              }
              vThis._suspendTimer = null;
              vThis.state = "suspending";
              function f31() {
                vThis.state = "suspended";
                if (vThis._resumeAfterSuspend) {
                  delete vThis._resumeAfterSuspend;
                  vThis._autoResume();
                }
              }
              vThis.ctx.suspend().then(f31, f31);
            }, 30000);
            return vThis;
          },
          _autoResume: function () {
            var vThis2 = this;
            if (!vThis2.ctx || typeof vThis2.ctx.resume === "undefined" || !v151.usingWebAudio) {
              return;
            }
            if (vThis2.state === "running" && vThis2.ctx.state !== "interrupted" && vThis2._suspendTimer) {
              clearTimeout(vThis2._suspendTimer);
              vThis2._suspendTimer = null;
            } else if (vThis2.state === "suspended" || vThis2.state === "running" && vThis2.ctx.state === "interrupted") {
              vThis2.ctx.resume().then(function () {
                vThis2.state = "running";
                for (var vLN029 = 0; vLN029 < vThis2._howls.length; vLN029++) {
                  vThis2._howls[vLN029]._emit("resume");
                }
              });
              if (vThis2._suspendTimer) {
                clearTimeout(vThis2._suspendTimer);
                vThis2._suspendTimer = null;
              }
            } else if (vThis2.state === "suspending") {
              vThis2._resumeAfterSuspend = true;
            }
            return vThis2;
          }
        };
        var v151 = new f29();
        function f32(p228) {
          var vThis3 = this;
          if (!p228.src || p228.src.length === 0) {
            console.error("An array of source files must be passed with any new Howl.");
            return;
          }
          vThis3.init(p228);
        }
        f32.prototype = {
          init: function (p229) {
            var vThis4 = this;
            if (!v151.ctx) {
              f46();
            }
            vThis4._autoplay = p229.autoplay || false;
            vThis4._format = typeof p229.format !== "string" ? p229.format : [p229.format];
            vThis4._html5 = p229.html5 || false;
            vThis4._muted = p229.mute || false;
            vThis4._loop = p229.loop || false;
            vThis4._pool = p229.pool || 5;
            vThis4._preload = typeof p229.preload === "boolean" || p229.preload === "metadata" ? p229.preload : true;
            vThis4._rate = p229.rate || 1;
            vThis4._sprite = p229.sprite || {};
            vThis4._src = typeof p229.src !== "string" ? p229.src : [p229.src];
            vThis4._volume = p229.volume !== undefined ? p229.volume : 1;
            vThis4._xhr = {
              method: p229.xhr && p229.xhr.method ? p229.xhr.method : "GET",
              headers: p229.xhr && p229.xhr.headers ? p229.xhr.headers : null,
              withCredentials: p229.xhr && p229.xhr.withCredentials ? p229.xhr.withCredentials : false
            };
            vThis4._duration = 0;
            vThis4._state = "unloaded";
            vThis4._sounds = [];
            vThis4._endTimers = {};
            vThis4._queue = [];
            vThis4._playLock = false;
            vThis4._onend = p229.onend ? [{
              fn: p229.onend
            }] : [];
            vThis4._onfade = p229.onfade ? [{
              fn: p229.onfade
            }] : [];
            vThis4._onload = p229.onload ? [{
              fn: p229.onload
            }] : [];
            vThis4._onloaderror = p229.onloaderror ? [{
              fn: p229.onloaderror
            }] : [];
            vThis4._onplayerror = p229.onplayerror ? [{
              fn: p229.onplayerror
            }] : [];
            vThis4._onpause = p229.onpause ? [{
              fn: p229.onpause
            }] : [];
            vThis4._onplay = p229.onplay ? [{
              fn: p229.onplay
            }] : [];
            vThis4._onstop = p229.onstop ? [{
              fn: p229.onstop
            }] : [];
            vThis4._onmute = p229.onmute ? [{
              fn: p229.onmute
            }] : [];
            vThis4._onvolume = p229.onvolume ? [{
              fn: p229.onvolume
            }] : [];
            vThis4._onrate = p229.onrate ? [{
              fn: p229.onrate
            }] : [];
            vThis4._onseek = p229.onseek ? [{
              fn: p229.onseek
            }] : [];
            vThis4._onunlock = p229.onunlock ? [{
              fn: p229.onunlock
            }] : [];
            vThis4._onresume = [];
            vThis4._webAudio = v151.usingWebAudio && !vThis4._html5;
            if (typeof v151.ctx !== "undefined" && v151.ctx && v151.autoUnlock) {
              v151._unlockAudio();
            }
            v151._howls.push(vThis4);
            if (vThis4._autoplay) {
              vThis4._queue.push({
                event: "play",
                action: function () {
                  vThis4.play();
                }
              });
            }
            if (vThis4._preload && vThis4._preload !== "none") {
              vThis4.load();
            }
            return vThis4;
          },
          load: function () {
            var vThis5 = this;
            var v152 = null;
            if (v151.noAudio) {
              vThis5._emit("loaderror", null, "No audio support.");
              return;
            }
            if (typeof vThis5._src === "string") {
              vThis5._src = [vThis5._src];
            }
            for (var vLN030 = 0; vLN030 < vThis5._src.length; vLN030++) {
              var v153;
              var v154;
              if (vThis5._format && vThis5._format[vLN030]) {
                v153 = vThis5._format[vLN030];
              } else {
                v154 = vThis5._src[vLN030];
                if (typeof v154 !== "string") {
                  vThis5._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                  continue;
                }
                v153 = /^data:audio\/([^;,]+);/i.exec(v154);
                if (!v153) {
                  v153 = /\.([^.]+)$/.exec(v154.split("?", 1)[0]);
                }
                v153 &&= v153[1].toLowerCase();
              }
              if (!v153) {
                console.warn("No file extension was found. Consider using the \"format\" property or specify an extension.");
              }
              if (v153 && v151.codecs(v153)) {
                v152 = vThis5._src[vLN030];
                break;
              }
            }
            if (!v152) {
              vThis5._emit("loaderror", null, "No codec support for selected audio sources.");
              return;
            }
            vThis5._src = v152;
            vThis5._state = "loading";
            if (window.location.protocol === "https:" && v152.slice(0, 5) === "http:") {
              vThis5._html5 = true;
              vThis5._webAudio = false;
            }
            new f39(vThis5);
            if (vThis5._webAudio) {
              f40(vThis5);
            }
            return vThis5;
          },
          play: function (p230, p231) {
            var vThis6 = this;
            var v155 = null;
            if (typeof p230 === "number") {
              v155 = p230;
              p230 = null;
            } else if (typeof p230 === "string" && vThis6._state === "loaded" && !vThis6._sprite[p230]) {
              return null;
            } else if (typeof p230 === "undefined") {
              p230 = "__default";
              if (!vThis6._playLock) {
                var vLN031 = 0;
                for (var vLN032 = 0; vLN032 < vThis6._sounds.length; vLN032++) {
                  if (vThis6._sounds[vLN032]._paused && !vThis6._sounds[vLN032]._ended) {
                    vLN031++;
                    v155 = vThis6._sounds[vLN032]._id;
                  }
                }
                if (vLN031 === 1) {
                  p230 = null;
                } else {
                  v155 = null;
                }
              }
            }
            var v156 = v155 ? vThis6._soundById(v155) : vThis6._inactiveSound();
            if (!v156) {
              return null;
            }
            if (v155 && !p230) {
              p230 = v156._sprite || "__default";
            }
            if (vThis6._state !== "loaded") {
              v156._sprite = p230;
              v156._ended = false;
              var v157 = v156._id;
              vThis6._queue.push({
                event: "play",
                action: function () {
                  vThis6.play(v157);
                }
              });
              return v157;
            }
            if (v155 && !v156._paused) {
              if (!p231) {
                vThis6._loadQueue("play");
              }
              return v156._id;
            }
            if (vThis6._webAudio) {
              v151._autoResume();
            }
            var v158 = Math.max(0, v156._seek > 0 ? v156._seek : vThis6._sprite[p230][0] / 1000);
            var v159 = Math.max(0, (vThis6._sprite[p230][0] + vThis6._sprite[p230][1]) / 1000 - v158);
            var v160 = v159 * 1000 / Math.abs(v156._rate);
            var v161 = vThis6._sprite[p230][0] / 1000;
            var v162 = (vThis6._sprite[p230][0] + vThis6._sprite[p230][1]) / 1000;
            v156._sprite = p230;
            v156._ended = false;
            function f33() {
              v156._paused = false;
              v156._seek = v158;
              v156._start = v161;
              v156._stop = v162;
              v156._loop = !!v156._loop || !!vThis6._sprite[p230][2];
            }
            if (v158 >= v162) {
              vThis6._ended(v156);
              return;
            }
            var v163 = v156._node;
            if (vThis6._webAudio) {
              function f34() {
                vThis6._playLock = false;
                f33();
                vThis6._refreshBuffer(v156);
                var v164 = v156._muted || vThis6._muted ? 0 : v156._volume;
                v163.gain.setValueAtTime(v164, v151.ctx.currentTime);
                v156._playStart = v151.ctx.currentTime;
                if (typeof v163.bufferSource.start === "undefined") {
                  if (v156._loop) {
                    v163.bufferSource.noteGrainOn(0, v158, 86400);
                  } else {
                    v163.bufferSource.noteGrainOn(0, v158, v159);
                  }
                } else if (v156._loop) {
                  v163.bufferSource.start(0, v158, 86400);
                } else {
                  v163.bufferSource.start(0, v158, v159);
                }
                if (v160 !== Infinity) {
                  vThis6._endTimers[v156._id] = setTimeout(vThis6._ended.bind(vThis6, v156), v160);
                }
                if (!p231) {
                  setTimeout(function () {
                    vThis6._emit("play", v156._id);
                    vThis6._loadQueue();
                  }, 0);
                }
              }
              if (v151.state === "running" && v151.ctx.state !== "interrupted") {
                f34();
              } else {
                vThis6._playLock = true;
                vThis6.once("resume", f34);
                vThis6._clearTimer(v156._id);
              }
            } else {
              function f35() {
                v163.currentTime = v158;
                v163.muted = v156._muted || vThis6._muted || v151._muted || v163.muted;
                v163.volume = v156._volume * v151.volume();
                v163.playbackRate = v156._rate;
                try {
                  var v165 = v163.play();
                  if (v165 && typeof Promise !== "undefined" && (v165 instanceof Promise || typeof v165.then === "function")) {
                    vThis6._playLock = true;
                    f33();
                    v165.then(function () {
                      vThis6._playLock = false;
                      v163._unlocked = true;
                      if (!p231) {
                        vThis6._emit("play", v156._id);
                      } else {
                        vThis6._loadQueue();
                      }
                    }).catch(function () {
                      vThis6._playLock = false;
                      vThis6._emit("playerror", v156._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                      v156._ended = true;
                      v156._paused = true;
                    });
                  } else if (!p231) {
                    vThis6._playLock = false;
                    f33();
                    vThis6._emit("play", v156._id);
                  }
                  v163.playbackRate = v156._rate;
                  if (v163.paused) {
                    vThis6._emit("playerror", v156._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                    return;
                  }
                  if (p230 !== "__default" || v156._loop) {
                    vThis6._endTimers[v156._id] = setTimeout(vThis6._ended.bind(vThis6, v156), v160);
                  } else {
                    vThis6._endTimers[v156._id] = function () {
                      vThis6._ended(v156);
                      v163.removeEventListener("ended", vThis6._endTimers[v156._id], false);
                    };
                    v163.addEventListener("ended", vThis6._endTimers[v156._id], false);
                  }
                } catch (e17) {
                  vThis6._emit("playerror", v156._id, e17);
                }
              }
              if (v163.src === "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA") {
                v163.src = vThis6._src;
                v163.load();
              }
              var v166 = window && window.ejecta || !v163.readyState && v151._navigator.isCocoonJS;
              if (v163.readyState >= 3 || v166) {
                f35();
              } else {
                vThis6._playLock = true;
                vThis6._state = "loading";
                function f36() {
                  vThis6._state = "loaded";
                  f35();
                  v163.removeEventListener(v151._canPlayEvent, f36, false);
                }
                v163.addEventListener(v151._canPlayEvent, f36, false);
                vThis6._clearTimer(v156._id);
              }
            }
            return v156._id;
          },
          pause: function (p232) {
            var vThis7 = this;
            if (vThis7._state !== "loaded" || vThis7._playLock) {
              vThis7._queue.push({
                event: "pause",
                action: function () {
                  vThis7.pause(p232);
                }
              });
              return vThis7;
            }
            var v167 = vThis7._getSoundIds(p232);
            for (var vLN033 = 0; vLN033 < v167.length; vLN033++) {
              vThis7._clearTimer(v167[vLN033]);
              var v168 = vThis7._soundById(v167[vLN033]);
              if (v168 && !v168._paused) {
                v168._seek = vThis7.seek(v167[vLN033]);
                v168._rateSeek = 0;
                v168._paused = true;
                vThis7._stopFade(v167[vLN033]);
                if (v168._node) {
                  if (vThis7._webAudio) {
                    if (!v168._node.bufferSource) {
                      continue;
                    }
                    if (typeof v168._node.bufferSource.stop === "undefined") {
                      v168._node.bufferSource.noteOff(0);
                    } else {
                      v168._node.bufferSource.stop(0);
                    }
                    vThis7._cleanBuffer(v168._node);
                  } else if (!isNaN(v168._node.duration) || v168._node.duration === Infinity) {
                    v168._node.pause();
                  }
                }
              }
              if (!arguments[1]) {
                vThis7._emit("pause", v168 ? v168._id : null);
              }
            }
            return vThis7;
          },
          stop: function (p233, p234) {
            var vThis8 = this;
            if (vThis8._state !== "loaded" || vThis8._playLock) {
              vThis8._queue.push({
                event: "stop",
                action: function () {
                  vThis8.stop(p233);
                }
              });
              return vThis8;
            }
            var v169 = vThis8._getSoundIds(p233);
            for (var vLN034 = 0; vLN034 < v169.length; vLN034++) {
              vThis8._clearTimer(v169[vLN034]);
              var v170 = vThis8._soundById(v169[vLN034]);
              if (v170) {
                v170._seek = v170._start || 0;
                v170._rateSeek = 0;
                v170._paused = true;
                v170._ended = true;
                vThis8._stopFade(v169[vLN034]);
                if (v170._node) {
                  if (vThis8._webAudio) {
                    if (v170._node.bufferSource) {
                      if (typeof v170._node.bufferSource.stop === "undefined") {
                        v170._node.bufferSource.noteOff(0);
                      } else {
                        v170._node.bufferSource.stop(0);
                      }
                      vThis8._cleanBuffer(v170._node);
                    }
                  } else if (!isNaN(v170._node.duration) || v170._node.duration === Infinity) {
                    v170._node.currentTime = v170._start || 0;
                    v170._node.pause();
                    if (v170._node.duration === Infinity) {
                      vThis8._clearSound(v170._node);
                    }
                  }
                }
                if (!p234) {
                  vThis8._emit("stop", v170._id);
                }
              }
            }
            return vThis8;
          },
          mute: function (p235, p236) {
            var vThis9 = this;
            if (vThis9._state !== "loaded" || vThis9._playLock) {
              vThis9._queue.push({
                event: "mute",
                action: function () {
                  vThis9.mute(p235, p236);
                }
              });
              return vThis9;
            }
            if (typeof p236 === "undefined") {
              if (typeof p235 === "boolean") {
                vThis9._muted = p235;
              } else {
                return vThis9._muted;
              }
            }
            var v171 = vThis9._getSoundIds(p236);
            for (var vLN035 = 0; vLN035 < v171.length; vLN035++) {
              var v172 = vThis9._soundById(v171[vLN035]);
              if (v172) {
                v172._muted = p235;
                if (v172._interval) {
                  vThis9._stopFade(v172._id);
                }
                if (vThis9._webAudio && v172._node) {
                  v172._node.gain.setValueAtTime(p235 ? 0 : v172._volume, v151.ctx.currentTime);
                } else if (v172._node) {
                  v172._node.muted = v151._muted ? true : p235;
                }
                vThis9._emit("mute", v172._id);
              }
            }
            return vThis9;
          },
          volume: function () {
            var vThis10 = this;
            var vArguments = arguments;
            var v173;
            var v174;
            if (vArguments.length === 0) {
              return vThis10._volume;
            } else if (vArguments.length === 1 || vArguments.length === 2 && typeof vArguments[1] === "undefined") {
              var v175 = vThis10._getSoundIds();
              var v176 = v175.indexOf(vArguments[0]);
              if (v176 >= 0) {
                v174 = parseInt(vArguments[0], 10);
              } else {
                v173 = parseFloat(vArguments[0]);
              }
            } else if (vArguments.length >= 2) {
              v173 = parseFloat(vArguments[0]);
              v174 = parseInt(vArguments[1], 10);
            }
            var v177;
            if (typeof v173 !== "undefined" && v173 >= 0 && v173 <= 1) {
              if (vThis10._state !== "loaded" || vThis10._playLock) {
                vThis10._queue.push({
                  event: "volume",
                  action: function () {
                    vThis10.volume.apply(vThis10, vArguments);
                  }
                });
                return vThis10;
              }
              if (typeof v174 === "undefined") {
                vThis10._volume = v173;
              }
              v174 = vThis10._getSoundIds(v174);
              for (var vLN036 = 0; vLN036 < v174.length; vLN036++) {
                v177 = vThis10._soundById(v174[vLN036]);
                if (v177) {
                  v177._volume = v173;
                  if (!vArguments[2]) {
                    vThis10._stopFade(v174[vLN036]);
                  }
                  if (vThis10._webAudio && v177._node && !v177._muted) {
                    v177._node.gain.setValueAtTime(v173, v151.ctx.currentTime);
                  } else if (v177._node && !v177._muted) {
                    v177._node.volume = v173 * v151.volume();
                  }
                  vThis10._emit("volume", v177._id);
                }
              }
            } else {
              v177 = v174 ? vThis10._soundById(v174) : vThis10._sounds[0];
              if (v177) {
                return v177._volume;
              } else {
                return 0;
              }
            }
            return vThis10;
          },
          fade: function (p237, p238, p239, p240) {
            var vThis11 = this;
            if (vThis11._state !== "loaded" || vThis11._playLock) {
              vThis11._queue.push({
                event: "fade",
                action: function () {
                  vThis11.fade(p237, p238, p239, p240);
                }
              });
              return vThis11;
            }
            p237 = Math.min(Math.max(0, parseFloat(p237)), 1);
            p238 = Math.min(Math.max(0, parseFloat(p238)), 1);
            p239 = parseFloat(p239);
            vThis11.volume(p237, p240);
            var v178 = vThis11._getSoundIds(p240);
            for (var vLN037 = 0; vLN037 < v178.length; vLN037++) {
              var v179 = vThis11._soundById(v178[vLN037]);
              if (v179) {
                if (!p240) {
                  vThis11._stopFade(v178[vLN037]);
                }
                if (vThis11._webAudio && !v179._muted) {
                  var v180 = v151.ctx.currentTime;
                  var v181 = v180 + p239 / 1000;
                  v179._volume = p237;
                  v179._node.gain.setValueAtTime(p237, v180);
                  v179._node.gain.linearRampToValueAtTime(p238, v181);
                }
                vThis11._startFadeInterval(v179, p237, p238, p239, v178[vLN037], typeof p240 === "undefined");
              }
            }
            return vThis11;
          },
          _startFadeInterval: function (p241, p242, p243, p244, p245, p246) {
            var vThis12 = this;
            var vP242 = p242;
            var v182 = p243 - p242;
            var v183 = Math.abs(v182 / 0.01);
            var v184 = Math.max(4, v183 > 0 ? p244 / v183 : p244);
            var v185 = Date.now();
            p241._fadeTo = p243;
            p241._interval = setInterval(function () {
              var v186 = (Date.now() - v185) / p244;
              v185 = Date.now();
              vP242 += v182 * v186;
              vP242 = Math.round(vP242 * 100) / 100;
              if (v182 < 0) {
                vP242 = Math.max(p243, vP242);
              } else {
                vP242 = Math.min(p243, vP242);
              }
              if (vThis12._webAudio) {
                p241._volume = vP242;
              } else {
                vThis12.volume(vP242, p241._id, true);
              }
              if (p246) {
                vThis12._volume = vP242;
              }
              if (p243 < p242 && vP242 <= p243 || p243 > p242 && vP242 >= p243) {
                clearInterval(p241._interval);
                p241._interval = null;
                p241._fadeTo = null;
                vThis12.volume(p243, p241._id);
                vThis12._emit("fade", p241._id);
              }
            }, v184);
          },
          _stopFade: function (p247) {
            var vThis13 = this;
            var v187 = vThis13._soundById(p247);
            if (v187 && v187._interval) {
              if (vThis13._webAudio) {
                v187._node.gain.cancelScheduledValues(v151.ctx.currentTime);
              }
              clearInterval(v187._interval);
              v187._interval = null;
              vThis13.volume(v187._fadeTo, p247);
              v187._fadeTo = null;
              vThis13._emit("fade", p247);
            }
            return vThis13;
          },
          loop: function () {
            var vThis14 = this;
            var vArguments2 = arguments;
            var v188;
            var v189;
            var v190;
            if (vArguments2.length === 0) {
              return vThis14._loop;
            } else if (vArguments2.length === 1) {
              if (typeof vArguments2[0] === "boolean") {
                v188 = vArguments2[0];
                vThis14._loop = v188;
              } else {
                v190 = vThis14._soundById(parseInt(vArguments2[0], 10));
                if (v190) {
                  return v190._loop;
                } else {
                  return false;
                }
              }
            } else if (vArguments2.length === 2) {
              v188 = vArguments2[0];
              v189 = parseInt(vArguments2[1], 10);
            }
            var v191 = vThis14._getSoundIds(v189);
            for (var vLN038 = 0; vLN038 < v191.length; vLN038++) {
              v190 = vThis14._soundById(v191[vLN038]);
              if (v190) {
                v190._loop = v188;
                if (vThis14._webAudio && v190._node && v190._node.bufferSource) {
                  v190._node.bufferSource.loop = v188;
                  if (v188) {
                    v190._node.bufferSource.loopStart = v190._start || 0;
                    v190._node.bufferSource.loopEnd = v190._stop;
                    if (vThis14.playing(v191[vLN038])) {
                      vThis14.pause(v191[vLN038], true);
                      vThis14.play(v191[vLN038], true);
                    }
                  }
                }
              }
            }
            return vThis14;
          },
          rate: function () {
            var vThis15 = this;
            var vArguments3 = arguments;
            var v192;
            var v193;
            if (vArguments3.length === 0) {
              v193 = vThis15._sounds[0]._id;
            } else if (vArguments3.length === 1) {
              var v194 = vThis15._getSoundIds();
              var v195 = v194.indexOf(vArguments3[0]);
              if (v195 >= 0) {
                v193 = parseInt(vArguments3[0], 10);
              } else {
                v192 = parseFloat(vArguments3[0]);
              }
            } else if (vArguments3.length === 2) {
              v192 = parseFloat(vArguments3[0]);
              v193 = parseInt(vArguments3[1], 10);
            }
            var v196;
            if (typeof v192 === "number") {
              if (vThis15._state !== "loaded" || vThis15._playLock) {
                vThis15._queue.push({
                  event: "rate",
                  action: function () {
                    vThis15.rate.apply(vThis15, vArguments3);
                  }
                });
                return vThis15;
              }
              if (typeof v193 === "undefined") {
                vThis15._rate = v192;
              }
              v193 = vThis15._getSoundIds(v193);
              for (var vLN039 = 0; vLN039 < v193.length; vLN039++) {
                v196 = vThis15._soundById(v193[vLN039]);
                if (v196) {
                  if (vThis15.playing(v193[vLN039])) {
                    v196._rateSeek = vThis15.seek(v193[vLN039]);
                    v196._playStart = vThis15._webAudio ? v151.ctx.currentTime : v196._playStart;
                  }
                  v196._rate = v192;
                  if (vThis15._webAudio && v196._node && v196._node.bufferSource) {
                    v196._node.bufferSource.playbackRate.setValueAtTime(v192, v151.ctx.currentTime);
                  } else if (v196._node) {
                    v196._node.playbackRate = v192;
                  }
                  var v197 = vThis15.seek(v193[vLN039]);
                  var v198 = (vThis15._sprite[v196._sprite][0] + vThis15._sprite[v196._sprite][1]) / 1000 - v197;
                  var v199 = v198 * 1000 / Math.abs(v196._rate);
                  if (vThis15._endTimers[v193[vLN039]] || !v196._paused) {
                    vThis15._clearTimer(v193[vLN039]);
                    vThis15._endTimers[v193[vLN039]] = setTimeout(vThis15._ended.bind(vThis15, v196), v199);
                  }
                  vThis15._emit("rate", v196._id);
                }
              }
            } else {
              v196 = vThis15._soundById(v193);
              if (v196) {
                return v196._rate;
              } else {
                return vThis15._rate;
              }
            }
            return vThis15;
          },
          seek: function () {
            var vThis16 = this;
            var vArguments4 = arguments;
            var v200;
            var v201;
            if (vArguments4.length === 0) {
              if (vThis16._sounds.length) {
                v201 = vThis16._sounds[0]._id;
              }
            } else if (vArguments4.length === 1) {
              var v202 = vThis16._getSoundIds();
              var v203 = v202.indexOf(vArguments4[0]);
              if (v203 >= 0) {
                v201 = parseInt(vArguments4[0], 10);
              } else if (vThis16._sounds.length) {
                v201 = vThis16._sounds[0]._id;
                v200 = parseFloat(vArguments4[0]);
              }
            } else if (vArguments4.length === 2) {
              v200 = parseFloat(vArguments4[0]);
              v201 = parseInt(vArguments4[1], 10);
            }
            if (typeof v201 === "undefined") {
              return 0;
            }
            if (typeof v200 === "number" && (vThis16._state !== "loaded" || vThis16._playLock)) {
              vThis16._queue.push({
                event: "seek",
                action: function () {
                  vThis16.seek.apply(vThis16, vArguments4);
                }
              });
              return vThis16;
            }
            var v204 = vThis16._soundById(v201);
            if (v204) {
              if (typeof v200 === "number" && v200 >= 0) {
                var v205 = vThis16.playing(v201);
                if (v205) {
                  vThis16.pause(v201, true);
                }
                v204._seek = v200;
                v204._ended = false;
                vThis16._clearTimer(v201);
                if (!vThis16._webAudio && v204._node && !isNaN(v204._node.duration)) {
                  v204._node.currentTime = v200;
                }
                function f37() {
                  if (v205) {
                    vThis16.play(v201, true);
                  }
                  vThis16._emit("seek", v201);
                }
                if (v205 && !vThis16._webAudio) {
                  function f38() {
                    if (!vThis16._playLock) {
                      f37();
                    } else {
                      setTimeout(f38, 0);
                    }
                  }
                  setTimeout(f38, 0);
                } else {
                  f37();
                }
              } else if (vThis16._webAudio) {
                var v206 = vThis16.playing(v201) ? v151.ctx.currentTime - v204._playStart : 0;
                var v207 = v204._rateSeek ? v204._rateSeek - v204._seek : 0;
                return v204._seek + (v207 + v206 * Math.abs(v204._rate));
              } else {
                return v204._node.currentTime;
              }
            }
            return vThis16;
          },
          playing: function (p248) {
            var vThis17 = this;
            if (typeof p248 === "number") {
              var v208 = vThis17._soundById(p248);
              if (v208) {
                return !v208._paused;
              } else {
                return false;
              }
            }
            for (var vLN040 = 0; vLN040 < vThis17._sounds.length; vLN040++) {
              if (!vThis17._sounds[vLN040]._paused) {
                return true;
              }
            }
            return false;
          },
          duration: function (p249) {
            var vThis18 = this;
            var v209 = vThis18._duration;
            var v210 = vThis18._soundById(p249);
            if (v210) {
              v209 = vThis18._sprite[v210._sprite][1] / 1000;
            }
            return v209;
          },
          state: function () {
            return this._state;
          },
          unload: function () {
            var vThis19 = this;
            var v211 = vThis19._sounds;
            for (var vLN041 = 0; vLN041 < v211.length; vLN041++) {
              if (!v211[vLN041]._paused) {
                vThis19.stop(v211[vLN041]._id);
              }
              if (!vThis19._webAudio) {
                vThis19._clearSound(v211[vLN041]._node);
                v211[vLN041]._node.removeEventListener("error", v211[vLN041]._errorFn, false);
                v211[vLN041]._node.removeEventListener(v151._canPlayEvent, v211[vLN041]._loadFn, false);
                v211[vLN041]._node.removeEventListener("ended", v211[vLN041]._endFn, false);
                v151._releaseHtml5Audio(v211[vLN041]._node);
              }
              delete v211[vLN041]._node;
              vThis19._clearTimer(v211[vLN041]._id);
            }
            var v212 = v151._howls.indexOf(vThis19);
            if (v212 >= 0) {
              v151._howls.splice(v212, 1);
            }
            var v213 = true;
            for (vLN041 = 0; vLN041 < v151._howls.length; vLN041++) {
              if (v151._howls[vLN041]._src === vThis19._src || vThis19._src.indexOf(v151._howls[vLN041]._src) >= 0) {
                v213 = false;
                break;
              }
            }
            if (vO9 && v213) {
              delete vO9[vThis19._src];
            }
            v151.noAudio = false;
            vThis19._state = "unloaded";
            vThis19._sounds = [];
            vThis19 = null;
            return null;
          },
          on: function (p250, p251, p252, p253) {
            var vThis20 = this;
            var v214 = vThis20["_on" + p250];
            if (typeof p251 === "function") {
              v214.push(p253 ? {
                id: p252,
                fn: p251,
                once: p253
              } : {
                id: p252,
                fn: p251
              });
            }
            return vThis20;
          },
          off: function (p254, p255, p256) {
            var vThis21 = this;
            var v215 = vThis21["_on" + p254];
            var vLN042 = 0;
            if (typeof p255 === "number") {
              p256 = p255;
              p255 = null;
            }
            if (p255 || p256) {
              for (vLN042 = 0; vLN042 < v215.length; vLN042++) {
                var v216 = p256 === v215[vLN042].id;
                if (p255 === v215[vLN042].fn && v216 || !p255 && v216) {
                  v215.splice(vLN042, 1);
                  break;
                }
              }
            } else if (p254) {
              vThis21["_on" + p254] = [];
            } else {
              var v217 = Object.keys(vThis21);
              for (vLN042 = 0; vLN042 < v217.length; vLN042++) {
                if (v217[vLN042].indexOf("_on") === 0 && Array.isArray(vThis21[v217[vLN042]])) {
                  vThis21[v217[vLN042]] = [];
                }
              }
            }
            return vThis21;
          },
          once: function (p257, p258, p259) {
            var vThis22 = this;
            vThis22.on(p257, p258, p259, 1);
            return vThis22;
          },
          _emit: function (p260, p261, p262) {
            var vThis23 = this;
            var v218 = vThis23["_on" + p260];
            for (var v219 = v218.length - 1; v219 >= 0; v219--) {
              if (!v218[v219].id || v218[v219].id === p261 || p260 === "load") {
                setTimeout(function (p263) {
                  p263.call(this, p261, p262);
                }.bind(vThis23, v218[v219].fn), 0);
                if (v218[v219].once) {
                  vThis23.off(p260, v218[v219].fn, v218[v219].id);
                }
              }
            }
            vThis23._loadQueue(p260);
            return vThis23;
          },
          _loadQueue: function (p264) {
            var vThis24 = this;
            if (vThis24._queue.length > 0) {
              var v220 = vThis24._queue[0];
              if (v220.event === p264) {
                vThis24._queue.shift();
                vThis24._loadQueue();
              }
              if (!p264) {
                v220.action();
              }
            }
            return vThis24;
          },
          _ended: function (p265) {
            var vThis25 = this;
            var v221 = p265._sprite;
            if (!vThis25._webAudio && p265._node && !p265._node.paused && !p265._node.ended && p265._node.currentTime < p265._stop) {
              setTimeout(vThis25._ended.bind(vThis25, p265), 100);
              return vThis25;
            }
            var v222 = !!p265._loop || !!vThis25._sprite[v221][2];
            vThis25._emit("end", p265._id);
            if (!vThis25._webAudio && v222) {
              vThis25.stop(p265._id, true).play(p265._id);
            }
            if (vThis25._webAudio && v222) {
              vThis25._emit("play", p265._id);
              p265._seek = p265._start || 0;
              p265._rateSeek = 0;
              p265._playStart = v151.ctx.currentTime;
              var v223 = (p265._stop - p265._start) * 1000 / Math.abs(p265._rate);
              vThis25._endTimers[p265._id] = setTimeout(vThis25._ended.bind(vThis25, p265), v223);
            }
            if (vThis25._webAudio && !v222) {
              p265._paused = true;
              p265._ended = true;
              p265._seek = p265._start || 0;
              p265._rateSeek = 0;
              vThis25._clearTimer(p265._id);
              vThis25._cleanBuffer(p265._node);
              v151._autoSuspend();
            }
            if (!vThis25._webAudio && !v222) {
              vThis25.stop(p265._id, true);
            }
            return vThis25;
          },
          _clearTimer: function (p266) {
            var vThis26 = this;
            if (vThis26._endTimers[p266]) {
              if (typeof vThis26._endTimers[p266] !== "function") {
                clearTimeout(vThis26._endTimers[p266]);
              } else {
                var v224 = vThis26._soundById(p266);
                if (v224 && v224._node) {
                  v224._node.removeEventListener("ended", vThis26._endTimers[p266], false);
                }
              }
              delete vThis26._endTimers[p266];
            }
            return vThis26;
          },
          _soundById: function (p267) {
            var vThis27 = this;
            for (var vLN043 = 0; vLN043 < vThis27._sounds.length; vLN043++) {
              if (p267 === vThis27._sounds[vLN043]._id) {
                return vThis27._sounds[vLN043];
              }
            }
            return null;
          },
          _inactiveSound: function () {
            var vThis28 = this;
            vThis28._drain();
            for (var vLN044 = 0; vLN044 < vThis28._sounds.length; vLN044++) {
              if (vThis28._sounds[vLN044]._ended) {
                return vThis28._sounds[vLN044].reset();
              }
            }
            return new f39(vThis28);
          },
          _drain: function () {
            var vThis29 = this;
            var v225 = vThis29._pool;
            var vLN045 = 0;
            var vLN046 = 0;
            if (vThis29._sounds.length < v225) {
              return;
            }
            for (vLN046 = 0; vLN046 < vThis29._sounds.length; vLN046++) {
              if (vThis29._sounds[vLN046]._ended) {
                vLN045++;
              }
            }
            for (vLN046 = vThis29._sounds.length - 1; vLN046 >= 0; vLN046--) {
              if (vLN045 <= v225) {
                return;
              }
              if (vThis29._sounds[vLN046]._ended) {
                if (vThis29._webAudio && vThis29._sounds[vLN046]._node) {
                  vThis29._sounds[vLN046]._node.disconnect(0);
                }
                vThis29._sounds.splice(vLN046, 1);
                vLN045--;
              }
            }
          },
          _getSoundIds: function (p268) {
            var vThis30 = this;
            if (typeof p268 === "undefined") {
              var vA6 = [];
              for (var vLN047 = 0; vLN047 < vThis30._sounds.length; vLN047++) {
                vA6.push(vThis30._sounds[vLN047]._id);
              }
              return vA6;
            } else {
              return [p268];
            }
          },
          _refreshBuffer: function (p269) {
            var vThis31 = this;
            p269._node.bufferSource = v151.ctx.createBufferSource();
            p269._node.bufferSource.buffer = vO9[vThis31._src];
            if (p269._panner) {
              p269._node.bufferSource.connect(p269._panner);
            } else {
              p269._node.bufferSource.connect(p269._node);
            }
            p269._node.bufferSource.loop = p269._loop;
            if (p269._loop) {
              p269._node.bufferSource.loopStart = p269._start || 0;
              p269._node.bufferSource.loopEnd = p269._stop || 0;
            }
            p269._node.bufferSource.playbackRate.setValueAtTime(p269._rate, v151.ctx.currentTime);
            return vThis31;
          },
          _cleanBuffer: function (p270) {
            var vThis32 = this;
            var v226 = v151._navigator && v151._navigator.vendor.indexOf("Apple") >= 0;
            if (!p270.bufferSource) {
              return vThis32;
            }
            if (v151._scratchBuffer && p270.bufferSource) {
              p270.bufferSource.onended = null;
              p270.bufferSource.disconnect(0);
              if (v226) {
                try {
                  p270.bufferSource.buffer = v151._scratchBuffer;
                } catch (e18) {}
              }
            }
            p270.bufferSource = null;
            return vThis32;
          },
          _clearSound: function (p271) {
            var v227 = /MSIE |Trident\//.test(v151._navigator && v151._navigator.userAgent);
            if (!v227) {
              p271.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA";
            }
          }
        };
        function f39(p272) {
          this._parent = p272;
          this.init();
        }
        f39.prototype = {
          init: function () {
            var vThis33 = this;
            var v228 = vThis33._parent;
            vThis33._muted = v228._muted;
            vThis33._loop = v228._loop;
            vThis33._volume = v228._volume;
            vThis33._rate = v228._rate;
            vThis33._seek = 0;
            vThis33._paused = true;
            vThis33._ended = true;
            vThis33._sprite = "__default";
            vThis33._id = ++v151._counter;
            v228._sounds.push(vThis33);
            vThis33.create();
            return vThis33;
          },
          create: function () {
            var vThis34 = this;
            var v229 = vThis34._parent;
            var v230 = v151._muted || vThis34._muted || vThis34._parent._muted ? 0 : vThis34._volume;
            if (v229._webAudio) {
              vThis34._node = typeof v151.ctx.createGain === "undefined" ? v151.ctx.createGainNode() : v151.ctx.createGain();
              vThis34._node.gain.setValueAtTime(v230, v151.ctx.currentTime);
              vThis34._node.paused = true;
              vThis34._node.connect(v151.masterGain);
            } else if (!v151.noAudio) {
              vThis34._node = v151._obtainHtml5Audio();
              vThis34._errorFn = vThis34._errorListener.bind(vThis34);
              vThis34._node.addEventListener("error", vThis34._errorFn, false);
              vThis34._loadFn = vThis34._loadListener.bind(vThis34);
              vThis34._node.addEventListener(v151._canPlayEvent, vThis34._loadFn, false);
              vThis34._endFn = vThis34._endListener.bind(vThis34);
              vThis34._node.addEventListener("ended", vThis34._endFn, false);
              vThis34._node.src = v229._src;
              vThis34._node.preload = v229._preload === true ? "auto" : v229._preload;
              vThis34._node.volume = v230 * v151.volume();
              vThis34._node.load();
            }
            return vThis34;
          },
          reset: function () {
            var vThis35 = this;
            var v231 = vThis35._parent;
            vThis35._muted = v231._muted;
            vThis35._loop = v231._loop;
            vThis35._volume = v231._volume;
            vThis35._rate = v231._rate;
            vThis35._seek = 0;
            vThis35._rateSeek = 0;
            vThis35._paused = true;
            vThis35._ended = true;
            vThis35._sprite = "__default";
            vThis35._id = ++v151._counter;
            return vThis35;
          },
          _errorListener: function () {
            var vThis36 = this;
            vThis36._parent._emit("loaderror", vThis36._id, vThis36._node.error ? vThis36._node.error.code : 0);
            vThis36._node.removeEventListener("error", vThis36._errorFn, false);
          },
          _loadListener: function () {
            var vThis37 = this;
            var v232 = vThis37._parent;
            v232._duration = Math.ceil(vThis37._node.duration * 10) / 10;
            if (Object.keys(v232._sprite).length === 0) {
              v232._sprite = {
                __default: [0, v232._duration * 1000]
              };
            }
            if (v232._state !== "loaded") {
              v232._state = "loaded";
              v232._emit("load");
              v232._loadQueue();
            }
            vThis37._node.removeEventListener(v151._canPlayEvent, vThis37._loadFn, false);
          },
          _endListener: function () {
            var vThis38 = this;
            var v233 = vThis38._parent;
            if (v233._duration === Infinity) {
              v233._duration = Math.ceil(vThis38._node.duration * 10) / 10;
              if (v233._sprite.__default[1] === Infinity) {
                v233._sprite.__default[1] = v233._duration * 1000;
              }
              v233._ended(vThis38);
            }
            vThis38._node.removeEventListener("ended", vThis38._endFn, false);
          }
        };
        var vO9 = {};
        function f40(p273) {
          var v234 = p273._src;
          if (vO9[v234]) {
            p273._duration = vO9[v234].duration;
            f45(p273);
            return;
          }
          if (/^data:[^;]+;base64,/.test(v234)) {
            var vAtob = atob(v234.split(",")[1]);
            var v235 = new Uint8Array(vAtob.length);
            for (var vLN048 = 0; vLN048 < vAtob.length; ++vLN048) {
              v235[vLN048] = vAtob.charCodeAt(vLN048);
            }
            f42(v235.buffer, p273);
          } else {
            var v236 = new XMLHttpRequest();
            v236.open(p273._xhr.method, v234, true);
            v236.withCredentials = p273._xhr.withCredentials;
            v236.responseType = "arraybuffer";
            if (p273._xhr.headers) {
              Object.keys(p273._xhr.headers).forEach(function (p274) {
                v236.setRequestHeader(p274, p273._xhr.headers[p274]);
              });
            }
            v236.onload = function () {
              var v237 = (v236.status + "")[0];
              if (v237 !== "0" && v237 !== "2" && v237 !== "3") {
                p273._emit("loaderror", null, "Failed loading audio file with status: " + v236.status + ".");
                return;
              }
              f42(v236.response, p273);
            };
            v236.onerror = function () {
              if (p273._webAudio) {
                p273._html5 = true;
                p273._webAudio = false;
                p273._sounds = [];
                delete vO9[v234];
                p273.load();
              }
            };
            f41(v236);
          }
        }
        function f41(p275) {
          try {
            p275.send();
          } catch (e19) {
            p275.onerror();
          }
        }
        function f42(p276, p277) {
          function f43() {
            p277._emit("loaderror", null, "Decoding audio data failed.");
          }
          function f44(p278) {
            if (p278 && p277._sounds.length > 0) {
              vO9[p277._src] = p278;
              f45(p277, p278);
            } else {
              f43();
            }
          }
          if (typeof Promise !== "undefined" && v151.ctx.decodeAudioData.length === 1) {
            v151.ctx.decodeAudioData(p276).then(f44).catch(f43);
          } else {
            v151.ctx.decodeAudioData(p276, f44, f43);
          }
        }
        function f45(p279, p280) {
          if (p280 && !p279._duration) {
            p279._duration = p280.duration;
          }
          if (Object.keys(p279._sprite).length === 0) {
            p279._sprite = {
              __default: [0, p279._duration * 1000]
            };
          }
          if (p279._state !== "loaded") {
            p279._state = "loaded";
            p279._emit("load");
            p279._loadQueue();
          }
        }
        function f46() {
          if (!v151.usingWebAudio) {
            return;
          }
          try {
            if (typeof AudioContext !== "undefined") {
              v151.ctx = new AudioContext();
            } else if (typeof webkitAudioContext !== "undefined") {
              v151.ctx = new webkitAudioContext();
            } else {
              v151.usingWebAudio = false;
            }
          } catch (e20) {
            v151.usingWebAudio = false;
          }
          if (!v151.ctx) {
            v151.usingWebAudio = false;
          }
          var v238 = /iP(hone|od|ad)/.test(v151._navigator && v151._navigator.platform);
          var v239 = v151._navigator && v151._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
          var v240 = v239 ? parseInt(v239[1], 10) : null;
          if (v238 && v240 && v240 < 9) {
            var v241 = /safari/.test(v151._navigator && v151._navigator.userAgent.toLowerCase());
            if (v151._navigator && !v241) {
              v151.usingWebAudio = false;
            }
          }
          if (v151.usingWebAudio) {
            v151.masterGain = typeof v151.ctx.createGain === "undefined" ? v151.ctx.createGainNode() : v151.ctx.createGain();
            v151.masterGain.gain.setValueAtTime(v151._muted ? 0 : v151._volume, v151.ctx.currentTime);
            v151.masterGain.connect(v151.ctx.destination);
          }
          v151._setup();
        }
        if (true) {
          v120 = [];
          v121 = function () {
            return {
              Howler: v151,
              Howl: f32
            };
          }.apply(p221, v120);
          if (v121 !== undefined) {
            p220.exports = v121;
          }
        }
        if (true) {
          p221.Howler = v151;
          p221.Howl = f32;
        }
        if (typeof p222.g !== "undefined") {
          p222.g.HowlerGlobal = f29;
          p222.g.Howler = v151;
          p222.g.Howl = f32;
          p222.g.Sound = f39;
        } else if (typeof window !== "undefined") {
          window.HowlerGlobal = f29;
          window.Howler = v151;
          window.Howl = f32;
          window.Sound = f39;
        }
      })();
      (function () {
        'use strict';

        HowlerGlobal.prototype._pos = [0, 0, 0];
        HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0];
        HowlerGlobal.prototype.stereo = function (p281) {
          var vThis39 = this;
          if (!vThis39.ctx || !vThis39.ctx.listener) {
            return vThis39;
          }
          for (var v242 = vThis39._howls.length - 1; v242 >= 0; v242--) {
            vThis39._howls[v242].stereo(p281);
          }
          return vThis39;
        };
        HowlerGlobal.prototype.pos = function (p282, p283, p284) {
          var vThis40 = this;
          if (!vThis40.ctx || !vThis40.ctx.listener) {
            return vThis40;
          }
          p283 = typeof p283 !== "number" ? vThis40._pos[1] : p283;
          p284 = typeof p284 !== "number" ? vThis40._pos[2] : p284;
          if (typeof p282 === "number") {
            vThis40._pos = [p282, p283, p284];
            if (typeof vThis40.ctx.listener.positionX !== "undefined") {
              vThis40.ctx.listener.positionX.setTargetAtTime(vThis40._pos[0], Howler.ctx.currentTime, 0.1);
              vThis40.ctx.listener.positionY.setTargetAtTime(vThis40._pos[1], Howler.ctx.currentTime, 0.1);
              vThis40.ctx.listener.positionZ.setTargetAtTime(vThis40._pos[2], Howler.ctx.currentTime, 0.1);
            } else {
              vThis40.ctx.listener.setPosition(vThis40._pos[0], vThis40._pos[1], vThis40._pos[2]);
            }
          } else {
            return vThis40._pos;
          }
          return vThis40;
        };
        HowlerGlobal.prototype.orientation = function (p285, p286, p287, p288, p289, p290) {
          var vThis41 = this;
          if (!vThis41.ctx || !vThis41.ctx.listener) {
            return vThis41;
          }
          var v243 = vThis41._orientation;
          p286 = typeof p286 !== "number" ? v243[1] : p286;
          p287 = typeof p287 !== "number" ? v243[2] : p287;
          p288 = typeof p288 !== "number" ? v243[3] : p288;
          p289 = typeof p289 !== "number" ? v243[4] : p289;
          p290 = typeof p290 !== "number" ? v243[5] : p290;
          if (typeof p285 === "number") {
            vThis41._orientation = [p285, p286, p287, p288, p289, p290];
            if (typeof vThis41.ctx.listener.forwardX !== "undefined") {
              vThis41.ctx.listener.forwardX.setTargetAtTime(p285, Howler.ctx.currentTime, 0.1);
              vThis41.ctx.listener.forwardY.setTargetAtTime(p286, Howler.ctx.currentTime, 0.1);
              vThis41.ctx.listener.forwardZ.setTargetAtTime(p287, Howler.ctx.currentTime, 0.1);
              vThis41.ctx.listener.upX.setTargetAtTime(p288, Howler.ctx.currentTime, 0.1);
              vThis41.ctx.listener.upY.setTargetAtTime(p289, Howler.ctx.currentTime, 0.1);
              vThis41.ctx.listener.upZ.setTargetAtTime(p290, Howler.ctx.currentTime, 0.1);
            } else {
              vThis41.ctx.listener.setOrientation(p285, p286, p287, p288, p289, p290);
            }
          } else {
            return v243;
          }
          return vThis41;
        };
        Howl.prototype.init = function (p291) {
          return function (p292) {
            var vThis42 = this;
            vThis42._orientation = p292.orientation || [1, 0, 0];
            vThis42._stereo = p292.stereo || null;
            vThis42._pos = p292.pos || null;
            vThis42._pannerAttr = {
              coneInnerAngle: typeof p292.coneInnerAngle !== "undefined" ? p292.coneInnerAngle : 360,
              coneOuterAngle: typeof p292.coneOuterAngle !== "undefined" ? p292.coneOuterAngle : 360,
              coneOuterGain: typeof p292.coneOuterGain !== "undefined" ? p292.coneOuterGain : 0,
              distanceModel: typeof p292.distanceModel !== "undefined" ? p292.distanceModel : "inverse",
              maxDistance: typeof p292.maxDistance !== "undefined" ? p292.maxDistance : 10000,
              panningModel: typeof p292.panningModel !== "undefined" ? p292.panningModel : "HRTF",
              refDistance: typeof p292.refDistance !== "undefined" ? p292.refDistance : 1,
              rolloffFactor: typeof p292.rolloffFactor !== "undefined" ? p292.rolloffFactor : 1
            };
            vThis42._onstereo = p292.onstereo ? [{
              fn: p292.onstereo
            }] : [];
            vThis42._onpos = p292.onpos ? [{
              fn: p292.onpos
            }] : [];
            vThis42._onorientation = p292.onorientation ? [{
              fn: p292.onorientation
            }] : [];
            return p291.call(this, p292);
          };
        }(Howl.prototype.init);
        Howl.prototype.stereo = function (p293, p294) {
          var vThis43 = this;
          if (!vThis43._webAudio) {
            return vThis43;
          }
          if (vThis43._state !== "loaded") {
            vThis43._queue.push({
              event: "stereo",
              action: function () {
                vThis43.stereo(p293, p294);
              }
            });
            return vThis43;
          }
          var v244 = typeof Howler.ctx.createStereoPanner === "undefined" ? "spatial" : "stereo";
          if (typeof p294 === "undefined") {
            if (typeof p293 === "number") {
              vThis43._stereo = p293;
              vThis43._pos = [p293, 0, 0];
            } else {
              return vThis43._stereo;
            }
          }
          var v245 = vThis43._getSoundIds(p294);
          for (var vLN049 = 0; vLN049 < v245.length; vLN049++) {
            var v246 = vThis43._soundById(v245[vLN049]);
            if (v246) {
              if (typeof p293 === "number") {
                v246._stereo = p293;
                v246._pos = [p293, 0, 0];
                if (v246._node) {
                  v246._pannerAttr.panningModel = "equalpower";
                  if (!v246._panner || !v246._panner.pan) {
                    f47(v246, v244);
                  }
                  if (v244 === "spatial") {
                    if (typeof v246._panner.positionX !== "undefined") {
                      v246._panner.positionX.setValueAtTime(p293, Howler.ctx.currentTime);
                      v246._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime);
                      v246._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime);
                    } else {
                      v246._panner.setPosition(p293, 0, 0);
                    }
                  } else {
                    v246._panner.pan.setValueAtTime(p293, Howler.ctx.currentTime);
                  }
                }
                vThis43._emit("stereo", v246._id);
              } else {
                return v246._stereo;
              }
            }
          }
          return vThis43;
        };
        Howl.prototype.pos = function (p295, p296, p297, p298) {
          var vThis44 = this;
          if (!vThis44._webAudio) {
            return vThis44;
          }
          if (vThis44._state !== "loaded") {
            vThis44._queue.push({
              event: "pos",
              action: function () {
                vThis44.pos(p295, p296, p297, p298);
              }
            });
            return vThis44;
          }
          p296 = typeof p296 !== "number" ? 0 : p296;
          p297 = typeof p297 !== "number" ? -0.5 : p297;
          if (typeof p298 === "undefined") {
            if (typeof p295 === "number") {
              vThis44._pos = [p295, p296, p297];
            } else {
              return vThis44._pos;
            }
          }
          var v247 = vThis44._getSoundIds(p298);
          for (var vLN050 = 0; vLN050 < v247.length; vLN050++) {
            var v248 = vThis44._soundById(v247[vLN050]);
            if (v248) {
              if (typeof p295 === "number") {
                v248._pos = [p295, p296, p297];
                if (v248._node) {
                  if (!v248._panner || v248._panner.pan) {
                    f47(v248, "spatial");
                  }
                  if (typeof v248._panner.positionX !== "undefined") {
                    v248._panner.positionX.setValueAtTime(p295, Howler.ctx.currentTime);
                    v248._panner.positionY.setValueAtTime(p296, Howler.ctx.currentTime);
                    v248._panner.positionZ.setValueAtTime(p297, Howler.ctx.currentTime);
                  } else {
                    v248._panner.setPosition(p295, p296, p297);
                  }
                }
                vThis44._emit("pos", v248._id);
              } else {
                return v248._pos;
              }
            }
          }
          return vThis44;
        };
        Howl.prototype.orientation = function (p299, p300, p301, p302) {
          var vThis45 = this;
          if (!vThis45._webAudio) {
            return vThis45;
          }
          if (vThis45._state !== "loaded") {
            vThis45._queue.push({
              event: "orientation",
              action: function () {
                vThis45.orientation(p299, p300, p301, p302);
              }
            });
            return vThis45;
          }
          p300 = typeof p300 !== "number" ? vThis45._orientation[1] : p300;
          p301 = typeof p301 !== "number" ? vThis45._orientation[2] : p301;
          if (typeof p302 === "undefined") {
            if (typeof p299 === "number") {
              vThis45._orientation = [p299, p300, p301];
            } else {
              return vThis45._orientation;
            }
          }
          var v249 = vThis45._getSoundIds(p302);
          for (var vLN051 = 0; vLN051 < v249.length; vLN051++) {
            var v250 = vThis45._soundById(v249[vLN051]);
            if (v250) {
              if (typeof p299 === "number") {
                v250._orientation = [p299, p300, p301];
                if (v250._node) {
                  if (!v250._panner) {
                    if (!v250._pos) {
                      v250._pos = vThis45._pos || [0, 0, -0.5];
                    }
                    f47(v250, "spatial");
                  }
                  if (typeof v250._panner.orientationX !== "undefined") {
                    v250._panner.orientationX.setValueAtTime(p299, Howler.ctx.currentTime);
                    v250._panner.orientationY.setValueAtTime(p300, Howler.ctx.currentTime);
                    v250._panner.orientationZ.setValueAtTime(p301, Howler.ctx.currentTime);
                  } else {
                    v250._panner.setOrientation(p299, p300, p301);
                  }
                }
                vThis45._emit("orientation", v250._id);
              } else {
                return v250._orientation;
              }
            }
          }
          return vThis45;
        };
        Howl.prototype.pannerAttr = function () {
          var vThis46 = this;
          var vArguments5 = arguments;
          var v251;
          var v252;
          var v253;
          if (!vThis46._webAudio) {
            return vThis46;
          }
          if (vArguments5.length === 0) {
            return vThis46._pannerAttr;
          } else if (vArguments5.length === 1) {
            if (typeof vArguments5[0] === "object") {
              v251 = vArguments5[0];
              if (typeof v252 === "undefined") {
                if (!v251.pannerAttr) {
                  v251.pannerAttr = {
                    coneInnerAngle: v251.coneInnerAngle,
                    coneOuterAngle: v251.coneOuterAngle,
                    coneOuterGain: v251.coneOuterGain,
                    distanceModel: v251.distanceModel,
                    maxDistance: v251.maxDistance,
                    refDistance: v251.refDistance,
                    rolloffFactor: v251.rolloffFactor,
                    panningModel: v251.panningModel
                  };
                }
                vThis46._pannerAttr = {
                  coneInnerAngle: typeof v251.pannerAttr.coneInnerAngle !== "undefined" ? v251.pannerAttr.coneInnerAngle : vThis46._coneInnerAngle,
                  coneOuterAngle: typeof v251.pannerAttr.coneOuterAngle !== "undefined" ? v251.pannerAttr.coneOuterAngle : vThis46._coneOuterAngle,
                  coneOuterGain: typeof v251.pannerAttr.coneOuterGain !== "undefined" ? v251.pannerAttr.coneOuterGain : vThis46._coneOuterGain,
                  distanceModel: typeof v251.pannerAttr.distanceModel !== "undefined" ? v251.pannerAttr.distanceModel : vThis46._distanceModel,
                  maxDistance: typeof v251.pannerAttr.maxDistance !== "undefined" ? v251.pannerAttr.maxDistance : vThis46._maxDistance,
                  refDistance: typeof v251.pannerAttr.refDistance !== "undefined" ? v251.pannerAttr.refDistance : vThis46._refDistance,
                  rolloffFactor: typeof v251.pannerAttr.rolloffFactor !== "undefined" ? v251.pannerAttr.rolloffFactor : vThis46._rolloffFactor,
                  panningModel: typeof v251.pannerAttr.panningModel !== "undefined" ? v251.pannerAttr.panningModel : vThis46._panningModel
                };
              }
            } else {
              v253 = vThis46._soundById(parseInt(vArguments5[0], 10));
              if (v253) {
                return v253._pannerAttr;
              } else {
                return vThis46._pannerAttr;
              }
            }
          } else if (vArguments5.length === 2) {
            v251 = vArguments5[0];
            v252 = parseInt(vArguments5[1], 10);
          }
          var v254 = vThis46._getSoundIds(v252);
          for (var vLN052 = 0; vLN052 < v254.length; vLN052++) {
            v253 = vThis46._soundById(v254[vLN052]);
            if (v253) {
              var v255 = v253._pannerAttr;
              v255 = {
                coneInnerAngle: typeof v251.coneInnerAngle !== "undefined" ? v251.coneInnerAngle : v255.coneInnerAngle,
                coneOuterAngle: typeof v251.coneOuterAngle !== "undefined" ? v251.coneOuterAngle : v255.coneOuterAngle,
                coneOuterGain: typeof v251.coneOuterGain !== "undefined" ? v251.coneOuterGain : v255.coneOuterGain,
                distanceModel: typeof v251.distanceModel !== "undefined" ? v251.distanceModel : v255.distanceModel,
                maxDistance: typeof v251.maxDistance !== "undefined" ? v251.maxDistance : v255.maxDistance,
                refDistance: typeof v251.refDistance !== "undefined" ? v251.refDistance : v255.refDistance,
                rolloffFactor: typeof v251.rolloffFactor !== "undefined" ? v251.rolloffFactor : v255.rolloffFactor,
                panningModel: typeof v251.panningModel !== "undefined" ? v251.panningModel : v255.panningModel
              };
              var v256 = v253._panner;
              if (!v256) {
                if (!v253._pos) {
                  v253._pos = vThis46._pos || [0, 0, -0.5];
                }
                f47(v253, "spatial");
                v256 = v253._panner;
              }
              v256.coneInnerAngle = v255.coneInnerAngle;
              v256.coneOuterAngle = v255.coneOuterAngle;
              v256.coneOuterGain = v255.coneOuterGain;
              v256.distanceModel = v255.distanceModel;
              v256.maxDistance = v255.maxDistance;
              v256.refDistance = v255.refDistance;
              v256.rolloffFactor = v255.rolloffFactor;
              v256.panningModel = v255.panningModel;
            }
          }
          return vThis46;
        };
        Sound.prototype.init = function (p303) {
          return function () {
            var vThis47 = this;
            var v257 = vThis47._parent;
            vThis47._orientation = v257._orientation;
            vThis47._stereo = v257._stereo;
            vThis47._pos = v257._pos;
            vThis47._pannerAttr = v257._pannerAttr;
            p303.call(this);
            if (vThis47._stereo) {
              v257.stereo(vThis47._stereo);
            } else if (vThis47._pos) {
              v257.pos(vThis47._pos[0], vThis47._pos[1], vThis47._pos[2], vThis47._id);
            }
          };
        }(Sound.prototype.init);
        Sound.prototype.reset = function (p304) {
          return function () {
            var vThis48 = this;
            var v258 = vThis48._parent;
            vThis48._orientation = v258._orientation;
            vThis48._stereo = v258._stereo;
            vThis48._pos = v258._pos;
            vThis48._pannerAttr = v258._pannerAttr;
            if (vThis48._stereo) {
              v258.stereo(vThis48._stereo);
            } else if (vThis48._pos) {
              v258.pos(vThis48._pos[0], vThis48._pos[1], vThis48._pos[2], vThis48._id);
            } else if (vThis48._panner) {
              vThis48._panner.disconnect(0);
              vThis48._panner = undefined;
              v258._refreshBuffer(vThis48);
            }
            return p304.call(this);
          };
        }(Sound.prototype.reset);
        function f47(p305, p306) {
          p306 = p306 || "spatial";
          if (p306 === "spatial") {
            p305._panner = Howler.ctx.createPanner();
            p305._panner.coneInnerAngle = p305._pannerAttr.coneInnerAngle;
            p305._panner.coneOuterAngle = p305._pannerAttr.coneOuterAngle;
            p305._panner.coneOuterGain = p305._pannerAttr.coneOuterGain;
            p305._panner.distanceModel = p305._pannerAttr.distanceModel;
            p305._panner.maxDistance = p305._pannerAttr.maxDistance;
            p305._panner.refDistance = p305._pannerAttr.refDistance;
            p305._panner.rolloffFactor = p305._pannerAttr.rolloffFactor;
            p305._panner.panningModel = p305._pannerAttr.panningModel;
            if (typeof p305._panner.positionX !== "undefined") {
              p305._panner.positionX.setValueAtTime(p305._pos[0], Howler.ctx.currentTime);
              p305._panner.positionY.setValueAtTime(p305._pos[1], Howler.ctx.currentTime);
              p305._panner.positionZ.setValueAtTime(p305._pos[2], Howler.ctx.currentTime);
            } else {
              p305._panner.setPosition(p305._pos[0], p305._pos[1], p305._pos[2]);
            }
            if (typeof p305._panner.orientationX !== "undefined") {
              p305._panner.orientationX.setValueAtTime(p305._orientation[0], Howler.ctx.currentTime);
              p305._panner.orientationY.setValueAtTime(p305._orientation[1], Howler.ctx.currentTime);
              p305._panner.orientationZ.setValueAtTime(p305._orientation[2], Howler.ctx.currentTime);
            } else {
              p305._panner.setOrientation(p305._orientation[0], p305._orientation[1], p305._orientation[2]);
            }
          } else {
            p305._panner = Howler.ctx.createStereoPanner();
            p305._panner.pan.setValueAtTime(p305._stereo, Howler.ctx.currentTime);
          }
          p305._panner.connect(p305._node);
          if (!p305._paused) {
            p305._parent.pause(p305._id, true).play(p305._id, true);
          }
        }
      })();
    },
    "./node_modules/socket.io-client/build/esm/contrib/backo2.js": (p307, p308, p309) => {
      'use strict';

      p309.r(p308);
      p309.d(p308, {
        Backoff: () => f48
      });
      function f48(p310) {
        p310 = p310 || {};
        this.ms = p310.min || 100;
        this.max = p310.max || 10000;
        this.factor = p310.factor || 2;
        this.jitter = p310.jitter > 0 && p310.jitter <= 1 ? p310.jitter : 0;
        this.attempts = 0;
      }
      f48.prototype.duration = function () {
        var v259 = this.ms * Math.pow(this.factor, this.attempts++);
        if (this.jitter) {
          var v260 = Math.random();
          var v261 = Math.floor(v260 * this.jitter * v259);
          v259 = (Math.floor(v260 * 10) & 1) == 0 ? v259 - v261 : v259 + v261;
        }
        return Math.min(v259, this.max) | 0;
      };
      f48.prototype.reset = function () {
        this.attempts = 0;
      };
      f48.prototype.setMin = function (p311) {
        this.ms = p311;
      };
      f48.prototype.setMax = function (p312) {
        this.max = p312;
      };
      f48.prototype.setJitter = function (p313) {
        this.jitter = p313;
      };
    },
    "./node_modules/socket.io-client/build/esm/index.js": (p314, p315, p316) => {
      'use strict';

      p316.r(p315);
      p316.d(p315, {
        Fetch: () => vP3165.Fetch,
        Manager: () => vP3162.Manager,
        NodeWebSocket: () => vP3165.NodeWebSocket,
        NodeXHR: () => vP3165.NodeXHR,
        Socket: () => vP3163.Socket,
        WebSocket: () => vP3165.WebSocket,
        WebTransport: () => vP3165.WebTransport,
        XHR: () => vP3165.XHR,
        connect: () => f49,
        default: () => f49,
        io: () => f49,
        protocol: () => vP3164.protocol
      });
      var vP316 = p316("./node_modules/socket.io-client/build/esm/url.js");
      var vP3162 = p316("./node_modules/socket.io-client/build/esm/manager.js");
      var vP3163 = p316("./node_modules/socket.io-client/build/esm/socket.js");
      var vP3164 = p316("./node_modules/socket.io-parser/build/esm/index.js");
      var vP3165 = p316("./node_modules/engine.io-client/build/esm/index.js");
      const vO10 = {};
      function f49(p317, p318) {
        if (typeof p317 === "object") {
          p318 = p317;
          p317 = undefined;
        }
        p318 = p318 || {};
        const v262 = (0, vP316.url)(p317, p318.path || "/socket.io");
        const v263 = v262.source;
        const v264 = v262.id;
        const v265 = v262.path;
        const v266 = vO10[v264] && v265 in vO10[v264].nsps;
        const v267 = p318.forceNew || p318["force new connection"] || p318.multiplex === false || v266;
        let v268;
        if (v267) {
          v268 = new vP3162.Manager(v263, p318);
        } else {
          if (!vO10[v264]) {
            vO10[v264] = new vP3162.Manager(v263, p318);
          }
          v268 = vO10[v264];
        }
        if (v262.query && !p318.query) {
          p318.query = v262.queryKey;
        }
        return v268.socket(v262.path, p318);
      }
      Object.assign(f49, {
        Manager: vP3162.Manager,
        Socket: vP3163.Socket,
        io: f49,
        connect: f49
      });
    },
    "./node_modules/socket.io-client/build/esm/manager.js": (p319, p320, p321) => {
      'use strict';

      p321.r(p320);
      p321.d(p320, {
        Manager: () => C14
      });
      var vP321 = p321("./node_modules/engine.io-client/build/esm/index.js");
      var vP3212 = p321("./node_modules/socket.io-client/build/esm/socket.js");
      var vP3213 = p321("./node_modules/socket.io-parser/build/esm/index.js");
      var vP3214 = p321("./node_modules/socket.io-client/build/esm/on.js");
      var vP3215 = p321("./node_modules/socket.io-client/build/esm/contrib/backo2.js");
      var vP3216 = p321("./node_modules/@socket.io/component-emitter/lib/esm/index.js");
      class C14 extends vP3216.Emitter {
        constructor(p322, p323) {
          super();
          this.nsps = {};
          this.subs = [];
          if (p322 && typeof p322 === "object") {
            p323 = p322;
            p322 = undefined;
          }
          p323 = p323 || {};
          p323.path = p323.path || "/socket.io";
          this.opts = p323;
          (0, vP321.installTimerFunctions)(this, p323);
          this.reconnection(p323.reconnection !== false);
          this.reconnectionAttempts(p323.reconnectionAttempts || Infinity);
          this.reconnectionDelay(p323.reconnectionDelay || 1000);
          this.reconnectionDelayMax(p323.reconnectionDelayMax || 5000);
          this.randomizationFactor(p323.randomizationFactor ?? 0.5);
          this.backoff = new vP3215.Backoff({
            min: this.reconnectionDelay(),
            max: this.reconnectionDelayMax(),
            jitter: this.randomizationFactor()
          });
          this.timeout(p323.timeout == null ? 20000 : p323.timeout);
          this._readyState = "closed";
          this.uri = p322;
          const v269 = p323.parser || vP3213;
          this.encoder = new v269.Encoder();
          this.decoder = new v269.Decoder();
          this._autoConnect = p323.autoConnect !== false;
          if (this._autoConnect) {
            this.open();
          }
        }
        reconnection(p324) {
          if (!arguments.length) {
            return this._reconnection;
          }
          this._reconnection = !!p324;
          if (!p324) {
            this.skipReconnect = true;
          }
          return this;
        }
        reconnectionAttempts(p325) {
          if (p325 === undefined) {
            return this._reconnectionAttempts;
          }
          this._reconnectionAttempts = p325;
          return this;
        }
        reconnectionDelay(p326) {
          var v270;
          if (p326 === undefined) {
            return this._reconnectionDelay;
          }
          this._reconnectionDelay = p326;
          if ((v270 = this.backoff) === null || v270 === undefined) {
            undefined;
          } else {
            v270.setMin(p326);
          }
          return this;
        }
        randomizationFactor(p327) {
          var v271;
          if (p327 === undefined) {
            return this._randomizationFactor;
          }
          this._randomizationFactor = p327;
          if ((v271 = this.backoff) === null || v271 === undefined) {
            undefined;
          } else {
            v271.setJitter(p327);
          }
          return this;
        }
        reconnectionDelayMax(p328) {
          var v272;
          if (p328 === undefined) {
            return this._reconnectionDelayMax;
          }
          this._reconnectionDelayMax = p328;
          if ((v272 = this.backoff) === null || v272 === undefined) {
            undefined;
          } else {
            v272.setMax(p328);
          }
          return this;
        }
        timeout(p329) {
          if (!arguments.length) {
            return this._timeout;
          }
          this._timeout = p329;
          return this;
        }
        maybeReconnectOnOpen() {
          if (!this._reconnecting && this._reconnection && this.backoff.attempts === 0) {
            this.reconnect();
          }
        }
        open(p330) {
          if (~this._readyState.indexOf("open")) {
            return this;
          }
          this.engine = new vP321.Socket(this.uri, this.opts);
          const v273 = this.engine;
          const vThis49 = this;
          this._readyState = "opening";
          this.skipReconnect = false;
          const v274 = (0, vP3214.on)(v273, "open", function () {
            vThis49.onopen();
            if (p330) {
              p330();
            }
          });
          const vF24 = p331 => {
            this.cleanup();
            this._readyState = "closed";
            this.emitReserved("error", p331);
            if (p330) {
              p330(p331);
            } else {
              this.maybeReconnectOnOpen();
            }
          };
          const v275 = (0, vP3214.on)(v273, "error", vF24);
          if (this._timeout !== false) {
            const v276 = this._timeout;
            const v277 = this.setTimeoutFn(() => {
              v274();
              vF24(new Error("timeout"));
              v273.close();
            }, v276);
            if (this.opts.autoUnref) {
              v277.unref();
            }
            this.subs.push(() => {
              this.clearTimeoutFn(v277);
            });
          }
          this.subs.push(v274);
          this.subs.push(v275);
          return this;
        }
        connect(p332) {
          return this.open(p332);
        }
        onopen() {
          this.cleanup();
          this._readyState = "open";
          this.emitReserved("open");
          const v278 = this.engine;
          this.subs.push((0, vP3214.on)(v278, "ping", this.onping.bind(this)), (0, vP3214.on)(v278, "data", this.ondata.bind(this)), (0, vP3214.on)(v278, "error", this.onerror.bind(this)), (0, vP3214.on)(v278, "close", this.onclose.bind(this)), (0, vP3214.on)(this.decoder, "decoded", this.ondecoded.bind(this)));
        }
        onping() {
          this.emitReserved("ping");
        }
        ondata(p333) {
          try {
            this.decoder.add(p333);
          } catch (e21) {
            this.onclose("parse error", e21);
          }
        }
        ondecoded(p334) {
          (0, vP321.nextTick)(() => {
            this.emitReserved("packet", p334);
          }, this.setTimeoutFn);
        }
        onerror(p335) {
          this.emitReserved("error", p335);
        }
        socket(p336, p337) {
          let v279 = this.nsps[p336];
          if (!v279) {
            v279 = new vP3212.Socket(this, p336, p337);
            this.nsps[p336] = v279;
          } else if (this._autoConnect && !v279.active) {
            v279.connect();
          }
          return v279;
        }
        _destroy(p338) {
          const v280 = Object.keys(this.nsps);
          for (const v281 of v280) {
            const v282 = this.nsps[v281];
            if (v282.active) {
              return;
            }
          }
          this._close();
        }
        _packet(p339) {
          const v283 = this.encoder.encode(p339);
          for (let vLN053 = 0; vLN053 < v283.length; vLN053++) {
            this.engine.write(v283[vLN053], p339.options);
          }
        }
        cleanup() {
          this.subs.forEach(p340 => p340());
          this.subs.length = 0;
          this.decoder.destroy();
        }
        _close() {
          this.skipReconnect = true;
          this._reconnecting = false;
          this.onclose("forced close");
        }
        disconnect() {
          return this._close();
        }
        onclose(p341, p342) {
          var v284;
          this.cleanup();
          if ((v284 = this.engine) === null || v284 === undefined) {
            undefined;
          } else {
            v284.close();
          }
          this.backoff.reset();
          this._readyState = "closed";
          this.emitReserved("close", p341, p342);
          if (this._reconnection && !this.skipReconnect) {
            this.reconnect();
          }
        }
        reconnect() {
          if (this._reconnecting || this.skipReconnect) {
            return this;
          }
          const vThis50 = this;
          if (this.backoff.attempts >= this._reconnectionAttempts) {
            this.backoff.reset();
            this.emitReserved("reconnect_failed");
            this._reconnecting = false;
          } else {
            const v285 = this.backoff.duration();
            this._reconnecting = true;
            const v286 = this.setTimeoutFn(() => {
              if (vThis50.skipReconnect) {
                return;
              }
              this.emitReserved("reconnect_attempt", vThis50.backoff.attempts);
              if (vThis50.skipReconnect) {
                return;
              }
              vThis50.open(p343 => {
                if (p343) {
                  vThis50._reconnecting = false;
                  vThis50.reconnect();
                  this.emitReserved("reconnect_error", p343);
                } else {
                  vThis50.onreconnect();
                }
              });
            }, v285);
            if (this.opts.autoUnref) {
              v286.unref();
            }
            this.subs.push(() => {
              this.clearTimeoutFn(v286);
            });
          }
        }
        onreconnect() {
          const v287 = this.backoff.attempts;
          this._reconnecting = false;
          this.backoff.reset();
          this.emitReserved("reconnect", v287);
        }
      }
    },
    "./node_modules/socket.io-client/build/esm/on.js": (p344, p345, p346) => {
      'use strict';

      p346.r(p345);
      p346.d(p345, {
        on: () => f50
      });
      function f50(p347, p348, p349) {
        p347.on(p348, p349);
        return function f51() {
          p347.off(p348, p349);
        };
      }
    },
    "./node_modules/socket.io-client/build/esm/socket.js": (p350, p351, p352) => {
      'use strict';

      p352.r(p351);
      p352.d(p351, {
        Socket: () => C15
      });
      var vP352 = p352("./node_modules/socket.io-parser/build/esm/index.js");
      var vP3522 = p352("./node_modules/socket.io-client/build/esm/on.js");
      var vP3523 = p352("./node_modules/@socket.io/component-emitter/lib/esm/index.js");
      const v288 = Object.freeze({
        connect: 1,
        connect_error: 1,
        disconnect: 1,
        disconnecting: 1,
        newListener: 1,
        removeListener: 1
      });
      class C15 extends vP3523.Emitter {
        constructor(p353, p354, p355) {
          super();
          this.connected = false;
          this.recovered = false;
          this.receiveBuffer = [];
          this.sendBuffer = [];
          this._queue = [];
          this._queueSeq = 0;
          this.ids = 0;
          this.acks = {};
          this.flags = {};
          this.io = p353;
          this.nsp = p354;
          if (p355 && p355.auth) {
            this.auth = p355.auth;
          }
          this._opts = Object.assign({}, p355);
          if (this.io._autoConnect) {
            this.open();
          }
        }
        get disconnected() {
          return !this.connected;
        }
        subEvents() {
          if (this.subs) {
            return;
          }
          const v289 = this.io;
          this.subs = [(0, vP3522.on)(v289, "open", this.onopen.bind(this)), (0, vP3522.on)(v289, "packet", this.onpacket.bind(this)), (0, vP3522.on)(v289, "error", this.onerror.bind(this)), (0, vP3522.on)(v289, "close", this.onclose.bind(this))];
        }
        get active() {
          return !!this.subs;
        }
        connect() {
          if (this.connected) {
            return this;
          }
          this.subEvents();
          if (!this.io._reconnecting) {
            this.io.open();
          }
          if (this.io._readyState === "open") {
            this.onopen();
          }
          return this;
        }
        open() {
          return this.connect();
        }
        send(..._0x4a6dd1) {
          _0x4a6dd1.unshift("message");
          this.emit.apply(this, _0x4a6dd1);
          return this;
        }
        emit(p356, ..._0x3891cd) {
          var v290;
          if (v288.hasOwnProperty(p356)) {
            throw new Error("\"" + p356.toString() + "\" is a reserved event name");
          }
          _0x3891cd.unshift(p356);
          if (this._opts.retries && !this.flags.fromQueue && !this.flags.volatile) {
            this._addToQueue(_0x3891cd);
            return this;
          }
          const vO11 = {
            type: vP352.PacketType.EVENT,
            data: _0x3891cd
          };
          vO11.options = {};
          vO11.options.compress = this.flags.compress !== false;
          if (typeof _0x3891cd[_0x3891cd.length - 1] === "function") {
            const v291 = this.ids++;
            const v292 = _0x3891cd.pop();
            this._registerAckCallback(v291, v292);
            vO11.id = v291;
          }
          const v293 = this.io.engine?.transport?.writable;
          const v294 = this.connected && !((v290 = this.io.engine) === null || v290 === undefined ? undefined : v290._hasPingExpired());
          const v295 = this.flags.volatile && !v293;
          if (v295) {} else if (v294) {
            this.notifyOutgoingListeners(vO11);
            this.packet(vO11);
          } else {
            this.sendBuffer.push(vO11);
          }
          this.flags = {};
          return this;
        }
        _registerAckCallback(p357, p358) {
          const v296 = this.flags.timeout ?? this._opts.ackTimeout;
          if (v296 === undefined) {
            this.acks[p357] = p358;
            return;
          }
          const v297 = this.io.setTimeoutFn(() => {
            delete this.acks[p357];
            for (let vLN054 = 0; vLN054 < this.sendBuffer.length; vLN054++) {
              if (this.sendBuffer[vLN054].id === p357) {
                this.sendBuffer.splice(vLN054, 1);
              }
            }
            p358.call(this, new Error("operation has timed out"));
          }, v296);
          const vF25 = (..._0x545d2e) => {
            this.io.clearTimeoutFn(v297);
            p358.apply(this, _0x545d2e);
          };
          vF25.withError = true;
          this.acks[p357] = vF25;
        }
        emitWithAck(p359, ..._0x2e95e6) {
          return new Promise((p360, p361) => {
            const vF26 = (p362, p363) => {
              if (p362) {
                return p361(p362);
              } else {
                return p360(p363);
              }
            };
            vF26.withError = true;
            _0x2e95e6.push(vF26);
            this.emit(p359, ..._0x2e95e6);
          });
        }
        _addToQueue(p364) {
          let v298;
          if (typeof p364[p364.length - 1] === "function") {
            v298 = p364.pop();
          }
          const vO12 = {
            id: this._queueSeq++,
            tryCount: 0,
            pending: false,
            args: p364,
            flags: Object.assign({
              fromQueue: true
            }, this.flags)
          };
          p364.push((p365, ..._0x307c2e) => {
            if (vO12 !== this._queue[0]) {
              return;
            }
            const v299 = p365 !== null;
            if (v299) {
              if (vO12.tryCount > this._opts.retries) {
                this._queue.shift();
                if (v298) {
                  v298(p365);
                }
              }
            } else {
              this._queue.shift();
              if (v298) {
                v298(null, ..._0x307c2e);
              }
            }
            vO12.pending = false;
            return this._drainQueue();
          });
          this._queue.push(vO12);
          this._drainQueue();
        }
        _drainQueue(p366 = false) {
          if (!this.connected || this._queue.length === 0) {
            return;
          }
          const v300 = this._queue[0];
          if (v300.pending && !p366) {
            return;
          }
          v300.pending = true;
          v300.tryCount++;
          this.flags = v300.flags;
          this.emit.apply(this, v300.args);
        }
        packet(p367) {
          p367.nsp = this.nsp;
          this.io._packet(p367);
        }
        onopen() {
          if (typeof this.auth == "function") {
            this.auth(p368 => {
              this._sendConnectPacket(p368);
            });
          } else {
            this._sendConnectPacket(this.auth);
          }
        }
        _sendConnectPacket(p369) {
          this.packet({
            type: vP352.PacketType.CONNECT,
            data: this._pid ? Object.assign({
              pid: this._pid,
              offset: this._lastOffset
            }, p369) : p369
          });
        }
        onerror(p370) {
          if (!this.connected) {
            this.emitReserved("connect_error", p370);
          }
        }
        onclose(p371, p372) {
          this.connected = false;
          delete this.id;
          this.emitReserved("disconnect", p371, p372);
          this._clearAcks();
        }
        _clearAcks() {
          Object.keys(this.acks).forEach(p373 => {
            const v301 = this.sendBuffer.some(p374 => String(p374.id) === p373);
            if (!v301) {
              const v302 = this.acks[p373];
              delete this.acks[p373];
              if (v302.withError) {
                v302.call(this, new Error("socket has been disconnected"));
              }
            }
          });
        }
        onpacket(p375) {
          const v303 = p375.nsp === this.nsp;
          if (!v303) {
            return;
          }
          switch (p375.type) {
            case vP352.PacketType.CONNECT:
              if (p375.data && p375.data.sid) {
                this.onconnect(p375.data.sid, p375.data.pid);
              } else {
                this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
              }
              break;
            case vP352.PacketType.EVENT:
            case vP352.PacketType.BINARY_EVENT:
              this.onevent(p375);
              break;
            case vP352.PacketType.ACK:
            case vP352.PacketType.BINARY_ACK:
              this.onack(p375);
              break;
            case vP352.PacketType.DISCONNECT:
              this.ondisconnect();
              break;
            case vP352.PacketType.CONNECT_ERROR:
              this.destroy();
              const v304 = new Error(p375.data.message);
              v304.data = p375.data.data;
              this.emitReserved("connect_error", v304);
              break;
          }
        }
        onevent(p376) {
          const v305 = p376.data || [];
          if (p376.id != null) {
            v305.push(this.ack(p376.id));
          }
          if (this.connected) {
            this.emitEvent(v305);
          } else {
            this.receiveBuffer.push(Object.freeze(v305));
          }
        }
        emitEvent(p377) {
          if (this._anyListeners && this._anyListeners.length) {
            const v306 = this._anyListeners.slice();
            for (const v307 of v306) {
              v307.apply(this, p377);
            }
          }
          super.emit.apply(this, p377);
          if (this._pid && p377.length && typeof p377[p377.length - 1] === "string") {
            this._lastOffset = p377[p377.length - 1];
          }
        }
        ack(p378) {
          const vThis51 = this;
          let v308 = false;
          return function (..._0x533fb7) {
            if (v308) {
              return;
            }
            v308 = true;
            vThis51.packet({
              type: vP352.PacketType.ACK,
              id: p378,
              data: _0x533fb7
            });
          };
        }
        onack(p379) {
          const v309 = this.acks[p379.id];
          if (typeof v309 !== "function") {
            return;
          }
          delete this.acks[p379.id];
          if (v309.withError) {
            p379.data.unshift(null);
          }
          v309.apply(this, p379.data);
        }
        onconnect(p380, p381) {
          this.id = p380;
          this.recovered = p381 && this._pid === p381;
          this._pid = p381;
          this.connected = true;
          this.emitBuffered();
          this.emitReserved("connect");
          this._drainQueue(true);
        }
        emitBuffered() {
          this.receiveBuffer.forEach(p382 => this.emitEvent(p382));
          this.receiveBuffer = [];
          this.sendBuffer.forEach(p383 => {
            this.notifyOutgoingListeners(p383);
            this.packet(p383);
          });
          this.sendBuffer = [];
        }
        ondisconnect() {
          this.destroy();
          this.onclose("io server disconnect");
        }
        destroy() {
          if (this.subs) {
            this.subs.forEach(p384 => p384());
            this.subs = undefined;
          }
          this.io._destroy(this);
        }
        disconnect() {
          if (this.connected) {
            this.packet({
              type: vP352.PacketType.DISCONNECT
            });
          }
          this.destroy();
          if (this.connected) {
            this.onclose("io client disconnect");
          }
          return this;
        }
        close() {
          return this.disconnect();
        }
        compress(p385) {
          this.flags.compress = p385;
          return this;
        }
        get volatile() {
          this.flags.volatile = true;
          return this;
        }
        timeout(p386) {
          this.flags.timeout = p386;
          return this;
        }
        onAny(p387) {
          this._anyListeners = this._anyListeners || [];
          this._anyListeners.push(p387);
          return this;
        }
        prependAny(p388) {
          this._anyListeners = this._anyListeners || [];
          this._anyListeners.unshift(p388);
          return this;
        }
        offAny(p389) {
          if (!this._anyListeners) {
            return this;
          }
          if (p389) {
            const v310 = this._anyListeners;
            for (let vLN055 = 0; vLN055 < v310.length; vLN055++) {
              if (p389 === v310[vLN055]) {
                v310.splice(vLN055, 1);
                return this;
              }
            }
          } else {
            this._anyListeners = [];
          }
          return this;
        }
        listenersAny() {
          return this._anyListeners || [];
        }
        onAnyOutgoing(p390) {
          this._anyOutgoingListeners = this._anyOutgoingListeners || [];
          this._anyOutgoingListeners.push(p390);
          return this;
        }
        prependAnyOutgoing(p391) {
          this._anyOutgoingListeners = this._anyOutgoingListeners || [];
          this._anyOutgoingListeners.unshift(p391);
          return this;
        }
        offAnyOutgoing(p392) {
          if (!this._anyOutgoingListeners) {
            return this;
          }
          if (p392) {
            const v311 = this._anyOutgoingListeners;
            for (let vLN056 = 0; vLN056 < v311.length; vLN056++) {
              if (p392 === v311[vLN056]) {
                v311.splice(vLN056, 1);
                return this;
              }
            }
          } else {
            this._anyOutgoingListeners = [];
          }
          return this;
        }
        listenersAnyOutgoing() {
          return this._anyOutgoingListeners || [];
        }
        notifyOutgoingListeners(p393) {
          if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
            const v312 = this._anyOutgoingListeners.slice();
            for (const v313 of v312) {
              v313.apply(this, p393.data);
            }
          }
        }
      }
    },
    "./node_modules/socket.io-client/build/esm/url.js": (p394, p395, p396) => {
      'use strict';

      p396.r(p395);
      p396.d(p395, {
        url: () => f52
      });
      var vP396 = p396("./node_modules/engine.io-client/build/esm/index.js");
      function f52(p397, p398 = "", p399) {
        let vP397 = p397;
        p399 = p399 || typeof location !== "undefined" && location;
        if (p397 == null) {
          p397 = p399.protocol + "//" + p399.host;
        }
        if (typeof p397 === "string") {
          if (p397.charAt(0) === "/") {
            if (p397.charAt(1) === "/") {
              p397 = p399.protocol + p397;
            } else {
              p397 = p399.host + p397;
            }
          }
          if (!/^(https?|wss?):\/\//.test(p397)) {
            if (typeof p399 !== "undefined") {
              p397 = p399.protocol + "//" + p397;
            } else {
              p397 = "https://" + p397;
            }
          }
          vP397 = (0, vP396.parse)(p397);
        }
        if (!vP397.port) {
          if (/^(http|ws)$/.test(vP397.protocol)) {
            vP397.port = "80";
          } else if (/^(http|ws)s$/.test(vP397.protocol)) {
            vP397.port = "443";
          }
        }
        vP397.path = vP397.path || "/";
        const v314 = vP397.host.indexOf(":") !== -1;
        const v315 = v314 ? "[" + vP397.host + "]" : vP397.host;
        vP397.id = vP397.protocol + "://" + v315 + ":" + vP397.port + p398;
        vP397.href = vP397.protocol + "://" + v315 + (p399 && p399.port === vP397.port ? "" : ":" + vP397.port);
        return vP397;
      }
    },
    "./node_modules/socket.io-parser/build/esm/binary.js": (p400, p401, p402) => {
      'use strict';

      p402.r(p401);
      p402.d(p401, {
        deconstructPacket: () => f53,
        reconstructPacket: () => f55
      });
      var vP402 = p402("./node_modules/socket.io-parser/build/esm/is-binary.js");
      function f53(p403) {
        const vA7 = [];
        const v316 = p403.data;
        const vP403 = p403;
        vP403.data = f54(v316, vA7);
        vP403.attachments = vA7.length;
        return {
          packet: vP403,
          buffers: vA7
        };
      }
      function f54(p404, p405) {
        if (!p404) {
          return p404;
        }
        if ((0, vP402.isBinary)(p404)) {
          const vO13 = {
            _placeholder: true,
            num: p405.length
          };
          p405.push(p404);
          return vO13;
        } else if (Array.isArray(p404)) {
          const v317 = new Array(p404.length);
          for (let vLN057 = 0; vLN057 < p404.length; vLN057++) {
            v317[vLN057] = f54(p404[vLN057], p405);
          }
          return v317;
        } else if (typeof p404 === "object" && !(p404 instanceof Date)) {
          const vO14 = {};
          for (const v318 in p404) {
            if (Object.prototype.hasOwnProperty.call(p404, v318)) {
              vO14[v318] = f54(p404[v318], p405);
            }
          }
          return vO14;
        }
        return p404;
      }
      function f55(p406, p407) {
        p406.data = f56(p406.data, p407);
        delete p406.attachments;
        return p406;
      }
      function f56(p408, p409) {
        if (!p408) {
          return p408;
        }
        if (p408 && p408._placeholder === true) {
          const v319 = typeof p408.num === "number" && p408.num >= 0 && p408.num < p409.length;
          if (v319) {
            return p409[p408.num];
          } else {
            throw new Error("illegal attachments");
          }
        } else if (Array.isArray(p408)) {
          for (let vLN058 = 0; vLN058 < p408.length; vLN058++) {
            p408[vLN058] = f56(p408[vLN058], p409);
          }
        } else if (typeof p408 === "object") {
          for (const v320 in p408) {
            if (Object.prototype.hasOwnProperty.call(p408, v320)) {
              p408[v320] = f56(p408[v320], p409);
            }
          }
        }
        return p408;
      }
    },
    "./node_modules/socket.io-parser/build/esm/index.js": (p410, p411, p412) => {
      'use strict';

      p412.r(p411);
      p412.d(p411, {
        Decoder: () => C17,
        Encoder: () => C16,
        PacketType: () => v321,
        protocol: () => vLN5
      });
      var vP412 = p412("./node_modules/@socket.io/component-emitter/lib/esm/index.js");
      var vP4122 = p412("./node_modules/socket.io-parser/build/esm/binary.js");
      var vP4123 = p412("./node_modules/socket.io-parser/build/esm/is-binary.js");
      const vA8 = ["connect", "connect_error", "disconnect", "disconnecting", "newListener", "removeListener"];
      const vLN5 = 5;
      var v321;
      (function (p413) {
        p413[p413.CONNECT = 0] = "CONNECT";
        p413[p413.DISCONNECT = 1] = "DISCONNECT";
        p413[p413.EVENT = 2] = "EVENT";
        p413[p413.ACK = 3] = "ACK";
        p413[p413.CONNECT_ERROR = 4] = "CONNECT_ERROR";
        p413[p413.BINARY_EVENT = 5] = "BINARY_EVENT";
        p413[p413.BINARY_ACK = 6] = "BINARY_ACK";
      })(v321 ||= {});
      class C16 {
        constructor(p414) {
          this.replacer = p414;
        }
        encode(p415) {
          if (p415.type === v321.EVENT || p415.type === v321.ACK) {
            if ((0, vP4123.hasBinary)(p415)) {
              return this.encodeAsBinary({
                type: p415.type === v321.EVENT ? v321.BINARY_EVENT : v321.BINARY_ACK,
                nsp: p415.nsp,
                data: p415.data,
                id: p415.id
              });
            }
          }
          return [this.encodeAsString(p415)];
        }
        encodeAsString(p416) {
          let v322 = "" + p416.type;
          if (p416.type === v321.BINARY_EVENT || p416.type === v321.BINARY_ACK) {
            v322 += p416.attachments + "-";
          }
          if (p416.nsp && p416.nsp !== "/") {
            v322 += p416.nsp + ",";
          }
          if (p416.id != null) {
            v322 += p416.id;
          }
          if (p416.data != null) {
            v322 += JSON.stringify(p416.data, this.replacer);
          }
          return v322;
        }
        encodeAsBinary(p417) {
          const v323 = (0, vP4122.deconstructPacket)(p417);
          const v324 = this.encodeAsString(v323.packet);
          const v325 = v323.buffers;
          v325.unshift(v324);
          return v325;
        }
      }
      function f57(p418) {
        return Object.prototype.toString.call(p418) === "[object Object]";
      }
      class C17 extends vP412.Emitter {
        constructor(p419) {
          super();
          this.reviver = p419;
        }
        add(p420) {
          let v326;
          if (typeof p420 === "string") {
            if (this.reconstructor) {
              throw new Error("got plaintext data when reconstructing a packet");
            }
            v326 = this.decodeString(p420);
            const v327 = v326.type === v321.BINARY_EVENT;
            if (v327 || v326.type === v321.BINARY_ACK) {
              v326.type = v327 ? v321.EVENT : v321.ACK;
              this.reconstructor = new C18(v326);
              if (v326.attachments === 0) {
                super.emitReserved("decoded", v326);
              }
            } else {
              super.emitReserved("decoded", v326);
            }
          } else if ((0, vP4123.isBinary)(p420) || p420.base64) {
            if (!this.reconstructor) {
              throw new Error("got binary data when not reconstructing a packet");
            } else {
              v326 = this.reconstructor.takeBinaryData(p420);
              if (v326) {
                this.reconstructor = null;
                super.emitReserved("decoded", v326);
              }
            }
          } else {
            throw new Error("Unknown type: " + p420);
          }
        }
        decodeString(p421) {
          let vLN059 = 0;
          const vO15 = {
            type: Number(p421.charAt(0))
          };
          if (v321[vO15.type] === undefined) {
            throw new Error("unknown packet type " + vO15.type);
          }
          if (vO15.type === v321.BINARY_EVENT || vO15.type === v321.BINARY_ACK) {
            const v328 = vLN059 + 1;
            while (p421.charAt(++vLN059) !== "-" && vLN059 != p421.length) {}
            const v329 = p421.substring(v328, vLN059);
            if (v329 != Number(v329) || p421.charAt(vLN059) !== "-") {
              throw new Error("Illegal attachments");
            }
            vO15.attachments = Number(v329);
          }
          if (p421.charAt(vLN059 + 1) === "/") {
            const v330 = vLN059 + 1;
            while (++vLN059) {
              const v331 = p421.charAt(vLN059);
              if (v331 === ",") {
                break;
              }
              if (vLN059 === p421.length) {
                break;
              }
            }
            vO15.nsp = p421.substring(v330, vLN059);
          } else {
            vO15.nsp = "/";
          }
          const v332 = p421.charAt(vLN059 + 1);
          if (v332 !== "" && Number(v332) == v332) {
            const v333 = vLN059 + 1;
            while (++vLN059) {
              const v334 = p421.charAt(vLN059);
              if (v334 == null || Number(v334) != v334) {
                --vLN059;
                break;
              }
              if (vLN059 === p421.length) {
                break;
              }
            }
            vO15.id = Number(p421.substring(v333, vLN059 + 1));
          }
          if (p421.charAt(++vLN059)) {
            const v335 = this.tryParse(p421.substr(vLN059));
            if (C17.isPayloadValid(vO15.type, v335)) {
              vO15.data = v335;
            } else {
              throw new Error("invalid payload");
            }
          }
          return vO15;
        }
        tryParse(p422) {
          try {
            return JSON.parse(p422, this.reviver);
          } catch (e22) {
            return false;
          }
        }
        static isPayloadValid(p423, p424) {
          switch (p423) {
            case v321.CONNECT:
              return f57(p424);
            case v321.DISCONNECT:
              return p424 === undefined;
            case v321.CONNECT_ERROR:
              return typeof p424 === "string" || f57(p424);
            case v321.EVENT:
            case v321.BINARY_EVENT:
              return Array.isArray(p424) && (typeof p424[0] === "number" || typeof p424[0] === "string" && vA8.indexOf(p424[0]) === -1);
            case v321.ACK:
            case v321.BINARY_ACK:
              return Array.isArray(p424);
          }
        }
        destroy() {
          if (this.reconstructor) {
            this.reconstructor.finishedReconstruction();
            this.reconstructor = null;
          }
        }
      }
      class C18 {
        constructor(p425) {
          this.packet = p425;
          this.buffers = [];
          this.reconPack = p425;
        }
        takeBinaryData(p426) {
          this.buffers.push(p426);
          if (this.buffers.length === this.reconPack.attachments) {
            const v336 = (0, vP4122.reconstructPacket)(this.reconPack, this.buffers);
            this.finishedReconstruction();
            return v336;
          }
          return null;
        }
        finishedReconstruction() {
          this.reconPack = null;
          this.buffers = [];
        }
      }
    },
    "./node_modules/socket.io-parser/build/esm/is-binary.js": (p427, p428, p429) => {
      'use strict';

      p429.r(p428);
      p429.d(p428, {
        hasBinary: () => f59,
        isBinary: () => f58
      });
      const v337 = typeof ArrayBuffer === "function";
      const vF28 = p430 => {
        if (typeof ArrayBuffer.isView === "function") {
          return ArrayBuffer.isView(p430);
        } else {
          return p430.buffer instanceof ArrayBuffer;
        }
      };
      const v338 = Object.prototype.toString;
      const v339 = typeof Blob === "function" || typeof Blob !== "undefined" && v338.call(Blob) === "[object BlobConstructor]";
      const v340 = typeof File === "function" || typeof File !== "undefined" && v338.call(File) === "[object FileConstructor]";
      function f58(p431) {
        return v337 && (p431 instanceof ArrayBuffer || vF28(p431)) || v339 && p431 instanceof Blob || v340 && p431 instanceof File;
      }
      function f59(p432, p433) {
        if (!p432 || typeof p432 !== "object") {
          return false;
        }
        if (Array.isArray(p432)) {
          for (let vLN060 = 0, v341 = p432.length; vLN060 < v341; vLN060++) {
            if (f59(p432[vLN060])) {
              return true;
            }
          }
          return false;
        }
        if (f58(p432)) {
          return true;
        }
        if (p432.toJSON && typeof p432.toJSON === "function" && arguments.length === 1) {
          return f59(p432.toJSON(), true);
        }
        for (const v342 in p432) {
          if (Object.prototype.hasOwnProperty.call(p432, v342) && f59(p432[v342])) {
            return true;
          }
        }
        return false;
      }
    },
    "./src/temp.js": (p434, p435, p436) => {
      'use strict';

      p436.r(p435);
      var vP4362 = p436("./node_modules/howler/dist/howler.js");
      var v343 = p436.n(vP4362);
      var vP4363 = p436("./node_modules/socket.io-client/build/esm/index.js");
      p434 = p436.hmd(p434);
      function f60(p437, p438) {
        if (!(p437 instanceof p438)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function f61(p439, p440) {
        for (var vLN061 = 0; vLN061 < p440.length; vLN061++) {
          var v344 = p440[vLN061];
          v344.enumerable = v344.enumerable || false;
          v344.configurable = true;
          if ("value" in v344) {
            v344.writable = true;
          }
          Object.defineProperty(p439, f80(v344.key), v344);
        }
      }
      function f62(p441, p442, p443) {
        if (p442) {
          f61(p441.prototype, p442);
        }
        if (p443) {
          f61(p441, p443);
        }
        Object.defineProperty(p441, "prototype", {
          writable: false
        });
        return p441;
      }
      function f63(p444) {
        return f66(p444) || f65(p444) || f75(p444) || f64();
      }
      function f64() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function f65(p445) {
        if (typeof Symbol != "undefined" && p445[Symbol.iterator] != null || p445["@@iterator"] != null) {
          return Array.from(p445);
        }
      }
      function f66(p446) {
        if (Array.isArray(p446)) {
          return f76(p446);
        }
      }
      function f67(p447, p448) {
        var v345 = typeof Symbol != "undefined" && p447[Symbol.iterator] || p447["@@iterator"];
        if (!v345) {
          if (Array.isArray(p447) || (v345 = f75(p447)) || p448 && p447 && typeof p447.length == "number") {
            if (v345) {
              p447 = v345;
            }
            var vLN062 = 0;
            var v_0x2beae0 = function f68() {};
            return {
              s: v_0x2beae0,
              n: function (p449) {
                function f69() {
                  return p449.apply(this, arguments);
                }
                f69.toString = function () {
                  return p449.toString();
                };
                return f69;
              }(function () {
                if (vLN062 >= p447.length) {
                  return {
                    done: true
                  };
                } else {
                  return {
                    done: false,
                    value: p447[vLN062++]
                  };
                }
              }),
              e: function f70(p450) {
                throw p450;
              },
              f: v_0x2beae0
            };
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        var v346;
        var v347 = true;
        var v348 = false;
        return {
          s: function f71() {
            v345 = v345.call(p447);
          },
          n: function f72() {
            var v349 = v345.next();
            v347 = v349.done;
            return v349;
          },
          e: function f73(p451) {
            v348 = true;
            v346 = p451;
          },
          f: function f74() {
            try {
              if (!v347 && v345.return != null) {
                v345.return();
              }
            } finally {
              if (v348) {
                throw v346;
              }
            }
          }
        };
      }
      function f75(p452, p453) {
        if (p452) {
          if (typeof p452 == "string") {
            return f76(p452, p453);
          }
          var v350 = {}.toString.call(p452).slice(8, -1);
          if (v350 === "Object" && p452.constructor) {
            v350 = p452.constructor.name;
          }
          if (v350 === "Map" || v350 === "Set") {
            return Array.from(p452);
          } else if (v350 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(v350)) {
            return f76(p452, p453);
          } else {
            return undefined;
          }
        }
      }
      function f76(p454, p455) {
        if (p455 == null || p455 > p454.length) {
          p455 = p454.length;
        }
        for (var vLN063 = 0, vArray = Array(p455); vLN063 < p455; vLN063++) {
          vArray[vLN063] = p454[vLN063];
        }
        return vArray;
      }
      function f77(p456, p457) {
        var v351 = Object.keys(p456);
        if (Object.getOwnPropertySymbols) {
          var v352 = Object.getOwnPropertySymbols(p456);
          if (p457) {
            v352 = v352.filter(function (p458) {
              return Object.getOwnPropertyDescriptor(p456, p458).enumerable;
            });
          }
          v351.push.apply(v351, v352);
        }
        return v351;
      }
      function f78(p459) {
        for (var vLN13 = 1; vLN13 < arguments.length; vLN13++) {
          var v353 = arguments[vLN13] ?? {};
          if (vLN13 % 2) {
            f77(Object(v353), true).forEach(function (p460) {
              f79(p459, p460, v353[p460]);
            });
          } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(p459, Object.getOwnPropertyDescriptors(v353));
          } else {
            f77(Object(v353)).forEach(function (p461) {
              Object.defineProperty(p459, p461, Object.getOwnPropertyDescriptor(v353, p461));
            });
          }
        }
        return p459;
      }
      function f79(p462, p463, p464) {
        if ((p463 = f80(p463)) in p462) {
          Object.defineProperty(p462, p463, {
            value: p464,
            enumerable: true,
            configurable: true,
            writable: true
          });
        } else {
          p462[p463] = p464;
        }
        return p462;
      }
      function f80(p465) {
        var v_0x4d0e0e = f81(p465, "string");
        if (f117(v_0x4d0e0e) == "symbol") {
          return v_0x4d0e0e;
        } else {
          return v_0x4d0e0e + "";
        }
      }
      function f81(p466, p467) {
        if (f117(p466) != "object" || !p466) {
          return p466;
        }
        var v354 = p466[Symbol.toPrimitive];
        if (v354 !== undefined) {
          var v355 = v354.call(p466, p467 || "default");
          if (f117(v355) != "object") {
            return v355;
          }
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (p467 === "string" ? String : Number)(p466);
      }
      function f82() {
        'use strict';

        f82 = function f83() {
          return vO16;
        };
        var v356;
        var vO16 = {};
        var v357 = Object.prototype;
        var v358 = v357.hasOwnProperty;
        var v359 = Object.defineProperty || function (p468, p469, p470) {
          p468[p469] = p470.value;
        };
        var v360 = typeof Symbol == "function" ? Symbol : {};
        var v361 = v360.iterator || "@@iterator";
        var v362 = v360.asyncIterator || "@@asyncIterator";
        var v363 = v360.toStringTag || "@@toStringTag";
        function f84(p471, p472, p473) {
          Object.defineProperty(p471, p472, {
            value: p473,
            enumerable: true,
            configurable: true,
            writable: true
          });
          return p471[p472];
        }
        try {
          f84({}, "");
        } catch (e23) {
          f84 = function f85(p474, p475, p476) {
            return p474[p475] = p476;
          };
        }
        function f86(p477, p478, p479, p480) {
          var v364 = p478 && p478.prototype instanceof f88 ? p478 : f88;
          var v365 = Object.create(v364.prototype);
          var v366 = new f100(p480 || []);
          v359(v365, "_invoke", {
            value: f96(p477, p479, v366)
          });
          return v365;
        }
        function f87(p481, p482, p483) {
          try {
            return {
              type: "normal",
              arg: p481.call(p482, p483)
            };
          } catch (e24) {
            return {
              type: "throw",
              arg: e24
            };
          }
        }
        vO16.wrap = f86;
        var vLSSuspendedStart = "suspendedStart";
        var vLSSuspendedYield = "suspendedYield";
        var vLSExecuting = "executing";
        var vLSCompleted = "completed";
        var vO17 = {};
        function f88() {}
        function f89() {}
        function f90() {}
        var vO18 = {};
        f84(vO18, v361, function () {
          return this;
        });
        var v367 = Object.getPrototypeOf;
        var v368 = v367 && v367(v367(f101([])));
        if (v368 && v368 !== v357 && v358.call(v368, v361)) {
          vO18 = v368;
        }
        var v369 = f90.prototype = f88.prototype = Object.create(vO18);
        function f91(p484) {
          ["next", "throw", "return"].forEach(function (p485) {
            f84(p484, p485, function (p486) {
              return this._invoke(p485, p486);
            });
          });
        }
        function f92(p487, p488) {
          function f93(p489, p490, p491, p492) {
            var vF87 = f87(p487[p489], p487, p490);
            if (vF87.type !== "throw") {
              var v370 = vF87.arg;
              var v371 = v370.value;
              if (v371 && f117(v371) == "object" && v358.call(v371, "__await")) {
                return p488.resolve(v371.__await).then(function (p493) {
                  f93("next", p493, p491, p492);
                }, function (p494) {
                  f93("throw", p494, p491, p492);
                });
              } else {
                return p488.resolve(v371).then(function (p495) {
                  v370.value = p495;
                  p491(v370);
                }, function (p496) {
                  return f93("throw", p496, p491, p492);
                });
              }
            }
            p492(vF87.arg);
          }
          var v372;
          v359(this, "_invoke", {
            value: function f94(p497, p498) {
              function f95() {
                return new p488(function (p499, p500) {
                  f93(p497, p498, p499, p500);
                });
              }
              return v372 = v372 ? v372.then(f95, f95) : f95();
            }
          });
        }
        function f96(p501, p502, p503) {
          var vVLSSuspendedStart = vLSSuspendedStart;
          return function (p504, p505) {
            if (vVLSSuspendedStart === vLSExecuting) {
              throw Error("Generator is already running");
            }
            if (vVLSSuspendedStart === vLSCompleted) {
              if (p504 === "throw") {
                throw p505;
              }
              return {
                value: v356,
                done: true
              };
            }
            p503.method = p504;
            p503.arg = p505;
            while (true) {
              var v373 = p503.delegate;
              if (v373) {
                var v_0x4b2975 = f97(v373, p503);
                if (v_0x4b2975) {
                  if (v_0x4b2975 === vO17) {
                    continue;
                  }
                  return v_0x4b2975;
                }
              }
              if (p503.method === "next") {
                p503.sent = p503._sent = p503.arg;
              } else if (p503.method === "throw") {
                if (vVLSSuspendedStart === vLSSuspendedStart) {
                  vVLSSuspendedStart = vLSCompleted;
                  throw p503.arg;
                }
                p503.dispatchException(p503.arg);
              } else if (p503.method === "return") {
                p503.abrupt("return", p503.arg);
              }
              vVLSSuspendedStart = vLSExecuting;
              var vF872 = f87(p501, p502, p503);
              if (vF872.type === "normal") {
                vVLSSuspendedStart = p503.done ? vLSCompleted : vLSSuspendedYield;
                if (vF872.arg === vO17) {
                  continue;
                }
                return {
                  value: vF872.arg,
                  done: p503.done
                };
              }
              if (vF872.type === "throw") {
                vVLSSuspendedStart = vLSCompleted;
                p503.method = "throw";
                p503.arg = vF872.arg;
              }
            }
          };
        }
        function f97(p506, p507) {
          var v374 = p507.method;
          var v375 = p506.iterator[v374];
          if (v375 === v356) {
            p507.delegate = null;
            if (v374 !== "throw" || !p506.iterator.return || !(p507.method = "return", p507.arg = v356, f97(p506, p507), p507.method === "throw")) {
              if (v374 !== "return") {
                p507.method = "throw";
                p507.arg = new TypeError("The iterator does not provide a '" + v374 + "' method");
              }
            }
            return vO17;
          }
          var vF873 = f87(v375, p506.iterator, p507.arg);
          if (vF873.type === "throw") {
            p507.method = "throw";
            p507.arg = vF873.arg;
            p507.delegate = null;
            return vO17;
          }
          var v376 = vF873.arg;
          if (v376) {
            if (v376.done) {
              p507[p506.resultName] = v376.value;
              p507.next = p506.nextLoc;
              if (p507.method !== "return") {
                p507.method = "next";
                p507.arg = v356;
              }
              p507.delegate = null;
              return vO17;
            } else {
              return v376;
            }
          } else {
            p507.method = "throw";
            p507.arg = new TypeError("iterator result is not an object");
            p507.delegate = null;
            return vO17;
          }
        }
        function f98(p508) {
          var vO19 = {
            tryLoc: p508[0]
          };
          if (1 in p508) {
            vO19.catchLoc = p508[1];
          }
          if (2 in p508) {
            vO19.finallyLoc = p508[2];
            vO19.afterLoc = p508[3];
          }
          this.tryEntries.push(vO19);
        }
        function f99(p509) {
          var v377 = p509.completion || {};
          v377.type = "normal";
          delete v377.arg;
          p509.completion = v377;
        }
        function f100(p510) {
          this.tryEntries = [{
            tryLoc: "root"
          }];
          p510.forEach(f98, this);
          this.reset(true);
        }
        function f101(p511) {
          if (p511 || p511 === "") {
            var v378 = p511[v361];
            if (v378) {
              return v378.call(p511);
            }
            if (typeof p511.next == "function") {
              return p511;
            }
            if (!isNaN(p511.length)) {
              var v379 = -1;
              var v_0x56de9a = function f102() {
                while (++v379 < p511.length) {
                  if (v358.call(p511, v379)) {
                    f102.value = p511[v379];
                    f102.done = false;
                    return f102;
                  }
                }
                f102.value = v356;
                f102.done = true;
                return f102;
              };
              return v_0x56de9a.next = v_0x56de9a;
            }
          }
          throw new TypeError(f117(p511) + " is not iterable");
        }
        f89.prototype = f90;
        v359(v369, "constructor", {
          value: f90,
          configurable: true
        });
        v359(f90, "constructor", {
          value: f89,
          configurable: true
        });
        f89.displayName = f84(f90, v363, "GeneratorFunction");
        vO16.isGeneratorFunction = function (p512) {
          var v380 = typeof p512 == "function" && p512.constructor;
          return !!v380 && (v380 === f89 || (v380.displayName || v380.name) === "GeneratorFunction");
        };
        vO16.mark = function (p513) {
          if (Object.setPrototypeOf) {
            Object.setPrototypeOf(p513, f90);
          } else {
            p513.__proto__ = f90;
            f84(p513, v363, "GeneratorFunction");
          }
          p513.prototype = Object.create(v369);
          return p513;
        };
        vO16.awrap = function (p514) {
          return {
            __await: p514
          };
        };
        f91(f92.prototype);
        f84(f92.prototype, v362, function () {
          return this;
        });
        vO16.AsyncIterator = f92;
        vO16.async = function (p515, p516, p517, p518, p519 = Promise) {
          var v381 = new f92(f86(p515, p516, p517, p518), p519);
          if (vO16.isGeneratorFunction(p516)) {
            return v381;
          } else {
            return v381.next().then(function (p520) {
              if (p520.done) {
                return p520.value;
              } else {
                return v381.next();
              }
            });
          }
        };
        f91(v369);
        f84(v369, v363, "Generator");
        f84(v369, v361, function () {
          return this;
        });
        f84(v369, "toString", function () {
          return "[object Generator]";
        });
        vO16.keys = function (p521) {
          var vObject = Object(p521);
          var vA9 = [];
          for (var v382 in vObject) {
            vA9.push(v382);
          }
          vA9.reverse();
          return function f103() {
            while (vA9.length) {
              var v383 = vA9.pop();
              if (v383 in vObject) {
                f103.value = v383;
                f103.done = false;
                return f103;
              }
            }
            f103.done = true;
            return f103;
          };
        };
        vO16.values = f101;
        f100.prototype = {
          constructor: f100,
          reset: function f104(p522) {
            this.prev = 0;
            this.next = 0;
            this.sent = this._sent = v356;
            this.done = false;
            this.delegate = null;
            this.method = "next";
            this.arg = v356;
            this.tryEntries.forEach(f99);
            if (!p522) {
              for (var v384 in this) {
                if (v384.charAt(0) === "t" && v358.call(this, v384) && !isNaN(+v384.slice(1))) {
                  this[v384] = v356;
                }
              }
            }
          },
          stop: function f105() {
            this.done = true;
            var v385 = this.tryEntries[0].completion;
            if (v385.type === "throw") {
              throw v385.arg;
            }
            return this.rval;
          },
          dispatchException: function f106(p523) {
            if (this.done) {
              throw p523;
            }
            var vThis52 = this;
            function f107(p524, p525) {
              v388.type = "throw";
              v388.arg = p523;
              vThis52.next = p524;
              if (p525) {
                vThis52.method = "next";
                vThis52.arg = v356;
              }
              return !!p525;
            }
            for (var v386 = this.tryEntries.length - 1; v386 >= 0; --v386) {
              var v387 = this.tryEntries[v386];
              var v388 = v387.completion;
              if (v387.tryLoc === "root") {
                return f107("end");
              }
              if (v387.tryLoc <= this.prev) {
                var v389 = v358.call(v387, "catchLoc");
                var v390 = v358.call(v387, "finallyLoc");
                if (v389 && v390) {
                  if (this.prev < v387.catchLoc) {
                    return f107(v387.catchLoc, true);
                  }
                  if (this.prev < v387.finallyLoc) {
                    return f107(v387.finallyLoc);
                  }
                } else if (v389) {
                  if (this.prev < v387.catchLoc) {
                    return f107(v387.catchLoc, true);
                  }
                } else {
                  if (!v390) {
                    throw Error("try statement without catch or finally");
                  }
                  if (this.prev < v387.finallyLoc) {
                    return f107(v387.finallyLoc);
                  }
                }
              }
            }
          },
          abrupt: function f108(p526, p527) {
            for (var v391 = this.tryEntries.length - 1; v391 >= 0; --v391) {
              var v392 = this.tryEntries[v391];
              if (v392.tryLoc <= this.prev && v358.call(v392, "finallyLoc") && this.prev < v392.finallyLoc) {
                var vV392 = v392;
                break;
              }
            }
            if (vV392 && (p526 === "break" || p526 === "continue") && vV392.tryLoc <= p527 && p527 <= vV392.finallyLoc) {
              vV392 = null;
            }
            var v393 = vV392 ? vV392.completion : {};
            v393.type = p526;
            v393.arg = p527;
            if (vV392) {
              this.method = "next";
              this.next = vV392.finallyLoc;
              return vO17;
            } else {
              return this.complete(v393);
            }
          },
          complete: function f109(p528, p529) {
            if (p528.type === "throw") {
              throw p528.arg;
            }
            if (p528.type === "break" || p528.type === "continue") {
              this.next = p528.arg;
            } else if (p528.type === "return") {
              this.rval = this.arg = p528.arg;
              this.method = "return";
              this.next = "end";
            } else if (p528.type === "normal" && p529) {
              this.next = p529;
            }
            return vO17;
          },
          finish: function f110(p530) {
            for (var v394 = this.tryEntries.length - 1; v394 >= 0; --v394) {
              var v395 = this.tryEntries[v394];
              if (v395.finallyLoc === p530) {
                this.complete(v395.completion, v395.afterLoc);
                f99(v395);
                return vO17;
              }
            }
          },
          catch: function f111(p531) {
            for (var v396 = this.tryEntries.length - 1; v396 >= 0; --v396) {
              var v397 = this.tryEntries[v396];
              if (v397.tryLoc === p531) {
                var v398 = v397.completion;
                if (v398.type === "throw") {
                  var v399 = v398.arg;
                  f99(v397);
                }
                return v399;
              }
            }
            throw Error("illegal catch attempt");
          },
          delegateYield: function f112(p532, p533, p534) {
            this.delegate = {
              iterator: f101(p532),
              resultName: p533,
              nextLoc: p534
            };
            if (this.method === "next") {
              this.arg = v356;
            }
            return vO17;
          }
        };
        return vO16;
      }
      function f113(p535, p536, p537, p538, p539, p540, p541) {
        try {
          var v400 = p535[p540](p541);
          var v401 = v400.value;
        } catch (e25) {
          p537(e25);
          return;
        }
        if (v400.done) {
          p536(v401);
        } else {
          Promise.resolve(v401).then(p538, p539);
        }
      }
      function f114(p542) {
        return function () {
          var vThis53 = this;
          var vArguments6 = arguments;
          return new Promise(function (p543, p544) {
            var v402 = p542.apply(vThis53, vArguments6);
            function f115(p545) {
              f113(v402, p543, p544, f115, f116, "next", p545);
            }
            function f116(p546) {
              f113(v402, p543, p544, f115, f116, "throw", p546);
            }
            f115(undefined);
          });
        };
      }
      function f117(p547) {
        '@babel/helpers - typeof';

        f117 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (p548) {
          return typeof p548;
        } : function (p549) {
          if (p549 && typeof Symbol == "function" && p549.constructor === Symbol && p549 !== Symbol.prototype) {
            return "symbol";
          } else {
            return typeof p549;
          }
        };
        return f117(p547);
      }
      var vLN064 = 0;
      window.URLSERV_WORMWORLD = vLN064 ? "http://localhost:3102" : "https://wormworld.io/extension";
      window.URL_CDN = vLN064 ? "http://localhost:3000" : "https://asserts.wormworld.io";
      window.URL_CDN_B = vLN064 ? "localhost:3000" : "asserts.wormworld.io";
      window.URL_CDN_C = vLN064;
      window.URL_CDN_IKIT = "https://ik.imagekit.io/jdfnxk119";
      var v403 = /(.{18})(([AB])([0-9A-Za-z_]{2})([0-9A-Za-z]{3})([0-9A-Z_]{2})([0-9A-Z_]{2})([0-9A-Z_]{2})([0-9A-Z_]{2}))/;
      var v404 = true;
      var v405 = true;
      var v406 = false;
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
      (function (p550) {
        if ((typeof exports === "undefined" ? "undefined" : f117(exports)) === "object" && "object" !== "undefined") {
          p434.exports = p550();
        } else if (typeof define === "function" && p436.amdO) {
          define([], p550);
        } else {
          var v407;
          if (typeof window !== "undefined") {
            v407 = window;
          } else if (typeof p436.g !== "undefined") {
            v407 = p436.g;
          } else if (typeof self !== "undefined") {
            v407 = self;
          } else {
            v407 = this;
          }
          v407.nipplejs = p550();
        }
      })(function () {
        var v408;
        var v409;
        var v410;
        "use strict";
        var v411 = !!("ontouchstart" in window);
        var v412 = window.PointerEvent ? true : false;
        var v413 = window.MSPointerEvent ? true : false;
        var vO20 = {
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
        var v414;
        var vO21 = {};
        if (v412) {
          v414 = vO20.pointer;
        } else if (v413) {
          v414 = vO20.MSPointer;
        } else if (v411) {
          v414 = vO20.touch;
          vO21 = vO20.mouse;
        } else {
          v414 = vO20.mouse;
        }
        var vO22 = {};
        vO22.distance = function (p551, p552) {
          var v415 = p552.x - p551.x;
          var v416 = p552.y - p551.y;
          return Math.sqrt(v415 * v415 + v416 * v416);
        };
        vO22.angle = function (p553, p554) {
          var v417 = p554.x - p553.x;
          var v418 = p554.y - p553.y;
          return vO22.degrees(Math.atan2(v418, v417));
        };
        vO22.findCoord = function (p555, p556, p557) {
          var vO23 = {
            x: 0,
            y: 0
          };
          p557 = vO22.radians(p557);
          vO23.x = p555.x - p556 * Math.cos(p557);
          vO23.y = p555.y - p556 * Math.sin(p557);
          return vO23;
        };
        vO22.radians = function (p558) {
          return p558 * (Math.PI / 180);
        };
        vO22.degrees = function (p559) {
          return p559 * (180 / Math.PI);
        };
        vO22.bindEvt = function (p560, p561, p562) {
          var v419 = p561.split(/[ ,]+/g);
          var v420;
          for (var vLN065 = 0; vLN065 < v419.length; vLN065 += 1) {
            v420 = v419[vLN065];
            if (p560.addEventListener) {
              p560.addEventListener(v420, p562, false);
            } else if (p560.attachEvent) {
              p560.attachEvent(v420, p562);
            }
          }
        };
        vO22.unbindEvt = function (p563, p564, p565) {
          var v421 = p564.split(/[ ,]+/g);
          var v422;
          for (var vLN066 = 0; vLN066 < v421.length; vLN066 += 1) {
            v422 = v421[vLN066];
            if (p563.removeEventListener) {
              p563.removeEventListener(v422, p565);
            } else if (p563.detachEvent) {
              p563.detachEvent(v422, p565);
            }
          }
        };
        vO22.trigger = function (p566, p567, p568) {
          var v423 = new CustomEvent(p567, p568);
          p566.dispatchEvent(v423);
        };
        vO22.prepareEvent = function (p569) {
          p569.preventDefault();
          if (p569.type.match(/^touch/)) {
            return p569.changedTouches;
          } else {
            return p569;
          }
        };
        vO22.getScroll = function () {
          var v424 = window.pageXOffset !== undefined ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft;
          var v425 = window.pageYOffset !== undefined ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
          return {
            x: v424,
            y: v425
          };
        };
        vO22.applyPosition = function (p570, p571) {
          if (p571.top || p571.right || p571.bottom || p571.left) {
            p570.style.top = p571.top;
            p570.style.right = p571.right;
            p570.style.bottom = p571.bottom;
            p570.style.left = p571.left;
          } else {
            p570.style.left = p571.x + "px";
            p570.style.top = p571.y + "px";
          }
        };
        vO22.getTransitionStyle = function (p572, p573, p574) {
          var v426 = vO22.configStylePropertyObject(p572);
          for (var v427 in v426) {
            if (v426.hasOwnProperty(v427)) {
              if (typeof p573 === "string") {
                v426[v427] = p573 + " " + p574;
              } else {
                var vLS3 = "";
                for (var vLN067 = 0, v428 = p573.length; vLN067 < v428; vLN067 += 1) {
                  vLS3 += p573[vLN067] + " " + p574 + ", ";
                }
                v426[v427] = vLS3.slice(0, -2);
              }
            }
          }
          return v426;
        };
        vO22.getVendorStyle = function (p575, p576) {
          var v429 = vO22.configStylePropertyObject(p575);
          for (var v430 in v429) {
            if (v429.hasOwnProperty(v430)) {
              v429[v430] = p576;
            }
          }
          return v429;
        };
        vO22.configStylePropertyObject = function (p577) {
          var vO24 = {
            [p577]: ""
          };
          var vA10 = ["webkit", "Moz", "o"];
          vA10.forEach(function (p578) {
            vO24[p578 + p577.charAt(0).toUpperCase() + p577.slice(1)] = "";
          });
          return vO24;
        };
        vO22.extend = function (p579, p580) {
          for (var v431 in p580) {
            if (p580.hasOwnProperty(v431)) {
              p579[v431] = p580[v431];
            }
          }
          return p579;
        };
        vO22.safeExtend = function (p581, p582) {
          var vO25 = {};
          for (var v432 in p581) {
            if (p581.hasOwnProperty(v432) && p582.hasOwnProperty(v432)) {
              vO25[v432] = p582[v432];
            } else if (p581.hasOwnProperty(v432)) {
              vO25[v432] = p581[v432];
            }
          }
          return vO25;
        };
        vO22.map = function (p583, p584) {
          if (p583.length) {
            for (var vLN068 = 0, v433 = p583.length; vLN068 < v433; vLN068 += 1) {
              p584(p583[vLN068]);
            }
          } else {
            p584(p583);
          }
        };
        function f118() {}
        ;
        f118.prototype.on = function (p585, p586) {
          var vThis54 = this;
          var v434 = p585.split(/[ ,]+/g);
          var v435;
          vThis54._handlers_ = vThis54._handlers_ || {};
          for (var vLN069 = 0; vLN069 < v434.length; vLN069 += 1) {
            v435 = v434[vLN069];
            vThis54._handlers_[v435] = vThis54._handlers_[v435] || [];
            vThis54._handlers_[v435].push(p586);
          }
          return vThis54;
        };
        f118.prototype.off = function (p587, p588) {
          var vThis55 = this;
          vThis55._handlers_ = vThis55._handlers_ || {};
          if (p587 === undefined) {
            vThis55._handlers_ = {};
          } else if (p588 === undefined) {
            vThis55._handlers_[p587] = null;
          } else if (vThis55._handlers_[p587] && vThis55._handlers_[p587].indexOf(p588) >= 0) {
            vThis55._handlers_[p587].splice(vThis55._handlers_[p587].indexOf(p588), 1);
          }
          return vThis55;
        };
        f118.prototype.trigger = function (p589, p590) {
          var vThis56 = this;
          var v436 = p589.split(/[ ,]+/g);
          var v437;
          vThis56._handlers_ = vThis56._handlers_ || {};
          for (var vLN070 = 0; vLN070 < v436.length; vLN070 += 1) {
            v437 = v436[vLN070];
            if (vThis56._handlers_[v437] && vThis56._handlers_[v437].length) {
              vThis56._handlers_[v437].forEach(function (p591) {
                p591.call(vThis56, {
                  type: v437,
                  target: vThis56
                }, p590);
              });
            }
          }
        };
        f118.prototype.config = function (p592) {
          var vThis57 = this;
          vThis57.options = vThis57.defaults || {};
          if (p592) {
            vThis57.options = vO22.safeExtend(vThis57.options, p592);
          }
        };
        f118.prototype.bindEvt = function (p593, p594) {
          var vThis58 = this;
          vThis58._domHandlers_ = vThis58._domHandlers_ || {};
          vThis58._domHandlers_[p594] = function () {
            if (typeof vThis58["on" + p594] === "function") {
              vThis58["on" + p594].apply(vThis58, arguments);
            } else {
              console.warn("[WARNING] : Missing \"on" + p594 + "\" handler.");
            }
          };
          vO22.bindEvt(p593, v414[p594], vThis58._domHandlers_[p594]);
          if (vO21[p594]) {
            vO22.bindEvt(p593, vO21[p594], vThis58._domHandlers_[p594]);
          }
          return vThis58;
        };
        f118.prototype.unbindEvt = function (p595, p596) {
          var vThis59 = this;
          vThis59._domHandlers_ = vThis59._domHandlers_ || {};
          vO22.unbindEvt(p595, v414[p596], vThis59._domHandlers_[p596]);
          if (vO21[p596]) {
            vO22.unbindEvt(p595, vO21[p596], vThis59._domHandlers_[p596]);
          }
          delete vThis59._domHandlers_[p596];
          return this;
        };
        function f119(p597, p598) {
          this.identifier = p598.identifier;
          this.position = p598.position;
          this.frontPosition = p598.frontPosition;
          this.collection = p597;
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
          this.config(p598);
          if (this.options.mode === "dynamic") {
            this.options.restOpacity = 0;
          }
          this.id = f119.id;
          f119.id += 1;
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
        f119.prototype = new f118();
        f119.constructor = f119;
        f119.id = 0;
        f119.prototype.buildEl = function (p599) {
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
        f119.prototype.stylize = function () {
          if (this.options.dataOnly) {
            return this;
          }
          var v438 = this.options.fadeTime + "ms";
          var v439 = vO22.getVendorStyle("borderRadius", "50%");
          var v440 = vO22.getTransitionStyle("transition", "opacity", v438);
          var vO26 = {
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
          vO22.extend(vO26.el, v440);
          vO22.extend(vO26.back, v439);
          vO22.extend(vO26.front, v439);
          this.applyStyles(vO26);
          return this;
        };
        f119.prototype.applyStyles = function (p600) {
          for (var v441 in this.ui) {
            if (this.ui.hasOwnProperty(v441)) {
              for (var v442 in p600[v441]) {
                this.ui[v441].style[v442] = p600[v441][v442];
              }
            }
          }
          return this;
        };
        f119.prototype.addToDom = function () {
          if (this.options.dataOnly || document.body.contains(this.ui.el)) {
            return this;
          }
          this.options.zone.appendChild(this.ui.el);
          return this;
        };
        f119.prototype.removeFromDom = function () {
          if (this.options.dataOnly || !document.body.contains(this.ui.el)) {
            return this;
          }
          this.options.zone.removeChild(this.ui.el);
          return this;
        };
        f119.prototype.destroy = function () {
          clearTimeout(this.removeTimeout);
          clearTimeout(this.showTimeout);
          clearTimeout(this.restTimeout);
          this.trigger("destroyed", this.instance);
          this.removeFromDom();
          this.off();
        };
        f119.prototype.show = function (p601) {
          var vThis60 = this;
          if (vThis60.options.dataOnly) {
            return vThis60;
          }
          clearTimeout(vThis60.removeTimeout);
          clearTimeout(vThis60.showTimeout);
          clearTimeout(vThis60.restTimeout);
          vThis60.addToDom();
          vThis60.restCallback();
          setTimeout(function () {
            vThis60.ui.el.style.opacity = 1;
          }, 0);
          vThis60.showTimeout = setTimeout(function () {
            vThis60.trigger("shown", vThis60.instance);
            if (typeof p601 === "function") {
              p601.call(this);
            }
          }, vThis60.options.fadeTime);
          return vThis60;
        };
        f119.prototype.hide = function (p602) {
          var vThis61 = this;
          if (vThis61.options.dataOnly) {
            return vThis61;
          }
          vThis61.ui.el.style.opacity = vThis61.options.restOpacity;
          clearTimeout(vThis61.removeTimeout);
          clearTimeout(vThis61.showTimeout);
          clearTimeout(vThis61.restTimeout);
          vThis61.removeTimeout = setTimeout(function () {
            var v443 = vThis61.options.mode === "dynamic" ? "none" : "block";
            vThis61.ui.el.style.display = v443;
            if (typeof p602 === "function") {
              p602.call(vThis61);
            }
            vThis61.trigger("hidden", vThis61.instance);
          }, vThis61.options.fadeTime);
          if (vThis61.options.restJoystick) {
            vThis61.restPosition();
          }
          return vThis61;
        };
        f119.prototype.restPosition = function (p603) {
          var vThis62 = this;
          vThis62.frontPosition = {
            x: 0,
            y: 0
          };
          var v444 = vThis62.options.fadeTime + "ms";
          var vO27 = {};
          vO27.front = vO22.getTransitionStyle("transition", ["top", "left"], v444);
          var vO28 = {
            front: {}
          };
          vO28.front = {
            left: vThis62.frontPosition.x + "px",
            top: vThis62.frontPosition.y + "px"
          };
          vThis62.applyStyles(vO27);
          vThis62.applyStyles(vO28);
          vThis62.restTimeout = setTimeout(function () {
            if (typeof p603 === "function") {
              p603.call(vThis62);
            }
            vThis62.restCallback();
          }, vThis62.options.fadeTime);
        };
        f119.prototype.restCallback = function () {
          var vThis63 = this;
          var vO29 = {};
          vO29.front = vO22.getTransitionStyle("transition", "none", "");
          vThis63.applyStyles(vO29);
          vThis63.trigger("rested", vThis63.instance);
        };
        f119.prototype.resetDirection = function () {
          this.direction = {
            x: false,
            y: false,
            angle: false
          };
        };
        f119.prototype.computeDirection = function (p604) {
          var v445 = p604.angle.radian;
          var v446 = Math.PI / 4;
          var v447 = Math.PI / 2;
          var v448;
          var v449;
          var v450;
          if (v445 > v446 && v445 < v446 * 3 && !p604.lockX) {
            v448 = "up";
          } else if (v445 > -v446 && v445 <= v446 && !p604.lockY) {
            v448 = "left";
          } else if (v445 > -v446 * 3 && v445 <= -v446 && !p604.lockX) {
            v448 = "down";
          } else if (!p604.lockY) {
            v448 = "right";
          }
          if (!p604.lockY) {
            if (v445 > -v447 && v445 < v447) {
              v449 = "left";
            } else {
              v449 = "right";
            }
          }
          if (!p604.lockX) {
            if (v445 > 0) {
              v450 = "up";
            } else {
              v450 = "down";
            }
          }
          if (p604.force > this.options.threshold) {
            var vO30 = {};
            for (var v451 in this.direction) {
              if (this.direction.hasOwnProperty(v451)) {
                vO30[v451] = this.direction[v451];
              }
            }
            var vO31 = {};
            this.direction = {
              x: v449,
              y: v450,
              angle: v448
            };
            p604.direction = this.direction;
            for (var v451 in vO30) {
              if (vO30[v451] === this.direction[v451]) {
                vO31[v451] = true;
              }
            }
            if (vO31.x && vO31.y && vO31.angle) {
              return p604;
            }
            if (!vO31.x || !vO31.y) {
              this.trigger("plain", p604);
            }
            if (!vO31.x) {
              this.trigger("plain:" + v449, p604);
            }
            if (!vO31.y) {
              this.trigger("plain:" + v450, p604);
            }
            if (!vO31.angle) {
              this.trigger("dir dir:" + v448, p604);
            }
          }
          return p604;
        };
        function f120(p605, p606) {
          var vThis64 = this;
          vThis64.nipples = [];
          vThis64.idles = [];
          vThis64.actives = [];
          vThis64.ids = [];
          vThis64.pressureIntervals = {};
          vThis64.manager = p605;
          vThis64.id = f120.id;
          f120.id += 1;
          vThis64.defaults = {
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
          vThis64.config(p606);
          if (vThis64.options.mode === "static" || vThis64.options.mode === "semi") {
            vThis64.options.multitouch = false;
          }
          if (!vThis64.options.multitouch) {
            vThis64.options.maxNumberOfNipples = 1;
          }
          vThis64.updateBox();
          vThis64.prepareNipples();
          vThis64.bindings();
          vThis64.begin();
          return vThis64.nipples;
        }
        f120.prototype = new f118();
        f120.constructor = f120;
        f120.id = 0;
        f120.prototype.prepareNipples = function () {
          var vThis65 = this;
          var v452 = vThis65.nipples;
          v452.on = vThis65.on.bind(vThis65);
          v452.off = vThis65.off.bind(vThis65);
          v452.options = vThis65.options;
          v452.destroy = vThis65.destroy.bind(vThis65);
          v452.ids = vThis65.ids;
          v452.id = vThis65.id;
          v452.processOnMove = vThis65.processOnMove.bind(vThis65);
          v452.processOnEnd = vThis65.processOnEnd.bind(vThis65);
          v452.get = function (p607) {
            if (p607 === undefined) {
              return v452[0];
            }
            for (var vLN071 = 0, v453 = v452.length; vLN071 < v453; vLN071 += 1) {
              if (v452[vLN071].identifier === p607) {
                return v452[vLN071];
              }
            }
            return false;
          };
        };
        f120.prototype.bindings = function () {
          var vThis66 = this;
          vThis66.bindEvt(vThis66.options.zone, "start");
          vThis66.options.zone.style.touchAction = "none";
          vThis66.options.zone.style.msTouchAction = "none";
        };
        f120.prototype.begin = function () {
          var vThis67 = this;
          var v454 = vThis67.options;
          if (v454.mode === "static") {
            var v455 = vThis67.createNipple(v454.position, vThis67.manager.getIdentifier());
            v455.add();
            vThis67.idles.push(v455);
          }
        };
        f120.prototype.createNipple = function (p608, p609) {
          var vThis68 = this;
          var v456 = vO22.getScroll();
          var vO32 = {};
          var v457 = vThis68.options;
          if (p608.x && p608.y) {
            vO32 = {
              x: p608.x - (v456.x + vThis68.box.left),
              y: p608.y - (v456.y + vThis68.box.top)
            };
          } else if (p608.top || p608.right || p608.bottom || p608.left) {
            var v458 = document.createElement("DIV");
            v458.style.display = "hidden";
            v458.style.top = p608.top;
            v458.style.right = p608.right;
            v458.style.bottom = p608.bottom;
            v458.style.left = p608.left;
            v458.style.position = "absolute";
            v457.zone.appendChild(v458);
            var v459 = v458.getBoundingClientRect();
            v457.zone.removeChild(v458);
            vO32 = p608;
            p608 = {
              x: (v457.dumbBox ? v457.dumbBox.left : v459.left) + v456.x,
              y: (v457.dumbBox ? v457.dumbBox.top : v459.top) + v456.y
            };
          }
          var v460 = new f119(vThis68, {
            color: v457.color,
            size: v457.size,
            threshold: v457.threshold,
            fadeTime: v457.fadeTime,
            dataOnly: v457.dataOnly,
            restJoystick: v457.restJoystick,
            restOpacity: v457.restOpacity,
            mode: v457.mode,
            identifier: p609,
            position: p608,
            zone: v457.zone,
            frontPosition: {
              x: 0,
              y: 0
            }
          });
          if (!v457.dataOnly) {
            vO22.applyPosition(v460.ui.el, vO32);
            vO22.applyPosition(v460.ui.front, v460.frontPosition);
          }
          vThis68.nipples.push(v460);
          vThis68.trigger("added " + v460.identifier + ":added", v460);
          vThis68.manager.trigger("added " + v460.identifier + ":added", v460);
          vThis68.bindNipple(v460);
          return v460;
        };
        f120.prototype.updateBox = function () {
          var vThis69 = this;
          vThis69.box = vThis69.options.zone.getBoundingClientRect();
        };
        f120.prototype.bindNipple = function (p610) {
          var vThis70 = this;
          var v461;
          var v_0x54a627 = function f121(p611, p612) {
            v461 = p611.type + " " + p612.id + ":" + p611.type;
            vThis70.trigger(v461, p612);
          };
          p610.on("destroyed", vThis70.onDestroyed.bind(vThis70));
          p610.on("shown hidden rested dir plain", v_0x54a627);
          p610.on("dir:up dir:right dir:down dir:left", v_0x54a627);
          p610.on("plain:up plain:right plain:down plain:left", v_0x54a627);
        };
        f120.prototype.pressureFn = function (p613, p614, p615) {
          var vThis71 = this;
          var vLN072 = 0;
          clearInterval(vThis71.pressureIntervals[p615]);
          vThis71.pressureIntervals[p615] = setInterval(function () {
            var v462 = p613.force || p613.pressure || p613.webkitForce || 0;
            if (v462 !== vLN072) {
              p614.trigger("pressure", v462);
              vThis71.trigger("pressure " + p614.identifier + ":pressure", v462);
              vLN072 = v462;
            }
          }.bind(vThis71), 100);
        };
        f120.prototype.onstart = function (p616) {
          var vThis72 = this;
          var v463 = vThis72.options;
          p616 = vO22.prepareEvent(p616);
          vThis72.updateBox();
          var v_0x42657c = function f122(p617) {
            if (vThis72.actives.length < v463.maxNumberOfNipples) {
              vThis72.processOnStart(p617);
            }
          };
          vO22.map(p616, v_0x42657c);
          vThis72.manager.bindDocument();
          return false;
        };
        f120.prototype.processOnStart = function (p618) {
          var vThis73 = this;
          var v464 = vThis73.options;
          var v465;
          var v466 = vThis73.manager.getIdentifier(p618);
          var v467 = p618.force || p618.pressure || p618.webkitForce || 0;
          var vO33 = {
            x: p618.pageX,
            y: p618.pageY
          };
          var v468 = vThis73.getOrCreate(v466, vO33);
          if (v468.identifier !== v466) {
            vThis73.manager.removeIdentifier(v468.identifier);
          }
          v468.identifier = v466;
          var v_0x59264c = function f123(p619) {
            p619.trigger("start", p619);
            vThis73.trigger("start " + p619.id + ":start", p619);
            p619.show();
            if (v467 > 0) {
              vThis73.pressureFn(p618, p619, p619.identifier);
            }
            vThis73.processOnMove(p618);
          };
          if ((v465 = vThis73.idles.indexOf(v468)) >= 0) {
            vThis73.idles.splice(v465, 1);
          }
          vThis73.actives.push(v468);
          vThis73.ids.push(v468.identifier);
          if (v464.mode !== "semi") {
            v_0x59264c(v468);
          } else {
            var v469 = vO22.distance(vO33, v468.position);
            if (v469 <= v464.catchDistance) {
              v_0x59264c(v468);
            } else {
              v468.destroy();
              vThis73.processOnStart(p618);
              return;
            }
          }
          return v468;
        };
        f120.prototype.getOrCreate = function (p620, p621) {
          var vThis74 = this;
          var v470 = vThis74.options;
          var v471;
          if (/(semi|static)/.test(v470.mode)) {
            v471 = vThis74.idles[0];
            if (v471) {
              vThis74.idles.splice(0, 1);
              return v471;
            }
            if (v470.mode === "semi") {
              return vThis74.createNipple(p621, p620);
            }
            console.warn("Coudln't find the needed nipple.");
            return false;
          }
          v471 = vThis74.createNipple(p621, p620);
          return v471;
        };
        f120.prototype.processOnMove = function (p622) {
          var vThis75 = this;
          var v472 = vThis75.options;
          var v473 = vThis75.manager.getIdentifier(p622);
          var v474 = vThis75.nipples.get(v473);
          if (!v474) {
            console.error("Found zombie joystick with ID " + v473);
            vThis75.manager.removeIdentifier(v473);
            return;
          }
          v474.identifier = v473;
          var v475 = v474.options.size / 2;
          var vO34 = {
            x: p622.pageX,
            y: p622.pageY
          };
          var v476 = vO22.distance(vO34, v474.position);
          var v477 = vO22.angle(vO34, v474.position);
          var v478 = vO22.radians(v477);
          var v479 = v476 / v475;
          if (v476 > v475) {
            v476 = v475;
            vO34 = vO22.findCoord(v474.position, v476, v477);
          }
          var v480 = vO34.x - v474.position.x;
          var v481 = vO34.y - v474.position.y;
          if (v472.lockX) {
            v481 = 0;
          }
          if (v472.lockY) {
            v480 = 0;
          }
          v474.frontPosition = {
            x: v480,
            y: v481
          };
          if (!v472.dataOnly) {
            vO22.applyPosition(v474.ui.front, v474.frontPosition);
          }
          var vO35 = {
            identifier: v474.identifier,
            position: vO34,
            force: v479,
            pressure: p622.force || p622.pressure || p622.webkitForce || 0,
            distance: v476,
            angle: {
              radian: v478,
              degree: v477
            },
            instance: v474,
            lockX: v472.lockX,
            lockY: v472.lockY
          };
          vO35 = v474.computeDirection(vO35);
          vO35.angle = {
            radian: vO22.radians(180 - v477),
            degree: 180 - v477
          };
          v474.trigger("move", vO35);
          vThis75.trigger("move " + v474.id + ":move", vO35);
        };
        f120.prototype.processOnEnd = function (p623) {
          var vThis76 = this;
          var v482 = vThis76.options;
          var v483 = vThis76.manager.getIdentifier(p623);
          var v484 = vThis76.nipples.get(v483);
          var v485 = vThis76.manager.removeIdentifier(v484.identifier);
          if (!v484) {
            return;
          }
          if (!v482.dataOnly) {
            v484.hide(function () {
              if (v482.mode === "dynamic") {
                v484.trigger("removed", v484);
                vThis76.trigger("removed " + v484.id + ":removed", v484);
                vThis76.manager.trigger("removed " + v484.id + ":removed", v484);
                v484.destroy();
              }
            });
          }
          clearInterval(vThis76.pressureIntervals[v484.identifier]);
          v484.resetDirection();
          v484.trigger("end", v484);
          vThis76.trigger("end " + v484.id + ":end", v484);
          if (vThis76.ids.indexOf(v484.identifier) >= 0) {
            vThis76.ids.splice(vThis76.ids.indexOf(v484.identifier), 1);
          }
          if (vThis76.actives.indexOf(v484) >= 0) {
            vThis76.actives.splice(vThis76.actives.indexOf(v484), 1);
          }
          if (/(semi|static)/.test(v482.mode)) {
            vThis76.idles.push(v484);
          } else if (vThis76.nipples.indexOf(v484) >= 0) {
            vThis76.nipples.splice(vThis76.nipples.indexOf(v484), 1);
          }
          vThis76.manager.unbindDocument();
          if (/(semi|static)/.test(v482.mode)) {
            vThis76.manager.ids[v485.id] = v485.identifier;
          }
        };
        f120.prototype.onDestroyed = function (p624, p625) {
          var vThis77 = this;
          if (vThis77.nipples.indexOf(p625) >= 0) {
            vThis77.nipples.splice(vThis77.nipples.indexOf(p625), 1);
          }
          if (vThis77.actives.indexOf(p625) >= 0) {
            vThis77.actives.splice(vThis77.actives.indexOf(p625), 1);
          }
          if (vThis77.idles.indexOf(p625) >= 0) {
            vThis77.idles.splice(vThis77.idles.indexOf(p625), 1);
          }
          if (vThis77.ids.indexOf(p625.identifier) >= 0) {
            vThis77.ids.splice(vThis77.ids.indexOf(p625.identifier), 1);
          }
          vThis77.manager.removeIdentifier(p625.identifier);
          vThis77.manager.unbindDocument();
        };
        f120.prototype.destroy = function () {
          var vThis78 = this;
          vThis78.unbindEvt(vThis78.options.zone, "start");
          vThis78.nipples.forEach(function (p626) {
            p626.destroy();
          });
          for (var v486 in vThis78.pressureIntervals) {
            if (vThis78.pressureIntervals.hasOwnProperty(v486)) {
              clearInterval(vThis78.pressureIntervals[v486]);
            }
          }
          vThis78.trigger("destroyed", vThis78.nipples);
          vThis78.manager.unbindDocument();
          vThis78.off();
        };
        function f124(p627) {
          var vThis79 = this;
          vThis79.ids = {};
          vThis79.index = 0;
          vThis79.collections = [];
          vThis79.config(p627);
          vThis79.prepareCollections();
          var v487;
          vO22.bindEvt(window, "resize", function (p628) {
            clearTimeout(v487);
            v487 = setTimeout(function () {
              var v488;
              var v489 = vO22.getScroll();
              vThis79.collections.forEach(function (p629) {
                p629.forEach(function (p630) {
                  v488 = p630.el.getBoundingClientRect();
                  p630.position = {
                    x: v489.x + v488.left,
                    y: v489.y + v488.top
                  };
                });
              });
            }, 100);
          });
          return vThis79.collections;
        }
        ;
        f124.prototype = new f118();
        f124.constructor = f124;
        f124.prototype.prepareCollections = function () {
          var vThis80 = this;
          vThis80.collections.create = vThis80.create.bind(vThis80);
          vThis80.collections.on = vThis80.on.bind(vThis80);
          vThis80.collections.off = vThis80.off.bind(vThis80);
          vThis80.collections.destroy = vThis80.destroy.bind(vThis80);
          vThis80.collections.get = function (p631) {
            var v490;
            vThis80.collections.every(function (p632) {
              if (v490 = p632.get(p631)) {
                return false;
              }
              return true;
            });
            return v490;
          };
        };
        f124.prototype.create = function (p633) {
          return this.createCollection(p633);
        };
        f124.prototype.createCollection = function (p634) {
          var vThis81 = this;
          var v491 = new f120(vThis81, p634);
          vThis81.bindCollection(v491);
          vThis81.collections.push(v491);
          return v491;
        };
        f124.prototype.bindCollection = function (p635) {
          var vThis82 = this;
          var v492;
          var v_0xbca52d = function f125(p636, p637) {
            v492 = p636.type + " " + p637.id + ":" + p636.type;
            vThis82.trigger(v492, p637);
          };
          p635.on("destroyed", vThis82.onDestroyed.bind(vThis82));
          p635.on("shown hidden rested dir plain", v_0xbca52d);
          p635.on("dir:up dir:right dir:down dir:left", v_0xbca52d);
          p635.on("plain:up plain:right plain:down plain:left", v_0xbca52d);
        };
        f124.prototype.bindDocument = function () {
          var vThis83 = this;
          if (!vThis83.binded) {
            vThis83.bindEvt(document, "move").bindEvt(document, "end");
            vThis83.binded = true;
          }
        };
        f124.prototype.unbindDocument = function (p638) {
          var vThis84 = this;
          if (!Object.keys(vThis84.ids).length || p638 === true) {
            vThis84.unbindEvt(document, "move").unbindEvt(document, "end");
            vThis84.binded = false;
          }
        };
        f124.prototype.getIdentifier = function (p639) {
          var v493;
          if (!p639) {
            v493 = this.index;
          } else {
            v493 = p639.identifier === undefined ? p639.pointerId : p639.identifier;
            if (v493 === undefined) {
              v493 = this.latest || 0;
            }
          }
          if (this.ids[v493] === undefined) {
            this.ids[v493] = this.index;
            this.index += 1;
          }
          this.latest = v493;
          return this.ids[v493];
        };
        f124.prototype.removeIdentifier = function (p640) {
          var vO36 = {};
          for (var v494 in this.ids) {
            if (this.ids[v494] === p640) {
              vO36.id = v494;
              vO36.identifier = this.ids[v494];
              delete this.ids[v494];
              break;
            }
          }
          return vO36;
        };
        f124.prototype.onmove = function (p641) {
          var vThis85 = this;
          vThis85.onAny("move", p641);
          return false;
        };
        f124.prototype.onend = function (p642) {
          var vThis86 = this;
          vThis86.onAny("end", p642);
          return false;
        };
        f124.prototype.oncancel = function (p643) {
          var vThis87 = this;
          vThis87.onAny("end", p643);
          return false;
        };
        f124.prototype.onAny = function (p644, p645) {
          var vThis88 = this;
          var v495;
          var v496 = "processOn" + p644.charAt(0).toUpperCase() + p644.slice(1);
          p645 = vO22.prepareEvent(p645);
          var v_0x1eeeb3 = function f126(p646, p647, p648) {
            if (p648.ids.indexOf(p647) >= 0) {
              p648[v496](p646);
              p646._found_ = true;
            }
          };
          var v_0x28dedf = function f127(p649) {
            v495 = vThis88.getIdentifier(p649);
            vO22.map(vThis88.collections, v_0x1eeeb3.bind(null, p649, v495));
            if (!p649._found_) {
              vThis88.removeIdentifier(v495);
            }
          };
          vO22.map(p645, v_0x28dedf);
          return false;
        };
        f124.prototype.destroy = function () {
          var vThis89 = this;
          vThis89.unbindDocument(true);
          vThis89.ids = {};
          vThis89.index = 0;
          vThis89.collections.forEach(function (p650) {
            p650.destroy();
          });
          vThis89.off();
        };
        f124.prototype.onDestroyed = function (p651, p652) {
          var vThis90 = this;
          if (vThis90.collections.indexOf(p652) < 0) {
            return false;
          }
          vThis90.collections.splice(vThis90.collections.indexOf(p652), 1);
        };
        var v497 = new f124();
        return {
          create: function f128(p653) {
            return v497.create(p653);
          },
          factory: v497
        };
      });
      var v498 = false;
      var v499 = true;
      var vLN2 = 2;
      var v500 = null;
      var vLN15 = 1;
      var v501 = null;
      var vO37 = {};
      var vLN073 = 0;
      window.createLine = function (p654, p655) {
        var v502 = new PIXI.Graphics();
        var vLSff0000 = "#ff0000";
        if (bbs.laserColor && typeof bbs.laserColor === "string") {
          vLSff0000 = parseInt(bbs.laserColor.toString().replace("#", "0x"));
        }
        v502.lineStyle(bbs.laser || 0.2, vLSff0000, 1);
        v502.moveTo(0, 0);
        v502.lineTo(0, 0);
        v502.zIndex = 10001;
        v502.name = "lineHS";
        v502.alpha = 0;
        v502.filters = [new PIXI.filters.BlurFilter(5)];
        p654.addChild(v502);
      };
      window.movimentaLinha = function () {
        try {
          if (!_wwc._anApp.dh.ch.Nm) {
            return;
          }
          var v503 = _wwc._anApp.og.af.ng.mf.getChildByName("lineHS");
          var v504 = _wwc._anApp.dh.ch.Nm.oc;
          var v505 = v504.position.x;
          var v506 = v504.position.y;
          var vLSff00002 = "#ff0000";
          if (bbs.laserColor && typeof bbs.laserColor === "string") {
            vLSff00002 = parseInt(bbs.laserColor.toString().replace("#", "0x"));
          }
          v503.lineStyle(bbs.laser || 0.2, vLSff00002, 1);
          v503.clear();
          v503.lineStyle(bbs.laser || 0.1, vLSff00002, 1);
          v503.moveTo(0, 0);
          v503.lineTo(v505, v506);
          if (bbs.laserActive && _wwc.ismobile) {
            v503.alpha = 0.3;
          }
          v503.filters = [new PIXI.filters.BlurFilter(5)];
        } catch (e26) {
          console.error(e26);
        }
      };
      window.gerarCodigoUnico = function () {
        var v507 = bbs.userId || "";
        var v508 = v507.match(/\d/g);
        var v509 = (v508 || []).reduce(function (p656, p657) {
          return p656 + parseInt(p657, 10);
        }, 0);
        var vLS0123456789ABCDEFGHIJ = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        var vLN52 = 5;
        var vLS4 = "";
        var vLS5 = "";
        for (var vLN074 = 0; vLN074 < vLN52; vLN074++) {
          var v510 = Math.floor(Math.random() * vLS0123456789ABCDEFGHIJ.length);
          vLS4 += vLS0123456789ABCDEFGHIJ.charAt(v510);
          var v511 = Math.floor(Math.random() * vLS0123456789ABCDEFGHIJ.length);
          vLS5 += vLS0123456789ABCDEFGHIJ.charAt(v511);
        }
        return "ROOM" + vLS5 + "_" + v509 + "_" + vLS4;
      };
      var vO38 = {
        sao: "wss://nycsam01.wormworld.io",
        dal: "wss://nycsam01.wormworld.io",
        hil: "wss://nycsam01.wormworld.io",
        vin: "wss://nycsam01.wormworld.io",
        fra: "wss://fraceu01.wormworld.io",
        gra: "wss://fraceu01.wormworld.io",
        dxb: "wss://fraceu01.wormworld.io",
        sin: "wss://sin01.wormworld.io",
        tok: "wss://sin01.wormworld.io",
        local: "ws://localhost:5001"
      };
      var vO39 = {
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
      var vA11 = ["sao", "dal", "hil", "vin", "fra", "gra", "sin", "tok", "dxb"];
      var vO40 = {
        loaded: false,
        sprites: {},
        textures: {},
        resources: {}
      };
      $("#mm-params-nickname").attr("maxlength", vLN18);
      var vO41 = {
        ref: [],
        hs: {},
        fxdo: function f129(p658) {
          if (bbs.activeSounds2 && bbs.start) {
            if (!vO41[p658].playing()) {
              vO41[p658].play();
            }
          }
        },
        fxAux: function f130(p659, p660) {
          if (p660 === 1 && !vO41.fxStatus.top1) {
            vO41.fxStatus.top1 = true;
            vO41.fxdo("top1");
          }
          return p659;
        },
        fxStatus: {
          top1: false
        }
      };
      window._wwcio = {
        message: null,
        obj: {},
        player: {},
        join: function f131() {},
        update: function f132() {},
        leave: function f133() {},
        leaderboardUpdated: function f134(p661, p662) {
          v_0x261bce(p661, p662);
        },
        sendLocation: function f135() {},
        findFriend: function f136() {},
        close: function f137() {},
        set: function f138(p663) {
          return p663;
        },
        friend: null,
        myLocation: {},
        crown: null
      };
      window._wwc = {
        deadPositionMap: function f139() {
          var v512 = new PIXI.Text("X", _wwc.fontStyleMap());
          v512.position.x = _wwc.memory.positionOfDead.x;
          v512.position.y = _wwc.memory.positionOfDead.y;
          _wwc._anApp.og.af.ng.Tg.addChild(v512);
          var vLN075 = 0;
          var vSetInterval = setInterval(function () {
            vLN075 = !vLN075;
            v512.alpha = vLN075;
          }, 500);
          var vSetTimeout = setTimeout(function () {
            clearInterval(vSetInterval);
            if (!_wwc._anApp.og.af.ng.Tg) {
              return;
            }
            _wwc._anApp.og.af.ng.Tg.removeChild(v512);
            v512.destroy();
          }, 60000);
          _wwc.removeDeadPositionMap = function () {
            clearInterval(vSetInterval);
            clearTimeout(vSetTimeout);
            if (!_wwc._anApp.og.af.ng.Tg) {
              return;
            }
            _wwc._anApp.og.af.ng.Tg.removeChild(v512);
            if (v512 && v512.destroy) {
              v512.destroy();
            }
          };
        },
        fontStyleMap: function f140(p664) {
          return {
            fontFamily: "Arial",
            fontSize: "12px",
            fill: "red",
            align: "center",
            fontWeight: "bold"
          };
        },
        startGame: function f141() {
          if (_wwc.memory.positionOfDead) {
            var v513 = _wwc.deadPositionMap();
          }
        },
        stopGame: function f142() {
          var v514;
          var v515;
          _wwcio.close();
          _wwcio.findFriendActived = false;
          if (!_wwcio.myLocation) {
            return;
          }
          _wwc.memory.positionOfDead = {
            x: (v514 = _wwcio.myLocation) === null || v514 === undefined || (v514 = v514.position) === null || v514 === undefined ? undefined : v514.x,
            y: (v515 = _wwcio.myLocation) === null || v515 === undefined || (v515 = v515.position) === null || v515 === undefined ? undefined : v515.y
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
        testSkinMod: function f143(p665) {
          var v516 = typeof p665 === "string";
          p665 = parseInt(p665);
          if (v516 && isNaN(p665)) {
            return false;
          } else {
            return parseInt(p665) >= 399 && parseInt(p665) < 8999;
          }
        },
        testWear: function f144(p666) {
          var v517 = typeof p666 === "string";
          p666 = parseInt(p666);
          if (v517 && isNaN(p666)) {
            return false;
          } else {
            return parseInt(p666) >= 399 && parseInt(p666) < 8999;
          }
        },
        isNumberValid: function f145(p667) {
          return p667 !== "" && p667 !== null && p667 !== undefined && !isNaN(p667);
        },
        validInputWear: function f146(p668) {
          var v518 = _wwc.testWear(p668);
          var v519 = typeof skinId === "string";
          if (!v518 && !v519) {
            return p668;
          }
          return 0;
        },
        validInput: function f147(p669) {
          var v520 = _wwc.testSkinMod(p669);
          var v521 = typeof p669 === "string";
          if (!v520 && !v521) {
            return p669;
          }
          try {
            var v522 = $("#inputReplaceSkin").val();
            return encodeURI(_wwc.isNumberValid(v522) ? v522 : bbs.idReplaceSkin || 35);
          } catch (e27) {
            return encodeURI(35);
          }
        },
        fullscreen: null,
        joystick: function f148(p670) {
          var vO42 = {
            checked: true,
            color: "red",
            mode: "dynamic",
            positionMode: "L",
            size: 100,
            pxy: 100
          };
          return vO42;
        },
        load_con: function f149() {
          $(".selecionar-sala-v2").click(function (p671) {
            p671.preventDefault();
            var v523 = $(this).attr("data-con") || bbs.con;
            var v524 = $(this).attr("data-type");
            w2c2020.addRoom($(this).attr("data-room"));
            vO47.dh.Zp = function (p672, p673, p674) {
              bbs.con = p674 ? p672 : v523 || p672;
              _wwc.Zp(bbs.con, p673);
            };
            vO47.Pn();
          });
        },
        fnSaveGame: function f150() {
          var v$ = $("#saveGame");
          v$.prop("checked", bbs.saveGame);
          v$.change(function () {
            if (!this.checked) {
              var vConfirm = confirm("PORTUGUES:\nAtenÃ§Ã£o: os registros seram apagados; Confirma?\n\nEnglish:\nAttention: the records will be deleted; Confirm?\n\nArabic:\nØªÙ†Ø¨ÙŠÙ‡: Ø³ÙŠØªÙ… Ø­Ø°Ù  Ø§Ù„Ø³Ø¬Ù„Ø§Øª Ø› ØªØ¤ÙƒØ¯ØŸ");
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
        fnSetCounts: function f151(p675, p676) {
          var v_0x8816ce = function f152(p677, p678, p679, p680) {
            _wwc.setCountGame(p677, p678, p679, p680);
          };
          if (p675 === "count") {
            bbs.kill = (bbs.kill || 0) + (p676 ? 0 : 1);
            bbs.headshot = (bbs.headshot || 0) + (p676 ? 1 : 0);
            bbs.HOL = bbs.headshot > bbs.HOL ? bbs.headshot : bbs.HOL;
            bbs.tkill = bbs.tkill + (p676 ? 0 : 1);
            bbs.theadshot = bbs.theadshot + (p676 ? 1 : 0);
          }
          if (p675 === "open") {
            bbs.kill = 0;
            bbs.headshot = 0;
            if (bbs.saveGame) {}
          }
          if (p675 === "close") {
            if (bbs.saveGame) {
              bbs.died = (bbs.died || 0) + 1;
            } else {
              _wwc.fnSetCounts("zerar");
            }
          }
          if (p675 === "zerar") {
            bbs.kill = 0;
            bbs.tkill = 0;
            bbs.headshot = 0;
            bbs.theadshot = 0;
            bbs.died = 0;
          }
          v_0x8816ce(bbs.kill, bbs.headshot, bbs.tkill, bbs.theadshot);
          localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));
        },
        setCountGame: function f153(p681, p682, p683, p684) {
          if (!bbs.saveGame) {
            w2c2020.hsTotal.alpha = 0;
            w2c2020.killTotal.alpha = 0;
          }
          w2c2020.hs.text = p682;
          w2c2020.hsTotal.text = p684;
          w2c2020.kill.text = p681;
          w2c2020.killTotal.text = p683;
        },
        ismobile: f177(),
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
        showTophs: false,
        showRechs: false,
        con: null,
        params: "",
        arrow: true,
        activeBadLang: false,
        activeSounds2: true,
        activeZoom: true,
        activeZoomMobile: true,
        hudPositionMode: 0,
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
      var v525 = localStorage.getItem("wwc_version");
      var v526 = localStorage.getItem("wwcSaveGame");
      var v527 = localStorage.getItem("wwc_config");
      v526 &&= JSON.parse(v526);
      for (var v528 in v526) {
        switch (v528) {
          case "configJoystick":
            if (!v526[v528]) {
              break;
            }
            bbs[v528] = v526[v528];
            for (var v529 in v526[v528].buttons) {
              bbs[v528].buttons[v529] = v526[v528].buttons[v529];
            }
            for (var v530 in v526[v528]) {
              bbs[v528][v530] = v526[v528][v530];
            }
            break;
          case "joystick":
            bbs[v528] = _wwc.joystick();
            for (var v531 in v526[v528]) {
              bbs[v528][v531] = v526[v528][v531];
            }
            break;
          case "display":
            for (var v532 in v526[v528]) {
              bbs[v528][v532] = v526[v528][v532];
            }
            break;
          default:
            bbs[v528] = v526[v528];
            break;
        }
      }
      if (!bbs.version || bbs.version !== vLN2) {
        bbs.version = vLN2;
        bbs.joystick = _wwc.joystick();
      }
      bbs.loading = true;
      window.respawnFn = function () {
        vO47.dh.Cn = 0;
        if (vO47.dh.mq) {
          vO47.dh.mq.close();
        }
        vO47.dh.mq = null;
        vO47.dh.Zp = function (p685, p686) {
          _wwc.Zp(bbs.con || p685, p686);
        };
        vO47.Pn();
      };
      window.lobbyFn = function () {
        vO47.dh.Cn = 0;
        if (vO47.dh.mq) {
          vO47.dh.mq.close();
        }
        vO47.dh.mq = null;
        vO47.dh.Np();
        v_0x5b52f();
      };
      $("<button type=\"button\" id=\"mm-wwc\" style=\"float: right;line-height: 48px;width: 70px;background: #00ccff;color: #FFF;font-weight: bold;margin-right: 5px;border-radius: 15px; cursor: pointer;box-shadow: 0 0 8px 2px rgba(0, 200, 255, 0.5), 0 0 15px 4px rgba(0, 200, 255, 0.3);text-shadow: 0 0 3px rgba(0, 200, 255, 0.5);animation: mmwwcGlow 2s ease-in-out infinite;\">⚙️</button>").insertAfter("#mm-store");
      $(".store-view-cont").append("<div id=\"idReplaceSkin\"></div>");
      $(".wear-view-cont").append("<div id=\"idWearViewCont\"></div>");
      var vLSDisplaynonepositionr = "display:none;position:relative;background:#FFF;padding:15px;max-width:680px;margin:10px auto;";
      if (_wwc.ismobile) {
        vLSDisplaynonepositionr = "display:none;position:relative;\n                  background:#FFF;padding:20px;\n                  width:calc(100vw - var(--scrollbar-width));\n                  height:100vh;";
      }
      $("body").append(`<div id="wwc-set-view" class="base-popup-view" style="${vLSDisplaynonepositionr}"></div>`);
      var vLSAss = "ass";
      window.mbf = {};
      var v_0x1eef04 = function f154(p687) {
        if (bbs.shiftKey) {
          return;
        }
        var vLN30 = 30;
        var vLN076 = 0;
        var v533 = false;
        function f155() {
          var vParseFloat = parseFloat(vO47.og.af.Bn);
          vParseFloat = (vParseFloat - 0.06) % (Math.PI * 2);
          if (vParseFloat < 0) {
            vParseFloat += Math.PI * 2;
          }
          vO47.og.af.Bn = vParseFloat.toFixed(2);
        }
        function f156(p688) {
          v498 = setInterval(function () {
            if (p688 === 1) {
              vLN076 = v533 ? vLN076 - 1 : vLN076 + 1;
              if (vLN076 % 80 === 0 && !v533) {
                vLN30 = vLN30 + 18;
                clearInterval(v498);
                f156(1);
              }
            }
            f155();
          }, vLN30);
        }
        if ((p687 == 7 || p687.key == "7") && v498 === null) {
          vO47.og.af.ng.Eb.removeEventListener("pointermove", mbf.onmovepoint, true);
          f156(1);
          return;
        }
        if ((p687 == 8 || p687.key == "8") && v498 === null) {
          vO47.og.af.ng.Eb.removeEventListener("pointermove", mbf.onmovepoint, true);
          f156(2);
          return;
        }
        if (v498 !== null) {
          clearInterval(v498);
          vO47.og.af.ng.Eb.addEventListener("pointermove", mbf.onmovepoint, true);
          v498 = null;
        }
      };
      mbf.mbfass0 = function () {
        _wwcio.findFriend();
      };

      /*      
      
            mbf.mbfass1 = function () {
      
              var _0x539455 = _0x25c7fd ? 100 : 2;
      
              if (_0x2614f5 <= _0x539455) {
      
                _0x2614f5 += _0x2614f5 > 15 ? 1 : bbs.configZoom?.step || 0.25;
      
              }
      
              _0x2614f5 = Math.min(_0x2614f5, _0x539455);
      
              w2c2020.zoom.text = "x" + _0x2614f5.toFixed(2);
      
            };
      
            mbf.mbfass2 = function () {
      
              var _0x531f14 = _0x2614f5 - (_0x2614f5 > 15 ? 1 : bbs.configZoom?.step);
      
              _0x2614f5 = _0x531f14 < bbs.configZoom?.limitDown ? bbs.configZoom?.step : _0x531f14;
      
              w2c2020.zoom.text = "x" + _0x2614f5.toFixed(2);
      
            };
      
      */

      mbf.mbfass1 = function () {
        var v534 = v501 ? 100 : 2;
        if (vLN15 <= v534) {
          // استخدام النظام التدريجي بدلاً من الإضافة الثابتة

          var zoomFactor;
          if (vLN15 > 10) {
            zoomFactor = 1.12; // زيادة: 12% في الدرجات العالية 
          } else {
            zoomFactor = 1.25; // زيادة: 25% في الدرجات العادية
          }
          vLN15 *= zoomFactor;
        }
        vLN15 = Math.min(vLN15, v534);
      };
      mbf.mbfass2 = function () {
        // استخدام النظام التدريجي بدلاً من الطرح الثابت

        var zoomFactor;
        if (vLN15 > 10) {
          zoomFactor = 1.18; // تقليل: 18% في الدرجات العالية
        } else {
          zoomFactor = 1.3; // تقليل: 30% في الدرجات العادية
        }
        var v535 = vLN15 / zoomFactor;
        vLN15 = v535 < (bbs.configZoom?.limitDown || 0.25) ? bbs.configZoom?.limitDown || 0.25 : v535;
      };
      mbf.mbfass3 = function () {
        if (mbf.mbf_rotate) {
          v_0x1eef04(8);
          $("#mbf_rotate").css("background-color", "#000");
        } else {
          v_0x1eef04(v498 ? 0 : 8);
        }
        if (v498) {
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
          v_0x1eef04(8);
        } else {
          v_0x1eef04(v498 ? 0 : 8);
        }
        if (v498) {
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
        vLN15 = 1;
      };
      mbf.mbfass9 = function (p689) {
        var v536 = v501 ? 100 : 2;
        if (p689.value <= v536) {
          vLN15 = p689.value;
        }
      };
      mbf.mbf_cambiar_origin = null;
      mbf.mbf_cambiar_current = 0;
      mbf.mbf_cambiar_seq = 0;
      mbf.mbf_cambiar_add = function (p690, p691) {
        if (!bbs.cambiar) {
          bbs.cambiar = {};
        }
        if (bbs.cambiar[p690]) {
          alert("Skin already exists in the list of skins to be");
          return;
        }
        bbs.cambiar[p690] = p691 || "Skin " + p690;
        alert("Skin added to the list of skins to be");
        localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));
        console.log(bbs.cambiar);
      };

      /*     
      
           mbf.mbf_cambiar = function () {
      
             if (mbf.mbf_cambiar_origin === null) {
      
               mbf.mbf_cambiar_origin = _wwc._anApp.dh.ch.Eh.Hh;
      
             }
      
             var _0x3aade5 = Object.keys(bbs.cambiar);
      
             if (mbf.mbf_cambiar_seq >= _0x3aade5.length) {
      
               mbf.mbf_cambiar_seq = 0;
      
             }
      
             for (var _0x50cfe6 = 0; _0x50cfe6 < _0x3aade5.length; _0x50cfe6++) {
      
               mbf.mbf_cambiar_current = _0x3aade5[_0x50cfe6];
      
               if (_0x50cfe6 === mbf.mbf_cambiar_seq) {
      
                 mbf.mbf_cambiar_current = _0x3aade5[_0x50cfe6];
      
                 break;
      
               }
      
             }
      
             mbf.mbf_cambiar_seq = mbf.mbf_cambiar_seq + 1;
      
             _wwc._anApp.dh.ch.Eh.Hh = mbf.mbf_cambiar_current;
      
             _wwc._anApp.dh.ch.Sm();
      
           };
      
       */

      mbf.mbf_cambiar = function () {
        if (mbf.mbf_cambiar_origin === null) {
          mbf.mbf_cambiar_origin = _wwc._anApp.dh.ch.Eh.Hh;
        }
        var v537 = Object.keys(bbs.cambiar);
        if (mbf.mbf_cambiar_seq >= v537.length) {
          mbf.mbf_cambiar_seq = 0;
        }
        mbf.mbf_cambiar_current = v537[mbf.mbf_cambiar_seq];
        mbf.mbf_cambiar_seq = mbf.mbf_cambiar_seq + 1;

        // تغيير السكن

        _wwc._anApp.dh.ch.Eh.Hh = mbf.mbf_cambiar_current;

        // استخدم النمط المباشر من Sm() function:

        try {
          // بدلاً من استدعاء Sm() كاملة، استدعي الجزء المهم فقط

          if (_wwc._anApp.dh.ch.Nm && _wwc._anApp.dh.ch.Nm.yc) {
            // استدعي yc مباشرة (نفس ما بيعمله Sm)

            _wwc._anApp.dh.ch.Nm.yc(_wwc._anApp.dh.hh.xg,
            // game state

            _wwc._anApp.Lc.Ub().jb(_wwc._anApp.dh.ch.Eh.Gh), _wwc._anApp.Lc.Ub().ib(mbf.mbf_cambiar_current),
            // السكن الجديد

            _wwc._anApp.Lc.Ub().kb(_wwc._anApp.dh.ch.Eh.ni), _wwc._anApp.Lc.Ub().lb(_wwc._anApp.dh.ch.Eh.oi), _wwc._anApp.Lc.Ub().mb(_wwc._anApp.dh.ch.Eh.pi), _wwc._anApp.Lc.Ub().nb(_wwc._anApp.dh.ch.Eh.qi), "#ffffff");
          } else {
            // fallback

            _wwc._anApp.dh.ch.Sm();
          }
        } catch (e) {
          console.error("Error applying skin with yc:", e);

          // fallback للطريقة القديمة

          _wwc._anApp.dh.ch.Sm();
        }
      };
      if (bbs.activeZoom) {
        window.onwheel = function (p692) {
          if (p692.deltaY < 0) {
            mbf.mbfass1();
          } else {
            mbf.mbfass2();
          }
        };
      }
      $("#mm-advice-cont").html("<div class=\"wormworld-connect-count-b32\" style=\"display: grid !important; grid-template-columns: 1fr 1fr 1fr;gap: 2px;\">\n    <input type=\"button\" value=\"F.SCREEN\" id=\"btnFullScreen\" style=\"margin-top:5px;width:100%;height: 35px;\" />\n    <input type=\"button\" value=\"RESPAWN\" onclick=\"respawnFn()\" style=\"background-image: linear-gradient(#111, #767676); font-weight: bold; border-width: 1px; border-color: #ffffff; color: #fff; border-radius: 5px; margin-top: 5px; width: 100%; height: 35px;\" />\n    </div>");
      var v$2 = $("#idReplaceSkin");
      var vF29 = function () {
        var vF114 = f114(f82().mark(function f157(p693, p694) {
          return f82().wrap(function f158(p695) {
            while (1) {
              switch (p695.prev = p695.next) {
                case 0:
                  if (!p694) {
                    p695.next = 2;
                    break;
                  }
                  return p695.abrupt("return");
                case 2:
                  if (!p693) {
                    p693 = vO47.u.wi;
                  }
                  console.log(p693);
                  bbs.userId = p693.userId;
                  p695.next = 7;
                  return fetch(URLSERV_WORMWORLD + "/load-page", {
                    headers: {
                      "Content-Type": "application/json",
                      "x-access-token": bbs.tk,
                      "x-uid": wwc_keycode
                    },
                    method: "POST",
                    body: JSON.stringify(p693)
                  }).then(function (p696) {
                    p696.text().then(function (p697) {
                      $(".description-text").html(p697);
                      if (p693.type === "error") {
                        $(".description-text").html(p693.msg);
                      }
                    });
                  }).catch(function () {
                    $(".description-text").html("Problema de conexão.");
                  });
                case 7:
                  p695.next = 9;
                  return fetch(URLSERV_WORMWORLD + "/set-worm-world", {
                    headers: {
                      "Content-Type": "application/json",
                      "x-access-token": bbs.tk,
                      "x-uid": wwc_keycode
                    },
                    method: "POST",
                    body: JSON.stringify({
                      userId: bbs.userId
                    })
                  }).then(function (p698) {
                    p698.text().then(function (p699) {
                      $("#wwc-set-view").html(p699);
                      $("#mm-wwc").click(function (p700) {
                        $("#wwc-set-view").css("display", "block");
                      });
                      _wwc.load_con();
                      _wwc.fnSaveGame();
                      _wwc.fnSetCounts("start");
                      $("#backgroundArena").change(function () {
                        var v538 = $(this).val();
                        bbs.background = v538;
                        bbs.backgroundUri = null;
                        vO47.xe._g = vO48.bgg(v538);
                        localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));
                        _wwc._anApp.og.af.ng.Lg.$g(vO47.xe._g);
                        alert("Background changed!");
                      });
                      var v539 = _wwc.isNumberValid(bbs.idReplaceSkin);
                      if (v539) {
                        $("#inputReplaceSkin").val(bbs.idReplaceSkin);
                      } else {
                        var v540 = $("#inputReplaceSkin").val();
                        v539 = _wwc.isNumberValid(v540);
                        bbs.idReplaceSkin = v539 ? v540 : 33;
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
                case 9:
                case "end":
                  return p695.stop();
              }
            }
          }, f157);
        }));
        return function f159(p701, p702) {
          return vF114.apply(this, arguments);
        };
      }();
      var v_0xcd7fbe = function f160(p703) {
        if (bbs.PropertyManager) {
          if (bbs.PropertyManager.lj) {
            p703.skinId = bbs.PropertyManager.lj;
          }
          if (bbs.PropertyManager.mj) {
            p703.eyesId = bbs.PropertyManager.mj;
          }
          if (bbs.PropertyManager.nj) {
            p703.mouthId = bbs.PropertyManager.nj;
          }
          if (bbs.PropertyManager.pj) {
            p703.glassesId = bbs.PropertyManager.pj;
          }
          if (bbs.PropertyManager.oj) {
            p703.hatId = bbs.PropertyManager.oj;
          }
        }
      };
      var vF30 = function () {
        var vF1142 = f114(f82().mark(function f161(p704, p705) {
          var v541;
          var v542;
          var v543;
          var v544;
          var v545;
          return f82().wrap(function f162(p706) {
            while (1) {
              switch (p706.prev = p706.next) {
                case 0:
                  $("#mm-params-nickname").prop("maxlength", vLN18);
                  p706.next = 3;

                  // ✅ حفظ التوكن قبل إرسال الطلب

                  const savedToken = localStorage.getItem("wormworld_token");
                  if (savedToken) {
                    bbs.tk = savedToken;
                    console.log("🔐 استخدام التوكن المحفوظ للطلب:", savedToken.substring(0, 20) + "...");
                  }
                  return fetch(URLSERV_WORMWORLD + "/register", {
                    headers: {
                      "Content-Type": "application/json",
                      "x-access-token": bbs.tk,
                      "x-wuid": bbs.wuid,
                      "x-uid": wwc_keycode
                    },
                    method: "POST",
                    body: JSON.stringify(p704)
                  }).then(function () {
                    var vF1143 = f114(f82().mark(function f163(p707) {
                      return f82().wrap(function f164(p708) {
                        while (1) {
                          switch (p708.prev = p708.next) {
                            case 0:
                              p708.next = 2;
                              return p707.json();
                            case 2:
                              return p708.abrupt("return", p708.sent);
                            case 3:
                            case "end":
                              return p708.stop();
                          }
                        }
                      }, f163);
                    }));
                    return function (p709) {
                      return vF1143.apply(this, arguments);
                    };
                  }()).catch(function () {
                    $(".description-text").html("Problema de conexão.");
                  });
                case 3:
                  v541 = p706.sent;

                  // اعتراض البيانات وعرض كل شيء

                  console.log("🔍 بيانات اللاعب الكاملة:", JSON.stringify(v541, null, 2));
                  console.log("🔍 كائن البيانات الخام:", v541);

                  // ✅ حماية التوكن - عدم استبداله بتوكن السيرفر

                  const currentSavedToken = localStorage.getItem("wormworld_token");
                  let tokenToUse = currentSavedToken || bbs.tk;
                  if (currentSavedToken && v541 && v541.tk && v541.tk !== currentSavedToken) {
                    console.log("🛡️ تم تجاهل توكن السيرفر والاحتفاظ بالتوكن المحلي");
                    console.log("  توكن السيرفر:", v541.tk.substring(0, 20) + "...");
                    console.log("  التوكن المحلي:", currentSavedToken.substring(0, 20) + "...");
                    v541.tk = currentSavedToken; // استبدال توكن السيرفر بالمحلي
                  } else if (!currentSavedToken && v541 && v541.tk) {
                    // حفظ توكن جديد إذا لم يكن هناك توكن محفوظ

                    localStorage.setItem("wormworld_token", v541.tk);
                    tokenToUse = v541.tk;
                    console.log("💾 تم حفظ توكن جديد:", v541.tk.substring(0, 20) + "...");
                  }

                  // إجباري: تعديل خاصية customer إلى true قبل أي شيء آخر

                  if (v541) {
                    v541.customer = true;
                    console.log("✅ تم إجبار customer = true في البيانات");
                  }

                  // التأكد من وجود البيانات وإنشاءها إذا لم تكن موجودة

                  if (!v541) {
                    v541 = {};
                    v541.tk = tokenToUse || 1;
                    v541.customer = true;
                  }

                  // ✅ حفظ البيانات مع حماية التوكن

                  bbs.tk = tokenToUse; // استخدام التوكن المحمي

                  v501 = v541.customer;

                  // 🎯 إجبار customer = true في جميع الأماكن

                  bbs.customer = true;
                  window.customer = true;

                  // ✅ حفظ البيانات مع التوكن المحمي

                  const bbsToSave = {
                    ...bbs
                  };
                  bbsToSave.tk = tokenToUse;
                  localStorage.setItem("wwcSaveGame", JSON.stringify(bbsToSave));
                  console.log("✅ تم إجبار customer = true في جميع المتغيرات");
                  console.log("🔐 التوكن المحفوظ:", tokenToUse ? tokenToUse.substring(0, 20) + "..." : "غير موجود");
                  console.log("bbs.customer:", bbs.customer);

                  // عرض معلومات إضافية

                  if (v541 && v541.propertyList && Array.isArray(v541.propertyList)) {
                    console.log("📦 تحليل مفصل للعناصر:");
                    console.log("  📊 العدد الإجمالي:", v541.propertyList.length);

                    // عرض أول 10 عناصر كمثال

                    console.log("  📋 أول 10 عناصر:");
                    v541.propertyList.slice(0, 10).forEach((item, index) => {
                      console.log("    " + (index + 1) + ":", item);
                    });

                    // إحصائيات الأنواع

                    var typeCount = {};
                    v541.propertyList.forEach(item => {
                      if (item.type) {
                        typeCount[item.type] = (typeCount[item.type] || 0) + 1;
                      }
                    });
                    console.log("  📊 إحصائيات الأنواع:");
                    for (var type in typeCount) {
                      console.log("    " + type + ": " + typeCount[type] + " عنصر");
                    }

                    // نطاقات المعرفات

                    var ids = v541.propertyList.map(item => parseInt(item.id)).filter(id => !isNaN(id));
                    if (ids.length > 0) {
                      var minId = Math.min(...ids);
                      var maxId = Math.max(...ids);
                      console.log("  🆔 نطاق المعرفات: من " + minId + " إلى " + maxId);
                    }
                  }

                  // عرض معلومات التوكن

                  if (tokenToUse) {
                    console.log("🔐 معلومات التوكن المحمي:");
                    console.log("  طول التوكن:", tokenToUse.length);
                    console.log("  أول 50 حرف:", tokenToUse.substring(0, 50) + "...");
                  }

                  // عرض المتغيرات الأخرى المتاحة

                  console.log("🔍 متغيرات أخرى:");
                  console.log("  _0x2b92bd:", p704);
                  console.log("  bbs object keys:", Object.keys(bbs || {}));
                  console.log("  wwc_keycode:", typeof wwc_keycode !== "undefined" ? wwc_keycode : "غير معرف");

                  // التأكد من البيانات النهائية

                  if (!v541) {
                    v541 = {};
                    v541.tk = tokenToUse || 1;
                    v541.customer = true;
                  }

                  // ✅ التأكد من استخدام التوكن المحمي في النهاية

                  v541.tk = tokenToUse;
                  bbs.tk = tokenToUse;
                  v501 = v541.customer;
                  p704.propertyList = v541.propertyList;
                  p705(p704);
                  vF29(v541);
                  _wwc._anApp = vO47;

                  // تطبيق الخلفية المحفوظة

                  if (bbs.background !== null && bbs.background !== undefined) {
                    try {
                      vO47.xe._g = vO48.bgg(bbs.background);
                      _wwc._anApp.og.af.ng.Lg.$g(vO47.xe._g);
                      console.log("تم تحميل الخلفية المحفوظة:", bbs.background);
                    } catch (e) {
                      console.log("خطأ في تحميل الخلفية:", e);
                    }
                  }
                  _wwc._tx = function (p710) {
                    Object.keys(p710).forEach(function (p711) {
                      if (p710[p711].Yi) {
                        p710[p711].fj.nh.Cc.xc.width = p710[p711].fj.nh.Cc.xc.width + 2;
                        p710[p711].fj.nh.Cc.xc.height = p710[p711].fj.nh.Cc.xc.height + 2;
                      }
                    });
                  };
                  _wwc.Zp = vO47.dh.Zp;
                  vO47.dh.Dq = function (p712, p713, p714 = 0) {
                    try {
                      // ✅ استخدام التوكن المحمي في طلبات الاتصال بالسيرفر

                      const protectedToken = localStorage.getItem("wormworld_token") || bbs.tk;
                      fetch(URLSERV_WORMWORLD + "/game-connect", {
                        headers: {
                          "Content-Type": "application/json",
                          "x-access-token": protectedToken,
                          // ✅ استخدام التوكن المحمي

                          "x-uid": wwc_keycode
                        },
                        method: "POST",
                        body: JSON.stringify({
                          userId: vO47.Ij.Rk.userId,
                          nickname: bbs.nickname,
                          code: bbs.code,
                          teamRoom: _wwcio.player.teamRoom
                        })
                      }).then(function () {
                        var vF1144 = f114(f82().mark(function f165(p715) {
                          var v546;
                          var v547;
                          return f82().wrap(function f166(p716) {
                            while (1) {
                              switch (p716.prev = p716.next) {
                                case 0:
                                  p716.next = 2;
                                  return p715.json();
                                case 2:
                                  v546 = p716.sent;
                                  v547 = vO47.dh;

                                  // تعطيل التحقق من الكشف - فرض connected = false

                                  v546.connected = false;
                                  if (!v546.connected) {
                                    p716.next = 8;
                                    break;
                                  }

                                // تم حذف alert وتعطيل التحذير

                                // alert("Update Page\n\nWarning:We detected an invalid action...");

                                // _0x505471.Cq();

                                // return _0x3a4952.abrupt("return");

                                case 8:
                                  v547.mq = new WebSocket(p712);
                                  v547.mq.binaryType = "arraybuffer";
                                  vLN15 = _wwc.ismobile ? 1.25 : 1;
                                  bbs.start = new Date();
                                  bbs.con = p712;
                                  vO37 = {};
                                  vO48.setIntervalRun = setInterval(function () {
                                    vO48.ps3();
                                  }, 20);
                                  v547.mq.onopen = function () {
                                    v_0x382290();
                                    _wwc.fnSetCounts("open");
                                    p713();
                                  };
                                  v547.mq.onclose = function () {
                                    v_0x5b52f();
                                    _wwc.fnSetCounts("close");
                                    _wwc.stopGame();
                                    clearInterval(vO48.setIntervalRun);
                                    vO48.loadBg = false;
                                    bbs.start = 0;
                                  };
                                  v547.mq.onerror = function (p717) {
                                    v_0x5b52f();
                                    _wwc.fnSetCounts("close");
                                    _wwc.stopGame();
                                    clearInterval(vO48.setIntervalRun);
                                    vO48.loadBg = false;
                                    bbs.start = 0;
                                    if (p714 > 4) {
                                      v547.Cq();
                                    } else {
                                      setTimeout(function () {
                                        p714++;
                                        console.log("Reconnect server");
                                        vO47.dh.Dq(bbs.con, p713, p714);
                                      }, 2000);
                                    }
                                  };
                                  v547.mq.onmessage = function (p718) {
                                    v547.Kp.Ph(p718.data);
                                  };
                                case 19:
                                case "end":
                                  return p716.stop();
                              }
                            }
                          }, f165);
                        }));
                        return function (p719) {
                          return vF1144.apply(this, arguments);
                        };
                      }());
                    } catch (e28) {
                      console.log(e28);
                      i.Cq();
                    }
                  };
                  vO47.dh.Kp.Yh = function (p720, p721) {
                    v_0x5b52f();
                    this.dh.Oi();
                  };
                  vO47.og.af.ng.Ug.Uf = function (p722) {
                    var vF31 = function () {
                      return vO48.$F.M(vO48.POGL.Sprite, function () {
                        vO48.POGL.Sprite.call(this);
                        this.sh = 0;
                      });
                    }();
                    for (var v548 in this.rh) {
                      if (p722[v548] == null || !p722[v548].hd) {
                        vO48.$F.U(this.rh[v548]);
                        delete this.rh[v548];
                      }
                    }
                    var vLN077 = 0;
                    var vLN16 = 1;
                    if (bbs.display.custom) {
                      vLN16 = window.innerWidth;
                    }
                    for (var v549 in p722) {
                      var v550 = p722[v549];
                      if (v550.hd) {
                        var v551 = this.rh[v549];
                        if (!v551) {
                          var v552 = vO47.Lc.Ub().pb(v550.nd).ub;
                          v551 = new vF31();
                          v551.texture = v552.Ea();
                          v551.width = 38;
                          v551.height = 38;
                          this.rh[v549] = v551;
                          this.addChild(v551);
                        }
                        w2c2020.setPtc(this, v549, v550.od);
                        v551.sh = v550.od;

                        // التأكد من وجود hudSettings

                        if (!bbs.hudSettings) {
                          bbs.hudSettings = {
                            mode: 0,
                            wi: 1
                          };
                        }

                        // حساب الموقع حسب وضع الشاشة

                        if (bbs.hudSettings.mode == 1) {
                          // وضع 75%

                          var baseX = vLN16 / 2 + vLN077 - vLN16 * bbs.hudSettings.wi;
                          v551.position.x = baseX;
                          v551.position.y = 60;
                        } else if (bbs.hudSettings.mode == 2) {
                          // وضع التوسيط 

                          var centerX = vLN16 / 2;
                          var clockPosition = centerX + 150;
                          var powerUpsStartX = clockPosition + 25;
                          v551.position.x = powerUpsStartX + vLN077;
                          v551.position.y = 0; // قلل من 60 إلى 30 لرفعها للأعلى

                          console.log("Power-up at:", powerUpsStartX + vLN077);
                        } else {
                          // الوضع الافتراضي 100%

                          v551.position.x = vLN077 + (bbs.display.custom ? bbs.display.clock.x * vLN16 : 0);
                          v551.position.y = bbs.display.custom ? bbs.display.clock.y : v551.position.y;
                        }
                        vLN077 += 41;
                      }
                    }
                  };
                  if (!bbs.display.customClock) {
                    vO47.og.af.ng.Tg.addChild(w2c2020.clock);
                  }
                  vO47.og.af.ng.Tg.addChild(w2c2020.containerCountInfo);
                  vO47.og.af.ng.Tg.addChild(w2c2020.containerHstop);
                  w2c2020.containerHstop.alpha = 0;
                  vO47.og.af.ng.Tg.addChild(w2c2020.containerHsRec);
                  w2c2020.containerHsRec.alpha = 0;
                  vO47.og.af.ng.Tg.addChild(w2c2020.labelRoom);
                  w2c2020.ptc = {};
                  v542 = [40, 40, 40, 120, 40, 20, 40];
                  for (v543 = 0; v543 < v542.length; v543++) {
                    v544 = "clock_ad" + v543;
                    w2c2020.ptc[v544] = new PIXI.Text(v542[v543], w2c2020.fontStyle["tfc" + v543]);
                    w2c2020.ptc[v544].y = 66;
                  }
                  w2c2020.setPtc = function (p723, p724, p725) {
                    var v553 = v542[p724] - parseInt((p725 == 0.99 ? 1 : p725) * v542[p724] / 1);
                    var v554 = "clock_ad" + p724;
                    p723.rh[p724].addChild(w2c2020.ptc[v554]);
                    if (w2c2020.ptc[v554]) {
                      w2c2020.ptc[v554].x = v553 >= 100 ? 11 : v553 >= 10 ? 18 : 26;
                      w2c2020.ptc[v554].text = v553;
                    }
                  };
                  v545 = vO47.og.af.ng.Eb;
                  mbf.onmovepoint = function (p726) {
                    if (p726.pointerType === "touch" && !p726.isPrimary) {
                      return;
                    }
                    if (p726.clientX !== undefined) {
                      vO47.og.af.Bn = Math.atan2(p726.clientY - v545.offsetHeight * 0.5, p726.clientX - v545.offsetWidth * 0.5);
                    } else {
                      vO47.og.af.Bn = Math.atan2(p726.pageY - v545.offsetHeight * 0.5, p726.pageX - v545.offsetWidth * 0.5);
                    }
                  };
                  mbf.onRun = function (p727) {
                    if (p727 && p727.pointerType === "touch") {
                      return;
                    }
                    vO47.og.af.An = true;
                  };
                  mbf.onStop = function (p728) {
                    if (p728 && p728.pointerType === "touch") {
                      return;
                    }
                    vO47.og.af.An = false;
                  };
                  v545.addEventListener("pointermove", mbf.onmovepoint, true);
                  v545.addEventListener("pointerdown", mbf.onRun, true);
                  v545.addEventListener("pointerup", mbf.onStop, true);
                  if (_wwc.ismobile) {
                    v545.addEventListener("touchstart", function (p729) {
                      if (p729 = p729 || window.event) {
                        vO47.og.af.An = p729.touches.length >= 2;
                      }
                      p729.preventDefault();
                    }, true);
                    v545.addEventListener("touchend", function (p730) {
                      if (p730 = p730 || window.event) {
                        vO47.og.af.An = p730.touches.length >= 2;
                      }
                    }, true);
                  }

                  // ✅ تأكيد نهائي على حماية التوكن

                  setTimeout(() => {
                    const finalToken = localStorage.getItem("wormworld_token");
                    if (finalToken && bbs.tk !== finalToken) {
                      bbs.tk = finalToken;
                      console.log("🔒 تأكيد نهائي: تم ضمان استخدام التوكن المحمي");
                    }
                  }, 1000);
                case 35:
                case "end":
                  return p706.stop();
              }
            }
          }, f161);
        }));
        return function f167(p731, p732) {
          return vF1142.apply(this, arguments);
        };
      }();
      function f168() {
        var v555 = document.createElement("div");
        v555.style.position = "fixed";
        v555.style.top = "0";
        v555.style.height = "100%";
        v555.style.width = "100%";
        v555.style.zIndex = "1000";
        v555.id = "zone_joystick";
        document.body.appendChild(v555);
      }
      function f169() {
        var v556 = document.getElementById("zone_joystick");
        if (v556) {
          v556.remove();
        }
      }
      var v_0x5b52f = function f170() {
        if (v500) {
          $("#wwc-mobile-box").remove();
          $("#wwc-mobile-box-slider").remove();
          v500.destroy();
        }
        f169();
      };
      var v_0x382290 = function f171() {
        try {
          var v_0x2d3a77 = function f172() {
            v500.on("start end", function (p733, p734) {}).on("move", function (p735, p736) {
              var v557 = p736.angle.radian <= Math.PI ? p736.angle.radian * -1 : Math.PI - (p736.angle.radian - Math.PI);
              vO47.og.af.Bn = v557;
            });
          };
          var v_0x5d879f = function f173() {
            if (v500) {
              v500.destroy();
            }
            var vF78 = f78({}, bbs.joystick);
            var vO43 = {};
            if (bbs.customJoystick) {
              f168();
              var vF67 = f67(bbs.customJoystick.buttons);
              var v558;
              try {
                for (vF67.s(); !(v558 = vF67.n()).done;) {
                  var v559 = v558.value;
                  var v560 = document.createElement("div");
                  if (v559.svg) {
                    v560.innerHTML = v559.svg;
                  } else {
                    v560.style.color = v559.color || "#FFF";
                    v560.style.backgroundColor = v559.backgroundColor || "#000";
                    v560.style.borderRadius = "10px";
                    v560.style.textAlign = "center";
                    v560.style.fontWeight = "bold";
                    v560.style.padding = "5px";
                    v560.style.border = "1px solid #f00";
                    v560.style.fontSize = v559.size || "25px";
                    v560.innerHTML = v559.value;
                  }
                  v560.style.position = "absolute";
                  v560.style.top = v559.top;
                  v560.style.left = v559.left;
                  v560.style.display = v559.display;
                  v560.style.cursor = "pointer";
                  v560.id = "cbjt_" + v559.value;
                  v560.dataset.size = v559.size;
                  v560.dataset.color = v559.color || "#FFF";
                  v560.style.opacity = 0.6;
                  document.getElementById("zone_joystick").appendChild(v560);
                  if (v559.display !== "none") {
                    if (v559.value === "ZoomIn") {
                      v560.addEventListener("click", function (p737) {
                        mbf.mbfass2();
                      });
                    }
                    if (v559.value === "ZoomOut") {
                      v560.addEventListener("click", function (p738) {
                        mbf.mbfass1();
                      });
                    }
                    if (v559.value === "Accelerator") {
                      v560.addEventListener("pointerdown", function (p739) {
                        mbf.onRun();
                      });
                      v560.addEventListener("pointerup", function (p740) {
                        mbf.onStop();
                      });
                    }
                    if (v559.value === "Respawn") {
                      v560.addEventListener("click", function (p741) {
                        respawnFn();
                      });
                    }
                    if (v559.value === "Rotate") {
                      v560.addEventListener("click", function (p742) {
                        v_0x1eef04(v498 ? 0 : 8);
                      });
                    }
                    if (v559.value === "Snail") {
                      v560.addEventListener("click", function (p743) {
                        v_0x1eef04(v498 ? 0 : 7);
                      });
                    }
                    if (v559.value === "Lobby") {
                      v560.addEventListener("click", function (p744) {
                        lobbyFn();
                      });
                    }
                    if (v559.value === "Search") {
                      v560.addEventListener("click", function (p745) {
                        mbf.mbfass0();
                      });
                    }
                  }
                  vO43[v559.value] = v560;
                }
              } catch (e29) {
                vF67.e(e29);
              } finally {
                vF67.f();
              }
              vO43.Directional;
              var v561 = vO43.Directional.dataset.size / 2;
              var v562 = parseInt(vO43.Directional.style.left.replace("px", "")) + v561;
              var v563 = parseInt(vO43.Directional.style.top.replace("px", "")) + v561;
              vF78 = {
                zone: vO43.Directional,
                mode: "static",
                position: {
                  left: "50%",
                  top: "50%"
                },
                dumbBox: {
                  left: v562,
                  top: v563
                },
                color: "transparent",
                size: Math.floor(vO43.Directional.dataset.size / 1.6)
              };
            } else {
              vF78.zone = document.getElementById("game-view");
              if (vF78.mode === "static") {
                delete vF78.zone;
              }
            }
            v500 = nipplejs.create(vF78);
            v_0x2d3a77();
            if (bbs.customJoystick) {
              $(".nipple > .front").css("background", vO43.Directional.dataset.color);
            }
          };
          if (_wwc.ismobile) {
            var vLS6 = "";
            var v564 = bbs.configJoystick.typeCurrentName === "all" ? "label" : "labelAbbreviation";
            Object.keys(bbs.configJoystick.buttons).forEach(function (p746) {
              vLS6 = vLS6 + (bbs.configJoystick.buttons[p746].active ? `<button onclick="${bbs.configJoystick.buttons[p746].action}" id="mbf_${p746}">${bbs.configJoystick.buttons[p746][v564]}</button>` : "");
            });
            var v565 = `

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

        <div id="wwc-mobile-box"><div id="wwc-mobile-buttons" style="">${vLS6}</div></div>`;
            v565 = v565 + (bbs.configJoystick.typeCurrent === "btn" ? "" : `<div id="wwc-mobile-box-slider" class="game-slider-container-02"><input id="sliderZoom" orient="vertical" onchange="mbf.mbfass9(this)" type="range" min="0.25" max="${v501 ? 12 : 2}" step="0.25" value="1" style="height: 65vh;"></div>`);
            $("body").append(v565);
          }
          if (_wwc.ismobile && bbs.joystick.checked) {
            if (bbs.customJoystick) {
              console.log("customJoystick");
            }
            v_0x5d879f();
          }
        } catch (e30) {
          console.error(e30);
        }
      };
      var v566 = localStorage.getItem("custom_wormworld_wear");
      var v567 = localStorage.getItem("custom_wormworld_skin");
      var v568 = localStorage.getItem("custom_wormworld_badLang");
      var v569 = localStorage.getItem("custom_wormworld_background");
      var v570 = localStorage.getItem("custom_wormworld_audio");
      var vA12 = [" XТ_", "WORMXТ_(d{})", "_xt", "wormxt", "worm_xt", "timmap"];
      if (v568) {
        vA12 = vA12.concat(JSON.parse(v568));
      }
      window.badLanguageRegEx = (vA12 || []).join("|");
      var v_0x586455 = function f174(p747) {
        p747 = p747.replace(new RegExp(badLanguageRegEx, "gim"), ":");
        p747 = p747.replace(/\uFDFD/g, "");
        p747 = p747.substring(0, vLN18);
        return p747;
      };
      _wwc.customConfig = function (p748) {
        var v_0x4f28e8 = function f175(p749, p750 = 0) {
          var v571 = p749.id.toString();
          var v572 = p749.type.toString().toLowerCase() + "VariantArray";
          var v573 = p749.type.toString().toLowerCase() + "Dict";
          p748.textureDict[v571] = {
            custom: true,
            re1ativePath: p749.file,
            reference: 1000 + p750
          };
          p748.regionDict[v571] = {
            texture: v571,
            x: p749.x,
            y: p749.y,
            w: p749.w,
            h: p749.h,
            px: p749.px,
            py: p749.py,
            pw: 128,
            ph: 128
          };
          p748[v573][1000 + p750] = {
            base: [{
              region: v571
            }],
            guest: false,
            nonbuyable: false,
            price: 0,
            priceBefore: 0,
            id: v571
          };
          p748[v572].push([1000 + p750]);
        };
        if (v566) {
          v566 = JSON.parse(v566);
          if (v566.wear) {
            if (v566.version == "2") {
              v566.data.forEach(function (p751, p752) {
                v_0x4f28e8(p751, p752);
              });
            } else {
              for (var v574 in v566.wear.textureDict) {
                p748.textureDict[v574] = {};
                p748.textureDict[v574].h1 = true;
                p748.textureDict[v574].h3 = true;
                p748.textureDict[v574].re1ativePath = v566.wear.textureDict[v574].file;
              }
              for (var v575 in v566.wear.regionDict) {
                p748.regionDict[v575] = v566.wear.regionDict[v575];
                var v576 = p748.regionDict[v575];
                p748[v576.list][v576.obj.id.toString()] = v576.obj;
                p748[v576.listVariant].push([v576.obj.id.toString()]);
              }
            }
          }
        }
        if (v567) {
          v567 = JSON.parse(v567);
          if (v567.version_skin == "2") {
            var v_0x50f2d5 = function f176(p753, p754, p755, p756) {
              return {
                texture: p754,
                h: p755 - 5,
                w: p755 - 5,
                x: p755 * (p756 ? 0 : p753 || 0),
                y: 0
              };
            };
            var v577 = "SKIN_" + v567.id + "___Z";
            var vO44 = {
              id: v577,
              regionDict: {},
              textureDict: {},
              skinArrayDict: [],
              skinGroupArrayDict: [{
                id: v577,
                name: {
                  en: "Custom V2"
                },
                list: []
              }],
              version_skin: 3
            };
            var vO45 = {
              id: v577,
              guest: false,
              price: 0,
              priceBefore: 0,
              nonbuyable: false,
              prime: "c_white",
              glow: v567.glow,
              base: []
            };
            for (var v578 = v567.len - 1; v578 >= 0; v578--) {
              vO44.regionDict[`${v577}_${v578}`] = v_0x50f2d5(v578, v577, v567.cos, 0);
              vO45.base.push(`${v577}_${v578}`);
            }
            vO44.textureDict[v577] = {
              custom: true,
              re1ativePath: v567.file || v567.td.file,
              h1: true,
              h4: true
            };
            vO44.skinArrayDict.push(vO45);
            vO44.skinGroupArrayDict[0].list.push(v577);
            if (!v567.textureDict[v577]) {
              alert("Error! Texture not found:" + p + " - load again.");
              return;
            }
          }
          if (v567.version_skin == "3") {
            for (var v579 in v567) {
              var vF117 = f117(v567[v579]);
              if (vF117 === "object") {
                p748[v579] = Array.isArray(v567[v579]) ? [].concat(f63(p748[v579]), f63(v567[v579])) : f78(f78({}, p748[v579]), v567[v579]);
              }
            }
            return;
          }
          var v580 = v567.skin.id;
          v567.skin.id = v580.toString();
          for (var v581 in v567.textureDict) {
            p748.textureDict[v581] = v567.textureDict[v581];
            p748.textureDict[v581].re1ativePath = v567.textureDict[v581].file;
            p748.textureDict[v581].h1 = true;
            p748.textureDict[v581].h4 = true;
          }
          for (var v582 in v567.regionDict) {
            p748.regionDict[v582] = v567.regionDict[v582];
          }
          p748.skinGroupArrayDict.push({
            id: "custom",
            name: {
              en: "Custom"
            },
            list: [v580]
          });
          p748.skinArrayDict.push(v567.skin);
        }
      };
      var v583 = document.getElementById("btnFullScreen");
      if (v583) {
        v583.addEventListener("click", function () {
          var v584 = document.documentElement.requestFullScreen || document.documentElement.webkitRequestFullScreen || document.documentElement.mozRequestFullScreen;
          if (v584 && !_wwc.fullscreen) {
            try {
              _wwc.fullscreen = true;
              v584.call(document.documentElement);
            } catch (e31) {}
          } else {
            _wwc.fullscreen = false;
            document.exitFullscreen();
          }
        });
      }
      function f177() {
        var v585 = false;
        (function (p757) {
          if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(p757) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(p757.substr(0, 4))) {
            v585 = true;
          }
        })(navigator.userAgent || navigator.vendor || window.opera);
        return v585;
      }
      window.w2c2020 = {
        fontStyle: {
          amarelo: new PIXI.TextStyle({
            align: "center",
            fill: "#f8d968",
            fontSize: 10,
            lineJoin: "round",
            stroke: "red",
            strokeThickness: 1,
            whiteSpace: "normal",
            wordWrap: true
          }),
          branco: new PIXI.TextStyle({
            align: "center",
            fill: "#f8d968",
            fontSize: 10,
            lineJoin: "round",
            stroke: "red",
            strokeThickness: 1,
            whiteSpace: "normal",
            wordWrap: true
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
          hsBrancoRight: new PIXI.TextStyle(f79({
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
            fontSize: 8,
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
      var vA13 = ["#FFD500", "#FFD500", "#00B2ED", "#CCCF81", "#0094D7", "#CCCF81", "#ff0999"];
      for (var vLN078 = 0; vLN078 < vA13.length; vLN078++) {
        var v586 = vA13[vLN078];
        w2c2020.fontStyle["tfc" + vLN078] = new PIXI.TextStyle({
          align: "center",
          fill: v586,
          fontSize: 25,
          lineJoin: "round",
          whiteSpace: "normal",
          wordWrap: true,
          fontWeight: "bold"
        });
      }
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
      var v587 = false;
      var vO46 = {
        x: 0,
        y: 0
      };
      w2c2020.rotation.on("pointerdown", function (p758) {
        w2c2020.friends.rotation += Math.PI / 2;
        localStorage.setItem("wwcSaveGame", JSON.stringify(bbs || {}));
      });
      w2c2020.moveSprite.on("pointerdown", function (p759) {
        v587 = true;
        vO46.x = p759.data.global.x - w2c2020.friends.x;
        vO46.y = p759.data.global.y - w2c2020.friends.y;
      });
      w2c2020.moveSprite.on("pointerup", function () {
        v587 = false;
      });
      w2c2020.moveSprite.on("pointerupoutside", function () {
        v587 = false;
      });
      w2c2020.moveSprite.on("pointermove", function (p760) {
        if (v587) {
          var v588 = p760.data.global;
          w2c2020.friends.x = v588.x - vO46.x;
          w2c2020.friends.y = v588.y - vO46.y;
          bbs.displayFriends.x = w2c2020.friends.x;
          bbs.displayFriends.y = w2c2020.friends.y;
          localStorage.setItem("wwcSaveGame", JSON.stringify(bbs || {}));
        }
      });
      w2c2020.moveSprite.visible = false;
      w2c2020.rotation.visible = false;
      window.addEventListener("keydown", function (p761) {
        if (p761.key === "Escape") {
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
      w2c2020.label_kill = new PIXI.Text("KILL", w2c2020.fontStyle.branco);
      w2c2020.label_kill.x = 50;
      w2c2020.label_kill.y = 107;
      w2c2020.kill = new PIXI.Text("0", w2c2020.fontStyle.branco);
      w2c2020.kill.x = 60;
      w2c2020.kill.y = 120;
      w2c2020.killTotal = new PIXI.Text("0", w2c2020.fontStyle.branco);
      w2c2020.killTotal.x = 60;
      w2c2020.killTotal.y = 133;
      w2c2020.clock = PIXI.Sprite.from("https://asserts.wormworld.io/images/clock.png");
      w2c2020.clock.width = 100;
      w2c2020.clock.height = 100;
      w2c2020.clock.x = -50;
      w2c2020.clock.y = -50;
      w2c2020.containerHsRec = new PIXI.Container();
      w2c2020.containerHsRec.x = -55;
      w2c2020.containerHsRec.y = 270;
      w2c2020.containerHstop = new PIXI.Container();
      w2c2020.containerHstop.x = -55;
      w2c2020.containerHstop.y = 170;
      w2c2020.containerHsIndex = new PIXI.Container();
      w2c2020.containerHsNames = new PIXI.Container();
      w2c2020.containerHsValue = new PIXI.Container();
      var v_0x344381 = function f178(p762) {};
      w2c2020.top1rec = "🥇";
      w2c2020.top2rec = "🥈";
      w2c2020.top3rec = "🥉";
      w2c2020.titleRec = new PIXI.Text("Records (kb 0)", w2c2020.fontStyle.amarelo);
      w2c2020.titleRec.y = -5;
      for (var vLN079 = 0; vLN079 < 3; vLN079++) {
        var v589 = vLN079 + 1;
        var v590 = new PIXI.Text(w2c2020["top" + v589 + "rec"], w2c2020.fontStyle.hsBrancoRight);
        v590.x = vLN079 >= 9 ? -5 : 0;
        v590.y = v589 * 13;
        w2c2020.containerHsRec.addChild(v590);
        var v591 = new PIXI.Text("--", w2c2020.fontStyle.hsBranco);
        v591.x = 15;
        v591.y = v589 * 13;
        w2c2020.containerHsRec.addChild(v591);
        var v592 = new PIXI.Text("-", w2c2020.fontStyle.hsBrancoRight);
        v592.x = 135;
        v592.y = v589 * 13;
        w2c2020.containerHsRec.addChild(v592);
      }
      w2c2020.containerHsRec.addChild(w2c2020.titleRec);
      var vLN6 = 6;
      var v_0x261bce = function f179(p763, p764) {
        if (p764 && p764.length > 0) {
          for (var vLN080 = 0; vLN080 < 3; vLN080++) {
            if (w2c2020.containerHsRec.children[vLN080]) {
              w2c2020.containerHsRec.children[vLN080 * 3 + 1].text = p764 && p764[vLN080] ? p764[vLN080].nickname.substring(0, 17) : "--";
            }
            if (w2c2020.containerHsRec.children[vLN080]) {
              w2c2020.containerHsRec.children[vLN080 * 3 + 2].text = p764 && p764[vLN080] ? p764[vLN080].score : "--";
            }
          }
        }
        if (p763 && p763.length > 0) {
          for (var vLN081 = 0; vLN081 < vLN6; vLN081++) {
            var vLS7 = "--";
            var vLS8 = "--";
            if (p763 && p763[vLN081]) {
              vLS7 = p763[vLN081].nickname ? p763[vLN081].nickname.substring(0, 14) : "--";
              vLS8 = parseInt(p763[vLN081].score || 0);
            }
            if (w2c2020.containerHsNames.children[vLN081]) {
              w2c2020.containerHsNames.children[vLN081].text = vLS7;
            }
            if (w2c2020.containerHsValue.children[vLN081]) {
              w2c2020.containerHsValue.children[vLN081].text = vLS8;
            }
          }
        }
      };
      w2c2020.containerHstop.addChild(new PIXI.Text("TOP HS (kb 9)", w2c2020.fontStyle.amarelo));
      for (var vLN082 = 0; vLN082 < vLN6; vLN082++) {
        var v593 = new PIXI.Text(vLN082 + 1, w2c2020.fontStyle.hsBranco);
        v593.x = vLN082 >= 9 ? -5 : 0;
        v593.y = (vLN082 + 1) * 13;
        w2c2020.containerHsIndex.addChild(v593);
        var v594 = new PIXI.Text("..", w2c2020.fontStyle.hsBranco);
        v594.x = 10;
        v594.y = (vLN082 + 1) * 13;
        w2c2020.containerHsNames.addChild(v594);
        var v595 = new PIXI.Text(0, w2c2020.fontStyle.hsBrancoRight);
        v595.x = 130;
        v595.y = (vLN082 + 1) * 13;
        w2c2020.containerHsValue.addChild(v595);
      }
      w2c2020.containerHstop.addChild(w2c2020.containerHsIndex);
      w2c2020.containerHstop.addChild(w2c2020.containerHsNames);
      w2c2020.containerHstop.addChild(w2c2020.containerHsValue);
      w2c2020.containerCountInfo = new PIXI.Container();
      w2c2020.containerCountInfo.x = -45;
      w2c2020.containerCountInfo.y = -52;
      w2c2020.containerCountInfo.addChild(w2c2020.friends);
      w2c2020.containerCountInfo.addChild(w2c2020.label_hs);
      w2c2020.containerCountInfo.addChild(w2c2020.hs);
      w2c2020.containerCountInfo.addChild(w2c2020.hsTotal);
      w2c2020.containerCountInfo.addChild(w2c2020.label_kill);
      w2c2020.containerCountInfo.addChild(w2c2020.kill);
      w2c2020.containerCountInfo.addChild(w2c2020.killTotal);
      w2c2020.labelRoom = new PIXI.Text("wxo", w2c2020.fontStyle.amarelo);
      w2c2020.labelRoom.x = -50;
      w2c2020.labelRoom.y = -56;
      w2c2020.addRoom = function (p765) {
        w2c2020.labelRoom.text = p765 || "wxo";
      };
      window.addEventListener("keydown", function (p766) {
        if (p766.key == "7") {
          v_0x1eef04(v498 ? 0 : 7);
        }
        if (p766.key == "8") {
          v_0x1eef04(v498 ? 0 : 8);
        }
        if (p766.key === "0" && bbs.showRechs) {
          w2c2020.containerHsRec.alpha = !w2c2020.containerHsRec.alpha;
        }
        if (p766.key === "9" && bbs.showTophs) {
          w2c2020.containerHstop.alpha = !w2c2020.containerHstop.alpha;
        }
        if (p766.key === "6" && vO48.setIntervalRun) {
          v499 = !v499;
        }
        if (p766.key === "5") {
          respawnFn();
        }
        if (p766.key === "4") {
          var v596 = _wwc._anApp.og.af.ng.mf.getChildByName("lineHS");
          if (v596) {
            v596.alpha = v596.alpha ? 0 : 0.3;
          }
        }
        if (p766.key === "3") {
          var vVLN073 = vLN073;
          if (backgroundArena.length < vVLN073) {
            vVLN073 = bbs.background || 0;
            vLN073 = 0;
          }

          // تطبيق الخلفية فوراً

          vO47.xe._g = vO48.bgg(vVLN073);
          _wwc._anApp.og.af.ng.Lg.$g(vO47.xe._g);

          // حفظ الخلفية

          bbs.background = vVLN073;
          localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));
          $("#backgroundArena").val(vVLN073);
          vLN073++;
        }
        if (p766.key === "1") {
          mbf.mbf_cambiar();
        }
        if (p766.key === "x1") {
          _wwcio.update(1);
        }
        if (p766.key === "x2") {
          _wwcio.update(2);
        }
        if (p766.key === "<" || p766.key === "," && vO48.setIntervalRun) {
          mbf.mbfass1();
        }
        if (p766.key === ">" || p766.key === "." && vO48.setIntervalRun) {
          mbf.mbfass2();
        }
        if (p766.key === "z" || p766.key === "Z" && vO48.setIntervalRun) {
          vLN15 = bbs.configZoom?.closeDown || 1;
        }
        if (p766.key === "c" || p766.key === "C" && vO48.setIntervalRun) {
          vLN15 = vLN15 === 0.5 ? 2 : bbs.configZoom?.closeUp || 0.25;
        }
      });
      var vO47 = {
        Lc: {
          Gb: {}
        }
      };
      var vO48 = {
        pm: {},
        ps: 0,
        ps2: function f180(p767, p768, p769) {
          if (true) {
            var v597 = p769 ? 128 : 0;
            var v598 = vO48.$F.N(p768) / vO48.$V.F * 128 & 127;
            var v599 = (v597 | v598) & 255;
            if (p767.nq !== v599) {
              var v600 = new ArrayBuffer(1);
              new DataView(v600).setInt8(0, v599);
              p767.Eq(v600);
              p767.nq = v599;
            }
          } else {}
        },
        ps3: function f181() {
          vO47.dh.xq(vO47.og.af.Gn(), vO47.og.af.Hn());
        },
        setIntervalRun: null,
        loadBg: false,
        LG: function f182(p770, p771, p772) {
          p770.Ll("gg", p772.credential, null);
        },
        Lg: function f183(p773) {
          vO47.xe._g = vO48.bgg();
          _wwc.$C = p773;
          _wwc.$W = vO48;
          if (bbs.bgGameWidth > 512) {
            return new p773.WMGBS1();
          } else {
            return new p773.WMGBS2();
          }
        },
        registry: function () {
          var vF1145 = f114(f82().mark(function f184(p774) {
            var v601;
            return f82().wrap(function f185(p775) {
              while (1) {
                switch (p775.prev = p775.next) {
                  case 0:
                    p775.next = 2;
                    return fetch(URLSERV_WORMWORLD + "/dynamic/assets/registry", {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                        "x-uid": wwc_keycode
                      },
                      body: JSON.stringify(p774)
                    }).then(function (p776) {
                      if (!p776.ok) {
                        return p774;
                      }
                      return p776.json();
                    });
                  case 2:
                    v601 = p775.sent;
                    return p775.abrupt("return", v601);
                  case 4:
                  case "end":
                    return p775.stop();
                }
              }
            }, f184);
          }));
          function f186(p777) {
            return vF1145.apply(this, arguments);
          }
          return f186;
        }()
      };
      vO48.Vd = function (p778, p779) {
        _wwc.customConfig(p778);
        if (!p778) {
          return;
        }
        var vThis91 = this;
        function f187(p780) {
          var v602 = p779.Id.Ld;
          vThis91.Rd(v602, p779.Od.bc(v602).lc(p780));
        }
        if (this.Fd) {
          this.Pd();
          return;
        }
        var vA14 = [];
        var vA15 = [];
        var vLN083 = 0;
        var v603 = new PIXI.Loader();
        for (var v604 in p778.textureDict) {
          if (p778.textureDict.hasOwnProperty(v604)) {
            var v605 = p778.textureDict[v604];
            var v606 = v605.re1ativePath || v605.relativePath;
            var v607 = v605.fileSize || 100;
            var v608 = v605.sha256 || null;
            var v609 = new p779.Wd(v604, v606, v607, v608);
            v609.h1 = v605.h1;
            v609.h4 = v605.h4;
            v609.skinEvo = v605.skinEvo;
            v609.lines = v605.lines;
            v609.speed = v605.speed;
            vA14.push(v609);
            v603.add(v604, v606);
          }
        }
        v603.onProgress.add(function (p781, p782) {
          f187(p781.progress / 100);
        });
        v603.load(function (p783, p784) {
          vA14.forEach(function (p785) {
            p785.resource = p784[p785.ae];
          });
          vThis91.$d(p778, vA14, p779);
        });
        return;
      };
      vO48.Zd = function (p786, p787, p788, p789) {
        $.ajax({
          type: "GET",
          url: p786._d,
          xhrFields: {
            responseType: "arraybuffer",
            onprogress: function f188(p790) {
              if (p790.lengthComputable) {
                p789(p790.loaded / p790.total);
              }
            }
          }
        }).fail(function () {
          p787(new Error());
        }).done(function (p791) {
          p788(p791);
        });
      };
      vO48.$d = function (p792, p793, p794) {
        function f189(p795) {
          var v610 = p794.Id.Md;
          vThis92.Rd(v610, p794.Od.bc(v610).lc(p795));
        }
        var vThis92 = this;
        if (this.Fd) {
          this.Pd();
          return;
        }
        var v611;
        var v612;
        var vO49 = {};
        var v_0x155611 = function f190() {
          for (var vLN084 = 0; vLN084 < p793.length; vLN084++) {
            try {
              window.URL.revokeObjectURL(p793[vLN084].Xd);
            } catch (e32) {}
          }
          vThis92.Sd(new Error());
        };
        var v_0x193ee1 = function f191() {
          var v613 = vLN085 == 5 ? 0 : vLN085;
          f189(v613 / 4);
          vO49[v611.ae] = new vO48.$C.be(v611.Xd, v612);
          v_0x419e21();
        };
        var v_0x419e21 = function f192() {
          try {
            if (vLN085 < p793.length) {
              v611 = p793[vLN085];
              vLN085++;
              vO49[v611.ae] = new vO48.$C.be(v611.resource.texture, v611.resource.texture.baseTexture);
              v_0x419e21();
              return;
            }
            return vThis92.ce(p792, vO49);
          } catch (e33) {
            console.error(e33);
          }
        };
        var vLN085 = 0;
        v_0x419e21();
      };
      vO48.p = function (p796, p797) {
        p796 = p796.split("|");
        vO48.pm[p796[0]] = {
          p: p796[1],
          i: p797
        };
      };
      vO48.ae = function (p798, p799, p800) {
        if (p799.maV !== 1) {
          p799.maV = 1;
          var v614 = p799.ma.trim().match(v403);
          if (v614 && p800.dh.Fh[p799.ae]) {
            var v_0x3616b2 = function f193(p801, p802) {
              if (p801.includes("_")) {
                if (v622["WEAR_W" + v616 + "_" + p801]) {
                  return v622["WEAR_W" + v616 + "_" + p801].reference;
                } else {
                  return p802;
                }
              }
              return _wwc.wearMap[p801];
            };
            var v615 = v614[3];
            var v616 = v614[4];
            var v617 = v614[5];
            var v618 = v614[6];
            var v619 = v614[7];
            var v620 = v614[8];
            var v621 = v614[9];
            var v622 = vO47.Lc.Xb().textureDict;
            var v623 = v615 === "B";
            if (v617 !== "000") {
              var v624 = "SKIN_S" + v617.substring(0, 2) + "___" + v617.substring(2);
              var v625 = v622[v624];
              p800.dh.Fh[p799.ae].Eh.Hh = !v623 ? parseInt(_wwc.skinMap[v617]) : v625 ? v624 : p800.dh.Fh[p799.ae].Eh.Hh;
            }
            if (v618 !== "00") {
              p800.dh.Fh[p799.ae].Eh.ni = v_0x3616b2(v618, p800.dh.Fh[p799.ae].Eh.ni);
            }
            if (v619 !== "00") {
              p800.dh.Fh[p799.ae].Eh.oi = v_0x3616b2(v619, p800.dh.Fh[p799.ae].Eh.oi);
            }
            if (v620 !== "00") {
              p800.dh.Fh[p799.ae].Eh.pi = v_0x3616b2(v620, p800.dh.Fh[p799.ae].Eh.pi);
            }
            if (v621 !== "00") {
              p800.dh.Fh[p799.ae].Eh.qi = v_0x3616b2(v621, p800.dh.Fh[p799.ae].Eh.qi);
            }
            p800.dh.Fh[p799.ae].Eh.ma = v_0x586455(p800.dh.Fh[p799.ae].Eh.ma);
          }
        }
        p799.ma = v_0x586455(p799.ma);
      };
      vO48.Xp = function (p803, p804, p805, p806, p807, p808, p809) {
        if (!_wwc.skinMap) {
          _wwc.skinMap = vO47.Lc.Xb().skinMap;
        }
        if (!_wwc.wearMap) {
          _wwc.wearMap = vO47.Lc.Xb().wearMap;
        }
        var v626 = /^(SKIN|WEAR)_(.*?)_(.{2}|.{3})$/;
        var v627 = vO47.Lc.Xb().hatDict[p809] ? vO47.Lc.Xb().hatDict[p809].id : p809;
        var v628 = vO47.Lc.Xb().glassesDict[p808] ? vO47.Lc.Xb().glassesDict[p808].id : p808;
        var v629 = vO47.Lc.Xb().glassesDict[p807] ? vO47.Lc.Xb().mouthDict[p807].id : p807;
        var v630 = vO47.Lc.Xb().glassesDict[p806] ? vO47.Lc.Xb().eyesDict[p806].id : p806;
        var vLSA = "A";
        var vLS9 = "";
        var vLS__ = "__";
        var v_0x5b5203 = function f194(p810, p811) {
          if (v626.test(p810)) {
            var v631 = v626.exec(p810);
            return {
              id: v631[2],
              value: v631[3],
              testRun: true
            };
          }
          return {
            id: null,
            value: null,
            testRun: false
          };
        };
        var vO50 = {
          h: v_0x5b5203(p805, "h"),
          r: v_0x5b5203(v630, "r"),
          a: v_0x5b5203(v629, "a"),
          f: v_0x5b5203(v628, "f"),
          c: v_0x5b5203(v627, "c")
        };
        if (vO50.h.testRun) {
          vLS9 = vO50.h.id.substring(1);
          vLSA = "B";
        }
        if (vO50.r.testRun || vO50.a.testRun || vO50.f.testRun || vO50.c.testRun) {
          vLS__ = (vO50.r.id || vO50.a.id || vO50.f.id || vO50.c.id).substring(1);
        }
        var v_0x6c0f13 = function f195(p812, p813) {
          if (vO50[p813].value) {
            return vO50[p813].value.padStart(p813 === "h" ? 3 : 2, "0");
          }
          if (!_wwc[p813 === "h" ? "testSkinMod" : "testWear"](p812 || 0)) {
            if (vO50[p813].testRun) {
              return p812.toString().padStart(p813 === "h" ? 3 : 2, "0");
            } else if (p813 === "h") {
              return "000";
            } else {
              return "00";
            }
          }
          return _wwc[p813 === "h" ? "skinMap" : "wearMap"][p812] || (p813 === "h" ? "000" : "00");
        };
        var vV_0x6c0f13 = v_0x6c0f13(p805, "h");
        var vV_0x6c0f132 = v_0x6c0f13(p806, "r");
        var vV_0x6c0f133 = v_0x6c0f13(p807, "a");
        var vV_0x6c0f134 = v_0x6c0f13(p808, "f");
        var vV_0x6c0f135 = v_0x6c0f13(p809, "c");
        var v632 = vLSA + vLS__ + vLS9 + vV_0x6c0f13.replace("__", "") + vV_0x6c0f132 + vV_0x6c0f133 + vV_0x6c0f134 + vV_0x6c0f135;
        bbs.code = `${vV_0x6c0f13 || "000"}|${vV_0x6c0f135 || "00"}`;
        function f196(p814, p815) {
          var vLS10 = "";
          vLS10 = p814.substring(0, vLN18).padEnd(vLN18, "_");
          var v633 = vLS10 + p815;
          return v633;
        }
        bbs.nickname = f196(p804, v632);
        return bbs.nickname;
      };
      vO48.bgg = function (p816) {
        p816 = parseInt(p816);
        var v634 = bbs.backgroundUri || "/images/bg-pattern-pow2-ARENA.png";
        if (!isNaN(p816)) {
          v634 = backgroundArena[p816]?.uri || v634;
          bbs.bgGameWidth = backgroundArena[p816]?.w || 512;
          bbs.bgGameHeight = backgroundArena[p816]?.h || 256;
        }
        var v635 = PIXI.BaseTexture.from(v634);
        bbs.bgGameWidth = v635.width || bbs.bgGameWidth || 512;
        bbs.bgGameHeight = v635.height || bbs.bgGameHeight || 256;
        v635.wrapMode = bbs.bgGameWidth > 999 ? PIXI.WRAP_MODES.CLAMP : PIXI.WRAP_MODES.REPEAT;
        return new PIXI.Texture(v635);
      };
      vO48.genereteTexture = function (p817) {
        var vLN128 = 128;
        var vLN9 = 9;
        try {
          var v_0x4acede = function f197() {
            var vA16 = [];
            for (var vLN086 = 0; vLN086 < p817.lines; vLN086++) {
              lineContainer = [];
              for (var vLN087 = 0; vLN087 < vLN9; vLN087++) {
                try {
                  var v636 = PIXI.Texture.from(p817._d, {
                    x: vLN087 * vLN128,
                    y: vLN086 * vLN128,
                    width: vLN128,
                    height: vLN128
                  });
                  lineContainer.push(v636);
                } catch (e34) {
                  console.log(vLN086, vLN087);
                  console.log(e34);
                  return;
                }
              }
              vA16.push(lineContainer);
            }
            return vA16;
          };
          return v_0x4acede();
        } catch (e35) {
          return [];
        }
      };
      var vO51 = {
        headshot: "https://timmapwormate.com/images/hs_2.mp3",
        shaokahn: window.URL_CDN + "/sounds/shao_kahn_sound_effect.mp3",
        speed: window.URL_CDN + "/sounds/woo_Hoo_sound_effect.mp3",
        curve: window.URL_CDN + "/sounds/yes_effect.mp3",
        loser: window.URL_CDN + "/sounds/negative_beeps_effect.mp3",
        top1: window.URL_CDN + "/sounds/mission_complete_sound_effect.mp3"
      };
      vO41.ref = ["speed", "curve"];
      for (var v637 in vO51) {
        vO41[v637] = new vP4362.Howl({
          src: [vO51[v637]],
          html5: true,
          autoplay: v637 == "top1",
          loop: false
        });
      }
      var vO52 = {
        "rotate(0deg)": 0,
        "rotate(90deg)": 1.5707963267948966,
        "rotate(180deg)": 3.141592653589793,
        "rotate(270deg)": 4.71238898038469,
        "rotate(360deg)": 0
      };
      var v638 = typeof Symbol == "function" && f117(Symbol.iterator) == "symbol" ? function (p818) {
        return f117(p818);
      } : function (p819) {
        if (p819 && typeof Symbol == "function" && p819.constructor === Symbol && p819 !== Symbol.prototype) {
          return "symbol";
        } else {
          return f117(p819);
        }
      };
      var v639;
      window.addEventListener("load", function () {
        function f198() {
          (function (p820, p821, p822) {
            function f199(p823, p824) {
              return (p823 === undefined ? "undefined" : v638(p823)) === p824;
            }
            function f200() {
              if (typeof p821.createElement != "function") {
                return p821.createElement(arguments[0]);
              } else if (v642) {
                return p821.createElementNS.call(p821, "http://www.w3.org/2000/svg", arguments[0]);
              } else {
                return p821.createElement.apply(p821, arguments);
              }
            }
            var vA17 = [];
            var vA18 = [];
            var vO53 = {
              _version: "3.3.1",
              _config: {
                classPrefix: "",
                enableClasses: true,
                enableJSClass: true,
                usePrefixes: true
              },
              _q: [],
              on: function f201(p825, p826) {
                var vThis93 = this;
                setTimeout(function () {
                  p826(vThis93[p825]);
                }, 0);
              },
              addTest: function f202(p827, p828, p829) {
                vA18.push({
                  name: p827,
                  fn: p828,
                  options: p829
                });
              },
              addAsyncTest: function f203(p830) {
                vA18.push({
                  name: null,
                  fn: p830
                });
              }
            };
            var v_0x5cedab = function f204() {};
            v_0x5cedab.prototype = vO53;
            v_0x5cedab = new v_0x5cedab();
            var v640 = false;
            try {
              v640 = "WebSocket" in p820 && p820.WebSocket.CLOSING === 2;
            } catch (e36) {}
            v_0x5cedab.addTest("websockets", v640);
            var v641 = p821.documentElement;
            var v642 = v641.nodeName.toLowerCase() === "svg";
            v_0x5cedab.addTest("canvas", function () {
              var vF200 = f200("canvas");
              return !!vF200.getContext && !!vF200.getContext("2d");
            });
            v_0x5cedab.addTest("canvastext", function () {
              return v_0x5cedab.canvas !== false && typeof f200("canvas").getContext("2d").fillText == "function";
            });
            (function () {
              var v643;
              var v644;
              var v645;
              var v646;
              var v647;
              var v648;
              var v649;
              for (var v650 in vA18) {
                if (vA18.hasOwnProperty(v650)) {
                  v643 = [];
                  v644 = vA18[v650];
                  if (v644.name && (v643.push(v644.name.toLowerCase()), v644.options && v644.options.aliases && v644.options.aliases.length)) {
                    for (v645 = 0; v645 < v644.options.aliases.length; v645++) {
                      v643.push(v644.options.aliases[v645].toLowerCase());
                    }
                  }
                  v646 = f199(v644.fn, "function") ? v644.fn() : v644.fn;
                  v647 = 0;
                  for (; v647 < v643.length; v647++) {
                    v648 = v643[v647];
                    v649 = v648.split(".");
                    if (v649.length === 1) {
                      v_0x5cedab[v649[0]] = v646;
                    } else {
                      if (!!v_0x5cedab[v649[0]] && !(v_0x5cedab[v649[0]] instanceof Boolean)) {
                        v_0x5cedab[v649[0]] = new Boolean(v_0x5cedab[v649[0]]);
                      }
                      v_0x5cedab[v649[0]][v649[1]] = v646;
                    }
                    vA17.push((v646 ? "" : "no-") + v649.join("-"));
                  }
                }
              }
            })();
            (function (p831) {
              var v651 = v641.className;
              var v652 = v_0x5cedab._config.classPrefix || "";
              if (v642) {
                v651 = v651.baseVal;
              }
              if (v_0x5cedab._config.enableJSClass) {
                var v653 = new RegExp("(^|\\s)" + v652 + "no-js(\\s|$)");
                v651 = v651.replace(v653, "$1" + v652 + "js$2");
              }
              if (v_0x5cedab._config.enableClasses) {
                v651 += " " + v652 + p831.join(" " + v652);
                if (v642) {
                  v641.className.baseVal = v651;
                } else {
                  v641.className = v651;
                }
              }
            })(vA17);
            delete vO53.addTest;
            delete vO53.addAsyncTest;
            for (var vLN088 = 0; vLN088 < v_0x5cedab._q.length; vLN088++) {
              v_0x5cedab._q[vLN088]();
            }
            p820.Modernizr = v_0x5cedab;
          })(window, document);
          return Modernizr.websockets && Modernizr.canvas && Modernizr.canvastext;
        }
        document.getElementById("game-wrap").style.display = "block";
        if (!f198()) {
          document.getElementById("error-view").style.display = "block";
          return;
        }
        (function () {
          function f205() {
            return vO47;
          }
          var vO54 = {};
          var vO55 = {};
          var decoder = {
            a: {
              r: window.runtimeHash,
              b: "https://gateway.wormate.io",
              c: "https://resources.wormate.io",
              d: "/images/linelogo-valday2023.png",
              e: "/images/guest-avatar-valday2023.png",
              f: "/images/confetti-valday2023.png",
              g: "/images/bg-event-pattern-valday2023.png"
            }
          };
          decoder.a.i = function () {
            var v654 = window.I18N_LANG;
            v654 ||= "en";
            return v654;
          }();
          decoder.a.j = function () {
            var vUndefined = undefined;
            switch (decoder.a.i) {
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
          moment.locale(decoder.a.j);
          var vF32 = function () {
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
          vO55.F = 6.283185307179586;
          vO55.G = Math.PI;
          decoder.H = function (p832) {
            return window.I18N_MESSAGES[p832];
          };
          decoder.I = function (p833) {
            if (p833[decoder.a.i]) {
              return p833[decoder.a.i];
            } else if (p833.en) {
              return p833.en;
            } else {
              return p833.x;
            }
          };
          decoder.J = function (p834) {
            var v655 = (Math.floor(p834) % 60).toString();
            var v656 = (Math.floor(p834 / 60) % 60).toString();
            var v657 = (Math.floor(p834 / 3600) % 24).toString();
            var v658 = Math.floor(p834 / 86400).toString();
            var v659 = decoder.H("util.time.days");
            var v660 = decoder.H("util.time.hours");
            var v661 = decoder.H("util.time.min");
            var v662 = decoder.H("util.time.sec");
            if (v658 > 0) {
              return v658 + " " + v659 + " " + v657 + " " + v660 + " " + v656 + " " + v661 + " " + v655 + " " + v662;
            } else if (v657 > 0) {
              return v657 + " " + v660 + " " + v656 + " " + v661 + " " + v655 + " " + v662;
            } else if (v656 > 0) {
              return v656 + " " + v661 + " " + v655 + " " + v662;
            } else {
              return v655 + " " + v662;
            }
          };
          decoder.K = function (p835) {
            if (p835.includes("href")) {
              return p835.replaceAll("href", "target=\"_black\" href");
            } else {
              return p835;
            }
          };
          decoder.L = function (p836, p837, p838, p839) {
            var v663 = document.createElement("script");
            var v664 = true;
            if (v638(p837) !== "undefined" && p837 !== null) {
              if (v638(p837.id) !== "undefined") {
                v663.id = p837.id;
              }
              if (v638(p837.async) !== "undefined" && p837.async) {
                v663.async = "async";
              }
              if (v638(p837.defer) !== "undefined" && p837.defer) {
                v663.defer = "defer";
              }
              if (v638(p837.crossorigin) !== "undefined") {
                v663.crossorigin = p837.crossorigin;
              }
            }
            v663.type = v663.type == p839 ? "module" : "text/javascript";
            v663.src = p836;
            if (p838) {
              v663.onload = v663.onreadystatechange = function () {
                v664 = false;
                try {
                  p838();
                } catch (e37) {}
                v663.onload = v663.onreadystatechange = null;
              };
            }
            (document.head || document.getElementsByTagName("head")[0]).appendChild(v663);
          };
          decoder.M = function (p840, p841) {
            var vP841 = p841;
            vP841.prototype = Object.create(p840.prototype);
            vP841.prototype.constructor = vP841;
            vP841.parent = p840;
            return vP841;
          };
          decoder.N = function (p842) {
            p842 %= vO55.F;
            if (p842 < 0) {
              return p842 + vO55.F;
            } else {
              return p842;
            }
          };
          decoder.O = function (p843, p844, p845) {
            return decoder.P(p845, p843, p844);
          };
          decoder.P = function (p846, p847, p848) {
            if (p846 > p848) {
              return p848;
            } else if (p846 < p847) {
              return p847;
            } else if (Number.isFinite(p846)) {
              return p846;
            } else {
              return (p847 + p848) * 0.5;
            }
          };
          decoder.Q = function (p849, p850, p851, p852) {
            if (p850 > p849) {
              return Math.min(p850, p849 + p851 * p852);
            } else {
              return Math.max(p850, p849 - p851 * p852);
            }
          };
          decoder.R = function (p853, p854, p855, p856, p857) {
            return p854 + (p853 - p854) * Math.pow(1 - p856, p855 / p857);
          };
          decoder.S = function (p858, p859, p860) {
            return p858 - (p858 - p859) * p860;
          };
          decoder.T = function (p861, p862, p863, p864) {
            var vP863 = p863;
            var vP862 = p862;
            var v665 = p862 + p864;
            if (p861 == null) {
              throw new TypeError("this is null or not defined");
            }
            var v666 = p861.length >>> 0;
            var v667 = vP863 >> 0;
            var v668 = v667 < 0 ? Math.max(v666 + v667, 0) : Math.min(v667, v666);
            var v669 = vP862 >> 0;
            var v670 = v669 < 0 ? Math.max(v666 + v669, 0) : Math.min(v669, v666);
            var v671 = v665 === undefined ? v666 : v665 >> 0;
            var v672 = v671 < 0 ? Math.max(v666 + v671, 0) : Math.min(v671, v666);
            var v673 = Math.min(v672 - v670, v666 - v668);
            var vLN17 = 1;
            for (v670 < v668 && v668 < v670 + v673 && (vLN17 = -1, v670 += v673 - 1, v668 += v673 - 1); v673 > 0;) {
              if (v670 in p861) {
                p861[v668] = p861[v670];
              } else {
                delete p861[v668];
              }
              v670 += vLN17;
              v668 += vLN17;
              v673--;
            }
            return p861;
          };
          decoder.U = function (p865) {
            if (p865.parent != null) {
              p865.parent.removeChild(p865);
            }
          };
          decoder.V = function (p866, p867) {
            return p866 + (p867 - p866) * Math.random();
          };
          decoder.W = function (p868) {
            return p868[parseInt(Math.random() * p868.length)];
          };
          decoder.X = function () {
            return Math.random().toString(36).substring(2, 15);
          };
          decoder.Y = function (p869, p870, p871) {
            var v674 = (1 - Math.abs(p871 * 2 - 1)) * p870;
            var v675 = v674 * (1 - Math.abs(p869 / 60 % 2 - 1));
            var v676 = p871 - v674 / 2;
            if (p869 >= 0 && p869 < 60) {
              return [v676 + v674, v676 + v675, v676 + 0];
            } else if (p869 >= 60 && p869 < 120) {
              return [v676 + v675, v676 + v674, v676 + 0];
            } else if (p869 >= 120 && p869 < 180) {
              return [v676 + 0, v676 + v674, v676 + v675];
            } else if (p869 >= 180 && p869 < 240) {
              return [v676 + 0, v676 + v675, v676 + v674];
            } else if (p869 >= 240 && p869 < 300) {
              return [v676 + v675, v676 + 0, v676 + v674];
            } else {
              return [v676 + v674, v676 + 0, v676 + v675];
            }
          };
          decoder.Z = function (p872, p873, p874) {
            $.get(p872).fail(p873).done(p874);
          };
          decoder.$ = function (p875, p876, p877, p878) {
            $.ajax({
              type: "GET",
              url: p875,
              xhrFields: {
                responseType: "arraybuffer",
                onprogress: function f206(p879) {
                  if (p879.lengthComputable) {
                    p878(p879.loaded / p879.total * 100);
                  }
                }
              }
            }).fail(p876).done(p877);
          };
          decoder._ = function (p880, p881) {
            for (var v677 in p880) {
              if (p880.hasOwnProperty(v677)) {
                p881(v677, p880[v677]);
              }
            }
          };
          decoder.aa = function (p882) {
            for (var v678 = p882.length - 1; v678 > 0; v678--) {
              var v679 = Math.floor(Math.random() * (v678 + 1));
              var v680 = p882[v678];
              p882[v678] = p882[v679];
              p882[v679] = v680;
            }
            return p882;
          };
          (function () {
            var vLN089 = 0;
            try {
              DataView.prototype.ba = function (p883) {
                try {
                  vLN089 = p883;
                  return this.getInt8(p883);
                } catch (e38) {
                  console.log(vLN089);
                  vO47.dh.mq.close();
                  return 0;
                }
              };
              DataView.prototype.ca = function (p884) {
                try {
                  vLN089 = p884;
                  return this.getInt16(p884);
                } catch (e39) {
                  console.log(vLN089);
                  vO47.dh.mq.close();
                  return 0;
                }
              };
              DataView.prototype.da = function (p885) {
                try {
                  vLN089 = p885;
                  return this.getInt32(p885);
                } catch (e40) {
                  console.log(vLN089);
                  vO47.dh.mq.close();
                  return 0;
                }
              };
              DataView.prototype.ea = function (p886) {
                try {
                  vLN089 = p886;
                  return this.getFloat32(p886);
                } catch (e41) {
                  console.log(vLN089);
                  vO47.dh.mq.close();
                  return 0;
                }
              };
              DataView.prototype.fa = function (p887) {
                try {
                  vLN089 = p887;
                  return this.getFloat64(p887);
                } catch (e42) {
                  console.log(vLN089);
                  vO47.dh.mq.close();
                  return 0;
                }
              };
            } catch (e43) {
              console.log(vLN089);
              console.error("Error adding methods to DataView prototype:", e43);
            }
          })();
          decoder.ga = function () {
            function f207() {
              if (URLSERV_WORMWORLD) {
                try {
                  ga("send", "event", "antiadblocker", window.runtimeHash + "_complete");
                } catch (e44) {}
                v_0x46d60d(true);
              }
            }
            var v681 = false;
            var v_0x46d60d = function f208() {};
            var vO56 = {};
            var vLSJDHnkHtYwyXyVgG9 = "JDHnkHtYwyXyVgG9";
            $("#adbl-continue").click(function () {
              $("#" + vLSJDHnkHtYwyXyVgG9).fadeOut(500);
              v_0x46d60d(false);
            });
            vO56.ha = function (p888) {
              v_0x46d60d = p888;
              if (!v681) {
                try {
                  aiptag.cmd.player.push(function () {
                    aiptag.adplayer = new aipPlayer({
                      AD_WIDTH: 960,
                      AD_HEIGHT: 540,
                      AD_FULLSCREEN: true,
                      AD_CENTERPLAYER: false,
                      LOADING_TEXT: "loading advertisement",
                      PREROLL_ELEM: function f209() {
                        return document.getElementById("1eaom01c3pxu9wd3");
                      },
                      AIP_COMPLETE: function f210(p889) {
                        v_0x46d60d(true);
                        $("#1eaom01c3pxu9wd3").hide();
                        $("#" + vLSJDHnkHtYwyXyVgG9).hide();
                        try {
                          ga("send", "event", "preroll", window.runtimeHash + "_complete");
                        } catch (e45) {}
                      },
                      AIP_REMOVE: function f211() {}
                    });
                  });
                  v681 = true;
                } catch (e46) {}
              }
            };
            vO56.ia = function () {
              try {
                ga("send", "event", "antiadblocker", window.runtimeHash + "_start");
              } catch (e47) {}
              f207();
            };
            return vO56;
          };
          decoder.ja = function (p890, p891) {
            var v$3 = $("#" + p890);
            var vP891 = p891;
            var vO57 = {};
            var v682 = false;
            vO57.ha = function () {
              if (!v682) {
                v$3.empty();
                v$3.append("<div id='" + vP891 + "'></div>");
                try {
                  try {
                    ga("send", "event", "banner", window.runtimeHash + "_display");
                  } catch (e48) {}
                  aiptag.cmd.display.push(function () {
                    aipDisplayTag.display(vP891);
                  });
                  v682 = true;
                } catch (e49) {}
              }
            };
            vO57.ka = function () {
              try {
                try {
                  ga("send", "event", "banner", window.runtimeHash + "_refresh");
                } catch (e50) {}
                aiptag.cmd.display.push(function () {
                  aipDisplayTag.display(vP891);
                });
              } catch (e51) {}
            };
            return vO57;
          };
          vO54.la = function () {
            function f212(p892, p893, p894, p895, p896, p897, p898, p899, p900, p901, p902) {
              this.ma = p892;
              this.na = p893;
              this.oa = null;
              this.pa = false;
              this.qa = p894;
              this.ra = p895;
              this.sa = p896;
              this.ta = p897;
              this.ua = p898 || (p900 || p896) / 2;
              this.va = p899 || (p901 || p897) / 2;
              this.wa = p900 || p896;
              this.xa = p901 || p897;
              this.ya = 0.5 - (this.ua - this.wa * 0.5) / this.sa;
              this.za = 0.5 - (this.va - this.xa * 0.5) / this.ta;
              this.Aa = this.sa / this.wa;
              if (p902) {
                this.ev = p902;
              } else {
                null;
              }
              this.Ba = this.ta / this.xa;
            }
            f212.Ca = function () {
              return new f212("", null, 0, 0, 0, 0, 0, 0, 0, 0);
            };
            f212.Da = function (p903, p904, p905, p906) {
              return new f212(p903, p904, p905.x, p905.y, p905.w, p905.h, p905.px, p905.py, p905.pw, p905.ph, p906);
            };
            f212.prototype.Ea = function () {
              if (this.pa) {
                return this.oa;
              }
              if (this.na != null) {
                this.oa = new vF32.Texture(this.na, new vF32.Rectangle(this.qa, this.ra, this.sa, this.ta));
              }
              this.pa = true;
              return this.oa;
            };
            f212.prototype.Fa = function () {
              if (this.oa != null) {
                this.oa.destroy();
              }
            };
            return f212;
          }();
          vO54.Ga = function () {
            function f213(p907, p908, p909, p910, p911, p912, p913, p914, p915, p916, p917, p918, p919, p920, p921, p922, p923, p924) {
              this.Ha = p907;
              this.Ia = p908;
              this.Ja = p909;
              this.Ka = p910;
              this.La = p911;
              this.Ma = p912;
              this.Na = p913;
              this.Oa = p914;
              this.Pa = p915;
              this.Qa = p916;
              this.Ra = p917;
              this.Sa = p918;
              this.Ta = p919;
              this.Ua = p920;
              this.Va = p921;
              this.Wa = p922;
              this.Xa = p923;
              this.Ya = p924;
            }
            f213.prototype.Fa = function () {
              for (var vLN090 = 0; vLN090 < this.Ha.length; vLN090++) {
                this.Ha[vLN090].dispose();
                this.Ha[vLN090].destroy();
              }
              this.Ha = [];
              for (var vLN091 = 0; vLN091 < this.Ia.length; vLN091++) {
                this.Ia[vLN091].Fa();
              }
              this.Ia = [];
            };
            f213.Ca = function () {
              var v683 = new f213.Za(vO54._a.$a, vO54._a.$a);
              var v684 = new f213.ab("#ffffff", [vO54._a.$a], [vO54._a.$a]);
              return new f213([], [], {}, v683, {}, new f213.bb(vO54._a.$a), {}, v684, {}, new f213.cb("", v684, v683), {}, new f213.db([vO54._a.$a]), {}, new f213.db([vO54._a.$a]), {}, new f213.db([vO54._a.$a]), {}, new f213.db([vO54._a.$a]));
            };
            f213.eb = function (p925, p926, p927, p928) {
              var v685 = new f213.Za(vO54._a.$a, vO54._a.$a);
              var v686 = new f213.ab("#ffffff", [p925], [p926]);
              return new f213([], [], {}, v685, {}, new f213.bb(vO54._a.$a), {}, v686, {}, new f213.cb("", v686, v685), {}, new f213.db([p927]), {}, new f213.db([p928]), {}, new f213.db([vO54._a.$a]), {}, new f213.db([vO54._a.$a]));
            };
            f213.fb = function (p929, p930, p931, p932) {
              var vO58 = {};
              decoder._(p929.colorDict, function (p933, p934) {
                vO58[p933] = "#" + p934;
              });
              var vO59 = {};
              for (var vLN092 = 0; vLN092 < p929.skinArrayDict.length; vLN092++) {
                var v687 = p929.skinArrayDict[vLN092];
                vO59[v687.id] = new f213.ab(vO58[v687.prime], v687.base.map(function (p935) {
                  return p930[p935];
                }), v687.glow.map(function (p936, p937) {
                  return p930[p936];
                }));
                if (v687.glow[0] == "a_trans") {
                  vO59[v687.id].vbb = p930.a_black;
                }
              }
              var vUndefined2 = undefined;
              var v688 = p929.skinUnknown;
              try {
                vUndefined2 = new f213.ab(vO58[v688.prime], v688.base.map(function (p938) {
                  return p930[p938];
                }), v688.glow.map(function (p939) {
                  return p930[p939];
                }));
              } catch (e52) {}
              var vO60 = {};
              decoder._(p929.eyesDict, function (p940, p941) {
                var vParseInt = parseInt(p940);
                vO60[vParseInt] = new f213.db(p941.base.map(function (p942) {
                  return p930[p942.region];
                }));
              });
              var v689 = new f213.db(p929.eyesUnknown.base.map(function (p943) {
                return p930[p943.region];
              }));
              var vO61 = {};
              decoder._(p929.mouthDict, function (p944, p945) {
                var vParseInt2 = parseInt(p944);
                vO61[vParseInt2] = new f213.db(p945.base.map(function (p946) {
                  return p930[p946.region];
                }));
              });
              var v690 = new f213.db(p929.mouthUnknown.base.map(function (p947) {
                return p930[p947.region];
              }));
              var vO62 = {};
              decoder._(p929.hatDict, function (p948, p949) {
                var vParseInt3 = parseInt(p948);
                vO62[vParseInt3] = new f213.db(p949.base.map(function (p950) {
                  return p930[p950.region];
                }));
              });
              var v691 = new f213.db(p929.hatUnknown.base.map(function (p951) {
                return p930[p951.region];
              }));
              var vO63 = {};
              decoder._(p929.glassesDict, function (p952, p953) {
                var vParseInt4 = parseInt(p952);
                vO63[vParseInt4] = new f213.db(p953.base.map(function (p954) {
                  return p930[p954.region];
                }));
              });
              var v692 = new f213.db(p929.glassesUnknown.base.map(function (p955) {
                return p930[p955.region];
              }));
              var vO64 = {};
              decoder._(p929.portionDict, function (p956, p957) {
                p956 = parseInt(p956);
                vO64[p956] = new f213.Za(p930[p957.base], p930[p957.glow]);
              });
              var vUndefined3 = undefined;
              var v693 = p929.portionUnknown;
              vUndefined3 = new f213.Za(p930[v693.base], p930[v693.glow]);
              var vO65 = {};
              decoder._(p929.abilityDict, function (p958, p959) {
                p958 = parseInt(p958);
                vO65[p958] = new f213.bb(p930[p959.base]);
              });
              var vUndefined4 = undefined;
              var v694 = p929.abilityUnknown;
              vUndefined4 = new f213.bb(p930[v694.base]);
              var vO66 = {};
              decoder._(p929.teamDict, function (p960, p961) {
                p960 = parseInt(p960);
                vO66[p960] = new f213.cb(p961.title, new f213.ab(vO58[p961.skin.prime], null, p961.skin.glow.map(function (p962) {
                  return p930[p962];
                })), new f213.Za(null, p930[p961.portion.glow]));
              });
              var v695 = new f213.cb({}, vUndefined2, vUndefined3);
              return new f213(p931, p932, vO64, vUndefined3, vO65, vUndefined4, vO59, vUndefined2, vO66, v695, vO60, v689, vO61, v690, vO62, v691, vO63, v692);
            };
            f213.prototype.gb = function (p963) {
              var v696 = decoder.aa(Object.keys(this.Na)).slice(0, p963);
              var v697 = decoder.aa(Object.keys(this.Ra)).slice(0, p963);
              var v698 = decoder.aa(Object.keys(this.Ta)).slice(0, p963);
              var v699 = decoder.aa(Object.keys(this.Va)).slice(0, p963);
              var v700 = decoder.aa(Object.keys(this.Xa)).slice(0, p963);
              var vA19 = [];
              for (var vLN093 = 0; vLN093 < p963; vLN093++) {
                var v701 = v696.length > 0 ? v696[vLN093 % v696.length] : 0;
                var v702 = v697.length > 0 ? v697[vLN093 % v697.length] : 0;
                var v703 = v698.length > 0 ? v698[vLN093 % v698.length] : 0;
                var v704 = v699.length > 0 ? v699[vLN093 % v699.length] : 0;
                var v705 = v700.length > 0 ? v700[vLN093 % v700.length] : 0;
                vA19.push(new vO54.hb(v701, v702, v703, v704, v705));
              }
              return vA19;
            };
            f213.prototype.ib = function (p964) {
              if (this.Na.hasOwnProperty(p964)) {
                return this.Na[p964];
              } else {
                return this.Oa;
              }
            };
            f213.prototype.jb = function (p965) {
              if (this.Pa.hasOwnProperty(p965)) {
                return this.Pa[p965];
              } else {
                return this.Qa;
              }
            };
            f213.prototype.kb = function (p966) {
              if (this.Ra.hasOwnProperty(p966)) {
                return this.Ra[p966];
              } else {
                return this.Sa;
              }
            };
            f213.prototype.lb = function (p967) {
              if (this.Ta.hasOwnProperty(p967)) {
                return this.Ta[p967];
              } else {
                return this.Ua;
              }
            };
            f213.prototype.mb = function (p968) {
              if (this.Xa.hasOwnProperty(p968)) {
                return this.Xa[p968];
              } else {
                return this.Ya;
              }
            };
            f213.prototype.nb = function (p969) {
              if (this.Va.hasOwnProperty(p969)) {
                return this.Va[p969];
              } else {
                return this.Wa;
              }
            };
            f213.prototype.ob = function (p970) {
              if (this.Ja.hasOwnProperty(p970)) {
                return this.Ja[p970];
              } else {
                return this.Ka;
              }
            };
            f213.prototype.pb = function (p971) {
              if (this.La.hasOwnProperty(p971)) {
                return this.La[p971];
              } else {
                return this.Ma;
              }
            };
            f213.cb = function () {
              function f214(p972, p973, p974) {
                this.qb = p972;
                this.rb = p973;
                this.sb = p974;
              }
              return f214;
            }();
            f213.ab = function () {
              function f215(p975, p976, p977) {
                this.tb = p975;
                this.ub = p976;
                this.vb = p977;
              }
              return f215;
            }();
            f213.db = function () {
              function f216(p978) {
                this.ub = p978;
              }
              return f216;
            }();
            f213.Za = function () {
              function f217(p979, p980) {
                this.ub = p979;
                this.vb = p980;
              }
              return f217;
            }();
            f213.bb = function () {
              function f218(p981) {
                this.ub = p981;
              }
              return f218;
            }();
            return f213;
          }();
          vO54._a = function () {
            function f219() {
              var v706 = vF32.BaseTexture.from("/images/wear-ability.png");
              for (var vLN19 = 1; vLN19 < 10; vLN19++) {
                this["vb" + vLN19] = new vO54.la("emoji_" + vLN19, v706, 4, 4, 146, 146, 63.5, 63.5, 128, 128);
              }
              this.wb = new vO54.la("magnet_ability", v706, 158, 86, 67, 124, 148, 63.5, 128, 128);
              this.xb = new vO54.la("velocity_ability", v706, 158, 4, 87, 74, 203, 63.5, 128, 128);
              this.yb = new vO54.la("flex_ability", v706, 4, 4, 146, 146, 63.5, 63.5, 128, 128);

              // Zigzag 1: First custom image
              var newTexture = vF32.BaseTexture.from("https://i.imgur.com/LFiCido.png");
              this.pwrFlex = new vO54.la("flex_ability", newTexture, 156, 140, 87, 60, 170, 128.5, 128, 128);

              // Zigzag 2: Second custom image (LvJ1RxC - working)
              var newTexture2 = vF32.BaseTexture.from("https://i.imgur.com/LvJ1RxC.png");
              this.pwrFlex2 = new vO54.la("flex_ability2", newTexture2, 156, 4, 87, 74, 285, 63.5, 128, 128);

              // Zigzag 3: Third custom image
              var newTexture3 = vF32.BaseTexture.from("https://wormup.in/assets/images/zigzagability1.png");
              this.pwrFlex3 = new vO54.la("flex_ability3", newTexture3, 158, 4, 87, 74, 203, 63.5, 128, 128);
              var vLN19 = vF32.BaseTexture.from("/images/def-look.png");
              var v707 = new vO54.la("def_eyes", vLN19, 0, 0, 42, 80, 75, 64, 128, 128);
              var v708 = new vO54.la("def_mouth", vLN19, 46, 0, 20, 48, 109, 63, 128, 128);
              var v709 = new vO54.la("def_skin_glow", vLN19, 70, 0, 32, 32, 0, 0, 0, 0);
              var v710 = new vO54.la("def_skin_base", vLN19, 46, 52, 64, 64, 0, 0, 0, 0);
              var v711 = vO54.Ga.eb(v710, v709, v707, v708);
              _wwc.mySkin = v711;
              this.zb = new vO54.Ab({}, v711);
              this.Bb = -10000;
              this.Cb = -10000;
              this.Db = function () {
                var v712 = window.document.createElement("canvas");
                v712.width = 80;
                v712.height = 80;
                return {
                  Eb: v712,
                  Fb: v712.getContext("2d"),
                  oa: new vF32.Texture(vF32.BaseTexture.from(v712))
                };
              }();
              this.Gb = null;
              this.Hb = [];
            }
            f219.$a = vO54.la.Ca();
            f219.prototype.ha = function () {};
            f219.prototype.Ib = function (p982, p983, p984) {
              var vThis94 = this;
              var v713 = this.zb.Jb();
              if (v713 > 0 && Date.now() - this.Bb < 1200000) {
                if (p982 != null) {
                  p982();
                }
                return;
              }
              if (this.Gb != null && !this.Gb.Kb()) {
                if (Date.now() - this.Bb < 300000) {
                  if (p982 != null) {
                    p982();
                  }
                  return;
                }
                this.Gb.Lb();
                this.Gb = null;
              }
              var v714 = new vO54.Mb(v713);
              v714.Nb(function (p985, p986) {
                if (v714 === vThis94.Gb && p984 != null) {
                  p984(p985, p986);
                }
              });
              v714.Ob(function (p987) {
                if (v714 === vThis94.Gb && p983 != null) {
                  p983(p987);
                }
              });
              v714.Pb(function () {
                if (v714 === vThis94.Gb && p983 != null) {
                  p983(new Error());
                }
              });
              v714.Qb(function () {
                if (v714 === vThis94.Gb && p982 != null) {
                  p982();
                }
              });
              v714.Rb(function (p988) {
                if (v714 === vThis94.Gb) {
                  vThis94.Cb = Date.now();
                  vThis94.Gb = null;
                  vThis94.Sb();
                  vThis94.zb.Ub().Fa();
                  vThis94.zb = p988;
                  if (p982 != null) {
                    p982();
                  }
                  vThis94.Tb();
                  return;
                }
                try {
                  p988.Ub().Fa();
                } catch (e53) {}
              });
              v714.Vb();
              this.Bb = Date.now();
              this.Gb = v714;
            };
            f219.prototype.Sb = function () {};
            f219.prototype.Wb = function () {
              return this.zb.Jb() > 0;
            };
            f219.prototype.Xb = function () {
              return this.zb.Yb();
            };
            f219.prototype.Zb = function () {
              return this.Db;
            };
            f219.prototype.$b = function (p989) {
              this.Hb.push(p989);
            };
            f219.prototype.Tb = function () {
              for (var vLN094 = 0; vLN094 < this.Hb.length; vLN094++) {
                this.Hb[vLN094]();
              }
            };
            f219.prototype.Ub = function () {
              return this.zb.Ub();
            };
            return f219;
          }();
          vO54._b = function () {
            function f220(p990) {
              this.ac = p990;
            }
            f220.prototype.bc = function (p991) {
              return this.ac[p991];
            };
            f220.cc = function () {
              function f221() {
                this.dc = [];
              }
              f221.prototype.ec = function (p992, p993) {
                for (var vLN095 = 0; vLN095 < this.dc.length; vLN095++) {
                  if (this.dc[vLN095].fc === p992) {
                    throw new Error();
                  }
                }
                this.dc.push(new f220.gc(p992, p993));
                return this;
              };
              f221.prototype.hc = function () {
                var vLN096 = 0;
                for (var vLN097 = 0; vLN097 < this.dc.length; vLN097++) {
                  vLN096 += this.dc[vLN097].ic;
                }
                var vO67 = {};
                var vLN098 = 0;
                for (var vLN099 = 0; vLN099 < this.dc.length; vLN099++) {
                  var v715 = this.dc[vLN099];
                  v715.ic = v715.ic / vLN096;
                  v715.jc = vLN098;
                  v715.kc = vLN098 + v715.ic;
                  vLN098 = v715.kc;
                  vO67[v715.fc] = v715;
                }
                return new f220(vO67);
              };
              return f221;
            }();
            f220.gc = function () {
              function f222(p994, p995) {
                this.fc = p994;
                this.ic = p995;
                this.jc = 0;
                this.kc = 0;
              }
              f222.prototype.lc = function (p996) {
                return this.jc + (this.kc - this.jc) * p996;
              };
              return f222;
            }();
            return f220;
          }();
          vO54.WormSpriteTree = function () {
            function f223() {
              this.nc = new vF32.Container();
              this.nc.sortableChildren = true;
              this.oc = new vF33();
              this.oc.zIndex = vLN0001 * ((vLN797 + 1) * 2 + 1 + 3);
              this.pc = 0;
              this.qc = new Array(vLN797);
              this.qc[0] = this.rc(0, new vO54.sc(), new vO54.sc());
              for (var vLN110 = 1; vLN110 < vLN797; vLN110++) {
                this.qc[vLN110] = this.rc(vLN110, new vO54.sc(), new vO54.sc());
              }
              this.tc = 0;
              this.uc = 0;
              this.vc = 0;
            }
            var vLN0001 = 0.001;
            var vLN797 = 797;
            var vLN314159 = 3.14159;
            var v716 = -0.06640625;
            var vLN084375 = 0.84375;
            var vLN02578125 = 0.2578125;
            var v717 = -0.03515625;
            var v718 = -0.0625;
            var vLN05625 = 0.5625;
            var v719 = v716 * 3 + vLN084375;
            var v720 = vLN02578125 - v716 * 3;
            var v721 = v716 + v717;
            var vLN0375 = 0.375;
            var vLN0752 = 0.75;
            var v722 = v718 + v718;
            var v723 = v717 * 3 + vLN02578125;
            var v724 = vLN084375 - v717 * 3;
            var v725 = v717 + v716;
            f223.wc = vLN797;
            f223.prototype.rc = function (p997, p998, p999) {
              var v726 = new vF34(p998, p999);
              p998.xc.zIndex = vLN0001 * ((vLN797 - p997) * 2 + 1 + 3);
              p999.xc.zIndex = vLN0001 * ((vLN797 - p997) * 2 - 2 + 3);
              return v726;
            };
            f223.prototype.yc = function (p1000, p1001, p1002, p1003, p1004, p1005, p1006, p1007) {
              var v727 = p1002.ub;
              var v728 = p1000 === vO54.Ac.zc ? p1001.rb.vb : p1002.vb;
              if (v727.length > 0 && v728.length > 0) {
                for (var vLN0100 = 0; vLN0100 < this.qc.length; vLN0100++) {
                  this.qc[vLN0100].Cc.Bc(v727[vLN0100 % v727.length], vLN0100 % v727.length, vLN0100);
                  this.qc[vLN0100].Dc.Bc(vLN0100 == 0 && p1002.vbb ? p1002.vbb : v728[vLN0100 % v728.length], vLN0100 % v727.length, vLN0100);
                  this.qc[vLN0100].Cc.Ec(p1007);
                  this.qc[vLN0100].Dc.Ec(p1007);
                }
              }
              this.oc.yc(p1003, p1004, p1005, p1006);
            };
            var vF33 = function () {
              var v729 = decoder.M(vF32.Container, function () {
                vF32.Container.call(this);
                this.sortableChildren = true;
                this.Fc = [];
                this.Gc = [];
                this.Hc = [];
                this.Ic = [];
                this.Jc = new vF32.Container();
                this.Kc = [];
                this.message = new vF32.Container();
                for (var vLN0101 = 0; vLN0101 < 4; vLN0101++) {
                  var v730 = new vO54.sc();
                  v730.Bc(f205().Lc.wb);
                  this.Jc.addChild(v730.xc);
                  this.Kc.push(v730);
                }
                this.message.zIndex = 0.0012;
                this.addChild(this.message);
                this.VcUn();
                this.Jc.zIndex = 0.0011;
                this.addChild(this.Jc);
                this.Mc();
                this.Nc = new vO54.sc();
                this.Nc.Bc(f205().Lc.xb);
                this.Nc.xc.zIndex = 0.001;
                this.addChild(this.Nc.xc);
                this.Oc();
                this.pwr_flex = new vO54.sc();
                (function () {
                  try {
                    var z = String((window.bbsConfig || window.bbs || {}).zigzag || "0");
                    console.log("Game loading zigzag config:", z);
                    var set = f205().Lc;
                    var tex = set.pwrFlex1 || set.yb; // Default/Normal zigzag
                    if (z === "1") {
                      tex = set.pwrFlex || set.pwrFlex1;
                    } else if (z === "2") {
                      tex = set.pwrFlex2 || set.pwrFlex;
                    } else if (z === "3") {
                      tex = set.pwrFlex3 || set.pwrFlex2 || set.pwrFlex;
                    }
                    console.log("Selected zigzag texture:", tex);
                    this.pwr_flex.Bc(tex);
                  } catch (err) {
                    console.error("Error loading zigzag:", err);
                    this.pwr_flex.Bc(f205().Lc.pwrFlex);
                  }
                }).call(this);
                this.pwr_flex.xc.zIndex = 0.001;
                this.addChild(this.pwr_flex.xc);
                this.disableFlex();
              });
              v729.prototype.yc = function (p1008, p1009, p1010, p1011) {
                this.Pc(0.002, this.Fc, p1008.ub);
                this.Pc(0.003, this.Gc, p1009.ub);
                this.Pc(0.004, this.Ic, p1011.ub);
                this.Pc(0.005, this.Hc, p1010.ub);
              };
              v729.prototype.Pc = function (p1012, p1013, p1014) {
                while (p1014.length > p1013.length) {
                  var v731 = new vO54.sc();
                  p1013.push(v731);
                  this.addChild(v731.Qc());
                }
                while (p1014.length < p1013.length) {
                  p1013.pop().Rc();
                }
                var vP1012 = p1012;
                for (var vLN0102 = 0; vLN0102 < p1014.length; vLN0102++) {
                  vP1012 += 0.0001;
                  var v732 = p1013[vLN0102];
                  v732.Bc(p1014[vLN0102]);
                  v732.xc.zIndex = vP1012;
                }
              };
              v729.prototype.Sc = function (p1015, p1016, p1017, p1018) {
                this.visible = true;
                this.position.set(p1015, p1016);
                this.rotation = p1018;
                for (var vLN0103 = 0; vLN0103 < this.Fc.length; vLN0103++) {
                  this.Fc[vLN0103].Tc(p1017);
                }
                for (var vLN0104 = 0; vLN0104 < this.Gc.length; vLN0104++) {
                  this.Gc[vLN0104].Tc(p1017);
                }
                for (var vLN0105 = 0; vLN0105 < this.Hc.length; vLN0105++) {
                  this.Hc[vLN0105].Tc(p1017);
                }
                for (var vLN0106 = 0; vLN0106 < this.Ic.length; vLN0106++) {
                  this.Ic[vLN0106].Tc(p1017);
                }
              };
              v729.prototype.Uc = function () {
                this.visible = false;
              };
              v729.prototype.VcAc = function (p1019, p1020, p1021, p1022, p1023) {
                this.message.visible = true;
                this.Mc2.Tc(p1020);
              };
              v729.prototype.VcUn = function () {
                this.message.visible = false;
              };
              v729.prototype.Vc = function (p1024, p1025, p1026, p1027) {
                this.Jc.visible = true;
                var v733 = p1026 / 1000;
                var v734 = 1 / this.Kc.length;
                for (var vLN0107 = 0; vLN0107 < this.Kc.length; vLN0107++) {
                  var v735 = 1 - (v733 + v734 * vLN0107) % 1;
                  this.Kc[vLN0107].xc.alpha = 1 - v735;
                  this.Kc[vLN0107].Tc(p1025 * (0.5 + v735 * 4.5));
                }
              };
              v729.prototype.Mc = function () {
                this.Jc.visible = false;
              };
              v729.prototype.Wc = function (app, config, utils, hexByte) {
                this.Nc.xc.visible = true;
                this.Nc.xc.alpha = decoder.Q(this.Nc.xc.alpha, app.Xc ? 0.9 : 0.2, hexByte, 0.0025);
                this.Nc.Tc(config);
              };
              v729.prototype.activeFlex = function (app, config, utils, hexByte) {
                this.pwr_flex.xc.visible = true;
                this.pwr_flex.xc.alpha = decoder.Q(this.Nc.xc.alpha, app.Xc ? 0.9 : 0.2, hexByte, 0.0025);
                this.pwr_flex.Tc(config);
              };
              v729.prototype.disableFlex = function () {
                this.pwr_flex.xc.visible = false;
              };
              v729.prototype.WXX = function (p1028, p1029, p1030, p1031) {
                this.Nc.xc.visible = true;
                this.Nc.xc.alpha = decoder.Q(this.Nc.xc.alpha, p1028.Xc ? 0.9 : 0.2, p1031, 0.0025);
                this.Nc.Tc(p1029);
              };
              v729.prototype.Oc = function () {
                this.Nc.xc.visible = false;
              };
              return v729;
            }();
            f223.prototype.Yc = function (p1032) {
              return this.uc + this.vc * Math.sin(p1032 * (Math.PI * 0.1) - this.tc);
            };
            f223.prototype.Zc = function (hexByte, gameSettings, savedGame, p1033) {
              var createJoystick = hexByte.$c * 2;
              var v736 = hexByte._c;
              var v737 = hexByte.ad;
              var v738 = v737 * 4 - 3;
              var vV738 = v738;
              this.tc = gameSettings / 400 * Math.PI;
              this.uc = createJoystick * 1.5;
              this.vc = createJoystick * 0.15 * hexByte.bd;
              var v739;
              var v740;
              var v741;
              var v742;
              var v743;
              var v744;
              var v745;
              var v746;
              v740 = v736[0];
              v744 = v736[1];
              if (p1033(v740, v744)) {
                v741 = v736[2];
                v745 = v736[3];
                v742 = v736[4];
                v746 = v736[5];
                var v747 = Math.atan2(v746 + v744 * 2 - v745 * 3, v742 + v740 * 2 - v741 * 3);
                this.oc.Sc(v740, v744, createJoystick, v747);
                this.qc[0].Sc(v740, v744, createJoystick, this.Yc(0), v747);
                this.qc[1].Sc(v719 * v740 + v720 * v741 + v721 * v742, v719 * v744 + v720 * v745 + v721 * v746, createJoystick, this.Yc(1), vF34.cd(this.qc[0], this.qc[2]));
                this.qc[2].Sc(vLN0375 * v740 + vLN0752 * v741 + v722 * v742, vLN0375 * v744 + vLN0752 * v745 + v722 * v746, createJoystick, this.Yc(2), vF34.cd(this.qc[1], this.qc[3]));
                this.qc[3].Sc(v723 * v740 + v724 * v741 + v725 * v742, v723 * v744 + v724 * v745 + v725 * v746, createJoystick, this.Yc(3), vF34.cd(this.qc[2], this.qc[4]));
              } else {
                this.oc.Uc();
                this.qc[0].Uc();
                this.qc[1].Uc();
                this.qc[2].Uc();
                this.qc[3].Uc();
              }
              var vLN42 = 4;
              var vLN22 = 2;
              var v748 = v737 * 2 - 4;
              while (vLN22 < v748) {
                v740 = v736[vLN22];
                v744 = v736[vLN22 + 1];
                if (p1033(v740, v744)) {
                  v739 = v736[vLN22 - 2];
                  v743 = v736[vLN22 - 1];
                  v741 = v736[vLN22 + 2];
                  v745 = v736[vLN22 + 3];
                  v742 = v736[vLN22 + 4];
                  v746 = v736[vLN22 + 5];
                  this.qc[vLN42].Sc(v740, v744, createJoystick, this.Yc(vLN42), vF34.cd(this.qc[vLN42 - 1], this.qc[vLN42 + 1]));
                  vLN42++;
                  this.qc[vLN42].Sc(v716 * v739 + vLN084375 * v740 + vLN02578125 * v741 + v717 * v742, v716 * v743 + vLN084375 * v744 + vLN02578125 * v745 + v717 * v746, createJoystick, this.Yc(vLN42), vF34.cd(this.qc[vLN42 - 1], this.qc[vLN42 + 1]));
                  vLN42++;
                  this.qc[vLN42].Sc(v718 * v739 + vLN05625 * v740 + vLN05625 * v741 + v718 * v742, v718 * v743 + vLN05625 * v744 + vLN05625 * v745 + v718 * v746, createJoystick, this.Yc(vLN42), vF34.cd(this.qc[vLN42 - 1], this.qc[vLN42 + 1]));
                  vLN42++;
                  this.qc[vLN42].Sc(v717 * v739 + vLN02578125 * v740 + vLN084375 * v741 + v716 * v742, v717 * v743 + vLN02578125 * v744 + vLN084375 * v745 + v716 * v746, createJoystick, this.Yc(vLN42), vF34.cd(this.qc[vLN42 - 1], this.qc[vLN42 + 1]));
                  vLN42++;
                } else {
                  this.qc[vLN42].Uc();
                  vLN42++;
                  this.qc[vLN42].Uc();
                  vLN42++;
                  this.qc[vLN42].Uc();
                  vLN42++;
                  this.qc[vLN42].Uc();
                  vLN42++;
                }
                vLN22 += 2;
              }
              v740 = v736[v737 * 2 - 4];
              v744 = v736[v737 * 2 - 3];
              if (p1033(v740, v744)) {
                v739 = v736[v737 * 2 - 6];
                v743 = v736[v737 * 2 - 5];
                v741 = v736[v737 * 2 - 2];
                v745 = v736[v737 * 2 - 1];
                this.qc[v738 - 5].Sc(v740, v744, createJoystick, this.Yc(v738 - 5), vF34.cd(this.qc[v738 - 6], this.qc[v738 - 4]));
                this.qc[v738 - 4].Sc(v725 * v739 + v724 * v740 + v723 * v741, v725 * v743 + v724 * v744 + v723 * v745, createJoystick, this.Yc(v738 - 4), vF34.cd(this.qc[v738 - 5], this.qc[v738 - 3]));
                this.qc[v738 - 3].Sc(v722 * v739 + vLN0752 * v740 + vLN0375 * v741, v722 * v743 + vLN0752 * v744 + vLN0375 * v745, createJoystick, this.Yc(v738 - 3), vF34.cd(this.qc[v738 - 4], this.qc[v738 - 2]));
                this.qc[v738 - 2].Sc(v721 * v739 + v720 * v740 + v719 * v741, v721 * v743 + v720 * v744 + v719 * v745, createJoystick, this.Yc(v738 - 2), vF34.cd(this.qc[v738 - 3], this.qc[v738 - 1]));
                this.qc[v738 - 1].Sc(v741, v745, createJoystick, this.Yc(v738 - 1), vF34.cd(this.qc[v738 - 2], this.qc[v738 - 1]));
              } else {
                this.qc[v738 - 5].Uc();
                this.qc[v738 - 4].Uc();
                this.qc[v738 - 3].Uc();
                this.qc[v738 - 2].Uc();
                this.qc[v738 - 1].Uc();
              }
              if (this.pc === 0 && vV738 > 0) {
                this.nc.addChild(this.oc);
              }
              if (this.pc > 0 && vV738 === 0) {
                decoder.U(this.oc);
              }
              while (this.pc < vV738) {
                this.nc.addChild(this.qc[this.pc].Cc.Qc());
                this.nc.addChild(this.qc[this.pc].Dc.Qc());
                this.pc += 1;
              }
              while (this.pc > vV738) {
                this.pc -= 1;
                this.qc[this.pc].Dc.Rc();
                this.qc[this.pc].Cc.Rc();
              }
              var v749 = hexByte.dd[vO54.fd.ed];
              if (this.qc[0].gd() && v749 && v749.hd) {
                this.oc.Vc(hexByte, createJoystick, gameSettings, savedGame);
              } else {
                this.oc.Mc();
              }
              var v750 = hexByte.dd[vO54.fd.jd];
              if (this.qc[0].gd() && v750 && v750.hd) {
                this.oc.Wc(hexByte, createJoystick, gameSettings, savedGame);
              } else {
                this.oc.Oc();
              }
              var leFlex = hexByte.dd[vO54.fd.pd];
              if (this.qc[0].gd() && leFlex != null && leFlex.hd) {
                this.oc.activeFlex(hexByte, createJoystick, gameSettings, savedGame);
              } else {
                this.oc.disableFlex();
              }
              movimentaLinha();
            };
            var vF34 = function () {
              function f224(p1034, p1035) {
                this.Cc = p1034;
                this.Cc.kd(false);
                this.Dc = p1035;
                this.Dc.kd(false);
                this.ev = null;
              }
              f224.prototype.Sc = function (p1036, p1037, p1038, p1039, p1040) {
                this.Cc.kd(true);
                this.Cc.ld(p1036, p1037);
                this.Cc.Tc(p1038);
                this.Cc.md(p1040);
                this.Dc.kd(true);
                this.Dc.ld(p1036, p1037);
                this.Dc.Tc(p1039);
                this.Dc.md(p1040);
              };
              f224.prototype.Uc = function () {
                this.Cc.kd(false);
                this.Dc.kd(false);
              };
              f224.prototype.gd = function () {
                return this.Cc.gd();
              };
              f224.cd = function (p1041, p1042) {
                return Math.atan2(p1041.Cc.xc.position.y - p1042.Cc.xc.position.y, p1041.Cc.xc.position.x - p1042.Cc.xc.position.x);
              };
              return f224;
            }();
            return f223;
          }();
          vO54.fd = function () {
            function f225(p1043) {
              this.nd = p1043;
              this.hd = false;
              this.od = 1;
            }
            f225.jd = 0;
            f225.pd = 1;
            f225.ed = 2;
            f225.qd = 6;
            f225.rd = 3;
            f225.sd = 4;
            f225.td = 5;
            return f225;
          }();
          vO54.Ab = function (p1044) {
            var vF35 = function () {
              function f226(p1045, p1046) {
                f60(this, f226);
                this.ud = p1045;
                this.vd = p1046;
              }
              return f62(f226, [{
                key: "Jb",
                value: function f227() {
                  return this.ud.revision;
                }
              }, {
                key: "Yb",
                value: function f228() {
                  vO48.Jb();
                  return this.ud;
                }
              }, {
                key: "Ub",
                value: function f229() {
                  return this.vd;
                }
              }]);
            }();
            p1044 = vF35;
            f79(vF35, "wd", new p1044({}, vO54.Ga.Ca()));
            return vF35;
          }();
          vO54.Mb = function () {
            function f230(p1047) {
              this.xd = function () {
                ++f230.yd;
                return function (p1048, p1049) {};
              }();
              this.zd = p1047;
              this.Ad = null;
              this.Bd = null;
              this.Cd = null;
              this.Dd = null;
              this.Ed = null;
              this.Fd = false;
              this.Gd = false;
              this.Hd = false;
            }
            f230.Id = {
              Jd: "0x0",
              Kd: "0x1",
              Ld: "0x2",
              Md: "0x3",
              Nd: "0x4"
            };
            f230.yd = 100000;
            f230.Od = new vO54._b.cc().ec(f230.Id.Jd, 1).ec(f230.Id.Kd, 10).ec(f230.Id.Ld, 50).ec(f230.Id.Md, 15).ec(f230.Id.Nd, 5).hc();
            f230.prototype.Rb = function (p1050) {
              this.Ad = p1050;
            };
            f230.prototype.Qb = function (p1051) {
              this.Bd = p1051;
            };
            f230.prototype.Ob = function (p1052) {
              this.Cd = p1052;
            };
            f230.prototype.Pb = function (p1053) {
              this.Dd = p1053;
            };
            f230.prototype.Nb = function (p1054) {
              this.Ed = p1054;
            };
            f230.prototype.Kb = function () {
              return this.Hd;
            };
            f230.prototype.Lb = function () {
              this.Fd = true;
            };
            f230.prototype.Vb = function () {
              if (!this.Gd) {
                this.Gd = true;
                if (this.Fd) {
                  this.Pd();
                  return;
                }
                this.Qd();
              }
            };
            f230.prototype.Qd = function () {
              function f231(p1055) {
                var v751 = f230.Id.Jd;
                vThis95.Rd(v751, f230.Od.bc(v751).lc(p1055));
              }
              var vThis95 = this;
              if (this.Fd) {
                this.Pd();
                return;
              }
              $.ajax({
                type: "GET",
                url: decoder.a.c + "/dynamic/assets/revision.json",
                xhrFields: {
                  onprogress: function f232(p1056) {
                    if (p1056.lengthComputable) {
                      f231(p1056.loaded / p1056.total);
                    }
                  }
                }
              }).fail(function () {
                vThis95.Sd(new Error());
              }).done(function (p1057) {
                if (p1057 <= vThis95.zd) {
                  vThis95.Td();
                  return;
                }
                vThis95.Ud();
              });
            };
            f230.prototype.Ud = f114(f82().mark(function f233() {
              var v752;
              var v753;
              var v754;
              return f82().wrap(function f234(p1058) {
                while (1) {
                  switch (p1058.prev = p1058.next) {
                    case 0:
                      v752 = function f235(p1059) {
                        var v755 = f230.Id.Kd;
                        v753.Rd(v755, f230.Od.bc(v755).lc(p1059));
                      };
                      v753 = this;
                      if (!this.Fd) {
                        p1058.next = 4;
                        break;
                      }
                      return p1058.abrupt("return", void this.Pd());
                    case 4:
                      p1058.next = 6;
                      return fetch(URLSERV_WORMWORLD + "/version");
                    case 6:
                      v754 = p1058.sent;
                      p1058.next = 9;
                      return v754.json();
                    case 9:
                      v754 = p1058.sent;
                      localStorage.setItem("wwc_version", v754);
                      if (v525 != v754) {
                        $.ajax({
                          type: "GET",
                          url: decoder.a.c + "/dynamic/assets/registry.json",
                          xhrFields: {
                            onprogress: function f236(p1060) {
                              if (p1060.lengthComputable) {
                                v752(p1060.loaded / p1060.total);
                              }
                            }
                          }
                        }).fail(function () {
                          v753.Sd(new Error());
                        }).done(function () {
                          var vF1146 = f114(f82().mark(function f237(p1061) {
                            return f82().wrap(function f238(p1062) {
                              while (1) {
                                switch (p1062.prev = p1062.next) {
                                  case 0:
                                    p1062.next = 2;
                                    return vO48.registry(p1061);
                                  case 2:
                                    p1061 = p1062.sent;
                                    localStorage.setItem("wwc_config", JSON.stringify(p1061));
                                    v753.Vd(p1061, f230);
                                  case 5:
                                  case "end":
                                    return p1062.stop();
                                }
                              }
                            }, f237);
                          }));
                          return function (p1063) {
                            return vF1146.apply(this, arguments);
                          };
                        }());
                      } else {
                        try {
                          v527 = JSON.parse(v527);
                          v752(1);
                          v753.Vd(v527, f230);
                        } catch (e54) {
                          console.log("ConfigError", e54);
                          localStorage.removeItem("wwc_version");
                          localStorage.removeItem("wwc_config");
                        }
                      }
                    case 12:
                    case "end":
                      return p1058.stop();
                  }
                }
              }, f233, this);
            }));
            f230.prototype.Vd = vO48.Vd || function (p1064) {
              function f239(p1065) {
                var v756 = f230.Id.Ld;
                vThis96.Rd(v756, f230.Od.bc(v756).lc(p1065));
              }
              var vThis96 = this;
              if (this.Fd) {
                this.Pd();
                return;
              }
              var vA20 = [];
              var vA21 = [];
              var vLN0108 = 0;
              for (var v757 in p1064.textureDict) {
                if (p1064.textureDict.hasOwnProperty(v757)) {
                  var v758 = p1064.textureDict[v757];
                  var v759 = decoder.a.c + v758.relativePath;
                  var v760 = v758.fileSize;
                  var v761 = v758.sha256;
                  var v762 = new f230.Wd(v757, v759, v760, v761);
                  vA20.push(v762);
                  vA21.push(v762);
                  vLN0108 += v760;
                }
              }
              var v763;
              var vLN0109 = 0;
              var v_0x1a5656 = function f240(p1066) {
                for (var vLN0110 = 0; vLN0110 < vA21.length; vLN0110++) {
                  try {
                    window.URL.revokeObjectURL(vA21[vLN0110].Xd);
                  } catch (e55) {}
                }
                vThis96.Sd(p1066);
              };
              var v_0x55bd66 = function f241(p1067) {
                var v764 = Math.floor(v763.Yd * p1067);
                f239((vLN0109 + v764) / vLN0108);
              };
              var v_0x52de88 = function f242(p1068) {
                var v765 = new Blob([p1068]);
                v763.Xd = window.URL.createObjectURL(v765);
                vLN0109 += v763.Yd;
                v_0x12319();
              };
              var v_0x12319 = function f243() {
                if (vLN0111 < vA21.length) {
                  v763 = vA21[vLN0111++];
                  vThis96.Zd(v763, v_0x1a5656, v_0x52de88, v_0x55bd66);
                  return;
                }
                setTimeout(function () {
                  return vThis96.$d(p1064, vA20);
                }, 0);
              };
              var vLN0111 = 0;
              v_0x12319();
            };
            f230.prototype.Zd = vO48.Zd || function (p1069, p1070, p1071, p1072) {
              $.ajax({
                type: "GET",
                url: p1069._d,
                xhrFields: {
                  responseType: "arraybuffer",
                  onprogress: function f244(p1073) {
                    if (p1073.lengthComputable) {
                      p1072(p1073.loaded / p1073.total);
                    }
                  }
                }
              }).fail(function () {
                p1070(new Error());
              }).done(function (p1074) {
                p1071(p1074);
              });
            };
            f230.prototype.$d = vO48.$d || function (p1075, p1076) {
              function f245(p1077) {
                var v766 = f230.Id.Md;
                vThis97.Rd(v766, f230.Od.bc(v766).lc(p1077));
              }
              var vThis97 = this;
              if (this.Fd) {
                this.Pd();
                return;
              }
              var v767;
              var v768;
              var vO68 = {};
              var v_0x37b5df = function f246() {
                for (var vLN0112 = 0; vLN0112 < p1076.length; vLN0112++) {
                  try {
                    window.URL.revokeObjectURL(p1076[vLN0112].Xd);
                  } catch (e56) {}
                }
                vThis97.Sd(new Error());
              };
              var v_0x13e6e0 = function f247() {
                f245(vLN0113 / p1076.length);
                vO68[v767.ae] = new vO54.be(v767.Xd, v768);
                v_0x24e3a4();
              };
              var v_0x24e3a4 = function f248() {
                if (vLN0113 < p1076.length) {
                  v767 = p1076[vLN0113++];
                  v768 = PIXI.BaseTexture.from(v767.Xd);
                  v768.on("error", v_0x37b5df);
                  v768.on("loaded", v_0x13e6e0);
                  return;
                }
                setTimeout(function () {
                  return vThis97.ce(p1075, vO68);
                }, 0);
              };
              var vLN0113 = 0;
              v_0x24e3a4();
            };
            f230.prototype.ce = function (p1078, p1079) {
              function f249(p1080) {
                var v769 = f230.Id.Nd;
                vThis98.Rd(v769, f230.Od.bc(v769).lc(p1080));
              }
              var vThis98 = this;
              var vO69 = {};
              var vLN0114 = 0;
              var v770 = Object.values(p1078.regionDict).length;
              decoder._(p1078.regionDict, function (p1081, p1082) {
                var v771 = null;
                try {
                  var v772 = null;
                  if (p1079[p1082.texture].ev) {
                    v772 = p1079[p1082.texture].ev;
                  }
                  var v773 = p1082.texture + ":" + p1081;
                  v771 = vO54.la.Da(v773, p1079[p1082.texture].oa, p1082, v772);
                  vO69[p1081] = v771;
                  if (++vLN0114 % 10 == 0) {
                    f249(vLN0114 / v770);
                  }
                } catch (e57) {}
              });
              var v774 = Object.values(p1079).map(function (p1083) {
                return p1083.oa;
              });
              var v775 = Object.values(vO69);
              var v776 = new vO54.Ab(p1078, vO54.Ga.fb(p1078, vO69, v774, v775));
              setTimeout(function () {
                return vThis98.de(v776);
              }, 0);
            };
            f230.Wd = function () {
              function f250(p1084, p1085, p1086, p1087) {
                this.ae = p1084;
                this._d = p1085;
                this.Yd = p1086;
                this.ee = p1087;
                this.Xd = "";
              }
              return f250;
            }();
            f230.prototype.de = function (p1088) {
              if (this.Hd) {
                p1088.Ub().Fa();
                return;
              }
              this.Hd = true;
              var vThis99 = this;
              setTimeout(function () {
                return vThis99.Ad(p1088);
              }, 0);
            };
            f230.prototype.Td = function () {
              if (!this.Hd) {
                this.Hd = true;
                var vThis100 = this;
                setTimeout(function () {
                  return vThis100.Bd();
                }, 0);
              }
            };
            f230.prototype.Sd = function (p1089) {
              if (!this.Hd) {
                this.Hd = true;
                var vThis101 = this;
                setTimeout(function () {
                  return vThis101.Cd(p1089);
                }, 0);
              }
            };
            f230.prototype.Pd = function () {
              if (!this.Hd) {
                this.Hd = true;
                var vThis102 = this;
                setTimeout(function () {
                  return vThis102.Dd();
                }, 0);
              }
            };
            f230.prototype.Rd = function (p1090, p1091) {
              if (!this.Hd && !this.Fd) {
                var vThis103 = this;
                return vThis103.Ed(p1090, p1091);
              }
            };
            return f230;
          }();
          vO54.fe = function () {
            return {};
          }();
          vO54.ge = function () {
            function f251() {
              this.he = vO54.ge.je.ie;
              this.ke = false;
              this.le = false;
              this.me = null;
              this.ne = null;
            }
            f251.prototype.ha = function () {};
            f251.prototype.oe = function (p1092) {
              this.le = p1092;
            };
            f251.prototype.pe = function (p1093) {
              this.he = p1093;
              this.qe();
            };
            f251.prototype.re = function (p1094) {
              this.ke = p1094;
              this.qe();
            };
            f251.prototype.qe = function () {};
            f251.prototype.se = function (p1095, p1096) {
              if (!f205().Lc.Wb()) {
                return null;
              }
              var v777 = p1095[p1096];
              if (v777 == null || v777.length === 0) {
                return null;
              } else {
                return v777[Math.floor(Math.random() * v777.length)].cloneNode();
              }
            };
            f251.prototype.te = function (p1097, p1098, p1099) {
              if (this.le && !(p1099 <= 0)) {
                var v778 = this.se(p1097, p1098);
                if (v778 != null) {
                  v778.volume = Math.min(1, p1099);
                  v778.play();
                }
              }
            };
            f251.prototype.ue = function (p1100, p1101) {
              if (this.he.ve) {
                this.te(app.xe.we, p1100, p1101);
              }
            };
            f251.prototype.ye = function (p1102, p1103) {
              if (this.he.ze) {
                this.te(app.xe.Ae, p1102, p1103);
              }
            };
            f251.prototype.Be = function () {};
            f251.prototype.Ce = function () {};
            f251.prototype.De = function () {};
            f251.prototype.Ee = function () {};
            f251.prototype.Fe = function () {};
            f251.prototype.Ge = function () {};
            f251.prototype.He = function (p1104, p1105, p1106) {};
            f251.prototype.Ie = function (p1107) {};
            f251.prototype.Je = function (p1108) {};
            f251.prototype.Ke = function (p1109) {};
            f251.prototype.Le = function (p1110) {};
            f251.prototype.Me = function (p1111) {};
            f251.prototype.Ne = function (p1112) {};
            f251.prototype.Oe = function (p1113) {};
            f251.prototype.Pe = function (p1114) {};
            f251.prototype.Qe = function (p1115) {};
            f251.prototype.Re = function (p1116) {};
            f251.prototype.Se = function (p1117) {};
            f251.prototype.Te = function (p1118) {};
            f251.prototype.Ue = function (p1119) {};
            f251.prototype.Ve = function (p1120) {};
            f251.prototype.We = function (p1121, p1122) {};
            f251.prototype.Xe = function (p1123) {};
            f251.prototype.Ye = function (p1124, p1125, p1126) {};
            f251.je = {
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
            return f251;
          }();
          vO54.GameView = function () {
            function f252(p1127) {
              var vF205 = f205();
              this.ef = p1127;
              this.Eb = p1127.get()[0];
              this.ff = 1;
              this.gf = 1;
              this.hf = null;
              this.lf = new vF32.Renderer({
                view: p1127.get()[0],
                backgroundColor: 0,
                transparent: false,
                antialias: false,
                autoResize: true
              });
              this.mf = new vF32.Container();
              this.mf.sortableChildren = true;
              this.nf = new vF32.Container();
              this.nf.zIndex = 0;
              this.mf.addChild(this.nf);
              this.uf = new vF32.Container();
              this.uf.zIndex = 3;
              this.mf.addChild(this.uf);
              this.vf = [];
              this.wf = [];
              this.xf = [];
              this.ha();
            }
            var vLN0115 = 0;
            var vLN53 = 5;
            var vLN40 = 40;
            var vA22 = [{
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
            f252.prototype.ha = function () {
              var vF2052 = f205();
              this.lf.backgroundColor = vLN0115;
              this.vf = new Array(vA22.length);
              for (var vLN0116 = 0; vLN0116 < this.vf.length; vLN0116++) {
                this.vf[vLN0116] = new vF32.Sprite();
                this.vf[vLN0116].texture = vF2052.xe.Bf;
                this.vf[vLN0116].anchor.set(0.5);
                this.nf.addChild(this.vf[vLN0116]);
              }
              this.wf = new Array(vF2052.xe.Cf.length);
              for (var vLN0117 = 0; vLN0117 < this.wf.length; vLN0117++) {
                this.wf[vLN0117] = new vF32.Sprite();
                this.wf[vLN0117].texture = vF2052.xe.Cf[vLN0117];
                this.wf[vLN0117].anchor.set(0.5);
                this.uf.addChild(this.wf[vLN0117]);
              }
              this.xf = new Array(this.wf.length);
              for (var vLN0118 = 0; vLN0118 < this.xf.length; vLN0118++) {
                var vA23 = [0.6, 1, 0.5];
                this.xf[vLN0118] = {
                  Df: decoder.V(0, vO55.F),
                  Ef: decoder.V(0.09, 0.16) * 0.66,
                  Ff: decoder.V(0, 1),
                  Gf: decoder.V(0, 1),
                  Hf: 0,
                  yf: vA23[0],
                  zf: vA23[1],
                  Af: vA23[2]
                };
              }
              this.If();
              this.Jf();
            };
            f252.hd = false;
            f252.Kf = function (p1128) {
              f252.hd = p1128;
            };
            f252.prototype.Lf = function (p1129) {
              this.hf.Kf(p1129);
            };
            f252.prototype.Jf = function () {
              var v779 = window.devicePixelRatio ? window.devicePixelRatio : 1;
              this.ff = this.ef.width();
              this.gf = this.ef.height();
              this.lf.resize(this.ff, this.gf);
              this.lf.resolution = v779;
              this.Eb.width = v779 * this.ff;
              this.Eb.height = v779 * this.gf;
              var v780 = Math.max(this.ff, this.gf) * 0.6;
              for (var vLN0119 = 0; vLN0119 < this.vf.length; vLN0119++) {
                this.vf[vLN0119].width = v780;
                this.vf[vLN0119].height = v780;
              }
            };
            f252.prototype.Nf = function (p1130, p1131) {
              if (f252.hd) {
                var v781 = p1130 / 1000;
                var v782 = p1131 / 1000;
                var v783 = this.ef.width();
                var v784 = this.ef.height();
                for (var vLN0120 = 0; vLN0120 < this.vf.length; vLN0120++) {
                  var v785 = vA22[vLN0120 % vA22.length];
                  var v786 = this.vf[vLN0120];
                  var v787 = vLN0120 / this.vf.length * vO55.G;
                  var v788 = v781 * 0.5 * 0.12;
                  var v789 = Math.cos((v788 + v787) * 3) * Math.cos(v787) - Math.sin((v788 + v787) * 5) * Math.sin(v787);
                  var v790 = Math.cos((v788 + v787) * 3) * Math.sin(v787) + Math.sin((v788 + v787) * 5) * Math.cos(v787);
                  var v791 = 0.2 + Math.cos(v787 + v781 * 0.075) * 0.2;
                  var v792 = v785.Af * 255 << 16 & 16711680 | v785.zf * 255 << 8 & 65280 | v785.yf * 255 & 255;
                  v786.tint = v792;
                  v786.alpha = v791;
                  v786.position.set(v783 * (0.2 + (v789 + 1) * 0.5 * 0.6), v784 * (0.1 + (v790 + 1) * 0.5 * 0.8));
                }
                var v793 = Math.max(v783, v784) * 0.05;
                for (var vLN0121 = 0; vLN0121 < this.wf.length; vLN0121++) {
                  var v794 = this.xf[vLN0121];
                  var v795 = this.wf[vLN0121];
                  var v796 = vO55.F * vLN0121 / this.wf.length + v794.Df;
                  v794.Gf += v794.Ef * v782;
                  if (v794.Gf > 1.1) {
                    v794.Df = Math.random() * vO55.F;
                    v794.Ef = (0.09 + Math.random() * 0.07) * 0.66;
                    v794.Ff = 0.15 + Math.random() * 0.7;
                    v794.Gf = -0.1;
                  }
                  var v797 = v794.Ff + Math.sin(Math.sin(v796 + v781 * 0.48) * 6) * 0.03;
                  var v798 = v794.Gf;
                  var v799 = (0.4 + (1 + Math.sin(v796 + v781 * 0.12)) * 0.5 * 1.2) * 0.5;
                  var v800 = v796 + v794.Ef * 2 * v781;
                  var v801 = decoder.P(Math.sin(Math.PI * v798), 0.1, 1);
                  var v802 = v794.zf * 255 << 8 & 65280 | v794.Af * 255 << 16 & 16711680 | v794.yf * 255 & 255;
                  v795.alpha = v801;
                  v795.tint = v802;
                  v795.position.set(v783 * v797, v784 * v798);
                  v795.rotation = v800;
                  var v803 = v795.texture.width / v795.texture.height;
                  v795.width = v799 * v793;
                  v795.height = v799 * v793 * v803;
                }
                this.Of();
                this.lf.render(this.mf, null, true);
              }
            };
            f252.prototype.Pf = function () {
              var vF2053 = f205();
              if (vF2053.Lc.Wb()) {
                var v804 = vF2053.Lc.Ub().gb(vLN53);
                for (var vLN0122 = 0; vLN0122 < vLN53; vLN0122++) {
                  this.hf.Qf(vLN0122, v804[vLN0122]);
                }
              } else {
                var v805 = decoder.V(0, 1);
                for (var vLN0123 = 0; vLN0123 < vLN53; vLN0123++) {
                  var v806 = (v805 + vLN0123 / vLN53) % 1;
                  var v807 = decoder.Y(Math.floor(v806 * 360), 0.85, 0.5);
                  var v808 = v807[0] * 255 & 255 | v807[1] * 255 << 8 & 65280 | v807[2] * 255 << 16 & 16711680;
                  var v809 = "000000" + v808.toString(16);
                  v809 = "#" + v809.substring(v809.length - 6, v809.length);
                  this.hf.Rf(vLN0123, v809);
                }
              }
            };
            f252.prototype.If = function () {
              var v810 = Math.min(this.ff, this.gf);
              var v811 = Date.now();
              for (var vLN0124 = 0; vLN0124 < vLN53; vLN0124++) {
                var v812 = vLN0124 / vLN53 * vO55.F;
                var v_0x2cb706 = v_0x429fd2(v811, 0.12, v812);
                v_0x2cb706.qa = v_0x2cb706.qa * 4;
                v_0x2cb706.ra = v_0x2cb706.ra * 4;
                this.hf.Sf(vLN0124, (this.ff + v_0x2cb706.qa * v810) * 0.5, (this.gf + v_0x2cb706.ra * v810) * 0.5);
              }
            };
            f252.prototype.Of = function () {
              var v813 = Math.min(this.ff, this.gf);
              var v814 = Date.now();
              for (var vLN0125 = 0; vLN0125 < vLN53; vLN0125++) {
                var v815 = vLN0125 / vLN53 * vO55.F;
                var v_0x2cb7062 = v_0x429fd2(v814, 0.12, v815);
                this.hf.Tf(vLN0125, (this.ff + v_0x2cb7062.qa * v813) * 0.5, (this.gf + v_0x2cb7062.ra * v813) * 0.5);
              }
              this.hf.Uf();
            };
            var v_0x429fd2 = function f253(p1132, p1133, p1134) {
              var v816 = p1132 / 1000;
              return {
                qa: (Math.cos(p1133 * v816 + p1134) + Math.cos(p1133 * -32 * v816 + p1134) * 0.4 + Math.cos(p1133 * 7 * v816 + p1134) * 0.7) * 0.8,
                ra: (Math.sin(p1133 * v816 + p1134) + Math.sin(p1133 * -32 * v816 + p1134) * 0.4 + Math.sin(p1133 * 7 * v816 + p1134) * 0.7) * 0.8
              };
            };
            return f252;
          }();
          vO54.Vf = function () {
            function f254() {}
            f254.Wf = "consent_state_2";
            f254.Xf = "showPlayerNames";
            f254.Yf = "musicEnabled";
            f254.Zf = "sfxEnabled";
            f254.$f = "account_type";
            f254._f = "gameMode";
            f254.ag = "nickname";
            f254.bg = "skin";
            f254.cg = "prerollCount";
            f254.dg = "shared";
            f254.eg = function (p1135, p1136, p1137) {
              var v817 = new Date();
              v817.setTime(v817.getTime() + p1137 * 86400000);
              var v818 = "expires=" + v817.toUTCString();
              document.cookie = p1135 + "=" + p1136 + "; " + v818;
            };
            f254.fg = function (p1138) {
              var v819 = p1138 + "=";
              for (var v820 = document.cookie.split(";"), vLN0126 = 0; vLN0126 < v820.length; vLN0126++) {
                for (var v821 = v820[vLN0126]; v821.charAt(0) == " ";) {
                  v821 = v821.substring(1);
                }
                if (v821.indexOf(v819) == 0) {
                  if (p1138 == "nickname=") {
                    v821.substring(v819.length, v821.length).substring(0, vLN18);
                  }
                  return v821.substring(v819.length, v821.length);
                }
              }
              return "";
            };
            return f254;
          }();
          vO55.gg = function () {
            function f255(p1139, p1140, p1141) {
              var v822 = false;
              for (var v823 = p1141.length, vLN0127 = 0, v824 = v823 - 1; vLN0127 < v823; v824 = vLN0127++) {
                if (p1141[vLN0127][1] > p1140 != p1141[v824][1] > p1140 && p1139 < (p1141[v824][0] - p1141[vLN0127][0]) * (p1140 - p1141[vLN0127][1]) / (p1141[v824][1] - p1141[vLN0127][1]) + p1141[vLN0127][0]) {
                  v822 = !v822;
                }
              }
              return v822;
            }
            var vA24 = [[-28.06744, 64.95936], [-10.59082, 72.91964], [14.11773, 81.39558], [36.51855, 81.51827], [32.82715, 71.01696], [31.64063, 69.41897], [29.41419, 68.43628], [30.64379, 67.47302], [29.88281, 66.76592], [30.73975, 65.50385], [30.73975, 64.47279], [31.48682, 63.49957], [32.18994, 62.83509], [28.47726, 60.25122], [28.76221, 59.26588], [28.03711, 58.60833], [28.38867, 57.53942], [28.83955, 56.2377], [31.24512, 55.87531], [31.61865, 55.34164], [31.92627, 54.3037], [33.50497, 53.26758], [32.73926, 52.85586], [32.23389, 52.4694], [34.05762, 52.44262], [34.98047, 51.79503], [35.99121, 50.88917], [36.67236, 50.38751], [37.74902, 50.51343], [40.78125, 49.62495], [40.47363, 47.70976], [38.62799, 46.92028], [37.53193, 46.55915], [36.72182, 44.46428], [39.68218, 43.19733], [40.1521, 43.74422], [43.52783, 43.03678], [45.30762, 42.73087], [46.99951, 41.98399], [47.26318, 40.73061], [44.20009, 40.86309], [45.35156, 39.57182], [45.43945, 36.73888], [35.64789, 35.26481], [33.13477, 33.65121], [21.47977, 33.92486], [12.16268, 34.32477], [11.82301, 37.34239], [6.09112, 38.28597], [-1.96037, 35.62069], [-4.82156, 35.60443], [-7.6498, 35.26589], [-16.45237, 37.44851], [-28.06744, 64.95936]];
            return {
              hg: function f256(p1142, p1143) {
                return f255(p1143, p1142, vA24);
              }
            };
          }();
          vO54.ig = function () {
            function f257(p1144) {
              var vUndefined5 = undefined;
              vUndefined5 = p1144 > 0 ? "+" + Math.floor(p1144) : p1144 < 0 ? "-" + Math.floor(p1144) : "0";
              var v825 = Math.min(1.5, 0.5 + p1144 / 600);
              var vUndefined6 = undefined;
              if (p1144 < 1) {
                vUndefined6 = "0xFFFFFF";
              } else if (p1144 < 30) {
                var v826 = (p1144 - 1) / 29;
                vUndefined6 = f259((1 - v826) * 1 + v826 * 0.96, (1 - v826) * 1 + v826 * 0.82, (1 - v826) * 1 + v826 * 0);
              } else if (p1144 < 300) {
                var v827 = (p1144 - 30) / 270;
                vUndefined6 = f259((1 - v827) * 0.96 + v827 * 0.93, (1 - v827) * 0.82 + v827 * 0.34, (1 - v827) * 0 + v827 * 0.25);
              } else if (p1144 < 700) {
                var v828 = (p1144 - 300) / 400;
                vUndefined6 = f259((1 - v828) * 0.93 + v828 * 0.98, (1 - v828) * 0.34 + v828 * 0, (1 - v828) * 0.25 + v828 * 0.98);
              } else {
                vUndefined6 = f259(0.98, 0, 0.98);
              }
              var v829 = Math.random();
              var v830 = 1 + Math.random() * 0.5;
              return new vF36(vUndefined5, vUndefined6, true, 0.5, v825, v829, v830);
            }
            function f258(p1145, p1146) {
              var vUndefined7 = undefined;
              var vUndefined8 = undefined;
              if (p1146) {
                vUndefined7 = 1.3;
                vUndefined8 = f259(0.93, 0.34, 0.25);
              } else {
                vUndefined7 = 1.1;
                vUndefined8 = f259(0.96, 0.82, 0);
              }
              return new vF36(p1145, vUndefined8, true, 0.5, vUndefined7, 0.5, 0.7);
            }
            function f259(p1147, p1148, p1149) {
              return ((p1147 * 255 & 255) << 16) + ((p1148 * 255 & 255) << 8) + (p1149 * 255 & 255);
            }
            var v831 = decoder.M(vF32.Container, function () {
              vF32.Container.call(this);
              this.jg = [];
              this.kg = 0;
            });
            v831.prototype.lg = function (p1150) {
              this.kg += p1150;
              if (this.kg >= 1) {
                var v832 = Math.floor(this.kg);
                this.kg -= v832;
                var vF257 = f257(v832);
                this.addChild(vF257);
                this.jg.push(vF257);
              }
            };
            v831.prototype.mg = function (p1151) {
              _wwc.fnSetCounts("count", p1151);
              if (p1151) {
                if (!(window.bbs.headshot % 10)) {
                  vO41.fxdo("shaokahn");
                } else {
                  vO41.fxdo("headshot");
                }
                var vF258 = f258(decoder.H("index.game.floating.headshot"), true);
                this.addChild(vF258);
                this.jg.push(vF258);
              } else {
                var vF2582 = f258(decoder.H("index.game.floating.wellDone"), false);
                this.addChild(vF2582);
                this.jg.push(vF2582);
              }
            };
            v831.prototype.Uf = function (p1152, p1153) {
              var v833 = f205().og.af.ng;
              var v834 = v833.lf.width / v833.lf.resolution;
              var v835 = v833.lf.height / v833.lf.resolution;
              for (var vLN0128 = 0; vLN0128 < this.jg.length;) {
                var v836 = this.jg[vLN0128];
                v836.pg = v836.pg + p1153 / 2000 * v836.qg;
                v836.rg = v836.rg + p1153 / 2000 * v836.sg;
                v836.alpha = Math.sin(Math.PI * v836.rg) * 0.5;
                v836.scale.set(v836.pg);
                v836.position.x = v834 * (0.25 + v836.tg * 0.5);
                v836.position.y = v836.ug ? v835 * (1 - (1 + v836.rg) * 0.5) : v835 * (1 - (0 + v836.rg) * 0.5);
                if (v836.rg > 1) {
                  decoder.U(v836);
                  this.jg.splice(vLN0128, 1);
                  vLN0128--;
                }
                vLN0128++;
              }
            };
            var vF36 = function () {
              return decoder.M(vF32.Text, function (p1154, p1155, p1156, p1157, p1158, p1159, p1160) {
                vF32.Text.call(this, p1154, {
                  fill: p1155,
                  fontFamily: "PTSans",
                  fontSize: 36
                });
                this.anchor.set(0.5);
                this.ug = p1156;
                this.pg = p1157;
                this.qg = p1158;
                this.tg = p1159;
                this.rg = 0;
                this.sg = p1160;
              });
            }();
            return v831;
          }();
          vO54.be = function () {
            function f260(p1161, p1162) {
              this.Xd = p1161;
              this.oa = p1162;
            }
            return f260;
          }();
          vO54.Ac = {
            vg: 0,
            zc: 16
          };
          vO54.GameParams = function () {
            function f261() {
              this.xg = vO54.Ac.vg;
              this.yg = 0;
              this.zg = 500;
              this.Ag = 4000;
              this.Bg = 7000;
            }
            f261.Cg = 0;
            f261.prototype.Dg = function () {
              return this.zg * 1.02;
            };
            return f261;
          }();
          vO54.Eg = function () {
            function f262(p1163) {
              this.ef = p1163;
              this.Eb = p1163.get()[0];
              this.lf = new vF32.Renderer({
                view: p1163.get()[0],
                backgroundColor: vLN0129,
                antialias: false
              });
              this.mf = new vF32.Container();
              this.mf.sortableChildren = true;
              this.Fg = Math.floor(Math.random() * 360);
              this.Gg = 0;
              this.Hg = 0;
              this.Ig = 15;
              this.Jg = 0.5;
              this.Kg = 0;
              this.Lg = vO48.Lg(vO54);
              this.Ng = new vF32.Graphics();
              this.Og = new vF32.Container();
              this.Pg = new vF32.Container();
              this.Pg.sortableChildren = true;
              this.Qg = new vF32.Container();
              this.Rg = new vF32.Container();
              this.Rg.sortableChildren = true;
              this.Sg = new vF32.Container();
              this.Tg = new vF37();
              this.Ug = new vF38();
              this.Vg = new vF40();
              this.Wg = new vO54.ig();
              this.Xg = new vF32.Sprite();
              this.Yg = {
                x: 0,
                y: 0
              };
              this.ha();
            }
            var vLN0129 = 0;
            f262.prototype.ha = function () {
              this.lf.backgroundColor = vLN0129;
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
              this.Xg.texture = f205().xe.Zg;
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
            f262.prototype.Jf = function () {
              var v837 = this.ef.width();
              var v838 = this.ef.height();

              // الإعدادات الافتراضية للعناصر

              var v839 = window.bbs.display.custom ? window.bbs.display.clock.x * v837 : 0;
              var v840 = window.bbs.display.custom ? window.bbs.display.clock.y * v838 : 0;
              var v841 = window.bbs.display.custom ? window.bbs.display.top.x * v837 : v837 - 255;
              var v842 = window.bbs.display.custom ? window.bbs.display.top.y * screen.height : 1;
              var v843 = window.bbs.display.clock.rc ? vO52[window.bbs.display.clock.rc] : 0;
              var v844 = window.bbs.display.top.rt ? vO52[window.bbs.display.top.rt] : 0;
              var v845 = window.devicePixelRatio ? window.devicePixelRatio : 1;
              var v846 = v845 * v837;
              var v847 = v845 * v838;
              var v848 = Math.min(Math.min(v837, v838), Math.max(v837, v838) * 0.625);
              this.lf.resize(v837, v838);
              this.lf.resolution = v845;
              this.Eb.width = v846;
              this.Eb.height = v847;
              this.Jg = v848;
              this.Xg.position.set(v837 / 2, v838 / 2);
              this.Xg.width = v837;
              this.Xg.height = v838;

              // تطبيق إعدادات Screen Mode

              if (window.bbs.hudSettings && window.bbs.hudSettings.mode !== undefined) {
                var screenWidth = v837;
                var hudMode = window.bbs.hudSettings.mode;
                var hudWi = window.bbs.hudSettings.wi || 1;

                // حساب مواقع العناصر حسب الوضع المختار
                var clockX;
                var infoX;
                var topX;
                if (hudMode == 0) {
                  // الوضع الافتراضي 100%

                  clockX = 60 + v839;
                  infoX = 110;
                  topX = v841;
                } else if (hudMode == 1) {
                  // وضع 75% 

                  clockX = screenWidth / 2 + (60 + v839) - screenWidth * hudWi;
                  infoX = screenWidth / 2 + 110 - screenWidth * hudWi;
                  topX = screenWidth / 2 - 225 + screenWidth * hudWi - 50;
                } else if (hudMode == 2) {
                  // وضع Center - ترتيب صحيح: الأسماء يساراً

                  var centerX = screenWidth / 2; // مركز الشاشة = 674

                  topX = centerX - 230; // المتصدرين (الأسماء) يساراً: 474

                  infoX = centerX; // المعلومات في المنتصف: 674

                  clockX = centerX + 110; // الساعة يميناً: 824

                  console.log("Center positions - Top(أسماء):", topX, "Info:", infoX, "Clock:", clockX);
                } else {
                  // احتياطي للوضع الافتراضي

                  clockX = 60 + v839;
                  infoX = 110;
                  topX = v841;
                }

                // تطبيق المواقع الجديدة

                this.Tg.position.set(clockX, 60 + v840 + (v843 ? this.Tg.height / 4 : 0));
                this.Ug.position.set(infoX, 10);
                this.Vg.position.set(topX, v842 + (v844 ? this.Vg.height : 0));
              } else {
                // الإعدادات الافتراضية في حالة عدم وجود hudSettings

                this.Tg.position.set(60 + v839, 60 + v840 + (v843 ? this.Tg.height / 4 : 0));
                this.Ug.position.set(110, 10);
                this.Vg.position.set(v841, v842 + (v844 ? this.Vg.height : 0));
              }
              this.Tg.rotation = v843;
              this.Vg.rotation = v844;
            };
            f262.prototype.Uf = function (p1164, p1165) {
              var vVO47 = vO47;
              this.Ig = 15;
              this.Og.removeChildren();
              this.Pg.removeChildren();
              this.Qg.removeChildren();
              this.Sg.removeChildren();
              this.Lg.$g(p1164.xg === vO54.Ac.vg ? vVO47.xe._g : vVO47.xe.ah);
              var v849 = this.Ng;
              v849.clear();
              v849.lineStyle(0.2, 16711680, 0.6);
              v849.drawCircle(0, 0, p1164.zg);
              v849.endFill();
              this.Vg.bh = p1165;
              this.Sg.visible = p1165;
            };
            f262.prototype.Nf = function (p1166, p1167) {
              if (this.lf.width <= 5) {
                return;
              }
              var vVO472 = vO47;
              var v850 = vVO472.dh.ch;
              var v851 = this.lf.width / this.lf.resolution;
              var v852 = this.lf.height / this.lf.resolution;
              this.Ig = vO48.$F.Q(this.Ig, vVO472.dh.eh, p1167, 0.002);
              var v853 = this.Jg / (this.Ig * vLN15);
              var v854 = vVO472.dh.ch.dd[vO48.$C.fd.qd];
              var v855 = v854 != null && v854.hd;
              this.Kg = vO48.$F.P(this.Kg + p1167 / 1000 * ((v855 ? 1 : 0) * 0.1 - this.Kg), 0, 1);
              this.Xg.alpha = this.Kg;
              this.Fg = (this.Fg + p1167 * 0.01) % 360;
              this.Gg = Math.sin(p1166 / 1200 * 2 * Math.PI);
              var v856 = v850.fh();
              this.Yg.x = vO48.$F.R(this.Yg.x, v856.x, p1167, 0.5, 33.333);
              this.Yg.y = vO48.$F.R(this.Yg.y, v856.y, p1167, 0.5, 33.333);
              var v857 = v851 / v853 / 2;
              var v858 = v852 / v853 / 2;
              vVO472.dh.gh(this.Yg.x - v857 * 1.3, this.Yg.x + v857 * 1.3, this.Yg.y - v858 * 1.3, this.Yg.y + v858 * 1.3);
              if (!bbs.backgroundIsCustom) {
                this.Lg.Uf(this.Yg.x, this.Yg.y, v857 * 2, v858 * 2);
              }
              var v859 = vVO472.dh.hh.zg;
              this.mf.scale.set(v853, v853);
              this.mf.position.set(v851 / 2 - this.Yg.x * v853, v852 / 2 - this.Yg.y * v853);
              var v860 = Math.hypot(v856.x, v856.y);
              if (v860 > v859 - 10) {
                this.Hg = vO48.$F.P(1 + (v860 - v859) / 10, 0, 1);
                var v861 = Math.cos(this.Fg * vO48.$V.F / 360) * (1 - this.Hg) + this.Hg * 1;
                var v862 = Math.sin(this.Fg * vO48.$V.F / 360) * (1 - this.Hg);
                var v863 = (Math.atan2(v862, v861) + vO48.$V.F) % vO48.$V.F * 360 / vO48.$V.F;
                var v864 = this.Hg * (0.5 + this.Gg * 0.5);
                var v865 = vO48.$F.Y(Math.floor(v863), 1, 0.75 - this.Hg * 0.25);
                this.Lg.Ec(v865[0], v865[1], v865[2], 0.1 + v864 * 0.2);
              } else {
                this.Hg = 0;
                var v866 = vO48.$F.Y(Math.floor(this.Fg), 1, 0.75);
                this.Lg.Ec(v866[0], v866[1], v866[2], 0.1);
              }
              for (var vLN0130 = 0; vLN0130 < this.Sg.children.length; vLN0130++) {
                var v867 = this.Sg.children[vLN0130];
                v867.position.set(v851 / 2 - (this.Yg.x - v867.ih.x) * v853, v852 / 2 - (this.Yg.y - v867.ih.y) * v853);
              }
              this.Tg.jh.position.x = v856.x / v859 * this.Tg.kh;
              this.Tg.jh.position.y = v856.y / v859 * this.Tg.kh;
              _wwcio.myLocation = this.Tg.jh;
              this.Ug.lh(p1166);
              this.Wg.Uf(p1166, p1167);
              this.lf.render(this.mf, null, true);
              this.lf.render(this.Rg, null, false);
            };
            f262.prototype.mh = function (p1168, p1169) {
              p1169.nh.Cc.Qc().zIndex = (p1168 + 2147483648) / 4294967296 * 5000;
              this.Og.addChild(p1169.nh.Dc.Qc());
              this.Pg.addChild(p1169.nh.Cc.Qc());
            };
            f262.prototype.oh = function (p1170, p1171, p1172) {
              p1171.nc.zIndex = f205().dh.hh.yg ? 0 : 10 + (p1170 + 32768) / 65536 * 5000;
              this.Qg.addChild(p1171.nc);
              if (p1170 != f205().dh.hh.yg) {
                this.Sg.addChild(p1172);
              }
            };
            var vF37 = function () {
              return decoder.M(vF32.Container, function () {
                vF32.Container.call(this);
                this.kh = 40;
                this.qh = new vF32.Sprite();
                this.qh.anchor.set(0.5);
                this.qh.alpha = 0.5;
                var v868 = new vF32.Graphics();
                v868.beginFill("black", 0.4);
                v868.drawCircle(0, 0, this.kh);
                v868.endFill();
                v868.lineStyle(1.5, 16225317);
                v868.drawCircle(0, 0, this.kh);
                v868.moveTo(0, -this.kh);
                v868.lineTo(0, +this.kh);
                v868.moveTo(-this.kh, 0);
                v868.lineTo(+this.kh, 0);
                v868.endFill();
                if (bbs.display.customClock) {
                  v868 = new vF32.Sprite();
                  v868.texture = new vF32.Texture.from(bbs.display.customClock.file);
                  v868.width = this.kh * 2.75;
                  v868.height = this.kh * 2.75;
                  v868.anchor.set(0.5);
                }
                this.jh = new vF32.Graphics();
                this.qh.alpha = 0.5;
                this.jh.zIndex = 2;
                this.jh.alpha = 0.9;
                this.jh.beginFill(16225317);
                this.jh.drawCircle(0, 0, this.kh * 0.1);
                this.jh.endFill();
                this.jh.lineStyle(1.5, "white");
                this.jh.drawCircle(0, 0, this.kh * 0.1);
                this.addChild(v868);
                this.addChild(this.qh);
                this.addChild(this.jh);
                this.addChild(w2c2020.conteinerTeam);
              });
            }();
            var vF38 = function () {
              var v869 = decoder.M(vF32.Container, function () {
                vF32.Container.call(this);
                this.rh = {};
              });
              v869.prototype.lh = function (p1173) {
                var v870 = 0.5 + Math.cos(vO55.F * (p1173 / 1000 / 1.6)) * 0.5;
                for (var v871 in this.rh) {
                  var v872 = this.rh[v871];
                  var v873 = v872.sh;
                  v872.alpha = 1 - v873 + v873 * v870;
                }
              };
              v869.prototype.Uf = function (p1174) {
                for (var v874 in this.rh) {
                  if (p1174[v874] == null || !p1174[v874].hd) {
                    decoder.U(this.rh[v874]);
                    delete this.rh[v874];
                  }
                }
                var vLN0131 = 0;
                for (var v875 in p1174) {
                  var v876 = p1174[v875];
                  if (v876.hd) {
                    var v877 = this.rh[v875];
                    if (!v877) {
                      var v878 = f205().Lc.Ub().pb(v876.nd).ub;
                      v877 = new vF39();
                      v877.texture = v878.Ea();
                      v877.width = 40;
                      v877.height = 40;
                      this.rh[v875] = v877;
                      this.addChild(v877);
                    }
                    v877.sh = v876.od;
                    v877.position.x = vLN0131;
                    vLN0131 += 40;
                  }
                }
              };
              var vF39 = function () {
                return decoder.M(vF32.Sprite, function () {
                  vF32.Sprite.call(this);
                  this.sh = 0;
                });
              }();
              return v869;
            }();
            var vF40 = function () {
              var v879 = decoder.M(vF32.Container, function () {
                vF32.Container.call(this);
                this.bh = true;
                this.th = 12;
                this.uh = 9;
                this.jg = [];
                for (var vLN0132 = 0; vLN0132 < 14; vLN0132++) {
                  this.vh();
                }
              });
              v879.prototype.Uf = function (p1175) {
                var vF2054 = f205();
                var v880 = vF2054.dh.hh.xg === vO54.Ac.zc;
                var vLN0133 = 0;
                var vLN0134 = 0;
                if (vLN0134 >= this.jg.length) {
                  this.vh();
                }
                this.jg[vLN0134].wh(1, "white");
                this.jg[vLN0134].xh("", decoder.H("index.game.leader.top10"), "(" + vF2054.dh.yh + " player)");
                this.jg[vLN0134].position.y = vLN0133;
                vLN0133 += this.th;
                vLN0134 += 1;
                if (p1175.zh.length > 0) {
                  vLN0133 += this.uh;
                }
                for (var vLN0135 = 0; vLN0135 < p1175.zh.length; vLN0135++) {
                  var v881 = p1175.zh[vLN0135];
                  var v882 = vF2054.Lc.Ub().jb(v881.Ah);
                  var vLS11 = "";
                  var v883 = vF2054.Lc.Xb().textDict[v882.qb];
                  if (v883 != null) {
                    vLS11 = decoder.I(v883);
                  }
                  if (vLN0134 >= this.jg.length) {
                    this.vh();
                  }
                  this.jg[vLN0134].wh(0.8, v882.rb.tb);
                  this.jg[vLN0134].xh("" + (vLN0135 + 1), vLS11, "" + Math.floor(v881.Bh));
                  this.jg[vLN0134].position.y = vLN0133;
                  vLN0133 += this.th;
                  vLN0134 += 1;
                }
                if (p1175.Ch.length > 0) {
                  vLN0133 += this.uh;
                }
                for (var vLN0136 = 0; vLN0136 < p1175.Ch.length; vLN0136++) {
                  var v884 = p1175.Ch[vLN0136];
                  var v885 = vF2054.dh.hh.yg == v884.Dh;
                  var v886;
                  var v887;
                  if (v885) {
                    v886 = "white";
                    v887 = vF2054.dh.ch.Eh.ma;
                  } else {
                    var v888 = vF2054.dh.Fh[v884.Dh];
                    if (!v886) {
                      v886 = "white";
                    }
                    if (v888 != null) {
                      v886 = v880 ? vF2054.Lc.Ub().jb(v888.Eh.Gh).rb.tb : vF2054.Lc.Ub().ib(v888.Eh.Hh).tb || v886;
                      v887 = this.bh && v499 ? v888.Eh.ma : "---";
                    } else {
                      v886 = "gray";
                      v887 = "?";
                    }
                  }
                  if (v885) {
                    vLN0133 += this.uh;
                  }
                  if (vLN0134 >= this.jg.length) {
                    this.vh();
                  }
                  this.jg[vLN0134].wh(v885 ? 1 : 0.8, v886);
                  this.jg[vLN0134].xh("" + (vLN0136 + 1), v887, "" + Math.floor(v884.Bh));
                  this.jg[vLN0134].position.y = vLN0133;
                  vLN0133 += this.th;
                  vLN0134 += 1;
                  if (v885) {
                    vLN0133 += this.uh;
                  }
                  if (window.bbs.lr && vLN0136 === 2) {
                    break;
                  }
                }
                if (vF2054.dh.Ih > (window.bbs.lr ? 3 : p1175.Ch.length)) {
                  vLN0133 += this.uh;
                  if (vLN0134 >= this.jg.length) {
                    this.vh();
                  }
                  this.jg[vLN0134].wh(1, "white");
                  this.jg[vLN0134].xh("" + vF2054.dh.Ih, vF2054.dh.ch.Eh.ma, "" + Math.floor(vF2054.dh.ch.Bh));
                  this.jg[vLN0134].position.y = vLN0133;
                  vLN0133 += this.th;
                  vLN0134 += 1;
                  vLN0133 += this.uh;
                }
                while (this.jg.length > vLN0134) {
                  decoder.U(this.jg.pop());
                }
              };
              v879.prototype.vh = function () {
                var v889 = new vF41();
                v889.position.y = 0;
                if (this.jg.length > 0) {
                  v889.position.y = this.jg[this.jg.length - 1].position.y + this.th;
                }
                this.jg.push(v889);
                this.addChild(v889);
              };
              var vF41 = function () {
                var v890 = decoder.M(vF32.Container, function () {
                  vF32.Container.call(this);
                  this.Jh = new vF32.Text("", {
                    fontFamily: "PTSans",
                    fontSize: 12,
                    fill: "white"
                  });
                  this.Jh.anchor.x = 1;
                  this.Jh.position.x = 30;
                  this.addChild(this.Jh);
                  this.Kh = new vF32.Text("", {
                    fontFamily: "PTSans",
                    fontSize: 12,
                    fill: "white"
                  });
                  this.Kh.anchor.x = 0;
                  this.Kh.position.x = 35;
                  this.addChild(this.Kh);
                  this.Lh = new vF32.Text("", {
                    fontFamily: "PTSans",
                    fontSize: 12,
                    fill: "white"
                  });
                  this.Lh.anchor.x = 1;
                  this.Lh.position.x = 250;
                  this.addChild(this.Lh);
                });
                v890.prototype.xh = function (p1176, p1177, p1178) {
                  this.Jh.text = p1176;
                  this.Lh.text = p1178;
                  this.Kh.text = p1177;
                };
                v890.prototype.wh = function (p1179, p1180) {
                  this.Jh.alpha = p1179;
                  this.Jh.style.fill = p1180;
                  this.Kh.alpha = p1179;
                  this.Kh.style.fill = p1180;
                  this.Lh.alpha = p1179;
                  this.Lh.style.fill = p1180;
                };
                return v890;
              }();
              return v879;
            }();
            return f262;
          }();
          vO54.MessageProcessor = function () {
            function f263(p1181) {
              this.dh = p1181;
              this.Nh = [];
              this.Oh = 0;
            }
            f263.prototype.Ph = function (p1182) {
              this.Nh.push(new DataView(p1182));
            };
            f263.prototype.Qh = function () {
              this.Nh = [];
              this.Oh = 0;
            };
            f263.prototype.Rh = function () {
              for (var vLN0137 = 0; vLN0137 < 16; vLN0137++) {
                if (this.Nh.length === 0) {
                  return;
                }
                var v891 = this.Nh.shift();
                try {
                  this.Sh(v891);
                } catch (e58) {
                  throw e58;
                }
              }
            };
            f263.prototype.Sh = function (p1183) {
              switch (p1183.ba(0) & 255) {
                case 0:
                  this.Th(p1183, 1);
                  return;
                case 1:
                  this.Uh(p1183, 1);
                  return;
                case 2:
                  this.Vh(p1183, 1);
                  return;
                case 3:
                  this.Wh(p1183, 1);
                  return;
                case 4:
                  this.Xh(p1183, 1);
                  return;
                case 5:
                  this.Yh(p1183, 1);
                  return;
              }
            };
            f263.prototype.Th = function (p1184, p1185) {
              this.dh.hh.xg = p1184.ba(p1185);
              p1185 += 1;
              var v892 = p1184.ca(p1185);
              p1185 += 2;
              this.dh.hh.yg = v892;
              this.dh.ch.Eh.ae = v892;
              this.dh.hh.zg = p1184.ea(p1185);
              p1185 += 4;
              this.dh.hh.Ag = p1184.ea(p1185);
              p1185 += 4;
              this.dh.hh.Bg = p1184.ea(p1185);
              p1185 += 4;
              f205().og.af.ng.Uf(this.dh.hh, f205().og.$h.Zh());
              return p1185;
            };
            f263.prototype.Uh = function (p1186, p1187) {
              var v893 = this.Oh++;
              var v894 = p1186.ca(p1187);
              p1187 += 2;
              var vUndefined9 = undefined;
              vUndefined9 = this._h(p1186, p1187);
              p1187 += this.ai(vUndefined9);
              for (var vLN0138 = 0; vLN0138 < vUndefined9; vLN0138++) {
                p1187 = this.bi(p1186, p1187);
              }
              vUndefined9 = this._h(p1186, p1187);
              p1187 += this.ai(vUndefined9);
              for (var vLN0139 = 0; vLN0139 < vUndefined9; vLN0139++) {
                p1187 = this.ci(p1186, p1187);
              }
              vUndefined9 = this._h(p1186, p1187);
              p1187 += this.ai(vUndefined9);
              for (var vLN0140 = 0; vLN0140 < vUndefined9; vLN0140++) {
                p1187 = this.di(p1186, p1187);
              }
              vUndefined9 = this._h(p1186, p1187);
              p1187 += this.ai(vUndefined9);
              for (var vLN0141 = 0; vLN0141 < vUndefined9; vLN0141++) {
                p1187 = this.ei(p1186, p1187);
              }
              vUndefined9 = this._h(p1186, p1187);
              p1187 += this.ai(vUndefined9);
              for (var vLN0142 = 0; vLN0142 < vUndefined9; vLN0142++) {
                p1187 = this.fi(p1186, p1187);
              }
              vUndefined9 = this._h(p1186, p1187);
              p1187 += this.ai(vUndefined9);
              for (var vLN0143 = 0; vLN0143 < vUndefined9; vLN0143++) {
                p1187 = this.gi(p1186, p1187);
              }
              vUndefined9 = this._h(p1186, p1187);
              p1187 += this.ai(vUndefined9);
              for (var vLN0144 = 0; vLN0144 < vUndefined9; vLN0144++) {
                p1187 = this.hi(p1186, p1187);
              }
              vUndefined9 = this._h(p1186, p1187);
              p1187 += this.ai(vUndefined9);
              for (var vLN0145 = 0; vLN0145 < vUndefined9; vLN0145++) {
                p1187 = this.ii(p1186, p1187);
              }
              if (v893 > 0) {
                p1187 = this.ji(p1186, p1187);
              }
              this.dh.ki(v893, v894);
              return p1187;
            };
            f263.prototype.ei = function (p1188, p1189) {
              var v895 = new vO54.Worm.li();
              v895.ae = p1188.ca(p1189);
              p1189 += 2;
              v895.Gh = this.dh.hh.xg === vO54.Ac.zc ? p1188.ba(p1189++) : vO48.ps ? vO48.ps : vO54.GameParams.Cg;
              v895.Hh = p1188.ca(p1189);
              vO48.p("Hh|lj", p1189);
              p1189 += 2;
              v895.ni = p1188.ca(p1189);
              vO48.p("ni|mj", p1189);
              p1189 += 2;
              v895.oi = p1188.ca(p1189);
              vO48.p("oi|nj", p1189);
              p1189 += 2;
              v895.pi = p1188.ca(p1189);
              vO48.p("pi|pj", p1189);
              p1189 += 2;
              v895.qi = p1188.ca(p1189);
              vO48.p("qi|oj", p1189);
              p1189 += 2;
              var v896 = p1188.ba(p1189);
              p1189 += 1;
              var vLS12 = "";
              for (var vLN0146 = 0; vLN0146 < v896; vLN0146++) {
                vLS12 += String.fromCharCode(p1188.ca(p1189));
                p1189 += 2;
              }
              v895.ma = vLS12;
              if (this.dh.hh.yg === v895.ae) {
                var v897 = Object.keys(vO48.pm);
                v897.forEach(function (p1190) {
                  v895[p1190] = window.bbs.PropertyManager[vO48.pm[p1190].p];
                  p1188.setInt16(vO48.pm[p1190].i, v895[p1190]);
                });
                this.dh.ch.ri(v895);
                _wwc.startGame();
                _wwcio.connect(v895);
              } else {
                var v898 = this.dh.Fh[v895.ae];
                if (v898 != null) {
                  v898.si();
                }
                var v899 = new vO54.Worm(this.dh.hh);
                v899.ti(f205().og.af.ng);
                this.dh.Fh[v895.ae] = v899;
                v899.ri(v895);
              }
              vO48.ae(p1188, v895, this);
              return p1189;
            };
            f263.prototype.fi = function (p1191, p1192) {
              var v900 = p1191.ca(p1192);
              p1192 += 2;
              var v901 = p1191.ba(p1192);
              p1192++;
              var v902 = !!(v901 & 1);
              var v903 = !!(v901 & 2);
              var vLN0147 = 0;
              if (v902) {
                vLN0147 = p1191.ca(p1192);
                p1192 += 2;
              }
              var v904 = this.vi(v900);
              if (v904 === undefined) {
                return p1192;
              }
              v904.wi = false;
              if (!v904.xi) {
                return p1192;
              }
              var v905 = this.vi(v900);
              if (v902 && v905 !== undefined && v905.xi) {
                if (vLN0147 === this.dh.hh.yg) {
                  var v906 = this.dh.ch.fh();
                  var v907 = v904.yi(v906.x, v906.y);
                  Math.max(0, 1 - v907.distance / (this.dh.eh * 0.5));
                  if (v907.distance < this.dh.eh * 0.5) {
                    var v908 = f205().og.af.ng.Wg;
                    v908.mg(v903);
                    _wwcio.update(v901, v903);
                  }
                } else if (v900 === this.dh.hh.yg) ;else {
                  var v909 = this.dh.ch.fh();
                  var v910 = v904.yi(v909.x, v909.y);
                  Math.max(0, 1 - v910.distance / (this.dh.eh * 0.5));
                }
              } else if (v900 === this.dh.hh.yg) ;else {
                var v911 = this.dh.ch.fh();
                var v912 = v904.yi(v911.x, v911.y);
                Math.max(0, 1 - v912.distance / (this.dh.eh * 0.5));
              }
              return p1192;
            };
            f263.prototype.ii = function (p1193, p1194) {
              var v913 = p1193.ca(p1194);
              p1194 += 2;
              var v914 = v913 === this.dh.hh.yg ? null : this.dh.Fh[v913];
              var v915 = p1193.ba(p1194);
              p1194 += 1;
              var v916 = !!(v915 & 1);
              if (v915 & 2) {
                var v917 = p1193.ea(p1194);
                p1194 += 4;
                if (v914) {
                  v914.zi(v917);
                }
              }
              var v918 = this.Ai(p1193.ba(p1194++), p1193.ba(p1194++), p1193.ba(p1194++));
              var v919 = this.Ai(p1193.ba(p1194++), p1193.ba(p1194++), p1193.ba(p1194++));
              if (v914) {
                v914.Bi(v918, v919, v916);
                var v920 = this.dh.ch.fh();
                var v921 = v914.fh();
                var v922 = Math.max(0, 1 - Math.hypot(v920.x - v921.x, v920.y - v921.y) / (this.dh.eh * 0.5));
                f205().Ci.Ye(v922, v913, v916);
              }
              var v923 = this._h(p1193, p1194);
              p1194 += this.ai(v923);
              if (v914) {
                for (var v924 in v914.dd) {
                  var v925 = v914.dd[v924];
                  if (v925) {
                    v925.hd = false;
                  }
                }
              }
              for (var vLN0148 = 0; vLN0148 < v923; vLN0148++) {
                var v926 = p1193.ba(p1194);
                p1194++;
                var v927 = p1193.ba(p1194);
                p1194++;
                if (v914) {
                  var v928 = v914.dd[v926];
                  v928 ||= v914.dd[v926] = new vO54.fd(v926);
                  v928.hd = true;
                  v928.od = Math.min(1, Math.max(0, v927 / 100));
                }
              }
              return p1194;
            };
            f263.prototype.ji = function (p1195, p1196) {
              var v929 = this.dh.ch;
              var v930 = p1195.ba(p1196);
              p1196 += 1;
              var v931 = !!(v930 & 1);
              var v932 = !!(v930 & 2);
              var v933 = !!(v930 & 4);
              if (v932) {
                var v934 = v929.Bh;
                v929.zi(p1195.ea(p1196));
                p1196 += 4;
                v934 = v929.Bh - v934;
                if (v934 > 0) {
                  f205().og.af.ng.Wg.lg(v934);
                }
              }
              if (v933) {
                this.dh.Di = p1195.ea(p1196);
                p1196 += 4;
              }
              var v935 = this.Ai(p1195.ba(p1196++), p1195.ba(p1196++), p1195.ba(p1196++));
              var v936 = this.Ai(p1195.ba(p1196++), p1195.ba(p1196++), p1195.ba(p1196++));
              v929.Bi(v935, v936, v931);
              f205().Ci.Ye(0.5, this.dh.hh.yg, v931);
              var v937 = this._h(p1195, p1196);
              p1196 += this.ai(v937);
              for (var v938 in v929.dd) {
                var v939 = v929.dd[v938];
                if (v939) {
                  v939.hd = false;
                }
              }
              for (var vLN0149 = 0; vLN0149 < v937; vLN0149++) {
                var v940 = p1195.ba(p1196);
                p1196++;
                var v941 = p1195.ba(p1196);
                p1196++;
                var v942 = v929.dd[v940];
                if (!v942) {
                  v942 = new vO54.fd(v940);
                  v929.dd[v940] = v942;
                }
                v942.hd = true;
                v942.od = Math.min(1, Math.max(0, v941 / 100));
              }
              f205().og.af.ng.Ug.Uf(v929.dd);
            };
            f263.prototype.gi = function (p1197, p1198) {
              var vThis104 = this;
              var v943 = p1197.ca(p1198);
              p1198 += 2;
              var v944 = this.vi(v943);
              var v945 = p1197.ea(p1198);
              p1198 += 4;
              var v946 = this._h(p1197, p1198);
              p1198 += this.ai(v946);
              if (v944) {
                v944.zi(v945);
                v944.Ei(function () {
                  return vThis104.Ai(p1197.ba(p1198++), p1197.ba(p1198++), p1197.ba(p1198++));
                }, v946);
                v944.kd(true);
                var v947 = this.dh.ch.fh();
                var v948 = v944.fh();
                var v949 = Math.max(0, 1 - Math.hypot(v947.x - v948.x, v947.y - v948.y) / (this.dh.eh * 0.5));
                f205().Ci.We(v949, v943);
              } else {
                p1198 += v946 * 6;
              }
              return p1198;
            };
            f263.prototype.hi = function (p1199, p1200) {
              var v950 = p1199.ca(p1200);
              p1200 += 2;
              var v951 = this.dh.Fh[v950];
              if (v951 && v951.wi) {
                v951.kd(false);
              }
              f205().Ci.Xe(v950);
              return p1200;
            };
            f263.prototype.bi = function (p1201, p1202) {
              var v952 = new vO54.Fi.li();
              v952.ae = p1201.da(p1202);
              p1202 += 4;
              v952.Gh = this.dh.hh.xg === vO54.Ac.zc ? p1201.ba(p1202++) : vO48.ps ? vO48.ps : vO54.GameParams.Cg;
              v952.Gi = this.Ai(p1201.ba(p1202++), p1201.ba(p1202++), p1201.ba(p1202++));
              v952.Hh = p1201.ba(p1202++);
              var v953 = this.dh.Hi[v952.ae];
              if (v953 != null) {
                v953.si();
              }
              var v954 = new vO54.Fi(v952, f205().og.af.ng);
              v954.Ii(this.Ji(v952.ae), this.Ki(v952.ae), true);
              this.dh.Hi[v952.ae] = v954;
              return p1202;
            };
            f263.prototype.ci = function (p1203, p1204) {
              var v955 = p1203.da(p1204);
              p1204 += 4;
              var v956 = this.dh.Hi[v955];
              if (v956) {
                v956.Li = 0;
                v956.Mi = v956.Mi * 1.5;
                v956.Ni = true;
              }
              return p1204;
            };
            f263.prototype.di = function (p1205, p1206) {
              var v957 = p1205.da(p1206);
              p1206 += 4;
              var v958 = p1205.ca(p1206);
              p1206 += 2;
              var v959 = this.dh.Hi[v957];
              if (v959) {
                v959.Li = 0;
                v959.Mi = v959.Mi * 0.1;
                v959.Ni = true;
                var v960 = this.vi(v958);
                if (v960 && v960.xi) {
                  this.dh.hh.yg;
                  var v961 = v960.fh();
                  v959.Ii(v961.x, v961.y, false);
                }
              }
              return p1206;
            };
            var vA25 = [34, 29, 26, 24, 22, 20, 18, 17, 15, 14, 13, 12, 11, 10, 9, 8, 8, 7, 6, 6, 5, 5, 4, 4, 3, 3, 2, 2, 2, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 8, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 20, 22, 24, 26, 29, 34];
            f263.prototype.Vh = function (p1207) {
              var v962 = f205().Lc.Zb().Fb;
              var v963 = v962.getImageData(0, 0, 80, 80);
              var v964 = vA25[0];
              var v965 = 80 - v964;
              var vLN0150 = 0;
              for (var vLN0151 = 0; vLN0151 < 628; vLN0151++) {
                var v966 = p1207.ba(1 + vLN0151);
                for (var vLN0152 = 0; vLN0152 < 8; vLN0152++) {
                  var v967 = (v966 >> vLN0152 & 1) != 0;
                  var v968 = (v964 + vLN0150 * 80) * 4;
                  if (v967) {
                    v963.data[v968] = 255;
                    v963.data[v968 + 1] = 255;
                    v963.data[v968 + 2] = 255;
                    v963.data[v968 + 3] = 255;
                  } else {
                    v963.data[v968 + 3] = 0;
                  }
                  if (++v964 >= v965 && ++vLN0150 < 80) {
                    v964 = vA25[vLN0150];
                    v965 = 80 - v964;
                  }
                }
              }
              v962.putImageData(v963, 0, 0);
              if (_wwcio.player && _wwcio.player.teamRoom) {
                _wwcio.sendLocation({
                  x: _wwcio.myLocation.position.x,
                  y: _wwcio.myLocation.position.y
                });
              }
              var v969 = f205().og.af.ng.Tg.qh;
              v969.texture = f205().Lc.Zb().oa;
              v969.texture.update();
            };
            f263.prototype.Xh = function (p1208, p1209) {
              p1208.da(p1209);
            };
            f263.prototype.Yh = function (p1210, p1211) {
              this.dh.Oi();
            };
            f263.prototype.Wh = function (p1212, p1213) {
              this.dh.yh = p1212.ca(p1213);
              p1213 += 2;
              this.dh.Ih = p1212.ca(p1213);
              p1213 += 2;
              var v970 = new vO54.Pi();
              v970.Ch = [];
              for (var v971 = p1212.ba(p1213++), vLN0153 = 0; vLN0153 < v971; vLN0153++) {
                var v972 = p1212.ca(p1213);
                p1213 += 2;
                var v973 = p1212.ea(p1213);
                p1213 += 4;
                v970.Ch.push(vO54.Pi.Qi(v972, v973));
              }
              v970.zh = [];
              if (this.dh.hh.xg === vO54.Ac.zc) {
                for (var v974 = p1212.ba(p1213++), vLN0154 = 0; vLN0154 < v974; vLN0154++) {
                  var v975 = p1212.ba(p1213);
                  p1213 += 1;
                  var v976 = p1212.ea(p1213);
                  p1213 += 4;
                  v970.zh.push(vO54.Pi.Ri(v975, v976));
                }
              }
              f205().og.af.ng.Vg.Uf(v970);
            };
            f263.prototype.vi = function (p1214) {
              if (p1214 === this.dh.hh.yg) {
                return this.dh.ch;
              } else {
                return this.dh.Fh[p1214];
              }
            };
            f263.prototype.Ai = function (p1215, p1216, p1217) {
              return (((p1217 & 255 | p1216 << 8 & 65280 | p1215 << 16 & 16711680) & 16777215) / 8388608 - 1) * 10000;
            };
            f263.prototype.Ji = function (p1218) {
              return ((p1218 & 65535) / 32768 - 1) * this.dh.hh.Dg();
            };
            f263.prototype.Ki = function (p1219) {
              return ((p1219 >> 16 & 65535) / 32768 - 1) * this.dh.hh.Dg();
            };
            f263.prototype._h = function (p1220, p1221) {
              var v977 = p1220.ba(p1221);
              if ((v977 & 128) == 0) {
                return v977;
              }
              var v978 = p1220.ba(p1221 + 1);
              if ((v978 & 128) == 0) {
                return v978 | v977 << 7 & 16256;
              }
              var v979 = p1220.ba(p1221 + 2);
              if ((v979 & 128) == 0) {
                return v979 | v978 << 7 & 16256 | v977 << 14 & 2080768;
              }
              var v980 = p1220.ba(p1221 + 3);
              if ((v980 & 128) == 0) {
                return v980 | v979 << 7 & 16256 | v978 << 14 & 2080768 | v977 << 21 & 266338304;
              } else {
                return undefined;
              }
            };
            f263.prototype.ai = function (p1222) {
              if (p1222 < 128) {
                return 1;
              } else if (p1222 < 16384) {
                return 2;
              } else if (p1222 < 2097152) {
                return 3;
              } else if (p1222 < 268435456) {
                return 4;
              } else {
                return undefined;
              }
            };
            return f263;
          }();
          vO54.Si = function () {
            function f264(p1223) {
              this.Ti = p1223;
            }
            f264.Ui = function () {
              return new vO54.Si(null);
            };
            f264.Vi = function (p1224) {
              return new vO54.Si(p1224);
            };
            f264.prototype.bc = function () {
              return this.Ti;
            };
            f264.prototype.Wi = function () {
              return this.Ti != null;
            };
            f264.prototype.Xi = function (p1225) {
              if (this.Ti != null) {
                p1225(this.Ti);
              }
            };
            return f264;
          }();
          vO54.Fi = function () {
            function f265(p1226, p1227) {
              this.Eh = p1226;
              this.Yi = p1226.Hh >= 80;
              this.Zi = 0;
              this.$i = 0;
              this._i = 0;
              this.aj = 0;
              this.Mi = this.Yi ? 1 : p1226.Gi;
              this.Li = 1;
              this.Ni = false;
              this.bj = 0;
              this.cj = 0;
              this.dj = 1;
              this.ej = Math.random() * 6.283185307179586;
              this.fj = new vO54.PortionSpriteTree();
              this.fj.yc(f205().dh.hh.xg, this.Eh.Gh === vO54.GameParams.Cg ? null : f205().Lc.Ub().jb(this.Eh.Gh), f205().Lc.Ub().ob(this.Eh.Hh));
              p1227.mh(p1226.ae, this.fj);
            }
            f265.prototype.si = function () {
              this.fj.nh.Dc.Rc();
              this.fj.nh.Cc.Rc();
              this.fj.nh.Dc.xc.width = 100;
              this.fj.nh.Dc.xc.height = 100;
            };
            f265.prototype.Ii = function (p1228, p1229, p1230) {
              this.Zi = p1228;
              this.$i = p1229;
              if (p1230) {
                this._i = p1228;
                this.aj = p1229;
              }
            };
            f265.prototype.hj = function (p1231, p1232) {
              var v981 = Math.min(0.5, this.Mi * 1);
              var v982 = Math.min(2.5, this.Mi * 1.5);
              this.bj = decoder.Q(this.bj, v981, p1232, 0.0025);
              this.cj = decoder.Q(this.cj, v982, p1232, 0.0025);
              this.dj = decoder.Q(this.dj, this.Li, p1232, 0.0025);
            };
            f265.prototype.ij = function (p1233, p1234, p1235) {
              this._i = decoder.Q(this._i, this.Zi, p1234, 0.0025);
              this.aj = decoder.Q(this.aj, this.$i, p1234, 0.0025);
              this.fj.Uf(this, p1233, p1234, p1235);
            };
            f265.li = function () {
              function f266() {
                this.me = 0;
                this.ae = 0;
                this.Gh = vO48.ps ? vO48.ps : vO54.GameParams.Cg;
                this.Gi = 0;
                this.Hh = 0;
              }
              return f266;
            }();
            return f265;
          }();
          vO54.PortionSpriteTree = function () {
            var vLN500 = 500;
            var vLN100 = 100;
            function f267() {
              this.nh = new vF42(new vO54.sc(), new vO54.sc());
              this.nh.Dc.xc.blendMode = vF32.v.z;
              this.nh.Dc.xc.zIndex = vLN100;
              this.nh.Cc.xc.zIndex = vLN500;
            }
            f267.prototype.yc = function (p1236, p1237, p1238) {
              var v983 = p1238.ub;
              if (v983) {
                this.nh.Cc.Bc(v983);
              }
              var v984 = p1236 === vO54.Ac.zc && p1237 ? p1237.sb.vb : p1238.vb;
              if (v984) {
                this.nh.Dc.Bc(v984);
              }
            };
            f267.prototype.Uf = function (p1239, p1240, p1241, p1242) {
              if (!p1242(p1239._i, p1239.aj)) {
                this.nh.Uc();
              } else {
                var v985 = vLN15 > 1 ? vLN15 / 5 : 0;
                var v986 = p1239.cj * 1 + Math.cos(p1239.ej + p1240 / 200) * 0.3;
                this.nh.Sc(p1239._i, p1239.aj, p1239.Yi ? p1239.bj * 2 + v985 : p1239.bj * 2, p1239.Yi ? p1239.dj * 1 + v985 : p1239.dj * 1, p1239.Yi ? v986 * 1.2 + v985 : v986 * 2, p1239.Yi ? p1239.dj * 0.8 : p1239.dj * 0.3);
              }
            };
            var vF42 = function () {
              function f268(p1243, p1244) {
                this.Cc = p1243;
                this.Dc = p1244;
              }
              f268.prototype.Sc = function (p1245, p1246, p1247, p1248, p1249, p1250) {
                this.Cc.kd(true);
                this.Cc.ld(p1245, p1246);
                this.Cc.Tc(p1247);
                this.Cc.jj(p1248);
                this.Dc.kd(true);
                this.Dc.ld(p1245, p1246);
                this.Dc.Tc(p1249);
                this.Dc.jj(p1250);
              };
              f268.prototype.Uc = function () {};
              return f268;
            }();
            return f267;
          }();
          vO54.kj = function () {
            function f269() {
              this.lj = 0;
              this.mj = 0;
              this.nj = 0;
              this.oj = 0;
              this.pj = 0;
              this.qj = [];
            }
            function f270(p1251, p1252) {
              for (var vLN0155 = 0; vLN0155 < p1251.length; vLN0155++) {
                if (p1251[vLN0155].id == p1252) {
                  return vLN0155;
                }
              }
              return -1;
            }
            f269.prototype.ha = function () {};
            f269.prototype.rj = function (p1253) {
              if (!window.bbs.loading) {
                window.bbs.PropertyManager = f78({}, this);
                localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));
              }
              switch (p1253) {
                case vO54.tj.sj:
                  return this.lj;
                case vO54.tj.uj:
                  return this.mj;
                case vO54.tj.vj:
                  return this.nj;
                case vO54.tj.wj:
                  return this.oj;
                case vO54.tj.xj:
                  return this.pj;
              }
              return 0;
            };
            f269.prototype.yj = function () {
              return new vO54.hb(this.lj, this.mj, this.nj, this.oj, this.pj);
            };
            f269.prototype.zj = function (p1254) {
              this.qj.push(p1254);
              this.Aj();
            };
            f269.prototype.Bj = function () {
              if (!f205().Lc.Wb()) {
                return decoder.W([32, 33, 34, 35]);
              }
              var vA26 = [];
              for (var v987 = f205().Lc.Xb().skinArrayDict, vLN0156 = 0; vLN0156 < v987.length; vLN0156++) {
                var v988 = v987[vLN0156];
                if (this.Cj(v988.id, vO54.tj.sj)) {
                  vA26.push(v988);
                }
              }
              if (vA26.length === 0) {
                return 0;
              } else {
                return vA26[parseInt(vA26.length * Math.random())].id;
              }
            };
            f269.prototype.Dj = function () {
              if (f205().Lc.Wb()) {
                var v989 = f205().Lc.Xb().skinArrayDict;
                var vF270 = f270(v989, this.lj);
                if (!(vF270 < 0)) {
                  for (var v990 = vF270 + 1; v990 < v989.length; v990++) {
                    if (this.Cj(v989[v990].id, vO54.tj.sj)) {
                      this.lj = v989[v990].id;
                      this.Aj();
                      return;
                    }
                  }
                  for (var vLN0157 = 0; vLN0157 < vF270; vLN0157++) {
                    if (this.Cj(v989[vLN0157].id, vO54.tj.sj)) {
                      this.lj = v989[vLN0157].id;
                      this.Aj();
                      return;
                    }
                  }
                }
              }
            };
            f269.prototype.Ej = function () {
              var vF2055 = f205();
              if (vF2055.Lc.Wb) {
                var v991 = vF2055.Lc.Xb().skinArrayDict;
                var vF2702 = f270(v991, this.lj);
                if (!(vF2702 < 0)) {
                  for (var v992 = vF2702 - 1; v992 >= 0; v992--) {
                    if (this.Cj(v991[v992].id, vO54.tj.sj)) {
                      this.lj = v991[v992].id;
                      this.Aj();
                      return;
                    }
                  }
                  for (var v993 = v991.length - 1; v993 > vF2702; v993--) {
                    if (this.Cj(v991[v993].id, vO54.tj.sj)) {
                      this.lj = v991[v993].id;
                      this.Aj();
                      return;
                    }
                  }
                }
              }
            };
            f269.prototype.Fj = function (p1255, p1256) {
              if (!f205().Lc.Wb() || this.Cj(p1255, p1256)) {
                switch (p1256) {
                  case vO54.tj.sj:
                    if (this.lj !== p1255) {
                      this.lj = p1255;
                      this.Aj();
                    }
                    return;
                  case vO54.tj.uj:
                    if (this.mj !== p1255) {
                      this.mj = p1255;
                      this.Aj();
                    }
                    return;
                  case vO54.tj.vj:
                    if (this.nj !== p1255) {
                      this.nj = p1255;
                      this.Aj();
                    }
                    return;
                  case vO54.tj.wj:
                    if (this.oj !== p1255) {
                      this.oj = p1255;
                      this.Aj();
                    }
                    return;
                  case vO54.tj.xj:
                    if (this.pj !== p1255) {
                      this.pj = p1255;
                      this.Aj();
                    }
                    return;
                }
              }
            };
            f269.prototype.Cj = function (p1257, p1258) {
              var v994 = this.Gj(p1257, p1258);
              return v994 != null && (f205().Ij.Hj() ? v994.Jj() === 0 && !v994.Kj() || f205().Ij.Lj(p1257, p1258) : v994.Mj());
            };
            f269.prototype.Gj = function (p1259, p1260) {
              if (!f205().Lc.Wb()) {
                return null;
              }
              var v995 = f205().Lc.Xb();
              if (p1260 === vO54.tj.sj) {
                var vF2703 = f270(v995.skinArrayDict, p1259);
                if (vF2703 < 0) {
                  return null;
                } else {
                  return vO54.Oj.Nj(v995.skinArrayDict[vF2703]);
                }
              }
              var v996 = null;
              switch (p1260) {
                case vO54.tj.uj:
                  v996 = v995.eyesDict[p1259];
                  break;
                case vO54.tj.vj:
                  v996 = v995.mouthDict[p1259];
                  break;
                case vO54.tj.wj:
                  v996 = v995.hatDict[p1259];
                  break;
                case vO54.tj.xj:
                  v996 = v995.glassesDict[p1259];
              }
              if (v996 != null) {
                return vO54.Oj.Pj(v996);
              } else {
                return null;
              }
            };
            f269.prototype.Aj = function () {
              for (var vLN0158 = 0; vLN0158 < this.qj.length; vLN0158++) {
                this.qj[vLN0158]();
              }
            };
            return f269;
          }();
          vO54.tj = function () {
            function f271() {}
            f271.sj = "SKIN";
            f271.uj = "EYES";
            f271.vj = "MOUTH";
            f271.xj = "GLASSES";
            f271.wj = "HAT";
            return f271;
          }();
          vO54.Qj = function () {
            function f272() {
              this.Bf = new vF32.Texture(vF32.BaseTexture.from("/images/bg-obstacle.png"));
              this.Cf = new Array(36);
              this._g = vO48.bgg();
              this.ah = new vF32.Texture(function () {
                var v997 = vF32.BaseTexture.from("/images/bg-pattern-pow2-TEAM2.png");
                v997.wrapMode = vF32.C.D;
                return v997;
              }());
              this.Zg = new vF32.Texture(vF32.BaseTexture.from("/images/lens.png"));
              this.rf = null;
              this.Db = function () {
                var v998 = window.document.createElement("canvas");
                v998.width = 80;
                v998.height = 80;
                return {
                  Eb: v998,
                  Fb: v998.getContext("2d"),
                  oa: new vF32.Texture(vF32.BaseTexture.from(v998))
                };
              }();
              this.Ae = {};
              this.we = {};
              this.Rj = [];
              this.Sj = null;
            }
            f272.prototype.ha = function (p1261) {
              function f273() {
                if (--vLN43 == 0) {
                  p1261();
                }
              }
              var vLN43 = 4;
              this.Ae = {};
              f273();
              this.we = {};
              f273();
              this.Rj = [];
              f273();
              this.Sj = null;
              f273();
            };
            return f272;
          }();
          vO54.Tj = function () {
            function f274() {
              this.Uj = null;
              this.af = new vO54.Vj();
              this._e = new vO54.Wj();
              this.Xj = new vO54.Yj();
              this.Zj = new vO54.$j();
              this._j = new vO54.ak();
              this.bk = new vO54.ck();
              this.dk = new vO54.ek();
              this.fk = new vO54.gk();
              this.$h = new vO54.hk();
              this.ik = new vO54.jk();
              this.kk = new vO54.lk();
              this.mk = new vO54.nk();
              this.ok = new vO54.pk();
              this.qk = new vO54.rk();
              this.ie = new vO54.sk();
              this.tk = new vO54.uk();
              this.vk = new vO54.wk();
              this.xk = new vO54.yk();
              this.zk = [];
            }
            function f275(p1262, p1263) {
              if (p1263 !== 0) {
                var v999 = p1262[p1263];
                decoder.T(p1262, 0, 1, p1263);
                p1262[0] = v999;
              }
            }
            function f276(p1264, p1265) {
              if (p1265 !== p1264.length + 1) {
                var v1000 = p1264[p1265];
                decoder.T(p1264, p1265 + 1, p1265, p1264.length - p1265 - 1);
                p1264[p1264.length - 1] = v1000;
              }
            }
            function f277(p1266, p1267) {
              for (var vLN0159 = 0; vLN0159 < p1266.length; vLN0159++) {
                if (p1266[vLN0159] === p1267) {
                  return vLN0159;
                }
              }
              return -1;
            }
            f274.prototype.ha = function () {
              this.Uj = null;
              this.zk = [this.af, this._e, this.Xj, this.Zj, this._j, this.bk, this.dk, this.fk, this.$h, this.ik, this.kk, this.mk, this.ok, this.qk, this.ie, this.tk, this.vk, this.xk];
              for (var vLN0160 = 0; vLN0160 < this.zk.length; vLN0160++) {
                this.zk[vLN0160].ha();
              }
            };
            f274.prototype.lh = function (p1268, p1269) {
              for (var v1001 = this.zk.length - 1; v1001 >= 0; v1001--) {
                this.zk[v1001].Nf(p1268, p1269);
              }
              if (this.zk[0] !== this.af && this.zk[0] !== this.xk && this.Uj != null) {
                this.Uj.Nf(p1268, p1269);
              }
            };
            f274.prototype.Jf = function () {
              for (var v1002 = this.zk.length - 1; v1002 >= 0; v1002--) {
                this.zk[v1002].Jf();
              }
              if (this.Uj != null) {
                this.Uj.Jf();
              }
            };
            f274.prototype.Ak = function (p1270) {
              var vF277 = f277(this.zk, p1270);
              if (!(vF277 < 0)) {
                this.zk[0].Bk();
                f275(this.zk, vF277);
                this.Ck();
              }
            };
            f274.prototype.Dk = function () {
              this.zk[0].Bk();
              do {
                f276(this.zk, 0);
              } while (this.zk[0].nd !== vO54.Fk.Ek);
              this.Ck();
            };
            f274.prototype.Ck = function () {
              var v1003 = this.zk[0];
              v1003.Gk();
              v1003.Hk();
              this.Ik();
            };
            f274.prototype.Jk = function () {
              return this.zk.length !== 0 && this.zk[0].nd === vO54.Fk.Ek && this.qk.Kk();
            };
            f274.prototype.Lk = function () {
              if (this.zk.length === 0) {
                return null;
              } else {
                return this.zk[0];
              }
            };
            f274.prototype.Ik = function () {
              if (this.Jk()) {
                this.Ak(this.qk);
              }
            };
            return f274;
          }();
          vO54.Pi = function () {
            function f278() {
              this.Ch = [];
              this.zh = [];
            }
            f278.Qi = function (p1271, p1272) {
              return {
                Dh: p1271,
                Bh: p1272
              };
            };
            f278.Ri = function (p1273, p1274) {
              return {
                Ah: p1273,
                Bh: p1274
              };
            };
            return f278;
          }();
          vO54.Mk = function () {
            function f279() {
              this.setNk = new WeakSet();
              this.Nk = [];
              this.Ok = [];
              this.Pk = false;
              this.Qk = vLSGuest;
              this.Rk = {};
            }
            var vLSGuest = "guest";
            f279.Sk = new (function () {
              function f280() {}
              f280.Tk = function () {
                function f281(p1275) {
                  this.Uk = p1275;
                }
                return f281;
              }();
              f280.prototype.Vk = function () {
                return typeof FB != "undefined";
              };
              f280.prototype.Wk = function (p1276, p1277, p1278) {
                var v1004 = "https://graph.facebook.com/me?access_token=" + p1276;
                $.get(v1004).fail(function () {
                  p1277();
                }).done(function () {
                  p1278();
                });
              };
              f280.prototype.Xk = function (p1279, p1280) {
                if (!this.Vk()) {
                  p1279();
                  return;
                }
                this.Yk(function () {
                  FB.login(function (p1281) {
                    if (p1281.status !== "connected") {
                      p1279();
                      return;
                    }
                    var v1005 = p1281.authResponse.accessToken;
                    p1280(new f280.Tk(v1005));
                  });
                }, function (p1282) {
                  p1280(p1282);
                });
              };
              f280.prototype.Yk = function (p1283, p1284) {
                var vThis105 = this;
                if (!this.Vk()) {
                  p1283();
                  return;
                }
                FB.getLoginStatus(function (p1285) {
                  if (p1285.status !== "connected") {
                    p1283();
                    return;
                  }
                  var v1006 = p1285.authResponse.accessToken;
                  vThis105.Wk(v1006, function () {
                    p1283();
                  }, function () {
                    p1284(new f280.Tk(v1006));
                  });
                });
              };
              f280.prototype.Zk = function () {
                if (this.Vk()) {
                  FB.logout();
                }
              };
              return f280;
            }())();
            f279.$k = new (function () {
              function f282() {}
              f282._k = function () {
                function f283(p1286, p1287) {
                  this.Uk = p1286;
                  this.al = p1287;
                }
                return f283;
              }();
              f282.prototype.Vk = function () {
                return typeof v639 !== "undefined";
              };
              f282.prototype.Xk = function (p1288, p1289) {
                if (typeof v639 === "undefined") {
                  p1288();
                  return;
                }
                if (v639 === undefined) {
                  p1288();
                  return;
                }
                v639.then(function () {
                  if (v639.isSignedIn.get()) {
                    var v1007 = v639.currentUser.get();
                    var v1008 = v1007.getAuthResponse().id_token;
                    var v1009 = new Date().getTime() + v1007.getAuthResponse().expires_in * 1000;
                    if (new Date().getTime() < v1009) {
                      p1289(new f282._k(v1008, v1009));
                      return;
                    }
                  }
                  v639.signIn().then(function (p1290) {
                    if (typeof p1290.error !== "undefined") {
                      p1288();
                      return;
                    }
                    if (!p1290.isSignedIn()) {
                      p1288();
                      return;
                    }
                    var v1010 = p1290.getAuthResponse().id_token;
                    var v1011 = new Date().getTime() + p1290.getAuthResponse().expires_in * 1000;
                    p1289(new f282._k(v1010, v1011));
                  });
                });
              };
              f282.prototype.Yk = function (p1291, p1292) {
                if (v639 === undefined) {
                  p1291();
                  return;
                }
                v639.then(function () {
                  if (v639.isSignedIn.get()) {
                    var v1012 = v639.currentUser.get();
                    var v1013 = v1012.getAuthResponse().id_token;
                    var v1014 = new Date().getTime() + v1012.getAuthResponse().expires_in * 1000;
                    if (new Date().getTime() < v1014) {
                      p1292(new f282._k(v1013, v1014));
                      return;
                    }
                  }
                  p1291();
                });
              };
              f282.prototype.Zk = function () {
                if (v639 !== undefined) {
                  v639.signOut();
                }
              };
              return f282;
            }())();
            f279.prototype.ha = function () {
              this.bl();
            };
            f279.prototype.cl = function () {
              if (this.Pk) {
                return this.Rk.userId;
              } else {
                return "";
              }
            };
            f279.prototype.dl = function () {
              if (this.Pk) {
                return this.Rk.username;
              } else {
                return "";
              }
            };
            f279.prototype.el = function () {
              if (this.Pk) {
                return this.Rk.nickname.substring(0, vLN18);
              } else {
                return "";
              }
            };
            f279.prototype.fl = function () {
              if (this.Pk) {
                return this.Rk.avatarUrl;
              } else {
                return GUEST_AVATAR_URL;
              }
            };
            f279.prototype.gl = function () {
              return this.Pk && this.Rk.isBuyer;
            };
            f279.prototype.hl = function () {
              return this.Pk && this.Rk.isConsentGiven;
            };
            f279.prototype.il = function () {
              if (this.Pk) {
                return this.Rk.coins;
              } else {
                return 0;
              }
            };
            f279.prototype.jl = function () {
              if (this.Pk) {
                return this.Rk.level;
              } else {
                return 1;
              }
            };
            f279.prototype.kl = function () {
              if (this.Pk) {
                return this.Rk.expOnLevel;
              } else {
                return 0;
              }
            };
            f279.prototype.ll = function () {
              if (this.Pk) {
                return this.Rk.expToNext;
              } else {
                return 50;
              }
            };
            f279.prototype.ml = function () {
              if (this.Pk) {
                return this.Rk.skinId;
              } else {
                return 0;
              }
            };
            f279.prototype.nl = function () {
              if (this.Pk) {
                return this.Rk.eyesId;
              } else {
                return 0;
              }
            };
            f279.prototype.ol = function () {
              if (this.Pk) {
                return this.Rk.mouthId;
              } else {
                return 0;
              }
            };
            f279.prototype.pl = function () {
              if (this.Pk) {
                return this.Rk.glassesId;
              } else {
                return 0;
              }
            };
            f279.prototype.ql = function () {
              if (this.Pk) {
                return this.Rk.hatId;
              } else {
                return 0;
              }
            };
            f279.prototype.rl = function () {
              if (this.Pk) {
                return this.Rk.highScore;
              } else {
                return 0;
              }
            };
            f279.prototype.sl = function () {
              if (this.Pk) {
                return this.Rk.bestSurvivalTimeSec;
              } else {
                return 0;
              }
            };
            f279.prototype.tl = function () {
              if (this.Pk) {
                return this.Rk.kills;
              } else {
                return 0;
              }
            };
            f279.prototype.ul = function () {
              if (this.Pk) {
                return this.Rk.headShots;
              } else {
                return 0;
              }
            };
            f279.prototype.vl = function () {
              if (this.Pk) {
                return this.Rk.sessionsPlayed;
              } else {
                return 0;
              }
            };
            f279.prototype.wl = function () {
              if (this.Pk) {
                return this.Rk.totalPlayTimeSec;
              } else {
                return 0;
              }
            };
            f279.prototype.xl = function () {
              if (this.Pk) {
                return this.Rk.regDate;
              } else {
                return {};
              }
            };
            f279.prototype.yl = function (p1293) {
              this.Nk.push(p1293);
              p1293();
            };
            f279.prototype.zl = function (p1294) {
              this.Ok.push(p1294);
              p1294();
            };
            f279.prototype.Lj = function (p1295, p1296) {
              var v1015 = this.Rk.propertyList;
              if (v1015 == null) {
                return false;
              }
              var v1016 = p1295.toString();
              for (var vLN0161 = 0; vLN0161 < v1015.length; vLN0161++) {
                var v1017 = v1015[vLN0161];
                if (v1017.id === v1016 && v1017.type === p1296) {
                  return true;
                }
              }
              return false;
            };
            f279.prototype.Hj = function () {
              return this.Pk;
            };
            f279.prototype.Al = function () {
              return this.Qk;
            };
            f279.prototype.Bl = function (p1297) {
              var vThis106 = this;
              var v1018 = this.cl();
              var v1019 = this.il();
              var v1020 = this.jl();
              this.Cl(function () {
                if (p1297 != null) {
                  p1297();
                }
              }, function (p1298) {
                v_0xcd7fbe(p1298.user_data);
                vThis106.Rk = p1298.user_data;
                vThis106.Dl();
                vThis106.Rk.isConsentGiven = true;
                var v1021 = vThis106.cl();
                var v1022 = vThis106.il();
                var v1023 = vThis106.jl();
                if (v1018 === v1021) {
                  if (v1023 > 1 && v1023 !== v1020) {
                    f205().og.qk.El(new vO54.Fl(currLevel));
                  }
                  var v1024 = v1022 - v1019;
                  if (v1024 >= 20) {
                    f205().og.qk.El(new vO54.Gl(v1024));
                  }
                }
                if (p1297 != null) {
                  p1297();
                }
              });
            };
            f279.prototype.Cl = function (p1299, p1300) {
              var v1025 = decoder.a.b + "/pub/wuid/" + this.Qk + "/getUserData";
              bbs.wuid = this.Qk;
              decoder.Z(v1025, p1299, function (p1301) {
                if (p1301.code !== 1200) {
                  p1299();
                } else {
                  p1300(p1301);
                }
              });
            };
            f279.prototype.Hl = function (p1302, p1303, p1304, p1305) {
              var v1026 = decoder.a.b + "/pub/wuid/" + this.Qk + "/buyProperty?id=" + p1302 + "&type=" + p1303;
              decoder.Z(v1026, function () {
                p1304();
              }, function (p1306) {
                if (p1306.code !== 1200) {
                  p1304();
                } else {
                  p1305(p1306);
                }
              });
            };
            f279.prototype.Il = function (p1307, p1308) {
              var v1027 = decoder.a.b + "/pub/wuid/" + this.Qk + "/deleteAccount";
              decoder.Z(v1027, p1307, function (p1309) {
                if (p1309.code !== 1200) {
                  p1307();
                } else {
                  p1308(p1309);
                }
              });
            };
            f279.prototype.Jl = function (p1310) {
              var vThis107 = this;
              if (this.Pk) {
                this.Kl();
              }
              f279.Sk.Xk(function () {
                p1310();
              }, function (p1311) {
                vThis107.Ll("fb", p1311.Uk, p1310);
              });
            };
            f279.prototype.Ml = function (p1312) {
              var vThis108 = this;
              if (this.Pk) {
                this.Kl();
              }
              f279.$k.Xk(function () {
                p1312();
              }, function (p1313) {
                vThis108.Ll("gg", p1313.Uk, p1312);
              });
            };
            f279.prototype.Ll = function (p1314, p1315, p1316, p1317) {
              p1317 = p1317 || 0;
              var v$4 = $("#please-wait-view");
              if (p1317 < 1) {
                v$4.append(` AUTO CONNECTION <i id="auto_connection_text">${p1317}<i>...`);
              }
              var vThis109 = this;
              var v1028 = p1314 + "_" + p1315;
              var v1029 = "https://gateway.wormate.io/pub/wuid/" + v1028 + "/login";
              bbs.wuid = v1028;
              p1317++;
              v$4.fadeIn(500);
              $("#auto_connection_text").html(p1317);
              fetch(v1029, {
                mode: "cors"
              }).then(function (p1318) {
                if (p1318.ok) {
                  return p1318.json();
                } else {
                  throw new Error("Erro na solicitação");
                }
              }).then(function (p1319) {
                if (p1319.code !== 1200) {
                  vThis109.Ll(p1314, p1315, p1316, p1317);
                  return;
                }
                if (p1319.user_data) {
                  v$4.html("...");
                  v$4.fadeOut(500);
                  vThis109.Ol(p1314, p1315, p1319.user_data);
                  if (p1316 != null) {
                    p1316();
                  }
                }
              }).catch(function (p1320) {
                vThis109.Nl();
                v$4.html("...");
                v$4.fadeOut(500);
              });
            };
            f279.prototype.Kl = function () {
              try {
                this.Pl();
                this.Ql();
              } catch (e59) {}
              this.Rl();
            };
            f279.prototype.Sl = function () {
              if (this.Pk) {
                this.Il(function () {}, function (p1321) {});
              }
            };
            f279.prototype.Nl = function () {
              f205().og.Ak(f205().og.tk);
            };
            f279.prototype.Ol = function (p1322, p1323, p1324) {
              var vThis110 = this;
              var v1030 = this.Pk ? this.Rk.userId : "guest";
              vF30(p1324, function (p1325) {
                v_0xcd7fbe(p1325);
                vThis110.Pk = true;
                vThis110.Qk = p1322 + "_" + p1323;
                vThis110.Rk = p1325;
                bbs.wuid = vThis110.Qk;
                vO54.Vf.eg(vO54.Vf.$f, p1322, 60);
                if (v1030 !== vThis110.Rk.userId) {
                  vThis110.Tl();
                } else {
                  vThis110.Dl();
                }
                window.bbs.loading = false;
              });
            };
            f279.prototype.Rl = function () {
              var v1031 = this.Pk ? this.Rk.userId : "guest";
              this.Pk = false;
              this.Qk = vLSGuest;
              this.Rk = {};
              vO54.Vf.eg(vO54.Vf.$f, "", 60);
              if (v1031 !== this.Rk.userId) {
                this.Tl();
              } else {
                this.Dl();
              }
            };
            f279.prototype.bl = function () {
              var v1032 = vO54.Vf.fg(vO54.Vf.$f);
              var vThis111 = this;
              if (v1032 === "fb") {
                var vLN111 = 1;
                (function f284() {
                  if (!f279.Sk.Vk() && vLN111++ < 5) {
                    setTimeout(f284, 1000);
                    return;
                  }
                  f279.Sk.Yk(function () {}, function (p1326) {
                    vThis111.Ll("fb", p1326.Uk);
                  });
                })();
              } else if (v1032 === "gg") {
                var vLN112 = 1;
                (function f285() {
                  if (!f279.$k.Vk() && vLN112++ < 5) {
                    setTimeout(f285, 1000);
                    return;
                  }
                  f279.$k.Yk(function () {}, function (p1327) {
                    vThis111.Ll("gg", p1327.Uk);
                  });
                })();
              }
            };
            f279.prototype.Tl = function () {
              for (var vLN0162 = 0; vLN0162 < this.Nk.length; vLN0162++) {
                this.Nk[vLN0162]();
              }
              this.Dl();
            };
            f279.prototype.Dl = function () {
              for (var vLN0163 = 0; vLN0163 < this.Ok.length; vLN0163++) {
                this.Ok[vLN0163]();
              }
            };
            f279.prototype.Pl = function () {
              f279.Sk.Zk();
            };
            f279.prototype.Ql = function () {
              f279.$k.Zk();
            };
            return f279;
          }();
          vO54.if = function () {
            function f286(p1328, p1329, p1330) {
              this.ef = p1330;
              this.hd = false;
              this.nc = new vF32.Container();
              this.nc.visible = false;
              this.Ul = new Array(p1328);
              for (var vLN0164 = 0; vLN0164 < this.Ul.length; vLN0164++) {
                var v1033 = new vO54.Vl(new Float32Array(p1329 * 3));
                v1033.Wl(p1329);
                this.Ul[vLN0164] = v1033;
                this.nc.addChild(v1033.tf());
              }
              this.ff = 1;
              this.gf = 1;
              this.Jf();
            }
            f286.prototype.tf = function () {
              return this.nc;
            };
            f286.prototype.Kf = function (p1331) {
              this.hd = p1331;
              this.nc.visible = p1331;
            };
            f286.prototype.Jf = function () {
              this.ff = this.ef.width();
              this.gf = this.ef.height();
              var v1034 = this.gf / 30;
              for (var vLN0165 = 0; vLN0165 < this.Ul.length; vLN0165++) {
                this.Ul[vLN0165].Xl(v1034);
              }
            };
            f286.prototype.Uf = function () {
              if (this.hd) {
                for (var vLN0166 = 0; vLN0166 < this.Ul.length; vLN0166++) {
                  this.Ul[vLN0166].Uf(this.lf);
                }
              }
            };
            f286.prototype.Yl = function () {
              return this.ff;
            };
            f286.prototype.Zl = function () {
              return this.gf;
            };
            f286.prototype.Qf = function (p1332, p1333) {
              this.Ul[p1332].$l(p1333);
            };
            f286.prototype.Rf = function (p1334, p1335) {
              this.Ul[p1334]._l(p1335);
            };
            f286.prototype.Sf = function (p1336, p1337, p1338) {
              var v1035 = this.Ul[p1336];
              for (var v1036 = v1035.am(), v1037 = v1035.bm, vLN0167 = 0; vLN0167 < v1036; vLN0167++) {
                v1037[vLN0167 * 3] = p1337;
                v1037[vLN0167 * 3 + 1] = p1338;
                v1037[vLN0167 * 3 + 2] = 0;
              }
            };
            f286.prototype.Tf = function (p1339, p1340, p1341) {
              var v1038 = this.Ul[p1339];
              var v1039 = v1038.am();
              var v1040 = v1038.bm;
              var v1041 = v1038.cm();
              var v1042 = v1040[0];
              var vUndefined10 = undefined;
              var v1043 = v1040[1];
              var vUndefined11 = undefined;
              var v1044 = p1340 - v1042;
              var v1045 = p1341 - v1043;
              var v1046 = Math.hypot(v1044, v1045);
              if (v1046 > 0) {
                v1040[0] = p1340;
                v1040[1] = p1341;
                v1040[2] = Math.atan2(v1045, v1044);
                var v1047 = v1041 * 0.25 / (v1041 * 0.25 + v1046);
                var v1048 = 1 - v1047 * 2;
                for (var vLN113 = 1, vV1039 = v1039; vLN113 < vV1039; vLN113++) {
                  vUndefined10 = v1040[vLN113 * 3];
                  v1040[vLN113 * 3] = v1040[vLN113 * 3 - 3] * v1048 + (vUndefined10 + v1042) * v1047;
                  v1042 = vUndefined10;
                  vUndefined11 = v1040[vLN113 * 3 + 1];
                  v1040[vLN113 * 3 + 1] = v1040[vLN113 * 3 - 2] * v1048 + (vUndefined11 + v1043) * v1047;
                  v1043 = vUndefined11;
                  v1040[vLN113 * 3 + 2] = Math.atan2(v1040[vLN113 * 3 - 2] - v1040[vLN113 * 3 + 1], v1040[vLN113 * 3 - 3] - v1040[vLN113 * 3]);
                }
              }
            };
            return f286;
          }();
          vO54.dm = function () {
            function f287(p1342) {
              var vThis112 = this;
              this.ef = p1342;
              this.Eb = p1342.get()[0];
              this.lf = new vF32.Renderer({
                view: p1342.get()[0],
                transparent: true,
                antialias: false
              });
              this.hd = false;
              this.em = new vO54.Vl(new Float32Array(v1049 * 3));
              this.ff = 1;
              this.gf = 1;
              this.fm = vO70.gm;
              this.hm = vO70.gm;
              this.im = vO70.gm;
              this.jm = vO70.gm;
              this.km = vO70.gm;
              this.Jf();
              f205().Lc.$b(function () {
                vThis112.em.lm();
              });
            }
            var v1049 = Math.min(100, vO54.WormSpriteTree.wc);
            var vO70 = {
              gm: "0lt0",
              mm: "0lt1",
              nm: "0lt2"
            };
            f287.prototype.Kf = function (p1343) {
              this.hd = p1343;
            };
            f287.prototype.Jf = function () {
              var v1050 = window.devicePixelRatio ? window.devicePixelRatio : 1;
              this.ff = this.ef.width();
              this.gf = this.ef.height();
              this.lf.resize(this.ff, this.gf);
              this.lf.resolution = v1050;
              this.Eb.width = v1050 * this.ff;
              this.Eb.height = v1050 * this.gf;
              var v1051 = this.gf / 4;
              this.em.Xl(v1051);
              var v1052 = decoder.P(Math.floor(this.ff / v1051) * 2 - 5, 1, v1049);
              this.em.Wl(v1052);
            };
            f287.prototype.Nf = function () {
              if (this.hd) {
                var v1053 = Date.now();
                var v1054 = v1053 / 200;
                var v1055 = Math.sin(v1054);
                this.em.om(this.pm(this.fm, v1055), this.qm(this.fm, v1055));
                this.em.rm(this.sm(this.hm, v1055), this.sm(this.im, v1055), this.sm(this.jm, v1055), this.sm(this.km, v1055));
                var v1056 = this.em.cm();
                for (var v1057 = this.em.am(), v1058 = this.em.bm, v1059 = this.ff - (this.ff - v1056 * 0.5 * (v1057 - 1)) * 0.5, v1060 = this.gf * 0.5, vLN0168 = 0, vLN0169 = 0, v1061 = -1; v1061 < v1057; v1061++) {
                  var vV1061 = v1061;
                  var v1062 = Math.cos(vV1061 * 1 / 12 * Math.PI - v1054) * (1 - Math.pow(16, vV1061 * -1 / 12));
                  if (v1061 >= 0) {
                    v1058[v1061 * 3] = v1059 + v1056 * -0.5 * vV1061;
                    v1058[v1061 * 3 + 1] = v1060 + v1056 * 0.5 * v1062;
                    v1058[v1061 * 3 + 2] = Math.atan2(vLN0169 - v1062, vV1061 - vLN0168);
                  }
                  vLN0168 = vV1061;
                  vLN0169 = v1062;
                }
                this.em.Uf();
                this.em.tm(this.lf);
              }
            };
            f287.prototype.$l = function (p1344) {
              this.em.$l(p1344);
            };
            f287.prototype.um = function (p1345) {
              this.fm = p1345 ? vO70.nm : vO70.mm;
              this.hm = vO70.gm;
              this.im = vO70.gm;
              this.jm = vO70.gm;
              this.km = vO70.gm;
            };
            f287.prototype.vm = function (p1346) {
              this.fm = vO70.gm;
              this.hm = p1346 ? vO70.nm : vO70.mm;
              this.im = vO70.gm;
              this.jm = vO70.gm;
              this.km = vO70.gm;
            };
            f287.prototype.wm = function (p1347) {
              this.fm = vO70.gm;
              this.hm = vO70.gm;
              this.im = p1347 ? vO70.nm : vO70.mm;
              this.jm = vO70.gm;
              this.km = vO70.gm;
            };
            f287.prototype.xm = function (p1348) {
              this.fm = vO70.gm;
              this.hm = vO70.gm;
              this.im = vO70.gm;
              this.jm = p1348 ? vO70.nm : vO70.mm;
              this.km = vO70.gm;
            };
            f287.prototype.ym = function (p1349) {
              this.fm = vO70.gm;
              this.hm = vO70.gm;
              this.im = vO70.gm;
              this.jm = vO70.gm;
              this.km = p1349 ? vO70.nm : vO70.mm;
            };
            f287.prototype.pm = function (p1350, p1351) {
              switch (p1350) {
                case vO70.mm:
                  return 0.9 + p1351 * 0.1;
                case vO70.nm:
                  return 0.4 + p1351 * 0.3;
              }
              return 1;
            };
            f287.prototype.qm = function (p1352, p1353) {
              switch (p1352) {
                case vO70.mm:
                  return 0.6 + p1353 * 0.5;
                case vO70.nm:
                  return 0.3 + p1353 * 0.3;
              }
              return 1;
            };
            f287.prototype.sm = function (p1354, p1355) {
              switch (p1354) {
                case vO70.mm:
                  return 0.9 + p1355 * 0.1;
                case vO70.nm:
                  return 0.6 + p1355 * 0.4;
              }
              return 1;
            };
            return f287;
          }();
          vO54.Oj = function () {
            function f288(p1356, p1357, p1358, p1359, p1360) {
              this.zm = p1356;
              this.Am = p1357;
              this.Bm = p1358;
              this.Cm = p1359;
              this.Dm = p1360;
            }
            f288.Nj = function (p1361) {
              return new f288(p1361.price, p1361.guest, p1361.nonbuyable, p1361.nonbuyableCause, p1361.description || p1361.refer?.texture || "SKIN NATIVE " + p1361.id);
            };
            f288.Pj = function (p1362) {
              return new f288(p1362.price, p1362.guest, p1362.nonbuyable, p1362.nonbuyableCause, p1362.description);
            };
            f288.prototype.Jj = function () {
              return this.zm;
            };
            f288.prototype.Mj = function () {
              return this.Am;
            };
            f288.prototype.Kj = function () {
              return this.Bm;
            };
            f288.prototype.Em = function () {
              return this.Cm;
            };
            f288.prototype.Fm = function () {
              return this.Dm;
            };
            return f288;
          }();
          vO54.qf = function () {
            function f289(p1363) {
              this.Gm = {};
              this.Gm[v1066] = p1363;
              var v1063 = vF32.Shader.from(v1070, v1071, this.Gm);
              this.sf = new vF32.Mesh(v1069, v1063);
              this.sf.blendMode = vF32.v.B;
            }
            var v1064 = "a1_" + decoder.X();
            var v1065 = "a2_" + decoder.X();
            var v1066 = "u3_" + decoder.X();
            var v1067 = "u4_" + decoder.X();
            var v1068 = "v1_" + decoder.X();
            var v1069 = new vF32.Geometry().addAttribute(v1064, [0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1], 2).addAttribute(v1065, [0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1], 2);
            var v1070 = "precision mediump float;attribute vec2 " + v1064 + ";attribute vec2 " + v1065 + ";uniform mat3 translationMatrix ;uniform mat3 projectionMatrix; uniform vec4 " + v1067 + ";varying vec2 " + v1068 + ";const float ROT_ANGLE_DEG=7.5;const float ROT_COS=cos(ROT_ANGLE_DEG/180.0*6.283185307179586);const float ROT_SIN=sin(ROT_ANGLE_DEG/180.0*6.283185307179586);void main(){gl_Position=vec4((projectionMatrix * translationMatrix * vec3(" + v1064 + ",1.0)).xy,0.0,1.0);vec4 _ScreenParams=" + v1067 + ";vec2 uv=" + v1065 + ";vec2 mul=0.5*vec2(_ScreenParams.x*(_ScreenParams.w-1.0)+1.0,_ScreenParams.y*(_ScreenParams.z-1.0)+1.0);vec2 v2=(uv-vec2(0.5,0.5))*mul*1.25;v2=vec2(v2.x*ROT_COS-v2.y*ROT_SIN,v2.x*ROT_SIN+v2.y*ROT_COS)*vec2(1,2);uv=v2;" + v1068 + "=uv;}";
            var v1071 = "precision highp float;varying vec2 " + v1068 + ";uniform sampler2D " + v1066 + ";void main(){gl_FragColor=texture2D(" + v1066 + "," + v1068 + ");}";
            f289.prototype.Mf = function (p1364, p1365) {
              this.sf.scale.x = p1364;
              this.sf.scale.y = p1365;
              this.Gm[v1067] = [p1364, p1365, 1 / p1364 + 1, 1 / p1365 + 1];
            };
            return f289;
          }();
          vO54.WMGBS1 = function () {
            function f290(p1366) {
              var v1072 = bbs.bgGameWidth || 1;
              var v1073 = bbs.bgGameHeight || 1;
              var vLN1100 = 1100;
              var v1074 = v1072 > 512 ? v1072 >= 1000 ? 1 : 0.1 : 0.01;
              this.Gm = {};
              this.Gm[vLSU3_] = [1, 0.5, 0.25, 0.5];
              this.Gm[vLSU4_] = vF32.Texture.WHITE;
              this.Gm[vLSU5_] = [0, 0];
              this.Gm[vLSU6_] = [0, 0];
              this.sf = new PIXI.TilingSprite(p1366 || vO47.xe._g, v1074 == 1 ? vLN1100 : 120000, v1074 == 1 ? vLN1100 : 120000);
              this.sf.scale.x = v1074;
              this.sf.scale.y = v1074;
              this.sf.position.x = -(v1074 == 1 ? v1072 / 2 : 625);
              this.sf.position.y = -(v1074 == 1 ? v1073 / 2 : 625);
              console.log("WMGBS1", v1072, v1073);
            }
            var vLSU3_ = "u3_";
            var vLSU4_ = "u4_";
            var vLSU5_ = "u5_";
            var vLSU6_ = "u6_";
            f290.prototype.Ec = function (p1367, p1368, p1369, p1370) {
              var v1075 = this.Gm[vLSU3_];
              v1075[0] = p1367;
              v1075[1] = p1368;
              v1075[2] = p1369;
              v1075[3] = p1370;
            };
            f290.prototype.$g = function (p1371) {
              this.Gm[vLSU4_] = p1371;
            };
            f290.prototype.Uf = function (p1372, p1373, p1374, p1375) {};
            return f290;
          }();
          vO54.WMGBS2 = function () {
            console.log("WMGBS2");
            function f291() {
              this.Gm = {};
              this.Gm[v1079] = [1, 0.5, 0.25, 0.5];
              this.Gm[v1080] = vF32.Texture.WHITE;
              this.Gm[v1081] = [0, 0];
              this.Gm[v1082] = [0, 0];
              var v1076 = vF32.Shader.from(v1085, v1086, this.Gm);
              this.sf = new vF32.Mesh(v1084, v1076);
            }
            var v1077 = "a1_" + decoder.X();
            var v1078 = "a2_" + decoder.X();
            var vLSTranslationMatrix = "translationMatrix";
            var vLSProjectionMatrix = "projectionMatrix";
            var v1079 = "u3_" + decoder.X();
            var v1080 = "u4_" + decoder.X();
            var v1081 = "u5_" + decoder.X();
            var v1082 = "u6_" + decoder.X();
            var v1083 = "v1_" + decoder.X();
            var v1084 = new vF32.Geometry().addAttribute(v1077, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 2).addAttribute(v1078, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 2);
            var v1085 = "precision mediump float;attribute vec2 " + v1077 + ";attribute vec2 " + v1078 + ";uniform mat3 " + vLSTranslationMatrix + ";uniform mat3 " + vLSProjectionMatrix + ";varying vec2 " + v1083 + ";void main(){" + v1083 + "=" + v1078 + ";gl_Position=vec4((" + vLSProjectionMatrix + "*" + vLSTranslationMatrix + "*vec3(" + v1077 + ",1.0)).xy,0.0,1.0);}";
            var v1086 = "precision highp float;varying vec2 " + v1083 + ";uniform vec4 " + v1079 + ";uniform sampler2D " + v1080 + ";uniform vec2 " + v1081 + ";uniform vec2 " + v1082 + ";void main(){vec2 coord=" + v1083 + "*" + v1081 + "+" + v1082 + ";vec4 v_color_mix=" + v1079 + ";gl_FragColor=texture2D(" + v1080 + ",coord)*0.3+v_color_mix.a*vec4(v_color_mix.rgb,0.0);}";
            f291.prototype.Ec = function (p1376, p1377, p1378, p1379) {
              var v1087 = this.Gm[v1079];
              v1087[0] = p1376;
              v1087[1] = p1377;
              v1087[2] = p1378;
              v1087[3] = p1379;
            };
            f291.prototype.$g = function (p1380) {
              this.Gm[v1080] = p1380;
            };
            f291.prototype.Uf = function (p1381, p1382, p1383, p1384) {
              this.sf.position.x = p1381;
              this.sf.position.y = p1382;
              this.sf.scale.x = p1383;
              this.sf.scale.y = p1384;
              var v1088 = this.Gm[v1081];
              v1088[0] = p1383 * 0.2520615384615385;
              v1088[1] = p1384 * 0.4357063736263738;
              var v1089 = this.Gm[v1082];
              v1089[0] = p1381 * 0.2520615384615385;
              v1089[1] = p1382 * 0.4357063736263738;
            };
            return f291;
          }();
          vO54.sc = function () {
            function f292() {
              this.xc = new PIXI.Sprite();
              this.ev = null;
              this.Hm = 0;
              this.Im = 0;
              this.si = null;
            }
            f292.prototype.Bc = function (p1385, p1386, p1387) {
              if (p1385) {
                this.xc.texture = p1385.Ea();
                this.xc.anchor.set(p1385.ya, p1385.za);
                this.Hm = p1385.Aa;
                this.Im = p1385.Ba;
              } else {}
            };
            f292.prototype.Ec = function (p1388) {
              this.xc.tint = parseInt(p1388.substring(1), 16);
            };
            f292.prototype.Tc = function (p1389) {
              try {
                this.xc.width = p1389 * this.Hm;
                this.xc.height = p1389 * this.Im;
              } catch (e60) {}
            };
            f292.prototype.md = function (p1390) {
              this.xc.rotation = p1390;
            };
            f292.prototype.ld = function (p1391, p1392) {
              this.xc.position.set(p1391, p1392);
            };
            f292.prototype.kd = function (p1393) {
              this.xc.visible = p1393;
            };
            f292.prototype.gd = function () {
              return this.xc.visible;
            };
            f292.prototype.jj = function (p1394) {
              this.xc.alpha = p1394;
            };
            f292.prototype.Qc = function () {
              return this.xc;
            };
            f292.prototype.Rc = function () {
              decoder.U(this.xc);
            };
            return f292;
          }();
          vO54.Worm = function () {
            function f293(p1395) {
              this.hh = p1395;
              this.Eh = new vO54.Worm.li();
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
            f293.prototype.si = function () {
              if (this.Nm != null) {
                decoder.U(this.Nm.nc);
              }
              if (this.Om != null) {
                decoder.U(this.Om);
              }
            };
            f293.prototype.Pm = function () {
              this.zi(0.25);
              this.Eh.ma = "";
              this.wi = true;
              this.dd = {};
              this.kd(false);
            };
            f293.prototype.ri = function (p1396) {
              this.Eh = p1396;
              this.Qm(this.xi);
            };
            f293.prototype.kd = function (p1397) {
              var v1090 = this.xi;
              this.xi = p1397;
              this.Qm(v1090);
            };
            f293.prototype.zi = function (p1398) {
              this.Bh = p1398 * 50;
              var vP1398 = p1398;
              if (p1398 > this.hh.Ag) {
                vP1398 = Math.atan((p1398 - this.hh.Ag) / this.hh.Bg) * this.hh.Bg + this.hh.Ag;
              }
              var v1091 = Math.sqrt(Math.pow(vP1398 * 5, 0.707106781186548) * 4 + 25);
              var v1092 = Math.min(vLN200, Math.max(3, (v1091 - 5) * 5 + 1));
              var v1093 = this.ad;
              this.$c = (5 + v1091 * 0.9) * 0.025;
              this.ad = Math.floor(v1092);
              this.Jm = v1092 - this.ad;
              if (v1093 > 0 && v1093 < this.ad) {
                var v1094 = this.Km[v1093 * 2 - 2];
                var v1095 = this.Km[v1093 * 2 - 1];
                var v1096 = this.Lm[v1093 * 2 - 2];
                var v1097 = this.Lm[v1093 * 2 - 1];
                var v1098 = this._c[v1093 * 2 - 2];
                var v1099 = this._c[v1093 * 2 - 1];
                for (var vV1093 = v1093; vV1093 < this.ad; vV1093++) {
                  this.Km[vV1093 * 2] = v1094;
                  this.Km[vV1093 * 2 + 1] = v1095;
                  this.Lm[vV1093 * 2] = v1096;
                  this.Lm[vV1093 * 2 + 1] = v1097;
                  this._c[vV1093 * 2] = v1098;
                  this._c[vV1093 * 2 + 1] = v1099;
                }
              }
            };
            f293.prototype.Ei = function (p1399, p1400) {
              this.ad = p1400;
              for (var vLN0170 = 0; vLN0170 < this.ad; vLN0170++) {
                this.Km[vLN0170 * 2] = this.Lm[vLN0170 * 2] = this._c[vLN0170 * 2] = p1399();
                this.Km[vLN0170 * 2 + 1] = this.Lm[vLN0170 * 2 + 1] = this._c[vLN0170 * 2 + 1] = p1399();
              }
            };
            f293.prototype.Bi = function (p1401, p1402, p1403) {
              this.Xc = p1403;
              for (var vLN0171 = 0; vLN0171 < this.ad; vLN0171++) {
                this.Km[vLN0171 * 2] = this.Lm[vLN0171 * 2];
                this.Km[vLN0171 * 2 + 1] = this.Lm[vLN0171 * 2 + 1];
              }
              var v1100 = p1401 - this.Lm[0];
              var v1101 = p1402 - this.Lm[1];
              this.Rm(v1100, v1101, this.ad, this.Lm);
            };
            f293.prototype.Rm = function (p1404, p1405, p1406, p1407) {
              var v1102 = Math.hypot(p1404, p1405);
              if (!(v1102 <= 0)) {
                var v1103 = p1407[0];
                var vUndefined12 = undefined;
                p1407[0] += p1404;
                var v1104 = p1407[1];
                var vUndefined13 = undefined;
                p1407[1] += p1405;
                var v1105 = this.$c / (this.$c + v1102);
                var v1106 = 1 - v1105 * 2;
                for (var vLN114 = 1, v1107 = p1406 - 1; vLN114 < v1107; vLN114++) {
                  vUndefined12 = p1407[vLN114 * 2];
                  p1407[vLN114 * 2] = p1407[vLN114 * 2 - 2] * v1106 + (vUndefined12 + v1103) * v1105;
                  v1103 = vUndefined12;
                  vUndefined13 = p1407[vLN114 * 2 + 1];
                  p1407[vLN114 * 2 + 1] = p1407[vLN114 * 2 - 1] * v1106 + (vUndefined13 + v1104) * v1105;
                  v1104 = vUndefined13;
                }
                v1105 = this.Jm * this.$c / (this.Jm * this.$c + v1102);
                v1106 = 1 - v1105 * 2;
                p1407[p1406 * 2 - 2] = p1407[p1406 * 2 - 4] * v1106 + (p1407[p1406 * 2 - 2] + v1103) * v1105;
                p1407[p1406 * 2 - 1] = p1407[p1406 * 2 - 3] * v1106 + (p1407[p1406 * 2 - 1] + v1104) * v1105;
              }
            };
            f293.prototype.fh = function () {
              return {
                x: this._c[0],
                y: this._c[1]
              };
            };
            f293.prototype.yi = function (p1408, p1409) {
              var vLN1000000 = 1000000;
              var vP1408 = p1408;
              var vP1409 = p1409;
              for (var vLN0172 = 0; vLN0172 < this.ad; vLN0172++) {
                var v1108 = this._c[vLN0172 * 2];
                var v1109 = this._c[vLN0172 * 2 + 1];
                var v1110 = Math.hypot(p1408 - v1108, p1409 - v1109);
                if (v1110 < vLN1000000) {
                  vLN1000000 = v1110;
                  vP1408 = v1108;
                  vP1409 = v1109;
                }
              }
              return {
                x: vP1408,
                y: vP1409,
                distance: vLN1000000
              };
            };
            f293.prototype.ti = function (p1410) {
              this.Mm = p1410;
            };
            f293.prototype.hj = function (p1411, p1412) {
              this.dj = decoder.Q(this.dj, this.wi ? this.Xc ? 0.9 + Math.cos(p1411 / 400 * Math.PI) * 0.1 : 1 : 0, p1412, 1 / 800);
              this.bd = decoder.Q(this.bd, this.wi ? this.Xc ? 1 : 0 : 1, p1412, 0.0025);
              if (this.Nm != null) {
                this.Nm.nc.alpha = this.dj;
              }
              if (this.Om != null) {
                this.Om.alpha = this.dj;
              }
            };
            f293.prototype.ij = function (p1413, p1414, p1415, p1416) {
              if (this.xi && this.wi) {
                var v1111 = Math.pow(0.11112, p1414 / 95);
                for (var vLN0173 = 0; vLN0173 < this.ad; vLN0173++) {
                  this._c[vLN0173 * 2] = decoder.S(decoder.S(this.Km[vLN0173 * 2], this.Lm[vLN0173 * 2], p1415), this._c[vLN0173 * 2], v1111);
                  this._c[vLN0173 * 2 + 1] = decoder.S(decoder.S(this.Km[vLN0173 * 2 + 1], this.Lm[vLN0173 * 2 + 1], p1415), this._c[vLN0173 * 2 + 1], v1111);
                }
              }
              if (this.Nm && this.xi) {
                this.Nm.Zc(this, p1413, p1414, p1416);
              }
              if (this.Om) {
                this.Om.ih.x = this._c[0];
                this.Om.ih.y = this._c[1] - this.$c * 3;
              }
            };
            f293.prototype.Qm = function (p1417) {
              if (this.xi) {
                if (!p1417) {
                  this.Sm();
                }
              } else {
                if (this.Nm != null) {
                  decoder.U(this.Nm.nc);
                }
                if (this.Om != null) {
                  decoder.U(this.Om);
                }
              }
            };
            f293.prototype.Sm = function () {
              var vF2056 = f205();
              this.Nm = this.Nm || new vO54.WormSpriteTree();
              decoder.U(this.Nm.nc);
              this.Nm.yc(vF2056.dh.hh.xg, vF2056.Lc.Ub().jb(this.Eh.Gh), vF2056.Lc.Ub().ib(this.Eh.Hh), vF2056.Lc.Ub().kb(this.Eh.ni), vF2056.Lc.Ub().lb(this.Eh.oi), vF2056.Lc.Ub().mb(this.Eh.pi), vF2056.Lc.Ub().nb(this.Eh.qi), "#ffffff");
              this.Om = this.Om || new vO54.Tm("");
              decoder.U(this.Om);
              this.Om.style.fontFamily = "PTSans";
              this.Om.anchor.set(0.5);
              this.Om.style.fontSize = parseInt(bbs.enemyNameFontSize || 14);
              this.Om.style.fill = bbs.enemyNameColor || vF2056.Lc.Ub().ib(this.Eh.Hh).tb || "#fff";
              this.Om.style.fontWeight = "bold";
              this.Om.text = v499 ? this.Eh.ma : "-----";
              this.Mm.oh(this.Eh.ae, this.Nm, this.Om);
              console.log(this.Eh);
            };
            f293.li = function () {
              function f294() {
                this.ae = 0;
                this.Gh = vO48.ps ? vO48.ps : vO54.GameParams.Cg;
                this.Hh = 0;
                this.ni = 0;
                this.oi = 0;
                this.pi = 0;
                this.qi = 0;
                this.ma = 0;
              }
              return f294;
            }();
            return f293;
          }();
          vO54.Tm = function () {
            return decoder.M(vF32.Text, function (p1418, p1419, p1420) {
              vF32.Text.call(this, p1418, p1419, p1420);
              this.ih = {
                x: 0,
                y: 0
              };
            });
          }();
          vO54.hb = function () {
            function f295(p1421, p1422, p1423, p1424, p1425) {
              this.lj = p1421;
              this.mj = p1422;
              this.nj = p1423;
              this.oj = p1424;
              this.pj = p1425;
            }
            f295.prototype.Um = function (p1426) {
              return new f295(p1426, this.mj, this.nj, this.oj, this.pj);
            };
            f295.prototype.Vm = function (p1427) {
              return new f295(this.lj, p1427, this.nj, this.oj, this.pj);
            };
            f295.prototype.Wm = function (p1428) {
              return new f295(this.lj, this.mj, p1428, this.oj, this.pj);
            };
            f295.prototype.Xm = function (p1429) {
              return new f295(this.lj, this.mj, this.nj, p1429, this.pj);
            };
            f295.prototype.Ym = function (p1430) {
              return new f295(this.lj, this.mj, this.nj, this.oj, p1430);
            };
            return f295;
          }();
          vO54.Vl = function () {
            function f296(p1431) {
              this.Zm = new vO54.WormSpriteTree();
              this.Zm.nc.addChild(this.Zm.oc);
              this.$m = null;
              this._m = null;
              this.bm = p1431;
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
            var v1112 = new vO54.hb(0, 0, 0, 0, 0);
            f296.prototype.tf = function () {
              return this.Zm.nc;
            };
            f296.prototype.Wl = function (p1432) {
              this.pc = p1432;
              if (this.Zm.pc !== p1432) {
                for (var vP1432 = p1432; vP1432 < this.Zm.qc.length; vP1432++) {
                  this.Zm.qc[vP1432].Uc();
                }
                while (this.Zm.pc > p1432) {
                  this.Zm.pc -= 1;
                  var v1113 = this.Zm.qc[this.Zm.pc];
                  v1113.Dc.Rc();
                  v1113.Cc.Rc();
                }
                while (this.Zm.pc < p1432) {
                  var v1114 = this.Zm.qc[this.Zm.pc];
                  this.Zm.pc += 1;
                  this.Zm.nc.addChild(v1114.Cc.Qc());
                  this.Zm.nc.addChild(v1114.Dc.Qc());
                  v1114.Cc.jj(this.an);
                  v1114.Dc.jj(this.bn);
                }
                for (var vLN0174 = 0; vLN0174 < this.Zm.oc.Fc.length; vLN0174++) {
                  this.Zm.oc.Fc[vLN0174].jj(this.cn);
                }
                for (var vLN0175 = 0; vLN0175 < this.Zm.oc.Gc.length; vLN0175++) {
                  this.Zm.oc.Gc[vLN0175].jj(this.dn);
                }
                for (var vLN0176 = 0; vLN0176 < this.Zm.oc.Ic.length; vLN0176++) {
                  this.Zm.oc.Ic[vLN0176].jj(this.gn);
                }
                for (var vLN0177 = 0; vLN0177 < this.Zm.oc.Hc.length; vLN0177++) {
                  this.Zm.oc.Hc[vLN0177].jj(this.hn);
                }
              }
            };
            f296.prototype.am = function () {
              return this.pc;
            };
            f296.prototype.$l = function (p1433) {
              this.$m = p1433;
              this._m = "#ffffff";
              this.lm();
            };
            f296.prototype._l = function (p1434) {
              this.$m = v1112;
              this._m = p1434;
              this.lm();
            };
            f296.prototype.lm = function () {
              var vF2057 = f205();
              this.Zm.yc(vO54.Ac.vg, null, vF2057.Lc.Ub().ib(this.$m.lj), vF2057.Lc.Ub().kb(this.$m.mj), vF2057.Lc.Ub().lb(this.$m.nj), vF2057.Lc.Ub().mb(this.$m.pj), vF2057.Lc.Ub().nb(this.$m.oj), this._m);
            };
            f296.prototype.Xl = function (p1435) {
              this.Gi = p1435;
            };
            f296.prototype.cm = function () {
              return this.Gi;
            };
            f296.prototype.om = function (p1436, p1437) {
              this.an = p1436;
              this.bn = p1437;
              for (var vLN0178 = 0; vLN0178 < this.pc; vLN0178++) {
                var v1115 = this.Zm.qc[vLN0178];
                v1115.Cc.jj(this.an);
                v1115.Dc.jj(this.bn);
              }
            };
            f296.prototype.rm = function (p1438, p1439, p1440, p1441) {
              this.cn = p1438;
              this.dn = p1439;
              this.gn = p1440;
              this.hn = p1441;
              for (var vLN0179 = 0; vLN0179 < this.Zm.oc.Fc.length; vLN0179++) {
                this.Zm.oc.Fc[vLN0179].jj(this.cn);
              }
              for (var vLN0180 = 0; vLN0180 < this.Zm.oc.Gc.length; vLN0180++) {
                this.Zm.oc.Gc[vLN0180].jj(this.dn);
              }
              for (var vLN0181 = 0; vLN0181 < this.Zm.oc.Ic.length; vLN0181++) {
                this.Zm.oc.Ic[vLN0181].jj(this.gn);
              }
              for (var vLN0182 = 0; vLN0182 < this.Zm.oc.Hc.length; vLN0182++) {
                this.Zm.oc.Hc[vLN0182].jj(this.hn);
              }
            };
            f296.prototype.Uf = function () {
              var v1116 = this.Gi * 2;
              var v1117 = this.Gi * 2 * 1.5;
              if (this.pc > 0) {
                var v1118 = this.bm[0];
                var v1119 = this.bm[1];
                var v1120 = this.bm[2];
                this.Zm.qc[0].Sc(v1118, v1119, v1116, v1117, v1120);
                this.Zm.oc.Sc(v1118, v1119, v1116, v1120);
              }
              for (var vLN115 = 1; vLN115 < this.pc; vLN115++) {
                var v1121 = this.bm[vLN115 * 3];
                var v1122 = this.bm[vLN115 * 3 + 1];
                var v1123 = this.bm[vLN115 * 3 + 2];
                this.Zm.qc[vLN115].Sc(v1121, v1122, v1116, v1117, v1123);
              }
            };
            f296.prototype.tm = function (p1442) {
              p1442.render(this.Zm.nc);
            };
            return f296;
          }();
          vO54.kf = function () {
            function f297(p1443) {
              this.nd = p1443;
            }
            f297.bgcanvas = $("#background-canvas");
            f297.socialButtons = $("#social-buttons");
            f297.socialButtons.html("");
            f297.jn = $("#game-view");
            f297.gameCanvas = $("#game-canvas");
            f297.ln = $("#results-view");
            f297.mn = $("#stretch-box");
            f297.nn = $("#main-menu-view");
            f297.pn = $("#popup-view");
            f297.qn = $("#loading-view");
            f297.rn = $("#restricted-view");
            f297.sn = $("#toaster-view");
            f297.tn = $("#error-gateway-connection-view");
            f297.un_error = $("#error-game-connection-view");
            f297.vn = $("#markup-wrap");
            f297.prototype.ha = function () {};
            f297.prototype.Gk = function () {};
            f297.prototype.Hk = function () {};
            f297.prototype.Bk = function () {};
            f297.prototype.Jf = function () {};
            f297.prototype.Nf = function (p1444, p1445) {};
            return f297;
          }();
          vO54.Vj = function () {
            function f298(p1446, p1447, p1448, p1449, p1450, p1451) {
              var vLSOK = "OK";
              var v$5 = $(vLSOK);
              v$5.click(function () {
                if (typeof FB != "undefined" && FB.ui !== undefined) {
                  FB.ui({
                    method: "feed",
                    display: "popup",
                    link: p1447,
                    name: p1448,
                    caption: p1449,
                    description: p1450,
                    picture: p1451
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
            var v1124 = decoder.M(vO54.kf, function () {
              vO54.kf.call(this, vO54.Fk.wn);
              var vThis113 = this;
              var vF2058 = f205();
              v$10.toggle(vF46.xn);
              v$6.text(decoder.H("index.game.result.title"));
              v$7.text(decoder.H("index.game.result.continue"));
              v$7.html("Continue");
              v$7.after("<div id='final-replay'>Respawn</div>");
              v$7.click(function () {
                vF2058.Ci.Be();
                vF2058.zn.yn.ka();
                vF2058.Ci.pe(vO54.ge.je._e);
                vF2058.og.Ak(vF2058.og._e);
              });
              $("#final-replay").css({
                position: "absolute",
                top: "60px",
                left: "15px",
                right: "15px",
                background: "#f7941d",
                color: "#ffffff",
                "line-height": "50px",
                "border-radius": "5px",
                "text-align": "center",
                cursor: "pointer",
                border: "none",
                "font-size": "24px",
                "z-index": "9999",
                "pointer-events": "auto"
              });

              // تأثير hover خفيف جداً

              $("#final-replay").hover(function () {
                $(this).css({
                  background: "#fa9d32"
                });
              }, function () {
                $(this).css({
                  background: "#f7941d",
                  "box-shadow": "0 1px 1px 0 rgba(255, 255, 255, 1)"
                });
              });
              $("#final-replay").click(function () {
                respawnFn();
              });
              $("html").keydown(function (p1452) {
                if (p1452.keyCode === 32) {
                  vThis113.An = true;
                }
              }).keyup(function (p1453) {
                if (p1453.keyCode === 32) {
                  vThis113.An = false;
                }
              });
              this.ng = new vO54.Eg(vO54.kf.gameCanvas);
              this.Cn = 0;
              this.Bn = 0;
              this.An = false;
            });
            v1124.prototype.ha = function () {};
            v1124.prototype.Gk = function () {
              if (this.Cn === 0) {
                vO54.kf.jn.stop();
                vO54.kf.jn.fadeIn(500);
                vO54.kf.ln.stop();
                vO54.kf.ln.fadeOut(1);
                vO54.kf.nn.stop();
                vO54.kf.nn.fadeOut(50);
                vO54.kf.pn.stop();
                vO54.kf.pn.fadeOut(50);
                vO54.kf.sn.stop();
                vO54.kf.sn.fadeOut(50);
                vO54.kf.qn.stop();
                vO54.kf.qn.fadeOut(50);
                vO54.kf.rn.stop();
                vO54.kf.rn.fadeOut(50);
                vO54.kf.tn.stop();
                vO54.kf.tn.fadeOut(50);
                vO54.kf.un_error.stop();
                vO54.kf.un_error.fadeOut(50);
                vO54.kf.mn.stop();
                vO54.kf.mn.fadeOut(1);
                vO54.kf.bgcanvas.stop();
                vO54.kf.bgcanvas.fadeOut(50);
                vO54.GameView.Kf(false);
                vO54.kf.socialButtons.stop();
                vO54.kf.socialButtons.fadeOut(50);
                vO54.kf.vn.stop();
                vO54.kf.vn.fadeOut(50);
              } else {
                vO54.kf.jn.stop();
                vO54.kf.jn.fadeIn(500);
                vO54.kf.ln.stop();
                vO54.kf.ln.fadeIn(500);
                vO54.kf.nn.stop();
                vO54.kf.nn.fadeOut(50);
                vO54.kf.pn.stop();
                vO54.kf.pn.fadeOut(50);
                vO54.kf.sn.stop();
                vO54.kf.sn.fadeOut(50);
                vO54.kf.qn.stop();
                vO54.kf.qn.fadeOut(50);
                vO54.kf.rn.stop();
                vO54.kf.rn.fadeOut(50);
                vO54.kf.tn.stop();
                vO54.kf.tn.fadeOut(50);
                vO54.kf.un_error.stop();
                vO54.kf.un_error.fadeOut(50);
                vO54.kf.mn.stop();
                vO54.kf.mn.fadeOut(1);
                vO54.kf.bgcanvas.stop();
                vO54.kf.bgcanvas.fadeOut(50);
                vO54.GameView.Kf(false);
                vO54.kf.socialButtons.stop();
                vO54.kf.socialButtons.fadeOut(50);
                vO54.kf.vn.stop();
                vO54.kf.vn.fadeOut(50);
              }
            };
            v1124.prototype.Dn = function () {
              this.Cn = 0;
              return this;
            };
            v1124.prototype.En = function () {
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
            v1124.prototype.Hk = function () {
              this.An = false;
              this.ng.Jf();
              if (this.Cn === 1) {
                f205().Ci.Fe();
              }
            };
            v1124.prototype.Jf = function () {
              this.ng.Jf();
            };
            v1124.prototype.Nf = function (p1454, p1455) {
              this.ng.Nf(p1454, p1455);
            };
            v1124.prototype.Fn = function (p1456, p1457, p1458) {
              var vUndefined14 = undefined;
              var vUndefined15 = undefined;
              var vUndefined16 = undefined;
              if (p1457 >= 1 && p1457 <= 10) {
                vUndefined14 = decoder.H("index.game.result.place.i" + p1457);
                vUndefined15 = decoder.H("index.game.result.placeInBoard");
                vUndefined16 = decoder.H("index.game.social.shareResult.messGood").replace("{0}", p1458).replace("{1}", p1456).replace("{2}", vUndefined14);
              } else {
                vUndefined14 = "";
                vUndefined15 = decoder.H("index.game.result.tryHit");
                vUndefined16 = decoder.H("index.game.social.shareResult.messNorm").replace("{0}", p1458).replace("{1}", p1456);
              }
              v$11.html(decoder.H("index.game.result.your"));
              v$12.html(p1456);
              v$13.html(vUndefined14);
              v$14.html(vUndefined15);
              if (vF46.xn) {
                var v1125 = decoder.H("index.game.result.share");
                decoder.H("index.game.social.shareResult.caption");
                v$10.empty().append(f298(v1125, "https://wormate.io", "wormate.io", vUndefined16, vUndefined16, "https://wormate.io/images/og-share-img-new.jpg"));
              }
            };
            v1124.prototype.Gn = function () {
              return this.Bn;
            };
            v1124.prototype.Hn = function () {
              return this.An;
            };
            return v1124;
          }();
          vO54.sk = function () {
            var v$15 = $("#loading-progress-cont");
            var v$16 = $("#loading-progress-bar");
            var v$17 = $("#loading-progress-text");
            var v1126 = decoder.M(vO54.kf, function () {
              vO54.kf.call(this, vO54.Fk.wn);
              this.In = -1;
              this.Jn = "";
            });
            v1126.prototype.ha = function () {};
            v1126.prototype.Gk = function () {
              vO54.kf.jn.stop();
              vO54.kf.jn.fadeOut(50);
              vO54.kf.ln.stop();
              vO54.kf.ln.fadeOut(50);
              vO54.kf.nn.stop();
              vO54.kf.nn.fadeOut(50);
              vO54.kf.pn.stop();
              vO54.kf.pn.fadeOut(50);
              vO54.kf.sn.stop();
              vO54.kf.sn.fadeOut(50);
              vO54.kf.qn.stop();
              vO54.kf.qn.fadeIn(500);
              vO54.kf.rn.stop();
              vO54.kf.rn.fadeOut(50);
              vO54.kf.tn.stop();
              vO54.kf.tn.fadeOut(50);
              vO54.kf.un_error.stop();
              vO54.kf.un_error.fadeOut(50);
              vO54.kf.mn.stop();
              vO54.kf.mn.fadeIn(1);
              vO54.kf.bgcanvas.stop();
              vO54.kf.bgcanvas.fadeIn(500);
              vO54.GameView.Kf(true);
              vO54.kf.socialButtons.stop();
              vO54.kf.socialButtons.fadeOut(50);
              vO54.kf.vn.stop();
              vO54.kf.vn.fadeOut(50);
            };
            v1126.prototype.Hk = function () {
              f205().Ci.pe(vO54.ge.je.ie);
            };
            v1126.prototype.Bk = function () {};
            v1126.prototype.Kn = function () {
              this.Ln("", 0);
              v$15.stop();
              v$15.fadeIn(100);
            };
            v1126.prototype.Mn = function () {
              v$15.stop();
              v$15.fadeOut(100);
            };
            v1126.prototype.Ln = function (p1459, p1460) {
              if (this.Jn !== p1459) {
                this.Jn = p1459;
              }
              var v1127 = decoder.P(Math.floor(p1460 * 100), 0, 100);
              if (this.In !== v1127) {
                v$16.css({
                  width: v1127 + "%"
                });
                v$17.html(v1127 + " %");
              }
            };
            return v1126;
          }();
          vO54.Wj = function () {
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
            var v1128 = decoder.M(vO54.kf, function () {
              vO54.kf.call(this, vO54.Fk.Ek);
              var vF2059 = f205();
              this.In = -1;
              this.Jn = "";
              this.Nn = new vO54.dm(v$24);
              v$30.click(function () {
                vF2059.Ci.Be();
              });
              v$24.click(function () {
                if (vF2059.Ij.Hj()) {
                  vF2059.Ci.Be();
                  vF2059.og.Ak(vF2059.og.ik);
                }
              });
              v$25.click(function () {
                vF2059.Ci.Be();
                vF2059.On.Ej();
              });
              v$26.click(function () {
                vF2059.Ci.Be();
                vF2059.On.Dj();
              });
              v$29.keypress(function (p1461) {
                if (p1461.keyCode == 13) {
                  vF2059.Pn(true);
                }
              });
              v$31.click(function () {
                vF2059.Ci.Be();
                vF2059.Pn(true);
              });
              v$32.click(function () {
                vF2059.Ci.Be();
                vF2059.Pn(true);
              });
              v$33.click(function () {
                vF2059.Ci.Be();
                vF2059.og.Ak(vF2059.og.fk);
              });
              v$37.click(function () {
                vF2059.Ci.Be();
                vF2059.og.Ak(vF2059.og.$h);
              });
              v$34.click(function () {
                if (vF2059.Ij.Hj()) {
                  vF2059.Ci.Be();
                  vF2059.og.Ak(vF2059.og.dk);
                }
              });
              v$36.click(function () {
                if (vF2059.Ij.Hj()) {
                  vF2059.Ci.Be();
                  vF2059.og.Ak(vF2059.og.bk);
                }
              });
              v$35.click(function () {
                if (vF2059.Ij.Hj()) {
                  vF2059.Ci.Be();
                  vF2059.og.Ak(vF2059.og.kk);
                }
              });
              v$38.click(function () {
                if (vF2059.Ij.Hj()) {
                  vF2059.Ci.Be();
                  vF2059.og.Ak(vF2059.og._j);
                }
              });
              this.Qn();
              this.Rn();
              var v1129 = vO54.Vf.fg(vO54.Vf._f);
              if (v1129 !== "ARENA" && v1129 !== "TEAM2") {
                v1129 = "ARENA";
              }
              v$30.val(v1129);
            });
            v1128.prototype.ha = function () {
              var vF20510 = f205();
              var vThis114 = this;
              vF20510.Ij.zl(function () {
                if (vF20510.Ij.Hj()) {
                  vF20510.On.Fj(vF20510.Ij.ml(), vO54.tj.sj);
                  vF20510.On.Fj(vF20510.Ij.nl(), vO54.tj.uj);
                  vF20510.On.Fj(vF20510.Ij.ol(), vO54.tj.vj);
                  vF20510.On.Fj(vF20510.Ij.pl(), vO54.tj.xj);
                  vF20510.On.Fj(vF20510.Ij.ql(), vO54.tj.wj);
                } else {
                  vF20510.On.Fj(vF20510.Sn(), vO54.tj.sj);
                  vF20510.On.Fj(0, vO54.tj.uj);
                  vF20510.On.Fj(0, vO54.tj.vj);
                  vF20510.On.Fj(0, vO54.tj.xj);
                  vF20510.On.Fj(0, vO54.tj.wj);
                }
              });
              vF20510.Ij.zl(function () {
                v$31.toggle(vF20510.Ij.Hj());
                v$33.toggle(!vF20510.Ij.Hj());
                v$34.toggle(true);
                v$32.toggle(!vF20510.Ij.Hj());
                v$37.toggle(true);
                v$36.toggle(vF20510.Ij.Hj());
                v$35.toggle(vF20510.Ij.Hj());
                v$38.toggle(vF20510.Ij.Hj());
                if (vF20510.Ij.Hj()) {
                  v$27.hide();
                  v$40.html(vF20510.Ij.dl());
                  v$39.attr("src", vF20510.Ij.fl());
                  v$41.html(vF20510.Ij.il());
                  v$42.width(vF20510.Ij.kl() * 100 / vF20510.Ij.ll() + "%");
                  v$43.html(vF20510.Ij.kl() + " / " + vF20510.Ij.ll());
                  v$44.html(vF20510.Ij.jl());
                  v$29.val(vF20510.Ij.el());
                } else {
                  v$27.toggle(vF46.xn && !vF20510.Tn());
                  v$40.html(v$40.data("guest"));
                  v$39.attr("src", decoder.a.e);
                  v$41.html("10");
                  v$42.width("0");
                  v$43.html("");
                  v$44.html(1);
                  v$29.val(vO54.Vf.fg(vO54.Vf.ag));
                }
              });
              vF20510.On.zj(function () {
                vThis114.Nn.$l(vF20510.On.yj());
              });
            };
            v1128.prototype.Gk = function () {
              vO54.kf.jn.stop();
              vO54.kf.jn.fadeOut(50);
              vO54.kf.ln.stop();
              vO54.kf.ln.fadeOut(50);
              vO54.kf.nn.stop();
              vO54.kf.nn.fadeIn(500);
              vO54.kf.pn.stop();
              vO54.kf.pn.fadeOut(50);
              vO54.kf.sn.stop();
              vO54.kf.sn.fadeOut(50);
              vO54.kf.qn.stop();
              vO54.kf.qn.fadeOut(50);
              vO54.kf.rn.stop();
              vO54.kf.rn.fadeOut(50);
              vO54.kf.tn.stop();
              vO54.kf.tn.fadeOut(50);
              vO54.kf.un_error.stop();
              vO54.kf.un_error.fadeOut(50);
              vO54.kf.mn.stop();
              vO54.kf.mn.fadeIn(1);
              vO54.kf.bgcanvas.stop();
              vO54.kf.bgcanvas.fadeIn(500);
              vO54.GameView.Kf(true);
              vO54.kf.socialButtons.stop();
              vO54.kf.socialButtons.fadeIn(500);
              vO54.kf.vn.stop();
              vO54.kf.vn.fadeIn(500);
            };
            v1128.prototype.Un = function () {
              v$18.fadeIn(500);
              v$19.fadeIn(500);
              v$20.fadeIn(500);
              v$21.fadeOut(100);
            };
            v1128.prototype.Vn = function () {
              v$18.fadeOut(100);
              v$19.fadeOut(100);
              v$20.fadeOut(100);
              v$21.fadeIn(500);
            };
            v1128.prototype.Ln = function (p1462, p1463) {
              if (this.Jn !== p1462) {
                this.Jn = p1462;
              }
              var v1130 = decoder.P(Math.floor(p1463 * 100), 0, 100);
              if (this.In !== v1130) {
                v$22.css({
                  width: v1130 + "%"
                });
                v$23.html(v1130 + " %");
              }
            };
            v1128.prototype.Hk = function () {
              f205().Ci.Ce();
              this.Nn.Kf(true);
            };
            v1128.prototype.Bk = function () {
              this.Nn.Kf(false);
            };
            v1128.prototype.Jf = function () {
              this.Nn.Jf();
            };
            v1128.prototype.Nf = function (p1464, p1465) {
              this.Nn.Nf();
            };
            v1128.prototype.el = function () {
              return v$29.val();
            };
            v1128.prototype.Wn = function () {
              return v$30.val();
            };
            v1128.prototype.Qn = function () {};
            v1128.prototype.Rn = function () {
              function f299() {
                vF20511.Xn(true);
                setTimeout(function () {
                  v$27.hide();
                }, 3000);
              }
              var vF20511 = f205();
              if (vF46.xn && !vF20511.Tn()) {
                v$27.show();
                var v1131 = decoder.H("index.game.main.menu.unlockSkins.share");
                var vEncodeURIComponent = encodeURIComponent(decoder.H("index.game.main.menu.unlockSkins.comeAndPlay") + " https://wormate.io/ #wormate #wormateio");
                var vEncodeURIComponent2 = encodeURIComponent(decoder.H("index.game.main.menu.unlockSkins.comeAndPlay"));
                v$28.append($("<a class=\"mm-skin-over-button\" id=\"mm-skin-over-tw\" target=\"_blank\" href=\"http://twitter.com/intent/tweet?status=" + vEncodeURIComponent + "\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjQ1NiIgaGVpZ2h0PSI0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik02MCAzMzhjMzAgMTkgNjYgMzAgMTA1IDMwIDEwOCAwIDE5Ni04OCAxOTYtMTk2IDAtMyAwLTUgMC04IDQtMyAyOC0yMyAzNC0zNSAwIDAtMjAgOC0zOSAxMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAyLTEgMjctMTggMzAtMzggMCAwLTE0IDctMzMgMTQgLTMgMS03IDItMTAgMyAtMTMtMTMtMzAtMjItNTAtMjIgLTM4IDAtNjkgMzEtNjkgNjkgMCA1IDEgMTEgMiAxNiAtNSAwLTg2LTUtMTQxLTcxIDAgMC0zMyA0NSAyMCA5MSAwIDAtMTYtMS0zMC05IDAgMC01IDU0IDU0IDY4IDAgMC0xMiA0LTMwIDEgMCAwIDEwIDQ0IDYzIDQ4IDAgMC00MiAzOC0xMDEgMjlMNjAgMzM4eiIgZmlsbD0iI0ZGRiIvPjwvc3ZnPg==\"><span>" + v1131 + "</span></a>").click(f299));
                v$28.append($("<a class=\"mm-skin-over-button\" id=\"mm-skin-over-fb\" target=\"_blank\" href=\"https://www.facebook.com/dialog/share?app_id=861926850619051&display=popup&href=https%3A%2F%2Fwormate.io&redirect_uri=https%3A%2F%2Fwormate.io&hashtag=%23wormateio&quote=" + vEncodeURIComponent2 + "\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NiA0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik0yNDQuMyA0NTZWMjc5LjdoLTU5LjN2LTcxLjloNTkuM3YtNjAuNGMwLTQzLjkgMzUuNi03OS41IDc5LjUtNzkuNWg2MnY2NC42aC00NC40Yy0xMy45IDAtMjUuMyAxMS4zLTI1LjMgMjUuM3Y1MGg2OC41bC05LjUgNzEuOWgtNTkuMVY0NTZ6IiBmaWxsPSIjZmZmIi8+PC9zdmc+\"><span>" + v1131 + "</span></a>").click(f299));
              }
            };
            return v1128;
          }();
          vO54.yk = function () {
            var v1132 = decoder.M(vO54.kf, function () {
              vO54.kf.call(this, vO54.Fk.wn);
            });
            v1132.prototype.ha = function () {};
            v1132.prototype.Gk = function () {
              vO54.kf.jn.stop();
              vO54.kf.jn.fadeOut(50);
              vO54.kf.ln.stop();
              vO54.kf.ln.fadeOut(50);
              vO54.kf.nn.stop();
              vO54.kf.nn.fadeOut(50);
              vO54.kf.pn.stop();
              vO54.kf.pn.fadeOut(50);
              vO54.kf.sn.stop();
              vO54.kf.sn.fadeOut(50);
              vO54.kf.qn.stop();
              vO54.kf.qn.fadeOut(50);
              vO54.kf.rn.stop();
              vO54.kf.rn.fadeOut(50);
              vO54.kf.tn.stop();
              vO54.kf.tn.fadeOut(50);
              vO54.kf.un_error.stop();
              vO54.kf.un_error.fadeOut(50);
              vO54.kf.mn.stop();
              vO54.kf.mn.fadeOut(1);
              vO54.kf.bgcanvas.stop();
              vO54.kf.bgcanvas.fadeOut(50);
              vO54.GameView.Kf(false);
              vO54.kf.socialButtons.stop();
              vO54.kf.socialButtons.fadeOut(50);
              vO54.kf.vn.stop();
              vO54.kf.vn.fadeOut(50);
            };
            return v1132;
          }();
          vO54.pk = function () {
            var v1133 = decoder.M(vO54.kf, function () {
              vO54.kf.call(this, vO54.Fk.wn);
            });
            v1133.prototype.ha = function () {};
            v1133.prototype.Gk = function () {
              vO54.kf.jn.stop();
              vO54.kf.jn.fadeOut(50);
              vO54.kf.ln.stop();
              vO54.kf.ln.fadeOut(50);
              vO54.kf.nn.stop();
              vO54.kf.nn.fadeOut(50);
              vO54.kf.pn.stop();
              vO54.kf.pn.fadeOut(50);
              vO54.kf.sn.stop();
              vO54.kf.sn.fadeOut(50);
              vO54.kf.qn.stop();
              vO54.kf.qn.fadeOut(50);
              vO54.kf.rn.stop();
              vO54.kf.rn.fadeIn(500);
              vO54.kf.tn.stop();
              vO54.kf.tn.fadeOut(50);
              vO54.kf.un_error.stop();
              vO54.kf.un_error.fadeOut(50);
              vO54.kf.mn.stop();
              vO54.kf.mn.fadeIn(1);
              vO54.kf.bgcanvas.stop();
              vO54.kf.bgcanvas.fadeIn(500);
              vO54.GameView.Kf(true);
              vO54.kf.socialButtons.stop();
              vO54.kf.socialButtons.fadeOut(50);
              vO54.kf.vn.stop();
              vO54.kf.vn.fadeOut(50);
            };
            v1133.prototype.Hk = function () {};
            return v1133;
          }();
          vO54.rk = function () {
            var v$45 = $("#toaster-stack");
            var v1134 = decoder.M(vO54.kf, function () {
              vO54.kf.call(this, vO54.Fk.wn);
              this.Yn = [];
              this.Zn = null;
            });
            v1134.prototype.ha = function () {};
            v1134.prototype.Gk = function () {
              vO54.kf.jn.stop();
              vO54.kf.jn.fadeOut(50);
              vO54.kf.ln.stop();
              vO54.kf.ln.fadeOut(50);
              vO54.kf.nn.stop();
              vO54.kf.nn.fadeOut(50);
              vO54.kf.pn.stop();
              vO54.kf.pn.fadeOut(50);
              vO54.kf.sn.stop();
              vO54.kf.sn.fadeIn(500);
              vO54.kf.qn.stop();
              vO54.kf.qn.fadeOut(50);
              vO54.kf.rn.stop();
              vO54.kf.rn.fadeOut(50);
              vO54.kf.tn.stop();
              vO54.kf.tn.fadeOut(50);
              vO54.kf.un_error.stop();
              vO54.kf.un_error.fadeOut(50);
              vO54.kf.mn.stop();
              vO54.kf.mn.fadeIn(1);
              vO54.kf.bgcanvas.stop();
              vO54.kf.bgcanvas.fadeIn(500);
              vO54.GameView.Kf(true);
              vO54.kf.socialButtons.stop();
              vO54.kf.socialButtons.fadeOut(50);
              vO54.kf.vn.stop();
              vO54.kf.vn.fadeIn(500);
            };
            v1134.prototype.Hk = function () {
              this.$n();
            };
            v1134.prototype.Kk = function () {
              return this.Zn != null || this.Yn.length > 0;
            };
            v1134.prototype._n = function (p1466) {
              this.Yn.unshift(p1466);
              setTimeout(function () {
                f205().og.Ik();
              }, 0);
            };
            v1134.prototype.El = function (p1467) {
              this.Yn.push(p1467);
              setTimeout(function () {
                f205().og.Ik();
              }, 0);
            };
            v1134.prototype.$n = function () {
              var vThis115 = this;
              if (this.Zn == null) {
                if (this.Yn.length == 0) {
                  f205().og.Dk();
                  return;
                }
                var v1135 = this.Yn.shift();
                this.Zn = v1135;
                var v1136 = v1135.tf();
                v1136.hide();
                v1136.fadeIn(300);
                v$45.append(v1136);
                v1135.ao = function () {
                  v1136.fadeOut(300);
                  setTimeout(function () {
                    v1136.remove();
                  }, 300);
                  if (vThis115.Zn == v1135) {
                    vThis115.Zn = null;
                  }
                  vThis115.$n();
                };
                v1135.Hk();
              }
            };
            return v1134;
          }();
          vO54.Fk = {
            wn: 0,
            Ek: 1
          };
          vO54.bo = function () {
            var v$46 = $("#popup-menu-label");
            var v$47 = $("#popup-menu-coins-box");
            var v$48 = $("#popup-menu-coins-val");
            $("#popup-menu-back").click(function () {
              var vF20512 = f205();
              vF20512.Ci.Be();
              vF20512.og.Dk();
            });
            v$47.click(function () {
              var vF20513 = f205();
              if (vF20513.Ij.Hj()) {
                vF20513.Ci.Be();
                vF20513.og.Ak(vF20513.og._j);
              }
            });
            var v1137 = decoder.M(vO54.kf, function (p1468, p1469) {
              vO54.kf.call(this, vO54.Fk.Ek);
              this.ma = p1468;
              this.co = p1469;
              this.do = [];
            });
            v1137.prototype.ha = function () {
              v1137.parent.prototype.ha.call(this);
              if (!v1137.eo) {
                v1137.eo = true;
                var vF20514 = f205();
                vF20514.Ij.zl(function () {
                  if (vF20514.Ij.Hj()) {
                    v$48.html(vF20514.Ij.il());
                  } else {
                    v$48.html("0");
                  }
                });
              }
              vO54.bo.fo.stop();
              vO54.bo.fo.fadeOut(100);
            };
            v1137.go = $("#coins-view");
            v1137.ho = $("#leaders-view");
            v1137.io = $("#profile-view");
            v1137.jo = $("#settings-view");
            v1137.ko = $("#login-view");
            v1137.lo = $("#skins-view");
            v1137.mo = $("#store-view");
            v1137.no = $("#wear-view");
            v1137.oo = $("#withdraw-consent-view");
            v1137.po = $("#delete-account-view");
            v1137.fo = $("#please-wait-view");
            v1137.prototype.Gk = function () {
              vO54.kf.jn.stop();
              vO54.kf.jn.fadeOut(200);
              vO54.kf.ln.stop();
              vO54.kf.ln.fadeOut(200);
              vO54.kf.nn.stop();
              vO54.kf.nn.fadeOut(200);
              vO54.kf.pn.stop();
              vO54.kf.pn.fadeIn(200);
              vO54.kf.sn.stop();
              vO54.kf.sn.fadeOut(200);
              vO54.kf.qn.stop();
              vO54.kf.qn.fadeOut(200);
              vO54.kf.rn.stop();
              vO54.kf.rn.fadeOut(200);
              vO54.kf.tn.stop();
              vO54.kf.tn.fadeOut(200);
              vO54.kf.un_error.stop();
              vO54.kf.un_error.fadeOut(200);
              vO54.kf.mn.stop();
              vO54.kf.mn.fadeIn(1);
              vO54.kf.bgcanvas.stop();
              vO54.kf.bgcanvas.fadeIn(500);
              vO54.GameView.Kf(true);
              vO54.kf.socialButtons.stop();
              vO54.kf.socialButtons.fadeIn(200);
              vO54.kf.vn.stop();
              vO54.kf.vn.fadeIn(200);
              v$46.html(this.ma);
              v$47.toggle(this.co);
              this.qo();
            };
            v1137.prototype.qo = function () {};
            v1137.prototype.ro = function (p1470) {
              var vThis116 = this;
              var v1138 = decoder.V(0, 2147483647) & 2147483647;
              this.do.push(v1138);
              vO54.bo.fo.stop();
              vO54.bo.fo.fadeIn(100);
              setTimeout(function () {
                vThis116.so(v1138);
              }, p1470);
              return new vF43(this, v1138);
            };
            v1137.prototype.so = function (p1471) {
              var v1139 = this.do.indexOf(p1471);
              if (!(v1139 < 0)) {
                this.do.splice(v1139, 1);
                if (this.do.length === 0) {
                  vO54.bo.fo.stop();
                  vO54.bo.fo.fadeOut(100);
                }
              }
            };
            return v1137;
          }();
          var vF43 = function () {
            function f300(p1472, p1473) {
              this.to = p1472;
              this.uo = p1473;
            }
            f300.prototype.vo = function () {
              this.to.so(this.uo);
            };
            return f300;
          }();
          vO54.ak = function () {
            var v$49 = $("#store-buy-coins_125000");
            var v$50 = $("#store-buy-coins_50000");
            var v$51 = $("#store-buy-coins_16000");
            var v$52 = $("#store-buy-coins_7000");
            var v$53 = $("#store-buy-coins_3250");
            var v$54 = $("#store-buy-coins_1250");
            var v1140 = decoder.M(vO54.bo, function () {
              vO54.bo.call(this, decoder.H("index.game.popup.menu.coins.tab"), false);
              var vF20515 = f205();
              var vThis117 = this;
              v$49.click(function () {
                vF20515.Ci.Be();
                vThis117.wo("coins_125000");
              });
              v$50.click(function () {
                vF20515.Ci.Be();
                vThis117.wo("coins_50000");
              });
              v$51.click(function () {
                vF20515.Ci.Be();
                vThis117.wo("coins_16000");
              });
              v$52.click(function () {
                vF20515.Ci.Be();
                vThis117.wo("coins_7000");
              });
              v$53.click(function () {
                vF20515.Ci.Be();
                vThis117.wo("coins_3250");
              });
              v$54.click(function () {
                vF20515.Ci.Be();
                vThis117.wo("coins_1250");
              });
            });
            v1140.prototype.ha = function () {
              v1140.parent.prototype.ha.call(this);
            };
            v1140.prototype.qo = function () {
              vO54.bo.go.stop();
              vO54.bo.go.fadeIn(200);
              vO54.bo.ho.stop();
              vO54.bo.ho.fadeOut(50);
              vO54.bo.io.stop();
              vO54.bo.io.fadeOut(50);
              vO54.bo.ko.stop();
              vO54.bo.ko.fadeOut(50);
              vO54.bo.jo.stop();
              vO54.bo.jo.fadeOut(50);
              vO54.bo.lo.stop();
              vO54.bo.lo.fadeOut(50);
              vO54.bo.mo.stop();
              vO54.bo.mo.fadeOut(50);
              vO54.bo.no.stop();
              vO54.bo.no.fadeOut(50);
              vO54.bo.oo.stop();
              vO54.bo.oo.fadeOut(50);
              vO54.bo.po.stop();
              vO54.bo.po.fadeOut(50);
            };
            v1140.prototype.Hk = function () {
              f205().Ci.Ce();
            };
            v1140.prototype.wo = function (p1474) {};
            return v1140;
          }();
          vO54.ck = function () {
            var v$55 = $("#highscore-table");
            var v$56 = $("#leaders-button-level");
            var v$57 = $("#leaders-button-highscore");
            var v$58 = $("#leaders-button-kills");
            var v1141 = decoder.M(vO54.bo, function () {
              vO54.bo.call(this, decoder.H("index.game.popup.menu.leaders.tab"), true);
              var vF20516 = f205();
              var vThis118 = this;
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
                vF20516.Ci.Be();
                vThis118.Eo(vThis118.yo.zo);
              });
              v$57.click(function () {
                vF20516.Ci.Be();
                vThis118.Eo(vThis118.yo.Co);
              });
              v$58.click(function () {
                vF20516.Ci.Be();
                vThis118.Eo(vThis118.yo.Do);
              });
            });
            v1141.prototype.ha = function () {
              v1141.parent.prototype.ha.call(this);
            };
            v1141.prototype.qo = function () {
              vO54.bo.go.stop();
              vO54.bo.go.fadeOut(50);
              vO54.bo.ho.stop();
              vO54.bo.ho.fadeIn(200);
              vO54.bo.io.stop();
              vO54.bo.io.fadeOut(50);
              vO54.bo.ko.stop();
              vO54.bo.ko.fadeOut(50);
              vO54.bo.jo.stop();
              vO54.bo.jo.fadeOut(50);
              vO54.bo.lo.stop();
              vO54.bo.lo.fadeOut(50);
              vO54.bo.mo.stop();
              vO54.bo.mo.fadeOut(50);
              vO54.bo.no.stop();
              vO54.bo.no.fadeOut(50);
              vO54.bo.oo.stop();
              vO54.bo.oo.fadeOut(50);
              vO54.bo.po.stop();
              vO54.bo.po.fadeOut(50);
            };
            v1141.prototype.Hk = function () {
              var vThis119 = this;
              f205().Ci.Ce();
              var v1142 = this.ro(5000);
              var v1143 = decoder.a.b + "/pub/leaders";
              decoder.Z(v1143, function () {
                vThis119.xo = {
                  byLevel: [],
                  byHighScore: [],
                  byKillsAndHeadShots: []
                };
                vThis119.Eo(vThis119.Fo ?? vThis119.yo.zo);
                v1142.vo();
              }, function (p1475) {
                vThis119.xo = p1475;
                vThis119.Eo(vThis119.Fo ?? vThis119.yo.zo);
                v1142.vo();
              });
            };
            v1141.prototype.Eo = function (p1476) {
              this.Fo = p1476;
              for (var v1144 in this.yo) {
                if (this.yo.hasOwnProperty(v1144)) {
                  var v1145 = this.yo[v1144];
                  v1145.Ao.removeClass("pressed");
                }
              }
              this.Fo.Ao.addClass("pressed");
              for (var v1146 = this.xo[this.Fo.Bo], vLS13 = "", vLN0183 = 0; vLN0183 < v1146.length; vLN0183++) {
                var v1147 = v1146[vLN0183];
                vLS13 += "<div class=\"table-row\"><span>" + (vLN0183 + 1) + "</span><span><img src=\"" + v1147.avatarUrl + "\"/></span><span>" + v1147.username + "</span><span>" + v1147.level + "</span><span>" + v1147.highScore + "</span><span>" + v1147.headShots + " / " + v1147.kills + "</span></div>";
              }
              v$55.empty();
              v$55.append(vLS13);
            };
            return v1141;
          }();
          vO54.gk = function () {
            var v$59 = $("#popup-login-gg");
            var v$60 = $("#popup-login-fb");
            var v1148 = decoder.M(vO54.bo, function () {
              var vThis120 = this;
              vO54.bo.call(this, decoder.H("index.game.popup.menu.login.tab"), false);
              var vF20517 = f205();
              v$59.click(function () {
                vF20517.Ci.Be();
                var v1149 = vThis120.ro(10000);
                setTimeout(function () {
                  vF20517.Ij.Ml(function () {
                    if (vF20517.Ij.Hj()) {
                      vF20517.Ci.Fe();
                    }
                    v1149.vo();
                  });
                }, 500);
              });
              v$60.click(function () {
                vF20517.Ci.Be();
                var v1150 = vThis120.ro(10000);
                setTimeout(function () {
                  vF20517.Ij.Jl(function () {
                    if (vF20517.Ij.Hj()) {
                      vF20517.Ci.Fe();
                    }
                    v1150.vo();
                  });
                }, 500);
              });
            });
            v1148.prototype.ha = function () {
              v1148.parent.prototype.ha.call(this);
            };
            v1148.prototype.qo = function () {
              vO54.bo.go.stop();
              vO54.bo.go.fadeOut(50);
              vO54.bo.ho.stop();
              vO54.bo.ho.fadeOut(50);
              vO54.bo.io.stop();
              vO54.bo.io.fadeOut(50);
              vO54.bo.ko.stop();
              vO54.bo.ko.fadeIn(200);
              vO54.bo.jo.stop();
              vO54.bo.jo.fadeOut(50);
              vO54.bo.lo.stop();
              vO54.bo.lo.fadeOut(50);
              vO54.bo.mo.stop();
              vO54.bo.mo.fadeOut(50);
              vO54.bo.no.stop();
              vO54.bo.no.fadeOut(50);
              vO54.bo.oo.stop();
              vO54.bo.oo.fadeOut(50);
              vO54.bo.po.stop();
              vO54.bo.po.fadeOut(50);
            };
            v1148.prototype.Hk = function () {
              f205().Ci.Ce();
            };
            return v1148;
          }();
          vO54.ek = function () {
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
            var v1151 = decoder.M(vO54.bo, function () {
              vO54.bo.call(this, decoder.H("index.game.popup.menu.profile.tab"), true);
            });
            v1151.prototype.ha = function () {
              v1151.parent.prototype.ha.call(this);
            };
            v1151.prototype.qo = function () {
              vO54.bo.go.stop();
              vO54.bo.go.fadeOut(50);
              vO54.bo.ho.stop();
              vO54.bo.ho.fadeOut(50);
              vO54.bo.io.stop();
              vO54.bo.io.fadeIn(200);
              vO54.bo.ko.stop();
              vO54.bo.ko.fadeOut(50);
              vO54.bo.jo.stop();
              vO54.bo.jo.fadeOut(50);
              vO54.bo.lo.stop();
              vO54.bo.lo.fadeOut(50);
              vO54.bo.mo.stop();
              vO54.bo.mo.fadeOut(50);
              vO54.bo.no.stop();
              vO54.bo.no.fadeOut(50);
              vO54.bo.oo.stop();
              vO54.bo.oo.fadeOut(50);
              vO54.bo.po.stop();
              vO54.bo.po.fadeOut(50);
            };
            v1151.prototype.Hk = function () {
              var vF20518 = f205();
              vF20518.Ci.Ce();
              var v1152 = vF20518.Ij.xl();
              var v1153 = moment([v1152.year, v1152.month - 1, v1152.day]).format("LL");
              v$62.html(vF20518.Ij.dl());
              v$61.attr("src", vF20518.Ij.fl());
              v$63.width(vF20518.Ij.kl() * 100 / vF20518.Ij.ll() + "%");
              v$64.html(vF20518.Ij.kl() + " / " + vF20518.Ij.ll());
              v$65.html(vF20518.Ij.jl());
              v$66.html(vF20518.Ij.rl());
              v$67.html(decoder.J(vF20518.Ij.sl()));
              v$68.html(vF20518.Ij.tl());
              v$69.html(vF20518.Ij.ul());
              v$70.html(vF20518.Ij.vl());
              v$71.html(decoder.J(vF20518.Ij.wl()));
              v$72.html(v1153);
            };
            return v1151;
          }();
          vO54.hk = function () {
            var v$73 = $("#settings-music-enabled-switch");
            var v$74 = $("#settings-sfx-enabled-switch");
            var v$75 = $("#settings-show-names-switch");
            var v$76 = $("#popup-logout");
            var v$77 = $("#popup-logout-container");
            var v$78 = $("#popup-delete-account");
            var v$79 = $("#popup-delete-account-container");
            var v$80 = $("#popup-withdraw-consent");
            var v1154 = decoder.M(vO54.bo, function () {
              vO54.bo.call(this, decoder.H("index.game.popup.menu.settings.tab"), false);
              var vThis121 = this;
              var vF20519 = f205();
              v$73.click(function () {
                var v1155 = !!v$73.prop("checked");
                vO54.Vf.eg(vO54.Vf.Yf, v1155, 30);
                vF20519.Ci.re(v1155);
                vF20519.Ci.Be();
              });
              v$74.click(function () {
                var v1156 = !!v$74.prop("checked");
                vO54.Vf.eg(vO54.Vf.Zf, v1156, 30);
                vF20519.Ci.oe(v1156);
                vF20519.Ci.Be();
              });
              v$75.click(function () {
                vF20519.Ci.Be();
              });
              v$76.click(function () {
                vF20519.Ci.Be();
                vThis121.ro(500);
                vF20519.Ij.Kl();
              });
              v$78.click(function () {
                if (vF20519.Ij.Hj()) {
                  vF20519.Ci.Be();
                  vF20519.og.Ak(vF20519.og.Zj);
                } else {
                  vF20519.Ci.Ge();
                }
              });
              v$80.click(function () {
                if (vF20519.Go()) {
                  vF20519.Ci.Be();
                  vF20519.og.Ak(vF20519.og.Xj);
                } else {
                  vF20519.Ci.Ge();
                }
              });
            });
            v1154.prototype.ha = function () {
              v1154.parent.prototype.ha.call(this);
              var vF20520 = f205();
              var vUndefined17 = undefined;
              switch (vO54.Vf.fg(vO54.Vf.Yf)) {
                case "false":
                  vUndefined17 = false;
                  break;
                default:
                  vUndefined17 = true;
              }
              v$73.prop("checked", vUndefined17);
              vF20520.Ci.re(vUndefined17);
              var vUndefined18 = undefined;
              switch (vO54.Vf.fg(vO54.Vf.Zf)) {
                case "false":
                  vUndefined18 = false;
                  break;
                default:
                  vUndefined18 = true;
              }
              v$74.prop("checked", vUndefined18);
              vF20520.Ci.oe(vUndefined18);
              var vUndefined19 = undefined;
              switch (vO54.Vf.fg(vO54.Vf.Xf)) {
                case "false":
                  vUndefined19 = false;
                  break;
                default:
                  vUndefined19 = true;
              }
              v$75.prop("checked", vUndefined19);
              vF20520.Ij.yl(function () {
                v$77.toggle(vF20520.Ij.Hj());
                v$79.toggle(vF20520.Ij.Hj());
              });
            };
            v1154.prototype.qo = function () {
              vO54.bo.go.stop();
              vO54.bo.go.fadeOut(50);
              vO54.bo.ho.stop();
              vO54.bo.ho.fadeOut(50);
              vO54.bo.io.stop();
              vO54.bo.io.fadeOut(50);
              vO54.bo.ko.stop();
              vO54.bo.ko.fadeOut(50);
              vO54.bo.jo.stop();
              vO54.bo.jo.fadeIn(200);
              vO54.bo.lo.stop();
              vO54.bo.lo.fadeOut(50);
              vO54.bo.mo.stop();
              vO54.bo.mo.fadeOut(50);
              vO54.bo.no.stop();
              vO54.bo.no.fadeOut(50);
              vO54.bo.oo.stop();
              vO54.bo.oo.fadeOut(50);
              vO54.bo.po.stop();
              vO54.bo.po.fadeOut(50);
            };
            v1154.prototype.Hk = function () {
              var vF20521 = f205();
              vF20521.Ci.Ce();
              if (vF20521.Go()) {
                v$80.show();
              } else {
                v$80.hide();
              }
            };
            v1154.prototype.Zh = function () {
              return v$75.prop("checked");
            };
            return v1154;
          }();
          vO54.jk = function () {
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
            var v1157 = decoder.M(vO54.bo, function () {
              vO54.bo.call(this, decoder.H("index.game.popup.menu.skins.tab"), true);
              var vThis122 = this;
              var vF20522 = f205();
              this.Ho = null;
              this.Io = [];
              this.Jo = {};
              this.Ko = new vO54.dm(v$81);
              v$86.click(function () {
                vF20522.Ci.Be();
                vThis122.Lo();
              });
              v$89.click(function () {
                vF20522.Ci.Be();
                vThis122.Ho.Mo();
              });
              v$90.click(function () {
                vF20522.Ci.Be();
                vThis122.Ho.No();
              });
            });
            v1157.prototype.ha = function () {
              v1157.parent.prototype.ha.call(this);
              var vThis123 = this;
              var vF20523 = f205();
              vF20523.Lc.$b(function () {
                var v1158 = vF20523.Lc.Xb();
                vThis123.Io = [];
                for (var vLN0184 = 0; vLN0184 < v1158.skinGroupArrayDict.length; vLN0184++) {
                  vThis123.Io.push(new vF44(vThis123, v1158.skinGroupArrayDict[vLN0184]));
                }
                vThis123.Jo = {};
                for (var vLN0185 = 0; vLN0185 < v1158.skinArrayDict.length; vLN0185++) {
                  var v1159 = v1158.skinArrayDict[vLN0185];
                  vThis123.Jo[v1159.id] = v1159;
                }
                vThis123.Oo();
              });
              this.Po(false);
              vF20523.On.zj(function () {
                vThis123.Po(false);
              });
            };
            v1157.prototype.qo = function () {
              vO54.bo.go.stop();
              vO54.bo.go.fadeOut(50);
              vO54.bo.ho.stop();
              vO54.bo.ho.fadeOut(50);
              vO54.bo.io.stop();
              vO54.bo.io.fadeOut(50);
              vO54.bo.ko.stop();
              vO54.bo.ko.fadeOut(50);
              vO54.bo.jo.stop();
              vO54.bo.jo.fadeOut(50);
              vO54.bo.lo.stop();
              vO54.bo.lo.fadeIn(200);
              vO54.bo.mo.stop();
              vO54.bo.mo.fadeOut(50);
              vO54.bo.no.stop();
              vO54.bo.no.fadeOut(50);
              vO54.bo.oo.stop();
              vO54.bo.oo.fadeOut(50);
              vO54.bo.po.stop();
              vO54.bo.po.fadeOut(50);
            };
            v1157.prototype.Hk = function () {
              f205().Ci.pe(vO54.ge.je._e);
              f205().Ci.Ce();
              this.Oo();
              this.Ko.Kf(true);
            };
            v1157.prototype.Bk = function () {
              this.Ko.Kf(false);
            };
            v1157.prototype.Jf = function () {
              this.Ko.Jf();
            };
            v1157.prototype.Nf = function (p1477, p1478) {
              this.Ko.Nf();
            };
            v1157.prototype.Oo = function () {
              var vThis124 = this;
              var vThis125 = this;
              var vF20524 = f205();
              v$88.empty();
              for (var vLN0186 = 0; vLN0186 < this.Io.length; vLN0186++) {
                (function (p1479) {
                  var v1160 = vThis124.Io[p1479];
                  var v1161 = document.createElement("li");
                  v$88.append(v1161);
                  var v$91 = $(v1161);
                  if (v1160.To && v1160.To.isCustom) {
                    v$91.css("background-color", "#FFF");
                    v$91.css("color", "#000");
                  }
                  v$91.html(v1160.Qo());
                  v$91.click(function () {
                    vF20524.Ci.Be();
                    vThis125.Ro(v1160);
                  });
                  v1160.So = v$91;
                })(vLN0186);
              }
              if (this.Io.length > 0) {
                var v1162 = vF20524.On.rj(vO54.tj.sj);
                for (var vLN0186 = 0; vLN0186 < this.Io.length; vLN0186++) {
                  var v1163 = this.Io[vLN0186];
                  for (var v1164 = v1163.To.list, vLN0187 = 0; vLN0187 < v1164.length; vLN0187++) {
                    if (v1164[vLN0187] == v1162) {
                      v1163.Uo = vLN0187;
                      this.Ro(v1163);
                      return;
                    }
                  }
                }
                this.Ro(this.Io[0]);
              }
            };
            v1157.prototype.Ro = function (p1480) {
              var vF20525 = f205();
              if (this.Ho !== p1480) {
                this.Ho = p1480;
                v$88.children().removeClass("pressed");
                if (this.Ho.So) {
                  this.Ho.So.addClass("pressed");
                }
                v$83.html("");
                if (p1480.To != null) {
                  var v1165 = vF20525.Lc.Xb().textDict[p1480.To.description];
                  if (v1165 != null) {
                    v$83.html(decoder.K(decoder.I(v1165)));
                  }
                }
                this.Po(true);
              }
            };
            v1157.prototype.Vo = function () {
              if (this.Ho == null) {
                return vO54.Si.Ui();
              } else {
                return this.Ho.Wo();
              }
            };
            v1157.prototype.Lo = function () {
              var vThis126 = this;
              var v1166 = this.Vo();
              if (v1166.Wi()) {
                var v1167 = v1166.bc();
                vThis126.Xo(v1167);
              }
            };
            v1157.prototype.Xo = function (p1481) {
              var vF20526 = f205();
              var v1168 = vF20526.On.Gj(p1481, vO54.tj.sj);
              if (v1168 != null) {
                var v1169 = v1168.Jj();
                if (!(vF20526.Ij.il() < v1169)) {
                  var v1170 = vF20526.On.rj(vO54.tj.sj);
                  var v1171 = vF20526.On.rj(vO54.tj.uj);
                  var v1172 = vF20526.On.rj(vO54.tj.vj);
                  var v1173 = vF20526.On.rj(vO54.tj.xj);
                  var v1174 = vF20526.On.rj(vO54.tj.wj);
                  var v1175 = this.ro(5000);
                  vF20526.Ij.Hl(p1481, vO54.tj.sj, function () {
                    v1175.vo();
                    vF20526.og.Ak(vF20526.og.tk);
                  }, function (p1482) {
                    vF20526.Ij.Bl(function () {
                      vF20526.On.Fj(v1170, vO54.tj.sj);
                      vF20526.On.Fj(v1171, vO54.tj.uj);
                      vF20526.On.Fj(v1172, vO54.tj.vj);
                      vF20526.On.Fj(v1173, vO54.tj.xj);
                      vF20526.On.Fj(v1174, vO54.tj.wj);
                      vF20526.On.Fj(p1481, vO54.tj.sj);
                      v1175.vo();
                    });
                  });
                }
              }
            };
            v1157.prototype.Po = function (p1483) {
              var vF20527 = f205();
              var v1176 = vF20527.On.yj();
              var v1177 = this.Vo();
              if (v1177.Wi()) {
                var v1178 = v1177.bc();
                var v1179 = vF20527.On.Gj(v1178, vO54.tj.sj);
                var v1180 = false;
                var v1181 = vF20527.On.Cj(v1178, vO54.tj.sj);
                var v1182 = true;
                if (v1181) {
                  v$84.hide();
                  v$86.hide();
                } else if (v1179 == null || v1179.Kj()) {
                  v1180 = true;
                  v$84.show();
                  v$86.hide();
                  v$85.text(decoder.H("index.game.popup.menu.store.locked"));
                  if (v1179 != null && v1179.Kj()) {
                    var v1183 = vF20527.Lc.Xb().textDict[v1179.Em()];
                    if (v1183 != null) {
                      v$85.text(decoder.I(v1183));
                    }
                  }
                } else {
                  v1182 = false;
                  v$84.hide();
                  v$86.show();
                  v$87.html(v1179.Jj());
                }
                v$82.html("");
                var v1184 = vF20527.Lc.Xb().textDict[v1179.Fm()];
                var v1185 = v1184 ? decoder.K(decoder.I(v1184)) : v1179.Fm();
                if (v1179 != null && v1179.Fm() != null) {
                  v$82.html(v1185);
                }
                if (true) {
                  v$2.html(`<button onclick="mbf.mbf_cambiar_add('${v1178}', '${v1185}')">Add</button>`);
                } else {
                  v$2.html("");
                }
                this.Ko.$l(v1176.Um(v1178));
                this.Ko.um(v1180);
                if (p1483) {
                  vF20527.On.Fj(v1178, vO54.tj.sj);
                }
              }
            };
            var vF44 = function () {
              function f301(p1484, p1485) {
                this.Yo = p1484;
                this.Uo = 0;
                this.To = p1485;
              }
              f301.prototype.Mo = function () {
                if (--this.Uo < 0) {
                  this.Uo = this.To.list.length - 1;
                }
                this.Yo.Po(true);
              };
              f301.prototype.No = function () {
                if (++this.Uo >= this.To.list.length) {
                  this.Uo = 0;
                }
                this.Yo.Po(true);
              };
              f301.prototype.Qo = function () {
                if (this.To.img) {
                  var v1186 = f205().Lc.Xb().customPaths;
                  var v1187 = URL_CDN + "/images/" + v1186.texture;
                  var vA27 = [];
                  try {
                    vA27.push(`background-image:url('${v1187}')`);
                    vA27.push(`background-position: -${v1186.map[this.To.img].x}px -${v1186.map[this.To.img].y}px`);
                    vA27.push("background-repeat:no-repeat");
                    vA27.push("width: 180px");
                    vA27.push("height: 40px");
                  } catch (e61) {
                    console.error(v1187, e61);
                  }
                  return `<div id="${this.To.id}" style="${vA27.join(";")}"></div>`;
                }
                return decoder.I(this.To.name);
              };
              f301.prototype.Wo = function () {
                if (this.Uo >= this.To.list.length) {
                  return vO54.Si.Ui();
                } else {
                  return vO54.Si.Vi(this.To.list[this.Uo]);
                }
              };
              return f301;
            }();
            return v1157;
          }();
          vO54.lk = function () {
            var v$92 = $("#store-go-coins-button");
            var v$93 = $("#store-go-skins-button");
            var v$94 = $("#store-go-wear-button");
            var v1188 = decoder.M(vO54.bo, function () {
              vO54.bo.call(this, decoder.H("index.game.popup.menu.store.tab"), true);
              var vF20528 = f205();
              v$92.click(function () {
                vF20528.Ci.Be();
                vF20528.og.Ak(vF20528.og._j);
              });
              v$93.click(function () {
                vF20528.Ci.Be();
                vF20528.og.Ak(vF20528.og.ik);
              });
              v$94.click(function () {
                vF20528.Ci.Be();
                vF20528.og.Ak(vF20528.og.mk);
              });
            });
            v1188.prototype.ha = function () {
              v1188.parent.prototype.ha.call(this);
            };
            v1188.prototype.qo = function () {
              vO54.bo.go.stop();
              vO54.bo.go.fadeOut(50);
              vO54.bo.ho.stop();
              vO54.bo.ho.fadeOut(50);
              vO54.bo.io.stop();
              vO54.bo.io.fadeOut(50);
              vO54.bo.ko.stop();
              vO54.bo.ko.fadeOut(50);
              vO54.bo.jo.stop();
              vO54.bo.jo.fadeOut(50);
              vO54.bo.lo.stop();
              vO54.bo.lo.fadeOut(50);
              vO54.bo.mo.stop();
              vO54.bo.mo.fadeIn(200);
              vO54.bo.no.stop();
              vO54.bo.no.fadeOut(50);
              vO54.bo.oo.stop();
              vO54.bo.oo.fadeOut(50);
              vO54.bo.po.stop();
              vO54.bo.po.fadeOut(50);
            };
            v1188.prototype.Hk = function () {
              f205().Ci.Ce();
            };
            return v1188;
          }();
          vO54.nk = function () {
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
            var v1189 = decoder.M(vO54.bo, function () {
              var vThis127 = this;
              vO54.bo.call(this, decoder.H("index.game.popup.menu.wear.tab"), true);
              var vF20529 = f205();
              var vThis128 = this;
              this.Zo = [];
              this.uj = new vF45(this, vO54.tj.uj, v$101);
              this.vj = new vF45(this, vO54.tj.vj, v$102);
              this.xj = new vF45(this, vO54.tj.xj, v$103);
              this.wj = new vF45(this, vO54.tj.wj, v$104);
              this.$o = null;
              this._o = null;
              this.ap = null;
              this.bp = null;
              this.cp = null;
              this.dp = null;
              this.Ko = new vO54.dm(v$95);
              v$99.click(function () {
                vF20529.Ci.Be();
                vThis128.ep();
              });
              v$106.click(function () {
                vF20529.Ci.Be();
                vThis128.$o.fp();
              });
              v$107.click(function () {
                vF20529.Ci.Be();
                vThis128.$o.gp();
              });
              v$101.click(function () {
                vF20529.Ci.Be();
                vThis128.hp(vThis127.uj);
              });
              v$102.click(function () {
                vF20529.Ci.Be();
                vThis128.hp(vThis127.vj);
              });
              v$103.click(function () {
                vF20529.Ci.Be();
                vThis128.hp(vThis127.xj);
              });
              v$104.click(function () {
                vF20529.Ci.Be();
                vThis128.hp(vThis127.wj);
              });
              this.Zo.push(this.uj);
              this.Zo.push(this.vj);
              this.Zo.push(this.xj);
              this.Zo.push(this.wj);
            });
            v1189.prototype.ha = function () {
              v1189.parent.prototype.ha.call(this);
              var vF20530 = f205();
              var vThis129 = this;
              vF20530.Lc.$b(function () {
                var v1190 = vF20530.Lc.Xb();
                vThis129._o = v1190.eyesDict;
                vThis129.ap = v1190.mouthDict;
                vThis129.bp = v1190.glassesDict;
                vThis129.cp = v1190.hatDict;
                vThis129.dp = v1190.colorDict;
                vThis129.uj.ip(v1190.eyesVariantArray);
                vThis129.uj.jp(vThis129._o);
                vThis129.vj.ip(v1190.mouthVariantArray);
                vThis129.vj.jp(vThis129.ap);
                vThis129.xj.ip(v1190.glassesVariantArray);
                vThis129.xj.jp(vThis129.bp);
                vThis129.wj.ip(v1190.hatVariantArray);
                vThis129.wj.jp(vThis129.cp);
              });
              this.Po(false);
              vF20530.On.zj(function () {
                vThis129.Po(false);
              });
            };
            v1189.prototype.qo = function () {
              vO54.bo.go.stop();
              vO54.bo.go.fadeOut(50);
              vO54.bo.ho.stop();
              vO54.bo.ho.fadeOut(50);
              vO54.bo.io.stop();
              vO54.bo.io.fadeOut(50);
              vO54.bo.ko.stop();
              vO54.bo.ko.fadeOut(50);
              vO54.bo.jo.stop();
              vO54.bo.jo.fadeOut(50);
              vO54.bo.lo.stop();
              vO54.bo.lo.fadeOut(50);
              vO54.bo.mo.stop();
              vO54.bo.mo.fadeOut(50);
              vO54.bo.no.stop();
              vO54.bo.no.fadeIn(200);
              vO54.bo.oo.stop();
              vO54.bo.oo.fadeOut(50);
              vO54.bo.po.stop();
              vO54.bo.po.fadeOut(50);
            };
            v1189.prototype.Hk = function () {
              f205().Ci.pe(vO54.ge.je._e);
              f205().Ci.Ce();
              this.hp(this.$o ?? this.uj);
              this.Ko.Kf(true);
            };
            v1189.prototype.Bk = function () {
              this.Ko.Kf(false);
            };
            v1189.prototype.Jf = function () {
              this.Ko.Jf();
            };
            v1189.prototype.Nf = function (p1486, p1487) {
              this.Ko.Nf();
            };
            v1189.prototype.hp = function (p1488) {
              this.$o = p1488;
              for (var vLN0188 = 0; vLN0188 < this.Zo.length; vLN0188++) {
                this.Zo[vLN0188].Ao.removeClass("pressed");
              }
              this.$o.Ao.addClass("pressed");
              this.$o.Gk();
            };
            v1189.prototype.kp = function () {
              if (this.$o == null) {
                return vO54.Si.Ui();
              } else {
                return vO54.Si.Vi({
                  ae: this.$o.Wo(),
                  nd: this.$o.nd
                });
              }
            };
            v1189.prototype.ep = function () {
              var vThis130 = this;
              var v1191 = this.kp();
              if (v1191.Wi()) {
                var v1192 = v1191.bc();
                vThis130.lp(v1192.ae, v1192.nd);
              }
            };
            v1189.prototype.lp = function (p1489, p1490) {
              var vF20531 = f205();
              var v1193 = vF20531.On.Gj(p1489, p1490);
              if (v1193 != null) {
                var v1194 = v1193.Jj();
                if (!(vF20531.Ij.il() < v1194)) {
                  var v1195 = vF20531.On.rj(vO54.tj.sj);
                  var v1196 = vF20531.On.rj(vO54.tj.uj);
                  var v1197 = vF20531.On.rj(vO54.tj.vj);
                  var v1198 = vF20531.On.rj(vO54.tj.xj);
                  var v1199 = vF20531.On.rj(vO54.tj.wj);
                  var v1200 = this.ro(5000);
                  vF20531.Ij.Hl(p1489, p1490, function () {
                    v1200.vo();
                    vF20531.og.Ak(vF20531.og.tk);
                  }, function (p1491) {
                    vF20531.Ij.Bl(function () {
                      vF20531.On.Fj(v1195, vO54.tj.sj);
                      vF20531.On.Fj(v1196, vO54.tj.uj);
                      vF20531.On.Fj(v1197, vO54.tj.vj);
                      vF20531.On.Fj(v1198, vO54.tj.xj);
                      vF20531.On.Fj(v1199, vO54.tj.wj);
                      vF20531.On.Fj(p1489, p1490);
                      v1200.vo();
                    });
                  });
                }
              }
            };
            v1189.prototype.Po = function (p1492) {
              var vF20532 = f205();
              var v1201 = vF20532.On.yj();
              var v1202 = this.kp();
              if (v1202.Wi()) {
                var v1203 = v1202.bc();
                var v1204 = vF20532.On.Gj(v1203.ae, v1203.nd);
                var v1205 = false;
                if (vF20532.On.Cj(v1203.ae, v1203.nd)) {
                  v$97.hide();
                  v$99.hide();
                } else if (v1204 == null || v1204.Kj()) {
                  v1205 = true;
                  v$97.show();
                  v$99.hide();
                  v$98.text(decoder.H("index.game.popup.menu.store.locked"));
                  if (v1204 != null && v1204.Kj()) {
                    var v1206 = vF20532.Lc.Xb().textDict[v1204.Em()];
                    if (v1206 != null) {
                      v$98.text(decoder.I(v1206));
                    }
                  }
                } else {
                  v$97.hide();
                  v$99.show();
                  v$100.html(v1204.Jj());
                }
                v$96.html("");
                if (v1204 != null && v1204.Fm() != null) {
                  var v1207 = vF20532.Lc.Xb().textDict[v1204.Fm()];
                  if (v1207 != null) {
                    v$96.html(decoder.K(decoder.I(v1207)));
                  }
                }
                var v1208 = this.Ko;
                switch (v1203.nd) {
                  case vO54.tj.uj:
                    v1208.$l(v1201.Vm(v1203.ae));
                    v1208.vm(v1205);
                    break;
                  case vO54.tj.vj:
                    v1208.$l(v1201.Wm(v1203.ae));
                    v1208.wm(v1205);
                    break;
                  case vO54.tj.xj:
                    v1208.$l(v1201.Ym(v1203.ae));
                    v1208.ym(v1205);
                    break;
                  case vO54.tj.wj:
                    v1208.$l(v1201.Xm(v1203.ae));
                    v1208.xm(v1205);
                }
                if (p1492) {
                  vF20532.On.Fj(v1203.ae, v1203.nd);
                }
              }
            };
            var vF45 = function () {
              function f302(p1493, p1494, p1495) {
                this.Yo = p1493;
                this.nd = p1494;
                this.Ao = p1495;
                this.ac = {};
                this.mp = [[]];
                this.np = -10;
                this.op = -10;
              }
              f302.prototype.ip = function (p1496) {
                this.mp = p1496;
              };
              f302.prototype.jp = function (p1497) {
                this.ac = p1497;
              };
              f302.prototype.Gk = function () {
                var vF20533 = f205();
                var v1209 = vF20533.On.rj(this.nd);
                for (var vLN0189 = 0; vLN0189 < this.mp.length; vLN0189++) {
                  for (var vLN0190 = 0; vLN0190 < this.mp[vLN0189].length; vLN0190++) {
                    if (this.mp[vLN0189][vLN0190] == v1209) {
                      this.pp(vLN0189);
                      this.qp(vLN0190);
                      return;
                    }
                  }
                }
                this.pp(0);
                this.qp(0);
              };
              f302.prototype.fp = function () {
                var v1210 = this.np - 1;
                if (v1210 < 0) {
                  v1210 = this.mp.length - 1;
                }
                this.pp(v1210);
                this.qp(this.op % this.mp[v1210].length);
              };
              f302.prototype.gp = function () {
                var v1211 = this.np + 1;
                if (v1211 >= this.mp.length) {
                  v1211 = 0;
                }
                this.pp(v1211);
                this.qp(this.op % this.mp[v1211].length);
              };
              f302.prototype.pp = function (p1498) {
                var vThis131 = this;
                if (!(p1498 < 0) && !(p1498 >= this.mp.length)) {
                  this.np = p1498;
                  v$105.empty();
                  var v1212 = this.mp[this.np];
                  if (v1212.length > 1) {
                    for (var vLN0191 = 0; vLN0191 < v1212.length; vLN0191++) {
                      (function (p1499) {
                        var v1213 = v1212[p1499];
                        var v1214 = vThis131.ac[v1213];
                        var v1215 = "#" + vThis131.Yo.dp[v1214.prime];
                        var v$108 = $("<div style=\"border-color:" + v1215 + "\"></div>");
                        v$108.click(function () {
                          f205().Ci.Be();
                          vThis131.qp(p1499);
                        });
                        v$105.append(v$108);
                      })(vLN0191);
                    }
                  }
                }
              };
              f302.prototype.qp = function (p1500) {
                if (!(p1500 < 0) && !(p1500 >= this.mp[this.np].length)) {
                  this.op = p1500;
                  v$105.children().css("background-color", "transparent");
                  var v1216 = v$105.children(":nth-child(" + (1 + p1500) + ")");
                  v1216.css("background-color", v1216.css("border-color"));
                  this.Yo.Po(true);
                }
              };
              f302.prototype.Wo = function () {
                return this.mp[this.np][this.op];
              };
              return f302;
            }();
            return v1189;
          }();
          vO54.Yj = function () {
            var v$109 = $("#withdraw-consent-yes");
            var v$110 = $("#withdraw-consent-no");
            var v1217 = decoder.M(vO54.bo, function () {
              vO54.bo.call(this, decoder.H("index.game.popup.menu.consent.tab"), false);
              var vF20534 = f205();
              v$109.click(function () {
                vF20534.Ci.Be();
                if (vF20534.Go()) {
                  vF20534.og.Ak(vF20534.og._e);
                  vF20534.rp(false, true);
                  vF20534.og.qk._n(new vO54.sp());
                } else {
                  vF20534.og.Dk();
                }
              });
              v$110.click(function () {
                vF20534.Ci.Be();
                vF20534.og.Dk();
              });
            });
            v1217.prototype.ha = function () {
              v1217.parent.prototype.ha.call(this);
            };
            v1217.prototype.qo = function () {
              vO54.bo.go.stop();
              vO54.bo.go.fadeOut(50);
              vO54.bo.ho.stop();
              vO54.bo.ho.fadeOut(50);
              vO54.bo.io.stop();
              vO54.bo.io.fadeOut(50);
              vO54.bo.ko.stop();
              vO54.bo.ko.fadeOut(50);
              vO54.bo.jo.stop();
              vO54.bo.jo.fadeOut(50);
              vO54.bo.lo.stop();
              vO54.bo.lo.fadeOut(50);
              vO54.bo.mo.stop();
              vO54.bo.mo.fadeOut(50);
              vO54.bo.no.stop();
              vO54.bo.no.fadeOut(50);
              vO54.bo.oo.stop();
              vO54.bo.oo.fadeIn(200);
              vO54.bo.po.stop();
              vO54.bo.po.fadeOut(50);
            };
            v1217.prototype.Hk = function () {
              f205().Ci.Ce();
            };
            return v1217;
          }();
          vO54.$j = function () {
            var v$111 = $("#delete-account-timer");
            var v$112 = $("#delete-account-yes");
            var v$113 = $("#delete-account-no");
            var v1218 = decoder.M(vO54.bo, function () {
              vO54.bo.call(this, decoder.H("index.game.popup.menu.delete.tab"), false);
              var vF20535 = f205();
              v$112.click(function () {
                vF20535.Ci.Be();
                if (vF20535.Ij.Hj()) {
                  vF20535.Ij.Sl();
                  vF20535.Ij.Kl();
                } else {
                  vF20535.og.Dk();
                }
              });
              v$113.click(function () {
                vF20535.Ci.Be();
                vF20535.og.Dk();
              });
              this.tp = [];
            });
            v1218.prototype.ha = function () {
              v1218.parent.prototype.ha.call(this);
            };
            v1218.prototype.qo = function () {
              vO54.bo.go.stop();
              vO54.bo.go.fadeOut(50);
              vO54.bo.ho.stop();
              vO54.bo.ho.fadeOut(50);
              vO54.bo.io.stop();
              vO54.bo.io.fadeOut(50);
              vO54.bo.ko.stop();
              vO54.bo.ko.fadeOut(50);
              vO54.bo.jo.stop();
              vO54.bo.jo.fadeOut(50);
              vO54.bo.lo.stop();
              vO54.bo.lo.fadeOut(50);
              vO54.bo.mo.stop();
              vO54.bo.mo.fadeOut(50);
              vO54.bo.no.stop();
              vO54.bo.no.fadeOut(50);
              vO54.bo.oo.stop();
              vO54.bo.oo.fadeOut(50);
              vO54.bo.po.stop();
              vO54.bo.po.fadeIn(200);
            };
            v1218.prototype.Hk = function () {
              f205().Ci.Ge();
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
            v1218.prototype.vp = function (p1501, p1502) {
              var vSetTimeout2 = setTimeout(p1501, p1502);
              this.tp.push(vSetTimeout2);
            };
            v1218.prototype.up = function () {
              for (var vLN0192 = 0; vLN0192 < this.tp.length; vLN0192++) {
                clearTimeout(this.tp[vLN0192]);
              }
              this.tp = [];
            };
            return v1218;
          }();
          vO54.wp = function () {
            function f303() {
              this.ao = function () {};
            }
            f303.prototype.tf = function () {};
            f303.prototype.Hk = function () {};
            return f303;
          }();
          vO54.Gl = function () {
            var v1219 = decoder.M(vO54.wp, function (p1503) {
              vO54.wp.call(this);
              var v1220 = Date.now() + "_" + Math.floor(1000 + Math.random() * 8999);
              this.xp = $("<div id=\"" + v1220 + "\" class=\"toaster toaster-coins\">    <img class=\"toaster-coins-img\" alt=\"Wormate Coin\" src=\"/images/coin_320.png\" />    <div class=\"toaster-coins-val\">+" + p1503 + "</div>    <div class=\"toaster-coins-close\">" + decoder.H("index.game.toaster.continue") + "</div></div>");
              var vThis132 = this;
              this.xp.find(".toaster-coins-close").click(function () {
                f205().Ci.Be();
                vThis132.ao();
              });
            });
            v1219.prototype.tf = function () {
              return this.xp;
            };
            v1219.prototype.Hk = function () {
              f205().Ci.Ee();
            };
            return v1219;
          }();
          vO54.Fl = function () {
            var v1221 = decoder.M(vO54.wp, function (p1504) {
              vO54.wp.call(this);
              var v1222 = Date.now() + "_" + Math.floor(1000 + Math.random() * 8999);
              this.xp = $("<div id=\"" + v1222 + "\" class=\"toaster toaster-levelup\">    <img class=\"toaster-levelup-img\" alt=\"Wormate Level Up Star\" src=\"/images/level-star.svg\" />    <div class=\"toaster-levelup-val\">" + p1504 + "</div>    <div class=\"toaster-levelup-text\">" + decoder.H("index.game.toaster.levelup") + "</div>    <div class=\"toaster-levelup-close\">" + decoder.H("index.game.toaster.continue") + "</div></div>");
              var vThis133 = this;
              this.xp.find(".toaster-levelup-close").click(function () {
                f205().Ci.Be();
                vThis133.ao();
              });
            });
            v1221.prototype.tf = function () {
              return this.xp;
            };
            v1221.prototype.Hk = function () {
              f205().Ci.De();
            };
            return v1221;
          }();
          vO54.sp = function () {
            var v1223 = decoder.M(vO54.wp, function () {
              vO54.wp.call(this);
              var vThis134 = this;
              var vF20536 = f205();
              var v1224 = Date.now() + "_" + Math.floor(1000 + Math.random() * 8999);
              this.xp = $("<div id=\"" + v1224 + "\" class=\"toaster toaster-consent-accepted\">    <img class=\"toaster-consent-accepted-logo\" src=\"" + decoder.a.d + "\" alt=\"Wormate.io logo\"/>    <div class=\"toaster-consent-accepted-container\">        <span class=\"toaster-consent-accepted-text\">" + decoder.H("index.game.toaster.consent.text").replaceAll(" ", "&nbsp;").replaceAll("\n", "<br/>") + "</span>        <a class=\"toaster-consent-accepted-link\" href=\"/privacy-policy\">" + decoder.H("index.game.toaster.consent.link") + "</a>    </div>    <div class=\"toaster-consent-close\">" + decoder.H("index.game.toaster.consent.iAccept") + "</div></div>");
              this.yp = this.xp.find(".toaster-consent-close");
              this.yp.hide();
              this.yp.click(function () {
                vF20536.Ci.Be();
                if (vF20536.Go()) {
                  vF20536.rp(true, true);
                }
                vThis134.ao();
              });
            });
            v1223.prototype.tf = function () {
              return this.xp;
            };
            v1223.prototype.Hk = function () {
              var vThis135 = this;
              var vF20537 = f205();
              if (vF20537.Go() && !vF20537.hl()) {
                vF20537.Ci.Ge();
                setTimeout(function () {
                  vThis135.yp.fadeIn(300);
                }, 2000);
              } else {
                setTimeout(function () {
                  vThis135.ao();
                }, 0);
              }
            };
            return v1223;
          }();
          vO54.uk = function () {
            var v$114 = $("#error-gateway-connection-retry");
            var v1225 = decoder.M(vO54.kf, function () {
              vO54.kf.call(this, vO54.Fk.wn);
              var vF20538 = f205();
              v$114.click(function () {
                vF20538.Ci.Be();
                vF20538.og.ie.Mn();
                vF20538.og.Ak(vF20538.og.ie);
                setTimeout(function () {
                  var v1226 = decoder.a.b + "/pub/healthCheck/ping";
                  decoder.Z(v1226, function () {
                    vF20538.og.Ak(vF20538.og.tk);
                  }, function (p1505) {
                    vF20538.og.ie.Kn();
                    vF20538.Lc.Ib(function () {
                      vF20538.og.Ak(vF20538.og._e);
                    }, function (p1506) {
                      vF20538.og.Ak(vF20538.og.tk);
                    }, function (p1507, p1508) {
                      var vP1507 = p1507;
                      vF20538.og.ie.Ln(vP1507, p1508);
                    });
                  });
                }, 2000);
              });
            });
            v1225.prototype.ha = function () {};
            v1225.prototype.Gk = function () {
              vO54.kf.jn.stop();
              vO54.kf.jn.fadeOut(50);
              vO54.kf.ln.stop();
              vO54.kf.ln.fadeOut(50);
              vO54.kf.nn.stop();
              vO54.kf.nn.fadeOut(50);
              vO54.kf.pn.stop();
              vO54.kf.pn.fadeOut(50);
              vO54.kf.sn.stop();
              vO54.kf.sn.fadeOut(50);
              vO54.kf.qn.stop();
              vO54.kf.qn.fadeOut(50);
              vO54.kf.rn.stop();
              vO54.kf.rn.fadeOut(50);
              vO54.kf.tn.stop();
              vO54.kf.tn.fadeIn(500);
              vO54.kf.un_error.stop();
              vO54.kf.un_error.fadeOut(50);
              vO54.kf.mn.stop();
              vO54.kf.mn.fadeIn(1);
              vO54.kf.bgcanvas.stop();
              vO54.kf.bgcanvas.fadeIn(500);
              vO54.GameView.Kf(true);
              vO54.kf.socialButtons.stop();
              vO54.kf.socialButtons.fadeOut(50);
              vO54.kf.vn.stop();
              vO54.kf.vn.fadeOut(50);
            };
            v1225.prototype.Hk = function () {
              var vF20539 = f205();
              vF20539.Ci.pe(vO54.ge.je._e);
              vF20539.Ci.Ge();
            };
            return v1225;
          }();
          vO54.wk = function () {
            var v$115 = $("#error-game-connection-retry");
            var v1227 = decoder.M(vO54.kf, function () {
              vO54.kf.call(this, vO54.Fk.wn);
              var vF20540 = f205();
              v$115.click(function () {
                vF20540.Ci.Be();
                vF20540.og.Ak(vF20540.og._e);
              });
            });
            v1227.prototype.ha = function () {};
            v1227.prototype.Gk = function () {
              vO54.kf.jn.stop();
              vO54.kf.jn.fadeOut(50);
              vO54.kf.ln.stop();
              vO54.kf.ln.fadeOut(50);
              vO54.kf.nn.stop();
              vO54.kf.nn.fadeOut(50);
              vO54.kf.pn.stop();
              vO54.kf.pn.fadeOut(50);
              vO54.kf.sn.stop();
              vO54.kf.sn.fadeOut(50);
              vO54.kf.qn.stop();
              vO54.kf.qn.fadeOut(50);
              vO54.kf.rn.stop();
              vO54.kf.rn.fadeOut(50);
              vO54.kf.tn.stop();
              vO54.kf.tn.fadeOut(50);
              vO54.kf.un_error.stop();
              vO54.kf.un_error.fadeIn(500);
              vO54.kf.mn.stop();
              vO54.kf.mn.fadeIn(1);
              vO54.kf.bgcanvas.stop();
              vO54.kf.bgcanvas.fadeIn(500);
              vO54.GameView.Kf(true);
              vO54.kf.socialButtons.stop();
              vO54.kf.socialButtons.fadeOut(50);
              vO54.kf.vn.stop();
              vO54.kf.vn.fadeOut(50);
            };
            v1227.prototype.Hk = function () {
              var vF20541 = f205();
              vF20541.Ci.pe(vO54.ge.je._e);
              vF20541.Ci.Ge();
            };
            return v1227;
          }();
          decoder.zp = function () {
            function f304(p1509) {
              var v1228 = p1509 + Math.floor(Math.random() * 65535) * 37;
              vO54.Vf.eg(vO54.Vf.cg, v1228, 30);
            }
            function f305() {
              return parseInt(vO54.Vf.fg(vO54.Vf.cg)) % 37;
            }
            return function () {
              var vF305 = f305();
              if (!(vF305 >= 0) || !(vF305 < vF46.Ap)) {
                vF305 = Math.max(0, vF46.Ap - 2);
              }
              var vO71 = {
                zn: vF46,
                Bp: false
              };
              vO71.Cp = Date.now();
              vO71.Dp = 0;
              vO71.Ep = 0;
              vO71.Fp = null;
              vO71.Gp = decoder.a.j;
              vO71.Hp = decoder.a.i;
              vO71.dh = null;
              vO71.Lc = null;
              vO71.xe = null;
              vO71.Ci = null;
              vO71.og = null;
              vO71.On = null;
              vO71.Ij = null;
              try {
                if (navigator && navigator.geolocation) {
                  navigator.geolocation.getCurrentPosition(function (p1510) {
                    if (p1510.coords !== undefined) {
                      var v1229 = p1510.coords;
                      if (v1229.latitude !== undefined && v1229.longitude !== undefined) {
                        vO71.Fp = p1510;
                      }
                    }
                  }, function (p1511) {});
                }
              } catch (e62) {}
              vO71.Ip = function () {
                vO71.dh = new vO54.Engine();
                vO71.dh.Kp = new vO54.MessageProcessor(vO71.dh);
                vO71.Lc = new vO54._a();
                vO71.xe = new vO54.Qj();
                vO71.Ci = new vO54.ge();
                vO71.og = new vO54.Tj();
                vO71.On = new vO54.kj();
                vO71.Ij = new vO54.Mk();
                vO71.ha();
              };
              vO71.ha = function () {
                try {
                  ga("send", "event", "app", window.runtimeHash + "_init");
                } catch (e63) {}
                vO71.dh.Lp = function () {
                  vO71.og.Ak(vO71.og.vk);
                };
                vO71.dh.Mp = function () {
                  var v1230 = vO71.og._e.Wn();
                  try {
                    ga("send", "event", "game", window.runtimeHash + "_start", v1230);
                  } catch (e64) {}
                  vO71.Ci.pe(vO54.ge.je.af);
                  vO71.og.Ak(vO71.og.af.Dn());
                };
                vO71.dh.Np = function () {
                  try {
                    ga("send", "event", "game", window.runtimeHash + "_end");
                  } catch (e65) {}
                  if ($("body").height() >= 430) {
                    vO71.zn.Op.ka();
                  }
                  vO71.Lc.Ib(null, null, null);
                  (function () {
                    var v1231 = Math.floor(vO71.dh.ch.Bh);
                    var v1232 = vO71.dh.Ih;
                    if (vO71.Ij.Hj()) {
                      vO71.Ij.Bl(function () {
                        vO71.Pp(v1231, v1232);
                      });
                    } else {
                      vO71.Pp(v1231, v1232);
                    }
                  })();
                };
                vO71.dh.Qp = function (p1512) {
                  p1512(vO71.og.af.Gn(), vO71.og.af.Hn());
                };
                vO71.Ij.yl(function () {
                  var v1233 = vO71.og.Lk();
                  if (v1233 != null && v1233.nd === vO54.Fk.Ek) {
                    vO71.Ci.pe(vO54.ge.je._e);
                    vO71.og.Ak(vO71.og._e);
                  }
                  if (vO71.Ij.Hj()) {
                    try {
                      var v1234 = vO71.Ij.cl();
                      ga("set", "userId", v1234);
                    } catch (e66) {}
                  }
                  if (vO71.Go() && vO71.Ij.Hj() && !vO71.Ij.hl()) {
                    vO71.rp(false, false);
                    vO71.og.qk._n(new vO54.sp());
                  } else {
                    vO71.Rp(true);
                  }
                });
                vO71.dh.run();
                vO71.og.ha();
                vO71.On.ha();
                vO71.Lc.ha();
                vO71.og._e.Vn();
                vO71.og.Ak(vO71.og._e);
                vO71.xe.ha(function () {
                  vO71.Ci.ha();
                  vO71.Ij.ha();
                  vO71.Lc.Ib(function () {
                    vO71.og._e.Un();
                    vO71.og.Ak(vO71.og._e);
                  }, function (p1513) {
                    vO71.og._e.Un();
                    vO71.og.Ak(vO71.og.tk);
                  }, function (p1514, p1515) {
                    var vP1514 = p1514;
                    vO71.og.ie.Ln(vP1514, p1515);
                    vO71.og._e.Ln(vP1514, p1515);
                  });
                  if (vO71.Go() && !vO71.hl()) {
                    vO71.og.qk._n(new vO54.sp());
                  } else {
                    vO71.Rp(true);
                  }
                });
              };
              vO71.Sp = function (p1516) {
                if (vO71.Ij.Hj()) {
                  var v1235 = vO71.Ij.Al();
                  var v1236 = decoder.a.b + "/pub/wuid/" + v1235 + "/consent/change?value=" + encodeURI(p1516);
                  decoder.Z(v1236, function () {}, function (p1517) {});
                }
              };
              vO71.Pn = function (p1518) {
                vF305++;
                if (!vO71.zn.Tp && vF305 >= vO71.zn.Ap) {
                  vO71.og.Ak(vO71.og.xk);
                  vO71.Ci.pe(vO54.ge.je.cf);
                  vO71.zn.Up.ia();
                } else {
                  f304(vF305);
                  vO71.Vp(p1518);
                }
              };
              vO71.Vp = function (p1519) {
                if (vO71.dh.Wp()) {
                  vO71.og.ie.Mn();
                  vO71.og.Ak(vO71.og.ie);
                  var v1237 = vO71.og._e.Wn();
                  vO54.Vf.eg(vO54.Vf._f, v1237, 30);
                  var v1238 = vO71.og.$h.Zh();
                  vO54.Vf.eg(vO54.Vf.Xf, v1238, 30);
                  var vLN0193 = 0;
                  if (vO71.Fp != null) {
                    var v1239 = vO71.Fp.coords.latitude;
                    var v1240 = vO71.Fp.coords.longitude;
                    vLN0193 = Math.max(0, Math.min(32767, (v1239 + 90) / 180 * 32768)) << 1 | 1 | Math.max(0, Math.min(65535, (v1240 + 180) / 360 * 65536)) << 16;
                  }
                  if (vO71.Ij.Hj()) {
                    vO71.Xp(v1237, vLN0193, p1519);
                  } else {
                    var v1241 = vO71.og._e.el();
                    vO54.Vf.eg(vO54.Vf.ag, v1241, 30);
                    var v1242 = vO71.On.rj(vO54.tj.sj);
                    vO54.Vf.eg(vO54.Vf.bg, v1242, 30);
                    vO71.Yp(v1237, vLN0193);
                  }
                }
              };
              vO71.Xp = function (p1520, p1521, p1522) {
                var vVO71 = vO71;
                var v1243 = vO71.Ij.Al();
                var v1244 = vO71.og._e.el();
                var v1245 = vO71.On.rj(vO54.tj.sj);
                var v1246 = vO71.On.rj(vO54.tj.uj);
                var v1247 = vO71.On.rj(vO54.tj.vj);
                var v1248 = vO71.On.rj(vO54.tj.xj);
                var v1249 = vO71.On.rj(vO54.tj.wj);
                var v1250 = (v406 ? URL_CDN : decoder.a.b) + "/pub/wuid/" + v1243 + "/start?gameMode=" + encodeURI(p1520) + "&gh=" + p1521 + "&nickname=" + vO48.Xp(v1243, v1244, v1245, v1246, v1247, v1248, v1249) + "&skinId=" + encodeURI(_wwc.validInput(v1245 || 0)) + "&eyesId=" + encodeURI(_wwc.validInputWear(v1246)) + "&mouthId=" + encodeURI(_wwc.validInputWear(v1247)) + "&glassesId=" + encodeURI(_wwc.validInputWear(v1248)) + "&hatId=" + encodeURI(_wwc.validInputWear(v1249));
                decoder.Z(v1250, function () {
                  vVO71.og.Ak(vVO71.og.tk);
                }, function (p1523) {
                  if (p1523.code === 1460) {
                    vVO71.og.Ak(vVO71.og.ok);
                    try {
                      ga("send", "event", "restricted", window.runtimeHash + "_tick");
                    } catch (e67) {}
                  } else if (false) {} else {
                    if (!p1523.server_url) {
                      vO47.dh.Cq();
                      return;
                    }
                    var v1251 = p1523.server_url;
                    vVO71.dh.Zp(v1251, v1243, p1522);
                  }
                });
              };
              vO71.Yp = function (p1524, p1525) {
                var vVO712 = vO71;
                var v1252 = vO71.og._e.el();
                var v1253 = vO71.On.rj(vO54.tj.sj);
                var v1254 = decoder.a.b + "/pub/wuid/guest/start?gameMode=" + encodeURI(p1524) + "&gh=" + p1525 + "&nickname=" + encodeURI(v1252) + "&skinId=" + encodeURI(v1253);
                decoder.Z(v1254, function () {
                  vVO712.og.Ak(vVO712.og.tk);
                }, function (p1526) {
                  if (p1526.code === 1460) {
                    vVO712.og.Ak(vVO712.og.ok);
                    try {
                      ga("send", "event", "restricted", window.runtimeHash + "_tick");
                    } catch (e68) {}
                  } else if (p1526.code !== 1200) {
                    vVO712.og.Ak(vVO712.og.tk);
                  } else {
                    var v1255 = p1526.server_url;
                    vVO712.dh.$p(v1255, v1252, v1253);
                  }
                });
              };
              vO71.Pp = function (p1527, p1528) {
                var v1256 = vO71.og._e.el();
                vO71.og.af.Fn(p1527, p1528, v1256);
                vO71.Ci.pe(vO54.ge.je.bf);
                vO71.og.Ak(vO71.og.af.En());
              };
              vO71.Sn = function () {
                if (!vO71.Tn()) {
                  return vO71.On.Bj();
                }
                var vParseInt5 = parseInt(vO54.Vf.fg(vO54.Vf.bg));
                if (vParseInt5 != null && vO71.On.Cj(vParseInt5, vO54.tj.sj)) {
                  return vParseInt5;
                } else {
                  return vO71.On.Bj();
                }
              };
              vO71.Xn = function (p1529) {
                vO54.Vf.eg(vO54.Vf.dg, p1529 ? "true" : "false", 1800);
              };
              vO71.Tn = function () {
                return vO54.Vf.fg(vO54.Vf.dg) === "true";
              };
              vO71.Rp = function (p1530) {
                if (p1530 !== vO71.Bp) {
                  vO71.Bp = p1530;
                  var v1257 = v1257 || {};
                  v1257.consented = p1530;
                  v1257.gdprConsent = p1530;
                  vO71.zn.yn.ha();
                  vO71.zn.Op.ha();
                  vO71.zn.Up.ha(function (p1531) {
                    if (p1531) {
                      f304(vF305 = 0);
                    }
                    vO71.Vp();
                  });
                }
              };
              vO71.rp = function (p1532, p1533) {
                vO54.Vf.eg(vO54.Vf.Wf, p1532 ? "true" : "false");
                if (p1533) {
                  vO71.Sp(p1532);
                }
                vO71.Rp(p1532);
              };
              vO71.hl = function () {
                switch (vO54.Vf.fg(vO54.Vf.Wf)) {
                  case "true":
                    return true;
                  default:
                    return false;
                }
              };
              vO71.Go = function () {
                try {
                  return !!window.isIPInEEA || vO71.Fp != null && !!vO55.gg.hg(vO71.Fp.coords.latitude, vO71.Fp.coords.longitude);
                } catch (e69) {
                  return true;
                }
              };
              vO71.Nf = function () {
                vO71.Dp = performance.now();
                vO71.Ep = vO71.Dp - vO71.Cp;
                vO71.dh.lh(vO71.Dp, vO71.Ep);
                vO71.og.lh(vO71.Dp, vO71.Ep);
                vO71.Cp = vO71.Dp;
              };
              vO71.Jf = function () {
                vO71.og.Jf();
              };
              return vO71;
            }();
          };
          vO54.Engine = function () {
            var vO72 = {
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
              hh: new vO54.GameParams(),
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
            vO72.hh.zg = 500;
            vO72.ch = new vO54.Worm(vO72.hh);
            vO72.run = function () {
              vO72.ch.ti(f205().og.af.ng);
            };
            vO72.gh = function (p1534, p1535, p1536, p1537) {
              vO72.pq = p1534;
              vO72.qq = p1535;
              vO72.rq = p1536;
              vO72.sq = p1537;
              vO72.yq();
            };
            vO72.zq = function (p1538) {
              vO72.oq = p1538;
              vO72.yq();
            };
            vO72.yq = function () {
              vO72.tq = vO72.pq - vO72.oq;
              vO72.uq = vO72.qq + vO72.oq;
              vO72.vq = vO72.rq - vO72.oq;
              vO72.wq = vO72.sq + vO72.oq;
            };
            vO72.lh = function (p1539, p1540) {
              vO72.iq += p1540;
              vO72.hq -= vO72.gq * 0.2 * p1540;
              vO72.Kp.Rh();
              if (vO72.mq !== null && (vO72.Cn === 2 || vO72.Cn === 3)) {
                vO72.Aq(p1539, p1540);
                vO72.eh = 4 + vO72.Di * vO72.ch.$c;
              }
              var v1258 = 1000 / Math.max(1, p1540);
              var vLN0194 = 0;
              for (var vLN0195 = 0; vLN0195 < vO72.fq.length - 1; vLN0195++) {
                vLN0194 += vO72.fq[vLN0195];
                vO72.fq[vLN0195] = vO72.fq[vLN0195 + 1];
              }
              vO72.fq[vO72.fq.length - 1] = v1258;
              vO72.dq = (vLN0194 + v1258) / vO72.fq.length;
            };
            vO72.Bq = function (p1541, p1542) {
              return p1541 > vO72.tq && p1541 < vO72.uq && p1542 > vO72.vq && p1542 < vO72.wq;
            };
            vO72.Aq = function (p1543, p1544) {
              var v1259 = vO72.iq + vO72.hq;
              var v1260 = (v1259 - vO72.jq) / (vO72.kq - vO72.jq);
              vO72.ch.hj(p1543, p1544);
              vO72.ch.ij(p1543, p1544, v1260, vO72.Bq);
              var vLN0196 = 0;
              for (var v1261 in vO72.Fh) {
                var v1262 = vO72.Fh[v1261];
                v1262.hj(p1543, p1544);
                v1262.ij(p1543, p1544, v1260, vO72.Bq);
                if (v1262.xi && v1262.$c > vLN0196) {
                  vLN0196 = v1262.$c;
                }
                if (!v1262.wi && (!!(v1262.dj < 0.005) || !v1262.xi)) {
                  v1262.si();
                  delete vO72.Fh[v1262.Eh.ae];
                }
              }
              vO72.zq(vLN0196 * 3);
              for (var v1263 in vO72.Hi) {
                var v1264 = vO72.Hi[v1263];
                v1264.hj(p1543, p1544);
                v1264.ij(p1543, p1544, vO72.Bq);
                if (v1264.Ni && (v1264.dj < 0.005 || !vO72.Bq(v1264.Zi, v1264.$i))) {
                  v1264.si();
                  delete vO72.Hi[v1264.Eh.ae];
                }
              }
            };
            vO72.ki = function (p1545, p1546) {
              if (vO72.Cn === 1) {
                vO72.Cn = 2;
                vO72.Mp();
              }
              var v1265 = f205().Dp;
              vO72.lq = p1545;
              if (p1545 === 0) {
                vO72.jq = v1265 - 95;
                vO72.kq = v1265;
                vO72.iq = vO72.jq;
                vO72.hq = 0;
              } else {
                vO72.jq = vO72.kq;
                vO72.kq = vO72.kq + p1546;
              }
              var v1266 = vO72.iq + vO72.hq;
              vO72.gq = (v1266 - vO72.jq) / (vO72.kq - vO72.jq);
            };
            vO72.Oi = function () {
              if (vO72.Cn === 1 || vO72.Cn === 2) {
                vO72.Cn = 3;
                var v1267 = vO72.mq;
                setTimeout(function () {
                  if (vO72.Cn === 3) {
                    vO72.Cn = 0;
                  }
                  if (v1267 != null && v1267 === vO72.mq) {
                    vO72.mq.close();
                    vO72.mq = null;
                  }
                }, 4500);
                vO72.Np();
              }
            };
            vO72.Wp = function () {
              return vO72.Cn !== 2 && (vO72.Cn = 1, vO72.Kp.Qh(), vO72.Hi = {}, vO72.Fh = {}, vO72.ch.Pm(), vO72.mq != null && (vO72.mq.close(), vO72.mq = null), true);
            };
            vO72.Cq = function () {
              vO72.mq = null;
              vO72.Kp.Qh();
              if (vO72.Cn !== 3) {
                vO72.Lp();
              }
              vO72.Cn = 0;
            };

            // إنشاء إعدادات اللعبة مع حفظ الاسم الصحيح

            if (typeof window.gameConfig === "undefined") {
              window.gameConfig = {
                infiniteRespawn: false,
                playerName: "" // حفظ الاسم الصحيح هنا
              };
            }

            // حفظ الاسم الصحيح عند بدء اللعب

            (function () {
              // مراقبة تغيير الاسم في حقل النص

              const observeNameChanges = setInterval(() => {
                const nicknameElement = document.getElementById("mm-params-nickname");
                if (nicknameElement && nicknameElement.value && nicknameElement.value.length > 0) {
                  // التأكد أن القيمة ليست توكن (التوكن عادة يحتوي على نقاط أو أحرف خاصة)

                  const value = nicknameElement.value;
                  if (!value.includes(".") && !value.includes("eyJ") && value.length < 50) {
                    window.gameConfig.playerName = value;
                    console.log("💾 تم حفظ اسم اللاعب:", value);
                  }
                }

                // حفظ من bbs إذا كان متوفراً

                if (typeof bbs !== "undefined" && bbs.nickname && bbs.nickname.length > 0) {
                  const nickname = bbs.nickname;
                  if (!nickname.includes(".") && !nickname.includes("eyJ") && nickname.length < 50) {
                    window.gameConfig.playerName = nickname;
                    console.log("💾 تم حفظ اسم اللاعب من bbs:", nickname);
                  }
                }
              }, 1000);

              // إيقاف المراقبة بعد دقيقة

              setTimeout(() => {
                clearInterval(observeNameChanges);
              }, 60000);
            })();

            // إضافة مستمع للضغط على مفتاح F9 لتفعيل/تعطيل ميزة infinite respawn

            document.addEventListener("keydown", function (event) {
              if (event.key === "F9") {
                window.gameConfig.infiniteRespawn = !window.gameConfig.infiniteRespawn;
                const status = window.gameConfig?.infiniteRespawn ? "wxo" : "wxo";
                const playerName = window.gameConfig?.playerName ?? "wxo";
                console.log("🔄 wwc Infinite Respawn:", status);
                console.log("👤 اسم اللاعب المحفوظ:", playerName);

                // إظهار تنبيه في الشاشة

                if (typeof _wwc !== "undefined" && _wwc.showMessage) {
                  _wwc.showMessage(`wwc Infinite Respawn: ${status}\nPlayer: ${playerName}`);
                }
              }
            });

            // تعديل الدالة الأولى مع استخدام الاسم المحفوظ

            vO72.Zp = function (p1547, p1548) {
              vO72.Dq(p1547, function () {
                if (window.gameConfig?.infiniteRespawn) {
                  // ✅ استخدام الاسم المحفوظ مسبقاً

                  var playerName = window.gameConfig?.playerName;

                  // إذا لم يكن هناك اسم محفوظ، ابحث عنه_0x225f93 

                  if (!playerName || playerName.length === 0) {
                    // البحث في العناصر المختلفة

                    const nicknameElement = document.getElementById("mm-params-nickname");
                    if (nicknameElement && nicknameElement.value) {
                      const value = nicknameElement.value;

                      // تجنب التوكن

                      if (!value.includes(".") && !value.includes("eyJ") && value.length < 50) {
                        playerName = value;
                        window.gameConfig.playerName = value; // حفظه للمرات القادمة
                      }
                    }

                    // البحث في bbs

                    if (!playerName && typeof bbs !== "undefined" && bbs.nickname) {
                      const nickname = bbs.nickname;
                      if (!nickname.includes(".") && !nickname.includes("eyJ") && nickname.length < 50) {
                        playerName = nickname;
                        window.gameConfig.playerName = nickname;
                      }
                    }

                    // اسم افتراضي

                    if (!playerName) {
                      playerName = "Player";
                    }
                  }
                  console.log("🎮 wwc Infinite Respawn - اسم اللاعب:", playerName);
                  console.log("🔍 البيانات الممررة (_0x233b37):", p1548 ? p1548.substring(0, 50) + "..." : "فارغ");
                  var vLN1282 = 128;
                  var v1268 = Math.min(32, playerName.length);
                  var v1269 = new ArrayBuffer(7 + v1268 * 2);
                  var v1270 = new DataView(v1269);
                  var vLN0197 = 0;
                  v1270.setInt8(vLN0197, 129);
                  vLN0197 += 1;
                  v1270.setInt16(vLN0197, 2800);
                  vLN0197 += 2;
                  v1270.setInt8(vLN0197, 0);
                  vLN0197 += 1;
                  v1270.setInt16(vLN0197, vLN1282);
                  vLN0197 += 2;
                  v1270.setInt8(vLN0197, v1268);
                  vLN0197++;
                  for (var vLN0198 = 0; vLN0198 < v1268; vLN0198++) {
                    v1270.setInt16(vLN0197, playerName.charCodeAt(vLN0198));
                    vLN0197 += 2;
                  }
                  vO72.Eq(v1269);
                } else {
                  // الكود الأصلي بدون تغيير

                  var v1271 = Math.min(2048, p1548.length);
                  var v1272 = new ArrayBuffer(6 + v1271 * 2);
                  var v1273 = new DataView(v1272);
                  var vLN0199 = 0;
                  v1273.setInt8(vLN0199, 129);
                  vLN0199 += 1;
                  v1273.setInt16(vLN0199, 2800);
                  vLN0199 += 2;
                  v1273.setInt8(vLN0199, 1);
                  vLN0199 += 1;
                  v1273.setInt16(vLN0199, v1271);
                  vLN0199 += 2;
                  for (var vLN0200 = 0; vLN0200 < v1271; vLN0200++) {
                    v1273.setInt16(vLN0199, p1548.charCodeAt(vLN0200));
                    vLN0199 += 2;
                  }
                  vO72.Eq(v1272);
                }
              });
            };

            // ترك الدالة الثانية كما هي بدون تغيير

            vO72.$p = function (p1549, p1550, p1551) {
              vO72.Dq(p1549, function () {
                var v1274 = Math.min(32, p1550.length);
                var v1275 = new ArrayBuffer(7 + v1274 * 2);
                var v1276 = new DataView(v1275);
                var vLN0201 = 0;
                v1276.setInt8(vLN0201, 129);
                vLN0201 += 1;
                v1276.setInt16(vLN0201, 2800);
                vLN0201 += 2;
                v1276.setInt8(vLN0201, 0);
                vLN0201 += 1;
                v1276.setInt16(vLN0201, p1551);
                vLN0201 += 2;
                v1276.setInt8(vLN0201, v1274);
                vLN0201++;
                for (var vLN0202 = 0; vLN0202 < v1274; vLN0202++) {
                  v1276.setInt16(vLN0201, p1550.charCodeAt(vLN0202));
                  vLN0201 += 2;
                }
                vO72.Eq(v1275);
              });
            };

            // دوال للتحكم والاختبار

            window.setPlayerName = function (name) {
              window.gameConfig.playerName = name;
              console.log("✅ تم تعيين اسم اللاعب:", name);
            };
            window.getPlayerName = function () {
              console.log("👤 اسم اللاعب الحالي:", window.gameConfig.playerName);
              return window.gameConfig.playerName;
            };
            window.testInfiniteRespawn = function () {
              console.log("🔍 اختبار إعدادات Infinite Respawn:");
              console.log("  wwc الحالة:", window.gameConfig?.infiniteRespawn ? "wxo" : "wxo");
              console.log("  اسم اللاعب:", window.gameConfig?.playerName ?? "wxo");

              // محاولة العثور على الاسم الحالي

              const nicknameElement = document.getElementById("mm-params-nickname");
              if (nicknameElement) {
                console.log("  حقل الاسم:", nicknameElement.value || "فارغ");
              }
              if (typeof bbs !== "undefined") {
                console.log("  bbs.nickname:", bbs.nickname || "غير موجود");
              }
            };
            console.log("🎮 تم تحميل wwc Infinite Respawn مع حفظ الاسم");
            console.log("📋 الأوامر المتاحة:");
            console.log("  setPlayerName('اسمك') - لتعيين الاسم يدوياً");
            console.log("  getPlayerName() - لعرض الاسم المحفوظ");
            console.log("  testInfiniteRespawn() - لاختبار الإعدادات");
            vO72.Eq = function (p1552) {
              try {
                if (vO72.mq != null && vO72.mq.readyState === WebSocket.OPEN) {
                  vO72.mq.send(p1552);
                }
              } catch (e70) {
                vO72.Cq();
              }
            };
            vO72.xq = function (p1553, p1554) {
              var v1277 = p1554 ? 128 : 0;
              var v1278 = decoder.N(p1553) / vO55.F * 128 & 127;
              var v1279 = (v1277 | v1278) & 255;
              var v1280 = new ArrayBuffer(1);
              new DataView(v1280).setInt8(0, v1279);
              vO72.Eq(v1280);
              vO72.nq = v1279;
            };

            /*
            
            _0x5e2453.xq = function (_0x30b586, _0x574a36) {
            
              var _0x33c786 = _0x574a36 ? 128 : 0;
            
              var _0x2eef52 = decoder.N(_0x30b586) / _0x1c15a7.F * 128 & 127;
            
              var _0x3e4cac = (_0x33c786 | _0x2eef52) & 255;
            
              
            
              var now = Date.now();
            
              if (_0x5e2453.nq !== _0x3e4cac || now - (_0x5e2453.lastPing || 0) > 800) {
            
                var _0x3fe0c4 = new ArrayBuffer(1);
            
                new DataView(_0x3fe0c4).setInt8(0, _0x3e4cac);
            
                _0x5e2453.Eq(_0x3fe0c4);
            
                _0x5e2453.nq = _0x3e4cac;
            
                _0x5e2453.lastPing = now;
            
              }
            
            };
            
            */

            vO72.Dq = function (p1555, p1556) {
              var v1281 = vO72.mq = new WebSocket(p1555);
              v1281.binaryType = "arraybuffer";
              v1281.onopen = function () {
                if (vO72.mq === v1281) {
                  p1556();
                }
              };
              v1281.onclose = function () {
                if (vO72.mq === v1281) {
                  vO72.Cq();
                }
              };
              v1281.onerror = function (p1557) {
                if (vO72.mq === v1281) {
                  vO72.Cq();
                }
              };
              v1281.onmessage = function (p1558) {
                if (vO72.mq === v1281) {
                  vO72.Kp.Ph(p1558.data);
                }
              };
            };
            return vO72;
          };
          var vF782 = f78({}, vO48);
          vO48 = f78({
            $C: vO54,
            $V: vO55,
            $F: decoder,
            POGL: vF32
          }, vF782);
          vO48.Jb = function () {
            (vO47.Lc.zb.ud.skinArrayDict || []).forEach(function (p1559) {
              if (p1559.associados && p1559.associados.includes(vO47.Ij.Rk.userId)) {
                p1559[["n", "o", "n", "b", "u", "y", "a", "b", "l", "e"].join("")] = false;
              }
            });
          };
          var vF46 = function (p1560) {
            var vO73 = {};
            vO73.main = {
              yn: decoder.ja("aqnvgcpz05orkobh", "WRM_wormate-io_300x250"),
              Op: decoder.ja("ltmolilci1iurq1i", "wormate-io_970x250"),
              Up: decoder.ga(),
              Ap: 4,
              Tp: false,
              xn: true
            };
            vO73.miniclip = {
              yn: decoder.ja("aqnvgcpz05orkobh", "WRM_wormate-io_300x250"),
              Op: decoder.ja("ltmolilci1iurq1i", "wormate-io_970x250"),
              Up: decoder.ga(),
              Ap: 4,
              Tp: false,
              xn: false
            };
            var v1282 = vO73[window.ENV];
            v1282 ||= vO73.main;
            return v1282;
          }(window.ENV);
          $(function () {
            FastClick.attach(document.body);
          });
          addEventListener("contextmenu", function (p1561) {
            p1561.preventDefault();
            p1561.stopPropagation();
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
          decoder.L("//apis.google.com/js/api:client.js", null, function () {
            gapi.load("auth2", function () {
              v639 = gapi.auth2.init({
                client_id: "959425192138-qjq23l9e0oh8lgd2icnblrbfblar4a2f.apps.googleusercontent.com"
              });
            });
          });
          decoder.L("//connect.facebook.net/" + decoder.a.j + "/sdk.js", {
            id: "facebook-jssdk",
            async: true,
            defer: true,
            crossorigin: "anonymous"
          });
          vO47 = decoder.zp();
          vO47.Ip();
          (function () {
            function f306() {
              requestAnimationFrame(f306);
              f205().Nf();
            }
            f306();
          })();
          (function () {
            function f307() {
              var v1283 = v$116.width();
              var v1284 = v$116.height();
              var v1285 = v$117.outerWidth();
              var v1286 = v$117.outerHeight();
              var v1287 = v$118.outerHeight();
              var v1288 = v$119.outerHeight();
              var v1289 = Math.min(1, Math.min((v1284 - v1288 - v1287) / v1286, v1283 / v1285));
              var v1290 = "translate(-50%, -50%) scale(" + v1289 + ")";
              v$117.css({
                "-webkit-transform": v1290,
                "-moz-transform": v1290,
                "-ms-transform": v1290,
                "-o-transform": v1290,
                transform: v1290
              });
              f205().Jf();
              window.scrollTo(0, 1);
            }
            var v$116 = $("body");
            var v$117 = $("#stretch-box");
            var v$118 = $("#markup-header");
            var v$119 = $("#markup-footer");
            f307();
            $(window).resize(f307);
          })();
        })();
      });
      setTimeout(function () {
        $(".mm-merchant-cont").append(`

      <div style="display: flex; justify-content: center; align-items: center; margin-top: 10px;">

        <a href="#" target="_blank" style="margin-right: 10px;">

          

        </a>

    

      </div>

      `);
        $(".mm-merchant-cont").css("top", "-10px");
      }, 4500);
      $(".description-text").css("height", "300px");
      var vLS001f3f = "#001f3f";
      var v_0x29ea15 = function f308(p1562) {
        // Removed problematic background image URL
        var vLS14 = "";
        document.body.style.backgroundColor = "#1a1a2e";
        document.body.style.backgroundImage = "none";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
        var v1291 = document.getElementById("background-canvas");
        var v1292 = document.getElementById("game-wrap");
        v1291.style.backgroundColor = vLS001f3f;
        v1291.style.opacity = "0.65";
        v1292.style.backgroundColor = "transparent";
      };
      if (v569) {
        v569 = JSON.parse(v569);
        if (v569.background) {
          v_0x29ea15(v569.background);
        } else {
          v_0x29ea15();
        }
      } else {
        v_0x29ea15();
      }
      if (v570) {
        v570 = JSON.parse(v570);
        if (v570 && v570.audio) {
          vO41.headshot = new vP4362.Howl({
            src: [v570.audio],
            html5: true,
            autoplay: false,
            loop: false
          });
        }
      }
      window.testAudioCustom = function () {
        if (v570 && v570.audio) {
          console.log("Playing custom audio?", v570.audio);
          vO41.headshot.play();
        }
      };
      var vF62 = f62(function f309(p1563, p1564, p1565, p1566, p1567, p1568) {
        f60(this, f309);
        this.sid = null;
        this.wid = p1563;
        this.refer = p1564;
        this.nickname = p1565;
        this.score = p1567;
        this.myRoom = p1566;
        this.myLocation = {
          x: 0,
          y: 0
        };
        this.teamRoom = p1568;
        this.wuid = bbs.wuid;
      });
      w2c2020.containerHsRec.alpha = 0;
      w2c2020.containerHstop.alpha = 0;
      var vA28 = [16711680, 65280, 16776960, 16752640, 16711935, 16777215, 10066329, 65535, 8388736, 255, 3447003, 2719929, 3066993, 1752220];
      function f310(p1569, p1570) {
        if (!p1570) {
          return;
        }
        p1570.playerMap.position.x = p1569.position.x;
        p1570.playerMap.position.y = p1569.position.y;
      }
      function f311(p1571, p1572, p1573) {
        var v1293 = Array.from(p1571.keys()).indexOf(p1572.sid);
        if (v1293 < 0) {
          v1293 = 0;
        }
        console.log("Index", v1293);
        var v1294 = vA28[v1293 % vA28.length];
        var v1295 = `${v1293 + 1} - ${p1572.nickname.substring(0, 15)}`;
        var v1296 = new PIXI.Text(v1295, {
          fontFamily: "Arial",
          fontSize: 9.5,
          fill: v1294,
          align: "left"
        });
        v1296.position.y = v1293 * 13;
        w2c2020.friends.addChild(v1296);
        return v1296;
      }
      function f312(p1574, p1575) {
        var v1297 = Array.from(p1574.keys()).indexOf(p1575.sid);
        if (v1297 < 0) {
          v1297 = 0;
        }
        console.log("Index", v1297);
        var v1298 = vA28[v1297 % vA28.length];
        var v1299 = new PIXI.Graphics();
        v1299.id = p1575.sid;
        v1299.zIndex = 3;
        v1299.alpha = 1;
        v1299.beginFill(v1298, 1);
        v1299.drawCircle(0, 0, 3.5);
        v1299.endFill();
        v1299.position.x = p1575.position.x;
        v1299.position.y = p1575.position.y;
        w2c2020.conteinerTeam.addChild(v1299);
        return v1299;
      }
      _wwcio.connect = function (p1576) {
        var v1300 = new Map();
        var v1301 = (bbs.con || "").match(/(wss:|ws:)\/\/(.*?)-(.*):(.*?)\//);
        if (!v1301) {
          v1301 = [];
        }
        if (v1301 && vA11.includes(v1301[2])) {
          _wwcio.leaderboardUpdated([], []);
          var v1302 = vLN064 ? "local" : v1301[2];
          var v1303 = _wwc._anApp.dh.hh.xg + (v1301[2] || "L") + (v1301[4] || "0");
          _wwcio.player = new vF62(bbs.userId, p1576 ? p1576.ae : userId, p1576 ? p1576.ma : "AN", v1303, 0, _wwcio.player.teamRoom);
          try {
            var v1304 = (0, vP4363.io)(vO38[v1302], {
              path: "/api/",
              transports: ["websocket"],
              reconnectionAttempts: 5
            });
            var v_0x6433a9 = function f313() {
              v1304.emit("join", _wwcio.player, function (p1577) {
                _wwcio.leaderboardUpdated(p1577.top10, p1577.top3);
                if (_wwcio.player.teamRoom) {
                  v1304.emit("joinTeam");
                  var vF311 = f311(v1300, _wwcio.player, true);
                  v1300.set(_wwcio.player.sid, {
                    wid: _wwcio.player.wid,
                    playerMap: null,
                    playerText: vF311
                  });
                  w2c2020.friends.alpha = 1;
                  console.log("Conectado com Team!", _wwcio.player.teamRoom);
                }
              });
            };
            v1304.on("connect", function () {
              console.log("Conectado ao servidor:", v1304.id);
              _wwcio.player.sid = v1304.id;
              v_0x6433a9();
            });
            v1304.on("message", function (p1578) {
              console.log("Recebido", p1578);
              switch (p1578.type) {
                case "join":
                  _wwcio.obj.sid = p1578.sid;
                  break;
                case "leaderBoard":
                  _wwcio.leaderboardUpdated(p1578.top10, p1578.top3);
                  break;
                case "update":
                  break;
                case "leave":
                  break;
                default:
                  break;
              }
              if (p1578 && p1578.top10) {
                _wwcio.leaderboardUpdated(p1578.top10, p1578.top3);
              }
            });
            v1304.on("connect_error", function (p1579) {
              console.error("Erro de conexão:", p1579);
            });
            v1304.on("disconnect", function () {
              console.warn("Desconectado.");
              v1300.forEach(function (p1580) {
                w2c2020.conteinerTeam.removeChild(p1580.playerMap);
                w2c2020.friends.removeChild(p1580.playerText);
              });
              v1300.clear();
            });
            v1304.on("error", function (p1581) {
              console.error("Erro:", p1581);
            });
            v1304.on("updateLocation", function (p1582) {
              if (!p1582) {
                return;
              }
              var v1305 = v1300.get(p1582.sid);
              if (!v1305) {
                var v1306 = Array.from(v1300.values()).find(function (p1583) {
                  return p1583.wid === p1582.wid;
                });
                console.log("Player", v1306);
                v1300.set(p1582.sid, {
                  wid: p1582.wid
                });
                var vF3112 = f311(v1300, p1582);
                var vF312 = f312(v1300, p1582);
                v1305 = v1300.get(p1582.sid);
                v1305.playerMap = vF312;
                v1305.playerText = vF3112;
              }
              f310(p1582, v1305);
            });
            v1304.on("leaveTeam", function (p1584) {
              console.log("Saiu do time", p1584);
              var v1307 = v1300.get(p1584.sid);
              if (v1307) {
                w2c2020.conteinerTeam.removeChild(v1307.playerMap);
                w2c2020.friends.removeChild(v1307.playerText);
                v1300.delete(p1584.sid);
              }
            });
            _wwcio.sendLocation = function (p1585) {
              v1304.emit("updateLocation", p1585);
            };
            _wwcio.update = function (p1586, p1587) {
              if (p1586 >= 6) {
                p1586 = 1;
              }
              var v1308 = !!(p1586 & 2);
              var vLSUpdate = "update";
              if (v1308 && p1587) {
                vLSUpdate = "headshot";
              }
              if (typeof p1586 === "string") {
                vLSUpdate = p1586;
              }
              v1304.emit("message", {
                action: vLSUpdate,
                player: _wwcio.player
              }, function (p1588) {
                _wwcio.player.score = p1588.player.score;
              });
            };
            _wwcio.close = function () {
              v1304.emit("leaveTeam");
              setTimeout(function () {
                v1304.disconnect();
                v1304.close();
              }, 1000);
            };
          } catch (e71) {
            w2c2020.containerHsRec.alpha = 0;
            w2c2020.containerHstop.alpha = 0;
            console.error("Erro: Servidor não disponível.");
            _wwcio.close();
          }
        } else {
          w2c2020.containerHsRec.alpha = 0;
          w2c2020.containerHstop.alpha = 0;
          console.error("NO MATCH!");
        }
      };
    }
  };
  var vO74 = {};
  function f314(p1589) {
    var v1309 = vO74[p1589];
    if (v1309 !== undefined) {
      return v1309.exports;
    }
    var v1310 = vO74[p1589] = {
      id: p1589,
      loaded: false,
      exports: {}
    };
    vO[p1589](v1310, v1310.exports, f314);
    v1310.loaded = true;
    return v1310.exports;
  }
  (() => {
    f314.amdO = {};
  })();
  (() => {
    f314.n = p1590 => {
      var v1311 = p1590 && p1590.__esModule ? () => p1590.default : () => p1590;
      f314.d(v1311, {
        a: v1311
      });
      return v1311;
    };
  })();
  (() => {
    f314.d = (p1591, p1592) => {
      for (var v1312 in p1592) {
        if (f314.o(p1592, v1312) && !f314.o(p1591, v1312)) {
          Object.defineProperty(p1591, v1312, {
            enumerable: true,
            get: p1592[v1312]
          });
        }
      }
    };
  })();
  (() => {
    f314.g = function () {
      if (typeof globalThis === "object") {
        return globalThis;
      }
      try {
        return this || new Function("return this")();
      } catch (e72) {
        if (typeof window === "object") {
          return window;
        }
      }
    }();
  })();
  (() => {
    f314.hmd = p1593 => {
      p1593 = Object.create(p1593);
      if (!p1593.children) {
        p1593.children = [];
      }
      Object.defineProperty(p1593, "exports", {
        enumerable: true,
        set: () => {
          throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + p1593.id);
        }
      });
      return p1593;
    };
  })();
  (() => {
    f314.o = (p1594, p1595) => Object.prototype.hasOwnProperty.call(p1594, p1595);
  })();
  (() => {
    f314.r = p1596 => {
      if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        Object.defineProperty(p1596, Symbol.toStringTag, {
          value: "Module"
        });
      }
      Object.defineProperty(p1596, "__esModule", {
        value: true
      });
    };
  })();
  var vF314 = f314("./src/temp.js");
})();

// اعتراض جميع طلبات fetch

(function () {
  const originalFetch = window.fetch;
  window.fetch = function (...args) {
    const url = args[0];
    console.log("🌐 طلب fetch:", url);
    return originalFetch.apply(this, args).then(response => {
      console.log("📥 استجابة من:", url);

      // اعتراض طلب set-worm-world

      if (url.includes("/extension/set-worm-world") || url.includes("/set-worm-world")) {
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

  <h2 style="text-align: center; color: #00ccff; margin: 0 0 12px 0; font-size: 18px; font-weight: bold; text-shadow: 0 0 8px rgba(0, 200, 255, 0.4);">🐛 WormWorld 🐛</h2>

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

    <div style="width: 25%">
        <label style="display: block; text-align: center; font-weight: bold; color: #00ccff; text-shadow: 0 0 5px rgba(0,204,255,0.5); font-size: 14px; margin-bottom: 3px;">&#128028; ZIGZAG &#128028;</label>
        <select id="sel_zigzag" style="width: 100%; padding: 4px; border: 1px solid #4a9bff; border-radius: 4px; background: #1a1a2e; color: white; font-size: 12px; box-shadow: 0 0 5px rgba(74,155,255,0.3);">
            <option value="0">Normal</option>
            <option value="1">Zigzag 1</option>
            <option value="2">Zigzag 2</option>
            <option value="3">Zigzag 3</option>
        </select>
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
          statusText: "OK",
          headers: {
            "Content-Type": "text/html"
          }
        }));
      }

      // للطلبات الأخرى، إرجاع الاستجابة الأصلية

      return response;
    }).catch(error => {
      console.error("❌ خطأ في fetch:", error);
      throw error;
    });
  };
  console.log("🔧 تم تثبيت مُعترض fetch المُحدث");
})();

// إضافة اعتراض XMLHttpRequest أيضاً

(function () {
  const originalOpen = XMLHttpRequest.prototype.open;
  const originalSend = XMLHttpRequest.prototype.send;
  XMLHttpRequest.prototype.open = function (method, url, ...args) {
    this._url = url;
    console.log("🌐 طلب XHR:", method, url);
    return originalOpen.apply(this, [method, url, ...args]);
  };
  XMLHttpRequest.prototype.send = function (...args) {
    const xhr = this;
    if (this._url && (this._url.includes("/extension/set-worm-world") || this._url.includes("/set-worm-world"))) {
      console.log("🎯 اعتراض XHR set-worm-world");

      // منع الطلب الأصلي

      setTimeout(() => {
        const customResponse = `<h3>✅ CUSTOMER MODE ACTIVATED VIA XHR ✅</h3>`;
        Object.defineProperty(xhr, "status", {
          value: 200
        });
        Object.defineProperty(xhr, "statusText", {
          value: "OK"
        });
        Object.defineProperty(xhr, "responseText", {
          value: customResponse
        });
        Object.defineProperty(xhr, "response", {
          value: customResponse
        });
        Object.defineProperty(xhr, "readyState", {
          value: 4
        });
        if (xhr.onreadystatechange) {
          xhr.onreadystatechange();
        }
        if (xhr.onload) {
          xhr.onload();
        }
      }, 100);
      return;
    }
    return originalSend.apply(this, args);
  };
  console.log("🔧 تم تثبيت مُعترض XHR");
})();
console.log("🚀 مُعترض الطلبات جاهز - مع إصلاح مشكلة التوكن!");

// Headshot Simulator for WormWorld.io

// Updated version with improved features from original game code

// Global configuration

const HeadshotSimulator = {
  // Configuration

  config: {
    defaultCount: 1000,
    delayBetween: 3200,
    // تم تعديل الوقت إلى 4200 مللي ثانية

    soundEnabled: true,
    visualEnabled: true,
    logEnabled: true,
    soundVolume: 0,
    // تم زيادة مستوى الصوت للسماع

    keyBinding: "h"
  },
  // State

  state: {
    running: false,
    sentCount: 0,
    targetCount: 0,
    startTime: 0,
    floatingTexts: [] // لتتبع النصوص العائمة
  },
  // Initialize the simulator

  init: function () {
    this.setupKeyBinding();

    // Silent initialization - no UI message

    return this;
  },
  // Setup keyboard shortcut

  setupKeyBinding: function () {
    // إزالة أي مستمع موجود لتجنب التكرار

    try {
      if (this._eventListenerAdded) {
        document.removeEventListener("keydown", this._keyDownHandler);
      }
    } catch (e) {

      // تجاهل الأخطاء هنا
    }

    // إنشاء معالج جديد يغلق على هذا

    const self = this;
    this._keyDownHandler = function (event) {
      if (event.key.toLowerCase() === self.config.keyBinding.toLowerCase()) {
        self.start();
        event.preventDefault();
      }
    };

    // إضافة المستمع الجديد

    document.addEventListener("keydown", this._keyDownHandler);
    this._eventListenerAdded = true;
  },
  // Start simulation with optional count

  start: function (count) {
    if (this.state.running) {
      // Silent - no UI message

      return false;
    }

    // Validate game state

    if (!this.validateGameState()) {
      return false;
    }

    // Initialize simulation

    this.state.running = true;
    this.state.sentCount = 0;
    this.state.targetCount = count || this.config.defaultCount;
    this.state.startTime = Date.now();

    // No initialization message

    this.simulateNext();
    return true;
  },
  // Start with just 2 headshots

  startTwoHeadshots: function () {
    if (this.state.running) {
      // Already running

      return false;
    }

    // Validate game state

    if (!this.validateGameState()) {
      return false;
    }

    // Initialize simulation

    this.log("Starting 2 headshots with interval");

    // First headshot immediately

    this.simulateHeadshot();
    this.log("Headshot 1/2 simulated", "success");

    // Second headshot after delay

    setTimeout(() => {
      this.simulateHeadshot();
      this.log("Headshot 2/2 simulated", "success");

      // Continue with normal simulation if needed

      this.log("Two headshots completed, continuing normal operation");
    }, this.config.delayBetween);
    return true;
  },
  // Validate the current game state

  validateGameState: function () {
    if (!window._wwc || !window._wwc._anApp) {
      this.log("Error: Game not properly initialized or not in-game", "error");
      return false;
    }

    // Check if we're in the game by checking for player existence

    if (!window._wwcio || !window._wwcio.player || !window.bbs) {
      this.log("Error: Player not initialized or not in-game", "error");
      return false;
    }
    return true;
  },
  // Simulate next headshot

  simulateNext: function () {
    if (!this.state.running || this.state.sentCount >= this.state.targetCount) {
      this.complete();
      return;
    }

    // Increment counter

    this.state.sentCount++;

    // Perform simulation

    try {
      this.simulateHeadshot();
      this.log(`Headshot ${this.state.sentCount}/${this.state.targetCount} simulated`, "success");

      // Schedule next with delay

      setTimeout(() => this.simulateNext(), this.config.delayBetween);
    } catch (error) {
      this.log("Error in headshot simulation: " + error.message, "error");
      this.complete();
    }
  },
  // Complete the simulation

  complete: function () {
    if (!this.state.running) {
      return;
    }
    const duration = ((Date.now() - this.state.startTime) / 1000).toFixed(1);
    this.log(`Simulation complete! ${this.state.sentCount} headshots in ${duration}s`);

    // Reset state

    this.state.running = false;

    // Save to localStorage

    if (window.bbs) {
      localStorage.setItem("wwcSaveGame", JSON.stringify(window.bbs));
    }
  },
  // Core simulation function - UPDATED to match original game logic

  simulateHeadshot: function () {
    // التحقق من حالة اللعبة

    if (!this.validateGameState()) {
      this.log("Game state is no longer valid, stopping simulation", "error");
      this.state.running = false;
      return;
    }
    try {
      // استدعاء الدالة الأصلية fnSetCounts من اللعبة إذا كانت متاحة

      if (window._wwc && typeof window._wwc.fnSetCounts === "function") {
        window._wwc.fnSetCounts("count", true);
      } else {
        // تحديث العدادات يدويًا إذا لم تكن الدالة متاحة

        this.updateCountersManually();
      }

      // تحديث نتيجة اللاعب إذا كان ممكنًا

      try {
        if (window._wwcio && window._wwcio.update) {
          window._wwcio.update("headshot");
        }
      } catch (e) {
        this.log("Couldn't update player score", "warn");
      }

      // تشغيل صوت headshot - مع دعم للصوت الخاص كل 10 headshots

      if (this.config.soundEnabled) {
        this.playHeadshotSound();
      }

      // تنشيط التأثير المرئي إذا كان ممكّنًا

      if (this.config.visualEnabled) {
        this.triggerVisualEffect();
      }
    } catch (error) {
      this.log("Error in headshot simulation: " + error.message, "error");
    }
  },
  // NEW: Update counters manually if original function is not available

  updateCountersManually: function () {
    if (window.bbs) {
      // Update all relevant counters like the original game

      window.bbs.headshot = (window.bbs.headshot || 0) + 1;
      window.bbs.theadshot = (window.bbs.theadshot || 0) + 1;

      // Update HOL (Highest headshot count) like original game

      window.bbs.HOL = window.bbs.headshot > (window.bbs.HOL || 0) ? window.bbs.headshot : window.bbs.HOL || 0;

      // Try to update the UI counters if setCountGame function exists

      try {
        if (window._wwc && typeof window._wwc.setCountGame === "function") {
          window._wwc.setCountGame(window.bbs.kill || 0, window.bbs.headshot || 0, window.bbs.tkill || 0, window.bbs.theadshot || 0);
        }
      } catch (e) {
        this.log("Couldn't update counters in UI", "warn");
      }

      // Save to localStorage like original game

      localStorage.setItem("wwcSaveGame", JSON.stringify(window.bbs));
    }
  },
  // UPDATED: Play headshot sound to match original game logic

  playHeadshotSound: function () {
    try {
      // Logic from original game: play special sound every 10 headshots

      const isSpecialSound = window.bbs && window.bbs.headshot && !(window.bbs.headshot % 10);
      const soundType = isSpecialSound ? "shaokahn" : "headshot";

      // Try to use original game sound system first

      if (window._0x49249a && typeof window._0x49249a.fxdo === "function") {
        window._0x49249a.fxdo(soundType);
        return;
      }

      // Second approach - direct Howl objects if available
      else if (window._0x49249a) {
        if (isSpecialSound && window._0x49249a.shaokahn && window._0x49249a.shaokahn.play) {
          window._0x49249a.shaokahn.play();
          return;
        } else if (window._0x49249a.headshot && window._0x49249a.headshot.play) {
          window._0x49249a.headshot.play();
          return;
        }
      }

      // Fallback to direct audio playback

      const soundFile = isSpecialSound ? "/sounds/shaokahn_sound_effect.mp3" : "/sounds/headshot_sound_effect.mp3";
      const audioElement = document.createElement("audio");
      audioElement.src = (window.URL_CDN || "") + soundFile;
      audioElement.volume = this.config.soundVolume;
      audioElement.play();
    } catch (error) {
      this.log("Couldn't play sound: " + error.message, "warn");
    }
  },
  // UPDATED: Trigger visual effect to match original game

  triggerVisualEffect: function () {
    try {
      // Check if we can access the game's UI functions

      if (window._wwc && window._wwc._anApp && typeof window._wwc._anApp.addChild === "function") {
        // This is just a simulation - no actual floating text is added

        this.log("Floating headshot text would appear now", "info");
      } else {
        this.log("Visual effect triggered silently", "info");
      }
    } catch (error) {
      this.log("Error triggering visual effect: " + error.message, "warn");
    }
  },
  // Logging utility - only logs to console, not UI

  log: function (message, type = "info") {
    if (!this.config.logEnabled) {
      return;
    }
    const prefix = "🎯 HeadshotSim: ";
    switch (type) {
      case "error":
        console.error(prefix + message);
        break;
      case "warn":
        console.warn(prefix + message);
        break;
      default:
        console.log(prefix + message);
    }
  }
};

// تهيئة المحاكي عندما تكون الصفحة جاهزة

(() => {
  // تنظيف أي نسخة سابقة إذا كانت موجودة

  if (window.HeadshotSimulator && window.HeadshotSimulator._cleanupFn) {
    try {
      window.HeadshotSimulator._cleanupFn();
    } catch (e) {
      console.log("Error cleaning up previous simulator:", e);
    }
  }

  // إزالة أي عنصر toast موجود من إصدارات سابقة

  const oldToast = document.getElementById("headshot-toast");
  if (oldToast && oldToast.parentNode) {
    oldToast.parentNode.removeChild(oldToast);
  }

  // انتظر لحظة حتى تتم تهيئة اللعبة

  setTimeout(() => {
    // تهيئة المحاكي بصمت

    HeadshotSimulator.init();

    // دالة التنظيف لفصل الأحداث

    HeadshotSimulator._cleanupFn = function () {
      try {
        if (HeadshotSimulator._eventListenerAdded) {
          document.removeEventListener("keydown", HeadshotSimulator._keyDownHandler);
          HeadshotSimulator._eventListenerAdded = false;
        }
      } catch (e) {
        console.log("Error during cleanup:", e);
      }
    };
  }, 3000);
})();

// جعله متاح من خلال متغير عالمي

window.HeadshotSimulator = HeadshotSimulator;

// لاستخدام وظيفة الـ headshots الثنائية:

// HeadshotSimulator.startTwoHeadshots();

// أو للسلوك العادي:

// HeadshotSimulator.start(10);

/**

 * WormWorld Skin Changer - مغير سكنات وورم وورلد المطور

 * تم إزالة ميزة الدوران وإبقاء باقي الميزات

 * الإصدار النهائي 1.1 - معدل

 */

(function () {
  'use strict';

  // =============== الإعدادات الأساسية ===============

  // السكنات الافتراضية للتبديل - يمكن أن تكون أرقاماً أو نصوصاً مختلطة
  const SKIN_IDS = [87, 131];

  // أسماء اللاعبين للتبديل عند النقر بزر الماوس الأيمن

  const NAME_OPTIONS = ["انا كلب", "انا حمار", "ستريم جحاش"];

  // متغيرات التحكم

  let pauseUpdates = false;
  let flyingInterval = null;
  let effectsActive = false;
  let isPlayerListVisible = false;
  let isToggleButtonVisible = false; // إضافة متغير للتحكم في ظهور الزر

  let modalOpen = false; // إضافة متغير للتحقق من وجود نافذة مفتوحة

  let inputActive = false; // إضافة متغير للتحقق من حالة الإدخال النشطة

  let isHoveringList = false; // إضافة متغير للتحقق من تحويم الماوس فوق القائمة

  let originalMousePosition = null; // لحفظ موضع الماوس الأصلي

  let effectsMode = "none"; // حالة التأثيرات: none, hover, modal

  // سجل التغييرات للاعبين

  const playerChanges = {};

  // =============== وظائف المساعدة ===============

  // قص اسم اللاعب للعرض

  function truncateName(name, maxLength = 15) {
    if (!name || name.trim() === "") {
      return "********";
    }
    if (name.length > maxLength) {
      return name.substring(0, maxLength) + "...";
    } else {
      return name;
    }
  }

  // إنشاء معرف عشوائي

  function generateRandomId() {
    return Math.random().toString(36).substring(2, 10);
  }

  // الحصول على اللاعب الحالي

  function getCurrentPlayer() {
    if (window._wwc && window._wwc._anApp && window._wwc._anApp.dh && window._wwc._anApp.dh.ch) {
      return window._wwc._anApp.dh.ch;
    }
    return null;
  }

  // التحقق من حالة اللعب

  function isInGameState() {
    return window._wwc && window._wwc._anApp && window._wwc._anApp.dh && window._wwc._anApp.dh.ch;
  }

  // =============== وظائف التأثيرات الخاصة ===============

  // حفظ حالة اللاعب الأصلية

  function saveOriginalPlayerState() {
    try {
      if (!isInGameState()) {
        return;
      }
      const currentPlayer = getCurrentPlayer();
      if (!currentPlayer) {
        return;
      }

      // حفظ موضع اللاعب الأصلي إذا لم يكن محفوظًا بالفعل

      if (originalMousePosition === null) {
        const playerPos = currentPlayer.fh();
        originalMousePosition = {
          x: playerPos.x,
          y: playerPos.y
        };
      }
      console.log("تم حفظ حالة اللاعب الأصلية");
    } catch (e) {
      console.error("خطأ في حفظ حالة اللاعب:", e);
    }
  }

  // استعادة حالة اللاعب الأصلية

  function restoreOriginalPlayerState() {
    try {
      if (!isInGameState()) {
        return;
      }

      // استعادة موضع اللاعب إذا كان محفوظاً

      if (originalMousePosition !== null) {
        const currentPlayer = getCurrentPlayer();
        if (currentPlayer && currentPlayer.vh) {
          currentPlayer.vh(originalMousePosition.x, originalMousePosition.y);
        }
      }
      console.log("تم استعادة حالة اللاعب الأصلية");
    } catch (e) {
      console.error("خطأ في استعادة حالة اللاعب:", e);
    }
  }

  // تحديث حالة التأثيرات بناءً على الوضع الحالي

  function updateEffectsState() {
    // تحديد وضع التأثيرات الحالي

    let newEffectsMode = "none";
    if (modalOpen) {
      // إذا كانت هناك نافذة مفتوحة، فعّل التأثيرات دائمًا

      newEffectsMode = "modal";
    } else if (isPlayerListVisible && isHoveringList) {
      // إذا كانت القائمة مفتوحة والمؤشر فوقها، فعّل التأثيرات

      newEffectsMode = "hover";
    } else {
      // في الحالات الأخرى، أوقف التأثيرات

      newEffectsMode = "none";
    }

    // تطبيق التغييرات إذا كان هناك تغيير في الوضع

    if (newEffectsMode !== effectsMode) {
      effectsMode = newEffectsMode;

      // تطبيق التأثيرات أو إيقافها حسب الوضع الجديد

      if (effectsMode === "none") {
        // إيقاف التأثيرات واستعادة التحكم الطبيعي

        if (effectsActive) {
          stopSpecialEffects();
        }
      } else
        // تفعيل التأثيرات إذا لم تكن مفعلة بالفعل

        if (!effectsActive) {
          startSpecialEffects();
        }
      console.log("تم تحديث حالة التأثيرات:", effectsMode);
    }
  }

  // بدء تأثير الطيران

  function startFlying() {
    // إيقاف تأثير الطيران الحالي أولاً

    stopFlying();

    // حفظ حالة اللاعب الأصلية إذا لم تكن محفوظة بالفعل

    if (originalMousePosition === null) {
      saveOriginalPlayerState();
    }
    let flyStep = 0;
    let amplitude = 4; // تم تقليل مقدار الارتفاع والانخفاض

    // تأثير الحركة لأعلى وأسفل

    flyingInterval = setInterval(function () {
      try {
        if (!isInGameState()) {
          return;
        }
        const currentPlayer = getCurrentPlayer();
        if (!currentPlayer || !currentPlayer.vh) {
          return;
        }

        // التحقق من وضع التأثيرات الحالي

        if (effectsMode === "none") {
          // استعادة الموضع الأصلي في وضع عدم التأثيرات

          if (originalMousePosition !== null) {
            currentPlayer.vh(originalMousePosition.x, originalMousePosition.y);
          }
        } else
          // تطبيق تأثير الطيران في أوضاع التأثيرات

          if (originalMousePosition !== null) {
            // تحريك اللاعب لأعلى وأسفل بشكل متموج

            const verticalOffset = amplitude * Math.sin(flyStep);

            // تحديد المكان الجديد للاعب

            currentPlayer.vh(originalMousePosition.x, originalMousePosition.y + verticalOffset);

            // زيادة خطوة التأثير

            flyStep += 0.1;
          }
      } catch (e) {
        console.log("خطأ في تأثير الطيران:", e);
      }
    }, 50);
    console.log("تم تشغيل تأثير الطيران");
  }

  // إيقاف تأثير الطيران مع استعادة الحالة

  function stopFlying() {
    if (flyingInterval !== null) {
      clearInterval(flyingInterval);
      flyingInterval = null;
      try {
        // استعادة موضع اللاعب الأصلي

        if (originalMousePosition !== null && isInGameState()) {
          const currentPlayer = getCurrentPlayer();
          if (currentPlayer && currentPlayer.vh) {
            currentPlayer.vh(originalMousePosition.x, originalMousePosition.y);
          }
        }
      } catch (e) {
        console.error("خطأ أثناء استعادة موضع اللاعب:", e);
      }
      console.log("تم إيقاف تأثير الطيران");
    }
  }

  // تفعيل التأثيرات الخاصة

  function startSpecialEffects() {
    if (effectsActive) {
      return;
    }
    effectsActive = true;
    console.log("بدء التأثيرات الخاصة");

    // حفظ حالة اللاعب الأصلية قبل بدء التأثيرات

    saveOriginalPlayerState();

    // إطلاق تأثير الطيران فقط

    setTimeout(() => {
      startFlying();
    }, 50);
  }

  // إيقاف التأثيرات الخاصة واستعادة التحكم

  function stopSpecialEffects() {
    if (!effectsActive) {
      return;
    }
    console.log("إيقاف التأثيرات الخاصة");
    effectsActive = false;
    stopFlying();

    // استعادة حالة اللاعب الأصلية

    restoreOriginalPlayerState();

    // إعادة تعيين المتغيرات المتعلقة بالتأثيرات

    originalMousePosition = null;
  }

  // التأكد من إيقاف التأثيرات في جميع الحالات

  function forceStopEffects() {
    effectsActive = false;
    stopFlying();

    // استعادة حالة اللاعب الأصلية

    restoreOriginalPlayerState();

    // إعادة تعيين المتغيرات المتعلقة بالتأثيرات

    originalMousePosition = null;

    // إعادة تعيين وضع التأثيرات

    effectsMode = "none";
  }

  // =============== وظائف تغيير السكنات والأسماء ===============

  // تغيير السكن للاعب - تم تحسينها لدعم المعرفات المختلطة

  function cycleSkin(playerId) {
    if (!playerId || !isInGameState()) {
      return;
    }

    // الحصول على اللاعب من قائمة اللاعبين

    const player = window._wwc._anApp.dh.Fh[playerId];
    if (!player || !player.Eh) {
      return;
    }

    // إنشاء سجل للتغييرات إذا لم يكن موجودًا

    if (!playerChanges[playerId]) {
      playerChanges[playerId] = {
        originalSkin: player.Eh.Hh,
        originalName: player.Eh.ma,
        changes: [],
        currentNameIndex: -1
      };
    }

    // دورة السكنات بين القيم المحددة - دعم المعرفات المختلطة

    const currentSkin = String(player.Eh.Hh);
    const currentSkinIndex = SKIN_IDS.findIndex(id => String(id) === currentSkin);
    const nextIndex = currentSkinIndex === -1 || currentSkinIndex + 1 >= SKIN_IDS.length ? 0 : currentSkinIndex + 1;

    // تغيير السكن

    player.Eh.Hh = SKIN_IDS[nextIndex];

    // تسجيل التغيير

    playerChanges[playerId].changes.push({
      type: "skin",
      from: playerChanges[playerId].originalSkin,
      to: player.Eh.Hh,
      timestamp: Date.now()
    });
  }

  // تعيين سكن محدد للاعب - تم تحسينها لدعم المعرفات المختلطة

  function setSkinById(playerId, skinId) {
    if (!playerId || !isInGameState()) {
      return;
    }

    // الحصول على اللاعب من قائمة اللاعبين

    const player = window._wwc._anApp.dh.Fh[playerId];
    if (!player || !player.Eh) {
      return;
    }

    // التعامل مع معرفات السكن سواء كانت أرقاماً أو حروفاً أو مختلطة

    const newSkinId = skinId;

    // إنشاء سجل للتغييرات إذا لم يكن موجودًا

    if (!playerChanges[playerId]) {
      playerChanges[playerId] = {
        originalSkin: player.Eh.Hh,
        originalName: player.Eh.ma,
        changes: [],
        currentNameIndex: -1
      };
    }

    // تعيين السكن الجديد

    player.Eh.Hh = newSkinId;

    // تسجيل التغيير

    playerChanges[playerId].changes.push({
      type: "skin",
      from: playerChanges[playerId].originalSkin,
      to: newSkinId,
      timestamp: Date.now()
    });
  }

  // تغيير اسم اللاعب

  function setCustomName(playerId, customName) {
    if (!playerId || !isInGameState()) {
      return;
    }

    // التحقق من صحة الاسم

    if (!customName || customName.trim() === "") {
      return;
    }

    // الحصول على اللاعب من قائمة اللاعبين

    const player = window._wwc._anApp.dh.Fh[playerId];
    if (!player || !player.Eh) {
      return;
    }

    // إنشاء سجل للتغييرات إذا لم يكن موجودًا

    if (!playerChanges[playerId]) {
      playerChanges[playerId] = {
        originalSkin: player.Eh.Hh,
        originalName: player.Eh.ma,
        changes: [],
        currentNameIndex: -1
      };
    }

    // الاسم السابق

    const previousName = player.Eh.ma;

    // تعيين الاسم الجديد

    player.Eh.ma = customName;

    // تسجيل التغيير

    playerChanges[playerId].changes.push({
      type: "name",
      from: previousName,
      to: customName,
      timestamp: Date.now()
    });
  }

  // تدوير الاسم بين الخيارات المحددة

  function cycleNameOption(playerId) {
    if (!playerId || !isInGameState()) {
      return;
    }

    // الحصول على اللاعب من قائمة اللاعبين

    const player = window._wwc._anApp.dh.Fh[playerId];
    if (!player || !player.Eh) {
      return;
    }

    // إنشاء سجل للتغييرات إذا لم يكن موجودًا

    if (!playerChanges[playerId]) {
      playerChanges[playerId] = {
        originalSkin: player.Eh.Hh,
        originalName: player.Eh.ma,
        changes: [],
        currentNameIndex: -1
      };
    }

    // الاسم السابق

    const previousName = player.Eh.ma;

    // تغيير الاسم للخيار التالي

    playerChanges[playerId].currentNameIndex = (playerChanges[playerId].currentNameIndex + 1) % NAME_OPTIONS.length;
    const newName = NAME_OPTIONS[playerChanges[playerId].currentNameIndex];

    // تعيين الاسم الجديد

    player.Eh.ma = newName;

    // تسجيل التغيير

    playerChanges[playerId].changes.push({
      type: "name",
      from: previousName,
      to: newName,
      timestamp: Date.now()
    });
    return newName;
  }

  // إعادة تعيين سكن اللاعب

  function resetSkin(playerId) {
    if (!playerId || !isInGameState()) {
      return;
    }

    // الحصول على اللاعب من قائمة اللاعبين

    const player = window._wwc._anApp.dh.Fh[playerId];
    if (!player || !player.Eh) {
      return;
    }

    // التحقق من وجود سجل للتغييرات

    if (playerChanges[playerId] && playerChanges[playerId].originalSkin) {
      // إعادة السكن الأصلي

      player.Eh.Hh = playerChanges[playerId].originalSkin;

      // تسجيل التغيير

      playerChanges[playerId].changes.push({
        type: "reset_skin",
        timestamp: Date.now()
      });
    }
  }

  // إعادة تعيين اسم اللاعب

  function resetName(playerId) {
    if (!playerId || !isInGameState()) {
      return;
    }

    // الحصول على اللاعب من قائمة اللاعبين

    const player = window._wwc._anApp.dh.Fh[playerId];
    if (!player || !player.Eh) {
      return;
    }

    // التحقق من وجود سجل للتغييرات

    if (playerChanges[playerId] && playerChanges[playerId].originalName) {
      // إعادة الاسم الأصلي

      player.Eh.ma = playerChanges[playerId].originalName;

      // تسجيل التغيير

      playerChanges[playerId].changes.push({
        type: "reset_name",
        timestamp: Date.now()
      });

      // إعادة ضبط مؤشر الاسم

      playerChanges[playerId].currentNameIndex = -1;
    }
  }

  // إعادة تعيين جميع إعدادات اللاعب

  function resetAllSettings(playerId) {
    resetSkin(playerId);
    resetName(playerId);
  }

  // =============== وظائف واجهة المستخدم - معالجة المدخلات ===============

  // تعيين حالة الإدخال النشطة

  function setInputState(active) {
    inputActive = active;
  }

  // =============== وظائف واجهة المستخدم - النافذة المخصصة ===============

  // إضافة تأثير رفرفة للنافذة

  function addFlutterEffect(promptId) {
    const overlay = $("#" + promptId);
    if (!overlay.length) {
      return;
    }
    const promptBox = overlay.find(".wwc-custom-prompt-box");

    // إضافة تأثير الرفرفة

    let angle = 0;
    const flutterInterval = setInterval(function () {
      angle += 0.1;
      const scaleValue = 1 + Math.sin(angle * 1.5) * 0.03;
      promptBox.css({
        transform: `scale(${scaleValue})`
      });
    }, 50);

    // حفظ الفاصل الزمني في كائن النافذة لإيقافه لاحقًا

    overlay.data("flutterInterval", flutterInterval);

    // إيقاف التأثير عند إزالة النافذة

    overlay.on("remove", function () {
      clearInterval(flutterInterval);

      // إيقاف حالة الإدخال النشطة

      setInputState(false);

      // إيقاف حالة النافذة المفتوحة

      modalOpen = false;

      // تحديث حالة التأثيرات

      setTimeout(function () {
        updateEffectsState();
      }, 50);
    });
  }

  // إنشاء نافذة إدخال مخصصة

  function createCustomPrompt(title, defaultValue, callback) {
    // إزالة أي نوافذ سابقة

    $(".wwc-custom-prompt-overlay").remove();

    // تعيين متغير النافذة المفتوحة

    modalOpen = true;

    // حفظ حالة اللاعب الأصلية قبل فتح النافذة

    saveOriginalPlayerState();

    // تحديث حالة التأثيرات

    setTimeout(function () {
      updateEffectsState();
    }, 50);

    // إنشاء معرف فريد للنافذة

    const promptId = "wwc-prompt-" + generateRandomId();

    // إنشاء العناصر

    const overlay = $("<div>").addClass("wwc-custom-prompt-overlay").attr("id", promptId).css({
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0,0,0,0)",
      zIndex: 999999,
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "flex-start",
      backdropFilter: "none"
    });
    const promptBox = $("<div>").addClass("wwc-custom-prompt-box").css({
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      padding: "15px",
      borderRadius: "8px",
      minWidth: "200px",
      maxWidth: "250px",
      boxShadow: "0 0 15px rgba(0,128,255,0.7)",
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      margin: "180px 15px 0 0",
      border: "1px solid rgba(100, 200, 255, 0.5)"
    });
    const promptTitle = $("<div>").addClass("wwc-custom-prompt-title").text(title).css({
      fontWeight: "bold",
      fontSize: "15px",
      color: "#fff",
      marginBottom: "5px",
      textAlign: "center",
      textShadow: "0 0 5px rgba(0,150,255,0.8)"
    });
    const promptInput = $("<input>").addClass("wwc-custom-prompt-input").attr({
      type: "text",
      value: defaultValue || ""
    }).css({
      padding: "6px",
      border: "1px solid #4a90e2",
      borderRadius: "4px",
      width: "100%",
      boxSizing: "border-box",
      backgroundColor: "rgba(255, 255, 255, 0.9)",
      color: "#000",
      fontSize: "14px"
    });
    const buttonContainer = $("<div>").css({
      display: "flex",
      justifyContent: "space-between",
      marginTop: "8px"
    });
    const cancelBtn = $("<button>").text("إلغاء").css({
      padding: "5px 10px",
      backgroundColor: "rgba(244, 67, 54, 0.8)",
      color: "white",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      flex: "1",
      marginRight: "5px",
      transition: "all 0.3s ease"
    }).hover(function () {
      $(this).css("backgroundColor", "rgba(244, 67, 54, 1)");
    }, function () {
      $(this).css("backgroundColor", "rgba(244, 67, 54, 0.8)");
    }).click(function () {
      overlay.remove();
      setInputState(false);

      // إيقاف حالة النافذة المفتوحة

      modalOpen = false;

      // تحديث حالة التأثيرات

      setTimeout(function () {
        updateEffectsState();
      }, 50);
    });
    const confirmBtn = $("<button>").text("تأكيد").css({
      padding: "5px 10px",
      backgroundColor: "rgba(76, 175, 80, 0.8)",
      color: "white",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      flex: "1",
      marginLeft: "5px",
      transition: "all 0.3s ease"
    }).hover(function () {
      $(this).css("backgroundColor", "rgba(76, 175, 80, 1)");
    }, function () {
      $(this).css("backgroundColor", "rgba(76, 175, 80, 0.8)");
    }).click(function () {
      const value = promptInput.val();
      overlay.remove();
      setInputState(false);

      // إيقاف حالة النافذة المفتوحة

      modalOpen = false;

      // تحديث حالة التأثيرات

      setTimeout(function () {
        updateEffectsState();

        // استدعاء دالة الاسترجاع بعد استعادة التحكم

        if (callback) {
          callback(value);
        }
      }, 50);
    });

    // تجميع العناصر

    buttonContainer.append(cancelBtn, confirmBtn);
    promptBox.append(promptTitle, promptInput, buttonContainer);
    overlay.append(promptBox);

    // إضافة النافذة إلى الصفحة

    $("body").append(overlay);

    // تركيز الإدخال

    promptInput.focus();

    // تفعيل حالة الإدخال النشطة

    setInputState(true);

    // تعيين معالجات أحداث حقل الإدخال

    promptInput.on("focus", function () {
      setInputState(true);
    }).on("blur", function () {

      // لا تقم بإلغاء تنشيط الإدخال لأن هذا قد يحدث عند النقر على الأزرار
    }).on("keydown", function (e) {
      // منع انتشار أحداث مفتاح R خارج حقل الإدخال

      if (e.key === "r" || e.key === "R") {
        e.stopPropagation();
      }

      // معالجة الضغط على Enter

      if (e.key === "Enter") {
        const value = promptInput.val();
        overlay.remove();
        setInputState(false);

        // إيقاف حالة النافذة المفتوحة

        modalOpen = false;

        // تحديث حالة التأثيرات

        setTimeout(function () {
          updateEffectsState();

          // استدعاء دالة الاسترجاع بعد استعادة التحكم

          if (callback) {
            callback(value);
          }
        }, 50);
      }
    });

    // معالجة الضغط على ESC

    $(document).on("keydown.customprompt", function (e) {
      if (e.key === "Escape") {
        overlay.remove();
        setInputState(false);
        $(document).off("keydown.customprompt");

        // إيقاف حالة النافذة المفتوحة

        modalOpen = false;

        // تحديث حالة التأثيرات

        setTimeout(function () {
          updateEffectsState();
        }, 50);
      }
    });

    // تأثيرات الحركة للنافذة

    promptBox.css({
      animation: "wwc-float 3s infinite ease-in-out"
    });

    // تأثيرات الحركة للنافذة

    promptBox.css({
      animation: "wwc-float 3s infinite ease-in-out"
    });

    // إضافة تأثير الرفرفة

    addFlutterEffect(promptId);
    return promptId;
  }

  // =============== وظائف واجهة المستخدم - قائمة اللاعبين ===============

  // إنشاء واجهة المستخدم الرئيسية

  function createUI() {
    // إنشاء قائمة اللاعبين

    if ($("#wwc-player-names").length === 0) {
      const playerList = $("<div id='wwc-player-names' style='top: 180px; right: 10px; width:200px; z-index: 999999; position: absolute; display: none;'></div>").prependTo("body").on("mouseenter", function () {
        pauseUpdates = true;
        isHoveringList = true;

        // تحديث حالة التأثيرات

        updateEffectsState();
      }).on("mouseleave", function () {
        pauseUpdates = false;
        isHoveringList = false;

        // تحديث حالة التأثيرات

        updateEffectsState();
        updatePlayerList();
      });

      // إضافة أنماط CSS

      const style = $("<style></style>").text(`

                #wwc-player-names {

                    display: flex;

                    flex-direction: column;

                    gap: 1px;

                    padding: 4px;

                    margin: 0;

                    background-color: rgba(0, 0, 0, 0.7);

                    border-radius: 8px;

                    border: 1px solid rgba(100, 180, 255, 0.4);

                    box-shadow: 0 0 15px rgba(0, 120, 255, 0.3);

                    backdrop-filter: blur(3px);

                    max-height: 80vh;

                    overflow-y: auto;

                }

                .wwc-player-row {

                    display: flex;

                    align-items: center;

                    width: 100%;

                    margin: 1px 0;

                    padding: 2px;

                    position: relative;

                    height: 18px;

                    line-height: 18px;

                    background-color: rgba(30, 30, 40, 0.6);

                    border-radius: 5px;

                    transition: all 0.3s ease;

                }

                .wwc-player-row:hover {

                    background-color: rgba(50, 50, 80, 0.8);

                    transform: translateX(-3px);

                }

                .wwc-player-name {

                    position: absolute;

                    left: 5px;

                    right: 65px;

                    color: white;

                    font-size: 11px;

                    white-space: nowrap;

                    overflow: hidden;

                    text-overflow: ellipsis;

                    transition: all 0.3s ease;

                    padding: 0;

                    margin: 0;

                }

                .wwc-player-name.skin-changed {

                    text-decoration: underline wavy #4a90e2;

                    color: #a0e0ff;

                }

                .wwc-player-name.name-changed {

                    font-style: italic;

                    color: #ff9999;

                }

                .wwc-player-controls {

                    position: absolute;

                    right: 0;

                    top: 0;

                    display: flex;

                    height: 100%;

                }

                .wwc-player-btn {

                    width: 18px;

                    height: 18px;

                    display: flex;

                    justify-content: center;

                    align-items: center;

                    font-size: 11px;

                    cursor: pointer;

                    transition: all 0.3s ease;

                    opacity: 0.8;

                    margin: 0 1px;

                    padding: 0;

                    line-height: 18px;

                    border-radius: 3px;

                }

                .wwc-player-btn:hover {

                    opacity: 1;

                    transform: scale(1.2);

                }

                .wwc-player-btn.skin-btn { color: #a0d0ff; }

                .wwc-player-btn.reset-btn { color: #a0ffa0; }

                .wwc-player-btn.name-btn { color: #ffa0a0; }

                

                /* تأثيرات النوافذ والحركة */

                .wwc-custom-prompt-overlay {

                    animation: wwc-pulse 3s infinite;

                }

                @keyframes wwc-pulse {

                    0% { background-color: rgba(0,0,0,0); }

                    50% { background-color: rgba(0,0,0,0.05); }

                    100% { background-color: rgba(0,0,0,0); }

                }

                @keyframes wwc-float {

                    0% { transform: translateY(0px); }

                    50% { transform: translateY(-8px); }

                    100% { transform: translateY(0px); }

                }

                

               /* زر التبديل */

                #wwc-toggle-button {

                    position: fixed;

                    top: 140px;

                    right: 10px;

                    width: 30px;

                    height: 30px;

                    border-radius: 50%;

                    background-color: rgba(20, 120, 220, 0.8);

                    color: white;

                    display: none;

                    justify-content: center;

                    align-items: center;

                    cursor: pointer;

                    z-index: 999999;

                    font-size: 16px;

                    box-shadow: 0 0 10px rgba(0, 100, 255, 0.5);

                    border: 2px solid rgba(255, 255, 255, 0.3);

                    transition: all 0.3s ease;

                }

                #wwc-toggle-button:hover {

                    transform: scale(1.1);

                    background-color: rgba(30, 150, 255, 0.9);

                }

            `);

      // إضافة زر تبديل الظهور (مخفي في البداية)

      const toggleButton = $("<div>").attr("id", "wwc-toggle-button").html("👁️").attr("title", "إظهار/إخفاء قائمة اللاعبين (اضغط M)").click(function () {
        togglePlayerList();
      });
      $("head").append(style);
      $("body").append(toggleButton);
    }
  }

  // =============== وظائف تحديث قائمة اللاعبين ===============

  // تبديل إظهار/إخفاء قائمة اللاعبين

  function togglePlayerList() {
    isPlayerListVisible = !isPlayerListVisible;
    if (isPlayerListVisible) {
      // حفظ حالة اللاعب الأصلية قبل فتح القائمة

      saveOriginalPlayerState();
      $("#wwc-player-names").fadeIn(300);
      updatePlayerList();
      $("#wwc-toggle-button").css("background-color", "rgba(30, 150, 255, 0.9)");
    } else {
      $("#wwc-player-names").fadeOut(300);
      $("#wwc-toggle-button").css("background-color", "rgba(20, 120, 220, 0.8)");

      // إعادة تعيين متغير التحويم عند إغلاق القائمة

      isHoveringList = false;
    }

    // تحديث حالة التأثيرات

    setTimeout(function () {
      updateEffectsState();
    }, 50);
  }

  // إظهار زر التبديل

  function showToggleButton() {
    if (!isToggleButtonVisible) {
      isToggleButtonVisible = true;
      $("#wwc-toggle-button").css("display", "flex").fadeIn(300);
    }
  }

  // إخفاء زر التبديل

  function hideToggleButton() {
    if (isToggleButtonVisible) {
      isToggleButtonVisible = false;
      $("#wwc-toggle-button").fadeOut(300);

      // إخفاء القائمة أيضاً إذا كانت مفتوحة

      if (isPlayerListVisible) {
        isPlayerListVisible = false;
        $("#wwc-player-names").fadeOut(300);
        isHoveringList = false;

        // تحديث حالة التأثيرات

        setTimeout(function () {
          updateEffectsState();
        }, 50);
      }
    }
  }

  // تحديث قائمة اللاعبين

  function updatePlayerList() {
    // إذا كان التحديث متوقفاً، لا تقم بالتحديث

    if (pauseUpdates) {
      return;
    }
    const playerContainer = $("#wwc-player-names");
    playerContainer.empty();

    // التحقق من حالة اللعب

    if (!isInGameState()) {
      playerContainer.hide();
      isPlayerListVisible = false;
      isHoveringList = false;

      // تحديث حالة التأثيرات

      updateEffectsState();
      return;
    }

    // إظهار القائمة فقط إذا كانت الحالة "مرئية"

    if (isPlayerListVisible) {
      playerContainer.show();
    } else {
      playerContainer.hide();
      return;
    }

    // الحصول على اللاعب الحالي

    const currentPlayer = getCurrentPlayer();
    if (!currentPlayer || !currentPlayer.Eh) {
      return;
    }
    const currentPlayerId = currentPlayer.Eh.ae;
    const currentPos = currentPlayer.fh();

    // إضافة العنوان

    playerContainer.append($("<div>").css({
      color: "white",
      textAlign: "center",
      padding: "2px",
      marginBottom: "3px",
      borderBottom: "1px solid rgba(255,255,255,0.3)",
      fontSize: "12px",
      fontWeight: "bold"
    }).text("قائمة اللاعبين القريبين"));

    // جمع وترتيب اللاعبين حسب القرب

    const nearbyPlayers = [];

    // مرر على جميع اللاعبين في اللعبة

    for (const playerId in window._wwc._anApp.dh.Fh) {
      const player = window._wwc._anApp.dh.Fh[playerId];

      // تجاهل اللاعب الحالي

      if (playerId == currentPlayerId) {
        continue;
      }

      // تأكد من أن اللاعب موجود ونشط

      if (!player || !player.Eh || !player.xi) {
        continue;
      }

      // حساب المسافة بين اللاعبين

      const playerPos = player.fh();
      const distance = Math.sqrt(Math.pow(playerPos.x - currentPos.x, 2) + Math.pow(playerPos.y - currentPos.y, 2));

      // إضافة اللاعب وتفاصيله إلى القائمة إذا كان ضمن نطاق محدد

      if (distance <= 1000) {
        nearbyPlayers.push({
          id: playerId,
          player: player,
          distance: distance,
          name: player.Eh.ma || "لاعب مجهول",
          skin: player.Eh.Hh
        });
      }
    }

    // ترتيب اللاعبين حسب القرب

    nearbyPlayers.sort((a, b) => a.distance - b.distance);

    // قصر القائمة على عدد محدد من اللاعبين

    const limitedPlayers = nearbyPlayers.slice(0, 8);

    // عرض كل لاعب في القائمة

    limitedPlayers.forEach(playerData => {
      // إنشاء صف للاعب

      const playerRow = $("<div>").addClass("wwc-player-row");

      // اسم اللاعب

      const displayName = truncateName(playerData.name);
      const playerName = $("<span>").addClass("wwc-player-name").text(displayName).on("click", function (e) {
        e.preventDefault();
        e.stopPropagation();

        // تغيير السكن عند النقر

        cycleSkin(playerData.id);

        // إضافة تأثير

        $(this).addClass("skin-changed");
        return false;
      }).on("contextmenu", function (e) {
        e.preventDefault();
        e.stopPropagation();

        // تغيير اسم اللاعب بين الخيارات المحددة

        const newName = cycleNameOption(playerData.id);

        // تحديث النص المعروض

        $(this).text(truncateName(newName));
        $(this).addClass("name-changed");
        return false;
      });

      // تطبيق تأثيرات إضافية على الاسم إذا كان السكن قد تغير - دعم المعرفات المختلطة

      if (playerChanges[playerData.id] && String(playerChanges[playerData.id].originalSkin) !== String(playerData.player.Eh.Hh)) {
        playerName.addClass("skin-changed");
      }

      // أزرار التحكم

      const playerControls = $("<div>").addClass("wwc-player-controls");

      // زر تغيير الاسم

      const nameBtn = $("<div>").addClass("wwc-player-btn name-btn").html("📝").attr("title", "تغيير الاسم").click(e => {
        e.preventDefault();
        e.stopPropagation();

        // فتح نافذة تغيير الاسم مع تفعيل التأثيرات

        createCustomPrompt("أدخل الاسم المخصص", playerData.player.Eh.ma, function (customName) {
          if (customName) {
            setCustomName(playerData.id, customName);
            playerName.text(truncateName(customName));
            playerName.addClass("name-changed");
          }
        });
        return false;
      });

      // زر تغيير السكن

      const skinBtn = $("<div>").addClass("wwc-player-btn skin-btn").html("🎨").attr("title", "تغيير السكن").click(e => {
        e.preventDefault();
        e.stopPropagation();

        // دورة السكن بسرعة

        cycleSkin(playerData.id);
        playerName.addClass("skin-changed");
        return false;
      }).on("contextmenu", function (e) {
        e.preventDefault();
        e.stopPropagation();

        // فتح نافذة لإدخال رقم السكن مع تفعيل التأثيرات

        createCustomPrompt("أدخل رقم السكن (Skin ID)", playerData.player.Eh.Hh, function (skinId) {
          if (skinId) {
            setSkinById(playerData.id, skinId);
            playerName.addClass("skin-changed");
          }
        });
        return false;
      });

      // زر إعادة الإعدادات الأصلية

      const resetBtn = $("<div>").addClass("wwc-player-btn reset-btn").html("↩️").attr("title", "إعادة الإعدادات الأصلية").click(e => {
        e.preventDefault();
        e.stopPropagation();

        // إعادة السكن والاسم الأصلي

        resetAllSettings(playerData.id);

        // تحديث النص المعروض

        if (playerChanges[playerData.id] && playerChanges[playerData.id].originalName) {
          playerName.text(truncateName(playerChanges[playerData.id].originalName));
        }

        // إزالة التأثيرات

        playerName.removeClass("skin-changed name-changed");
        return false;
      });

      // تطبيق تأثيرات إضافية على الاسم إذا كان قد تغير

      if (playerChanges[playerData.id] && playerChanges[playerData.id].originalName != playerData.player.Eh.ma) {
        playerName.addClass("name-changed");
      }

      // تجميع أزرار التحكم

      playerControls.append(nameBtn, skinBtn, resetBtn);

      // تجميع عناصر الصف

      playerRow.append(playerName, playerControls);

      // إضافة الصف إلى الحاوية

      playerContainer.append(playerRow);
    });

    // إضافة رسالة إذا لم يتم العثور على لاعبين

    if (limitedPlayers.length === 0) {
      playerContainer.append($("<div>").css({
        color: "white",
        textAlign: "center",
        padding: "8px",
        backgroundColor: "rgba(0,0,0,0.4)",
        borderRadius: "5px",
        margin: "3px 0"
      }).text("لا يوجد لاعبين قريبين"));
    }

    // إضافة تعليمات استخدام

    playerContainer.append($("<div>").css({
      color: "rgba(255,255,255,0.7)",
      fontSize: "9px",
      textAlign: "center",
      padding: "3px",
      marginTop: "3px",
      borderTop: "1px solid rgba(255,255,255,0.3)"
    }).html("🎨: تغيير السكن | 📝: تغيير الاسم<br>زر يمين على الاسم: تبديل أسماء جاهزة"));
  }

  // =============== إعداد التتبع والمراقبة ===============

  // إعداد تتبع اللاعبين

  function setupPlayerTracking() {
    const checkInterval = 500; // فحص كل نصف ثانية

    let trackingInterval = setInterval(function () {
      // التحقق من حالة اللعب

      const isInGame = isInGameState();
      if (isInGame) {
        // تحديث قائمة اللاعبين إذا كانت مرئية

        if (isPlayerListVisible) {
          updatePlayerList();
        }

        // إظهار زر التبديل فقط إذا كان مفعلاً

        if (isToggleButtonVisible) {
          $("#wwc-toggle-button").show();
        }
      } else {
        // إخفاء القائمة وإيقاف التأثيرات عند الخروج من اللعبة

        $("#wwc-player-names").hide();
        $("#wwc-toggle-button").hide();
        isPlayerListVisible = false;
        isHoveringList = false;

        // تحديث حالة التأثيرات

        updateEffectsState();
      }
    }, checkInterval);

    // إيقاف التتبع عند مغادرة الصفحة

    $(window).on("beforeunload", function () {
      forceStopEffects();
      clearInterval(trackingInterval);
    });

    // إيقاف التأثيرات عند تبديل التبويب

    document.addEventListener("visibilitychange", function () {
      if (document.hidden) {
        isHoveringList = false;

        // تحديث حالة التأثيرات

        updateEffectsState();
      }
    });
  }

  // =============== تهيئة السكريبت ===============

  // وظيفة البداية

  function initialize() {
    // التحقق من وجود jQuery

    if (typeof $ === "undefined") {
      console.log("في انتظار تحميل jQuery...");
      setTimeout(initialize, 1000);
      return;
    }

    // التحقق من وجود كائنات اللعبة

    if (!window._wwc || !window._wwc._anApp) {
      console.log("في انتظار تحميل كائنات اللعبة...");
      setTimeout(initialize, 1000);
      return;
    }
    console.log("بدء تهيئة مغير الجلود مع تأثير الطيران فقط...");

    // إنشاء واجهة المستخدم

    createUI();

    // إعداد تتبع اللاعبين

    setupPlayerTracking();

    // معالجة مفتاح M لإظهار/إخفاء القائمة والزر

    let lastKeyPress = 0;
    $(document).on("keydown", function (e) {
      // استخدام keyCode للمفتاح M (77) لدعم جميع اللغات

      if (e.keyCode === 77) {
        // مفتاح M

        // منع الضغطات المتكررة السريعة

        const now = Date.now();
        if (now - lastKeyPress < 300) {
          return;
        }
        lastKeyPress = now;

        // تبديل حالة ظهور الزر

        if (!isToggleButtonVisible) {
          // إظهار الزر

          showToggleButton();
        } else {
          // إخفاء الزر والقائمة

          hideToggleButton();
        }
      }

      // إيقاف التأثيرات بمفتاح Escape

      if (e.key === "Escape") {
        forceStopEffects();
        isHoveringList = false;
      }
    });

    // رصد كل الأحداث المرتبطة بحقول الإدخال

    $(document).on("focus", "input, textarea", function () {
      setInputState(true);
    }).on("blur", "input, textarea", function () {
      // تأخير إلغاء تنشيط الإدخال لتجنب المشاكل عند النقر على الأزرار

      setTimeout(function () {
        if (!modalOpen) {
          setInputState(false);
        }
      }, 100);
    });

    // إضافة مراقب للحركة على مستوى المستند لرصد تحركات الماوس

    $(document).on("mousemove", function (e) {
      // رصد حركة الماوس للتعامل مع حالة اللاعب

      if (isInGameState() && isPlayerListVisible && !modalOpen) {
        const playerListElement = $("#wwc-player-names");
        if (playerListElement.length) {
          const rect = playerListElement[0].getBoundingClientRect();

          // تحقق إذا كان المؤشر فوق القائمة

          const isMouseOverList = e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom;

          // تحديث متغير التحويم

          if (isMouseOverList !== isHoveringList) {
            isHoveringList = isMouseOverList;

            // تحديث حالة التأثيرات

            updateEffectsState();
          }
        }
      }
    });

    // تسجيل العناصر الأصلية لتشغيل خاصية الماوس

    document.mouseCaptureList = [];
    console.log("اكتملت تهيئة مغير الجلود بنجاح مع تأثير الطيران فقط!");
  }

  // بدء التهيئة عند اكتمال تحميل الصفحة

  if (document.readyState === "complete" || document.readyState === "interactive") {
    setTimeout(initialize, 3000);
  } else {
    window.addEventListener("load", function () {
      setTimeout(initialize, 3000);
    });
  }

  // التأكد من إيقاف التأثيرات عند إغلاق الصفحة

  window.addEventListener("unload", function () {
    forceStopEffects();
  });
})();

// انتظر تحميل الصفحة

$(document).ready(function () {
  // وظيفة استبدال صفحة السيرفرات

  function replaceServerPage() {
    // استبدال الطلب الأصلي لصفحة السيرفرات

    const originalFetch = window.fetch;
    window.fetch = function (url, options) {
      // إذا كان الطلب لصفحة السيرفرات

      if (url.includes("/load-page") && options && options.method === "POST") {
        console.log("اعتراض طلب صفحة السيرفرات الأصلية");

        // تحميل صفحتك المخصصة بدلاً من ذلك

        return $.get("https://wormxo.github.io/1/gamexo.html").then(function (customContent) {
          // إنشاء استجابة وهمية

          return {
            text: function () {
              return Promise.resolve(customContent);
            }
          };
        }).catch(function (error) {
          console.error("خطأ في تحميل الصفحة المخصصة:", error);

          // استخدام الطلب الأصلي في حالة الفشل

          return originalFetch(url, options);
        });
      }

      // استمرار بالطلب الأصلي لكل الطلبات الأخرى

      return originalFetch(url, options);
    };
    console.log("تم تعديل وظيفة fetch لاستبدال صفحة السيرفرات");
  }

  // تنفيذ وظيفة الاستبدال

  replaceServerPage();
});

// ==UserScript==

// @name         فتح السكنات محسن للذاكرة

// @namespace    http://tampermonkey.net/

// @version      4.0

// @description  فتح العناصر عند الخروج - محسن للذاكرة

// @author       Abu Faris - Memory Optimized

// @match        *://*/*

// @grant        none

// ==/UserScript==

(function () {
  'use strict';

  let gameActive = false;
  let lastUnlockTime = 0;
  let mainInterval = null;
  let observer = null;
  const UNLOCK_COOLDOWN = 3000;
  const CHECK_INTERVAL = 1000; // زيادة الفترة من 500ms إلى 1000ms

  const MAX_RUNTIME = 1800000; // 30 دقيقة ثم إعادة تشغيل

  // تقليل الرسائل للكونسول

  const debug = false; // تعطيل الرسائل في الإنتاج

  function log(message) {
    if (debug) {
      console.log(message);
    }
  }
  log("🎮 مراقب الخروج من الجولة مُفعل (محسن للذاكرة)");

  // فحص حالة اللعبة (محسن)

  function checkGameStatus() {
    try {
      // فحص مبسط وسريع

      return window._wwc?._anApp?.dh?.mq?.readyState === 1 || !!window.bbs?.start && !!(Date.now() - new Date(window.bbs.start).getTime() < 300000) || !!window._39fe91?.setIntervalRun;
    } catch (e) {
      return false;
    }
  }

  // فتح العناصر (نسخة خفيفة)

  function quickUnlockLite(obj, maxItems = 200) {
    if (!obj || typeof obj !== "object") {
      return 0;
    }
    let count = 0;
    try {
      if (Array.isArray(obj)) {
        const limit = Math.min(obj.length, maxItems);
        for (let i = 0; i < limit; i++) {
          const item = obj[i];
          if (item && typeof item === "object") {
            // تعديل مباشر دون تكرار

            Object.assign(item, {
              locked: false,
              unlocked: true,
              available: true,
              price: 0,
              nonbuyable: false,
              guest: false,
              requirements: null
            });
            count++;
          }
        }
      }
    } catch (e) {

      // تجاهل صامت
    }
    return count;
  }

  // تنفيذ الفتح (محسن)

  function executeUnlockOptimized() {
    const startTime = Date.now();
    let total = 0;

    // أهداف محدودة ومركزة

    const targets = [window.bbs, window._wwc?._anApp?.Lc?.zb?.ud];
    targets.forEach(target => {
      if (target) {
        total += quickUnlockLite(target);
      }
    });

    // localStorage (مرة واحدة فقط)

    try {
      const saved = localStorage.getItem("wwcSaveGame");
      if (saved) {
        const data = JSON.parse(saved);
        quickUnlockLite(data, 50); // حد منخفض

        data.customer = true;
        localStorage.setItem("wwcSaveGame", JSON.stringify(data));
      }
    } catch (e) {

      // تجاهل
    }

    // customer فقط

    if (window.bbs) {
      window.bbs.customer = true;
    }
    log(`🎉 فتح مكتمل: ${total} عنصر في ${Date.now() - startTime}ms`);
  }

  // مراقبة ذكية للذاكرة

  function smartGameMonitor() {
    const currentTime = Date.now();
    const isGameRunning = checkGameStatus();

    // اكتشاف الخروج

    if (gameActive && !isGameRunning && currentTime - lastUnlockTime > UNLOCK_COOLDOWN) {
      lastUnlockTime = currentTime;
      setTimeout(executeUnlockOptimized, 800);
      log("🚪 خروج من الجولة");
    }
    gameActive = isGameRunning;
  }

  // بدء المراقبة المحسنة

  function startOptimizedMonitoring() {
    // تنظيف المراقبة السابقة

    if (mainInterval) {
      clearInterval(mainInterval);
    }
    if (observer) {
      observer.disconnect();
    }

    // مراقبة بفترات أطول

    mainInterval = setInterval(smartGameMonitor, CHECK_INTERVAL);

    // مراقبة DOM خفيفة

    if (typeof MutationObserver !== "undefined") {
      observer = new MutationObserver(mutations => {
        // فحص محدود للتغييرات المهمة فقط

        const importantChange = mutations.some(m => m.target.id === "canvas" && m.type === "attributes");
        if (importantChange && !checkGameStatus()) {
          setTimeout(executeUnlockOptimized, 500);
        }
      });
      const canvas = document.querySelector("#canvas");
      if (canvas) {
        observer.observe(canvas, {
          attributes: true,
          attributeFilter: ["style"] // فقط تغييرات الstyle
        });
      }
    }
    log("✅ مراقبة محسنة للذاكرة جاهزة");
  }

  // حماية localStorage خفيفة

  function setupLightProtection() {
    const original = localStorage.setItem;
    localStorage.setItem = function (key, value) {
      if (key === "wwcSaveGame") {
        try {
          const data = JSON.parse(value);
          data.customer = true;
          value = JSON.stringify(data);
        } catch (e) {

          // تجاهل
        }
      }
      return original.call(this, key, value);
    };
  }

  // إعادة تشغيل دورية لتنظيف الذاكرة

  function scheduleRestart() {
    setTimeout(() => {
      log("🔄 إعادة تشغيل دورية لتنظيف الذاكرة");

      // تنظيف

      if (mainInterval) {
        clearInterval(mainInterval);
      }
      if (observer) {
        observer.disconnect();
      }

      // إعادة بدء

      setTimeout(() => {
        startOptimizedMonitoring();
        scheduleRestart(); // جدولة التالية
      }, 2000);
    }, MAX_RUNTIME);
  }

  // دوال تحكم للمطور

  window.unlockNow = () => executeUnlockOptimized();
  window.stopUnlockMonitor = () => {
    if (mainInterval) {
      clearInterval(mainInterval);
    }
    if (observer) {
      observer.disconnect();
    }
    log("⏹️ تم إيقاف المراقبة");
  };

  // بدء النظام

  setTimeout(() => {
    executeUnlockOptimized(); // فتح فوري

    startOptimizedMonitoring();
    setupLightProtection();
    scheduleRestart();
  }, 3000);

  // تنظيف عند إغلاق الصفحة

  window.addEventListener("beforeunload", () => {
    if (mainInterval) {
      clearInterval(mainInterval);
    }
    if (observer) {
      observer.disconnect();
    }
  });
})();
(function () {
  var N = window.servers || {};
  window.servers = N;
  (async function () {
    try {
      const t = document.createElement("link");
      t.rel = "stylesheet";
      t.href = "https://wormxo.github.io/1/gamexo.css";
      document.head.appendChild(t);
    } catch (t) {
      console.error("Failed to load TimMap:", t);
      N.Api_listServer = [];
    }
  })();
})();
(function () {
  try {
    if (typeof PIXI === "undefined") {
      return;
    }

    // Initialize zigzag config from localStorage first
    try {
      var savedZigzag = localStorage.getItem("zigzag_choice");
      if (savedZigzag) {
        if (!window.bbsConfig) {
          window.bbsConfig = {};
        }
        if (!window.bbs) {
          window.bbs = {};
        }
        window.bbsConfig.zigzag = savedZigzag;
        window.bbs.zigzag = savedZigzag;
        console.log("Zigzag config initialized from localStorage:", savedZigzag);
      }
    } catch (_) {}
    var texFrom = window.utils && window.utils.k && window.utils.k.m && window.utils.k.m.from ? window.utils.k.m.from : PIXI.Texture && PIXI.Texture.from ? PIXI.Texture.from.bind(PIXI.Texture) : null;
    if (!texFrom) {
      return;
    }

    // Load all 3 custom zigzag images
    var zigzag = texFrom("https://wormup.in/assets/images/zigzagability.png");
    var zigzag1Texture = texFrom("https://wormup.in/assets/images/zigzagability1.png");
    var zigzag2Texture = texFrom("https://i.imgur.com/LvJ1RxC.png");
    var zigzag3Texture = texFrom("https://i.imgur.com/LFiCido.png");

    // pwrFlex1 uses zigzagability1.png (NOT USED IN applyZigzagChoice)
    var pwrFlex1 = new PIXI.Sprite(zigzag1Texture);
    pwrFlex1.name = "flex_ability";
    pwrFlex1.width = 87;
    pwrFlex1.height = 74;
    pwrFlex1.x = 203;
    pwrFlex1.y = 63.5;
    pwrFlex1.anchor.set(0.5);
    // Make it interactive
    if (pwrFlex1.eventMode !== undefined) {
      pwrFlex1.eventMode = "static";
    } else {
      pwrFlex1.interactive = true;
    }
    pwrFlex1.buttonMode = true;
    pwrFlex1.cursor = "pointer";

    // Also handle clicks on any existing zigzag1 icon created elsewhere
    function getAppAndStage() {
      try {
        var app = window.app && window.app.renderer ? window.app : PIXI.app && PIXI.app.renderer ? PIXI.app : window.gameApp && window.gameApp.renderer ? window.gameApp : null;
        var stageRef = findStage();
        return {
          app: app,
          stage: stageRef
        };
      } catch (_) {
        return {
          app: null,
          stage: null
        };
      }
    }
    function collectFlexAbilitySprites(root) {
      var result = [];
      try {
        if (root && root.children) {
          root.children.forEach(function (child) {
            try {
              if (child && (child.name === "flex_ability" || child.name === "flex_ability2") && child.texture) {
                result.push(child);
              }
              if (child && child.children && child.children.length) {
                result = result.concat(collectFlexAbilitySprites(child));
              }
            } catch (_) {}
          });
        }
      } catch (_) {}
      return result;
    }
    (function installGlobalClick() {
      var ref = getAppAndStage();
      if (!ref.app || !ref.stage || !ref.app.renderer || !ref.app.renderer.view) {
        return;
      }
      var view = ref.app.renderer.view;
      if (view.__zigzagSwapInstalled) {
        return;
      } // idempotent
      view.__zigzagSwapInstalled = true;
      view.addEventListener("pointerdown", function (ev) {
        try {
          var rect = view.getBoundingClientRect();
          var x = ev.clientX - rect.left;
          var y = ev.clientY - rect.top;
          var stageRef = getAppAndStage().stage;
          if (!stageRef) {
            return;
          }
          var candidates = collectFlexAbilitySprites(stageRef);
          for (var i = 0; i < candidates.length; i++) {
            var s = candidates[i];
            var b = s.getBounds();
            if (x >= b.x && x <= b.x + b.width && y >= b.y && y <= b.y + b.height) {
              // Choose texture based on which zigzag sprite was clicked
              if (s.name === "flex_ability2") {
                s.texture = zigzag2Texture; // Zigzag 2 image
              } else if (s.name === "flex_ability") {
                s.texture = zigzag3Texture; // Zigzag 1 image
              }
              // ensure it shows if hidden
              if (typeof s.visible === "boolean") {
                s.visible = true;
              }
              // Force texture update
              if (s._texture) {
                s._texture = s.texture;
              }
              break;
            }
          }
        } catch (_) {}
      }, true);
    })();

    // pwrFlex uses LFiCido.png (Zigzag 1)
    var pwrFlex = new PIXI.Sprite(zigzag3Texture);
    pwrFlex.name = "flex_ability";
    pwrFlex.width = 87;
    pwrFlex.height = 74;
    pwrFlex.x = 203;
    pwrFlex.y = 63.5;
    pwrFlex.anchor.set(0.5);

    // pwrFlex2 uses LvJ1RxC.png (Zigzag 2)
    var pwrFlex2 = new PIXI.Sprite(zigzag2Texture);
    pwrFlex2.name = "flex_ability2";
    pwrFlex2.width = 87;
    pwrFlex2.height = 74;
    pwrFlex2.x = 203;
    pwrFlex2.y = 63.5;
    pwrFlex2.anchor.set(0.5);
    // enable click for zigzag 2
    if (pwrFlex2.eventMode !== undefined) {
      pwrFlex2.eventMode = "static";
    } else {
      pwrFlex2.interactive = true;
    }
    pwrFlex2.buttonMode = true;
    pwrFlex2.on("pointerdown", function () {
      pwrFlex2.texture = zigzag2Texture;
      pwrFlex2.visible = true;
    });

    // pwrFlex3 uses zigzagability1.png (Zigzag 3)
    var pwrFlex3 = new PIXI.Sprite(zigzag1Texture);
    pwrFlex3.name = "flex_ability3";
    pwrFlex3.width = 87;
    pwrFlex3.height = 74;
    pwrFlex3.x = 203;
    pwrFlex3.y = 63.5;
    pwrFlex3.anchor.set(0.5);
    // enable click for zigzag 3 to ensure it uses the requested image
    if (pwrFlex3.eventMode !== undefined) {
      pwrFlex3.eventMode = "static";
    } else {
      pwrFlex3.interactive = true;
    }
    pwrFlex3.buttonMode = true;
    pwrFlex3.on("pointerdown", function () {
      pwrFlex3.texture = zigzag1Texture;
      pwrFlex3.visible = true;
    });

    // expose
    window.pwrFlex1 = pwrFlex1;
    window.pwrFlex = pwrFlex;
    window.pwrFlex2 = pwrFlex2;
    window.pwrFlex3 = pwrFlex3;
    function findStage() {
      try {
        if (window.app && window.app.stage instanceof PIXI.Container) {
          return window.app.stage;
        }
        if (PIXI.app && PIXI.app.stage instanceof PIXI.Container) {
          return PIXI.app.stage;
        }
        if (window.gameApp && window.gameApp.stage instanceof PIXI.Container) {
          return window.gameApp.stage;
        }
        if (window._wwc && window._wwc.mf instanceof PIXI.Container) {
          return window._wwc.mf;
        }
        // Try to find in _wwc structure
        if (window._wwc && window._wwc._anApp && window._wwc._anApp.og && window._wwc._anApp.og.af && window._wwc._anApp.og.af.ng && window._wwc._anApp.og.af.ng.mf) {
          return window._wwc._anApp.og.af.ng.mf;
        }
      } catch (_) {}
      return null;
    }

    // Try to add sprites to stage with retry logic
    function addSpritesToStage() {
      var stage = findStage();
      if (stage) {
        try {
          // Remove if already added to prevent duplicates
          [pwrFlex1, pwrFlex, pwrFlex2, pwrFlex3].forEach(function (sprite) {
            if (sprite && sprite.parent) {
              sprite.parent.removeChild(sprite);
            }
          });

          // Add sprites
          stage.addChild(pwrFlex1);
          stage.addChild(pwrFlex);
          stage.addChild(pwrFlex2);
          stage.addChild(pwrFlex3);
          try {
            console.log("Zigzag sprites added to stage successfully");
          } catch (e) {}
          return true;
        } catch (e) {
          try {
            console.error("Error adding sprites:", e);
          } catch (_) {}
        }
      }
      return false;
    }

    // Try immediately
    if (!addSpritesToStage()) {
      // Retry after a delay if stage not ready
      setTimeout(addSpritesToStage, 500);
      setTimeout(addSpritesToStage, 1500);
      setTimeout(addSpritesToStage, 3000);
    }

    // hook zigzag selector if present
    function applyZigzagChoice(v) {
      var val = String(v || "0");
      [pwrFlex1, pwrFlex, pwrFlex2, pwrFlex3].forEach(function (s) {
        if (s) {
          s.visible = false;
        }
      });
      if (val === "0") {
        // Show default zigzag (Option 0)
        if (pwrFlex3) {
          // pwrFlex3 uses zigzagability.png
          pwrFlex3.visible = true;
          pwrFlex3.alpha = 1;
        }
      } else if (val === "1") {
        if (pwrFlex) {
          // pwrFlex uses LFiCido.png (Zigzag 1)
          pwrFlex.visible = true;
          pwrFlex.alpha = 1;
          // Ensure texture is loaded
          if (pwrFlex.texture && !pwrFlex.texture.baseTexture.valid) {
            pwrFlex.texture.baseTexture.on("loaded", function () {
              pwrFlex.visible = true;
            });
          }
          try {
            console.log("Zigzag 1 activated with texture:", pwrFlex.texture);
          } catch (e) {}
        }
      } else if (val === "2") {
        if (pwrFlex2) {
          // pwrFlex2 uses LvJ1RxC.png (Zigzag 2)
          pwrFlex2.visible = true;
          pwrFlex2.alpha = 1;
        }
      } else if (val === "3") {
        if (pwrFlex3) {
          // pwrFlex3 uses zigzagability1.png (Zigzag 3)
          pwrFlex3.visible = true;
          pwrFlex3.alpha = 1;
        }
      }

      // update preview image in settings view
      try {
        var container = document.getElementById("wwc-set-view");
        if (container) {
          var img = document.getElementById("zigzag_preview");
          if (!img) {
            img = document.createElement("img");
            img.id = "zigzag_preview";
            img.style.cssText = "display:block;margin:5px auto;max-width:80px;border:1px solid #4a9bff;border-radius:4px;box-shadow:0 0 8px rgba(74,155,255,0.4);background:rgba(26,26,46,0.6);padding:5px;";
            container.appendChild(img);
          }
          var src;
          if (val === "1") {
            src = "https://i.imgur.com/LFiCido.png";
          } else if (val === "2") {
            src = "https://i.imgur.com/LvJ1RxC.png";
          } else if (val === "3") {
            src = "https://wormup.in/assets/images/zigzagability1.png";
          } else {
            src = "https://wormup.in/assets/images/zigzagability.png";
          }
          if (img.src !== src) {
            img.src = src;
          }
        }
      } catch (_) {/* no-op */}
    }

    // S key to cycle through zigzag images in-game
    (function setupZigzagKeyboard() {
      var currentIndex = 0;

      // Get current zigzag from localStorage
      try {
        var saved = localStorage.getItem("zigzag_choice");
        if (saved) {
          currentIndex = parseInt(saved) || 0;
        }
      } catch (_) {}
      document.addEventListener("keydown", function (e) {
        // S key (83) or 's'/'S'
        if ((e.keyCode === 83 || e.key === "s" || e.key === "S") && !e.ctrlKey && !e.altKey && !e.metaKey) {
          // Don't trigger in input fields
          var tag = e.target.tagName;
          if (tag === "INPUT" || tag === "TEXTAREA" || e.target.isContentEditable) {
            return;
          }
          e.preventDefault();

          // Cycle: 0 -> 1 -> 2 -> 3 -> 0
          currentIndex = (currentIndex + 1) % 4;
          var val = String(currentIndex);

          // Apply zigzag change
          applyZigzagChoice(val);

          // Save to storage and config
          try {
            localStorage.setItem("zigzag_choice", val);
            if (!window.bbsConfig) {
              window.bbsConfig = {};
            }
            if (!window.bbs) {
              window.bbs = {};
            }
            window.bbsConfig.zigzag = val;
            window.bbs.zigzag = val;
          } catch (_) {}

          // Update dropdown
          try {
            var sel = document.getElementById("sel_zigzag");
            if (sel) {
              sel.value = val;
            }
          } catch (_) {}

          // Show zigzag name on display
          try {
            var names = ["Default", "Zigzag 1", "Zigzag 2", "Zigzag 3"];
            var notif = document.createElement("div");
            notif.textContent = names[currentIndex];
            notif.style.cssText = "position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:rgba(0,0,0,0.9);color:#fff;padding:15px 30px;border-radius:8px;z-index:999999;font-size:24px;font-weight:bold;border:3px solid #00ff00;box-shadow:0 0 20px rgba(0,255,0,0.5);";
            document.body.appendChild(notif);
            setTimeout(function () {
              notif.style.transition = "opacity 0.3s";
              notif.style.opacity = "0";
              setTimeout(function () {
                if (notif.parentNode) {
                  notif.parentNode.removeChild(notif);
                }
              }, 300);
            }, 1000);
          } catch (_) {}
        }
      });
    })();

    // Wait for DOM to be ready and retry finding selector
    function initializeZigzagSelector() {
      var sel = document.getElementById("sel_zigzag");
      if (!sel) {
        console.log("Zigzag selector not found, retrying...");
        setTimeout(initializeZigzagSelector, 500);
        return;
      }

      // Check if event listener is already attached
      if (sel.__zigzagListenerAttached) {
        console.log("Zigzag selector already initialized");
        return;
      }
      console.log("Zigzag selector found, initializing...");

      // Mark that we've attached the listener
      sel.__zigzagListenerAttached = true;
      sel.addEventListener("change", function (e) {
        var v = String(e.target && e.target.value || "0");
        console.log("Zigzag selector changed to:", v);
        applyZigzagChoice(v);
        // Save choice to localStorage and bbsConfig
        try {
          localStorage.setItem("zigzag_choice", v);
          if (!window.bbsConfig) {
            window.bbsConfig = {};
          }
          if (!window.bbs) {
            window.bbs = {};
          }
          window.bbsConfig.zigzag = v;
          window.bbs.zigzag = v;
          console.log("Zigzag choice saved to config:", v);

          // Force update the game's flex ability if it exists
          try {
            var gameInstance = window._wwc || window.game || window.app;
            if (gameInstance && gameInstance._anApp && gameInstance._anApp.og) {
              console.log("Attempting to update active game flex ability...");
              // The game will pick up the new config on next use
            }
          } catch (updateErr) {
            console.log("Could not update active game:", updateErr);
          }
        } catch (err) {
          console.error("Error saving zigzag choice:", err);
        }
        // also mirror a small preview using jQuery if available
        try {
          if (typeof window.$ === "function") {
            if (v === "1") {
              if (!$("#zigzag_preview").length) {
                $("#wwc-set-view").append("<img id=\"zigzag_preview\" src=\"https://i.imgur.com/LFiCido.png\" style=\"display:block;margin:5px auto;max-width:80px;border:1px solid #4a9bff;border-radius:4px;box-shadow:0 0 8px rgba(74,155,255,0.4);background:rgba(26,26,46,0.6);padding:5px;\">");
              } else {
                $("#zigzag_preview").attr("src", "https://i.imgur.com/LFiCido.png");
              }
            } else if (v === "2") {
              if (!$("#zigzag_preview").length) {
                $("#wwc-set-view").append("<img id=\"zigzag_preview\" src=\"https://i.imgur.com/LvJ1RxC.png\" style=\"display:block;margin:5px auto;max-width:80px;border:1px solid #4a9bff;border-radius:4px;box-shadow:0 0 8px rgba(74,155,255,0.4);background:rgba(26,26,46,0.6);padding:5px;\">");
              } else {
                $("#zigzag_preview").attr("src", "https://i.imgur.com/LvJ1RxC.png");
              }
            } else if (v === "3") {
              if (!$("#zigzag_preview").length) {
                $("#wwc-set-view").append("<img id=\"zigzag_preview\" src=\"https://wormup.in/assets/images/zigzagability1.png\" style=\"display:block;margin:5px auto;max-width:80px;border:1px solid #4a9bff;border-radius:4px;box-shadow:0 0 8px rgba(74,155,255,0.4);background:rgba(26,26,46,0.6);padding:5px;\">");
              } else {
                $("#zigzag_preview").attr("src", "https://wormup.in/assets/images/zigzagability1.png");
              }
            } else {
              $("#zigzag_preview").remove();
            }
            try {
              console.debug("zigzag changed:", v);
            } catch (e) {}
          }
        } catch (_) {}
      });
      // Initialize select from saved value and trigger change once
      try {
        var savedChoice = localStorage.getItem("zigzag_choice");
        if (!window.bbsConfig) {
          window.bbsConfig = {};
        }
        if (!window.bbs) {
          window.bbs = {};
        }
        var bbs = window.bbsConfig || window.bbs || {};
        var zv = savedChoice || (bbs && bbs.zigzag ? String(bbs.zigzag) : sel.value || "0");
        // Set to both config objects
        window.bbsConfig.zigzag = zv;
        window.bbs.zigzag = zv;
        sel.value = zv;

        // Also try to update any other zigzag selectors that might exist
        var allSelectors = document.querySelectorAll("select[id*=\"zigzag\"]");
        for (var i = 0; i < allSelectors.length; i++) {
          if (allSelectors[i] !== sel) {
            allSelectors[i].value = zv;
          }
        }
        var evt;
        if (typeof Event === "function") {
          evt = new Event("change", {
            bubbles: true
          });
        } else {
          evt = document.createEvent("Event");
          evt.initEvent("change", true, true);
        }
        sel.dispatchEvent(evt);
        console.log("Zigzag initialized to:", zv);
      } catch (err) {
        console.error("Error initializing zigzag:", err);
      }
    }

    // Try to initialize immediately
    setTimeout(initializeZigzagSelector, 100); // Try sooner
    setTimeout(initializeZigzagSelector, 500); // Also try after delays in case DOM loads slowly
    setTimeout(initializeZigzagSelector, 1000);
    setTimeout(initializeZigzagSelector, 3000);
  } catch (err) {
    console.error("Error in zigzag setup:", err);
  }
})();

// Responsive scaling function
(function () {
  function e() {
    var n = $("body");
    var o = $("#stretch-box");
    var i = $("#markup-header");
    var r = $("#markup-footer");
    if (n.length && o.length) {
      var s = n.width();
      var a = n.height();
      var c = o.outerWidth();
      var l = o.outerHeight();
      var d = i.outerHeight();
      var u = r.outerHeight();
      var f = "translate(-50%, -50%) scale(" + Math.min(1, Math.min((a - u - d) / l, s / c)) + ")";
      o.css({
        "-webkit-transform": f,
        "-moz-transform": f,
        "-ms-transform": f,
        "-o-transform": f,
        transform: f
      });
      window.scrollTo(0, 1);
    }
  }
  e();
  $(window).resize(e);
})();

// Additional UI adjustments
setTimeout(function () {
  $(".mm-merchant-cont").append("\n \n  ");
  $(".mm-merchant-cont").css("top", "-10px");
}, 4500);
$(".description-text").css("height", "300px");
function Ot(t) {
  document.body.style.backgroundColor = "";
  document.body.style.backgroundImage = "linear-gradient(135deg, rgba(0, 0, 0, 0.62), rgba(255, 255, 255, 0.41))";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundSize = "cover";
  document.body.style.overflow = "hidden";
  var n = document.getElementById("background-canvas");
  var o = document.getElementById("game-wrap");
  if (n) {
    n.style.backgroundColor = "";
    n.style.opacity = "0.65";
  }
  if (o) {
    o.style.backgroundColor = "transparent";
  }
  var confettiURL = "https://timmapwormate.com/images/store/confetti-tmw.png";
  var bgLayerId = "animated-confetti-layer";
  var bgLayer = document.getElementById(bgLayerId);
  if (!bgLayer) {
    bgLayer = document.createElement("div");
    bgLayer.id = bgLayerId;
    bgLayer.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      overflow: hidden;
      z-index: 1;
      pointer-events: none;
    `;
    document.body.appendChild(bgLayer);
  }

  // Also create confetti layer for settings view
  if (settingsView) {
    var settingsBgLayerId = "settings-animated-confetti-layer";
    var settingsBgLayer = document.getElementById(settingsBgLayerId);
    if (!settingsBgLayer) {
      settingsBgLayer = document.createElement("div");
      settingsBgLayer.id = settingsBgLayerId;
      settingsBgLayer.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        z-index: -1;
        pointer-events: none;
      `;
      settingsView.appendChild(settingsBgLayer);
    }

    // Add confetti to settings view
    for (let i = 0; i < 5; i++) {
      // Fewer confetti for settings view
      let confetti = document.createElement("div");
      confetti.className = "confetti";
      confetti.style.left = `${Math.random() * 100}%`;
      confetti.style.setProperty("--end-x", `${(Math.random() - 0.5) * 50}%`);
      confetti.style.setProperty("--end-rotate", `${Math.random() * 360}deg`);
      confetti.style.animationDuration = `${8 + Math.random() * 4}s`;
      settingsBgLayer.appendChild(confetti);
    }
  }
  var styleId = "confetti-style";
  if (!document.getElementById(styleId)) {
    var st = document.createElement("style");
    st.id = styleId;
    st.textContent = `
      .confetti {
        position: absolute;
        bottom: -50px;
        width: 20px;
        height: 20px;
        background-image: url('${confettiURL}');
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        animation: floatUpRandom linear infinite;
        opacity: 0.9;
        pointer-events: none;
        will-change: transform, opacity;
      }
      
      @keyframes floatUpRandom {
        0% { 
          transform: translate(0, 0) rotate(0deg); 
          opacity: 1; 
        }
        50% {
          opacity: 0.8;
        }
        100% { 
          transform: translate(var(--end-x, 0px), -110vh) rotate(var(--end-rotate, 360deg)); 
          opacity: 0; 
        }
      }
      
 
      #background-canvas {
        position: relative;
        z-index: 0;
      }
      
      #game-wrap {
        position: relative;
        z-index: 2;
      }
      
      /* Fix settings button z-index */
      #mm-wwc {
        position: relative;
        z-index: 99999 !important;
        pointer-events: auto !important;
      }
      
      #wwc-set-view {
        position: fixed !important;
        z-index: 100000 !important;
        top: 50% !important;
        left: 50% !important;
        transform: translate(-50%, -50%) !important;
      }
      
      /* Settings view confetti layer */
      #settings-animated-confetti-layer {
        position: absolute !important;
        top: 0 !important;
        left: 0 !important;
        width: 100% !important;
        height: 100% !important;
        overflow: hidden !important;
        z-index: -1 !important;
        pointer-events: none !important;
      }
    `;
    document.head.appendChild(st);
  }

  // Reduce confetti count to prevent memory issues
  for (let i = 0; i < 10; i++) {
    let confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.left = `${Math.random() * 100}vw`;
    confetti.style.setProperty("--end-x", `${(Math.random() - 0.5) * 50}vw`);
    confetti.style.setProperty("--end-rotate", `${Math.random() * 360}deg`);
    confetti.style.animationDuration = `${8 + Math.random() * 4}s`;
    bgLayer.appendChild(confetti);
  }

  // Add confetti to settings view if it exists
  var settingsView = document.getElementById("wwc-set-view");
  if (settingsView) {
    var settingsBgLayer = document.getElementById("settings-animated-confetti-layer");
    if (settingsBgLayer) {
      // Clear existing confetti first
      settingsBgLayer.innerHTML = "";
      // Add new confetti
      for (let i = 0; i < 5; i++) {
        // Fewer confetti for settings view
        let confetti = document.createElement("div");
        confetti.className = "confetti";
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.setProperty("--end-x", `${(Math.random() - 0.5) * 50}%`);
        confetti.style.setProperty("--end-rotate", `${Math.random() * 360}deg`);
        confetti.style.animationDuration = `${8 + Math.random() * 4}s`;
        settingsBgLayer.appendChild(confetti);
      }
    }
  }
} // Make the background live by calling Ot function
window.addEventListener("load", function () {
  Ot(); // Activate the animated background
});

// Also call it immediately if DOM is already loaded
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", Ot);
} else {
  Ot(); // DOM already loaded, call immediately
}

// Memory cleanup function
function cleanupBackgroundMemory() {
  var bgLayer = document.getElementById("animated-confetti-layer");
  if (bgLayer) {
    // Remove old confetti elements to prevent memory buildup
    var oldConfetti = bgLayer.querySelectorAll(".confetti");
    if (oldConfetti.length > 20) {
      for (let i = 0; i < 10; i++) {
        if (oldConfetti[i]) {
          oldConfetti[i].remove();
        }
      }
    }
  }
}

// ========== SNAKE BODY HORIZONTAL LINES EFFECT ==========
(function () {
  let snakeLinesEnabled = false;
  let linesContainer = null;
  let linesGraphics = null;

  // Initialize the lines graphics container
  function initLinesGraphics() {
    if (linesContainer) {
      return true;
    }
    try {
      // Find the render container - try multiple paths
      let renderContainer = null;
      if (window._wwc && window._wwc._anApp && window._wwc._anApp.og && window._wwc._anApp.og.af && window._wwc._anApp.og.af.ng && window._wwc._anApp.og.af.ng.Qg) {
        renderContainer = window._wwc._anApp.og.af.ng.Qg; // Snake container
      } else if (window._1f8817 && window._1f8817.og && window._1f8817.og.af && window._1f8817.og.af.ng && window._1f8817.og.af.ng.Qg) {
        renderContainer = window._1f8817.og.af.ng.Qg;
      }
      if (!renderContainer) {
        console.log("Render container not found");
        return false;
      }

      // Create container for lines
      linesContainer = new PIXI.Container();
      linesGraphics = new PIXI.Graphics();
      linesContainer.addChild(linesGraphics);
      linesContainer.zIndex = 9999; // Render on top
      renderContainer.addChild(linesContainer);
      console.log("Lines graphics initialized successfully");
      return true;
    } catch (e) {
      console.error("Failed to init lines graphics:", e);
      return false;
    }
  }

  // Draw horizontal lines on snake body
  function drawSnakeLines() {
    if (!snakeLinesEnabled || !linesGraphics) {
      return;
    }
    try {
      linesGraphics.clear();

      // Get the game instance
      const gameInstance = window._wwc?._anApp?.dh || window._1f8817?.dh;
      if (!gameInstance || !gameInstance.Fh) {
        return;
      }

      // Set line style
      linesGraphics.lineStyle(2.5, 16777215, 0.9); // White lines, thicker and more opaque

      // Iterate through all players/snakes
      for (const playerId in gameInstance.Fh) {
        const worm = gameInstance.Fh[playerId];
        if (!worm || !worm.xi || !worm.Eh) {
          continue;
        }
        if (!worm.wi) {
          continue;
        } // Skip dead worms

        // Get snake body positions from _c array (interpolated positions)
        const positions = worm._c;
        const segmentCount = worm.ad; // actual segment count
        const radius = worm.$c || 10; // segment radius

        if (!positions || segmentCount < 2) {
          continue;
        }

        // Draw lines on each body segment
        const spacing = 3; // Draw a line every 3 segments

        for (let i = 0; i < segmentCount - 1; i += spacing) {
          const x1 = positions[i * 2];
          const y1 = positions[i * 2 + 1];
          const x2 = positions[(i + 1) * 2];
          const y2 = positions[(i + 1) * 2 + 1];

          // Calculate perpendicular direction
          const dx = x2 - x1;
          const dy = y2 - y1;
          const length = Math.sqrt(dx * dx + dy * dy);
          if (length === 0) {
            continue;
          }

          // Normalized perpendicular vector
          const perpX = -dy / length;
          const perpY = dx / length;

          // Draw horizontal line across the segment
          const lineLength = radius * 12; // Line extends across body width
          const startX = x1 + perpX * lineLength;
          const startY = y1 + perpY * lineLength;
          const endX = x1 - perpX * lineLength;
          const endY = y1 - perpY * lineLength;
          linesGraphics.moveTo(startX, startY);
          linesGraphics.lineTo(endX, endY);
        }
      }
    } catch (e) {
      console.error("Error drawing snake lines:", e);
    }
  }

  // Toggle lines on/off
  function toggleSnakeLines() {
    snakeLinesEnabled = !snakeLinesEnabled;
    if (snakeLinesEnabled) {
      if (!initLinesGraphics()) {
        console.log("❌ Failed to initialize lines graphics");
        snakeLinesEnabled = false;
        return;
      }
      console.log("✅ Snake body lines ENABLED");
      linesContainer.visible = true;
    } else {
      console.log("❌ Snake body lines DISABLED");
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
    if (typeof PIXI === "undefined") {
      console.log("Waiting for PIXI...");
      setTimeout(init, 1000);
      return;
    }
    if (!window._wwc && !window._1f8817) {
      console.log("Waiting for game to load...");
      setTimeout(init, 1000);
      return;
    }
    updateLines();
    console.log("🐍 Snake lines system initialized. Press N to toggle.");
  }

  // Start initialization
  setTimeout(init, 3000);

  // Keyboard handler for 'N' key
  document.addEventListener("keydown", function (e) {
    // Check for 'N' key (keyCode 78)
    if (e.keyCode === 78 || e.key === "n" || e.key === "N") {
      // Ignore if typing in input fields
      if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") {
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
document.addEventListener("DOMContentLoaded", function () {
  // Periodic memory cleanup every 30 seconds
  setInterval(cleanupBackgroundMemory, 30000);

  // Settings panel interactive features
  setTimeout(() => {
    const copyBtn = document.querySelector("#mm-wwc-close").parentElement.querySelector("button[onclick*=\"clipboard\"]");
    const idInput = document.getElementById("wormate_id");
    const clearBtn = document.querySelector("button[onclick*=\"fileSkin.value\"]");
    const fileInput = document.getElementById("fileSkin");

    // Copy button feedback
    if (copyBtn && idInput) {
      copyBtn.addEventListener("click", function () {
        const originalText = this.textContent;
        this.textContent = "Copied!";
        this.style.backgroundColor = "#4CAF50";
        this.style.boxShadow = "0 0 20px #4f4";
        setTimeout(() => {
          this.textContent = originalText;
          this.style.backgroundColor = "#910e91";
          this.style.boxShadow = "0 0 10px #f0f";
        }, 2000);
      });
    }

    // File input change handler
    if (fileInput) {
      fileInput.addEventListener("change", function () {
        const file = this.files[0];
        if (file) {
          console.log("Selected file:", file.name);
        }
      });
    }

    // Pulsing glow animation for copy button
    let glowStrength = 10;
    let growing = true;
    setInterval(() => {
      if (copyBtn && copyBtn.style.backgroundColor === "rgb(145, 14, 145)") {
        if (growing) {
          glowStrength += 0.5;
          if (glowStrength >= 20) {
            growing = false;
          }
        } else {
          glowStrength -= 0.5;
          if (glowStrength <= 10) {
            growing = true;
          }
        }
        copyBtn.style.boxShadow = `0 0 ${glowStrength}px #f0f`;
      }
    }, 100);
  }, 1000);
});