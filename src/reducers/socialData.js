export default function location(state = {}, action) {
  if (action.type === 'FETCH_DATA') {
    return { ...state, data: action.payload };
  }
  return state;
}
