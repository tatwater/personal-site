import React from 'react';
import { Provider } from 'react-redux';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

import '../../../utils/normalize.css';
import '../../../utils/typography.css';
import '../../../utils/fontawesome';
import createStore from '../../../state/createStore';
import Navbar from '../../navbar/Navbar';
import * as SC from './defaultLayout_styles';


const DefaultLayout = ({ children, location }) => {
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

        { children }

      </SC.Container>
    </Provider>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.array,
  location: PropTypes.object,
}


export default DefaultLayout;
