import { Meta } from '../types';

interface Props {
    meta: Meta;
}

const HeadNote = ({ meta }: Props) => (
    <>
        <h1>{meta.title}</h1>
    </>
);

export default HeadNote;
