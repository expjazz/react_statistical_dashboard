// eslint-disable-next-line import/prefer-default-export
export const fetchData = () => async dispatch => {
  const res = await fetch('https://rocky-gorge-69214.herokuapp.com/facebook');
  const data = res.json();
  dispatch({
    type: 'FETCH_DATA', payload: data,
  });
};
