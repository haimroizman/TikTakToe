import { useState, useEffect, useCallback } from "react";
import useNextOrWin  from "./use-next-or-win";

export function useTikTakToeLogic() {
  const [squares, setSquares] = useState<string[]>(Array(9).fill(""));
  // const [xIsNext, setXIsNext] = useState<boolean>(true);
  // const [winner, setWinner] = useState<string | null>(null);
  const {xIsNext, setXIsNext, winner, setWinner} = useNextOrWin(state=>state);

  const calculateWinner = useCallback(
    (squares: string[] | []) => {
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];

      for (const [a, b, c] of lines) {
        if (
          squares[a] &&
          squares[a] === squares[b] &&
          squares[a] === squares[c]
        ) {
          setWinner(squares[a]);
          return [];
          // setSquares(Array(9).fill(""));
        }
      }
      if (squares.every((square) => square)) {
        setWinner("TIE");
        return [];
      }
      return winner;
    },
    [winner, setWinner]
  );

  useEffect(() => {
    calculateWinner(squares);
    // return () => {setSquares};
  }, [squares, winner, calculateWinner]);

  const handleClick = (index: number) => {
    if (squares[index] || calculateWinner(squares)) {
      return;
    }
    const newSquares = squares.slice();
    newSquares[index] = xIsNext ? "X" : "O";
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  return {
    squares,
    xIsNext,
    winner,
    setXIsNext,
    setWinner,
    setSquares,
    handleClick,
  };
}
