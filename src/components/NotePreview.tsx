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
    <div className="w-full border-solid border-b-2 border-light-blue-500 py-5">
      <Link href={'/notes' + link}>
        <a>
          <HeadNote meta={meta} isPreview />
          <p className="text-xl font-body">{meta.description}</p>
        </a>
      </Link>
    </div>
  );
};

export default NotePreview;
