import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

import * as SC from './tabNav_styles';


const TabNav = ({ currentView, hasNotes, setCurrentView }) => (
  <SC.Container>
    <SC.Tab
      active={ currentView === 'overview' }
      onClick={() => { setCurrentView('overview') }}
      type='button'
    >
      <FontAwesomeIcon icon={['fal', 'image']} />
    </SC.Tab>
    <SC.Tab
      active={ currentView === 'prep' }
      onClick={() => { setCurrentView('prep') }}
      type='button'
    >
      <FontAwesomeIcon icon={['fal', 'clipboard-list']} />
    </SC.Tab>
    <SC.Tab
      active={ currentView === 'instructions' }
      onClick={() => { setCurrentView('instructions') }}
      type='button'
    >
      <FontAwesomeIcon icon={['fal', 'list-ol']} />
    </SC.Tab>
    { hasNotes &&
      <SC.Tab
        active={ currentView === 'notes' }
        onClick={() => { setCurrentView('notes') }}
        type='button'
      >
        <FontAwesomeIcon icon={['fal', 'sticky-note']} />
      </SC.Tab>
    }
  </SC.Container>
);

TabNav.propTypes = {
  currentView: PropTypes.string,
  setCurrentView: PropTypes.func,
}


export default TabNav;
