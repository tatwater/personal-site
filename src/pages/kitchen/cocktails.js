import React from 'react';
import { graphql } from 'gatsby';

import DefaultLayout from '../../components/_layouts/default/DefaultLayout';
import KitchenLayout from '../../components/_layouts/kitchen/KitchenLayout';
import Gallery from '../../components/gallery/Gallery';


const KitchenCocktailsPage = ({ data, location }) => {
  return (
    <DefaultLayout
      location={ location }
    >
      <KitchenLayout>
        <h1>Cocktails</h1>
      </KitchenLayout>
      <Gallery
        recipes={ data.allMarkdownRemark.edges }
      />
    </DefaultLayout>
  );
}


export const kitchenCocktailsQuery = graphql`
  query {
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
