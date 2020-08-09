// eslint-disable-next-line import/prefer-default-export
export const fetchData = () => async dispatch => {
  try {
    const res = await fetch('https://rocky-gorge-69214.herokuapp.com/facebook');
    const data = await res.json();
    dispatch({
      type: 'FETCH_DATA', payload: data,
    });
  } catch (e) {
    console.log(e);
  }
};
