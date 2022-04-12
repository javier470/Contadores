import React from 'react';
import './App.css';

function App() {

  var [number, setNumber] = React.useState(0);

  function operators(val) {
    if (val === 1) {
      setNumber(number + 1);
    }
    if (val === 2) {
      setNumber(number - 1);
    } if (val === 3) {
      setNumber(0)
    }
  }

  function setColor() {
    if (number > 0) {
      document.getElementById('text').style.color = "green";
    } if (number < 0) {
      document.getElementById('text').style.color = "red";
    } if (number === 0) {
      document.getElementById('text').style.color = "yellow";
    }
  }

  React.useEffect( () => {
    setColor();
  })

  return (
    <div className="App">
      <div id='text1'>Counter</div>
      <div id='text'>{number}</div>
      <div>
        <button id='decrease' onClick={() => { operators(2) }}>Decrease</button>
        <button id='reset' onClick={() => { operators(3) }}>Reset</button>
        <button id='increase' onClick={() => { operators(1) }}>Increase</button>
      </div>
    </div>
  );
}

export default App;
