'use client';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import Spades from '@/assets/images/spades.svg';
import ClubCard from '@/components/common/ClubCard';
import { useState } from 'react';
import { TClub, useGetApprovedClubsQuery } from '@/redux/features/club/clubApi';

// Dynamically import ClubMap with no SSR
const ClubMap = dynamic(() => import('./map/ClubMap'), {
      ssr: false,
      loading: () => (
            <div className="w-full h-[500px] bg-gray-100 animate-pulse rounded-lg flex items-center justify-center">Loading map...</div>
      ),
});

const ClubMapSection = () => {
      const [selectedClub, setSelectedClub] = useState<TClub | null>(null);
      const { data: approvedClubs } = useGetApprovedClubsQuery([]);

      return (
            <div id="weed-map" className="bg-gradient-to-b from-[#F8F8F899] to-[#F2FFF4]">
                  <div className="container py-20 ">
                        <div className="text-center mb-16 capitalize space-y-3">
                              <h6 className="text-3xl  md:text-5xl font-extrabold text-black">Looking for a legit</h6>
                              <h1 className="text-3xl md:text-5xl font-extrabold text-primary">
                                    place to smoke weed in <span className="text-secondary font-extrabold">Barcelona?</span>
                              </h1>
                              <p className="text-[#192B27]">
                                    Check out our cannabis club map and join one today—it’s quick and hassle-free!
                              </p>
                        </div>
                        <div className="grid grid-cols-12 gap-5 ">
                              <div className="col-span-12 md:col-span-8 h-[710px]">
                                    <ClubMap
                                          approvedClubs={approvedClubs || []}
                                          selectedClub={selectedClub}
                                          setSelectedClub={setSelectedClub}
                                    />
                              </div>

                              <div className="col-span-12 md:col-span-4 h-[710px] bg-white  shadow-md border-t-[5px] border-t-primary rounded-xl">
                                    <h1 className="text-xl md:text-2xl flex items-center justify-center gap-2 font-medium text-primary text-center p-4">
                                          <span>
                                                <Image width={30} height={30} src={Spades} alt="Spades" />
                                          </span>
                                          <span className="text-black">POPULAR</span> CLUB
                                    </h1>
                                    <div className="h-[calc(100%-88px)] overflow-y-auto px-4 space-y-3 scrollbar-none">
                                          {/* cards */}
                                          {approvedClubs?.map((club, index) => (
                                                <ClubCard key={index} club={club} onClick={() => setSelectedClub(club)} />
                                          ))}
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default ClubMapSection;
