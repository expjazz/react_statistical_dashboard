/* eslint-disable import/prefer-default-export */
export const setSocialMediaFilter = (content = '') => ({
  type: 'SET_SOCIAL_MEDIA_FILTER',
  payload: content,
});

export const setPresidentFilter = (content = '') => ({
  type: 'SET_PRESIDENT_FILTER',
  payload: content,
});
