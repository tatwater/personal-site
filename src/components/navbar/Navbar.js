import React from 'react';
import { withPrefix } from 'gatsby-link';

import * as SC from './navbar_styles';


const Navbar = ({ location }) => {
  let section = location.pathname.split('/')[1];

  return (
    <SC.Container>
      <SC.BrandWrapper>
        <SC.Logo
          alt='T A logo'
          src={ withPrefix('/images/logo.svg') }
        />
        <SC.SectionName>
          { section }
        </SC.SectionName>
      </SC.BrandWrapper>
      <div data-netlify-identity-button />
    </SC.Container>
  );
}


export default Navbar;
