var KEY_LEFT = 37;
var KEY_RIGHT = 39;
var KEY_SPACE = 32;

function Game() {
  this.config = {
    bombRate: 0.05,
    bombMinVelocity: 50,
    bombMaxVelocity: 50,
    invaderInitialVelocity: 25,
    invaderAcceleration: 0,
    invaderDropDistance: 20,
    rocketVelocity: 120,
    rocketMaxFireRate: 2,
    gameWidth: 400,
    gameHeight: 300,
    fps: 50,
    debugMode: false,
    invaderRanks: 5,
    invaderFiles: 10,
    shipSpeed: 120,
    levelDifficultyMultiplier: 0.2,
    pointsPerInvader: 5,
    limitLevelIncrease: 25,
  };

  this.lives = 3;
  this.width = 0;
  this.height = 0;
  this.gameBounds = { left: 0, top: 0, right: 0, bottom: 0 };
  this.intervalId = 0;
  this.score = 0;
  this.level = 1;

  this.stateStack = [];

  this.pressedKeys = {};
  this.gameCanvas = null;

  this.previousX = 0;
}

Game.prototype.initialise = function (gameCanvas) {
  this.gameCanvas = gameCanvas;

  this.width = gameCanvas.width;
  this.height = gameCanvas.height;

  this.gameBounds = {
    left: gameCanvas.width / 2 - this.config.gameWidth / 2,
    right: gameCanvas.width / 2 + this.config.gameWidth / 2,
    top: gameCanvas.height / 2 - this.config.gameHeight / 2,
    bottom: gameCanvas.height / 2 + this.config.gameHeight / 2,
  };
};

Game.prototype.moveToState = function (state) {
  if (this.currentState() && this.currentState().leave) {
    this.currentState().leave(game);
    this.stateStack.pop();
  }

  if (state.enter) {
    state.enter(game);
  }

  this.stateStack.pop();
  this.stateStack.push(state);
};

Game.prototype.start = function () {
  this.moveToState(new WelcomeState());

  this.lives = 3;
  this.config.debugMode = /debug=true/.test(window.location.href);

  var game = this;
  this.intervalId = setInterval(function () {
    GameLoop(game);
  }, 1000 / this.config.fps);
};

Game.prototype.currentState = function () {
  return this.stateStack.length > 0
    ? this.stateStack[this.stateStack.length - 1]
    : null;
};

function GameLoop(game) {
  var currentState = game.currentState();
  if (currentState) {
    var dt = 1 / game.config.fps;

    var ctx = this.gameCanvas.getContext("2d");

    if (currentState.update) {
      currentState.update(game, dt);
    }
    if (currentState.draw) {
      currentState.draw(game, dt, ctx);
    }
  }
}

Game.prototype.pushState = function (state) {
  if (state.enter) {
    state.enter(game);
  }

  this.stateStack.push(state);
};

Game.prototype.popState = function () {
  if (this.currentState()) {
    if (this.currentState().leave) {
      this.currentState().leave(game);
    }

    this.stateStack.pop();
  }
};

Game.prototype.stop = function Stop() {
  clearInterval(this.intervalId);
};

Game.prototype.keyDown = function (keyCode) {
  this.pressedKeys[keyCode] = true;

  if (this.currentState() && this.currentState().keyDown) {
    this.currentState().keyDown(this, keyCode);
  }
};

Game.prototype.touchstart = function (s) {
  if (this.currentState() && this.currentState().keyDown) {
    this.currentState().keyDown(this, KEY_SPACE);
  }
};

Game.prototype.touchend = function (s) {
  delete this.pressedKeys[KEY_RIGHT];
  delete this.pressedKeys[KEY_LEFT];
};

Game.prototype.touchmove = function (e) {
  var currentX = e.changedTouches[0].pageX;
  if (this.previousX > 0) {
    if (currentX > this.previousX) {
      delete this.pressedKeys[KEY_LEFT];
      this.pressedKeys[KEY_RIGHT] = true;
    } else {
      delete this.pressedKeys[KEY_RIGHT];
      this.pressedKeys[KEY_LEFT] = true;
    }
  }
  this.previousX = currentX;
};

Game.prototype.keyUp = function (keyCode) {
  delete this.pressedKeys[keyCode];

  if (this.currentState() && this.currentState().keyUp) {
    this.currentState().keyUp(this, keyCode);
  }
};

function WelcomeState() {}

WelcomeState.prototype.update = function (game, dt) {};

WelcomeState.prototype.draw = function (game, dt, ctx) {
  ctx.clearRect(0, 0, game.width, game.height);

  ctx.font = "30px Arial";
  ctx.fillStyle = "#ffffff";
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";
  ctx.fillText("Space Invaders", game.width / 2, game.height / 2 - 40);
  ctx.font = "16px Arial";

  ctx.fillText(
    "Press 'Space' or touch to start.",
    game.width / 2,
    game.height / 2
  );
};

