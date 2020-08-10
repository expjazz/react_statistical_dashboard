/* eslint-disable no-multi-assign */
import React from 'react';
import Enzyme, { mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import TopTableShowData from '../../src/components/ShowData';
import reducer from '../../src/reducers/index';
import { testStore } from '../../src/simulateStore';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('<ShowData />', () => {
  const getWrapper = (mockStore = createStore(reducer, testStore)) => mount(
    <Provider store={mockStore}>
      <Router>
        <TopTableShowData />
      </Router>
    </Provider>,
  );
  it('should find some president names', () => {
    const wrapper = getWrapper();
    const link = wrapper.findWhere(node => node.type() === 'th' && node.text() === 'Followers');
    expect(link.text()).toEqual('Followers');
  });
  it('should dispatch action when click in followers', () => {
    const mockStore = createStore(reducer, testStore);
    mockStore.dispatch = jest.fn();
    const wrapper = getWrapper(mockStore);
    const link = wrapper.findWhere(node => node.type() === 'th' && node.text() === 'Followers');
    link.simulate('click');
    expect(mockStore.dispatch).toHaveBeenCalled();
  });
});
