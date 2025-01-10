'use client';
import BlogCard from './BlogCard';
import PopularBlog from './PopularBlog';
import { ConfigProvider, Pagination } from 'antd';
import PopularTag from './PopularTag';
import { useGetBlogsQuery } from '@/redux/features/blog/blogApi';
import { useState } from 'react';

const BlogsSection = () => {
      const [page, setPage] = useState(1);
      const [selectedTag, setSelectedTag] = useState<string | null>(null);
      const [searchQuery, setSearchQuery] = useState<string | null>(null);

      const { data: blogsData, isLoading } = useGetBlogsQuery([
            { name: 'page', value: page },
            { name: 'limit', value: 4 },
            { name: 'tag', value: selectedTag },
            { name: 'searchTerm', value: searchQuery },
      ]);

      const blogs = blogsData?.result || [];
      const totalBlogs = blogsData?.meta?.total || 0;

      return (
            <div className="bg-[#F8F8F8]">
                  <div className="container grid grid-cols-12 gap-5">
                        <div className="col-span-12 md:col-span-8">
                              <div className="grid grid-cols-2 gap-4 my-10">
                                    {isLoading ? (
                                          <p className="col-span-2 text-center text-lg font-medium text-gray-500">Loading blogs...</p>
                                    ) : blogs.length > 0 ? (
                                          blogs.map((blog, index) => <BlogCard key={index} blog={blog} />)
                                    ) : (
                                          <p className="col-span-2 text-center text-lg font-medium text-gray-500">
                                                No blogs found for the selected tag.
                                          </p>
                                    )}
                              </div>

                              {blogs.length > 0 && (
                                    <div className="my-5 flex justify-center">
                                          <ConfigProvider theme={{ token: { colorPrimary: '#00863D' } }}>
                                                <Pagination
                                                      onChange={(page) => setPage(page)}
                                                      defaultCurrent={1}
                                                      total={totalBlogs}
                                                      pageSize={blogsData?.meta.limit}
                                                />
                                          </ConfigProvider>
                                    </div>
                              )}
                        </div>
                        <div className="col-span-12 md:col-span-4 my-10">
                              <PopularBlog setSearchQuery={setSearchQuery} />
                              <PopularTag setTags={setSelectedTag} />
                        </div>
                  </div>
            </div>
      );
};

export default BlogsSection;
