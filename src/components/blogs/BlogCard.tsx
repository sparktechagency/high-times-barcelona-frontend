import { Button } from 'antd';
import { Calendar } from 'lucide-react';
import { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';
import { LiaUserEditSolid } from 'react-icons/lia';
import { PiUserGearDuotone } from 'react-icons/pi';

type TBlogsProps = { title: string; author: string; date: string; description: string; readMoreLink: string; image: StaticImageData };

const BlogCard = ({ blog }: { blog: TBlogsProps }) => {
      return (
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border-t-[5px] border-t-[#005125] p-2">
                  <img src={blog.image.src} alt={blog.title} className="w-full h-48 object-cover" />
                  <div className="p-4">
                        <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                              <div className="flex items-center gap-2">
                                    <LiaUserEditSolid size={24} color="#0E7A31" />
                                    <span>{blog.author}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                    <Calendar size={24} color="#0E7A31" />
                                    <span>{blog.date}</span>
                              </div>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                        <p className="text-gray-600 mb-4 line-clamp-2">{blog.description}</p>
                        <Button
                              href={`/blog/${blog.title}`}
                              style={{
                                    backgroundColor: '#0E7A31',
                                    borderColor: '#0E7A31',
                                    color: '#fff',
                              }}
                        >
                              Read More
                        </Button>
                  </div>
            </div>
      );
};

export default BlogCard;
