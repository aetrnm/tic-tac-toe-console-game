import IGame from "Game/IGame";
import Player from "Player/Player";

export default class Game implements IGame {
  player1: Player;
  player2: Player;
  gameField: string[];
  startGame(): void {
    this.player1.turn(this.gameField);
  }

  constructor(player1: Player, player2: Player) {
    this.player1 = player1;
    this.player2 = player2;
    this.gameField = new Array(9).fill(" "); // TODO: add choosable field size (must be a perfect square)
  }
}
