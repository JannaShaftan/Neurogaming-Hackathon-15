// In which the scene is laid out

var gameState1 = function(game) {};

var cursors;
var sprite;
var rightEdge;

gameState1.prototype = {
  preload: function () {
    //stuff to be loaded
    this.load.image("star", "assets/img/star.png");
    this.load.image("next", "assets/img/next.png");
  },

  create: function () {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    //sprites to be created
    sprite = game.add.sprite(0, 300, "star");
    game.physics.enable(sprite);

    //enable right edge
    rightEdge = game.add.sprite(790, 0, "next");
    game.physics.enable(rightEdge);

    cursors = game.input.keyboard.createCursorKeys();
  },

  nextState: function () {
    game.state.start("GameState2");
  },

  update: function () {
    //see if we run over right edge
    this.game.physics.arcade.collide(sprite, rightEdge, this.nextState);

    //move the main sprite
    sprite.body.velocity.x = 0;
    sprite.body.velocity.y = 0;
    sprite.body.angularVelocity = 0;

    if (cursors.left.isDown)
    {
      sprite.body.angularVelocity = -200;
    }
    else if (cursors.right.isDown)
    {
      sprite.body.angularVelocity = 200;
    }

    if (cursors.up.isDown)
    {
      sprite.body.velocity.copyFrom(game.physics.arcade.velocityFromAngle(sprite.angle, 300));
    }
  }
}
