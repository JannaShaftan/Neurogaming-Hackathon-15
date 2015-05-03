var game = new Phaser.Game(800, 600, Phaser.AUTO, "game");

game.state.add("GameState1", gameState1);
game.state.add("GameState1a", GameState1a);
game.state.add("GameState2", gameState2);
game.state.add("GameState3", gameState3);
game.state.add("GameState4", gameState4);
game.state.add("GameState5", gameState5);
game.state.add("GameState6", gameState6);
game.state.add("GameState7", gameState7);
game.state.add("GameState8", gameState8);
game.state.add("GameState9", gameState9);
game.state.add("GameState10", gameState10);
game.state.add("talkTo", talkTo);

game.state.start("GameState1");
