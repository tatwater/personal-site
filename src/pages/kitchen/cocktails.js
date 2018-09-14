import React from 'react';
import Link from 'gatsby-link';

import Gallery from '../../components/gallery/Gallery';
import KitchenLayout from '../../layouts/kitchen/KitchenLayout';


const KitchenCocktailsPage = ({ data }) => {
  return (
    <KitchenLayout>
      <h1>Cocktails</h1>

      <Gallery
        recipes={ data.allMarkdownRemark.edges }
      />
    </KitchenLayout>
  );
}


export const kitchenCocktailsQuery = graphql`
  query kitchenCocktailsQuery {
    allMarkdownRemark(
      filter: {
        frontmatter: {
          category: {
            eq: "Cocktails"
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

export default KitchenCocktailsPage;
