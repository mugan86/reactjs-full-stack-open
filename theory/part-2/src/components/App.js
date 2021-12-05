import React, { useState, useEffect } from "react";
import Note from "./Note";
import axios from "axios";
const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("a new note...");
  // Para filtrar elementos mostrados
  const [showAll, setShowAll] = useState(true);
  /**
   * Ahora podemos ver más claramente que la función 
   * useEffect en realidad toma dos parámetros. 
   * La primera es una función, el efecto en sí mismo. 
   * Según la documentación:
   * De forma predeterminada, los efectos se ejecutan 
   * después de cada renderizado completo, pero puede 
   * elegir activarlo solo cuando ciertos valores han
   * cambiado.
   * Por lo tanto, por defecto, el efecto siempre se 
   * ejecuta después de que el componente ha sido 
   * renderizado. En nuestro caso, sin embargo, solo 
   * queremos ejecutar el efecto junto con el primer 
   * render.
   * El segundo parámetro de useEffect se usa para 
   * especificar la frecuencia con la que se ejecuta 
   * el efecto. Si el segundo parámetro es una matriz 
   * vacía [], entonces el efecto solo se ejecuta 
   * junto con el primer renderizado del componente.
   */
  const hook = () => {
    console.log("effect");
    axios.get("http://localhost:3001/notes").then((response) => {
      console.log("promise fulfilled");
      setNotes(response.data);
    });
  };
  useEffect(hook, []);
  console.log("render", notes.length, "notes");
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
