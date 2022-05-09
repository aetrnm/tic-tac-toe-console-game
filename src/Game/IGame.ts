import GameField from "GameField/GameField";
import IPlayer from "../Player/IPlayer";

export default interface IGame {
  player1: IPlayer;
  player2: IPlayer;
  gameField: GameField;
  startGame(): void;
}
