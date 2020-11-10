import React, { useState } from 'react';

interface IProps {
    addNote(note: string): void;
}

const NewNote: React.FC<IProps> = ({ addNote }) => {

    const [note, setNote] = useState('');

    const updateNote = (e: React.FormEvent<HTMLInputElement>) => {

        // setNote(e.target.value)
    }


    const onAddNote = () => {
        addNote(note);
        setNote('')
    }
    return (
        <div>
            <input type="text" name="note" placeholder="Note" onChange={updateNote} />
            <button onClick={() => { onAddNote() }}> Add Note </button>
        </div>
    );
}

export default NewNote;