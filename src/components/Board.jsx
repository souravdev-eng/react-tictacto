import React from 'react';
import Squre from './Squre';

const Board = ({ board, handelClickUpdate, winningSquare }) => {
  // Only work to show spacify array position
  const renderSquer = position => {
    const isWinningSquare = winningSquare.includes(position);
    return (
      <Squre
        value={board[position]}
        onClick={() => {
          handelClickUpdate(position);
        }}
        isWinningSquare={isWinningSquare}
      />
    );
  };

  return (
    <div className="board">
      <div className="board-row">
        {renderSquer(0)}
        {renderSquer(1)}
        {renderSquer(2)}
      </div>
      <div className="board-row">
        {renderSquer(3)}
        {renderSquer(4)}
        {renderSquer(5)}
      </div>
      <div className="board-row">
        {renderSquer(6)}
        {renderSquer(7)}
        {renderSquer(8)}
      </div>
    </div>
  );
};

export default Board;
