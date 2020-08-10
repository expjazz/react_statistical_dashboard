/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
export const fetchPresidentData = () => async (dispatch, getState) => {
  const { filter: { president } } = getState();
  try {
    let image = null;
    const [rawText, rawImage] = await Promise
      .all([fetch(`https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=${president}&origin=*`),
        fetch(`https://en.wikipedia.org/w/api.php?action=query&format=json&formatversion=2&prop=pageimages|pageterms&piprop=original&titles=${president}&origin=*`)]);
    const [textParsed, imageParsed] = await Promise.all([rawText.json(), rawImage.json()]);
    const tempImage = Object.keys(imageParsed.query.pages)[0];
    // console.log(imageParsed.query.pages[tempImage].original.source);
    // eslint-disable-next-line no-constant-condition
    if (false) {
      // this is disabled because of the
      //  limit of requests (only 300). I will enable after / if approved
      const googleImg = await fetch(`https://google-search3.p.rapidapi.com/api/v1/images/q=${president}`, {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'google-search3.p.rapidapi.com',
          'x-rapidapi-key': 'noKey',
        },
      });
      const googleJson = await googleImg.json();
      image = googleJson.image_results[0].image.src;
    } else {
      image = imageParsed.query.pages[tempImage].original.source;
    }
    // console.log(image);
    const temp = Object.keys(textParsed.query.pages);
    const data = textParsed.query.pages[temp[0]].extract;
    dispatch({
      type: 'GET_INFO_PRESIDENT', payload: { text: data, image },
    });
  } catch (e) {
    console.log(e);
  }
};
