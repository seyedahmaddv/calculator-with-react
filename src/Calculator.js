import React, { useState } from 'react';
import './styles.css';

function Calculator() {
  const [display, setDisplay] = useState('0');
  const [tempOperation, setTempOperation] = useState(null); // متغیر جدید برای ذخیره موقت عملیات

  const handleClick = (value) => {
    if (display === '0' || display === 'Error') {
      setDisplay(value);
    } else {
      setDisplay(display + value);
    }
  };

  const handleClear = () => {
    setDisplay('0');
    setTempOperation(null); // پاک کردن عملیات موقت
  };

  const handleOperator = (operator) => {
    if (tempOperation === null) {
      setTempOperation(operator); // ذخیره عملیات موقت
      setDisplay(display + operator);
    }
  };

  const handleCalculate = () => {
    try {
      if (tempOperation !== null) {
        setDisplay(eval(display).toString());
      }
    } catch (error) {
      setDisplay('Error');
    }
    setTempOperation(null); // پاک کردن عملیات موقت پس از محاسبه
  };

  return (
    <div className="calculator w-64 mx-auto mt-8 p-4 border rounded-lg shadow-lg bg-white">
      <div className="display bg-gray-200 p-2 text-3xl text-right rounded-lg mb-2">{display}</div>
      <div className="buttons grid grid-cols-4 gap-2">
        <button onClick={() => handleClick('1')} className="btn">1</button>
        <button onClick={() => handleClick('2')} className="btn">2</button>
        <button onClick={() => handleClick('3')} className="btn">3</button>
        <button onClick={() => handleOperator('+')} className="btn btn-operator">+</button>
        <button onClick={() => handleClick('4')} className="btn">4</button>
        <button onClick={() => handleClick('5')} className="btn">5</button>
        <button onClick={() => handleClick('6')} className="btn">6</button>
        <button onClick={() => handleOperator('-')} className="btn btn-operator">-</button>
        <button onClick={() => handleClick('7')} className="btn">7</button>
        <button onClick={() => handleClick('8')} className="btn">8</button>
        <button onClick={() => handleClick('9')} className="btn">9</button>
        <button onClick={() => handleOperator('*')} className="btn btn-operator">*</button>
        <button onClick={() => handleClear()} className="btn btn-clear">C</button>
        <button onClick={() => handleClick('0')} className="btn">0</button>
        <button onClick={() => handleCalculate()} className="btn btn-operator">=</button>
        <button onClick={() => handleOperator('/')} className="btn btn-operator">/</button>
      </div>
    </div>
  );
}

export default Calculator;
