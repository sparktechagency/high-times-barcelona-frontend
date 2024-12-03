import BlogImage1 from '@/assets/images/blogs/blog1.png';
import BlogImage2 from '@/assets/images/blogs/blog2.png';
import { ConfigProvider, Input } from 'antd';
import { SearchXIcon } from 'lucide-react';
import Image from 'next/image';
import { CiSearch } from 'react-icons/ci';
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

const PopularBlog = () => {
      return (
            <div className="bg-white border-t-[5px] border-t-primary rounded-xl p-2">
                  <div className="search-bar pt-10 ">
                        <ConfigProvider theme={{ token: { colorPrimary: '#0E7A31' } }}>
                              <Input
                                    style={{
                                          height: 46,
                                          backgroundColor: '#f7fcf9',
                                    }}
                                    suffix={<CiSearch size={24} color="#0E7A31" />}
                                    placeholder="Search..."
                              />
                        </ConfigProvider>
                  </div>
                  <h2 className="text-[#3F3F3F] font-medium text-2xl py-5">Popular Blog</h2>
                  <hr />

                  <div className="space-y-4 mt-4">
                        {blogs.map((blog, index) => (
                              <div className="flex items-center gap-4" key={index}>
                                    <Image width={154} height={120} src={blog.image.src} alt={blog.title} />
                                    <div className="blog-info">
                                          <h1 className="text-[#3F3F3F]">{blog.title}</h1>
                                          <p className="text-primary">{blog.date}</p>
                                    </div>
                              </div>
                        ))}
                  </div>
            </div>
      );
};

export default PopularBlog;
