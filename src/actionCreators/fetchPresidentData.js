/* eslint-disable import/prefer-default-export */
export const fetchPresidentData = () => async (dispatch, getState) => {
  const { filter: { president } } = getState();
  try {
    const res = await fetch(`https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=${president}&origin=*`);
    const json = await res.json();
    const temp = Object.keys(json.query.pages);
    const data = json.query.pages[temp[0]].extract;
    dispatch({
      type: 'GET_INFO_PRESIDENT', payload: data,
    });
  } catch (e) {
    console.log(e);
  }
};
