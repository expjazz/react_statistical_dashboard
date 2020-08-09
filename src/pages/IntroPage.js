import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledIntro = styled.div.attrs({
  className: 'w-100 bg-gray-300 flex flex-col content-center items-center justify-center',
})`
  height: 100vh;
  img {
    width: 200px;
    height: 200px;
  }
`;

export default function IntroPage() {
  return (
    <StyledIntro>
      <img src="logo.png" alt="" />
      <h4>Welcome to the Liders of the World dashboard.</h4>
      <p>Here you will find data analisys about the popularity of the world leaders throughout the social media</p>
      <Link to="/index">

        Click here to now more
      </Link>
    </StyledIntro>
  );
}
