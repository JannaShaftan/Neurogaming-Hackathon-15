// In which we are attacked and must run away

var gameState5 = function(game) {};

var cursors;
var sprite;
var rightEdge;
var villain1;
var villain2;

gameState5.prototype = {
  preload: function () {
    //stuff to be loaded
    this.load.image("star", "assets/img/star.png");
    this.load.image("next", "assets/img/next.png");
    this.load.image("baddie", "assets/img/baddie.png");
  },

  create: function () {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    //sprites to be created
    sprite = game.add.sprite(0, 300, "star");
    game.physics.enable(sprite);
    villain1 = game.add.sprite(300, 0, "baddie");
    villain2 = game.add.sprite(600, 590, "baddie");
    game.physics.enable(villain1);
    game.physics.enable(villain2);

    //enable right edge
    rightEdge = game.add.sprite(790, 0, "next");
    game.physics.enable(rightEdge);

    cursors = game.input.keyboard.createCursorKeys();
  },

  nextState: function () {
    game.state.start("GameState6");
  },

  killChar: function () {
    //restart game
    game.state.start("GameState5");
  },

  update: function () {
    //see if we run over right edge
    this.game.physics.arcade.collide(sprite, rightEdge, this.nextState);

    //if we hit a villain
    this.game.physics.arcade.collide(sprite, villain1, this.killChar);
    this.game.physics.arcade.collide(sprite, villain2, this.killChar);

    //move the villains
    villain1.body.velocity.y = 20;
    villain2.body.velocity.y = -20;
    
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
