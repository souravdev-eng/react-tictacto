import React from 'react';

const Squre = ({ value, onClick, isWinningSquare }) => {
  console.log(value);
  return (
    <button
      type="button"
      className="square"
      onClick={onClick}
      style={{
        fontWeight: isWinningSquare ? 'bold' : 'normal',
      }}
    >
      {value}
    </button>
  );
};

export default Squre;
