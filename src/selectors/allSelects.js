const selectPresident = state => state.socialData.info
  .filter(row => row.profile === state.filter.president);

const selectMonth = state => state.socialData.info
  .filter(row => row.month === state.filter.month);
export default { selectPresident, selectMonth };
