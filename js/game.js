(function () {
  var scriptSeleccionado = localStorage.getItem('scriptSeleccionado');
  var popupShown = localStorage.getItem('popupShown');

  if (!scriptSeleccionado) {
    document.documentElement.style.overflow = 'hidden';
    document.body.innerHTML = '';

    var bg = document.createElement('div');
    bg.style.position = 'fixed';
    bg.style.top = '0';
    bg.style.left = '0';
    bg.style.width = '100vw';
    bg.style.height = '100vh';
    bg.style.zIndex = '-1000';
    bg.style.background = "#111";
    document.body.appendChild(bg);

    function cargarScript(url) {
      localStorage.setItem('scriptSeleccionado', url);
      location.reload();
    }

    function crearMenu() {
      var container = document.createElement('div');
      container.id = 'container';
      container.innerHTML = `
        <style>
          body {
            font-family: Arial, sans-serif;
            background: #111;
          }
          #container {
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:center;
            height:100vh;
            text-align:center;
            color:#fff;
          }
          #menu {
            display:flex;
            gap:20px;
          }
          .menu-button {
            background:#ff7a00;
            border:2px solid #fff;
            padding:15px 40px;
            border-radius:10px;
            color:#fff;
            font-size:18px;
            font-weight:bold;
            cursor:pointer;
            transition:0.3s;
          }
          .menu-button:hover {
            background:#fff;
            color:#ff7a00;
            box-shadow:0 0 15px #ff7a00;
          }
          #popup {
            position:fixed;
            top:0;
            left:0;
            width:100%;
            height:100%;
            background:rgba(0,0,0,0.8);
            display:flex;
            justify-content:center;
            align-items:center;
            z-index:1000;
          }
          #popupContent {
            background:#111;
            border:2px solid #ff7a00;
            padding:40px;
            border-radius:15px;
            text-align:center;
          }
          #closePopup {
            padding:10px 30px;
            border:none;
            border-radius:20px;
            background:#ff7a00;
            color:#fff;
            font-weight:bold;
            cursor:pointer;
          }
        </style>

        <div id="menu">
          <button class="menu-button" id="opcion1">WormWorld</button>
          <button class="menu-button" id="opcion2">TimMap</button>
        </div>
      `;
      document.body.appendChild(container);

      document.getElementById('opcion1').addEventListener('click', function () {
        cargarScript('https://wormxo.store/js/wormworld.js');
      });

      document.getElementById('opcion2').addEventListener('click', function () {
        cargarScript('https://your-domain.com/timmap.js');
      });
    }

    crearMenu();

  } else {
    var script = document.createElement('script');
    script.src = scriptSeleccionado;
    document.head.appendChild(script);

    if (!popupShown) {
      document.documentElement.style.overflow = 'hidden';

      var popup = document.createElement('div');
      popup.id = 'popup';
      popup.innerHTML = `
        <div id="popupContent">
          <button id="closePopup">OK</button>
        </div>
      `;
      document.body.appendChild(popup);

      document.getElementById('closePopup').addEventListener('click', function () {
        document.getElementById('popup').style.display = 'none';
        document.documentElement.style.overflow = '';
        localStorage.setItem('popupShown', 'true');
      });
    }
  }
})();