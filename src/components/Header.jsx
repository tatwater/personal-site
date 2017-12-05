import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import logo from '../assets/images/logo.svg';

import { Animations, Breakpoints, Colors, Fonts } from '../assets/helpers';


const HeaderWrapper = styled.div`
  align-items: flex-end;
  display: flex;
  grid-area: header;
  justify-content: flex-start;
  position: relative;
`;
const Line = styled.div`
  animation: ${Animations.fadeIn} .3s ease;
  animation-delay: .2s;
  animation-fill-mode: both;
  background: ${Colors.brandPrimary};
  content: '';
  height: 100%;
  opacity: 0;
  position: absolute;
    top: 0;
    left: -8px;
  width: 2px;

  @media ${Breakpoints.secondFooterUnwrapWidth} {
    left: -28px;
  }
  @media ${Breakpoints.secondFooterFontIncrease} {
    left: -38px;
  }
`;
const Name = styled.h1`
  align-items: center;
  animation: ${Animations.loadName} .3s ease;
  animation-delay: .3s;
  animation-fill-mode: backwards;
  background: #fff;
  color: ${Colors.brandPrimary};
  display: flex;
  font-family: ${Fonts.mono};
  font-size: 16px;
  font-weight: 400;
  height: 16px;
  margin: 0;
  padding: 0 6px 0 0;
  position: absolute;
    bottom: 0;
    left: 0;
  transform: rotate(-90deg);
  transform-origin: 0 100%;
  transition: padding .3s ease .1s;

  @media (hover: hover) {
    &:hover {
      transition: padding .3s ease 0s;
      padding: 0 10px;
    }
  }

  @media ${Breakpoints.secondFooterUnwrapWidth} {
    font-size: 18px;
    left: -20px;
  }
  @media ${Breakpoints.secondFooterFontIncrease} {
    left: -30px;
  }
`;
const NameLink = styled(Link)`
  animation: ${Animations.loadNameLink} .3s ease;
  animation-delay: .3s;
  animation-fill-mode: both;
  color: inherit;
  opacity: 0;
  position: relative;
    left: 5px;
  text-decoration: none;
`;
const Logo = styled.img`
  animation: ${Animations.fadeIn} .3s ease;
  animation-delay: .1s;
  animation-fill-mode: both;
  height: 100px;
  margin: 0 12px 0 20px;
  opacity: 0;

  @media ${Breakpoints.afterFirstFooterUnwrapWidth} {
    height: 120px;
  }
  @media ${Breakpoints.secondFooterUnwrapWidth} {
    height: 140px;
    margin-left: 5px;
  }
  @media ${Breakpoints.secondFooterFontIncrease} {
    margin-left: 0;
  }
`;
const Tag = styled.span`
  align-items: center;
  animation: ${Animations.loadTag} .3s ease;
  animation-delay: .3s;
  animation-fill-mode: both;
  color: ${Colors.brandPrimary};
  display: flex;
  font-family: ${Fonts.sans};
  font-size: 11px;
  height: 20px;
  letter-spacing: .07em;
  padding: 0 10px;
  position: relative;
  text-transform: uppercase;

  &::before {
    border: 1px solid ${Colors.brandPrimary};
    content: '';
    position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    transform: skew(13deg);
  }

  @media ${Breakpoints.afterFirstFooterUnwrapWidth} {
    font-size: 12px;
    height: 21px;
  }
  @media ${Breakpoints.secondFooterUnwrapWidth} {
    font-size: 13px;
    height: 22px;
  }
`;


const Header = ({tag}, {secondUnwrapPageFits}) => (
  <HeaderWrapper>
    <Line adjust={secondUnwrapPageFits} />
    <Name adjust={secondUnwrapPageFits}>
      <NameLink to='/'>Teagan Atwater</NameLink>
    </Name>
    <Logo adjust={secondUnwrapPageFits} src={logo} alt='T A Logo' />
    {tag ? <Tag>{tag}</Tag> : null}
  </HeaderWrapper>
);

export default Header;
