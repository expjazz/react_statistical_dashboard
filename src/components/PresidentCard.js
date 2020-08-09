import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setPresidentFilter } from '../actionCreators/filters';

const StyledPresidentCard = styled.tr.attrs({
  className: 'text-center',
})`
  & {
    td {
      color: gray;
    }
    .president {
      color: black;
    }

    a {
      ${tw`text-center`}
    }
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
  const dispatch = useDispatch();
  const changePresidentFilter = () => {
    dispatch(setPresidentFilter(president));
  };
  return (
    <StyledPresidentCard>

      <td>
        <Link to={`/${president}`} className="president" onClick={changePresidentFilter}>
          {president}
        </Link>
      </td>
      <td>
        <Link to={`/${president}`}>

          {followers}
        </Link>

      </td>
      <td>
        <Link to={`/${president}`}>

          {likes}
        </Link>

      </td>
      <td>
        <Link to={`/${president}`}>

          {comments}
        </Link>

      </td>
      <td>
        <Link to={`/${president}`}>

          {posts}
        </Link>

      </td>
    </StyledPresidentCard>
  );
}
