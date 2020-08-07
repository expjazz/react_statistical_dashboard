import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

const StyledSelect = styled.select.attrs({
  className: 'w-25',
})``;

export default function SelectTag(props) {
  const dispatch = useDispatch();
  const { content, action, value } = props;
  return (
    <StyledSelect value={value} onChange={e => dispatch({ type: action, payload: e.target.value })}>
      {content.map((network, ind) => (
        <option key={ind} value={network}>
          {network}
        </option>
      ))}
    </StyledSelect>
  );
}
