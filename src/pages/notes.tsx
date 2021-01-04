import NotePreview from '../components/NotePreview';
import { notes } from '../getAllNotes';
import Text from '../components/Text';
import Title from '../components/Title';

const Notes = () => {
  return (
    <>
      <Title>Blog</Title>
      <Text>
        Blah blah blah...I am a digital garden. Blah blah blah...I am a digital garden. Blah blah blah...I am a digital
        garden
      </Text>
      {notes.map((note) => (
        <NotePreview key={note.link} note={note} />
      ))}
    </>
  );
};

export default Notes;
