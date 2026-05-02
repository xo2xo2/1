(function () {
  "use strict";
// by xo and bmw - Enhanced Edition with Beautiful Animated Circles

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
      
      // 4 ألوان: سمائي (Sky Blue)، وردي (Pink)، أخضر (Green)، أصفر (Yellow)
      const colors = [
        { name: "sky", color1: "rgba(135, 206, 250, 0.8)", color2: "rgba(30, 144, 255, 0.4)", size: "55vw", top: "-20%", left: "-15%", duration: 32, delay: 0 },
        { name: "pink", color1: "rgba(255, 105, 180, 0.8)", color2: "rgba(255, 20, 147, 0.4)", size: "60vw", bottom: "-25%", right: "-20%", duration: 36, delay: 2 },
        { name: "green", color1: "rgba(50, 205, 50, 0.8)", color2: "rgba(34, 139, 34, 0.4)", size: "50vw", top: "30%", left: "40%", duration: 40, delay: 1 },
        { name: "yellow", color1: "rgba(255, 215, 0, 0.85)", color2: "rgba(255, 165, 0, 0.45)", size: "65vw", bottom: "10%", left: "-30%", duration: 38, delay: 3 }
      ];

      colors.forEach((color, index) => {
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
          filter: blur(70px);
          animation: wormxoFloatRotate ${color.duration}s infinite ease-in-out;
          animation-delay: ${color.delay}s;
          opacity: 0.65;
          mix-blend-mode: screen;
          will-change: transform;
        `;
        
        circlesContainer.appendChild(circle);
      });
      
      document.body.appendChild(circlesContainer);
      
      // إضافة تأثير بارالاكس مع حركة الماوس
      document.addEventListener("mousemove", (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 12;
        circlesContainer.style.transform = `translate(${x}px, ${y}px)`;
      });
      
      document.addEventListener("mouseleave", () => {
        circlesContainer.style.transform = "translate(0, 0)";
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
          transition: transform 0.08s ease-out;
        }
        
        @keyframes wormxoFloatRotate {
          0% {
            transform: translate(0, 0) rotate(0deg) scale(1);
          }
          25% {
            transform: translate(5%, 3%) rotate(5deg) scale(1.02);
          }
          50% {
            transform: translate(-3%, 5%) rotate(0deg) scale(0.98);
          }
          75% {
            transform: translate(4%, -2%) rotate(-3deg) scale(1.01);
          }
          100% {
            transform: translate(0, 0) rotate(0deg) scale(1);
          }
        }
        
        @media (max-width: 700px) {
          .wormxo-circle {
            filter: blur(55px) !important;
          }
        }
      `;
      document.head.appendChild(style);
    },

    render() {
      const root = document.createElement("div");
      root.id = "wormxo-select-root";

      root.innerHTML = `
        <div class="wormxo-bg"></div>
        <div class="wormxo-overlay"></div>

        <div class="wormxo-card">
          <img class="wormxo-logo" src="https://wormxo.store/image/wxo.png" alt="WormXo">

          <div class="wormxo-title">WormXo</div>
          <div class="wormxo-subtitle">SELECT SERVER SYSTEM</div>
          
          <div class="wormxo-glow-text">✨ سمائي • وردي • أخضر • أصفر ✨</div>

          <div class="wormxo-buttons">
            <button type="button" class="wormxo-btn" data-script="wormworld">
              🌍 WORM WORLD
            </button>

            <button type="button" class="wormxo-btn" data-script="timmap">
              🗺️ TIM MAP
            </button>
          </div>
          
          <div class="wormxo-footer">
            <span class="wormxo-dot sky"></span>
            <span class="wormxo-dot pink"></span>
            <span class="wormxo-dot green"></span>
            <span class="wormxo-dot yellow"></span>
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

          // تأثير النقر
          btn.classList.add("loading");
          const originalText = btn.innerHTML;
          btn.innerHTML = "⏳ LOADING...";
          
          // تأثير وميض
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
      
      setTimeout(() => {
        ripple.remove();
      }, 600);
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
          background: #000;
          font-family: 'Segoe UI', 'Poppins', Arial, Helvetica, sans-serif;
        }

        .wormxo-bg {
          position: absolute;
          inset: -18px;
          background:
            linear-gradient(rgba(0,0,0,.50), rgba(0,0,0,.70)),
            url("https://i.imgur.com/oXntzBc.jpeg") center center / cover no-repeat;
          filter: blur(6px);
          transform: scale(1.04);
        }

        .wormxo-overlay {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at center, rgba(255,132,0,.15), transparent 50%),
            linear-gradient(135deg, rgba(135,206,250,.1), rgba(255,105,180,.1), rgba(50,205,50,.1), rgba(255,215,0,.1));
          backdrop-filter: blur(2px);
        }

        .wormxo-card {
          position: relative;
          z-index: 10;
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
          text-shadow:
            0 0 10px rgba(255,132,0,.8),
            0 4px 18px rgba(0,0,0,.85);
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
        
        .wormxo-glow-text {
          color: rgba(255,255,255,0.7);
          font-size: 12px;
          letter-spacing: 2px;
          margin-bottom: 28px;
          font-weight: 500;
          text-shadow: 0 0 10px rgba(255,132,0,0.5);
          background: linear-gradient(90deg, #87CEFA, #FF69B4, #32CD32, #FFD700);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
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
          box-shadow:
            0 10px 24px rgba(0,0,0,.45),
            inset 0 1px 0 rgba(255,255,255,.45);
          transition:
            transform .18s ease,
            background .18s ease,
            color .18s ease,
            box-shadow .18s ease;
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
          box-shadow:
            0 14px 30px rgba(255,132,0,.42),
            0 0 20px rgba(255,255,255,.30);
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
          gap: 12px;
          justify-content: center;
        }
        
        .wormxo-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          animation: pulseDot 1.5s infinite ease-in-out;
        }
        
        .wormxo-dot.sky {
          background: #87CEFA;
          box-shadow: 0 0 10px #87CEFA;
          animation-delay: 0s;
        }
        
        .wormxo-dot.pink {
          background: #FF69B4;
          box-shadow: 0 0 10px #FF69B4;
          animation-delay: 0.2s;
        }
        
        .wormxo-dot.green {
          background: #32CD32;
          box-shadow: 0 0 10px #32CD32;
          animation-delay: 0.4s;
        }
        
        .wormxo-dot.yellow {
          background: #FFD700;
          box-shadow: 0 0 10px #FFD700;
          animation-delay: 0.6s;
        }
        
        @keyframes pulseDot {
          0%, 100% {
            transform: scale(1);
            opacity: 0.6;
          }
          50% {
            transform: scale(1.5);
            opacity: 1;
          }
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