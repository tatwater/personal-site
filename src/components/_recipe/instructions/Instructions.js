import React, { Component } from "react";
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import RecipeNotes from '../notes/Notes';
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
      return instructionsList.push(
        <SC.Step
          active={ this.state.currentStep === key }
          done={ this.state.currentStep > key }
          onClick={() => { this.setStep(key) }}
          key={ key }
        >
          { instruction.step }
        </SC.Step>
      );
    });

    return (
      <SC.Wrapper
        currentView={ this.props.currentView }
      >
        <SC.Container
          currentView={ this.props.currentView }
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
          <SC.MobileHeading>Instructions</SC.MobileHeading>
          <SC.List>
            { instructionsList }
          </SC.List>
        </SC.Container>
        <RecipeNotes
          notes={ this.props.notes }
          setCurrentView={(view) => { this.props.setCurrentView(view) }}
          currentView={ this.props.currentView }
        />
        <SC.Controls
          currentView={ this.props.currentView }
        >
          { this.props.notes.length > 0 &&
            <SC.NotesButton
              onClick={() => { this.props.setCurrentView('notes') }}
              type='button'
            >
              <FontAwesomeIcon icon={['fal', 'sticky-note']} />
                <SC.NumNotes>
                  { this.props.notes.length }
                </SC.NumNotes>
            </SC.NotesButton>
          }
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
      </SC.Wrapper>
    );
  }
}

Instructions.propTypes = {
  currentView: PropTypes.string,
  instructions: PropTypes.array,
  notes: PropTypes.array,
  setCurrentView: PropTypes.func,
  title: PropTypes.string,
}


export default Instructions;
