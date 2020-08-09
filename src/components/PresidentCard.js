import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';

const StyledPresidentCard = styled.tr.attrs({
  className: 'text-center',
})`
  & {
    .left {
      ${tw`w-1/6`}
    }
    .center {
      ${tw`flex w-100`}
    }
    .content {
      ${tw`flex`}
    }
    .content > div {
      ${tw`flex flex-col`}
    }
  }

`;
export default function PresidentCard(props) {
  const {
    president, followers, likes, comments, posts,
  } = props;
  return (
    <StyledPresidentCard>
      <td>
        {president}
      </td>
      <td>
        {followers}
      </td>
      <td>
        {likes}
      </td>
      <td>
        {comments}
      </td>
      <td>
        {posts}
      </td>
    </StyledPresidentCard>
  );
}
