import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Typekit from 'react-typekit';

import '../assets/normalize.css';

const LayoutWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
`;

const SplashLayout = ({ children }) => (
  <div>
    <Helmet
      title="Teagan Atwater"
      meta={[
        { name: 'description', content: '' },
        { name: 'keywords', content: '' },
      ]}>
    </Helmet>
    <Typekit kitId="qjx1ccs" />
    <LayoutWrapper>
      { children() }
    </LayoutWrapper>
  </div>
);

SplashLayout.propTypes = {
  children: PropTypes.func,
}

export default SplashLayout;
