import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as SC from './notes_styles';


const RecipeNotes = ({ currentView, notes, setCurrentView }) => {
  return (
    <div>
      <SC.Overlay
        onClick={() => { setCurrentView('instructions') }}
      />
      <SC.Container
        currentView={ currentView }
      >
        <SC.MobileHeading>Notes</SC.MobileHeading>
        <SC.List>
          { notes }
        </SC.List>
        <SC.NotesButton
          onClick={() => { setCurrentView('instructions') }}
          type='button'
        >
          <FontAwesomeIcon icon={['fal', 'sticky-note']} />
            <SC.NumNotes>
              { notes.length }
            </SC.NumNotes>
        </SC.NotesButton>
      </SC.Container>
    </div>
  );
}


export default RecipeNotes;
