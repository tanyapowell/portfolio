import HeadNote from './HeadNote';

const Note = ({ children, meta }) => (
  <>
    <HeadNote meta={meta} isNote />
    <article>{children}</article>
  </>
);

export default Note;
