import { createSelector } from 'reselect';

const selectPresident = createSelector(
  state => state.socialData, state => state.filter,
  (socialData, filter) => socialData.info
    .filter(row => row.profile === filter.president).map(row => {
      switch (filter.socialMedia) {
        case 'instagram':
          return [row.profile, row.insta_followers, row.insta_number_likes, row.insta_number_comments, row.insta_number_posts, row.month];
        case 'facebook':
          return [row.profile, row.fb_followers, row.fb_number_likes, row.fb_number_comments, row.fb_number_posts, row.month];
        case 'twitter':
          return [row.profile, row.twitter_fans, row.twitter_number_likes, row.twitter_retweets, row.twitter_number_posts, row.month];
        default:
          return socialData;
      }
    }),
);

const selectMonth = createSelector(
  state => state.socialData,
  state => state.filter,
  (socialData, filter) => socialData.info.filter(row => row.month === filter.month),
);

const selectSocialMedia = createSelector(
  state => state.socialData, state => state.filter,
  (socialData, filter) => socialData.info.filter(row => row.month === filter.month).map(row => {
    switch (filter.socialMedia) {
      case 'instagram':
        return [row.profile, row.insta_followers, row.insta_number_likes, row.insta_number_comments];

      case 'facebook':
        return [row.profile, row.fb_followers, row.fb_number_likes, row.fb_number_comments, row.fb_number_posts];
      case 'twitter':
        return [row.profile, row.twitter_fans, row.twitter_number_likes, row.twitter_retweets, row.twitter_number_posts];
      default:
        return socialData;
    }
  }),
);

const selectOnlyPresident = createSelector(
  state => state.socialData, state => state.filter,
  (socialData, filter) => socialData.info.filter(row => row.profile === filter.president),
);

const clearData = createSelector(
  state => state.socialData, state => state.filter,
  (socialData, filter) => {
    const data = socialData.info.filter(row => row.profile === filter.president);
    const arr = [];
    const obj = {
      all: 0,
      inst: 0,
      fb: 0,
      twitter: 0,
    };
    const flag = false;
    data.forEach(row => {
      obj.all += ((row.insta_followers || 0) + (row.twitter_fans || 0) + (row.fb_followers || 0)) / 1000000;
      obj.inst += (row.insta_followers || 1) / 1000000;
      obj.fb += (row.fb_followers || 1) / 1000000;
      obj.twitter += (row.twitter_fans || 1) / 1000000;
    });
    obj.inst = (obj.inst * 100) / obj.all;
    obj.fb = (obj.fb * 100) / obj.all;
    obj.twitter = (obj.twitter * 100) / obj.all;
    return obj;
  },

);

export default {
  selectPresident, selectMonth, selectSocialMedia, selectOnlyPresident, clearData,
};

// const selectPresident = createSelector(
//   state => state.socialData, state => state.filter,
//   (socialData, filter) => socialData.info
//     .filter(row => row.profile === filter.president).map(row => {

//     }),
// );
