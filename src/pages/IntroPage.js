import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';

const StyledIntro = styled.div.attrs({
  className: 'w-100 bg-red-800 flex flex-col',
})`

`;

export default function IntroPage() {
  return (
    <StyledIntro>
      <h4>Welcome to the Liders of the World dashboard.</h4>
      <p>Here you will find data analisys about the popularity of the world leaders throughout the social media</p>
      <button>Click here to now more</button>
    </StyledIntro>
  );
}
