import React from 'react';

const Squre = ({ value, onClick }) => {
  console.log(value);
  return (
    <button type="button" className="square" onClick={onClick}>
      {value}
    </button>
  );
};

export default Squre;
