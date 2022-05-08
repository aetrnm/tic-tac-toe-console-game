export function checkWinCondition(gameField: string[], sign: string) {
  /*
  012
  345
  678
  036
  147
  258
  048
  246
  */
  if (gameField[0] === sign && gameField[1] === sign && gameField[2] === sign)
    return true;
  if (gameField[3] === sign && gameField[4] === sign && gameField[5] === sign)
    return true;
  if (gameField[6] === sign && gameField[7] === sign && gameField[8] === sign)
    return true;
  if (gameField[0] === sign && gameField[3] === sign && gameField[6] === sign)
    return true;
  if (gameField[1] === sign && gameField[4] === sign && gameField[7] === sign)
    return true;
  if (gameField[2] === sign && gameField[5] === sign && gameField[8] === sign)
    return true;
  if (gameField[0] === sign && gameField[4] === sign && gameField[8] === sign)
    return true;
  if (gameField[2] === sign && gameField[4] === sign && gameField[6] === sign)
    return true;

  return false;
}
