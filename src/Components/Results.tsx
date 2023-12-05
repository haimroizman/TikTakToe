import React from "react";
import ElementsByCondition from "../UI/elements-by-condition";


interface ResultsProps {
  player: string | null;
  xIsNext: boolean;
  reset: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Results: React.FC<ResultsProps> = ({ player, xIsNext, reset }) => {
  
  return (
    <div className="flex items-center gap-4 text-white font-bold text-lg mt-12">
      <div>
        <h5 className="flex justify-center items-center">PLAYER1 (X)</h5>
        <h6 className="flex justify-center items-center text-center">
          {player ? `${player == "X" ? "1" : "0"}` : "0"}
        </h6>
      </div>
      <div>
        <h5 className="flex justify-center items-center">TIE</h5>
        <h6 className="flex justify-center items-center text-center">
          {player ? `${player == "TIE" ? "1" : "0"}` : "0"}
        </h6>
      </div>
      <div>
        <h5 className="flex justify-center items-center">PLAYER2 (O)</h5>
        <h6 className="flex justify-center items-center text-center">
          {player ? `${player == "O" ? "1" : "0"}` : "0"}
        </h6>
      </div>
      <ElementsByCondition clickTheButton={reset} textContent={!player ? `Player: ${xIsNext ? "X" : "O"}` : "RESTART"} />
      {/* <div>
        <button
          onClick={reset}
          className="hover:bg-blue-600 active:bg-orange-400 bg-slate-800 text-white  px-4 py-2 rounded-md"
        >
          {!player ? `Player: ${xIsNext ? "X" : "O"}` : "RESTART"}
        </button>
      </div> */}
      {/* <div>
        {player
          ? `Winner: ${player}`
          : `Next player: ${xIsNext ? "X" : "O"}`}
      </div> */}
    </div>
  );
};

export default Results;
