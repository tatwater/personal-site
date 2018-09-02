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
  min-width: 320px;
  padding-top: 80px;
`;

const Layout = ({ children }) => (
  <Provider store={createStore()}>
    <PageWrapper>
      <Helmet
        meta={[
          {
            name: 'description',
            content: '',
          },
          {
            name: 'keywords',
            content: '',
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
