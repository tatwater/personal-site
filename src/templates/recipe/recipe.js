import React from "react";
import Helmet from "react-helmet";
import { withPrefix } from 'gatsby-link';

import KitchenLayout from '../../layouts/kitchen/kitchen';
import * as SC from './recipe_styles';


export default function Recipe({ data }) {
  const { markdownRemark } = data;
  const { frontmatter } = markdownRemark;
  const ingredientsList = [];
  const toolsList = [];

  frontmatter.ingredients.map((ingredient, key) => {
    ingredientsList.push(
      <li key={key}>
        { ingredient.ingredientAmount && ingredient.ingredientAmount + ' ' }
        <span>{ ingredient.ingredientAmount ? ingredient.ingredientName.toLowerCase() : ingredient.ingredientName }</span>
        { ingredient.ingredientModification && ingredient.ingredientModification }
      </li>
    );
  });

  frontmatter.tools.map((tool, key) => {
    toolsList.push(
      <li key={key}>
        { tool.toolName.toLowerCase() }
      </li>
    );
  });

  return (
    <div>
      <Helmet title={`${frontmatter.title} | Teagan Atwater`} />
      <KitchenLayout>
        <SC.Content>
          <SC.Category>
            { frontmatter.category }
          </SC.Category>
          <h1>
            { frontmatter.title }
          </h1>
          <SC.PhotoWrapper>
            <SC.Photo
              src={ withPrefix(frontmatter.photo) }
            />
          </SC.PhotoWrapper>
          <SC.Recipe>
            <SC.Ingredients>
              <h3>Ingredients</h3>
              <ul>
                { ingredientsList }
              </ul>
            </SC.Ingredients>
            <SC.Tools>
              <h3>Tools</h3>
              <ul>
                { toolsList }
              </ul>
            </SC.Tools>
            <SC.Instructions>
              <h3>Instructions</h3>
              { frontmatter.instructions }
            </SC.Instructions>
          </SC.Recipe>
        </SC.Content>
      </KitchenLayout>
    </div>
  );
}

export const pageQuery = graphql`
  query RecipeByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        path
        category
        title
        photo
        ingredients {
          ingredientAmount
          ingredientName
          ingredientModification
        }
        tools {
          toolName
        }
        instructions
      }
    }
  }
`;
