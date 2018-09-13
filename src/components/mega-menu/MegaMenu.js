import React from 'react';
import Link from 'gatsby-link';

import * as SC from './megaMenu_styles';


const MegaMenu = () => (
  <SC.Container>
    <SC.CategoryLink
      to='/kitchen/main-dishes'
    >
      Main dishes
    </SC.CategoryLink>
    <SC.CategoryLink
      to='/kitchen/sides'
    >
      Sides
    </SC.CategoryLink>
    <SC.CategoryLink
      to='/kitchen/breads'
    >
      Breads
    </SC.CategoryLink>
    <SC.CategoryLink
      to='/kitchen/desserts'
    >
      Desserts
    </SC.CategoryLink>
    <SC.CategoryLink
      to='/kitchen/cocktails'
    >
      Cocktails
    </SC.CategoryLink>
  </SC.Container>
);


export default MegaMenu;
