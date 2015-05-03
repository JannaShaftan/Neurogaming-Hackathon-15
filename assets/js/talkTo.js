var talkTo = function(game) {};

talkTo.prototype = {
  preload: function () {
    this.load.image("sky", "assets/img/sky.png");
  },

  create: function () {
    game.add.sprite(0, 0, "sky");
    this.title = this.game.add.text(10, 250, "How do you feel about your new friend?", {fill: "#fff"});
    // this.game.add.text(this, 0, 0, "Hello World");
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
