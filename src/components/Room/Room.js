import React, { useState } from 'react';
import LightBulb from '../LightBulb/';
import LightSwitch from '../LightSwitch';
import './Room.css';

function Room(props) {
  const [ powered, setPower ] = useState(false);

  const togglePower = () => setPower(!powered);

  var lightLevelClass = powered ? ' bright' : '';
  const roomClass = 'walledRoom' + lightLevelClass;

  return (
    <div>
      <div className="roomName">{props.name}</div>
      <div className={roomClass}>
        <LightBulb powered={powered}/>
        <LightSwitch powered={powered} togglePower={togglePower} />
      </div>
    </div>
  );
}

export default Room;