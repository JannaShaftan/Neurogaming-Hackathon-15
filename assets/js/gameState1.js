// In which the scene is laid out

var gameState1 = function(game) {};

var cursors;
var sprite;
var rightEdge;
var friend;

gameState1.prototype = {
  preload: function () {
    //stuff to be loaded
    this.load.image("star", "assets/img/star.png");
    this.load.image("friend", "assets/img/star.png");
  },

  create: function () {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    //sprites to be created
    sprite = game.add.sprite(0, 300, "star");
    game.physics.enable(sprite);
    friend = game.add.sprite(400, 300, "friend");
    game.physics.enable(friend);

    cursors = game.input.keyboard.createCursorKeys();
  },

  talk: function () {
    game.state.start("talkTo");
  },

  update: function () {
    //run into the friend
    this.game.physics.arcade.collide(sprite, friend, this.talk);

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
