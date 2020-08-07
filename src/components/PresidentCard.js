import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';

const StyledPresidentCard = styled.div.attrs({
  className: 'w-4/5  flex justify-around bg-pink-600 mx-auto h-10 rounded align-center items-center shadow-xs opacity-90',
})`
  & {
    .center {
      ${tw`flex`}
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
  const { president, fbFollowers, fbLikes } = props;
  return (
    <StyledPresidentCard>
      <div className="left">
        {president}
      </div>
      <div className="center">
        <div className="insta">
          <div className="content">
            <div className="title">
              <p>  Followers: </p>
              {fbFollowers}
            </div>
            <div className="sub">
              <p>  Likes: </p>
              {fbLikes}
            </div>
          </div>
        </div>

      </div>

      <div className="rigth">
        Some content
      </div>
    </StyledPresidentCard>
  );
}
