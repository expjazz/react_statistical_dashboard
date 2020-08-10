import { shallow } from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-15';
import ShowData from '../../src/components/ShowData';

describe('<ShowData />', () => {
  it('renders and displays properly', () => {
    const wrapper = shallow(<ShowData />);
    console.log(wrapper.debug);
  });
});
