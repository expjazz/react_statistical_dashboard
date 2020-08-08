const defaultState = {
  currentQuery:
    ['Followers', 'twitter_fans'],
  presidentInChart: ['Donald Trump'],

};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_CURRENT_QUERY':
      return {
        ...state,
        currentQuery: action.payload,
      };
    case 'SET_PRESIDENT_IN_CHART':
      return {
        ...state,
        currentQuery: action.payload,
      };
    default:
      return state;
  }
};
