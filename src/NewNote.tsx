import React, { useState } from 'react';

interface IProps {
    addNote(note: string): void;
}

const NewNote: React.FC<IProps> = (props) => {

    const [note, setNote] = useState('');

    const updateNote = (e: any) => {
        if (e.target.value) {
            setNote(e.target.value)
        }
    }

    const onAddNote = () => {
        if (note) {
            props.addNote(note);
            setNote('');
        }

    }
    return (
        <div>
            <input type="text" value={note} name={note} placeholder="Note" onChange={updateNote} />
            <button onClick={() => { onAddNote() }}> Add Note </button>
        </div>
    );
}

export default NewNote;