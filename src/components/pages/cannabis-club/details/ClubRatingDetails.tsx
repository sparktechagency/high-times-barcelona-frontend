import { BsClock, BsGeoAlt, BsStarFill } from 'react-icons/bs';
import { RiGoogleLine } from 'react-icons/ri';

const ClubRatingDetails = () => {
      return (
            <div className="bg-[#f4fcf5] rounded-xl p-6 border-t-[5px] border-t-primary ">
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
      );
};

export default ClubRatingDetails;
