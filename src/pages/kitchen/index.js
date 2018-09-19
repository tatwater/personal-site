import React from 'react';
import { graphql } from 'gatsby';

import DefaultLayout from '../../components/_layouts/default/DefaultLayout';
import BrowseLayout, { BrowseHeader, BrowseSubHeading, BrowseHeading, BrowseContent } from '../../components/_layouts/browse/BrowseLayout';
import Gallery from '../../components/gallery/Gallery';


const KitchenHomePage = ({ data, location }) => {
  return (
    <DefaultLayout location={ location }>
      <BrowseLayout>
        <BrowseHeader>
          <BrowseSubHeading></BrowseSubHeading>
          <BrowseHeading>All recipes</BrowseHeading>
        </BrowseHeader>
        <BrowseContent>
          <Gallery recipes={ data.allMarkdownRemark.edges } />
        </BrowseContent>
      </BrowseLayout>
    </DefaultLayout>
  );
}


export const kitchenHomeQuery = graphql`
  query {
    allMarkdownRemark(
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

export default KitchenHomePage;
