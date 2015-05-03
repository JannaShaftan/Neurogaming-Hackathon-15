var gameState1 = function(game) {};

gameState1.prototype = {
    preload: function () {
        //stuff to be loaded
        this.load.image("pig", "assets/img/pig.png");
        this.load.image("next", "assets/img/next.png");
    },

    create: function () {
        //sprites to be created
        this.background = this.game.add.sprite(0, 0, "pig");
        this.timer = 0;
        this.button = this.game.add.button(400, 350, "next", this.nextState, this);
        this.button.anchor.set(0.5, 0.5);
    },

    nextState: function () {
        this.game.state.start("GameState2");
    },

    update: function () {
        //things for game to check
    }

}