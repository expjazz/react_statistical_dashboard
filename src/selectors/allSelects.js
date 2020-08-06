import { createSelector } from 'reselect';

const selectPresident = createSelector(
  state => state.socialData,
  socialData => socialData.info
    .filter(row => row.profile === 'Donald Trump'),
);

const selectMonth = state => state.socialData.info
  .filter(row => row.month === state.filter.month);
export default { selectPresident, selectMonth };

const filtered = state => state.filter;

const selectSocialMedia = createSelector(
  state => state.socialData,
  filtered,
  socialData => socialData.info.filter(row => {
    switch (filtered.socialMedia) {
      case 'instagram':
        if (row.month === filtered.month) {
          return [row.profile, row.insta_followers, row.insta_number_likes, row.insta_number_comments];
        }
      default:
        return socialData;
    }
  }),
);
