import React, { useState } from 'react';
import './App.css';

function App() {
  const [display, setDisplay] = useState(''); // State za prikaz rezultatta i unosa

  // Funkcija za rukovanje klikom 
  const handleButtonClick = (value) => {
    setDisplay((prevDisplay) => prevDisplay + value);
  };


  const calculateResult = () => {
    try {
      // funkcija za racunanje
      setDisplay(eval(display).toString());
    } catch (error) {

      setDisplay('Greška');
    }
  };

  // Funkcija za brisanje 
  const clearDisplay = () => {
    setDisplay('');
  };

  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="buttons">
        {/* dugmad za brojeve */}
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button onClick={() => handleButtonClick('0')}>0</button>

        {/* Gumbi za operatore */}
        <button onClick={() => handleButtonClick('+')}>+</button>
        <button onClick={() => handleButtonClick('-')}>-</button>
        <button onClick={() => handleButtonClick('*')}>*</button>
        <button onClick={() => handleButtonClick('/')}>/</button>

        {/* Gumb za izvršavanje izraza */}
        <button onClick={calculateResult}>=</button>

        {/* Gumb za brisanje unosa */}
        <button onClick={clearDisplay}>C</button>
      </div>
    </div>
  );
}

export default App;
