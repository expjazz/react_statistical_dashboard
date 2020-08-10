/* eslint-disable no-multi-assign */
import React from 'react';
import Enzyme, { mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import ShowData from '../../src/components/ShowData';
import reducer from '../../src/reducers/index';
import { testStore } from '../../src/simulateStore';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('<ShowData />', () => {
  const getWrapper = (mockStore = createStore(reducer, testStore)) => mount(
    <Provider store={mockStore}>
      <Router>

        <ShowData />
      </Router>
    </Provider>,
  );
  it('should find some president names', () => {
    const wrapper = getWrapper();
    expect(wrapper.find('select').text()).toEqual('JanuaryFebruaryMarchAprilMayJuneJulyAugustSeptemberOctoberNovemberDecember');
  });
  it('should dispatch action when click in followers', () => {
    const mockStore = createStore(reducer, testStore);
    mockStore.dispatch = jest.fn();
    const wrapper = getWrapper(mockStore);
    const action = wrapper.findWhere(node => node.type() === 'select');
    action.simulate('change', { target: { value: '2' } });
    expect(mockStore.dispatch).toHaveBeenCalled();
  });
});
