import { Meta } from '../types';

import HeadNote from './HeadNote';

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
  meta: Meta;
}

const Note = ({ children, meta }: Props) => (
  <main>
    <HeadNote meta={meta} />
    <article className="leading-loose font-body">{children}</article>
  </main>
);

export default Note;
