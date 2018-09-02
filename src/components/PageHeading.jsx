import React from 'react';
import Link from 'gatsby-link';
import styled, {keyframes} from 'styled-components';

const Animations = {
  bounce: keyframes`
    0% {
      transform: translate(0, -5px);
    }
    50% {
      transform: translate(0, 5px);
    }
    100% {
      transform: translate(0, -5px);
    }
  `,
  fadeIn: keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  `,
  loadHeadline: keyframes`
    from {
      left: -50px;
      opacity: 0;
    }
    to {
      left: 0;
      opacity: 1;
    }
  `,
  loadName: keyframes`
    from {
      padding: 0 8px 0 10px;
    }
    to {
      padding: 0 6px 0 0;
    }
  `,
  loadNameLink: keyframes`
    from {
      left: 5px;
      opacity: 0;
    }
    to {
      left: 0;
      opacity: 1;
    }
  `,
  loadTag: keyframes`
    from {
      left: -5px;
      opacity: 0;
    }
    to {
      left: 0;
      opacity: 1;
    }
  `,
}


const HeadlineWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  grid-area: headline;
  flex-direction: column;
  justify-content: center;

  a {
    animation: ${Animations.fadeIn} .4s ease;
    animation-delay: .6s;
    animation-fill-mode: both;
  }
`;

const PageHeading = ({children}) => (
  <HeadlineWrapper>
    {children}
  </HeadlineWrapper>
);

export default PageHeading;
