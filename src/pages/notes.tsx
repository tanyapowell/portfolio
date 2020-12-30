import NotePreview from '../components/NotePreview';
import { notes } from '../getAllNotes';

const Notes = () => {
  return (
    <>
      <h1 className="font-display font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
        Digital Gardening
      </h1>
      {notes.map((note) => (
        <NotePreview key={note.link} note={note} />
      ))}
    </>
  );
};

export default Notes;
