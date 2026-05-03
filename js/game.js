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
      this.injectBackgroundStyles();
      this.createAnimatedBackground();
      this.createTridentLogos();
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

    createAnimatedBackground() {
      const bg = document.createElement("div");
      bg.id = "wormxo-bg-container";

      const colors = [
        {
          name: "blue",
          color1: "rgba(0, 155, 255, .72)",
          color2: "rgba(0, 65, 145, .45)",
          size: "72vw",
          top: "-18%",
          left: "-18%",
          duration: 44,
          delay: 0
        },
        {
          name: "yellow",
          color1: "rgba(255, 220, 0, .70)",
          color2: "rgba(145, 120, 0, .55)",
          size: "78vw",
          top: "-14%",
          right: "-22%",
          duration: 52,
          delay: -7
        },
        {
          name: "red",
          color1: "rgba(255, 0, 42, .62)",
          color2: "rgba(135, 0, 20, .44)",
          size: "76vw",
          bottom: "-24%",
          right: "-18%",
          duration: 48,
          delay: -4
        },
        {
          name: "deep",
          color1: "rgba(0, 215, 255, .28)",
          color2: "rgba(255, 30, 0, .18)",
          size: "65vw",
          bottom: "-18%",
          left: "-16%",
          duration: 58,
          delay: -12
        }
      ];

      colors.forEach((c) => {
        const orb = document.createElement("div");
        orb.className = `wormxo-bg-orb wormxo-bg-${c.name}`;

        let pos = "";
        if (c.top) pos += `top:${c.top};`;
        if (c.bottom) pos += `bottom:${c.bottom};`;
        if (c.left) pos += `left:${c.left};`;
        if (c.right) pos += `right:${c.right};`;

        orb.style.cssText = `
          width:${c.size};
          height:${c.size};
          ${pos}
          background:radial-gradient(circle at 35% 35%, ${c.color1}, ${c.color2}, transparent 68%);
          animation:wormxoBgMove ${c.duration}s ease-in-out infinite;
          animation-delay:${c.delay}s;
        `;

        bg.appendChild(orb);
      });

      document.body.appendChild(bg);

      document.addEventListener("mousemove", (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 14;
        const y = (e.clientY / window.innerHeight - 0.5) * 10;
        bg.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      });

      document.addEventListener("mouseleave", () => {
        bg.style.transform = "translate3d(0,0,0)";
      });
    },

    createTridentLogos() {
      const wrap = document.createElement("div");
      wrap.id = "wormxo-trident-container";

      const svg = encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 150">
          <path d="M60 8
                   C70 32 72 58 67 84
                   C76 66 88 48 104 34
                   C99 62 98 88 105 116
                   L78 116
                   C75 102 70 92 60 82
                   C50 92 45 102 42 116
                   L15 116
                   C22 88 21 62 16 34
                   C32 48 44 66 53 84
                   C48 58 50 32 60 8 Z
                   M60 82
                   C69 101 75 120 60 142
                   C45 120 51 101 60 82 Z"
                fill="none"
                stroke="white"
                stroke-width="8"
                stroke-linecap="round"
                stroke-linejoin="round"/>
        </svg>
      `);

      const logos = [
        { x: 50, y: 78, s: 92, c: "rgba(255,0,35,.92)", d: 30, r: 0, delay: -4 },
        { x: 18, y: 38, s: 70, c: "rgba(0,160,255,.78)", d: 42, r: -18, delay: -10 },
        { x: 76, y: 24, s: 64, c: "rgba(255,210,0,.86)", d: 38, r: 22, delay: -16 },
        { x: 86, y: 68, s: 74, c: "rgba(255,70,0,.70)", d: 45, r: -10, delay: -21 },
        { x: 34, y: 12, s: 58, c: "rgba(255,0,45,.45)", d: 50, r: 18, delay: -26 },
        { x: 62, y: 42, s: 52, c: "rgba(255,255,255,.28)", d: 36, r: 8, delay: -8 }
      ];

      logos.forEach((cfg, i) => {
        const logo = document.createElement("div");
        logo.className = "wormxo-trident";
        logo.style.cssText = `
          left:${cfg.x}vw;
          top:${cfg.y}vh;
          width:${cfg.s}px;
          height:${cfg.s * 1.25}px;
          background-color:${cfg.c};
          mask:url("data:image/svg+xml,${svg}") center / contain no-repeat;
          -webkit-mask:url("data:image/svg+xml,${svg}") center / contain no-repeat;
          filter:drop-shadow(0 0 8px ${cfg.c}) drop-shadow(0 0 18px ${cfg.c});
          transform:rotate(${cfg.r}deg);
          animation:wormxoTridentFloat${i} ${cfg.d}s ease-in-out infinite;
          animation-delay:${cfg.delay}s;
        `;

        wrap.appendChild(logo);

        const key = document.createElement("style");
        key.textContent = `
          @keyframes wormxoTridentFloat${i} {
            0%,100% {
              transform:translate3d(0,0,0) rotate(${cfg.r}deg) scale(1);
              opacity:.38;
            }
            25% {
              transform:translate3d(${18 + i * 3}px, ${-20 - i * 2}px, 0) rotate(${cfg.r + 12}deg) scale(1.08);
              opacity:.72;
            }
            50% {
              transform:translate3d(${-16 - i * 2}px, ${12 + i * 2}px, 0) rotate(${cfg.r - 9}deg) scale(.92);
              opacity:.48;
            }
            75% {
              transform:translate3d(${10 + i}px, ${22 + i}px, 0) rotate(${cfg.r + 6}deg) scale(1.03);
              opacity:.66;
            }
          }
        `;
        document.head.appendChild(key);
      });

      document.body.appendChild(wrap);
    },

    injectBackgroundStyles() {
      const style = document.createElement("style");
      style.textContent = `
        #wormxo-bg-container {
          position:fixed;
          inset:0;
          width:100%;
          height:100%;
          z-index:1;
          overflow:hidden;
          pointer-events:none;
          background:
            radial-gradient(circle at 20% 35%, rgba(0,130,255,.36), transparent 42%),
            radial-gradient(circle at 84% 58%, rgba(255,0,25,.28), transparent 48%),
            radial-gradient(circle at 62% 16%, rgba(255,210,0,.32), transparent 45%),
            linear-gradient(135deg, #071727 0%, #102735 42%, #191b10 100%);
          transition:transform .12s ease-out;
        }

        .wormxo-bg-orb {
          position:absolute;
          border-radius:50%;
          filter:blur(85px);
          opacity:.78;
          mix-blend-mode:screen;
          will-change:transform;
        }

        @keyframes wormxoBgMove {
          0%,100% { transform:translate3d(0,0,0) rotate(0deg) scale(1); }
          33% { transform:translate3d(5%, -3%, 0) rotate(8deg) scale(1.08); }
          66% { transform:translate3d(-4%, 5%, 0) rotate(-7deg) scale(.94); }
        }

        #wormxo-trident-container {
          position:fixed;
          inset:0;
          width:100%;
          height:100%;
          z-index:4;
          pointer-events:none;
          overflow:hidden;
        }

        .wormxo-trident {
          position:absolute;
          opacity:.58;
          will-change:transform, opacity;
          pointer-events:none;
        }

        @media (max-width:700px) {
          .wormxo-bg-orb {
            filter:blur(65px);
          }
          .wormxo-trident {
            width:54px !important;
            height:72px !important;
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
              WORM WORLD
            </button>
            <button type="button" class="wormxo-btn" data-script="timmap">
              TIM MAP
            </button>
          </div>

          <div class="wormxo-footer">
            <span class="wormxo-dot blue"></span>
            <span class="wormxo-dot red"></span>
            <span class="wormxo-dot yellow"></span>
            <span class="wormxo-dot white"></span>
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
          btn.innerHTML = "LOADING...";
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
      setTimeout(() => ripple.remove(), 650);
    },

    injectStyle() {
      const style = document.createElement("style");
      style.id = "wormxo-select-style";

      style.textContent = `
        #wormxo-select-root {
          position:fixed;
          inset:0;
          width:100vw;
          height:100vh;
          z-index:2147483647;
          overflow:hidden;
          font-family:'Segoe UI','Poppins',Arial,Helvetica,sans-serif;
        }

        .wormxo-overlay {
          position:absolute;
          inset:0;
          z-index:6;
          pointer-events:none;
          background:
            radial-gradient(circle at center, rgba(0,0,0,.08), rgba(0,0,0,.58)),
            linear-gradient(90deg, rgba(0,0,0,.30), transparent 45%, rgba(0,0,0,.30));
          backdrop-filter:blur(2.5px);
        }

        .wormxo-card {
          position:relative;
          z-index:15;
          min-height:100vh;
          width:100%;
          display:flex;
          flex-direction:column;
          align-items:center;
          justify-content:center;
          box-sizing:border-box;
          padding:22px;
          text-align:center;
        }

        .wormxo-logo {
          width:clamp(145px,22vw,220px);
          height:auto;
          object-fit:contain;
          margin-bottom:24px;
          animation:wormxoFloat 3.8s ease-in-out infinite;
          filter:
            drop-shadow(0 0 16px rgba(0,160,255,.75))
            drop-shadow(0 0 24px rgba(255,210,0,.40))
            drop-shadow(0 0 18px rgba(255,0,35,.45));
        }

        .wormxo-title {
          color:#fff;
          font-size:clamp(34px,6vw,64px);
          font-weight:900;
          letter-spacing:1px;
          text-shadow:
            0 0 8px rgba(0,160,255,.85),
            0 0 14px rgba(255,210,0,.45),
            0 0 20px rgba(255,0,35,.42),
            0 5px 20px rgba(0,0,0,.9);
        }

        .wormxo-subtitle {
          margin-top:8px;
          margin-bottom:18px;
          color:#ffffff;
          font-size:clamp(13px,2.5vw,18px);
          font-weight:800;
          letter-spacing:2px;
          text-shadow:
            0 0 8px rgba(0,160,255,.75),
            0 0 12px rgba(255,210,0,.55),
            0 2px 10px rgba(0,0,0,.95);
        }

        .wormxo-buttons {
          width:min(92vw,420px);
          display:grid;
          grid-template-columns:1fr;
          gap:14px;
        }

        .wormxo-btn {
          width:100%;
          height:clamp(48px,8vh,62px);
          border:2px solid rgba(255,255,255,.92);
          border-radius:14px;
          background:
            linear-gradient(135deg, rgba(0,150,255,.88), rgba(255,210,0,.78) 54%, rgba(255,0,35,.82));
          color:#fff;
          font-size:clamp(16px,3vw,21px);
          font-weight:900;
          letter-spacing:.8px;
          cursor:pointer;
          box-shadow:
            0 12px 28px rgba(0,0,0,.48),
            0 0 18px rgba(0,160,255,.28),
            0 0 22px rgba(255,210,0,.20),
            inset 0 1px 0 rgba(255,255,255,.45);
          transition:transform .18s ease, background .18s ease, color .18s ease, box-shadow .18s ease;
          position:relative;
          overflow:hidden;
        }

        .wormxo-btn::before {
          content:'';
          position:absolute;
          top:50%;
          left:50%;
          width:0;
          height:0;
          border-radius:50%;
          background:rgba(255,255,255,.38);
          transform:translate(-50%,-50%);
          transition:width .5s,height .5s;
        }

        .wormxo-btn:hover::before {
          width:320px;
          height:320px;
        }

        .wormxo-btn:hover {
          transform:translateY(-3px) scale(1.02);
          background:#fff;
          color:#111;
          box-shadow:
            0 14px 32px rgba(0,0,0,.52),
            0 0 24px rgba(0,160,255,.42),
            0 0 28px rgba(255,210,0,.36),
            0 0 24px rgba(255,0,35,.30);
        }

        .wormxo-btn:active {
          transform:scale(.98);
        }

        .wormxo-btn.loading {
          pointer-events:none;
          opacity:.78;
          background:#fff;
          color:#111;
        }

        .wormxo-footer {
          margin-top:35px;
          display:flex;
          gap:15px;
          justify-content:center;
        }

        .wormxo-dot {
          width:10px;
          height:10px;
          border-radius:50%;
          background:#fff;
          animation:pulseDot 1.8s infinite;
        }

        .wormxo-dot.blue {
          background:#009dff;
          box-shadow:0 0 8px #009dff;
        }

        .wormxo-dot.red {
          background:#ff002b;
          box-shadow:0 0 8px #ff002b;
          animation-delay:.2s;
        }

        .wormxo-dot.yellow {
          background:#ffd600;
          box-shadow:0 0 8px #ffd600;
          animation-delay:.4s;
        }

        .wormxo-dot.white {
          background:#fff;
          box-shadow:0 0 8px #fff;
          animation-delay:.6s;
        }

        @keyframes pulseDot {
          0%,100% { opacity:.48; transform:scale(1); }
          50% { opacity:1; transform:scale(1.55); }
        }

        .wormxo-ripple {
          position:fixed;
          width:10px;
          height:10px;
          border-radius:50%;
          background:radial-gradient(circle, rgba(255,255,255,.9), rgba(0,155,255,.35), rgba(255,0,35,0));
          transform:translate(-50%,-50%);
          animation:rippleAnim .65s ease-out forwards;
          pointer-events:none;
          z-index:2147483647;
        }

        @keyframes rippleAnim {
          0% { width:0; height:0; opacity:.8; }
          100% { width:230px; height:230px; opacity:0; }
        }

        @keyframes wormxoFloat {
          0%,100% { transform:translateY(0) scale(1); }
          50% { transform:translateY(-12px) scale(1.06); }
        }

        @media (min-width:640px) {
          .wormxo-buttons {
            grid-template-columns:1fr 1fr;
            width:min(92vw,620px);
          }
        }

        @media (max-width:420px) {
          .wormxo-card { padding:16px; }
          .wormxo-logo { margin-bottom:18px; }
          .wormxo-subtitle { margin-bottom:22px; }
        }
      `;

      document.head.appendChild(style);
    }
  };

  WormXoSelector.init();
})();