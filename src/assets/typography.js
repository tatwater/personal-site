import styled from 'styled-components';
import Link from 'gatsby-link';

import { Animations, Breakpoints, Colors, Fonts } from './helpers';


const secondUnwrapPageFits = '(min-height: 600px)';

export const Headline = styled.h2`
  animation-delay: ${props => props.delay ? props.delay : '.5s'};
  animation-duration: .4s;
  animation-easing-function: ease;
  animation-fill-mode: both;
  animation-name: ${props => props.slide ? Animations.loadHeadline : Animations.fadeIn};
  color: ${Colors.brandPrimary};
  display: flex;
  flex-direction: column;
  font-family: ${Fonts.sans};
  font-size: 30px;
  font-weight: 600;
  letter-spacing: .01em;
  line-height: 1.2em;
  margin: 20px 0;
  position: relative;

  & + h2 {
    margin-top: -12px;
  }

  @media screen and (min-width: 700px) {
    font-size: 36px;
    font-weight: 500;
    margin: 30px 0;
    width: 75%;

    & + h2 {
      margin-top: -22px;
    }
  }
  @media ${Breakpoints.secondFooterUnwrapWidth} and
         ${secondUnwrapPageFits} {
    font-size: 44px;
    line-height: 1.33em;
    max-width: 600px;
  }
  @media ${Breakpoints.secondFooterFontIncrease} {
    font-size: 52px;
    line-height: 1.4em;
    margin: 36px 0;
    max-width: 720px;

    & + h2 {
      margin-top: -32px;
    }
  }
`;
export const CTALink = styled(Link)`
  color: ${Colors.brandPrimary};
  display: inline-block;
  font-family: ${Fonts.mono};
  font-size: 14px;
  font-weight: 500;
  letter-spacing: .05em;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  transition: color .2s ease, transform .2s ease;

  &::before {
    content: '';
    display: block;
    height: 11px;
    opacity: .2;
    position: absolute;
      top: 7px;
      right: 22px;
      left: -1px;
    transform: scale(.95);
    transition: background .2s ease, right .2s ease, scale .2s ease;
    z-index: -1;
  }
  &::after {
    content: '→';
    font-family: ${Fonts.sans};
    margin-left: 6px;
    transition: margin-left .2s ease;
  }

  @media (hover: hover) {
    &:hover {
      transform: translate(10px, 0);

      &::before {
        background: ${props => props.color ? props.color : Colors.brandPrimary};
        right: 30px;
        transform: scale(1);
      }
      &::after {
        color: ${props => props.color ? props.color : Colors.brandPrimary};
        margin-left: 12px;
      }
    }
  }
`;
