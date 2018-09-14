import React from 'react';

// import Gallery from '../../components/gallery/Gallery';
import KitchenLayout from '../../layouts/kitchen/KitchenLayout';


const KitchenCocktailsPage = ({ data }) => {
  return (
    <div>
      <KitchenLayout>
        <h1>Cocktails</h1>
      </KitchenLayout>
      {/* <Gallery
        recipes={ data.allMarkdownRemark.edges }
      /> */}
    </div>
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
