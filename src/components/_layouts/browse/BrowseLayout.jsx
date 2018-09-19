import React from 'react';

import * as SC from './browseLayout_styles';


const BrowseLayout = ({ children }) => (
  <SC.Grid>
    { children }
  </SC.Grid>
);

export const BrowseHeader = ({ children }) => (
  <SC.Header>
    { children }
  </SC.Header>
);
export const BrowseSubHeading = ({ children }) => {
  let hasChildren = (children !== undefined);

  return (
    <SC.SubHeading drawLine={ hasChildren }>
      { children }
    </SC.SubHeading>
  );
}
export const BrowseHeading = ({ children }) => (
  <h1>
    { children }
  </h1>
);
export const BrowseContent = ({ children }) => (
  <SC.Content>
    { children }
  </SC.Content>
);


export default BrowseLayout;
