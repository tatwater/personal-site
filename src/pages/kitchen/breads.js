import React from 'react';

import Gallery from '../../components/gallery/Gallery';
import KitchenLayout from '../../layouts/kitchen/KitchenLayout';


const KitchenBreadsPage = ({ data }) => {
  return (
    <div>
      <KitchenLayout>
        <h1>Breads</h1>
      </KitchenLayout>
      <Gallery
        recipes={ data.allMarkdownRemark.edges }
      />
    </div>
  );
}


export const kitchenBreadsQuery = graphql`
  query kitchenBreadsQuery {
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
