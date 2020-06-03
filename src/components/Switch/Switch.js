import React from 'react';
import './Switch.css';

function Switch(props) {
  const togglePower = () => {
    props.setPower(!props.powered);
  };


  return (
    <div className="Switch">
      <label className="powerToggleLabel">
        <input
          type="radio"
          name="power-on"
          value={true}
          checked={props.powered}
          onChange={togglePower}
          className="powerToggle"
        />
        ON
      </label>
      <label className="powerToggleLabel">
        <input
          type="radio"
          name="power-off"
          value={true}
          checked={!props.powered}
          onChange={togglePower}
          className="powerToggle"
        />
        OFF
      </label>
    </div>
  );
}

export default Switch;