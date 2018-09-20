import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

import * as SC from './recipeTiming_styles';


const TimingsList = ({ timing }) => {
  const timesList = [];

  timing.map((time, key) => {
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

  return timesList;
}

const RecipeTiming = ({ setCurrentView, time, timing }) => (
  <SC.Container>
    <SC.TimeBreakdown>
      { time !== undefined &&
        <SC.TimeBlock isTotal>
          <SC.TimeAmount>
            { time.timeAmount }
          </SC.TimeAmount>
          <SC.TimeType>
            { time.timeUnits }
          </SC.TimeType>
        </SC.TimeBlock>
      }
      { timing && <TimingsList timing={ timing } /> }
    </SC.TimeBreakdown>
    <SC.InstructionsButton
      onClick={() => { setCurrentView('instructions') }}
      type='button'
    >
      INSTRUCTIONS
      <FontAwesomeIcon icon={['fal', 'long-arrow-right']} />
    </SC.InstructionsButton>
  </SC.Container>
);

RecipeTiming.propTypes = {
  hasTotalTime: PropTypes.bool,
  time: PropTypes.object,
  timing: PropTypes.array,
}


export default RecipeTiming;
