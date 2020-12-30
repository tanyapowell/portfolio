import { Meta } from '../types';

interface Props {
  meta: Meta;
  isPreview?: boolean;
}

const HeadNote = ({ meta, isPreview }: Props) => {
  return isPreview ? (
    <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
      {meta.title}
    </h2>
  ) : (
    <h1 className="font-display font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
      {meta.title}
    </h1>
  );
};

export default HeadNote;
