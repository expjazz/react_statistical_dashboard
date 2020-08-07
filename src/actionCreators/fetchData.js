// eslint-disable-next-line import/prefer-default-export
export const fetchData = () => async dispatch => {
  try {
    const res = await fetch('http://localhost:3000/facebook');
    const data = await res.json();
    dispatch({
      type: 'FETCH_DATA', payload: data,
    });
  } catch (e) {
    console.log(e);
  }
};
