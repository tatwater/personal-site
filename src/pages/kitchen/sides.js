import React from 'react';
import Link from 'gatsby-link';

import Gallery from '../../components/gallery/Gallery';
import KitchenLayout from '../../layouts/kitchen/KitchenLayout';


const KitchenSidesPage = ({ data }) => {
  return (
    <KitchenLayout>
      <h1>Sides</h1>

      <Gallery
        recipes={ data.allMarkdownRemark.edges }
      />
    </KitchenLayout>
  );
}


export const kitchenSidesQuery = graphql`
  query kitchenSidesQuery {
    allMarkdownRemark(
      filter: {
        frontmatter: {
          category: {
            eq: "Sides"
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


export default KitchenSidesPage;
