import React from 'react';
import Squre from './Squre';

const Board = () => {
  return (
    <div className="board">
      <div className="board-row">
        <Squre value={1} />
        <Squre value={2} />
        <Squre value={3} />
      </div>
      <div className="board-row">
        <Squre value={4} />
        <Squre value={5} />
        <Squre value={6} />
      </div>
      <div className="board-row">
        <Squre value={7} />
        <Squre value={8} />
        <Squre value={9} />
      </div>
    </div>
  );
};

export default Board;
