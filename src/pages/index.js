import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import {keyframes} from 'styled-components';

import Header from '../components/Header';
import PageHeading from '../components/PageHeading';
import SocialMediaNav from '../components/SocialMediaNav';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

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

const Headline = styled.h2`
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


const noUnwrapPageFitsScrollFooter = '(min-height: 810px)';
const noUnwrapPageFits = '(min-height: 1010px)';
const firstUnwrapPageDoesntFit = '(max-height: 799px)';
const firstUnwrapPageFitsScrollFooter = '(min-height: 800px)';
const firstUnwrapPageFits = '(min-height: 980px)';
const secondUnwrapPageDoesntFit = '(max-height: 749px)';
const secondUnwrapPageFits = '(min-height: 750px)';

const LayoutWrapper = styled.div`
  display: grid;
  grid-template-areas:
    'gutter header sociallinks'
    'gutter headline sociallinks'
    'gutter socialicons sociallinks'
    'gutter projects sociallinks'
    'gutter footer sociallinks';
  grid-template-columns:
    30px
    1fr
    30px;
  grid-template-rows:
    minmax(170px, calc((100vh - 80px) / 2))
    minmax(230px, calc((100vh - 80px) / 2))
    80px
    minmax(260px, calc(100vh - 270px))
    200px;
  overflow-x: hidden;

  @media ${Breakpoints.beforeFirstFooterUnwrapWidth} and
         ${noUnwrapPageFitsScrollFooter} {
    grid-template-areas:
      'gutter header sociallinks'
      'gutter headline sociallinks'
      'gutter projects sociallinks'
      'gutter socialicons sociallinks'
      'gutter footer sociallinks';
    grid-template-rows:
      calc(170px + (100vh - 810px) / 3)
      calc(230px + (100vh - 810px) / 3)
      calc(330px + (100vh - 810px) / 3)
      80px
      200px;
  }
  @media ${Breakpoints.beforeFirstFooterUnwrapWidth} and
         ${noUnwrapPageFits} {
    grid-template-areas:
      'gutter header sociallinks'
      'gutter headline sociallinks'
      'gutter projects sociallinks'
      'gutter socialicons sociallinks'
      'gutter footer sociallinks';
    grid-template-rows:
      calc(170px + (100vh - 1010px) / 3)
      calc(230px + (100vh - 1010px) / 3)
      calc(330px + (100vh - 1010px) / 3)
      80px
      200px;
  }
  @media ${Breakpoints.afterFirstFooterUnwrapWidth} and
         ${firstUnwrapPageDoesntFit} {
    grid-template-areas:
      'gutter header sociallinks'
      'gutter headline sociallinks'
      'gutter socialicons sociallinks'
      'gutter projects sociallinks'
      'gutter footer sociallinks';
    grid-template-rows:
      minmax(190px, calc((100vh - 80px) / 2))
      minmax(230px, calc((100vh - 80px) / 2))
      80px
      minmax(300px, calc(100vh - 220px))
      150px;
  }
  @media ${Breakpoints.afterFirstFooterUnwrapWidth} and
         ${firstUnwrapPageFitsScrollFooter} {
    grid-template-areas:
      'gutter header sociallinks'
      'gutter headline sociallinks'
      'gutter projects sociallinks'
      'gutter socialicons sociallinks'
      'gutter footer sociallinks';
    grid-template-rows:
      calc(190px + (100vh - 830px) / 3)
      calc(230px + (100vh - 830px) / 3)
      calc(330px + (100vh - 830px) / 3)
      80px
      150px;
  }
  @media ${Breakpoints.afterFirstFooterUnwrapWidth} and
         ${firstUnwrapPageFits} {
    grid-template-areas:
      'gutter header sociallinks'
      'gutter headline sociallinks'
      'gutter projects sociallinks'
      'gutter socialicons sociallinks'
      'gutter footer sociallinks';
    grid-template-rows:
      calc(190px + (100vh - 980px) / 3)
      calc(230px + (100vh - 980px) / 3)
      calc(330px + (100vh - 980px) / 3)
      80px
      150px;
  }
  @media screen and (min-width: 768px) {
    grid-template-columns:
      60px
      1fr
      60px;
  }
  @media ${Breakpoints.secondFooterUnwrapWidth} and
         ${secondUnwrapPageDoesntFit} {
    grid-template-areas:
      'gutter header sociallinks'
      'gutter headline sociallinks'
      'gutter socialicons sociallinks'
      'gutter projects sociallinks'
      'gutter footer sociallinks';
    grid-template-rows:
      240px
      minmax(310px, calc(100vh - 320px))
      80px
      minmax(140px, calc(100vh - 170px))
      100px;
  }
  @media ${Breakpoints.secondFooterUnwrapWidth} and
         ${secondUnwrapPageFits} {
    grid-template-areas:
      'gutter header sociallinks'
      'gutter headline sociallinks'
      'gutter projects sociallinks'
      'gutter socialicons sociallinks'
      'gutter footer sociallinks';
    grid-template-columns:
      80px
      1fr
      80px;
    grid-template-rows:
      240px
      minmax(260px, calc(260px + (100vh - 750px) * .5))
      minmax(150px, calc(150px + (100vh - 750px) * .3))
      minmax(0, calc((100vh - 750px) * .1))
      minmax(100px, calc(100px + (100vh - 750px) * .1));
  }
  @media screen and (min-width: 1280px) {
    grid-template-columns:
      120px
      1fr
      120px;
  }
`;

const Netlify = () => {
  if (window.netlifyIdentity) {
    window.netlifyIdentity.on("init", user => {
      if (!user) {
        window.netlifyIdentity.on("login", () => {
          document.location.href = "/admin/";
        });
      }
    })
  }
  
  return null;
}


const HomePage = () => (
  <LayoutWrapper>
    <Header />

    <PageHeading>
      <Headline delay='.5s' slide='true'>Full-stack web developer.</Headline>
      <Headline delay='.6s' slide='true'>Designer.</Headline>
      <Headline delay='.7s' slide='true'>Startup founder.</Headline>
    </PageHeading>

    <SocialMediaNav />

    <Projects />

    <Footer />

    <Netlify />
  </LayoutWrapper>
);

export default HomePage;
