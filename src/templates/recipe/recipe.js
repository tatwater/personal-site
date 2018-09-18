import React, { Component } from "react";
import Helmet from "react-helmet";
import { withPrefix } from 'gatsby-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { graphql } from 'gatsby';

// import auth from '../../utils/auth';
import DefaultLayout from '../../components/_layouts/default/DefaultLayout';
import RecipePhoto from '../../components/_recipe/photo/RecipePhoto';
import Instructions from '../../components/_recipe/instructions/Instructions';
import * as SC from './recipe_styles';


class Recipe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      instructionsVisible: false,
    }

    this.setInstructionsVisible = this.setInstructionsVisible.bind(this);
  }

  setInstructionsVisible(visibility) {
    this.setState({
      instructionsVisible: visibility,
    });

    // TODO: Smooth jarring jump when scrolled down
    document.getElementsByTagName('body')[0].scrollTo(0, 0);
  }

  render() {
    const { markdownRemark } = this.props.data;
    const { frontmatter } = markdownRemark;
    const hasTotalTime = frontmatter.time.timeAmount !== '';
    const timesList = [];
    const ingredientsList = [];
    const toolsList = [];
    const notesList = [];

    frontmatter.timing && frontmatter.timing.map((time, key) => {
      return timesList.push(
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
      return ingredientsList.push(
        <li key={key}>
          { ingredient.ingredientAmount && ingredient.ingredientAmount + ' ' }
          <span>{ ingredient.ingredientAmount ? ingredient.ingredientName.toLowerCase() : ingredient.ingredientName }</span>
          { ingredient.ingredientModification && ingredient.ingredientModification }
        </li>
      );
    });

    frontmatter.tools.map((tool, key) => {
      return toolsList.push(
        <li key={key}>
          { tool.toolName.toLowerCase() }
        </li>
      );
    });

    frontmatter.notes && frontmatter.notes.map((note, key) => {
      return notesList.push(
        <li key={key}>
          { note.note }
        </li>
      );
    });

    return (
      <DefaultLayout>
        <SC.HideOffCanvas>
          <Helmet
            title={ `${ frontmatter.title } | Teagan Atwater — Kitchen` }
          />
          <SC.BackgroundFlair
            showInstructions={ this.state.instructionsVisible }
          />
          <SC.Prep
            showInstructions={ this.state.instructionsVisible }
          >
            <SC.Header
              showInstructions={ this.state.instructionsVisible }
            >
              <SC.Category>
                { frontmatter.category }
                {/* auth.currentUser() &&
                  <SC.EditButton
                    href={ 'https://www.teaganatwater.com/admin/#/collections/recipes/entries/' + frontmatter.title.toLowerCase().split(' ').join('-') }
                    target='_edit'
                  >
                    <FontAwesomeIcon icon={['fal', 'pencil']} />
                  </SC.EditButton>
                */}
              </SC.Category>
              <h1>
                { frontmatter.title }
              </h1>
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
              <SC.Photo
                src={ withPrefix(frontmatter.photo) }
              />
              <SC.TimeWrapper>
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
                  onClick={() => { this.setInstructionsVisible(true) }}
                  type='button'
                >
                  INSTRUCTIONS
                  <FontAwesomeIcon icon={['fal', 'long-arrow-right']} />
                </SC.InstructionsButton>
              </SC.TimeWrapper>
              {/* <SC.Yield>
                Makes ~100 fries
              </SC.Yield> */}
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
            </SC.Recipe>
          </SC.Prep>
          <RecipePhoto
            setInstructionsVisible={(visibility) => { this.setInstructionsVisible(visibility) }}
            showInstructions={ this.state.instructionsVisible }
            src={ withPrefix(frontmatter.photo) }
          />
          <Instructions
            instructions={ frontmatter.instructions }
            notes={ notesList }
            showInstructions={ this.state.instructionsVisible }
            title={ frontmatter.title }
          />
        </SC.HideOffCanvas>
      </DefaultLayout>
    );
  }
}

export const pageQuery = graphql`
  query($path: String!) {
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


export default Recipe;
