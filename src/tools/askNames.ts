import inquirer from "inquirer";

import Player from "../Player/Player.js";

export default async function askNames(): Promise<Player[]> {
  const answer1 = await inquirer.prompt({
    name: "player_name",
    type: "input",
    message: "What is the first (X) player's name?",
    default() {
      return "Player 1";
    },
  });

  const player1: Player = new Player(answer1.player_name, "X");

  const answer2 = await inquirer.prompt({
    name: "player_name",
    type: "input",
    message: "What is the second (O) player's name?",
    default() {
      return "Player 2";
    },
  });

  const player2: Player = new Player(answer2.player_name, "O");

  return [player1, player2];
}
