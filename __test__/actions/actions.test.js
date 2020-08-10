import { setMonthFilter, setPresidentFilter, setSocialMediaFilter } from '../../src/actionCreators/filters';

describe('actions', () => {
  it('should filter data', () => {
    const actionExpected = { type: 'SET_MONTH_FILTER', payload: { month: 1, currentSort: 1 } };
    const content = { month: 1, currentSort: 1 };
    expect(setMonthFilter(content)).toEqual(actionExpected);
  });

  it('should filter presidents', () => {
    const actionExpected = { type: 'SET_PRESIDENT_FILTER', payload: 'some payload' };
    const content = 'some payload';
    expect(setPresidentFilter(content)).toEqual(actionExpected);
  });

  it('should filter the social media', () => {
    const actionExpected = { type: 'SET_SOCIAL_MEDIA_FILTER', payload: 'instagram' };
    const content = 'instagram';
    expect(setSocialMediaFilter(content)).toEqual(actionExpected);
  });
});
