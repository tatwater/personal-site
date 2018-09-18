import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as SC from './notes_styles';


const RecipeNotes = ({ notes, notesVisible, setNotesVisible, showInstructions }) => {
  return (
    <div>
      <SC.Overlay
        onClick={() => { setNotesVisible(false) }}
        notesVisible={ notesVisible }
      />
      <SC.Container
        notesVisible={ notesVisible }
        showInstructions={ showInstructions }
      >
        <SC.MobileHeading>Notes</SC.MobileHeading>
        <SC.List>
          { notes }
        </SC.List>
        <SC.NotesButton
          notesVisible={ notesVisible }
          onClick={() => { setNotesVisible(false) }}
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
