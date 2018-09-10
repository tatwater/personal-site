import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Provider } from 'react-redux';

import '../utils/normalize.css';
import '../utils/typography.css';
import '../utils/fontawesome';
import createStore from '../state/createStore';
import Navbar from '../components/navbar/Navbar';


const Layout = ({ location, children }) => (
  <Provider store={createStore()}>
    <div>
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
      >
        <script type="text/javascript" src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Helmet>
      <Navbar location={ location } />

      { children() }

    </div>
  </Provider>
);

Layout.propTypes = {
  children: PropTypes.func,
}


export default Layout;
