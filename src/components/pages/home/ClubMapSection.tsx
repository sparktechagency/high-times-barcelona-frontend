'use client';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import Spades from '@/assets/images/spades.svg';
import MapCardImage from '@/assets/images/maps/map-card.jpg';
import ClubCard from '@/components/common/ClubCard';
import { useState } from 'react';

// Dynamically import ClubMap with no SSR
const ClubMap = dynamic(() => import('./map/ClubMap'), {
      ssr: false,
      loading: () => (
            <div className="w-full h-[500px] bg-gray-100 animate-pulse rounded-lg flex items-center justify-center">Loading map...</div>
      ),
});

const ClubMapSection = () => {
      const [selectedClub, setSelectedClub] = useState<string | null>(null);

      const clubs = [
            {
                  name: 'Cannabis Barcelona',
                  location: [41.3851, 2.1734] as [number, number],
                  rating: 4.9,
                  hours: '10:00 - 00:00',
                  address: 'Carrer, Barcelona, Spain',
                  image: MapCardImage.src,
                  openingHour: '10:00',
                  endHour: '00:00',
                  isOpen: true,
            },
            {
                  name: 'Green Point Cannabis Club',
                  location: [41.3962, 2.1963] as [number, number],
                  rating: 4.9,
                  hours: '10:00 - 00:00',
                  address: 'De Girona, Barcelona, Spain',
                  image: MapCardImage.src,
                  openingHour: '10:00',
                  endHour: '00:00',
                  isOpen: false,
            },
            {
                  name: 'Five For Club',
                  location: [41.4044, 2.1734] as [number, number],
                  rating: 4.9,
                  hours: '10:00 - 00:00',
                  address: 'Carrer, Barcelona, Spain',
                  image: MapCardImage.src,
                  openingHour: '10:00',
                  endHour: '00:00',
                  isOpen: false,
            },
            {
                  name: 'Cannabis Social Club',
                  location: [41.4054, 2.2023] as [number, number],
                  rating: 4.8,
                  hours: '11:00 - 23:00',
                  address: 'Carrer de la Marina, Barcelona, Spain',
                  image: MapCardImage.src,
                  openingHour: '11:00',
                  endHour: '23:00',
            },
            {
                  name: 'The Green Cloud',
                  location: [41.3934, 2.1654] as [number, number],
                  rating: 4.7,
                  hours: '12:00 - 22:00',
                  address: 'Carrer de Valldonzella, Barcelona, Spain',
                  image: MapCardImage.src,
                  openingHour: '12:00',
                  endHour: '22:00',
                  isOpen: true,
            },
            {
                  name: 'Green Planet',
                  location: [41.3894, 2.1943] as [number, number],
                  rating: 4.8,
                  hours: '10:00 - 00:00',
                  address: 'Carrer de la Llibreteria, Barcelona, Spain',
                  image: MapCardImage.src,
                  openingHour: '10:00',
                  endHour: '00:00',
                  isOpen: true,
            },
            {
                  name: 'The Joint',
                  location: [41.3954, 2.1734] as [number, number],
                  rating: 4.9,
                  hours: '11:00 - 23:00',
                  address: 'Carrer de Petrixol, Barcelona, Spain',
                  image: MapCardImage.src,
                  openingHour: '11:00',
                  endHour: '23:00',
                  isOpen: true,
            },
      ];
      return (
            <div id="weed-map" className="bg-gradient-to-b from-[#F8F8F899] to-[#F2FFF4]">
                  <div className="container py-20 ">
                        <div className="text-center mb-16 capitalize space-y-3">
                              <h1 className="text-3xl md:text-5xl font-bold text-black">Looking for a legit</h1>
                              <h1 className="text-3xl md:text-5xl font-bold text-primary">
                                    place to smoke weed in <span className="text-secondary font-bold">Barcelona?</span>
                              </h1>
                              <p className="text-[#192B27]">
                                    Check out our cannabis club map and join one today—it’s quick and hassle-free!
                              </p>
                        </div>
                        <div className="grid grid-cols-12 gap-5 ">
                              <div className="col-span-12 md:col-span-8 h-[710px]">
                                    <ClubMap selectedClub={selectedClub} />
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
                                          {clubs.map((club, index) => (
                                                <ClubCard key={index} club={club} onClick={() => setSelectedClub(club.name)} />
                                          ))}
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default ClubMapSection;
