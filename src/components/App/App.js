import React from 'react';
import './App.css';
import Room from '../Room';

function App() {
  return (
    <div className="container">
      <div className="room">
        <Room name="Test Room" />
        <div className="encouragement">(Try cycling it 5 or more times!)</div>
      </div>
      <div className="moreInfo">
        <a className="link" href="https://github.com/clintgeek/roomLightExcercise">github.com/clintgeek/roomLightExcercise</a>
      </div>
    </div>
  );
}

export default App;
