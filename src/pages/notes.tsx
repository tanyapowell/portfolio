import NotePreview from "../components/NotePreview";
import { notes } from "../getAllNotes";

const Notes = () => {
  console.log(notes)
  return (
    <>
      <h1>Notes</h1>
      {notes.map((note) => (
        <NotePreview key={note.link} note={note} />
      ))}
    </>
  );
};

export default Notes;