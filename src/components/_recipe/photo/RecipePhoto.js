import React, { Component } from "react";
import { withPrefix } from 'gatsby-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { toggleInstructions as toggleInstructionsAction } from '../../../state/app';
import * as SC from './recipePhoto_styles';


class RecipePhoto extends Component {
  constructor(props) {
    super(props);

    this.photoContainer = React.createRef();
    this.photo = React.createRef();

    this.resizePhoto = this.resizePhoto.bind(this);
  }

  resizePhoto() {
    let scale = Math.min(
      this.photoContainer.current.offsetWidth / 770, 
      this.photoContainer.current.offsetHeight / 1080 
    );
    this.photo.current.style.transform = 'translate(-50%, -50%) scale(' + scale + ')';
  }

  componentDidMount() {
    window.addEventListener("resize", this.resizePhoto);
    this.resizePhoto();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resizePhoto);
  }

  render() {
    return (
      <SC.Container
        innerRef={ this.photoContainer }
        showInstructions={ this.props.showInstructions }
      >
        <SC.Photo
          innerRef={ this.photo }
          src={ withPrefix(this.props.src) }
        />
        <SC.PreparationButton
          onClick={() => { this.props.setInstructionsVisible(false) }}
          showInstructions={ this.props.showInstructions }
          type='button'
        >
          <FontAwesomeIcon icon={['fal', 'long-arrow-left']} />
          PREPARATION
        </SC.PreparationButton>
      </SC.Container>
    )
  }
}

RecipePhoto.propTypes = {
  setInstructionsVisible: PropTypes.function,
  showInstructions: PropTypes.boolean,
  src: PropTypes.string,
}


export default connect(
  state => ({ areInstructionsVisible: state.app.areInstructionsVisible }),
  dispatch => ({ toggleInstructions: visible => dispatch(toggleInstructionsAction(visible)) }),
)(RecipePhoto);
