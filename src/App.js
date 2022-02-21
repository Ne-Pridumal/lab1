import './App.css';
import { useState, useEffect } from 'react';


function App() {
  const [counter, setCounter] = useState(20);
  const [buttonsState, setButtonsState] = useState(true);
  const increaseCounter = () => {
    setCounter(counter + 1);
  }
  const decreaseCounter = () => {
    setCounter(counter - 1);
  }
  const setDefState = () => {
    setCounter(20);
    setButtonsState(true);
  }

  useEffect(() => {
    const keyHandler = event => {
      if (event.key === '+' || event.key === '=') {
        setCounter(counter + 1);
      }
      else if (event.key === '-' || event.key === '_') {
        setCounter(counter - 1);
      }
    }
    if (!buttonsState) {
      document.addEventListener('keydown', keyHandler)
    }
    return () => {
      document.removeEventListener('keydown', keyHandler)
    }
  })
  return (
    <div className="App">
      <p>{counter}</p>
      {
        buttonsState ?
          <div className="buttons-container">
            <button
              onClick={increaseCounter}
              style={{ background: '#5cb85c' }}
            >
              +
            </button>
            <button
              onClick={decreaseCounter}
              style={{ background: '#f0ad4e' }}
            >
              -
            </button>
          </div>
          :
          null
      }
      <ul className='list-box'>
        <li><p className='App-link' onClick={() => { setButtonsState(true) }}>Показать</p></li>
        <li><p className='App-link' onClick={() => { setButtonsState(false) }}>Скрыть</p></li>
        <li><p className='App-link' onClick={setDefState}>Очистить</p></li>
      </ul>
      <button
        className='kill-btn'
        style={{ background: '#d9534f' }}
        onClick={() => window.close()}
      >
        Close
      </button>
    </div >
  );
}

export default App;
