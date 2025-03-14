'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from 'antd';
import Ganja from '@/assets/images/ganja2.svg';
import { BsClock, BsGeoAlt, BsStarFill } from 'react-icons/bs';
import { TClub, useGetApprovedClubsQuery } from '@/redux/features/club/clubApi';
import { getImageUrl } from '@/utils/getImageUrl';
import { MapIcon } from 'lucide-react';

// Add keyframes animation
const fadeInAnimation = `
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
`;

const ExploreClubs = () => {
      const [showAll, setShowAll] = useState(false);
      const { data: clubs } = useGetApprovedClubsQuery([]);

      // Inject animation styles
      React.useEffect(() => {
            const styleSheet = document.createElement('style');
            styleSheet.textContent =
                  fadeInAnimation +
                  `
                  html {
                        scroll-behavior: smooth;
                  }
            `;
            document.head.appendChild(styleSheet);
            return () => {
                  document.head.removeChild(styleSheet);
            };
      }, []);

      const ClubCard = ({ club, index }: { club: TClub; index: number }) => (
            <div
                  className="bg-[#fbfaf7] shadow-md rounded-lg p-4 flex flex-col md:flex-row justify-center items-center gap-4 transition-all duration-500"
                  style={{
                        opacity: 0,
                        transform: 'translateY(20px)',
                        animation: `fadeIn 0.5s ease-out ${index * 0.1}s forwards`,
                  }}
            >
                  {/* Club Info */}
                  <div className="flex-1">
                        {/* Rating */}
                        <div className="inline-flex items-center gap-1 bg-[#FFF9E5] text-[#FFB800] px-2 py-1 rounded mb-2">
                              <span>{club.rating}</span>
                              <span>
                                    <BsStarFill />
                              </span>
                        </div>

                        {/* Club Details */}
                        <h3 className="text-xl font-medium text-[#1A1A1A] mb-4">{club?.name}</h3>

                        <div className="space-y-2 mb-4">
                              <div className="flex items-center gap-2">
                                    <span>
                                          <BsClock />
                                    </span>
                                    <span>{club?.openingHour}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                    <span>
                                          <BsGeoAlt />
                                    </span>
                                    <span>{club?.address}</span>
                              </div>
                        </div>

                        {/* CTA Button */}
                        <Button
                              href={`/cannabis-club/${club._id}`}
                              type="primary"
                              style={{
                                    backgroundColor: '#00863D',
                                    color: '#fff',
                              }}
                              icon={<Image src={Ganja} alt="Ganja" className="w-5 h-5" />}
                              iconPosition="end"
                        >
                              Become A Member
                        </Button>
                  </div>
                  {/* Club Image */}
                  <div className="relative md:w-[180px] w-full h-[180px] rounded-lg overflow-hidden">
                        <Image src={getImageUrl(club?.image)} alt={club?.name} fill className="object-cover" />
                  </div>
            </div>
      );

      return (
            <section className="py-20 bg-gradient-to-b from-[#F8F8F899] to-[#F2FFF4]">
                  <div id="cannabis-clubs" className="container">
                        {/* Header */}
                        <div className="text-center mb-16">
                              <div className="flex items-center justify-center gap-2 mb-4">
                                    <Image src={Ganja} alt="Cannabis" className="size-12" />
                                    <h2 className="text-3xl title-font md:text-5xl font-bold text-[#1A1A1A]">Explore Cannabis</h2>
                              </div>
                              <h3 className="text-3xl md:text-5xl title-font font-bold text-primary">Social Club In Barcelona</h3>
                        </div>

                        {/* Club Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              {clubs?.map((club, index) => (
                                    <ClubCard key={club._id} club={club} index={index} />
                              ))}
                        </div>

                        {/* View All Button */}
                        <div className="flex justify-center gap-3 mt-12">
                              <Button
                                    type="default"
                                    onClick={() => setShowAll(!showAll)}
                                    style={{
                                          backgroundColor: 'transparent',
                                          color: '#000',
                                          border: '1px solid #00863D',
                                          padding: '1.5rem 3rem',
                                    }}
                                    icon={<Image src={Ganja} alt="Ganja" className="w-5 h-5" />}
                                    iconPosition="end"
                              >
                                    {showAll ? 'Show Less' : 'View All'}
                              </Button>
                              <Button
                                    href="#weed-map"
                                    type="primary"
                                    style={{
                                          backgroundColor: '#00863D',
                                          color: '#fff',
                                          padding: '1.5rem 3rem',
                                    }}
                                    icon={<MapIcon />}
                                    iconPosition="end"
                              >
                                    Weed Map
                              </Button>
                        </div>
                  </div>
            </section>
      );
};

export default ExploreClubs;
