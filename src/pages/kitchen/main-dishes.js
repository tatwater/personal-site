import React from 'react';
import { graphql } from 'gatsby';

import DefaultLayout from '../../components/_layouts/default/DefaultLayout';
import BrowseLayout, { BrowseHeader, BrowseSubHeading, BrowseHeading, BrowseContent } from '../../components/_layouts/browse/BrowseLayout';
import Gallery from '../../components/gallery/Gallery';


const KitchenMainDishesPage = ({ data, location }) => {
  return (
    <DefaultLayout location={ location }>
      <BrowseLayout>
        <BrowseHeader>
          <BrowseSubHeading></BrowseSubHeading>
          <BrowseHeading>Main dishes</BrowseHeading>
        </BrowseHeader>
        <BrowseContent>
          <Gallery recipes={ data.allMarkdownRemark.edges } />
        </BrowseContent>
      </BrowseLayout>
    </DefaultLayout>
  );
}


export const kitchenMainDishesQuery = graphql`
  query {
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
