import React, { useState } from 'react';
import './App.css';
import Validate from './Validation/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

function App() {
  const [length, setLength] = useState(0);
  const [text, setText] = useState("");
  const onChangeListener = (event) => {
    setLength(event.target.value.length);
    setText(event.target.value);
  };
  const onCharClick = index => {
    let temp = text.split('');
    temp = temp.filter((value, charIndex) => index !== charIndex);
    setLength(temp.length);
    setText(temp.join(''));
  };
  return (
    <div className="App">
      <p>Length: {length}</p>
      <input type='text' onChange={onChangeListener} value={text}/>
      <Validate length={length}/>
      <CharComponent text={text} onClick={onCharClick}/>
    </div>
  );
}

export default App;
