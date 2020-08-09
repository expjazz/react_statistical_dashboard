import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';

const StyledTr = styled.tr.attrs({
  className: 'w-100',
})`
  & {

  }
`;

export default function TopTableShowData() {
  return (
    <StyledTr>
      <th>President</th>
      <th>Followers</th>
      <th>Likes</th>
      <th>Comments</th>
      <th>Posts</th>
    </StyledTr>
  );
}
