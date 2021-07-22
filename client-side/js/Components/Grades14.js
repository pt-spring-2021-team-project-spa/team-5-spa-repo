import spaceButtonLogic from "../space_invader_game/spaceButtonLogic";
import starField from "../space_invader_game/starField";
import spaceLogic from "../space_invader_game/spaceInvaderLogic";

export default function Grades14() {
  return `
    <html>
    <head>
    <title>Space Invaders</title>
    <link
      rel="stylesheet"
      type="css"
      href="client-side/css/spaceinvaderStyle.css"
    />
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

    <script type='module' src="client-side/js/space_invader_game/starField.js"></script>
    <script type='module' src="client-side/js/space_invader_game/spaceButtonLogic.js"></script>
    <script type='module' src="client-side/js/space_invader_game/spaceInvaderLogic.js"></script>
  </body>
    </html>
    
    `;
}
