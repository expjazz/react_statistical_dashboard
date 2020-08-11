const setSocialMediaFilter = (content = '') => ({
  type: 'SET_SOCIAL_MEDIA_FILTER',
  payload: content,
});

const setPresidentFilter = (content = '') => ({
  type: 'SET_PRESIDENT_FILTER',
  payload: content,
});

const setMonthFilter = (content = '') => ({
  type: 'SET_MONTH_FILTER',
  payload: content,
});

export default { setSocialMediaFilter, setPresidentFilter, setMonthFilter };
