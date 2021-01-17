import { Meta } from '@/utils/types';
import BlogPostHeader from '@/components/BlogPostHeader';
import Text from '@/components/Text';

interface Props {
  children: Element;
  meta: Meta;
}

const BlogPost = ({ children, meta }: Props) => (
  <main>
    <BlogPostHeader meta={meta} />
    <Text>{meta.date}</Text>
    <article className="leading-loose font-body prose lg:prose-x prose-blue">{children}</article>
  </main>
);

export default BlogPost;
