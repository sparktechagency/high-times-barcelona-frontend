import { TBlog } from '@/redux/features/blog/blogApi';
import { getImageUrl } from '@/utils/getImageUrl';
import { Button } from 'antd';
import { Calendar } from 'lucide-react';
import moment from 'moment';
import { LiaUserEditSolid } from 'react-icons/lia';

const BlogCard = ({ blog }: { blog: TBlog }) => {
      return (
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border-t-[5px] border-t-primary p-2 h-full">
                  <div className="flex flex-col h-full">
                        <img src={getImageUrl(blog.image)} alt={blog.title} className="w-full h-48 object-cover flex-1" />
                        <div className="p-4 flex flex-col justify-between flex-1">
                              <div className="text-sm text-gray-600 mb-2">
                                    <div className="flex items-center gap-4">
                                          <div className="flex items-center gap-2">
                                                <LiaUserEditSolid size={24} color="#0E7A31" />
                                                <span>Admin</span>
                                          </div>
                                          <div className="flex items-center gap-1">
                                                <Calendar size={24} color="#0E7A31" />
                                                <span>{moment(blog.createdAt).format('MMM DD, YYYY')}</span>
                                          </div>
                                    </div>
                              </div>
                              <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                              <p className="text-gray-600 mb-4 line-clamp-2">{blog.description}</p>
                              <Button
                                    href={`/blogs/${blog.title}`}
                                    style={{
                                          backgroundColor: '#0E7A31',
                                          borderColor: '#0E7A31',
                                          color: '#fff',
                                          width: 163,
                                    }}
                              >
                                    Read More
                              </Button>
                        </div>
                  </div>
            </div>
      );
};

export default BlogCard;
