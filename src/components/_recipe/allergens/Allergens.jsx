import React from 'react';

import * as SC from './allergens_styles';


const Allergens = ({ allergens, currentView }) => (
  <SC.Container
    currentView={ currentView }
  >
    <SC.MobileHeading>
      Allergens
    </SC.MobileHeading>
    <em>Coming soon</em>
  </SC.Container>
);


export default Allergens;
