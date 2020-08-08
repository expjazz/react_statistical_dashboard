import React from 'react';

import styled from 'styled-components';

const StyledItem = styled.div.attrs({
  className: 'flex content-around bg-white w-100',
})``;

export default function MainPresidentListItem(props) {
  return (
    <StyledItem>
      {props.children}
    </StyledItem>
  );
}
