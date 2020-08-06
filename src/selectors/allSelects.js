import { createSelector } from 'reselect';

const selectPresident = createSelector(
  state => state.socialData,
  socialData => socialData.info
    .filter(row => row.profile === 'Donald Trump'),
);

const selectMonth = state => state.socialData.info
  .filter(row => row.month === state.filter.month);
export default { selectPresident, selectMonth };
