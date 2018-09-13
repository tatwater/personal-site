import React, { Component } from "react";
import Helmet from "react-helmet";
import { withPrefix } from 'gatsby-link';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { toggleInstructions as toggleInstructionsAction } from '../../state/app';
import RecipePhoto from '../../components/_recipe/photo/RecipePhoto';
import Instructions from '../../components/_recipe/instructions/Instructions';
import * as SC from './recipe_styles';


class Recipe extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { markdownRemark } = this.props.data;
    const { frontmatter } = markdownRemark;
    const hasTotalTime = frontmatter.time.timeAmount !== '';
    const timesList = [];
    const ingredientsList = [];
    const toolsList = [];
    const instructionsList = [];
    const notesList = [];

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

    frontmatter.notes && frontmatter.notes.map((note, key) => {
      notesList.push(
        <li key={key}>
          { note.note }
        </li>
      );
    });

    return (
      <div>
        <Helmet
          title={ `${ frontmatter.title } | Teagan Atwater — Kitchen` }
        />
        <SC.BackgroundFlair
          showInstructions={ this.props.areInstructionsVisible }
        />
        <SC.Content
          showInstructions={ this.props.areInstructionsVisible }
        >
          <SC.Header
            showInstructions={ this.props.areInstructionsVisible }
          >
            <SC.Category>
              { frontmatter.category }
            </SC.Category>
            <h1>
              { frontmatter.title }
            </h1>
            <SC.TimeWrapper>
              { hasTotalTime &&
                <SC.TotalTime>
                  <FontAwesomeIcon icon={['far', 'clock']} />
                  <SC.TimeAmount>
                    { frontmatter.time.timeAmount }
                  </SC.TimeAmount>
                  <SC.TimeType>
                    { frontmatter.time.timeUnits }
                  </SC.TimeType>
                </SC.TotalTime>
              }
              <SC.ButtonRowWrapper>
                <SC.TimeBreakdown>
                  { hasTotalTime &&
                    <SC.TotalTime>
                      <SC.TimeAmount>
                        { frontmatter.time.timeAmount }
                      </SC.TimeAmount>
                      <SC.TimeType>
                        { frontmatter.time.timeUnits }
                      </SC.TimeType>
                    </SC.TotalTime>
                  }
                  { frontmatter.timing && timesList }
                </SC.TimeBreakdown>
                <SC.InstructionsButton
                  onClick={() => { this.props.toggleInstructions(true) }}
                  type='button'
                >
                  INSTRUCTIONS
                  <FontAwesomeIcon icon={['fal', 'long-arrow-right']} />
                </SC.InstructionsButton>
              </SC.ButtonRowWrapper>
            </SC.TimeWrapper>
            <SC.Yield>
              Makes ~100 fries
            </SC.Yield>
          </SC.Header>
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
            { frontmatter.source &&
              <SC.Instructions>
                <strong>From: </strong>{ frontmatter.source }
              </SC.Instructions>
            }
          </SC.Recipe>
        </SC.Content>
        <RecipePhoto
          showInstructions={ this.props.areInstructionsVisible }
          src={ withPrefix(frontmatter.photo) }
        />
        <Instructions
          instructions={ frontmatter.instructions }
          notes={ notesList }
          showInstructions={ this.props.areInstructionsVisible }
          title={ frontmatter.title }
        />
      </div>
    );
  }
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


export default connect(
  state => ({ areInstructionsVisible: state.app.areInstructionsVisible }),
  dispatch => ({ toggleInstructions: visible => dispatch(toggleInstructionsAction(visible)) }),
)(Recipe);
