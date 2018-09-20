import React from 'react';

import * as SC from './recipeLayout_styles';


const RecipeLayout = ({ children }) => (
  <SC.Grid>
    { children }
  </SC.Grid>
);

export const RecipeHeader = ({ children }) => (
  <SC.Header>
    { children }
  </SC.Header>
);
export const RecipeSubHeading = ({ children }) => {
  let hasChildren = (children !== undefined);

  return (
    <SC.SubHeading drawLine={ hasChildren }>
      { children }
    </SC.SubHeading>
  );
}
export const RecipeHeading = ({ children }) => (
  <h1>
    { children }
  </h1>
);
export const RecipeContent = ({ children }) => (
  <SC.Content
    className='toTopOnChange'
  >
    { children }
  </SC.Content>
);


export default RecipeLayout;
