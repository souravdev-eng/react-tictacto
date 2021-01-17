import React, { useState } from 'react';
import Board from './components/Board';
import History from './components/History';
import StatusMessage from './components/StatusMessage';
import { calculateWinner } from './helper';
import './style/root.scss';

const APP_STATE = [{ board: Array(9).fill(null), isXNext: true }];

const App = () => {
  //* Define our default state into a array of an object
  const [history, setHistory] = useState(APP_STATE);
  //* Setting up our movement index
  const [currentMove, setCurrentMove] = useState(0);
  const current = history[currentMove];

  const { winner, winningSquare } = calculateWinner(current.board);

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

  const newGame = () => {
    setHistory(APP_STATE);
    setCurrentMove(0);
  };

  return (
    <div className="app">
      <h1>
        TIC <span className="text-green">TAC</span> TO
      </h1>
      <StatusMessage winner={winner} current={current} />
      <Board
        board={current.board}
        handelClickUpdate={handelClickUpdate}
        winningSquare={winningSquare}
      />
      <button
        type="button"
        onClick={newGame}
        className={`btn-reset ${winner ? 'active' : ''}`}
      >
        Start New Game
      </button>
      <h2 style={{ fontWeight: 'normal' }}>Current Game history</h2>
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
      <div className="bg-balls" />
    </div>
  );
};

export default App;
