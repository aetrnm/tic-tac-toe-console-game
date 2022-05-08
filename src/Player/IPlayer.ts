export default interface IPlayer {
  name: string;
  sign: string;
  opponent: IPlayer;
  setOpponent(opponent: IPlayer): void;
  turn(gameField: string[]): void;
}
