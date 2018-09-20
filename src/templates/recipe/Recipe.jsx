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
import RecipeNotes from '../../components/_recipe/notes/Notes';
import * as SC from './recipe_styles';


class Recipe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentView: 'overview',
    }

    this.setCurrentView = this.setCurrentView.bind(this);
  }

  setCurrentView(view) {
    this.setState({
      currentView: view,
    });
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
          currentView={ this.state.currentView }
        />
        <SC.RecipeWrapperGrid
          currentView={ this.state.currentView }
        >
          <RecipeLayout>
            <Helmet
              title={ `${ frontmatter.title } | Teagan Atwater — Kitchen` }
            />
            <RecipeHeader>
              <RecipeSubHeading>
                { frontmatter.category }
              </RecipeSubHeading>
              <RecipeHeading>
                { frontmatter.title }
              </RecipeHeading>
              <SC.OnlyWideLayout>
                <RecipeTiming
                  currentView={ this.state.currentView }
                  setCurrentView={(view) => { this.setCurrentView(view) }}
                  time={ frontmatter.time }
                  timing={ frontmatter.timing }
                />
              </SC.OnlyWideLayout>
            </RecipeHeader>
            <RecipeContent>
              <SC.NotWideLayout>
                <SC.Photo
                  currentView={ this.state.currentView }
                  src={ withPrefix(frontmatter.photo) }
                />
                <RecipeTiming
                  currentView={ this.state.currentView }
                  time={ frontmatter.time }
                  timing={ frontmatter.timing }
                />
              </SC.NotWideLayout>
              <SC.Prep>
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
              </SC.Prep>
              <Instructions
                currentView={ this.state.currentView }
                instructions={ frontmatter.instructions }
                notes={ notesList }
                setCurrentView={(view) => { this.setCurrentView(view) }}
                title={ frontmatter.title }
              />
              <RecipeNotes
                currentView={ this.state.currentView }
                notes={ notesList }
              />
            </RecipeContent>
            <TabNav
              currentView={ this.state.currentView }
              hasNotes={ notesList.length > 0 }
              setCurrentView={(view) => { this.setCurrentView(view) }}
            />
          </RecipeLayout>
          <RecipePhoto
            currentView={ this.state.currentView }
            setCurrentView={(view) => { this.setCurrentView(view) }}
            src={ withPrefix(frontmatter.photo) }
          />
        </SC.RecipeWrapperGrid>
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
