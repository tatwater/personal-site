import React from 'react';
import Link from 'gatsby-link';
import styled, {keyframes} from 'styled-components';

import linkedin from '../assets/linkedin.svg';
import angellist from '../assets/angellist.svg';
import github from '../assets/github.svg';
import dribbble from '../assets/dribbble.svg';
import medium from '../assets/medium.svg';
import spotify from '../assets/spotify.svg';
import longarrowdown from '../assets/longarrowdown.svg';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const IconRow = styled.nav`
  align-items: center;
  animation: ${fadeIn} .5s ease;
  animation-delay: 1s;
  animation-fill-mode: both;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  transform: translate(-5px, 0);
  width: calc(100vw - 50px);

  @media screen and (orientation: landscape) {
    margin-bottom: 10px;
  }
  @media screen and (orientation: portrait) and (min-height: 900px),
         screen and (orientation: landscape) and (min-width: 900px) {
    justify-content: center;
    margin-bottom: 0;
    position: fixed;
      top: 50%;
      right: 30px;
    transform: rotate(-90deg) translate(50%, -100%);
    transform-origin: 100% 0;
    width: 100vh;
  }
  @media screen and (min-width: 1280px) {
    right: 50px;
  }
`;
const Social = styled.ul`
  display: flex;
  font-family: 'roboto-mono';
  font-size: 0;
  font-weight: 400;
  list-style-type: none;
  margin: 0;
  padding: 0;

  @media screen and (orientation: portrait) and (min-height: 900px),
         screen and (orientation: landscape) and (min-width: 900px) {
    font-size: 14px;
  }
  @media screen and (orientation: landscape) and (min-height: 1000px) {
    font-size: 16px;
  }
`;
const Media = styled.li`
  color: #34495e;
  height: 40px;
  margin: 0 2px 0 0;
  position: relative;
  transform: scale(1);
  transition: color .2s ease, transform .2s ease;
  width: 40px;

  a {
    align-items: center;
    color: inherit;
    display: flex;
    height: 100%;
    justify-content: center;
    text-decoration: none;
    width: 100%;
  }

  &::before {
    background: ${props => props.color ? props.color : '#34495e'};
    border-radius: 50%;
    content: '';
    height: 0;
    opacity: 0;
    position: absolute;
      top: 50%;
      left: 50%;
    transform: translate(-50%, -50%);
    transition: height .2s ease, opacity .2s ease, width .2s ease;
    width: 0;
    z-index: -1;
  }
  &::after {
    border-left: 5px solid ${props => props.color ? props.color : '#34495e'};
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    content: '';
    height: 0;
    opacity: 0;
    position: absolute;
      bottom: -10px;
      right: 0px;
    transform: rotate(45deg);
    transition: opacity .4s ease, right .4s ease;
    width: 0;
    z-index: -1;
  }

  @media screen and (orientation: portrait) and (min-height: 900px),
         screen and (orientation: landscape) and (min-width: 900px) {
    height: auto;
    margin: 0 40px 0 0;
    width: auto;

    &:last-of-type {
      margin-right: 0;
    }
  }
  @media screen and (orientation: portrait) and (min-height: 900px) and (hover: hover),
         screen and (orientation: landscape) and (min-width: 900px) and (hover: hover) {
    &:hover {
      color: ${props => props.color ? props.color : '#34495e'};
      transform: scale(1.075);

      &::before {
        height: 30px;
        opacity: .1;
        width: 30px;
      }
      &::after {
        opacity: 1;
        right: -12px;
      }
    }
  }
`;
const MediaIcon = styled.img`
  height: 22px;

  @media screen and (orientation: portrait) and (min-height: 900px),
         screen and (orientation: landscape) and (min-width: 900px) {
    height: 0;
  }
`;
// TODO: Animate to indicate downward scroll
const ScrollIndicator = styled.button`
  background: none;
  border: none;
  font-size: 0;
  height: 40px;
  padding: 0;
  width: 40px;

  @media screen and (orientation: portrait) and (min-height: 900px),
         screen and (orientation: landscape) and (min-width: 900px) {
    display: none;
  }
`;

const SocialMediaNav = () => (
  <IconRow>
    <Social>
      <Media color='#0077b5'>
        <a href='https://www.linkedin.com/in/teaganatwater/' target='_blank'>
          <MediaIcon src={ linkedin } alt='LinkedIn' />
          LinkedIn
        </a>
      </Media>
      <Media color='#333'>
        <a href='https://angel.co/teagan-atwater' target='_blank'>
          <MediaIcon src={ angellist } alt='AngelList' />
          AngelList
        </a>
      </Media>
      <Media color='#bd2c00'>
        <a href='https://github.com/tatwater' target='_blank'>
          <MediaIcon src={ github } alt='GitHub' />
          GitHub
        </a>
      </Media>
      <Media color='#ea4c89'>
        <a href='https://dribbble.com/tatwater' target='_blank'>
          <MediaIcon src={ dribbble } alt='Dribbble' />
          Dribbble
        </a>
      </Media>
      <Media color='#00ab6c'>
        <a href='https://medium.com/@teaganatwater' target='_blank'>
          <MediaIcon src={ medium } alt='Medium' />
          Medium
        </a>
      </Media>
      {/* <Media color='#1db954'>
        <a href='https://open.spotify.com/user/nagaant' target='_blank'>
          <MediaIcon src={ spotify } alt='Spotify' />
          Spotify
        </a>
      </Media> */}
    </Social>
    <ScrollIndicator type='button'>
      <MediaIcon src={ longarrowdown } alt='Scroll down' />
    </ScrollIndicator>
  </IconRow>
);

export default SocialMediaNav;
