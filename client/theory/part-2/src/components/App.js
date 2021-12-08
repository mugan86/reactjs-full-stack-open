import React, { useState, useEffect } from "react";
import noteService from "./../services/notes";
import AddNoteForm from "./AddNoteForm";
import NotesList from "./NotesList";
import Footer from "./Footer";
import "./../index.css";

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
    noteService.getAll().then((response) => {
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
      id: notes[notes.length - 1].id + 1,
    };
    noteService.create(noteObject).then((response) => {
      setNotes(notes.concat(response.data));
      setNewNote(""); // Resetear la nota
    });
  };
  // Aquí almacenamos los cambios
  const handleNoteChange = (event) => setNewNote(event.target.value);

  const toggleImportanceOf = (id) => {
    // Filtrar la nota seleccionada
    const note = notes.find((n) => n.id === id);
    // Aplicar el cambio en "important"
    const changedNote = { ...note, important: !note.important };
    // Actualizar tanto en la API como en el estado de la app
    noteService.update(id, changedNote).then((response) => {
      // Actualizar el estado con el cambio aplicado, recorriendo todos los elementos
      // para tener la información actualizada
      setNotes(notes.map((note) => (note.id !== id ? note : response.data)));
    });
  };

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

      <NotesList notes={notesToShow} toggleImportanceOf={toggleImportanceOf} />
      <AddNoteForm
        add={addNote}
        newItem={newNote}
        onChange={handleNoteChange}
      />
      <Footer />
    </div>
  );
};

export default App;
