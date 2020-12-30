import { Meta } from '../types';

interface Props {
  meta: Meta;
  isPreview?: boolean;
}

const HeadNote = ({ meta, isPreview }: Props) => {
  return isPreview ? (
    <h2 className="font-display text-4xl py-4">🌺 {meta.title}</h2>
  ) : (
    <h1 className="font-display text-5xl py-4">{meta.title}</h1>
  );
};

export default HeadNote;
