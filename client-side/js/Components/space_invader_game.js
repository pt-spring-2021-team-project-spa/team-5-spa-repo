export default class dsi{
    <html>
  <head>
    <title>Space Invaders</title>
    <link rel="stylesheet" type="text/css" href="css/spaceinvaderStyle.css" />
  </head>
  <body>
    <div id="starfield"></div>
    <div id="gamecontainer">
      <canvas id="gameCanvas"></canvas>
    </div>
    <div id="info">
      <p>
        Move with arrow keys or swipe, fire with the space bar or touch. The
        invaders get faster and drop more bombs as you complete each level!
      </p>
    </div>

    <script src="js/starfield.js"></script>
    <script src="js/spaceinvaders.js"></script>
    <script>
      var container = document.getElementById("starfield");
      var starfield = new Starfield();
      starfield.initialise(container);
      starfield.start();

      var canvas = document.getElementById("gameCanvas");
      canvas.width = 800;
      canvas.height = 600;

      var game = new Game();

      game.initialise(canvas);

      game.start();

      window.addEventListener("keydown", function keydown(e) {
        var keycode = e.which || window.event.keycode;

        if (keycode == 37 || keycode == 39 || keycode == 32) {
          e.preventDefault();
        }
        game.keyDown(keycode);
      });
      window.addEventListener("keyup", function keydown(e) {
        var keycode = e.which || window.event.keycode;
        game.keyUp(keycode);
      });

      window.addEventListener(
        "touchstart",
        function (e) {
          game.touchstart(e);
        },
        false
      );

      window.addEventListener(
        "touchend",
        function (e) {
          game.touchend(e);
        },
        false
      );

      window.addEventListener(
        "touchmove",
        function (e) {
          game.touchmove(e);
        },
        false
      );

      function toggleMute() {
        game.mute();
        document.getElementById("muteLink").innerText = game.sounds.mute
          ? "unmute"
          : "mute";
      }
    </script>
    <script type="text/javascript">
      var _gaq = _gaq || [];
      _gaq.push(["_setAccount", "UA-41728580-1"]);
      _gaq.push(["_trackPageview"]);

      (function () {
        var ga = document.createElement("script");
        ga.type = "text/javascript";
        ga.async = true;
        ga.src =
          ("https:" == document.location.protocol
            ? "https://ssl"
            : "http://www") + ".google-analytics.com/ga.js";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(ga, s);
      })();
    </script>
  </body>
</html>
    
}