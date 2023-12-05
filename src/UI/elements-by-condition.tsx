import React from "react";

interface ElementsByConditionProps {
  textContent: string;
  clickTheButton: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function ElementsByCondition({
  textContent,
  clickTheButton,
}: ElementsByConditionProps) {
  if (textContent === "RESTART") {
    return (
      <button
        onClick={clickTheButton}
        className="animate-pulse hover:rotate-12 hover:scale-100 hover:skew-x-12 transition duration-1000 hover:bg-blue-600 active:bg-orange-400 bg-slate-800 text-white  px-4 py-2 rounded-md"
      >
        {textContent}
      </button>
    );
  } else {
    return (
      <div className="animate-pulse bg-white text-black font-extrabold px-4 py-2 rounded-md">
        {textContent}
      </div>
    );
  }
}

export default ElementsByCondition;
