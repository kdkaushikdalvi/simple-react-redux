import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NotesState } from './notesReducer';
import { addNoteAction } from './actions';

import NewNote from './NewNote';

const App = () => {

  const notesArray = useSelector<NotesState, NotesState['notes']>((state) => state.notes)
  const dispatch = useDispatch();

  const addNote = (note: any) => {
    dispatch(addNoteAction(note))
  }

  return (
    <Fragment>
      <div className="app-container">
        <NewNote addNote={(note) => { addNote(note) }} />
      </div>
      <div className="list-container">
          <ul>{
            notesArray.map((note, key) => {
              return (<li key={key}>{note}</li>)
            })
          }
          </ul>
        </div>
    </Fragment>
  );
}

export default App;
