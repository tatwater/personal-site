import React from 'react';
import Link from 'gatsby-link';

import Gallery from '../../components/gallery/Gallery';
import KitchenLayout from '../../layouts/kitchen/KitchenLayout';


const KitchenMainDishesPage = ({ data }) => {
  console.log(data);
  return (
    <div>
      <KitchenLayout>
        <h1>Main dishes</h1>
      </KitchenLayout>
      <Gallery
        recipes={ data.allMarkdownRemark.edges }
      />
    </div>
  );
}


export const kitchenMainDishesQuery = graphql`
  query kitchenMainDishesQuery {
    allMarkdownRemark(
      filter: {
        frontmatter: {
          category: {
            eq: "Main dishes"
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


export default KitchenMainDishesPage;
