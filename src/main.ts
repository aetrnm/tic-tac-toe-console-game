import Game from "./Game/Game.js";

import { clearTerminal } from "./tools/clearTerminal.js";
import { askNames } from "./tools/askNames.js";

clearTerminal();
console.log("Welcome to the Tic Tac Toe game!");

askNames().then((names) => {
  const [player1, player2] = names;
  player1.setOpponent(player2);
  player2.setOpponent(player1);

  new Game(player1, player2).startGame();
});
