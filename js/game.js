(function () {
  "use strict";
  // by xo and bmw - Enhanced Edition with Beautiful Animated Circles as BACKGROUND (No Image)
  // + UPDATED: Snow confetti pieces rotate in circular falling paths.

  const WormXoSelector = {
    storageKey: "WORMXO_SELECTED_SCRIPT",

    scripts: {
      wormworld: "https://wormxo.store/js/wormworld.js",
      timmap: "https://wormxo.store/js/timmap.js"
    },

    init() {
      const selected = localStorage.getItem(this.storageKey);

      if (selected && this.isValidScript(selected)) {
        this.loadSelected(selected);
        return;
      }

      this.lockPage();
      this.injectStyle();
      this.injectCircleStyles();
      this.createAnimatedCircles();
      this.createConfettiPieces();
      this.render();
      this.bindEvents();
    },

    isValidScript(url) {
      return Object.values(this.scripts).includes(url);
    },

    lockPage() {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      document.body.innerHTML = "";
    },

    selectScript(url) {
      localStorage.setItem(this.storageKey, url);
      window.location.reload();
    },

    loadSelected(url) {
      const script = document.createElement("script");
      script.src = url + "?v=" + Date.now();
      script.async = false;
      document.head.appendChild(script);
    },

    createAnimatedCircles() {
      const circlesContainer = document.createElement("div");
      circlesContainer.id = "wormxo-circles-container";

      const colors = [
        { name: "green", color1: "rgba(13, 175, 75, 0.94)", color2: "rgba(22, 200, 231, 0.82)", size: "65vw", top: "-15%", left: "-20%", duration: 45, delay: 0 },
        { name: "yellow", color1: "rgba(107, 106, 16, 0.8)", color2: "rgba(84, 85, 35, 0.97)", size: "70vw", bottom: "-20%", right: "-15%", duration: 50, delay: 2.5 },
        { name: "sky", color1: "rgba(247, 9, 255, 0.4)", color2: "rgb(212, 0, 255)", size: "60vw", top: "40%", left: "30%", duration: 48, delay: 1.2 },
        { name: "pink", color1: "rgba(9, 194, 250, 0.4)", color2: "rgba(21, 192, 44, 0.63)", size: "68vw", bottom: "5%", left: "-25%", duration: 52, delay: 3.8 }
      ];

      colors.forEach((color) => {
        const circle = document.createElement("div");
        circle.className = `wormxo-circle wormxo-circle-${color.name}`;

        let positionStyle = "";
        if (color.top) positionStyle += `top: ${color.top};`;
        if (color.bottom) positionStyle += `bottom: ${color.bottom};`;
        if (color.left) positionStyle += `left: ${color.left};`;
        if (color.right) positionStyle += `right: ${color.right};`;

        circle.style.cssText = `
          width: ${color.size};
          height: ${color.size};
          background: radial-gradient(circle at 30% 30%, ${color.color1}, ${color.color2});
          position: absolute;
          ${positionStyle}
          border-radius: 50%;
          filter: blur(80px);
          animation: wormxoFloatRotate ${color.duration}s infinite ease-in-out;
          animation-delay: ${color.delay}s;
          opacity: 0.6;
          mix-blend-mode: screen;
          will-change: transform;
        `;

        circlesContainer.appendChild(circle);
      });

      document.body.appendChild(circlesContainer);

      document.addEventListener("mousemove", (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 12;
        const y = (e.clientY / window.innerHeight - 0.5) * 8;
        circlesContainer.style.transform = `translate(${x}px, ${y}px)`;
      });

      document.addEventListener("mouseleave", () => {
        circlesContainer.style.transform = "translate(0, 0)";
      });
    },

    createConfettiPieces() {
      const old = document.getElementById("wormxo-confetti-container");
      if (old) old.remove();

      const confettiContainer = document.createElement("div");
      confettiContainer.id = "wormxo-confetti-container";
      confettiContainer.style.cssText = `
        position: fixed;
        inset: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 25;
        overflow: hidden;
        filter: blur(0.15px);
      `;
      document.body.appendChild(confettiContainer);

      const imageUrl = "https://wormate.io/images/confetti-xmas2023.png";

      const snowList = [
        { x: 8,  y: -18, size: 52, dur: 22, delay: -2,  drift: 130, orbit: 58,  spin: 1,  opacity: .70 },
        { x: 20, y: -28, size: 70, dur: 28, delay: -8,  drift: 180, orbit: 72,  spin: -1, opacity: .82 },
        { x: 34, y: -16, size: 46, dur: 24, delay: -5,  drift: 150, orbit: 64,  spin: 1,  opacity: .68 },
        { x: 48, y: -32, size: 78, dur: 32, delay: -12, drift: 220, orbit: 86,  spin: -1, opacity: .76 },
        { x: 62, y: -20, size: 58, dur: 26, delay: -7,  drift: 165, orbit: 68,  spin: 1,  opacity: .72 },
        { x: 76, y: -36, size: 84, dur: 35, delay: -16, drift: 250, orbit: 95,  spin: -1, opacity: .80 },
        { x: 88, y: -14, size: 50, dur: 23, delay: -4,  drift: 140, orbit: 60,  spin: 1,  opacity: .66 },
        { x: 96, y: -30, size: 66, dur: 30, delay: -11, drift: 210, orbit: 78,  spin: -1, opacity: .74 },
        { x: 14, y: -45, size: 42, dur: 27, delay: -14, drift: 195, orbit: 70,  spin: -1, opacity: .62 },
        { x: 42, y: -50, size: 62, dur: 34, delay: -18, drift: 260, orbit: 90,  spin: 1,  opacity: .70 },
        { x: 68, y: -48, size: 48, dur: 29, delay: -10, drift: 215, orbit: 76,  spin: -1, opacity: .65 },
        { x: 84, y: -55, size: 74, dur: 38, delay: -22, drift: 300, orbit: 105, spin: 1,  opacity: .78 }
      ];

      snowList.forEach((cfg, i) => {
        const piece = document.createElement("div");
        piece.className = "wormxo-confetti-snow";

        piece.style.cssText = `
          position: absolute;
          left: ${cfg.x}vw;
          top: ${cfg.y}vh;
          width: ${cfg.size}px;
          height: ${cfg.size}px;
          background-image: url('${imageUrl}');
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
          opacity: ${cfg.opacity};
          filter: drop-shadow(0 4px 8px rgba(255,255,255,.18)) drop-shadow(0 3px 8px rgba(0,0,0,.20));
          will-change: transform, opacity;
          animation: wormxoSnowCircleFall${i} ${cfg.dur}s linear infinite;
          animation-delay: ${cfg.delay}s;
        `;

        confettiContainer.appendChild(piece);

        const direction = cfg.spin;
        const d = cfg.drift;
        const o = cfg.orbit;

        const key = document.createElement("style");
        key.textContent = `
          @keyframes wormxoSnowCircleFall${i} {
            0% {
              transform: translate3d(0, -12vh, 0) rotate(0deg) scale(.74);
              opacity: 0;
            }
            8% {
              opacity: ${cfg.opacity};
            }
            22% {
              transform: translate3d(${o * direction}px, 14vh, 0) rotate(${130 * direction}deg) scale(1.06);
            }
            44% {
              transform: translate3d(${-o * .75 * direction}px, 38vh, 0) rotate(${260 * direction}deg) scale(.88);
            }
            66% {
              transform: translate3d(${o * 1.05 * direction}px, 64vh, 0) rotate(${420 * direction}deg) scale(1.12);
            }
            86% {
              opacity: ${cfg.opacity * .85};
            }
            100% {
              transform: translate3d(${d * direction}px, 118vh, 0) rotate(${620 * direction}deg) scale(.76);
              opacity: 0;
            }
          }
        `;
        document.head.appendChild(key);
      });

      const style = document.createElement("style");
      style.textContent = `
        .wormxo-confetti-snow {
          pointer-events: none;
          transform-origin: 50% 50%;
          backface-visibility: hidden;
        }

        @media (max-width: 520px) {
          .wormxo-confetti-snow {
            width: 42px !important;
            height: 42px !important;
            opacity: .62 !important;
          }
        }
      `;
      document.head.appendChild(style);

      document.addEventListener("mousemove", (e) => {
        if (!confettiContainer) return;
        const x = (e.clientX / window.innerWidth - 0.5) * 7;
        const y = (e.clientY / window.innerHeight - 0.5) * 5;
        confettiContainer.style.transform = `translate(${x}px, ${y}px)`;
      });

      document.addEventListener("mouseleave", () => {
        if (confettiContainer) confettiContainer.style.transform = "translate(0, 0)";
      });
    },

    injectCircleStyles() {
      const style = document.createElement("style");
      style.textContent = `
        #wormxo-circles-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          overflow: hidden;
          pointer-events: none;
          transition: transform 0.1s ease-out;
          background: #0a0a1a;
        }

        @keyframes wormxoFloatRotate {
          0% {
            transform: translate(0, 0) rotate(0deg) scale(1);
          }
          33% {
            transform: translate(4%, 2%) rotate(4deg) scale(1.03);
          }
          66% {
            transform: translate(-3%, 4%) rotate(-2deg) scale(0.97);
          }
          100% {
            transform: translate(0, 0) rotate(0deg) scale(1);
          }
        }

        @media (max-width: 700px) {
          .wormxo-circle {
            filter: blur(65px) !important;
          }
        }
      `;
      document.head.appendChild(style);
    },

    render() {
      const root = document.createElement("div");
      root.id = "wormxo-select-root";

      root.innerHTML = `
        <div class="wormxo-overlay"></div>
        <div class="wormxo-card">
          <img class="wormxo-logo" src="https://wormxo.store/image/wxo.png" alt="WormXo">
          <div class="wormxo-title">WormXo</div>
          <div class="wormxo-subtitle">SELECT SERVER SYSTEM</div>

          <div class="wormxo-buttons">
            <button type="button" class="wormxo-btn" data-script="wormworld">
              🌍 WORM WORLD
            </button>
            <button type="button" class="wormxo-btn" data-script="timmap">
              🗺️ TIM MAP
            </button>
          </div>

          <div class="wormxo-footer">
            <span class="wormxo-dot green"></span>
            <span class="wormxo-dot yellow"></span>
            <span class="wormxo-dot sky"></span>
            <span class="wormxo-dot pink"></span>
          </div>
        </div>
      `;

      document.body.appendChild(root);
    },

    bindEvents() {
      document.querySelectorAll(".wormxo-btn").forEach((btn) => {
        btn.addEventListener("click", (e) => {
          const key = btn.getAttribute("data-script");
          const url = this.scripts[key];
          if (!url) return;

          btn.classList.add("loading");
          btn.innerHTML = "⏳ LOADING...";
          this.createRippleEffect(e);
          this.selectScript(url);
        });
      });
    },

    createRippleEffect(event) {
      const ripple = document.createElement("div");
      ripple.className = "wormxo-ripple";
      ripple.style.left = `${event.clientX}px`;
      ripple.style.top = `${event.clientY}px`;
      document.body.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    },

    injectStyle() {
      const style = document.createElement("style");
      style.id = "wormxo-select-style";

      style.textContent = `
        #wormxo-select-root {
          position: fixed;
          inset: 0;
          width: 100vw;
          height: 100vh;
          z-index: 2147483647;
          overflow: hidden;
          font-family: 'Segoe UI', 'Poppins', Arial, Helvetica, sans-serif;
        }

        .wormxo-overlay {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, rgba(0,0,0,0.3), rgba(0,0,0,0.7));
          backdrop-filter: blur(3px);
          z-index: 2;
          pointer-events: none;
        }

        .wormxo-card {
          position: relative;
          z-index: 15;
          min-height: 100vh;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          box-sizing: border-box;
          padding: 22px;
          text-align: center;
        }

        .wormxo-logo {
          width: clamp(145px, 22vw, 220px);
          height: auto;
          object-fit: contain;
          margin-bottom: 24px;
          animation: wormxoFloat 3.8s ease-in-out infinite;
          filter: drop-shadow(0 0 24px rgba(255,132,0,.65));
        }

        .wormxo-title {
          color: #fff;
          font-size: clamp(34px, 6vw, 64px);
          font-weight: 900;
          letter-spacing: 1px;
          text-shadow: 0 0 10px rgba(255,132,0,.8), 0 4px 18px rgba(0,0,0,.85);
        }

        .wormxo-subtitle {
          margin-top: 8px;
          margin-bottom: 18px;
          color: #ff9800;
          font-size: clamp(13px, 2.5vw, 18px);
          font-weight: 800;
          letter-spacing: 2px;
          text-shadow: 0 2px 10px rgba(0,0,0,.9);
        }

        .wormxo-buttons {
          width: min(92vw, 420px);
          display: grid;
          grid-template-columns: 1fr;
          gap: 14px;
        }

        .wormxo-btn {
          width: 100%;
          height: clamp(48px, 8vh, 62px);
          border: 2px solid #fff;
          border-radius: 14px;
          background: linear-gradient(135deg, rgba(255,132,0,.95), rgba(255,170,35,.85));
          color: #fff;
          font-size: clamp(16px, 3vw, 21px);
          font-weight: 900;
          letter-spacing: .8px;
          cursor: pointer;
          box-shadow: 0 10px 24px rgba(0,0,0,.45), inset 0 1px 0 rgba(255,255,255,.45);
          transition: transform .18s ease, background .18s ease, color .18s ease, box-shadow .18s ease;
          position: relative;
          overflow: hidden;
        }

        .wormxo-btn::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255,255,255,0.4);
          transform: translate(-50%, -50%);
          transition: width 0.5s, height 0.5s;
        }

        .wormxo-btn:hover::before {
          width: 300px;
          height: 300px;
        }

        .wormxo-btn:hover {
          transform: translateY(-3px) scale(1.02);
          background: #fff;
          color: #ff7a00;
          box-shadow: 0 14px 30px rgba(255,132,0,.42), 0 0 20px rgba(255,255,255,.30);
        }

        .wormxo-btn:active {
          transform: scale(.98);
        }

        .wormxo-btn.loading {
          pointer-events: none;
          opacity: .75;
          background: #fff;
          color: #ff7a00;
        }

        .wormxo-footer {
          margin-top: 35px;
          display: flex;
          gap: 15px;
          justify-content: center;
        }

        .wormxo-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #fff;
          animation: pulseDot 1.8s infinite;
        }

        .wormxo-dot.green { background: #0daf4b; box-shadow: 0 0 6px #0daf4b; }
        .wormxo-dot.yellow { background: #e0c71a; box-shadow: 0 0 6px #e0c71a; animation-delay: 0.2s; }
        .wormxo-dot.sky { background: #a55eff; box-shadow: 0 0 6px #c355ff; animation-delay: 0.4s; }
        .wormxo-dot.pink { background: #ff6ac4; box-shadow: 0 0 6px #ff6ac4; animation-delay: 0.6s; }

        @keyframes pulseDot {
          0%, 100% { opacity: 0.5; transform: scale(1);}
          50% { opacity: 1; transform: scale(1.5);}
        }

        .wormxo-ripple {
          position: fixed;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,132,0,0.8), rgba(255,215,0,0));
          transform: translate(-50%, -50%);
          animation: rippleAnim 0.6s ease-out forwards;
          pointer-events: none;
          z-index: 2147483647;
        }

        @keyframes rippleAnim {
          0% {
            width: 0;
            height: 0;
            opacity: 0.7;
          }
          100% {
            width: 200px;
            height: 200px;
            opacity: 0;
          }
        }

        @keyframes wormxoFloat {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-12px) scale(1.06);
          }
        }

        @media (min-width: 640px) {
          .wormxo-buttons {
            grid-template-columns: 1fr 1fr;
            width: min(92vw, 620px);
          }
        }

        @media (max-width: 420px) {
          .wormxo-card {
            padding: 16px;
          }
          .wormxo-logo {
            margin-bottom: 18px;
          }
          .wormxo-subtitle {
            margin-bottom: 22px;
          }
        }
      `;

      document.head.appendChild(style);
    }
  };

  WormXoSelector.init();
})();
