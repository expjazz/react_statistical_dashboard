import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';

const StyledBottomNav = styled.div.attrs({
  className: 'w-100 flex justify-center',
})`
  &{
    button {
      position: relative;
      outline: none;
      margin: 0 3rem;
      &:after {
      height: 4px;
      bottom: 0;
      background: #0d3ac3e0;
      content: "";
      width: 0;
      position: absolute;
      transform: translateX(-50%);
      transition: width 0.4s;
      transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
      left: 50%;
      margin-top: 2rem;
      }
      &:hover,
    &:focus {
      outline: none;
      &:after {
        width: 100%;
      }
     
    }
  }

`;

export default function BottomNav() {
  const handleData = e => {
    e.preventDefault();
    console.log(e.target.innerText);
  };
  return (
    <StyledBottomNav>
      <button type="submit" onClick={handleData}>Twitter</button>
      <button type="submit" onClick={handleData}>Facebook</button>
      <button type="submit" onClick={handleData}>Instagram</button>

    </StyledBottomNav>
  );
}
