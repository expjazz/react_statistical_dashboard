import React from 'react';
import styled from 'styled-components';

const StyledSelect = styled.div.attrs({
  className: 'w-25',
})``;

export default function SelectTag() {
  return (
    <StyledSelect onChange={e => dispatch({ type: 'SET_SOCIAL_MEDIA_FILTER', payload: e.target.value })}>
      {socialMedia.map((network, ind) => (
        <option key={ind} value={network}>
          {network}
        </option>
      ))}
    </StyledSelect>
  );
}
