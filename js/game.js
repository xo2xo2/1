(function () {
  "use strict";

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
      this.injectSnow();
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

    // ❄️ Snow circular around buttons
    injectSnow() {
      const container = document.createElement("div");
      container.id = "wormxo-snow";
      document.body.appendChild(container);

      const img = "https://wormate.io/images/confetti-xmas2023.png";

      for (let i = 0; i < 18; i++) {
        const snow = document.createElement("div");
        snow.className = "wormxo-snow-piece";

        const size = 28 + Math.random() * 22;
        const angle = (i / 18) * 360;
        const radius = 140 + Math.random() * 40;
        const speed = 18 + Math.random() * 10;

        snow.style.cssText = `
          width:${size}px;
          height:${size}px;
          background:url(${img}) no-repeat center/contain;
          --angle:${angle}deg;
          --radius:${radius}px;
          animation: snowOrbit ${speed}s linear infinite;
          animation-delay:${i * 0.3}s;
        `;

        container.appendChild(snow);
      }

      const style = document.createElement("style");
      style.textContent = `
        #wormxo-snow{
          position:fixed;
          inset:0;
          pointer-events:none;
          z-index:20;
          display:flex;
          align-items:center;
          justify-content:center;
        }

        .wormxo-snow-piece{
          position:absolute;
          top:50%;
          left:50%;
          transform-origin:center;
          opacity:.9;
          filter:drop-shadow(0 0 6px rgba(255,255,255,.6));
        }

        @keyframes snowOrbit{
          0%{
            transform: rotate(var(--angle)) translateX(var(--radius)) rotate(0deg) scale(.8);
          }
          50%{
            transform: rotate(calc(var(--angle) + 180deg)) translateX(var(--radius)) rotate(-180deg) scale(1.2);
          }
          100%{
            transform: rotate(calc(var(--angle) + 360deg)) translateX(var(--radius)) rotate(-360deg) scale(.8);
          }
        }
      `;
      document.head.appendChild(style);
    },

    render() {
      const root = document.createElement("div");
      root.id = "wormxo-select-root";

      root.innerHTML = `
        <div class="wormxo-card">
          <div class="wormxo-title">WormXo</div>

          <div class="wormxo-buttons">
            <button class="wormxo-btn" data-script="wormworld">WORM WORLD</button>
            <button class="wormxo-btn" data-script="timmap">TIM MAP</button>
          </div>
        </div>
      `;

      document.body.appendChild(root);
    },

    bindEvents() {
      document.querySelectorAll(".wormxo-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
          const key = btn.getAttribute("data-script");
          const url = this.scripts[key];
          if (!url) return;

          btn.innerHTML = "LOADING...";
          this.selectScript(url);
        });
      });
    },

    injectStyle() {
      const style = document.createElement("style");
      style.textContent = `
        body{
          margin:0;
          background:#0a0a1a;
          font-family:Arial;
        }

        .wormxo-card{
          position:absolute;
          top:50%;
          left:50%;
          transform:translate(-50%,-50%);
          text-align:center;
          z-index:30;
        }

        .wormxo-title{
          color:#fff;
          font-size:48px;
          font-weight:900;
          margin-bottom:30px;
        }

        .wormxo-buttons{
          display:grid;
          gap:14px;
          width:260px;
        }

        .wormxo-btn{
          height:56px;
          border:none;
          border-radius:12px;
          background:linear-gradient(135deg,#ff7a00,#ffb347);
          color:#fff;
          font-size:18px;
          font-weight:900;
          cursor:pointer;
          box-shadow:0 10px 25px rgba(0,0,0,.5);
          transition:.2s;
        }

        .wormxo-btn:hover{
          transform:scale(1.05);
          background:#fff;
          color:#ff7a00;
        }
      `;
      document.head.appendChild(style);
    }
  };

  WormXoSelector.init();
})();