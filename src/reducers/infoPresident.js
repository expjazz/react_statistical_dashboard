export default function getInfoPresident(state = { president: 'Donald Trump' }, action) {
  if (action.type === 'GET_INFO_PRESIDENT') {
    console.log('here');
    console.log(action);
    return { ...state, president: action.payload };
  }
  return state;
}
