import React from 'react';
import {shallow} from 'enzyme';
import App from '../App';
import Room from '../../Room';

describe('<App> component', () => {
  const wrapper = shallow(<App />);

  it('should match snapshot', () => {
    expect(wrapper.debug()).toMatchSnapshot();
  })

  it('should render <Room>', () => {
    const room = wrapper.find(Room);
    expect(room.isEmptyRender()).toBe(false);
  });
});

