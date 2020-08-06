export default state => state.socialData.info
  .filter(row => row.profile === state.filter.president);
