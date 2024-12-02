'use client';
import React from 'react';
import Image from 'next/image';

import SectionBackground from '@/components/ui/SectionBackgound';

import LeavingclubImage1 from '@/assets/images/leaving-club1.png';
import LeavingclubImage2 from '@/assets/images/leaving-club2.png';
import LeavingclubImage3 from '@/assets/images/leaving-club3.png';
const leavingClubData = [
      {
            icon: LeavingclubImage1,
            title: {
                  part1: 'Leave cannabis ',
                  part2: 'for Storage',
            },
            description:
                  'If you have unused cannabis, you can have it stored in the club dispensary under your name until your next visit to the club.',
      },
      {
            icon: LeavingclubImage3,
            title: {
                  part1: 'Leaving',
                  part2: ' the Club',
            },
            description:
                  'Inside the club, you can legally consume as much as you like. After, you are allowed to go out in public, even if still under the influence of weed.',
      },
      {
            icon: LeavingclubImage2,
            title: {
                  part1: 'Take any',
                  part2: 'Unused cannabis with you',
            },
            description:
                  'Cannabis use is only allowed inside the club. Public consumption is illegal and can result in fines of 500€ to 1,000€. If carrying cannabis, be discreet and keep it well-hidden.',
      },
];

const LeavingClub = () => {
      return (
            <section className="py-32 bg-[#ebf8ed] relative">
                  <div className="container relative">
                        {/* Header */}
                        <div className="text-center mb-16">
                              <div className="mb-4">
                                    <h3 className="text-3xl md:text-5xl font-medium text-black">Leaving</h3>
                                    <h2 className="text-3xl md:text-5xl font-medium text-primary mt-2">Cannabis Club</h2>
                              </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
                              {leavingClubData.map((leavingClub, index) => (
                                    <div key={index} className="bg-white rounded-[32px] p-8 shadow-sm">
                                          <div className="bg-[#ebf8ed] rounded-full size-[70px] flex items-center justify-center mb-6">
                                                <Image
                                                      src={leavingClub.icon}
                                                      alt={leavingClub.title.part1}
                                                      width={80}
                                                      height={80}
                                                      className="size-[80px] object-contain"
                                                />
                                          </div>
                                          <h3 className="text-3xl font-medium mb-4">
                                                {leavingClub.title.part1} <span className="text-primary">{leavingClub.title.part2}</span>
                                          </h3>
                                          <p className="text-gray-600">{leavingClub.description}</p>
                                    </div>
                              ))}
                        </div>
                  </div>
            </section>
      );
};

export default LeavingClub;
