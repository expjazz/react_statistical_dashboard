const testStore = {
  socialData: {
    info: [{
      category: 'Líderes Mundiais', profile: 'Donald Trump', month: 1, year: 19, fb_followers: 23797811, fb_number_likes: 5412750, fb_number_comments: 841780, fb_number_posts: 118, insta_followers: null, insta_number_comments: 832356, insta_number_posts: 78, insta_number_likes: 25339359, twitter_fans: 57913532, twitter_number_posts: 362, twitter_number_likes: 34713835, twitter_retweets: 7894570,
    }, {
      category: 'Líderes Mundiais', profile: 'Narendra Modi', month: 1, year: 19, fb_followers: 43387498, fb_number_likes: 2528896, fb_number_comments: 400407, fb_number_posts: 55, insta_followers: null, insta_number_comments: null, insta_number_posts: null, insta_number_likes: null, twitter_fans: 45310374, twitter_number_posts: 357, twitter_number_likes: 5396775, twitter_retweets: 1212136,
    }, {
      category: 'Líderes Mundiais', profile: 'Jair Bolsonaro', month: 1, year: 19, fb_followers: 9208943, fb_number_likes: 10498746, fb_number_comments: 743907, fb_number_posts: 131, insta_followers: 10095461, insta_number_comments: 1908761, insta_number_posts: 111, insta_number_likes: 75975846, twitter_fans: 3224983, twitter_number_posts: 288, twitter_number_likes: 9514517, twitter_retweets: 1304953,
    }],
  },
  filter: {
    president: 'Donald Trump', month: 1, socialMedia: 'instagram', currentSort: 1,
  },
  getInfoPresident: { president: 'Donald Trump' },
  indexDataReducer: { social: { Twitter: [['Followers', 'twitter_fans'], ['Posts', 'twitter_number_posts'], ['Likes', 'twitter_number_likes'], ['Retweets', 'twitter_retweets']] } },
  lineGraphAll: { currentQuery: ['Followers', 'twitter_fans'], presidentInChart: ['Donald Trump'] },
  pieChartAll: { currentQueryPresidents: ['Donald Trump'] },
  commonData: { months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'] },
};

export { testStore };
