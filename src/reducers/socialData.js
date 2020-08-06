export default function socialData(state = {}, action) {
  if (action.type === 'FETCH_DATA') {
    return { ...state, info: action.payload };
  }
  return state;
}