WelcomeState.prototype.keyDown = function (game, keyCode) {
  if (keyCode == KEY_SPACE) {
    game.level = 1;
    game.score = 0;
    game.lives = 3;
    game.moveToState(new LevelIntroState(game.level));
  }
};

function GameOverState() {}

GameOverState.prototype.update = function (game, dt) {};

GameOverState.prototype.draw = function (game, dt, ctx) {
  ctx.clearRect(0, 0, game.width, game.height);

  ctx.font = "30px Arial";
  ctx.fillStyle = "#ffffff";
  ctx.textBaseline = "center";
  ctx.textAlign = "center";
  ctx.fillText("Game Over!", game.width / 2, game.height / 2 - 40);
  ctx.font = "16px Arial";
  ctx.fillText(
    "You scored " + game.score + " and got to level " + game.level,
    game.width / 2,
    game.height / 2
  );
  ctx.font = "16px Arial";
  ctx.fillText(
    "Press 'Space' to play again.",
    game.width / 2,
    game.height / 2 + 40
  );
};

GameOverState.prototype.keyDown = function (game, keyCode) {
  if (keyCode == KEY_SPACE) {
    game.lives = 3;
    game.score = 0;
    game.level = 1;
    game.moveToState(new LevelIntroState(1));
  }
};

function PlayState(config, level) {
  this.config = config;
  this.level = level;

  this.invaderCurrentVelocity = 10;
  this.invaderCurrentDropDistance = 0;
  this.invadersAreDropping = false;
  this.lastRocketTime = null;

  this.ship = null;
  this.invaders = [];
  this.rockets = [];
  this.bombs = [];
}

PlayState.prototype.enter = function (game) {
  this.ship = new Ship(game.width / 2, game.gameBounds.bottom);

  this.invaderCurrentVelocity = 10;
  this.invaderCurrentDropDistance = 0;
  this.invadersAreDropping = false;

  var levelMultiplier = this.level * this.config.levelDifficultyMultiplier;
  var limitLevel =
    this.level < this.config.limitLevelIncrease
      ? this.level
      : this.config.limitLevelIncrease;
  this.shipSpeed = this.config.shipSpeed;
  this.invaderInitialVelocity =
    this.config.invaderInitialVelocity +
    1.5 * (levelMultiplier * this.config.invaderInitialVelocity);
  this.bombRate = this.config.bombRate + levelMultiplier * this.config.bombRate;
  this.bombMinVelocity =
    this.config.bombMinVelocity + levelMultiplier * this.config.bombMinVelocity;
  this.bombMaxVelocity =
    this.config.bombMaxVelocity + levelMultiplier * this.config.bombMaxVelocity;
  this.rocketMaxFireRate = this.config.rocketMaxFireRate + 0.4 * limitLevel;

  var ranks = this.config.invaderRanks + 0.1 * limitLevel;
  var files = this.config.invaderFiles + 0.2 * limitLevel;
  var invaders = [];
  for (var rank = 0; rank < ranks; rank++) {
    for (var file = 0; file < files; file++) {
      invaders.push(
        new Invader(
          game.width / 2 + ((files / 2 - file) * 200) / files,
          game.gameBounds.top + rank * 20,
          rank,
          file,
          "Invader"
        )
      );
    }
  }
  this.invaders = invaders;
  this.invaderCurrentVelocity = this.invaderInitialVelocity;
  this.invaderVelocity = { x: -this.invaderInitialVelocity, y: 0 };
  this.invaderNextVelocity = null;
};

