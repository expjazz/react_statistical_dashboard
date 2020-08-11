const defaultState = { error: null };

export default (state = defaultState, action) => {
  if (action.type === 'API_INFO_PRESIDENT_ERROR') {
    return { ...state, error: action.payload };
  }
  return state;
};
