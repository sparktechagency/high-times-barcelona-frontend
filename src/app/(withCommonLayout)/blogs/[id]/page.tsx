'use client';
import BlogDetails from '@/components/pages/blog-details/BlogDetails';
import RelativeBlogs from '@/components/pages/blog-details/RelativeBlogs';
import PageHeader from '@/components/shared/PageHeader';
import { useGetSingleBlogQuery } from '@/redux/features/blog/blogApi';

const BlogDetailsPage = ({ params }: { params: { id: string } }) => {
      const { data: blog } = useGetSingleBlogQuery(params.id);

      return (
            <div>
                  <PageHeader title="Blog Details" />
                  <BlogDetails blog={blog!} />
                  <RelativeBlogs blog={blog!} />
            </div>
      );
};

export default BlogDetailsPage;
