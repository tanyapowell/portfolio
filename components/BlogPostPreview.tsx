import { Meta } from '@/utils/types';
import BlogPostHeader from '@/components/BlogPostHeader';
import Link from '@/components/Link';

type BlogPost = {
  link: string;
  module: Module;
};

type Module = {
  meta: Meta;
};

interface Props {
  blogPost: BlogPost;
}

const BlogPostPreview = ({ blogPost }: Props) => {
  const {
    link,
    module: { meta },
  } = blogPost;
  return (
    <div className="w-full border-solid border-b border-light-blue-500 py-4">
      <Link link={'/blog' + link}>
        <>
          <BlogPostHeader meta={meta} isPreview />
          <p className="font-body prose">{meta.description}</p>
        </>
      </Link>
    </div>
  );
};

export default BlogPostPreview;
