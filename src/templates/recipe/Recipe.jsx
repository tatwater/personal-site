import React, { Component } from "react";
import Helmet from "react-helmet";
import { withPrefix } from 'gatsby-link';
import { graphql } from 'gatsby';

// import auth from '../../utils/auth';
import DefaultLayout from '../../components/_layouts/default/DefaultLayout';
import RecipeLayout, { RecipeHeader, RecipeSubHeading, RecipeHeading, RecipeContent } from '../../components/_layouts/recipe/RecipeLayout';
import TabNav from '../../components/_recipe/tab-nav/TabNav';
import RecipePhoto from '../../components/_recipe/photo/RecipePhoto';
import RecipeTiming from '../../components/_recipe/timing/RecipeTiming';
import Instructions from '../../components/_recipe/instructions/Instructions';
import * as SC from './recipe_styles';


class Recipe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentView: 'overview',
      instructionsVisible: false,
    }

    this.setCurrentView = this.setCurrentView.bind(this);
    this.setInstructionsVisible = this.setInstructionsVisible.bind(this);
  }

  setCurrentView(view) {
    this.setState({
      currentView: view,
    });
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
    const ingredientsList = [];
    const toolsList = [];
    const notesList = [];

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
      <DefaultLayout
        location={ this.props.location }
      >
        <SC.BackgroundFlair
          showInstructions={ this.state.instructionsVisible }
        />
        <RecipeLayout>
          <Helmet
            title={ `${ frontmatter.title } | Teagan Atwater — Kitchen` }
          />
          <RecipeHeader>
            <RecipeSubHeading>
              { frontmatter.category }
              {/* auth.currentUser() &&
                <SC.EditButton
                  href={ 'https://www.teaganatwater.com/admin/#/collections/recipes/entries/' + frontmatter.title.toLowerCase().split(' ').join('-') }
                  target='_edit'
                >
                  <FontAwesomeIcon icon={['fal', 'pencil']} />
                </SC.EditButton>
              } */}
            </RecipeSubHeading>
            <RecipeHeading>
              { frontmatter.title }
            </RecipeHeading>
            { this.state.currentView === 'overview' &&
              <RecipePhoto
                setInstructionsVisible={(visibility) => { this.setInstructionsVisible(visibility) }}
                showInstructions={ this.state.instructionsVisible }
                src={ withPrefix(frontmatter.photo) }
              />
            }
            { this.state.currentView === 'overview' &&
              <RecipeTiming
                time={ frontmatter.time }
                timing={ frontmatter.timing }
              />
            }
          </RecipeHeader>
          <RecipeContent>
            <SC.Ingredients currentView={ this.state.currentView }>
              <h3>Ingredients</h3>
              <SC.List hideBullets>
                { ingredientsList }
              </SC.List>
            </SC.Ingredients>
            <SC.Tools currentView={ this.state.currentView }>
              <h3>Tools</h3>
              <SC.List hideBullets>
                { toolsList }
              </SC.List>
            </SC.Tools>
            <Instructions
              currentView={ this.state.currentView }
              instructions={ frontmatter.instructions }
              notes={ notesList }
              showInstructions={ this.state.instructionsVisible }
              title={ frontmatter.title }
            />
          </RecipeContent>
          <TabNav
            currentView={ this.state.currentView }
            setCurrentView={(view) => { this.setCurrentView(view) }}
          />
        </RecipeLayout>
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
