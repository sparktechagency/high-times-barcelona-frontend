import { FC } from 'react';
import FlagDE from '@/assets/images/flags/german.png';
import FlagES from '@/assets/images/flags/spain.png';
import FlagFR from '@/assets/images/flags/france.png';
import FlagGB from '@/assets/images/flags/uk.png';
import FlagIT from '@/assets/images/flags/italy.png';
import Image from 'next/image';
import { LanguagesIcon } from 'lucide-react';
import { FcInvite } from 'react-icons/fc';
import { TiBusinessCard } from 'react-icons/ti';
import { TbRating18Plus } from 'react-icons/tb';
import { HiOutlineCurrencyEuro } from 'react-icons/hi';

const MembershipRequirements: FC = () => {
      return (
            <div className="bg-white rounded-xl p-6 space-y-6">
                  {/* Top Requirements */}
                  <div className="flex items-center flex-wrap gap-4">
                        <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-full">
                              <span>
                                    <TiBusinessCard size={20} color="#009343" />
                              </span>
                              <span className="text-sm">Only for members</span>
                        </div>
                        <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-full">
                              <span>
                                    <TbRating18Plus size={20} color="#009343" />{' '}
                              </span>
                              <span className="text-sm">Minimum Age</span>
                              <span className="text-red-500 font-semibold">18+</span>
                        </div>
                        <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-full">
                              <span>
                                    <HiOutlineCurrencyEuro size={20} color="#009343" />{' '}
                              </span>
                              <span className="text-sm">Membership Fee</span>
                              <span className="text-primary font-semibold">20€</span>
                        </div>
                  </div>

                  {/* Languages */}
                  <div className="space-y-2">
                        <div className="flex items-center gap-2">
                              <span>
                                    <LanguagesIcon color="#009343" />
                              </span>{' '}
                              <span className="text-sm ">Languages Spoken:</span>
                              <div className="flex items-center gap-2">
                                    <Image src={FlagIT} width={26} height={24} alt="Italian flag" />
                                    <Image src={FlagES} width={26} height={24} alt="Spanish flag" />
                                    <Image src={FlagDE} width={26} height={24} alt="German flag" />
                                    <Image src={FlagFR} width={26} height={24} alt="French flag" />
                                    <Image src={FlagGB} width={26} height={24} alt="UK flag" />
                              </div>
                        </div>
                  </div>

                  {/* Club Name and Description */}
                  <div className="space-y-4 text-[#1B2F2B]">
                        <h1 className="text-3xl font-bold">
                              <span className="text-primary">MANO</span> <span className="text-[#FFB800]">VERDE</span>
                        </h1>
                        <p className="">
                              The Mano Verde Social Club is a cannabis social club that provides a distinctive and pleasant experience for
                              its members. It is situated in the center of Barcelona, close to Placa de Tetuan. The club has a welcoming
                              atmosphere that is ideal for learning, working on a laptop, or hanging out with friends.
                        </p>
                        <p className="">
                              The club offered a wide range of cannabis products, including edibles, concentrates, and a number of strains.
                              The goods were of the highest quality, and the costs were fair. You can find precisely what you're looking
                              for, and the staff will be glad to make suggestions based on your preferences.
                        </p>
                  </div>

                  {/* Membership Requirements */}
                  <div className="space-y-4">
                        <h2 className="text-2xl font-semibold">
                              <span className="text-primary">Membership</span> Requirement
                        </h2>
                        <ul className="space-y-3 list-decimal pl-5">
                              <li>You must be at least 18 years old</li>
                              <li>You must have a valid ID</li>
                              <li>You must be a resident of the city</li>
                              <li>You must agree to the club rules</li>
                              <li>You must pay the membership fee</li>
                        </ul>
                  </div>
            </div>
      );
};

export default MembershipRequirements;
