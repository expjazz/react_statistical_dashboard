import { createSelector } from 'reselect';

const selectPresident = createSelector(
  state => state.socialData,
  socialData => socialData.info
    .filter(row => row.profile === 'Donald Trump'),
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

export default { selectPresident, selectMonth, selectSocialMedia };
