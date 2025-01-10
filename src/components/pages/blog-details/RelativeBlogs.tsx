import BlogCard from '../blogs/BlogCard';
import { TBlog, useGetBlogsQuery } from '@/redux/features/blog/blogApi';
const RelativeBlogs = ({ blog }: { blog: TBlog }) => {
      const { data: relativeBlogs } = useGetBlogsQuery([
            { name: 'tag', value: blog?.tags[0] },
            { name: 'limit', value: 3 },
      ]);

      return (
            <div className="container my-10">
                  <h1 className="text-2xl">
                        Related <span className="text-primary">Blogs</span>
                  </h1>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-10">
                        {relativeBlogs?.result?.slice(0, 3).map((blog, index) => (
                              <BlogCard key={index} blog={blog} />
                        ))}
                  </div>
            </div>
      );
};

export default RelativeBlogs;
