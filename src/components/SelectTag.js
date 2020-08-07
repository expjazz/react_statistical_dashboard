import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

const StyledSelect = styled.select.attrs({
  className: 'w-25',
})``;

export default function SelectTag(props) {
  const dispatch = useDispatch();
  let handleChange;
  const {
    content, action, value, parentState,
  } = props;
  if (parentState) {
    handleChange = e => parentState(e);
  } else {
    handleChange = e => {
      dispatch({ type: action, payload: e.target.value });
    };
  }

  return (
    <StyledSelect value={value} onChange={e => handleChange(e)}>
      {content.map((network, ind) => (
        <option key={ind} value={network}>
          {network}
        </option>
      ))}
    </StyledSelect>
  );
}
