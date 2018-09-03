import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Provider } from 'react-redux';
import styled from 'styled-components';

import '../utils/normalize.css';
import '../utils/typography.css';
import '../utils/fontawesome';
import createStore from '../state/createStore';


const PageWrapper = styled.div`
`;

const Layout = ({ children }) => (
  <Provider store={createStore()}>
    <PageWrapper>
      <Helmet
        meta={[
          {
            name: 'description',
            content: 'Full-stack web developer, designer, and startup founder'
          },
          {
            name: 'keywords',
            content: 'develop, developer, web, website, full-stack, design, designer, production, ui, ux, user interface, user experience, startup, entrepreneur, founder, fiber, fiber app'
          },
        ]}
        title={ 'Teagan Atwater' }
      />

      { children() }

    </PageWrapper>
  </Provider>
);

Layout.propTypes = {
  children: PropTypes.func,
}


export default Layout;
