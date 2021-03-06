import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import PropTypes from 'prop-types';

const StyledTr = styled.tr.attrs({
  className: 'w-100 bg-gray-300 border-gray-500 border-t-2 border-b-2',
})`
  & {
    th {
      color: gray;
      text-transform: uppercase;
      font-weight: 300;
      ${tw`cursor-pointer`}
    }
  }
`;

export default function TopTableShowData(props) {
  const { sortBy } = props;
  return (
    <StyledTr>
      <th>President</th>
      <th onClick={e => sortBy(e.target.innerText)}>Followers</th>
      <th onClick={e => sortBy(e.target.innerText)}>Likes</th>
      <th onClick={e => sortBy(e.target.innerText)}>Comments</th>
      <th onClick={e => sortBy(e.target.innerText)}>Posts</th>
    </StyledTr>
  );
}

TopTableShowData.propTypes = {
  sortBy: PropTypes.func.isRequired,
};
