import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';

const StyledPresidentCard = styled.div.attrs({
  className: 'w-4/5  flex justify-around bg-pink-600 mx-auto h-10 rounded align-center items-center shadow-xs opacity-90',
})`
  & {
    .center {
      ${tw`flex`}
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
  return (
    <StyledPresidentCard>
      <div className="left">Donald Trump</div>
      <div className="center">
        <div className="insta">
          <div className="content">
            <div className="title">
              <p>  Likes </p>
              900
            </div>
            <div className="sub">
              <p>  Followers </p>
              300
            </div>
          </div>
        </div>

      </div>

      <div className="rigth">
        Some content
      </div>
    </StyledPresidentCard>
  );
}

// const Test = styled.div.attrs({
//   className: 'w-full bg-purple-300 h-screen flex flex-col items-center justify-center',
// })`
//   & {
//     h1 {
//       ${tw`font-sans text-6xl bg-red-500 font-hairline text-6xl text-teal-500`}
//     }
//     p {
//       ${tw`text-gray-700 text-lg`}
//     }
//     h2 {
//       ${tw`text-2xl font-hairline mt-5 text-teal-500`}
//     }
//     ul {
//       ${tw`inline-flex`}
//     }
//     li {
//       ${tw`mr-5`}
//     }
//     a {
//       ${tw`text-blue-500 hover:text-gray-500 hover:underline`}
//     }
//   }
// `;
