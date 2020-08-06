const defaultState = {
  socialMedia: '',
  president: '',
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
    default:
      return state;
  }
};
