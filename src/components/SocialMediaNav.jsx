import React, {Component} from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import linkedin from '../assets/images/linkedin.svg';
import angellist from '../assets/images/angellist.svg';
import github from '../assets/images/github.svg';
import dribbble from '../assets/images/dribbble.svg';
import medium from '../assets/images/medium.svg';
import spotify from '../assets/images/spotify.svg';
import longarrowdown from '../assets/images/longarrowdown.svg';

import { Animations, Breakpoints } from '../assets/helpers';


const IconRow = styled.nav`
  align-items: center;
  animation: ${Animations.fadeIn} .5s ease;
  animation-delay: 1s;
  animation-fill-mode: both;
  display: flex;
  grid-area: socialicons;
  justify-content: space-between;
  transform: translate(-5px, 0);
  width: calc(100% + 10px);

  @media ${Breakpoints.socialMediaSwitch} {
    justify-content: center;
    margin-bottom: 0;
    min-width: 550px;
    position: fixed;
      top: 50%;
      right: 30px;
    transform: rotate(-90deg) translate(50%, -100%);
    transform-origin: 100% 0;
    width: 100vh;
  }
  @media ${Breakpoints.secondFooterFontIncrease} {
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

  @media ${Breakpoints.socialMediaSwitch} {
    font-size: 14px;
  }
  @media ${Breakpoints.secondFooterFontIncrease} and
          (min-height: 600px) {
    font-size: 15px;
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

  @media ${Breakpoints.socialMediaSwitch} {
    height: auto;
    margin: 0 40px 0 0;
    width: auto;

    &:last-of-type {
      margin-right: 0;
    }
  }
  @media ${Breakpoints.socialMediaSwitch} and
         (hover: hover) {
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
  @media ${Breakpoints.secondFooterFontIncrease} and
          (min-height: 600px) {
    margin: 0 54px 0 0;
  }
`;
const MediaIcon = styled.img`
  height: 22px;

  @media ${Breakpoints.socialMediaSwitch} {
    height: 0;
  }
`;
const ScrollIndicator = styled.button`
  animation: ${Animations.bounce} 1.2s ease infinite;
  background: none;
  border: none;
  font-size: 0;
  height: 40px;
  visibility: ${props => props.visible ? 'visible' : 'hidden'};
  opacity: ${props => props.visible ? '1' : '0'};
  padding: 0;
  transform: translate(0, 0);
  transition: opacity .3s ease, visibility 0s ease ${props => props.visible ? '0s' : '.3s'};
  width: 40px;

  @media ${Breakpoints.socialMediaSwitch} {
    display: none;
  }
`;

class SocialMediaNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showScrollIndicator: true,
    };

    this.manageScrollIndicator = this.manageScrollIndicator.bind(this);
    this.scrollToBottom = this.scrollToBottom.bind(this);
    this.scroll = this.scroll.bind(this);
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.manageScrollIndicator);
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.manageScrollIndicator);
  }

  manageScrollIndicator = () => {
    let scrollTop = event.srcElement.body.scrollTop;

    if (scrollTop > 50) {
      this.setState({
        showScrollIndicator: false,
      });
    } else {
      this.setState({
        showScrollIndicator: true,
      });
    }
  }

  scrollToBottom = () => {
    let pageHeight = Math.max(document.body.scrollHeight,
                              document.body.offsetHeight, 
                              document.documentElement.clientHeight,
                              document.documentElement.scrollHeight,
                              document.documentElement.offsetHeight);
    let bottom = pageHeight - window.innerHeight;
    let duration = 100;
    let perTick = (bottom - window.scrollY) / duration * 5;

    this.scroll(bottom, perTick);
  }

  // TODO: Add easing to perTick equation for variable stepping
  scroll = (target, perTick) => {
    if (window.scrollY < target) {
      setTimeout(() => {
        window.scrollTo(0, window.scrollY + perTick);
        this.scroll(target, perTick);
      }, 10);
    }
  }

  render() {
    return (
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
          <Media color='#5d267d'>
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
        <ScrollIndicator onClick={this.scrollToBottom} type='button' visible={this.state.showScrollIndicator}>
          <MediaIcon src={longarrowdown} alt='Scroll down' />
        </ScrollIndicator>
      </IconRow>
    );
  }
}

export default SocialMediaNav;