PlayState.prototype.update = function (game, dt) {
  if (game.pressedKeys[KEY_LEFT]) {
    this.ship.x -= this.shipSpeed * dt;
  }
  if (game.pressedKeys[KEY_RIGHT]) {
    this.ship.x += this.shipSpeed * dt;
  }
  if (game.pressedKeys[KEY_SPACE]) {
    this.fireRocket();
  }

  if (this.ship.x < game.gameBounds.left) {
    this.ship.x = game.gameBounds.left;
  }
  if (this.ship.x > game.gameBounds.right) {
    this.ship.x = game.gameBounds.right;
  }

  for (var i = 0; i < this.bombs.length; i++) {
    var bomb = this.bombs[i];
    bomb.y += dt * bomb.velocity;

    if (bomb.y > this.height) {
      this.bombs.splice(i--, 1);
    }
  }

  for (i = 0; i < this.rockets.length; i++) {
    var rocket = this.rockets[i];
    rocket.y -= dt * rocket.velocity;

    if (rocket.y < 0) {
      this.rockets.splice(i--, 1);
    }
  }

  var hitLeft = false,
    hitRight = false,
    hitBottom = false;
  for (i = 0; i < this.invaders.length; i++) {
    var invader = this.invaders[i];
    var newx = invader.x + this.invaderVelocity.x * dt;
    var newy = invader.y + this.invaderVelocity.y * dt;
    if (hitLeft == false && newx < game.gameBounds.left) {
      hitLeft = true;
    } else if (hitRight == false && newx > game.gameBounds.right) {
      hitRight = true;
    } else if (hitBottom == false && newy > game.gameBounds.bottom) {
      hitBottom = true;
    }

    if (!hitLeft && !hitRight && !hitBottom) {
      invader.x = newx;
      invader.y = newy;
    }
  }

  if (this.invadersAreDropping) {
    this.invaderCurrentDropDistance += this.invaderVelocity.y * dt;
    if (this.invaderCurrentDropDistance >= this.config.invaderDropDistance) {
      this.invadersAreDropping = false;
      this.invaderVelocity = this.invaderNextVelocity;
      this.invaderCurrentDropDistance = 0;
    }
  }

  if (hitLeft) {
    this.invaderCurrentVelocity += this.config.invaderAcceleration;
    this.invaderVelocity = { x: 0, y: this.invaderCurrentVelocity };
    this.invadersAreDropping = true;
    this.invaderNextVelocity = { x: this.invaderCurrentVelocity, y: 0 };
  }

  if (hitRight) {
    this.invaderCurrentVelocity += this.config.invaderAcceleration;
    this.invaderVelocity = { x: 0, y: this.invaderCurrentVelocity };
    this.invadersAreDropping = true;
    this.invaderNextVelocity = { x: -this.invaderCurrentVelocity, y: 0 };
  }

  if (hitBottom) {
    game.lives = 0;
  }

  for (i = 0; i < this.invaders.length; i++) {
    var invader = this.invaders[i];
    var bang = false;

    for (var j = 0; j < this.rockets.length; j++) {
      var rocket = this.rockets[j];

      if (
        rocket.x >= invader.x - invader.width / 2 &&
        rocket.x <= invader.x + invader.width / 2 &&
        rocket.y >= invader.y - invader.height / 2 &&
        rocket.y <= invader.y + invader.height / 2
      ) {
        this.rockets.splice(j--, 1);
        bang = true;
        game.score += this.config.pointsPerInvader;
        break;
      }
    }
    if (bang) {
      this.invaders.splice(i--, 1);
    }
  }

  var frontRankInvaders = {};
  for (var i = 0; i < this.invaders.length; i++) {
    var invader = this.invaders[i];

    if (
      !frontRankInvaders[invader.file] ||
      frontRankInvaders[invader.file].rank < invader.rank
    ) {
      frontRankInvaders[invader.file] = invader;
    }
  }

  for (var i = 0; i < this.config.invaderFiles; i++) {
    var invader = frontRankInvaders[i];
    if (!invader) continue;
    var chance = this.bombRate * dt;
    if (chance > Math.random()) {
      this.bombs.push(
        new Bomb(
          invader.x,
          invader.y + invader.height / 2,
          this.bombMinVelocity +
            Math.random() * (this.bombMaxVelocity - this.bombMinVelocity)
        )
      );
    }
  }

  for (var i = 0; i < this.bombs.length; i++) {
    var bomb = this.bombs[i];
    if (
      bomb.x >= this.ship.x - this.ship.width / 2 &&
      bomb.x <= this.ship.x + this.ship.width / 2 &&
      bomb.y >= this.ship.y - this.ship.height / 2 &&
      bomb.y <= this.ship.y + this.ship.height / 2
    ) {
      this.bombs.splice(i--, 1);
      game.lives--;
    }
  }

  for (var i = 0; i < this.invaders.length; i++) {
    var invader = this.invaders[i];
    if (
      invader.x + invader.width / 2 > this.ship.x - this.ship.width / 2 &&
      invader.x - invader.width / 2 < this.ship.x + this.ship.width / 2 &&
      invader.y + invader.height / 2 > this.ship.y - this.ship.height / 2 &&
      invader.y - invader.height / 2 < this.ship.y + this.ship.height / 2
    ) {
      game.lives = 0;
    }
  }

  if (game.lives <= 0) {
    game.moveToState(new GameOverState());
  }

  if (this.invaders.length === 0) {
    game.score += this.level * 50;
    game.level += 1;
    game.moveToState(new LevelIntroState(game.level));
  }
};

