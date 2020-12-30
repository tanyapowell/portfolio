import { Container, Stack, Heading, StackDivider } from '@chakra-ui/react';

import NotePreview from '../components/NotePreview';
import { notes } from '../getAllNotes';

const Notes = () => {
    return (
        <Container>
            <Heading as="h1" size="2xl" mb={8} mt={8}>
                Digital Garden
            </Heading>
            <Stack spacing={8} divider={<StackDivider borderColor="gray.200" />}>
                {notes.map((note) => (
                    <NotePreview key={note.link} note={note} />
                ))}
            </Stack>
        </Container>
    );
};

export default Notes;
