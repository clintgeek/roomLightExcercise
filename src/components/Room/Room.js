import React from 'react';
import Light from '../Light/';
import Switch from '../Switch';
import './Room.css';

function Room(props) {
  return (
    <>
      <div className="roomName">{props.name}</div>
      <div className="roomContainer">
        <Light />
        <Switch />
      </div>
    </>
  );
}

export default Room;