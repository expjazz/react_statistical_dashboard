import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { Link } from 'react-router-dom';
import TopNav from './TopNav';
import BottomNav from './BottomNav';

const StyledNav = styled.nav.attrs({
  className: 'w-100 bg-white flex',
})`
  & {
    .left {
      ${tw`flex`}
    }
    .logo {
      width: 50px;
    }
  }
`;

export default function Navbar() {
  return (
    <>
      <TopNav />
      <BottomNav />
    </>
  );
}
