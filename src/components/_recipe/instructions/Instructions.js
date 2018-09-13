import React, { Component } from "react";
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as SC from './instructions_styles';


class Instructions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentStep: 0,
      numSteps: this.props.instructions.length,
    }

    this.setStep = this.setStep.bind(this);
    this.nextStep = this.nextStep.bind(this);
    this.previousStep = this.previousStep.bind(this);
  }

  setStep(step) {
    this.setState({
      currentStep: step,
    });
  }

  nextStep() {
    let nextStep = this.state.currentStep + 1;

    if (nextStep > this.state.numSteps - 1) {
      nextStep = this.state.numSteps - 1;
    }

    this.setState({
      currentStep: nextStep,
    });
  }

  previousStep() {
    let nextStep = this.state.currentStep - 1;

    if (nextStep < 0) {
      nextStep = 0;
    }
    this.setState({
      currentStep: nextStep,
    });
  }

  render() {
    let instructionsList = [];

    this.props.instructions.map((instruction, key) => {
      instructionsList.push(
        <SC.Step
          active={ this.state.currentStep == key }
          done={ this.state.currentStep > key }
          onClick={() => { this.setStep(key) }}
          key={ key }
        >
          { instruction.step }
        </SC.Step>
      );
    });

    return (
      <div>
        <SC.Container
          showInstructions={ this.props.showInstructions }
        >
          <SC.Header>
            <div>
              <SC.Kicker>
                Instructions for
              </SC.Kicker>
              <SC.Title>
                { this.props.title }
              </SC.Title>
            </div>
            <SC.CurrentStep
              numSteps={ this.state.numSteps }
            >
              { this.state.currentStep < 9 && '0'}
              { this.state.currentStep + 1 }
            </SC.CurrentStep>
          </SC.Header>
          <SC.List>
            { instructionsList }
          </SC.List>
        </SC.Container>
        <SC.Controls
          showInstructions={ this.props.showInstructions }
        >
          <SC.NotesButton
            type='button'
          >
          <FontAwesomeIcon icon={['fal', 'sticky-note']} />
          </SC.NotesButton>
          <SC.NavButton
            onClick={() => { this.previousStep() }}
            type='button'
          >
            <FontAwesomeIcon icon={['fal', 'long-arrow-up']} />
          </SC.NavButton>
          <SC.NavButton
            onClick={() => { this.nextStep() }}
            type='button'
          >
            <FontAwesomeIcon icon={['fal', 'long-arrow-down']} />
          </SC.NavButton>
        </SC.Controls>
      </div>
    );
  }
}

Instructions.propTypes = {
  instructions: PropTypes.array,
  showInstructions: PropTypes.bool,
}


export default Instructions;
