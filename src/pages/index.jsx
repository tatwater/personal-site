import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import Header from '../components/Header';
import PageHeading from '../components/PageHeading';
import SocialMediaNav from '../components/SocialMediaNav';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

import { Headline } from '../assets/typography';
import { Breakpoints } from '../assets/helpers';


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
  </LayoutWrapper>
);

export default HomePage;
