import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Provider } from 'react-redux';
import { withPrefix } from 'gatsby-link';

import '../../utils/normalize.css';
import '../../utils/typography.css';
import '../../utils/fontawesome';
import createStore from '../../state/createStore';
import * as SC from './kitchen_styles';


const KitchenLayout = ({ children }) => (
  <Provider store={createStore()}>
    <SC.Container>
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

      <SC.Navbar>
        <SC.BrandWrapper>
          <SC.Logo
            alt='T A Logo'
            src={ withPrefix('/images/logo.svg') }
          />
          <SC.SectionName>
            kitchen
          </SC.SectionName>
        </SC.BrandWrapper>
      </SC.Navbar>

      { children }

    </SC.Container>
  </Provider>
);

KitchenLayout.propTypes = {
  children: PropTypes.object,
}


export default KitchenLayout;