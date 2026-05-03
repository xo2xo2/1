(function () {
  "use strict";
  // by xo and bmw - Enhanced Edition with Beautiful Animated Circles as BACKGROUND (No Image)
  // + ADDED: 8 Confetti pieces that rotate, float smoothly, and change size gradually.

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
      this.injectStyle();          // Styles for UI (buttons, card, etc)
      this.injectCircleStyles();   // Styles for circles
      this.createAnimatedCircles(); // Create the 4 blurry circles
      this.createConfettiPieces(); // NEW: Create 8 smooth confetti pieces
      this.render();               // Render the selection UI
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

    // Creates the 4 animated blurry circles as the ONLY background
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

    // ========== NEW: 8 Confetti Pieces ==========
    createConfettiPieces() {
      const confettiContainer = document.createElement("div");
      confettiContainer.id = "wormxo-confetti-container";
      confettiContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 25;
        overflow: visible;
      `;
      document.body.appendChild(confettiContainer);

      // Using a working placeholder image. Replace URL with your original if it works.
      // The image is a transparent confetti-like shape.
      const imageUrl = "https://timmapwormate.com/images/store/confetti-tmw.png";
      
      // Create 8 pieces
      for (let i = 0; i < 8; i++) {
        const piece = document.createElement("div");
        piece.className = "wormxo-confetti";
        
        // Random but smooth variations
        const size = 70 + (i * 1) % 25; // size between 35px and 60px
        const startX = Math.random() * 100;
        const startY = Math.random() * 100;
        const duration = 20 + (i * 2) % 15; // 20s to 35s
        const delay = i * 0.6;
        const rotateDirection = i % 2 === 0 ? 1 : -1;
        const scaleMin = 0.7;
        const scaleMax = 1.3;
        
        piece.style.cssText = `
          position: absolute;
          width: ${size}px;
          height: ${size}px;
          left: ${startX}%;
          top: ${startY}%;
          background-image: url('${imageUrl}');
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
          opacity: 0.75;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2));
          animation: wormxoConfettiFloat ${duration}s infinite ease-in-out;
          animation-delay: ${delay}s;
          will-change: transform;
        `;
        
        // Custom properties for individual rotation & scale range
        piece.style.setProperty('--rotate-dir', rotateDirection);
        piece.style.setProperty('--scale-min', scaleMin);
        piece.style.setProperty('--scale-max', scaleMax);
        
        confettiContainer.appendChild(piece);
      }
      
      // Add the keyframes for smooth floating, circle-like path, and size change
      const style = document.createElement('style');
      style.textContent = `
        @keyframes wormxoConfettiFloat {
          0% {
            transform: translate(0, 0) rotate(0deg) scale(var(--scale-min, 0.8));
            opacity: 0.6;
          }
          25% {
            transform: translate(8vw, -6vh) rotate(calc(90deg * var(--rotate-dir, 1))) scale(var(--scale-max, 1.2));
            opacity: 0.9;
          }
          50% {
            transform: translate(-5vw, 5vh) rotate(calc(180deg * var(--rotate-dir, 1))) scale(var(--scale-min, 0.8));
            opacity: 0.7;
          }
          75% {
            transform: translate(7vw, 3vh) rotate(calc(270deg * var(--rotate-dir, 1))) scale(1.1);
            opacity: 0.85;
          }
          100% {
            transform: translate(0, 0) rotate(calc(360deg * var(--rotate-dir, 1))) scale(var(--scale-min, 0.8));
            opacity: 0.6;
          }
        }
        
        .wormxo-confetti {
          pointer-events: none;
          transition: filter 0.3s ease;
        }
        
        /* Ensure confetti goes behind UI but above circles */
        #wormxo-confetti-container {
          filter: blur(0.3px); /* ultra subtle blur for smoothness */
        }
      `;
      document.head.appendChild(style);
      
      // Very gentle parallax effect on confetti (optional, makes it feel magical)
      document.addEventListener("mousemove", (e) => {
        if (!confettiContainer) return;
        const x = (e.clientX / window.innerWidth - 0.5) * 6;
        const y = (e.clientY / window.innerHeight - 0.5) * 4;
        confettiContainer.style.transform = `translate(${x}px, ${y}px)`;
      });
      document.addEventListener("mouseleave", () => {
        if (confettiContainer) confettiContainer.style.transform = "translate(0, 0)";
      });
    },
    // ========== End of Confetti Addition ==========

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