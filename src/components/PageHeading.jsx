import React from 'react';
import Link from 'gatsby-link';
import styled, {keyframes} from 'styled-components';

import { Animations } from '../assets/helpers';


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
