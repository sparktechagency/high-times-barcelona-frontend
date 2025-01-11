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
import { TClub } from '@/redux/features/club/clubApi';

const MembershipRequirements: FC<{ club: TClub }> = ({ club }) => {
      return (
            <div className="bg-white rounded-xl p-6 space-y-6">
                  {/* Top Requirements */}
                  <div className="flex items-center gap-4">
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
                              <span className="text-red-500 font-semibold">{club?.ageLimit}+</span>
                        </div>
                        <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-full">
                              <span>
                                    <HiOutlineCurrencyEuro size={20} color="#009343" />{' '}
                              </span>
                              <span className="text-sm">Membership Fee</span>
                              <span className="text-primary font-semibold">{club?.memberShipFee}€</span>
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
                              <span className="text-primary">{club?.name}</span>
                        </h1>
                        <p>{club?.description}</p>
                  </div>

                  {/* Membership Requirements */}
                  <div className="space-y-4">
                        <h2 className="text-2xl font-semibold">
                              <span className="text-primary">Membership</span> Requirement
                        </h2>
                        <ul className="space-y-3 list-decimal pl-5">
                              <li>You must be at least 18 years old</li>
                              <li>Membership requires official identification(Passport, driver License, or any government ID)</li>
                              <li>A membership to the club is 20 euros per person, which must be paid At the reception.</li>
                              <li>The only way to be allowed to become a member is to Have an Invitation.</li>
                              <li>
                                    This club's membership is valid for a whole year. Once a member, you are free to come and go as often as
                                    you wish.
                              </li>
                        </ul>
                  </div>
            </div>
      );
};

export default MembershipRequirements;
