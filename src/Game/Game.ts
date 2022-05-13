import Player from "../Player/Player.js";
import GameField from "../GameField/GameField.js";
import askNames from "../tools/askNames.js";

export default class Game implements IGame {
  player1: Player;
  player2: Player;
  gameField: GameField;
  async startGame(): Promise<void> {
    let player1: Player, player2: Player;

    await askNames().then((players) => {
      [player1, player2] = players;
      player1.setOpponent(player2);
      player2.setOpponent(player1);
    });

    this.player1 = player1;
    this.player2 = player2;

    this.player1.turn(this.gameField);
  }

  constructor() {
    this.gameField = new GameField();
  }
}

interface IGame {
  player1: Player;
  player2: Player;
  gameField: GameField;
  startGame(): void;
}
