import React from 'react';
import Switch from '@material-ui/core/Switch';

function LightSwitch(props) {
  const togglePower = () => {
    props.setPower(!props.powered);
  };

  return (
    <div className="Switch">
      <Switch
        checked={props.powered}
        onChange={togglePower}
        name="power"
        inputProps={{ 'aria-label': 'power' }}
      />
    </div>
  );
}

export default LightSwitch;