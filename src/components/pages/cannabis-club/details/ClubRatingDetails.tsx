import { TClub } from '@/redux/features/club/clubApi';
import { BsClock, BsGeoAlt, BsStarFill } from 'react-icons/bs';
// import { RiGoogleLine } from 'react-icons/ri';

const ClubRatingDetails = ({ club }: { club: TClub }) => {
      return (
            <div className="bg-[#f4fcf5] rounded-xl p-6 border-t-[5px] border-t-primary ">
                  <div className="flex items-center gap-2 mb-4">
                        {/* <RiGoogleLine size={24} color="#FFC313" /> */}
                        <div className="flex items-center gap-2">
                              <span className="font-semibold">
                                    <BsStarFill size={20} color="#FFC313" />
                              </span>
                              <span>{club?.rating}</span>
                              {/* <span className="">(110 reviews)</span> */}
                        </div>
                  </div>

                  <div className="space-y-4">
                        <div className="flex items-center gap-2">
                              <BsGeoAlt size={24} color="#FFC313" className=" mt-1" />
                              <span>{club?.address}</span>
                        </div>

                        <div className="flex items-center gap-2">
                              <BsClock size={24} color="#FFC313" className=" mt-1" />
                              <div className="flex gap-3">
                                    <p>{club?.openDay}</p>
                                    <p>
                                          {club?.openingHour} - {club?.closingHour}
                                    </p>
                              </div>
                        </div>

                        <div
                              className={`
                                    inline-block
                                    border
                                    px-3
                                    py-1
                                    rounded-full
                                    text-sm
                                    ${
                                          club?.isOpen
                                                ? 'bg-green-100 text-green-600 border-green-600'
                                                : 'bg-red-100 text-red-600 border-red-600'
                                    }
                              `}
                        >
                              {club?.isOpen ? 'Open' : 'Closed'}
                        </div>
                  </div>
            </div>
      );
};

export default ClubRatingDetails;
