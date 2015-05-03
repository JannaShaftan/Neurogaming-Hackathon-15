var gameState2 = function(game) {};

gameState2.prototype = {
    preload: function () {
        //assets to be loaded
        this.load.image("profile", "assets/img/default-profile-image.png");

    },

    create: function () {
        //sprites to be created
        this.background = this.game.add.sprite(0, 0, "profile");
    },

    update: function () {
        //things for game to check
    }
}