import React, {Component} from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import {keyframes} from 'styled-components';

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

const Breakpoints = {
  socialMediaSwitch: 'screen and (min-width: 760px) and (min-height: 600px)',
  beforeFirstFooterUnwrapWidth: 'screen and (max-width: 399px)',
  afterFirstFooterUnwrapWidth: 'screen and (min-width: 400px)',
  secondFooterUnwrapWidth: 'screen and (min-width: 900px)',
  firstFooterFontIncrease: 'screen and (min-width: 1000px)',
  secondFooterFontIncrease: 'screen and (min-width: 1200px) and (min-height: 600px)',
}

const Colors = {
  brandPrimary: '#34495e',
  angelList: '#333333',
  dribbble: '#ea4c89',
  gitHub: '#5d267d',
  linkedIn: '#0077b5',
  medium: '#00ab6c',
}

const Fonts = {
  mono: 'Roboto Mono',
  sans: 'Roboto',
}



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
  font-weight: 500;
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
