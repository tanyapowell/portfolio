import { Meta } from '../types';
import HeadNote from './HeadNote';

interface Props {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    children: any;
    meta: Meta;
}

const Note = ({ children, meta }: Props) => (
    <>
        <HeadNote meta={meta} />
        <article>{children}</article>
    </>
);

export default Note;
