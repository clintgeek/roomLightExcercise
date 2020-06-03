import React, { useState } from 'react';
import Light from '../Light/';
import Switch from '../Switch';
import './Room.css';

function Room(props) {
  const [ powered, setPower ] = useState(false);

  var lightLevelClass = powered ? ' bright' : '';
  const roomClass = 'walledRoom' + lightLevelClass;

  return (
    <div className="roomContainer">
      <div className="roomName">{props.name}</div>
      <div className={roomClass}>
        <Light powered={powered}/>
        <Switch powered={powered} setPower={setPower} />
      </div>
    </div>
  );
}

export default Room;