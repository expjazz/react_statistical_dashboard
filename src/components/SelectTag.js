import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

const StyledSelect = styled.select.attrs({
  className: 'w-25 bg-white flex content-center focus:outline-none',
})`

`;

export default function SelectTag(props) {
  let count = 0;
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
      {content.map(network => {
        count += 1;

        return (
          <option key={count} value={network}>
            {network}
          </option>
        );
      })}
    </StyledSelect>
  );
}

SelectTag.propTypes = {
  content: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])).isRequired,
  action: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  parentState: PropTypes.func,
};
