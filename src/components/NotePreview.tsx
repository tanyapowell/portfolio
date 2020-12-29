import Link from 'next/link';
import HeadNote from './HeadNote';

const NotePreview = ({ note }) => {
  const {
    link,
    module: { meta },
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
