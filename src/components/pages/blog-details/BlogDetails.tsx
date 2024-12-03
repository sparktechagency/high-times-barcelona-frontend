import Image from 'next/image';
import { Calendar, User, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import BlogDetailsImage from '@/assets/images/blogs/blog-details.png';
export default function BlogDetails() {
      return (
            <div className="bg-[#F8F8F8] py-10 ">
                  <article className="container  bg-white border-t-[5px] border-t-[#005125] rounded-lg">
                        {/* Hero Image */}
                        <div className="relative w-full  rounded-lg pt-4">
                              <Image
                                    src={BlogDetailsImage}
                                    alt="Aerial view of Barcelona city blocks"
                                    width={1200}
                                    height={675}
                                    className="object-cover"
                              />
                        </div>

                        {/* Metadata */}
                        <div className="flex items-center gap-6 text-sm mt-4 text-gray-600">
                              <div className="flex items-center gap-2">
                                    <User color="#0E7A31" className="w-4 h-4" />
                                    <span>Admin</span>
                              </div>
                              <div className="flex items-center gap-2">
                                    <Calendar color="#0E7A31" className="w-4 h-4" />
                                    <span>15-11-2024</span>
                              </div>
                        </div>

                        {/* Title */}
                        <h1 className="text-3xl font-bold text-gray-900 my-2">Must Visit Places In Spain For Cannabis</h1>

                        {/* Content */}
                        <div className="space-y-4 text-gray-700">
                              <p>
                                    Traveling to Europe for the first time has never been more enjoyable, especially for cannabis
                                    enthusiasts, newcomers, and lovers, especially now that several countries in Europe and throughout the
                                    world are considering legalizing marijuana. As a result, Spain is quickly becoming into a global hub for
                                    all things marijuana, which is promising for the cannabis industry and a boost for cannabis tourists.
                              </p>

                              <p>
                                    Given that, some people might question where in Spain to find the greatest cannabis places to Visit. Do
                                    not worry; we have taken care of everything. Go through this manual. The sites and venues listed below
                                    are the best in Spain for a unique cannabis experience.
                              </p>

                              <ul className="list-disc pl-6 space-y-2">
                                    <li>Hemp museum Gallery</li>
                                    <li>Cannabis Social Clubs</li>
                                    <li>Museo de Cañamo</li>
                              </ul>

                              {/* Gallery Grid */}
                              <div className="grid grid-cols-2 gap-4 my-8">
                                    <div className="relative">
                                          <Image
                                                src={BlogDetailsImage}
                                                alt="Hemp Museum Gallery"
                                                width={500}
                                                height={500}
                                                className="object-cover rounded-lg"
                                          />
                                    </div>
                                    <div className="grid gap-4">
                                          <div className="relative ">
                                                <Image
                                                      src={BlogDetailsImage}
                                                      alt="Cannabis Club Menu"
                                                      width={500}
                                                      height={500}
                                                      className="object-cover rounded-lg"
                                                />
                                          </div>
                                    </div>
                              </div>

                              <p className="my-2">
                                    Despite the many places you can visit in Spain for a once-in-a-lifetime cannabis experience, cannabis
                                    clubs, dispensaries, and cannabis museums are good options to consider. Though any location in this
                                    guide will offer incredible experiences, you'll never forget not all sites open their doors to the
                                    public as you would like them to due to the cannabis laws of the country. Cannabis clubs, however, are
                                    known for being private establishments that operate by an invite-only model. Therefore, how much effort
                                    you put into booking will make all the difference regarding access.
                              </p>
                        </div>

                        {/* Share Section */}
                        <div className="flex items-center gap-4 pt-6 border-t py-3">
                              <span className="flex items-center gap-2 text-gray-600">
                                    <Share2 className="w-4 h-4" />
                                    Share this Post
                              </span>
                              <div className="flex gap-2 juen">
                                    <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-full">
                                          <Facebook className="w-5 h-5" />
                                    </button>
                                    <button className="p-2 text-cyan-500 hover:bg-cyan-50 rounded-full">
                                          <Twitter className="w-5 h-5" />
                                    </button>
                                    <button className="p-2 text-blue-700 hover:bg-blue-50 rounded-full">
                                          <Linkedin className="w-5 h-5" />
                                    </button>
                              </div>
                        </div>
                  </article>
            </div>
      );
}
