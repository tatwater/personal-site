import React from "react";
import Helmet from "react-helmet";
import { withPrefix } from 'gatsby-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import KitchenLayout from '../../layouts/kitchen/kitchen';
import * as SC from './recipe_styles';


export default function Recipe({ data }) {
  const { markdownRemark } = data;
  const { frontmatter } = markdownRemark;
  const timesList = [];
  const ingredientsList = [];
  const toolsList = [];
  const instructionsList = [];
  const notesList = [];

  console.log(frontmatter.time);

  frontmatter.timing && frontmatter.timing.map((time, key) => {
    timesList.push(
      <SC.TimeBlock key={key}>
        <SC.TimeAmount>
          { time.timingAmount }
        </SC.TimeAmount>
        <SC.TimeType>
          { time.timingType.toLowerCase() }
        </SC.TimeType>
      </SC.TimeBlock>
    );
  });

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

  frontmatter.instructions.map((instruction, key) => {
    instructionsList.push(
      <li key={key}>
        { instruction.step }
      </li>
    );
  });

  frontmatter.notes && frontmatter.notes.map((note, key) => {
    notesList.push(
      <li key={key}>
        { note.note }
      </li>
    );
  });

  return (
    <div>
      <Helmet title={ `${ frontmatter.title } | Teagan Atwater — Kitchen` } />
      <KitchenLayout>
        <SC.Content>
          <SC.Category>
            { frontmatter.category }
          </SC.Category>
          <h1>
            { frontmatter.title }
          </h1>
          <SC.TimeWrapper>
            <SC.TotalTime>
              <FontAwesomeIcon icon={['far', 'clock']} />
              <SC.TimeAmount>
                { frontmatter.time.timeAmount }
              </SC.TimeAmount>
              <SC.TimeType>
                { frontmatter.time.timeUnits }
              </SC.TimeType>
            </SC.TotalTime>
            <SC.Photo
              src={ withPrefix(frontmatter.photo) }
            />
            <SC.TimeBreakdown>
              <SC.TotalTime>
                <SC.TimeAmount>
                  { frontmatter.time.timeAmount }
                </SC.TimeAmount>
                <SC.TimeType>
                  { frontmatter.time.timeUnits }
                </SC.TimeType>
              </SC.TotalTime>
              { frontmatter.timing && timesList }
            </SC.TimeBreakdown>
          </SC.TimeWrapper>
          <SC.Recipe>
            <SC.Ingredients>
              <h3>Ingredients</h3>
              <SC.List hideBullets>
                { ingredientsList }
              </SC.List>
            </SC.Ingredients>
            <SC.Tools>
              <h3>Tools</h3>
              <SC.List hideBullets>
                { toolsList }
              </SC.List>
            </SC.Tools>
            <SC.Instructions>
              <h3>Instructions</h3>
              <ol>
                { instructionsList }
              </ol>
            </SC.Instructions>
            { frontmatter.notes &&
              <SC.Instructions>
                <h3>Notes</h3>
                <SC.List>
                  { notesList }
                </SC.List>
              </SC.Instructions>
            }
            { frontmatter.source &&
              <SC.Instructions>
                <strong>From: </strong>{ frontmatter.source }
              </SC.Instructions>
            }
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
        time {
          timeAmount
          timeUnits
        }
        photo
        timing {
          timingAmount
          timingType
        }
        ingredients {
          ingredientAmount
          ingredientName
          ingredientModification
        }
        tools {
          toolName
        }
        instructions {
          step
        }
        notes {
          note
        }
        source
      }
    }
  }
`;
