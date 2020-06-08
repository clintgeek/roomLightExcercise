import React, { useEffect, useRef, useState } from 'react';
import LightBulb from '../LightBulb/';
import LightSwitch from '../LightSwitch';
import './Room.css';

function Room(props) {
  const [ powered, setPower ] = useState(false);
  const [ powerOnCount, setPowerOnCount ] = useState(0);
  const prevCountRef = useRef();
  const prevCount = prevCountRef.current;

  const togglePower = () => {
    setPower(!powered);
    if (!powered) setPowerOnCount(powerOnCount + 1);
  };

  const updateTitleBar = () => {
    document.title = `You turned the light on ${powerOnCount} times`;
  };

  const callAlert = () => {
    if (prevCount && 
        prevCount !== powerOnCount && 
        powerOnCount % 5 === 0 
    ){
      alert('You turned the light on ' + powerOnCount + ' times! You must really like this light!');
    }
  };

  useEffect(() => {
    prevCountRef.current = powerOnCount;
    updateTitleBar();
    callAlert();
  });

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