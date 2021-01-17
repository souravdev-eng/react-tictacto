import React from 'react';
import Board from './components/Board';
import './style/root.scss';

const App = () => {
  return (
    <div className="app">
      <h1>Tic Tac To</h1>
      <Board />
    </div>
  );
};

export default App;
