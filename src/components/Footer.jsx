import React from 'react';
import Link from 'gatsby-link';
import styled, {keyframes} from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const FooterWrapper = styled.footer`
  animation: ${fadeIn} .5s ease;
  animation-delay: 1s;
  animation-fill-mode: both;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 30px;

  @media screen and (orientation: landscape) {
    margin-bottom: 10px;
  }
  @media screen and (orientation: portrait) and (min-height: 900px),
         screen and (orientation: landscape) and (min-width: 900px) {
    margin-bottom: 10px;
  }
`;
const Location = styled.aside`
  flex-shrink: 0;
  height: 50px;
  width: 100%;

  @media screen and (min-width: 500px) {
    width: 50%;
  }
  @media screen and (orientation: portrait) and (min-height: 900px),
         screen and (orientation: landscape) and (min-width: 900px) {
    height: 60px;
  }
  @media screen and (orientation: landscape) and (min-width: 900px),
         screen and (min-width: 1000px) {
    order: 1;
    width: 25%;
  }
  @media screen and (orientation: landscape) and (min-height: 900px) {
    height: 80px;
  }
`;
const Contact = styled.aside`
  flex-shrink: 0;
  height: 50px;
  width: 100%;

  @media screen and (min-width: 500px) {
    width: 50%;
  }
  @media screen and (orientation: portrait) and (min-height: 900px),
         screen and (orientation: landscape) and (min-width: 900px) {
    height: 60px;
  }
  @media screen and (orientation: landscape) and (min-width: 900px),
         screen and (min-width: 1000px) {
    order: 3;
    width: 25%;
  }
  @media screen and (orientation: landscape) and (min-height: 900px) {
    height: 100px;
  }
`;
const OnTheSide = styled.aside`
  flex-shrink: 0;
  height: 50px;
  width: 100%;

  @media screen and (orientation: portrait) and (min-height: 900px),
         screen and (orientation: landscape) and (min-width: 900px) {
    height: 60px;
  }
  @media screen and (orientation: landscape) and (min-width: 900px),
         screen and (min-width: 1000px) {
    order: 2;
    width: 50%;
  }
  @media screen and (orientation: landscape) and (min-height: 900px) {
    height: 80px;
  }
`;
const Kicker = styled.h5`
  color: #34495e;
  font-family: 'Sofia Pro';
  font-size: 14px;
  font-weight: 400;
  letter-spacing: .01em;
  margin: 0 0 4px 0;

  @media screen and (orientation: portrait) and (min-height: 900px),
         screen and (orientation: landscape) and (min-width: 900px) {
    font-size: 16px;
  }
  @media screen and (orientation: landscape) and (min-height: 1000px) {
    font-size: 16px;
  }
`;
const Info = styled.p`
  color: #34495e;
  font-family: 'Sofia Pro';
  font-size: 14px;
  font-weight: 600;
  letter-spacing: .01em;
  line-height: 1.4em;
  position: relative;
    top: -2px;
  margin: 0;

  a {
    color: inherit;
    text-decoration: none;
  }
  
  @media screen and (orientation: portrait) and (min-height: 900px),
         screen and (orientation: landscape) and (min-width: 900px) {
    font-size: 16px;
  }
  @media screen and (orientation: landscape) and (min-height: 1000px) {
    font-size: 18px;
  }
`;

class Footer extends React.Component {
  componentDidMount() {
    let account = 'desk';
    let domain = 'teaganatwater.com'
    let linkText = account + '@' + domain;

    let link = document.querySelector('a.contact')
    link.href = 'mai' + 'lto:' + linkText; // Break string for added security
    link.innerText = linkText;
  }

  render() {
    return (
      <FooterWrapper>

        <Location>
          <Kicker>Location</Kicker>
          <Info>Boston, MA</Info>
        </Location>

        <Contact>
          <Kicker>Contact</Kicker>
          <Info>
            <a className='contact'></a>
          </Info>
        </Contact>

        <OnTheSide>
          <Kicker>On the side</Kicker>
          <Info>Yoga / Cooking / Cycling / Baking / Swing / Meditation</Info>
        </OnTheSide>

      </FooterWrapper>
    );
  }
}

export default Footer;
