import { Meta } from '@/utils/types';
import Title from '@/components/Title';

interface Props {
  meta: Meta;
  isPreview?: boolean;
}

const HeadNote = ({ meta, isPreview }: Props) => {
  return isPreview ? (
    <div className="flex justify-between items-center">
      <h2 className="font-display font-bold leading-relaxed text-3xl md:text-4xl tracking-tight mb-4">{meta.title}</h2>
      <p className="font-body">{meta.date}</p>
    </div>
  ) : (
    <Title>{meta.title}</Title>
  );
};

export default HeadNote;
