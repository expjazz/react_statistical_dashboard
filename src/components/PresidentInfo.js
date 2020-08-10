import React, { useEffect } from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchPresidentData } from '../actionCreators/fetchPresidentData';

const StyledPresidentInfo = styled.div.attrs({
  className: 'w-100 relative',
})`
  .innerBg {
    width: 100%;
    top: 0;
    left: 0;
    height: 50%;
    ${tw`bg-gray-100 absolute`}
    &:after {
      height: 100px;
      bottom: -100px;
      ${tw`bg-gray-100 absolute`}

      content: "";
      width: 25%;
      transform: skewX(50deg);
    

      left: 50%;
      }
    &:before {
      height: 100px;
      bottom: -100px;
      ${tw`bg-gray-100 absolute`}
      content: "";
      width: 30%;
    

      left: 70%;
    }
    }

  }
  .contentShow {
    position: absolute;
    
    top: 0;
    left: 0;
  }

  .content {
    ${tw`pt-16 mb-32 px-32`}

  }
  img {
    float: right;
    ${tw`shadow-xl border-4 rounded-full`}
  }
  .title, .bottom {
  }
  .title p {
    font-size: 2rem;
  }
`;
export default function PresidentInfo() {
  const { president } = useParams();

  const dispatch = useDispatch();
  const presidentData = useSelector(state => state.getInfoPresident);
  useEffect(() => {
    dispatch(fetchPresidentData());
  }, [dispatch]);
  return (
    <StyledPresidentInfo>

      <div className="content opacity-0">
        <div className="innerBg" />

        <div className="title">

          <p>
            {president}
          </p>
        </div>
        <div className="bottom">

          <img src={`${presidentData.president.image}`} alt="" />
          <p>{presidentData.president.text}</p>
        </div>
      </div>
      <div className="innerBg" />
      <div className="content contentShow">

        <div className="title">

          <p>
            {president}
          </p>
        </div>
        <div className="bottom">

          <img src={`${presidentData.president.image}`} alt="" />
          <p>{presidentData.president.text}</p>
        </div>
      </div>
    </StyledPresidentInfo>
  );
}
