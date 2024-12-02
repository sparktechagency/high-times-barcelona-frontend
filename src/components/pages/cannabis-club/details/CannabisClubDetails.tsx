import ClubDetailsImage from '@/assets/images/club-details/club-details.png';
import Image from 'next/image';
import Gallery from '@/assets/images/club-details/gallery.png';
import Play from '@/assets/images/club-details/play.png';
import { BsClock, BsGeoAlt, BsStar, BsStarFill } from 'react-icons/bs';
import { RiGoogleLine } from 'react-icons/ri';
const CannabisClubDetails = ({ id }: { id: string }) => {
      return (
            <div className="container">
                  <div className="my-10">
                        <div className="grid grid-cols-2">
                              <div className="relative">
                                    <Image
                                          src={ClubDetailsImage}
                                          alt="Cannabis Club Details"
                                          className="w-full h-[434px] object-cover rounded-xl"
                                    />
                                    <div className="flex justify-end gap-4 absolute bottom-5 right-10 transform ">
                                          <div className="cursor-pointer">
                                                <Image
                                                      src={Play}
                                                      alt="Cannabis Club Details"
                                                      className="size-[45px] object-cover rounded-xl"
                                                />
                                          </div>
                                          <div className="cursor-pointer">
                                                <Image
                                                      src={Gallery}
                                                      alt="Cannabis Club Details"
                                                      className="w-[113px] h-[42px] object-cover rounded-xl"
                                                />
                                          </div>
                                    </div>
                              </div>
                              <div>
                                    <div className="bg-[#f4fcf5] rounded-xl p-6 ml-6">
                                          <div className="flex items-center gap-2 mb-4">
                                                <RiGoogleLine size={24} color="#FFC313" />
                                                <div className="flex items-center gap-2">
                                                      <span className="font-semibold">
                                                            <BsStarFill size={20} color="#FFC313" />
                                                      </span>
                                                      <span>4.8</span>
                                                      <span className="">(110 reviews)</span>
                                                </div>
                                          </div>

                                          <div className="space-y-4">
                                                <div className="flex items-center gap-2">
                                                      <BsGeoAlt size={24} color="#FFC313" className=" mt-1" />
                                                      <span>Tetuan /Monumental, Barcelona</span>
                                                </div>

                                                <div className="flex items-center gap-2">
                                                      <BsClock size={24} color="#FFC313" className=" mt-1" />
                                                      <div className="flex gap-3">
                                                            <p>Mon-Sat</p>
                                                            <p>10:00 - 23:00</p>
                                                      </div>
                                                </div>

                                                <div className="inline-block border border-primary bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
                                                      Open
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default CannabisClubDetails;
