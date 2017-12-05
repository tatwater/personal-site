import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Header from '../components/Header';
import PageHeading from '../components/PageHeading';
import SocialMediaNav from '../components/SocialMediaNav';
import Footer from '../components/Footer';

import { Headline, CTALink } from '../assets/typography';
import { Breakpoints } from '../assets/helpers';


const noUnwrapPageFits = '(min-height: 680px)';
const firstUnwrapPageDoesntFit = '(max-height: 649px)';
const firstUnwrapPageFits = '(min-height: 650px)';
const secondUnwrapPageDoesntFit = '(max-height: 599px)';
const secondUnwrapPageFits = '(min-height: 600px)';

const PageWrapper = styled.div`
  display: grid;
  grid-template-areas:
    'gutter header sociallinks'
    'gutter headline sociallinks'
    'gutter socialicons sociallinks'
    'gutter footer sociallinks';
  grid-template-columns:
    30px
    minmax(260px, 1fr)
    30px;
  grid-template-rows:
    minmax(170px, calc((100vh - 80px) / 2))
    minmax(230px, calc((100vh - 80px) / 2))
    80px
    200px;
  overflow-x: hidden;

  @media ${Breakpoints.beforeFirstFooterUnwrapWidth} and
         ${noUnwrapPageFits} {
    grid-template-rows:
      calc(170px + (100vh - 680px) / 2)
      calc(230px + (100vh - 680px) / 2)
      80px
      200px;
  }
  @media ${Breakpoints.afterFirstFooterUnwrapWidth} and
         ${firstUnwrapPageDoesntFit} {
    grid-template-rows:
      minmax(190px, calc((100vh - 80px) / 2))
      minmax(230px, calc((100vh - 80px) / 2))
      80px
      150px;
  }
  @media ${Breakpoints.afterFirstFooterUnwrapWidth} and
         ${firstUnwrapPageFits} {
    grid-template-rows:
      calc(190px + (100vh - 650px) / 2)
      calc(230px + (100vh - 650px) / 2)
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
    grid-template-rows:
      240px
      minmax(230px, calc(100vh - 320px))
      80px
      100px;
  }
  @media ${Breakpoints.secondFooterUnwrapWidth} and
         ${secondUnwrapPageFits} {
    grid-template-columns:
      80px
      1fr
      80px;
    grid-template-rows:
      240px
      minmax(230px, calc(260px + (100vh - 600px) * .4))
      minmax(0, calc((100vh - 600px) * .5))
      minmax(100px, calc(100px + (100vh - 600px) * .1));
  }
  @media screen and (min-width: 1280px) {
    grid-template-columns:
      120px
      1fr
      120px;
  }
`;


const NotFoundPage = () => (
  <PageWrapper>
    <Helmet title='Not Found | Teagan Atwater' />
    <Header tag='404' />

    <PageHeading>
      <Headline>I'd like to help you out — which way did you come in?</Headline>
      <CTALink to='/'>Try my homepage instead</CTALink>
    </PageHeading>

    <SocialMediaNav />
    <Footer />
  </PageWrapper>
);

export default NotFoundPage;
