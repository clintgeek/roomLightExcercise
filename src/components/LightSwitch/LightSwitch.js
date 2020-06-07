import React from 'react';
import Switch from '@material-ui/core/Switch';

function LightSwitch(props) {
  return (
    <div>
      <Switch
        checked={props.powered}
        onChange={props.togglePower}
        name="power"
        inputProps={{ 'aria-label': 'power' }}
      />
    </div>
  );
}

export default LightSwitch;