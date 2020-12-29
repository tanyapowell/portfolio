import Link from 'next/link';
import { Meta } from '../types';
import HeadNote from './HeadNote';

type Note = {
    link: string;
    module: Module;
};

type Module = {
    meta: Meta;
};
interface Props {
    note: Note;
}

const NotePreview = ({ note }: Props) => {
    const {
        link,
        module: { meta }
    } = note;

    return (
        <article>
            <HeadNote meta={meta} />
            <Link href={'/notes' + link}>
                <a>Read more →</a>
            </Link>
        </article>
    );
};

export default NotePreview;
