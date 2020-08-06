// eslint-disable-next-line import/prefer-default-export
export const fetchData = () => async dispatch => {
  const res = await fetch('http://localhost:3000/facebook');
  const data = await res.json();
  dispatch({
    type: 'FETCH_DATA', payload: data,
  });
};
