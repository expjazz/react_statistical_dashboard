const defaultState = {
  social: {
    Twitter: [
      ['Followers', 'twitter_fans'],
      ['Posts', 'twitter_number_posts'],
      ['Likes', 'twitter_number_likes'],
      ['Retweets', 'twitter_retweets'],
    ],
  },

};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_INDEX_DATA_TWITTER':
      return {
        ...state,
        social: action.payload,
      };
    case 'SET_INDEX_DATA_FACEBOOK':
      return {
        ...state,
        social: action.payload,
      };
    case 'SET_INDEX_DATA_INSTAGRAM':
      return {
        ...state,
        social: action.payload,
      };
    default:
      return state;
  }
};
