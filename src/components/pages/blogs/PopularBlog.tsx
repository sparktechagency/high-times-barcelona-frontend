'use client';
import { TBlog, useGetPopularBlogsQuery } from '@/redux/features/blog/blogApi';
import { getImageUrl } from '@/utils/getImageUrl';
import { ConfigProvider, Input } from 'antd';
import moment from 'moment';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiSearch } from 'react-icons/ci';

const PopularBlog = ({ setSearchQuery }: { setSearchQuery: React.Dispatch<React.SetStateAction<string | null>> }) => {
      const { data: popularBlogs } = useGetPopularBlogsQuery([]);
      return (
            <div className="bg-white border-t-[5px] border-t-primary rounded-xl p-2">
                  <div className="search-bar pt-10 ">
                        <ConfigProvider theme={{ token: { colorPrimary: '#0E7A31' } }}>
                              <Input
                                    onChange={(e) => setSearchQuery(e.target.value)}
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
                        {popularBlogs?.map((blog, index) => (
                              <Link href={`/blogs/${blog?._id}`} className="flex items-center gap-4" key={index}>
                                    <div className="h-[120px] w-[154px] min-w-[154px]">
                                          <Image
                                                className="rounded-xl w-full h-full "
                                                width={154}
                                                height={120}
                                                src={getImageUrl(blog?.image)}
                                                alt={blog.title}
                                          />
                                    </div>
                                    <div className="blog-info">
                                          <h1 className="text-[#3F3F3F] line-clamp-3 font-semibold">{blog?.title}</h1>
                                          <p className="text-primary">{moment(blog?.createdAt).format('MMM DD, YYYY')}</p>
                                    </div>
                              </Link>
                        ))}
                  </div>
            </div>
      );
};

export default PopularBlog;
