import React from 'react';
import Link from 'gatsby-link';

import * as SC from './gallery_styles';


const Gallery = ({ recipes }) => {
  return (
    <SC.Container>
      {recipes.map(({ node }) =>
        <SC.Card
          key={node.id}
          to={ node.frontmatter.path }
        >
          <SC.Photo
            src={ node.frontmatter.photo }
          />
          <SC.Title>
            { node.frontmatter.title }
          </SC.Title>
        </SC.Card>
      )}
    </SC.Container>
  );
}


export default Gallery;
