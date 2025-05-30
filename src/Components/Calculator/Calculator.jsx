import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    if (value === 'C') {
      setInput('');
    } else if (value === '=') {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput('Error');
      }
    } else {
      setInput((prev) => prev + value);
    }
  };

  const buttons = [
    ['C', '+/-', '%', '/'],
    ['7', '8', '9', '*'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '=']
  ];

  return (
    <div className="calculator-container">
      <div className="calculator-screen">{input || '0'}</div>
      <div className="calculator-buttons">
        {buttons.map((row, rowIndex) => (
          <div key={rowIndex} className="calculator-row">
            {row.map((btn, i) => (
              <button
                key={i}
                className={`btn ${btn === '=' ? 'equals' : ''} ${['/', '*', '-', '+'].includes(btn) ? 'operator' : ''} ${btn === '0' ? 'zero' : ''}`}
                onClick={() => handleClick(btn)}
              >
                {btn}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
