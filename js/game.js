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

    render() {
      const root = document.createElement("div");
      root.id = "wormxo-select-root";

      root.innerHTML = `
        <div class="wormxo-bg"></div>
        <div class="wormxo-overlay"></div>

        <div class="wormxo-card">
          <img class="wormxo-logo" src="https://i.imgur.com/jXzoG5D.png" alt="WormXo">

          <div class="wormxo-title">WormXo</div>
          <div class="wormxo-subtitle">SELECT SERVER SYSTEM</div>

          <div class="wormxo-buttons">
            <button type="button" class="wormxo-btn" data-script="wormworld">
              WORM WORLD
            </button>

            <button type="button" class="wormxo-btn" data-script="timmap">
              TIM MAP
            </button>
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

          btn.classList.add("loading");
          btn.innerHTML = "LOADING...";
          this.selectScript(url);
        });
      });
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
          font-family: Arial, Helvetica, sans-serif;
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
            radial-gradient(circle at center, rgba(255,132,0,.22), transparent 42%),
            linear-gradient(135deg, rgba(255,132,0,.35), rgba(255,255,255,.04), rgba(0,0,0,.75));
        }

        .wormxo-card {
          position: relative;
          z-index: 5;
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
          margin-bottom: 28px;
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
          box-shadow:
            0 10px 24px rgba(0,0,0,.45),
            inset 0 1px 0 rgba(255,255,255,.45);
          transition:
            transform .18s ease,
            background .18s ease,
            color .18s ease,
            box-shadow .18s ease;
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