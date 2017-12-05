import React, {Component} from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import { Animations, Breakpoints, Colors, Fonts } from '../assets/helpers';


const FooterWrapper = styled.footer`
  animation: ${Animations.fadeIn} .5s ease;
  animation-delay: 1s;
  animation-fill-mode: both;
  display: flex;
  flex-wrap: wrap;
  grid-area: footer;
  padding: 20px 0 30px;
`;
const FooterColumn = styled.aside`
  flex-shrink: 0;
  height: 50px;
  width: 100%;

  @media ${Breakpoints.firstFooterFontIncrease} {
    height: 60px;
  }
`;
const Location = FooterColumn.extend`
  @media ${Breakpoints.afterFirstFooterUnwrapWidth} {
    width: 50%;
  }
  @media ${Breakpoints.secondFooterUnwrapWidth} {
    order: 1;
    width: 25%;
  }
`;
const Contact = FooterColumn.extend`
  @media ${Breakpoints.afterFirstFooterUnwrapWidth} {
    width: 50%;
  }
  @media ${Breakpoints.secondFooterUnwrapWidth} {
    order: 3;
    width: 25%;
  }
`;
const OnTheSide = FooterColumn.extend`
  @media ${Breakpoints.secondFooterUnwrapWidth} {
    order: 2;
    width: 50%;
  }
`;
const Kicker = styled.h5`
  color: ${Colors.brandPrimary};
  font-family: ${Fonts.sans};
  font-size: 14px;
  font-weight: 400;
  letter-spacing: .01em;
  margin: 0 0 4px 0;

  @media ${Breakpoints.firstFooterFontIncrease} {
    font-size: 16px;
  }
`;
export const Info = styled.p`
  color: ${Colors.brandPrimary};
  font-family: ${Fonts.sans};
  font-size: 14px;
  font-weight: 600;
  letter-spacing: .01em;
  line-height: 1.4em;
  margin-top: -2px;

  a {
    color: inherit;
    text-decoration: none;
  }

  @media ${Breakpoints.firstFooterFontIncrease} {
    font-size: 16px;
  }
`;

class Footer extends Component {
  componentDidMount() {
    let account = 'desk';
    let domain = 'teaganatwater.com';
    let linkText = account + '@' + domain;

    let link = document.querySelector('a.contact');
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
          <Info>Yoga / Cooking / Cycling / Baking / Meditation</Info>
        </OnTheSide>

      </FooterWrapper>
    );
  }
}

export default Footer;
