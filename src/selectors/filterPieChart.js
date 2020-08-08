import { createSelector } from 'reselect';

const selectPieChartData = createSelector(
  state => state.socialData, state => state.pieChartAll,
  (socialData, pieChartAll) => {
    const { currentQueryPresidents } = pieChartAll;
    console.log(currentQueryPresidents);
    let data = [];
    currentQueryPresidents.forEach(president => {
      data = [...data, (socialData.info.filter(row => row.profile === president))];
    });
    const obj = {
      all: 0,
      inst: 0,
      fb: 0,
      twitter: 0,
    };
    data.forEach(president => president.forEach(row => {
      obj.all += ((row.insta_followers || 0) + (row.twitter_fans || 0) + (row.fb_followers || 0)) / 1000000;
      obj.inst += (row.insta_followers || 1) / 1000000;
      obj.fb += (row.fb_followers || 1) / 1000000;
      obj.twitter += (row.twitter_fans || 1) / 1000000;
    }));
    obj.inst = (obj.inst * 100) / obj.all;
    obj.fb = (obj.fb * 100) / obj.all;
    obj.twitter = (obj.twitter * 100) / obj.all;
    return obj;
  },
);

export default { selectPieChartData };
