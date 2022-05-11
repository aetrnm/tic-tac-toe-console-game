import Game from "./Game/Game.js";
import Player from "./Player/Player.js";

import clearTerminal from "./tools/clearTerminal.js";
import askNames from "./tools/askNames.js";

clearTerminal();
console.log("Welcome to the Tic Tac Toe game!");

let player1: Player, player2: Player;

await askNames().then((players) => {
  [player1, player2] = players;
  player1.setOpponent(player2);
  player2.setOpponent(player1);
});

new Game(player1, player2).startGame();
