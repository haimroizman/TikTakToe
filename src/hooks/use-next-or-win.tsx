import {create} from 'zustand';

type NextOrWinState = {
  xIsNext: boolean;
  winner: string | null;
};

type NextOrWinStore = {
  setWinner: (winner: string | null) => void;
  setXIsNext: (xIsNext: boolean) => void;
} & NextOrWinState;

const useNextOrWin = create<NextOrWinStore>((set) => ({
  xIsNext: true,
  winner: null,
  setWinner: (winner) => set({winner}),
  setXIsNext: (xIsNext) => set({xIsNext}),
}));


export default useNextOrWin;
