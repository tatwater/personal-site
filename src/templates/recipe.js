import React from "react";
import Helmet from "react-helmet";

export default function Template({ data }) {
  const { markdownRemark } = data;
  const { frontmatter } = markdownRemark;

  return (
    <div className="blog-post-container">
      <Helmet title={`${frontmatter.title} | Teagan Atwater`} />
      <div className="blog-post">
        <h1>{frontmatter.title}</h1>
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query RecipeByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        path
        title
      }
    }
  }
`;
