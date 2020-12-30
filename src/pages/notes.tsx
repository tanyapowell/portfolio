import NotePreview from '../components/NotePreview';
import { notes } from '../getAllNotes';

const Notes = () => {
  return (
    <>
      <h1 className="font-display text-5xl text-center"> 🌸 Digital Gardening 🌸</h1>
      {notes.map((note) => (
        <NotePreview key={note.link} note={note} />
      ))}
    </>
  );
};

export default Notes;
