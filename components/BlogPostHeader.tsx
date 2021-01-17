import { Meta } from '@/utils/types';
import Title from '@/components/Title';

interface Props {
  meta: Meta;
  isPreview?: boolean;
}

const BlogPostHeader
 = ({ meta, isPreview }: Props) => {
  return isPreview ? (
    <div className="flex justify-between items-center mb-4">
      <h2 className="font-display font-bold leading-relaxed text-3xl md:text-4xl tracking-tight">{meta.title}</h2>
      <p className="font-body">{meta.date}</p>
    </div>
  ) : (
    <Title>{meta.title}</Title>
  );
};

export default BlogPostHeader;
