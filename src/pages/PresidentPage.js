import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import allSelectors from '../selectors/allSelects';

export default function PresidentPage() {
  const { selectPresident } = allSelectors;
  const presidentData = useSelector(selectPresident);
  console.log(presidentData);
  const { president } = useParams();
  return (
    <div>
      {president}
    </div>
  );
}
