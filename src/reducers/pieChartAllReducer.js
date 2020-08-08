const defaultState = {
  currentQueryPresidents: ['Donald Trump'],
};

export default (state = defaultState, action) => {
  if (action.type === 'SET_CURRENT_QUERY_PRESIDENTS_PIE') {
    return { ...state, currentQueryPresidents: action.payload };
  } return state;
};
