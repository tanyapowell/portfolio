import { Heading } from '@chakra-ui/react';

import { Meta } from '../types';

interface Props {
    meta: Meta;
    isPreview?: boolean;
}

const HeadNote = ({ meta, isPreview }: Props) => {
    const tag = isPreview ? 'h2' : 'h1';
    const size = isPreview ? 'xl' : '2xl';
    return (
        <Heading as={tag} size={size} mb={4} mt={4}>
            {meta.title}
        </Heading>
    );
};

export default HeadNote;
