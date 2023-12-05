// Square.tsx
import React from "react";

interface SquareProps {
  value: string;
  onClick: () => void;
}

const Square: React.FC<SquareProps> = ({ value, onClick }) => {
  return (
    <div
      className="hover:bg-blue-600 active:bg-orange-400 p-4 aspect-square block text-white text-center border ring-8 border-white items-center text-8xl justify-center cursor-pointer"
      onClick={onClick}
    >
      {value}
    </div>
  );
};

export default Square;
