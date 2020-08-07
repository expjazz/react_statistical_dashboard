const defaultState = {
  social: {
    Twitter: {
      Followers: 'twitter_fans',
      Posts: 'twitter_number_posts',
      Likes: 'twitter_number_likes',
      Retweets: 'twitter_retweets',
    },
  },
  // Facebook: {
  //   Followers: 'fb_followers',
  //   Likes: 'fb_number_likes',
  //   Comments: 'fb_number_comments',
  //   Posts: 'fb_number_posts',
  // },
  // Instagram: {
  //   Followers: 'insta_followers',
  //   Comments: 'insta_number_comments',
  //   Posts: 'insta_number_posts',
  //   Likes: 'insta_number_likes',
  // },
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

// const defaultState = {
//   president: 'Donald Trump',
//   month: 1,
//   socialMedia: 'instagram',
// };

// export default (state = defaultState, action) => {
//   switch (action.type) {
//     case 'SET_SOCIAL_MEDIA_FILTER':
//       return {
//         ...state,
//         socialMedia: action.payload,
//       };
//     case 'SET_PRESIDENT_FILTER':
//       return {
//         ...state,
//         president: action.payload,
//       };
//     case 'SET_MONTH_FILTER':
//       return {
//         ...state,
//         month: action.payload,
//       };
//     default:
//       return state;
//   }
// };
