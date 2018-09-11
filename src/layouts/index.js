import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Provider } from 'react-redux';

import '../utils/normalize.css';
import '../utils/typography.css';
import '../utils/fontawesome';
import createStore from '../state/createStore';
import Navbar from '../components/navbar/Navbar';
import * as SC from './index_styles';


export default class Layout extends Component {
  render() {
    const { location, children } = this.props;

    if (location.pathname === '/') {
      return (
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
            />

            { children() }

          </div>
        </Provider>
      );
    } else {
      return (
        <Provider store={createStore()}>
          <SC.Container>
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

            <Navbar
              location={ location }
            />

            { children() }

          </SC.Container>
        </Provider>
      );
    }
  }
}

Layout.propTypes = {
  children: PropTypes.func,
}
