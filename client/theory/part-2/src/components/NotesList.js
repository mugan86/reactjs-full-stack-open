import Note from './Note';
const NotesList = ({ notes, toggleImportanceOf }) => (
  <ul>
    {notes.map((note) => (
      <Note
        key={note.id}
        note={note}
        toggleImportance={() => toggleImportanceOf(note.id)}
      />
    ))}
  </ul>
);

export default NotesList;
