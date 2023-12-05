import React from "react";
import Square from "./Square";
import { useTikTakToeLogic } from "../hooks/use-tiktaktoe-logic";
import Results from "./Results";

const Board = () => {
  const {
    squares,
    xIsNext,
    winner,
    setXIsNext,
    setWinner,
    setSquares,
    handleClick,
  } = useTikTakToeLogic();

  const renderSquare = (index: number) => {
    return (
      <Square
        key={index}
        value={squares[index]}
        onClick={() => handleClick(index)}
      />
    );
  };

  const resetGame = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (event.currentTarget.textContent == "RESTART") {
      setSquares(Array(9).fill(""));
      setWinner(null);
      setXIsNext(true);
    }
  };

  // const winner = calculateWinner(squares);

  return (
    <div className="max-w-fit max-h-fit">
      {" "}
      {/* That was before :w-2/6 */}
      <div className="grid grid-cols-3 justify-center items-center text-center">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((index) => renderSquare(index))}
      </div>
      <Results player={winner} xIsNext={xIsNext} reset={resetGame} />
    </div>
  );
};

export default Board;
