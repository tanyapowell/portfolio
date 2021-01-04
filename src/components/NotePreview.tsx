import { Meta } from '../types';
import HeadNote from './HeadNote';
import Link from './Link';

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
    <div className="w-full border-solid border-b-2 border-light-blue-500 py-4">
      <Link link={'/notes' + link}>
        <>
          <HeadNote meta={meta} isPreview />
          <p className="font-body">{meta.description}</p>
        </>
      </Link>
    </div>
  );
};

export default NotePreview;
