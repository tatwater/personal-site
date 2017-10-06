import React from 'react';
import Link from 'gatsby-link';
import styled, {keyframes} from 'styled-components';

import logo from '../assets/logo.svg';

const fadeIn = keyframes`
  from {
    left: 5px;
    opacity: 0;
  }
  to {
    left: 0;
    opacity: 1;
  }
`;

const HeaderWrapper = styled.div`
  align-items: flex-end;
  display: flex;
  height: calc((100vh - 60px) / 2);

  @media screen and (orientation: portrait) and (min-height: 900px),
         screen and (orientation: landscape) and (min-width: 900px) {
    height: 200px;
  }
  @media screen and (orientation: landscape) and (min-height: 900px) {
    height: 220px;
  }
`;
const Logo = styled.img`
  animation: ${fadeIn} .3s ease;
  animation-delay: .1s;
  animation-fill-mode: both;
  height: 130px;
  margin-left: 30px;

  @media screen and (orientation: portrait) and (min-height: 900px),
         screen and (orientation: landscape) and (min-width: 900px) {
    height: 146px;
    margin-left: 0;
  }
`;
const Name = styled.h1`
  color: #34495e;
  font-family: 'Roboto Mono';
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  position: absolute;
    top: 0;
    left: 20px;
  transform: rotate(-90deg)
             translateX(calc( (100vh - 55px) / -2 ));
  transform-origin: 0 0;
  width: calc( (100vh - 55px) / 2 );

  a {
    animation: ${fadeIn} .3s ease;
    animation-delay: .3s;
    animation-fill-mode: both;
    color: inherit;
    padding-left: 0;
    position: relative;
    text-decoration: none;
    transition: padding-left .3s ease .1s;
  }

  @media (hover: hover) {
    &:hover {
      a {
        transition: padding-left .3s ease 0s;
        padding-left: 10px;
      }
      div::after {
        transition: padding-left .3s ease .1s;
        padding-left: 10px;
      }
    }
  }

  @media screen and (orientation: portrait) and (min-height: 900px),
         screen and (orientation: landscape) and (min-width: 900px) {
    font-size: 18px;
    left: 30px;
    transform: rotate(-90deg)
               translateX(-202px);
    width: 202px;
  }
  @media screen and (orientation: landscape) and (min-height: 900px) {
    transform: rotate(-90deg)
               translateX(-222px);
    width: 222px;
  }
  @media screen and (min-width: 1280px) {
    left: 60px;
  }
`;
const Line = styled.div`
  animation: ${fadeIn} .3s ease;
  animation-delay: .2s;
  animation-fill-mode: both;
  background: #34495e;
  height: 2px;
  position: absolute;
    top: 50%;
    right: 0;
    left: 0;
  z-index: -2;

  &::after {
    background: #fff;
    box-sizing: content-box;
    content: '';
    padding-left: 0;
    position: absolute;
      top: -1px;
      bottom: -1px;
      left: 0;
    transition: padding-left .3s ease 0s;
    width: 150px;
    z-index: -1;

    @media screen and (orientation: portrait) and (min-height: 900px),
           screen and (orientation: landscape) and (min-width: 900px) {
      width: 170px;
    }
  }
`;

const Header = () => (
  <HeaderWrapper>

    <Logo src={ logo } alt='Teagan Atwater brand logo' />

    <Name>
      <Line />
      <Link to='/'>Teagan Atwater</Link>
    </Name>

  </HeaderWrapper>
);

export default Header;
