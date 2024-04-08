import React, { useState } from 'react';
import Note from './Note'; // assuming Note component is in a separate file

function CreateNote() {
  const [note, setNote] = useState({
    title: '',
    content: ''
  });
  const [notesList, setNotesList] = useState([]);

  function handleChange(event) {
    const { name, value } = event.target;
    setNote(prevNote => ({
      ...prevNote,
      [name]: value
    }));
  }

  function handleAddNote() {
    if (note.title.trim() !== '' && note.content.trim() !== '') {
      setNotesList(prevNotesList => [...prevNotesList, note]);
      setNote({
        title: '',
        content: ''
      });
    }
  }

  return (
    <div>
      <form>
        <input
          name='title'
          placeholder='Title'
          value={note.title}
          onChange={handleChange}
        />
        <textarea
          name='content'
          placeholder='Write a note...'
          value={note.content}
          onChange={handleChange}
        />
        <button type="button" onClick={handleAddNote}> + </button>
      </form>
      {notesList.map((note, index) => (
        <Note key={index} title={note.title} content={note.content} />
      ))}
    </div>
  );
}

export default CreateNote;
