// In which the scene is laid out

var gameState1 = function(game) {};

var map;
var layer;

var cursors;
var sprite;

gameState1.prototype = {
  preload: function () {
    //stuff to be loaded
    this.load.image("star", "assets/img/star.png");
    this.load.image("next", "assets/img/next.png");
  },

  create: function () {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    //sprites to be created
    sprite = game.add.sprite(0, 0, "star");
    game.physics.enable(sprite);

    cursors = game.input.keyboard.createCursorKeys();

    this.button = this.game.add.button(400, 350, "next", this.nextState, this);
    this.button.anchor.set(0.5, 0.5);
  },

  nextState: function () {
    this.game.state.start("GameState2");
  },

  update: function () {
    //things for game to check
    game.physics.arcade.collide(sprite, layer);

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
