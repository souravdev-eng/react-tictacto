import React, { useState } from 'react';
import Board from './components/Board';
import { calculateWinner } from './helper';
import './style/root.scss';

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);
  const winner = calculateWinner(board);
  const message = winner
    ? `Winner is ${winner}`
    : `Next player is ${isXNext ? 'X' : 'O'}`;
  const handelClickUpdate = position => {
    if (board[position] || winner) {
      return;
    }
    setBoard(prev => {
      return prev.map((squ, pos) => {
        if (pos === position) {
          return isXNext ? 'X' : 'O';
        }
        return squ;
      });
    });
    setIsXNext(prev => !prev);
  };
  return (
    <div className="app">
      <h1>Tic Tac To</h1>
      <h2>{message}</h2>
      <Board board={board} handelClickUpdate={handelClickUpdate} />
    </div>
  );
};

export default App;
