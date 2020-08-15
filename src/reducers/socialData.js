export default function socialData(state = { info: [1, 2] }, action) {
  if (action.type === 'FETCH_DATA') {
    return { ...state, info: action.payload };
  }
  return state;
}
