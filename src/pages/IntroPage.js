import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import tw from 'tailwind.macro';

const StyledIntro = styled.div.attrs({
  className: 'w-100 bg-gray-300 flex flex-col content-center items-center justify-center',
})`
  height: 100vh;

  img {
    width: 200px;
    height: 200px;
  }

  p {
    ${tw`px-48 text-center`}
  }

`;

export default function IntroPage() {
  return (
    <StyledIntro>
      <img src="logo.png" alt="" />
      <h4>Welcome to the Leaders of the World dashboard.</h4>
      <p>
        Welcome to the Leaders of the World dashboard.
        Here you will find data analysis about the popularity of the world leaders throughout the social media. The data is fake as the goal of this is showcase a possible and viable react application

        Click here to know moren

      </p>
      <Link to="/index">

        Click here to now more
      </Link>
    </StyledIntro>
  );
}
