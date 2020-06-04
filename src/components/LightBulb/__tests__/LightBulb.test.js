import React from 'react';
import {shallow} from 'enzyme';
import LightBulb from '../LightBulb';

describe('<LightBulb> component', () => {
  const wrapper = shallow(<LightBulb powered={false} />);

  it('should match snapshot', () => {
    expect(wrapper.debug()).toMatchSnapshot();
  })

  it('should render a div with a .lightBulb class', () => {
    const lightBulb = wrapper.find('.lightBulb');
    expect(lightBulb.isEmptyRender()).toBe(false);
  });

  it('should devise className from props', () => {
    expect(wrapper.find('.powered').isEmptyRender()).toBe(true);

    const poweredWrapper = shallow(<LightBulb powered={true} />);
    expect(poweredWrapper.find('.powered').isEmptyRender()).toBe(false);
  });
});
