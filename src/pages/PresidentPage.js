import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import allSelectors from '../selectors/allSelects';
import PresidentLineBar from '../components/PresidetLineBar';

export default function PresidentPage() {
  const { selectPresident } = allSelectors;
  const presidentData = useSelector(selectPresident);
  const dispatch = useDispatch();
  console.log(presidentData);
  const socialMedia = ['instagram', 'facebook', 'twitter'];

  const { president } = useParams();
  return (
    <div>
      {president}
      <select name="socialMedia" id="socialMedia" onChange={e => dispatch({ type: 'SET_SOCIAL_MEDIA_FILTER', payload: e.target.value })}>
        {socialMedia.map((network, ind) => (
          <option key={ind} value={network}>
            {network}
          </option>
        ))}

      </select>
      {' '}
      <PresidentLineBar />
    </div>
  );
}
