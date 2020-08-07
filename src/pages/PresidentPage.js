import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import allSelectors from '../selectors/allSelects';
import PresidentLineBar from '../components/PresidetLineBar';
import { fetchPresidentData } from '../actionCreators/fetchPresidentData';

export default function PresidentPage() {
  const { selectPresident } = allSelectors;
  const dispatch = useDispatch();
  const presidentData = useSelector(state => state.getInfoPresident);
  const presidentName = useSelector(selectPresident);
  console.log(presidentData);
  const socialMedia = ['instagram', 'facebook', 'twitter'];
  useEffect(() => {
    dispatch(fetchPresidentData());
  }, [dispatch]);
  const { president } = useParams();
  return (
    <div>
      {president}
      <img src={`${presidentData.president.image}`} alt="" />
      <p>{presidentData.president.text}</p>
      <select name="socialMedia" id="socialMedia" onChange={e => dispatch({ type: 'SET_SOCIAL_MEDIA_FILTER', payload: e.target.value })}>
        {socialMedia.map((network, ind) => (
          <option key={ind} value={network}>
            {network}
          </option>
        ))}

      </select>
      {' '}
      <PresidentLineBar accData={presidentData} />
    </div>
  );
}
