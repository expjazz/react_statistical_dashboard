import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { setPresidentFilter } from '../actionCreators/filters';

const StyledPresidentCard = styled.tr.attrs({
  className: 'text-center',
})`
  z-index: -1;
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
    president, followers, likes, comments, posts, back,
  } = props;
  const dispatch = useDispatch();
  const changePresidentFilter = () => {
    dispatch(setPresidentFilter(president));
  };
  const fluidBg = back % 2 === 0 ? 'bg-gray-100' : '';
  return (
    <StyledPresidentCard className={fluidBg}>

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

PresidentCard.propTypes = {
  president: PropTypes.string.isRequired,
  followers: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf(['-'])]).isRequired,
  likes: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf(['-'])]).isRequired,
  comments: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf(['-'])]).isRequired,
  posts: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf(['-'])]).isRequired,
  back: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf(['-'])]).isRequired,

};
