import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { Link } from 'react-router-dom';

const StyledNav = styled.nav.attrs({
  className: 'w-100 bg-white flex items-baseline relative',
})`
  & {
    a {
      margin-right: 20px;
    }

    ::before {
      height: 2px;
      background: #ababab2e;
      content: "";
      width: 100%;
      bottom: 0;
      position: absolute;
      transform: translateX(-50%);
      transition: width 0.4s;
      transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
      left: 50%;
      margin-top: 2rem;
    }

    .left {
      ${tw`flex`}
    }

    .links {
      ${tw`flex items-center`}
    }

    .logo {
      width: 50px;
    }
  }
`;
export default function TopNav() {
  return (
    <StyledNav>
      <div className="left">
        <Link to="/index">

          <div className="logo">
            <img src="logo.png" alt="" />
          </div>
        </Link>
        <div className="links">
          <Link to="/index">
            Home
          </Link>
          <Link to="/dashboard">

            Dashboard
          </Link>
        </div>
      </div>
    </StyledNav>
  );
}
