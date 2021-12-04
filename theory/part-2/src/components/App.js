import React, { useState } from "react";
import Note from "./Note";

const App = (props) => {
  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState("a new note...");
  // Para filtrar elementos mostrados
  const [showAll, setShowAll] = useState(true);
  // Aquí enviamos los datos del formulario, en este caso
  // solo tenemos una nota
  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notes.length + 1,
    };

    setNotes(notes.concat(noteObject));
    setNewNote(""); // Resetear la nota
  };
  // Aquí almacenamos los cambios
  const handleNoteChange = (event) => setNewNote(event.target.value);

  const notesToShow = showAll
    ? notes
    : notes.filter((note) => note.important === true);

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          Show {showAll ? "important" : "all"}
        </button>
      </div>
      <ul>
        {notesToShow.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default App;
