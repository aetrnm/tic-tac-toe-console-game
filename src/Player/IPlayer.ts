import GameField from "GameField/GameField";

export default interface IPlayer {
  name: string;
  sign: string;
  opponent: IPlayer;
  setOpponent(opponent: IPlayer): void;
  turn(gameField: GameField): void;
}
