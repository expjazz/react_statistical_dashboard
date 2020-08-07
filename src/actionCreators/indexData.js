// eslint-disable-next-line import/prefer-default-export
export const setIndexDataTwitter = (content = '') => ({
  type: 'SET_INDEX_DATA_TWITTER',
  payload: content,
});

export const setIndexDataFacebook = (content = '') => ({
  type: 'SET_INDEX_DATA_FACEBOOK',
  payload: content,
});

export const setIndexDataInstagram = (content = '') => ({
  type: 'SET_INDEX_DATA_INSTAGRAM',
  payload: content,
}
);
