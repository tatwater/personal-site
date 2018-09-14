import React from 'react';

import * as SC from './gallery_styles';


const Gallery = ({ recipes }) => {
  return (
    <SC.Container>
      {recipes.map(({ node }, key) =>
        <SC.Card
          key={ key }
          to={ node.frontmatter.path }
        >
          <SC.Photo
            src={ node.frontmatter.photo }
          />
          <SC.Title>
            { node.frontmatter.title }
          </SC.Title>
          <SC.Time>
            { node.frontmatter.time.timeAmount }
            { node.frontmatter.time.timeUnits }
          </SC.Time>
        </SC.Card>
      )}
    </SC.Container>
  );
}


export default Gallery;
