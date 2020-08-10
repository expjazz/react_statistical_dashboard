import Enzyme, { mount } from 'enzyme';
import React from 'react';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import PresidentCard from '../../src/components/PresidentCard';
import reducer from '../../src/reducers/index';
import { testStore } from '../../src/simulateStore';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('<PresidentCard />', () => {
  const president = [10, 11, 12, 13, 14];
  const getWrapper = (mockStore = createStore(reducer, testStore)) => mount(
    <Provider store={mockStore}>
      <Router>
        <table className="div">
          <thead>

            <PresidentCard president="some president" followers={president[1] || '-'} likes={president[2] || '-'} comments={president[3] || '-'} posts={president[4] || '-'} back={1} key={2} />
          </thead>
        </table>
      </Router>
    </Provider>,
  );
  it('renders the numbers propery', () => {
    const wrapper = getWrapper();
    const link = wrapper.findWhere(node => node.type() === 'a' && node.text() === '11');

    expect(link.text()).toEqual('11');
  });
  it('should dispatch an action when clicked', () => {
    const mockStore = createStore(reducer, testStore);
    mockStore.dispatch = jest.fn();
    const wrapper = getWrapper(mockStore);
    const link = wrapper.findWhere(node => node.type() === 'a' && node.text() === 'some president');
    link.simulate('click');
    expect(mockStore.dispatch).toHaveBeenCalled();
  });
});
