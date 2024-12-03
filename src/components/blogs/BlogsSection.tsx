import BlogImage1 from '@/assets/images/blogs/blog1.png';
import BlogImage2 from '@/assets/images/blogs/blog2.png';
import BlogCard from './BlogCard';
import PopularBlog from './PopularBlog';
import { ConfigProvider, Pagination } from 'antd';
import PopularTag from './PopularTag';
const BlogsSection = () => {
      const blogs = [
            {
                  title: 'Must Visit Places in Spain for Cannabis',
                  author: 'Admin',
                  date: '15-11-2024',
                  description: 'Traveling to Europe has never been more exciting, especially for cannabis enthusiasts.',
                  readMoreLink: '#',
                  image: BlogImage1,
            },
            {
                  title: 'How to Make the Best Cannabis Edibles',
                  author: 'Admin',
                  date: '15-11-2024',
                  description: 'Cannabis edibles are a fun and potent way to enjoy marijuana. Among the most popular options...',
                  readMoreLink: '#',
                  image: BlogImage2,
            },
            {
                  title: 'Buying Weed in Barcelona, Complete Guide',
                  author: 'Admin',
                  date: '15-11-2024',
                  description: 'Barcelona is known for its relaxed approach to cannabis, and buying weed here can be an...',
                  readMoreLink: '#',
                  image: BlogImage2,
            },
            {
                  title: 'Fun Way to Smoke Dry Sift Hash',
                  author: 'Admin',
                  date: '15-12-2024',
                  description: 'Smoking dry sift hash is an easy and enjoyable way to experience the potency of cannabis.',
                  readMoreLink: '#',
                  image: BlogImage1,
            },
            {
                  title: 'The Best Cannabis Strains for Relaxation',
                  author: 'Admin',
                  date: '15-12-2022',
                  description: "If you're looking to unwind and de-stress, certain cannabis strains are known for their calming...",
                  readMoreLink: '#',
                  image: BlogImage1,
            },
            {
                  title: 'How to Safely Store Cannabis at Home',
                  author: 'Admin',
                  date: '15-12-2022',
                  description: 'Proper storage of cannabis is essential to maintain its potency and freshness. Learn the...',
                  readMoreLink: '#',
                  image: BlogImage2,
            },
      ];

      return (
            <div className="bg-[#F8F8F8]">
                  <div className="container  grid grid-cols-12 gap-5">
                        <div className="col-span-12 md:col-span-8">
                              <div className="grid grid-cols-2 gap-4 my-10">
                                    {blogs.map((blog, index) => (
                                          <BlogCard key={index} blog={blog} />
                                    ))}
                              </div>

                              <div className="my-5 flex justify-center">
                                    <ConfigProvider theme={{ token: { colorPrimary: '#00863D' } }}>
                                          <Pagination defaultCurrent={1} total={50} />
                                    </ConfigProvider>
                              </div>
                        </div>
                        <div className="col-span-12 md:col-span-4 my-10">
                              <PopularBlog />
                              {/* here popular tags */}
                              <PopularTag />
                        </div>
                  </div>
            </div>
      );
};

export default BlogsSection;
