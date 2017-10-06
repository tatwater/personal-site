import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import Header from '../components/Header';
import Headline from '../components/Headline';
import SocialMediaNav from '../components/SocialMediaNav';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100vw - 60px);

  @media screen and (orientation: portrait) and (min-height: 900px),
         screen and (orientation: landscape) and (min-width: 900px) {
    width: calc(100vw - 160px);
  }
  @media screen and (min-width: 1280px) {
    width: calc(100vw - 240px);
  }
`;
const MainContent = styled.section`
  display: flex;
  flex-direction: column;
`;

const HomePage = () => (
  <PageWrapper>
    <Header />

    <MainContent>
      <Headline />
      <SocialMediaNav />
      <Projects />
    </MainContent>

    <Footer />
  </PageWrapper>
);

export default HomePage;
