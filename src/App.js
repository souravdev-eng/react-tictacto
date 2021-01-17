import React, { useState } from 'react';
import Board from './components/Board';
import History from './components/History';
import StatusMessage from './components/StatusMessage';
import { calculateWinner } from './helper';
import './style/root.scss';

const App = () => {
  //* Define our default state into a array of an object
  const [history, setHistory] = useState([
    { board: Array(9).fill(null), isXNext: true },
  ]);
  //* Setting up our movement index
  const [currentMove, setCurrentMove] = useState(0);
  const current = history[currentMove];

  const winner = calculateWinner(current.board);
  const message = winner
    ? `Winner is ${winner}`
    : `Next player is ${current.isXNext ? 'X' : 'O'}`;

  const handelClickUpdate = position => {
    if (current.board[position] || winner) {
      return;
    }
    setHistory(prev => {
      const last = prev[prev.length - 1];

      const newBord = last.board.map((squ, pos) => {
        if (pos === position) {
          return last.isXNext ? 'X' : 'O';
        }
        return squ;
      });
      return prev.concat({ board: newBord, isXNext: !last.isXNext });
    });
    setCurrentMove(prev => prev + 1);
  };
  const moveTo = move => {
    setCurrentMove(move);
  };

  return (
    <div className="app">
      <h1>Tic Tac To</h1>
      <StatusMessage winner={winner} current={current} />
      <Board board={current.board} handelClickUpdate={handelClickUpdate} />
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
    </div>
  );
};

export default App;
