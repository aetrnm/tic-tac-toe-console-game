import Game from "./Game/Game.js";

import clearTerminal from "./tools/clearTerminal.js";

clearTerminal();
console.log("Welcome to the Tic Tac Toe game!");

new Game().startGame();
