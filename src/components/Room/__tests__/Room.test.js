import React from 'react';
import {shallow} from 'enzyme';
import Room from '../Room';
import LightBulb from '../../LightBulb';
import LightSwitch from '../../LightSwitch';

describe('<Room> component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Room name="test room" />);
  })

  it('should match snapshot', () => {
    expect(wrapper.debug()).toMatchSnapshot();  
  });

  it('should render with the room name provided in props', () => {
    expect(wrapper.find('.roomName').text()).toEqual('test room');
  })

  it('should render a <LightBulb> with expected props', () => {
    const lightBulb = wrapper.find(LightBulb);
    expect(lightBulb.isEmptyRender()).toBe(false);
    expect(lightBulb.props()).toEqual({'powered': false})
  });

  it('should render a <LightSwitch> with expected props', () => {
    const lightSwitch = wrapper.find(LightSwitch);
    expect(lightSwitch.isEmptyRender()).toBe(false)
    expect(lightSwitch.props().powered).toEqual(false);
    expect(lightSwitch.props().togglePower).toBeInstanceOf(Function);
  });

  it('should maintain and modify the lights power in state', () => {
    expect(wrapper.find(LightSwitch).props().powered).toEqual(false);
    wrapper.find(LightSwitch).props().togglePower();
    expect(wrapper.find(LightSwitch).props().powered).toEqual(true);
  });

  it('should devise className from state', () => {
    expect(wrapper.find('.bright').isEmptyRender()).toBe(true);
    wrapper.find(LightSwitch).props().togglePower();
    expect(wrapper.find('.bright').isEmptyRender()).toBe(false);
  });
});