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
  (socialData, filter) => socialData.info.filter(row => {
    switch (filter.socialMedia) {
      case 'instagram':
        if (row.month === filter.month) {
          console.log('here');
          return [row.profile, row.insta_followers, row.insta_number_likes, row.insta_number_comments];
        }
        break;
      default:
        return socialData;
    }
  }),
);

export default { selectPresident, selectMonth, selectSocialMedia };
