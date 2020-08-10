import { setMonthFilter, setPresidentFilter, setSocialMediaFilter } from '../actions/filters';

describe('actions', () => {
  it('should filter data', () => {
    const actionExpected = { type: 'SET_MONTH_FILTER', payload: { month: 1, currentSort: 1 } };
    const content = { month: 1, currentSort: 1 };
    expect(setMonthFilter(content)).toEqual(actionExpected);
  });
});
