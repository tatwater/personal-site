import React from 'react';
import Link from 'gatsby-link';

import Gallery from '../../components/gallery/Gallery';
import KitchenLayout from '../../layouts/kitchen/KitchenLayout';


const KitchenDessertsPage = ({ data }) => {
  return (
    <div>
      <KitchenLayout>
        <h1>Desserts</h1>
      </KitchenLayout>
      <Gallery
        recipes={ data.allMarkdownRemark.edges }
      />
    </div>
  );
}


export const kitchenDessertsQuery = graphql`
  query kitchenDessertsQuery {
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
