import Image from 'next/image';
import { Calendar, User } from 'lucide-react';
import { TBlog } from '@/redux/features/blog/blogApi';
import moment from 'moment';
import { getImageUrl } from '@/utils/getImageUrl';
export default function BlogDetails({ blog }: { blog: TBlog }) {
      return (
            <div className="bg-[#F8F8F8] py-10 ">
                  <article className="container  bg-white border-t-[5px] border-t-primary rounded-lg">
                        <div className="relative w-full  rounded-lg pt-4 h-[550px]">
                              <Image
                                    // unoptimized
                                    src={getImageUrl(blog?.image)}
                                    alt="Aerial view of Barcelona city blocks"
                                    width={1200}
                                    height={675}
                                    className="object-cover w-full h-full"
                              />
                        </div>

                        <div className="flex items-center gap-6 text-sm mt-4 text-gray-600">
                              <div className="flex items-center gap-2">
                                    <User color="#0E7A31" className="w-4 h-4" />
                                    <span>Admin</span>
                              </div>
                              <div className="flex items-center gap-2">
                                    <Calendar color="#0E7A31" className="w-4 h-4" />
                                    <span>{moment(blog?.createdAt).format('MMM DD, YYYY')}</span>
                              </div>
                        </div>

                        <div className="my-5">
                              <p className="text-gray-600 mb-4">{blog?.description}</p>
                        </div>
                  </article>
            </div>
      );
}
