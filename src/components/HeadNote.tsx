import { Meta } from '../types';

interface Props {
  meta: Meta,
  isNote?: boolean
}

const HeadNote = ({ meta, isNote }: Props) => (
  <>
    <h1>{meta.title}</h1>
  </>
);

export default HeadNote;
