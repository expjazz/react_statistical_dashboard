const defaultState = {
  president: 'Donald Trump',
  month: 1,
  socialMedia: 'instagram',
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_SOCIAL_MEDIA_FILTER':
      return {
        ...state,
        socialMedia: action.payload,
      };
    case 'SET_PRESIDENT_FILTER':
      return {
        ...state,
        president: action.payload,
      };
    case 'SET_MONTH_FILTER':
      return {
        ...state,
        month: action.payload,
      };
    default:
      return state;
  }
};
