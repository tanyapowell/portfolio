import { Meta } from '../types';
import { Container, Stack } from '@chakra-ui/react';

import HeadNote from './HeadNote';

interface Props {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    children: any;
    meta: Meta;
}

const Note = ({ children, meta }: Props) => (
    <Container>
        <Stack spacing={8}>
            <HeadNote meta={meta} />
            <article>{children}</article>
        </Stack>
    </Container>
);

export default Note;
