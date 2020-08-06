export default function location(state = {}, action) {
  if (action.type === 'GET_SOCIAL') {
    return action.payload;
  }
  return state;
}
