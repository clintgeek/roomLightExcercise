import React from 'react';
import {shallow} from 'enzyme';
import LightSwitch from '../LightSwitch';
import Switch from '@material-ui/core/Switch';

describe('<LightSwitch> component', () => {
  let wrapper;
  const togglePowerMock = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<LightSwitch  powered={false} togglePower={togglePowerMock} />);
  })

  it('should match snapshot', () => {
    expect(wrapper.debug()).toMatchSnapshot();  
  });

  it('should render a <Switch> with expected props', () => {
    const expectedProps = {
      'checked': false,
      'inputProps': {
        'aria-label': 'power',
      },
      'name': 'power',
      'onChange': togglePowerMock,
    }
    const switchComponent = wrapper.find(Switch);
    expect(switchComponent.isEmptyRender()).toBe(false);
    expect(switchComponent.props()).toEqual(expectedProps)
  });

  it('should call props.togglePower when changed', () => {
    wrapper.find(Switch).props().onChange();
    expect(togglePowerMock).toHaveBeenCalledTimes(1);
  });

  it('should match its checked property to props.powered', () => {
    const isCheckedWithFalse = wrapper.find(Switch).props().checked;
    expect(isCheckedWithFalse).toBe(false);
    
    const checkedWrapper = shallow(<LightSwitch powered={true} togglePower={togglePowerMock} />)
    const isCheckedWithTrue = checkedWrapper.find(Switch).props().checked;
    expect(isCheckedWithTrue).toBe(true);
  })
});