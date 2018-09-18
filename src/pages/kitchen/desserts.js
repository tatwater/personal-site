import React from 'react';
import { graphql } from 'gatsby';

import DefaultLayout from '../../components/_layouts/default/DefaultLayout';
import KitchenLayout from '../../components/_layouts/kitchen/KitchenLayout';
import Gallery from '../../components/gallery/Gallery';


const KitchenDessertsPage = ({ data, location }) => {
  return (
    <DefaultLayout
      location={ location }
    >
      <KitchenLayout>
        <h1>Desserts</h1>
      </KitchenLayout>
      <Gallery
        recipes={ data.allMarkdownRemark.edges }
      />
    </DefaultLayout>
  );
}


export const kitchenDessertsQuery = graphql`
  query {
    allMarkdownRemark(
      filter: {
        frontmatter: {
          category: {
            eq: "Desserts"
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

export default KitchenDessertsPage;
