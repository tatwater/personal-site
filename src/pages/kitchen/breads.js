import React from 'react';
import { graphql } from 'gatsby';

import DefaultLayout from '../../components/_layouts/default/DefaultLayout';
import BrowseLayout from '../../components/_layouts/browse/BrowseLayout';
import Gallery from '../../components/gallery/Gallery';


const KitchenBreadsPage = ({ data, location }) => {
  return (
    <DefaultLayout
      location={ location }
    >
      <BrowseLayout>
        <h1>Breads</h1>
      </BrowseLayout>
      <Gallery
        recipes={ data.allMarkdownRemark.edges }
      />
    </DefaultLayout>
  );
}


export const kitchenBreadsQuery = graphql`
  query {
    allMarkdownRemark(
      filter: {
        frontmatter: {
          category: {
            eq: "Breads"
          }
        }
      }
      sort: {
        fields: [frontmatter___title], order: ASC
      }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            path
            photo
            title
            category
            time {
              timeAmount
              timeUnits
            }
          }
        }
      }
    }
  }
`;

export default KitchenBreadsPage;
