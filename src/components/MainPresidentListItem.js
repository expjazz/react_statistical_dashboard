import React from 'react';

import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledItem = styled.div.attrs({
  className: 'flex content-around bg-white w-100',
})``;

export default function MainPresidentListItem(props) {
  const { children } = props;
  return (
    <StyledItem>
      {children}
    </StyledItem>
  );
}

MainPresidentListItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
