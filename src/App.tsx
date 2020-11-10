import React, { useState } from 'react';
import NewNote from './NewNote';
import './App.css';

interface IProps {
  addNote(note: string[]): void;
}

const App = () => {

  return (
    <div className="App">
      <NewNote addNote={() => { alert("HI")}} />
      <div>
        <hr />
        <ul>
          Some Note
        </ul>
      </div>
    </div>
  );
}

export default App;