PlayState.prototype.draw = function (game, dt, ctx) {
  ctx.clearRect(0, 0, game.width, game.height);

  ctx.fillStyle = "#999999";
  ctx.fillRect(
    this.ship.x - this.ship.width / 2,
    this.ship.y - this.ship.height / 2,
    this.ship.width,
    this.ship.height
  );

  ctx.fillStyle = "#006600";
  for (var i = 0; i < this.invaders.length; i++) {
    var invader = this.invaders[i];
    ctx.fillRect(
      invader.x - invader.width / 2,
      invader.y - invader.height / 2,
      invader.width,
      invader.height
    );
  }

  ctx.fillStyle = "#ff5555";
  for (var i = 0; i < this.bombs.length; i++) {
    var bomb = this.bombs[i];
    ctx.fillRect(bomb.x - 2, bomb.y - 2, 4, 4);
  }

  ctx.fillStyle = "#ff0000";
  for (var i = 0; i < this.rockets.length; i++) {
    var rocket = this.rockets[i];
    ctx.fillRect(rocket.x, rocket.y - 2, 1, 4);
  }

  var textYpos =
    game.gameBounds.bottom +
    (game.height - game.gameBounds.bottom) / 2 +
    14 / 2;
  ctx.font = "14px Arial";
  ctx.fillStyle = "#ffffff";
  var info = "Lives: " + game.lives;
  ctx.textAlign = "left";
  ctx.fillText(info, game.gameBounds.left, textYpos);
  info = "Score: " + game.score + ", Level: " + game.level;
  ctx.textAlign = "right";
  ctx.fillText(info, game.gameBounds.right, textYpos);

  if (this.config.debugMode) {
    ctx.strokeStyle = "#ff0000";
    ctx.strokeRect(0, 0, game.width, game.height);
    ctx.strokeRect(
      game.gameBounds.left,
      game.gameBounds.top,
      game.gameBounds.right - game.gameBounds.left,
      game.gameBounds.bottom - game.gameBounds.top
    );
  }
};

PlayState.prototype.keyDown = function (game, keyCode) {
  if (keyCode == KEY_SPACE) {
    this.fireRocket();
  }
  if (keyCode == 80) {
    game.pushState(new PauseState());
  }
};

PlayState.prototype.keyUp = function (game, keyCode) {};

PlayState.prototype.fireRocket = function () {
  if (
    this.lastRocketTime === null ||
    new Date().valueOf() - this.lastRocketTime > 1000 / this.rocketMaxFireRate
  ) {
    this.rockets.push(
      new Rocket(this.ship.x, this.ship.y - 12, this.config.rocketVelocity)
    );
    this.lastRocketTime = new Date().valueOf();
  }
};

function PauseState() {}

PauseState.prototype.keyDown = function (game, keyCode) {
  if (keyCode == 80) {
    game.popState();
  }
};

PauseState.prototype.draw = function (game, dt, ctx) {
  ctx.clearRect(0, 0, game.width, game.height);

  ctx.font = "14px Arial";
  ctx.fillStyle = "#ffffff";
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";
  ctx.fillText("Paused", game.width / 2, game.height / 2);
  return;
};
function LevelIntroState(level) {
  this.level = level;
  this.countdownMessage = "3";
}

LevelIntroState.prototype.update = function (game, dt) {
  if (this.countdown === undefined) {
    this.countdown = 3;
  }
  this.countdown -= dt;

  if (this.countdown < 2) {
    this.countdownMessage = "2";
  }
  if (this.countdown < 1) {
    this.countdownMessage = "1";
  }
  if (this.countdown <= 0) {
    game.moveToState(new PlayState(game.config, this.level));
  }
};

LevelIntroState.prototype.draw = function (game, dt, ctx) {
  ctx.clearRect(0, 0, game.width, game.height);

  ctx.font = "36px Arial";
  ctx.fillStyle = "#ffffff";
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";
  ctx.fillText("Level " + this.level, game.width / 2, game.height / 2);
  ctx.font = "24px Arial";
  ctx.fillText(
    "Ready in " + this.countdownMessage,
    game.width / 2,
    game.height / 2 + 36
  );
  return;
};

function Ship(x, y) {
  this.x = x;
  this.y = y;
  this.width = 20;
  this.height = 16;
}

function Rocket(x, y, velocity) {
  this.x = x;
  this.y = y;
  this.velocity = velocity;
}

function Bomb(x, y, velocity) {
  this.x = x;
  this.y = y;
  this.velocity = velocity;
}

function Invader(x, y, rank, file, type) {
  this.x = x;
  this.y = y;
  this.rank = rank;
  this.file = file;
  this.type = type;
  this.width = 18;
  this.height = 14;
}

function GameState(updateProc, drawProc, keyDown, keyUp, enter, leave) {
  this.updateProc = updateProc;
  this.drawProc = drawProc;
  this.keyDown = keyDown;
  this.keyUp = keyUp;
  this.enter = enter;
  this.leave = leave;
}
