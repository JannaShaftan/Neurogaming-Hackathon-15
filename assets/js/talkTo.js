var talkTo = function(game) {};

talkTo.prototype = {
  preload: function () {
    this.load.image("sky", "assets/img/sky.png");
  },

  create: function () {
    game.add.sprite(0, 0, "sky");
  },

  nextState: function () {
    game.state.start("GameState1a");
  },

  update: function () {
    if (cursors.up.isDown) {
      this.nextState();
    }
  }
}
