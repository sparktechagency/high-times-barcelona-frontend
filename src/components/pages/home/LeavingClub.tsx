'use client';
import React from 'react';
import Image from 'next/image';

import SectionBackground from '@/components/ui/SectionBackgound';

import LeavingclubImage1 from '@/assets/images/leaving-club1.png';
import LeavingclubImage2 from '@/assets/images/leaving-club2.png';
import LeavingclubImage3 from '@/assets/images/leaving-club3.png';
import { useTranslations } from 'next-intl';

const LeavingClub = () => {
      const t = useTranslations('leaving-club-section');
      const leavingClubData = [
            {
                  icon: LeavingclubImage1,
                  title: t('card.leaving1.title'),
                  description: t('card.leaving1.description'),
            },
            {
                  icon: LeavingclubImage3,
                  title: t('card.leaving2.title'),
                  description: t('card.leaving2.description'),
            },
            {
                  icon: LeavingclubImage2,
                  title: t('card.leaving3.title'),
                  description: t('card.leaving3.description'),
            },
      ];
      return (
            <section className="py-32 bg-gradient-to-b from-[#F8F8F899] to-[#F2FFF4] relative">
                  <div className="container relative">
                        {/* Header */}
                        <div className="text-center mb-16">
                              <div className="mb-4">
                                    <h1 className="text-3xl md:text-5xl font-bold title-font text-primary mt-2">{t('title')}</h1>
                              </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
                              {leavingClubData.map((leavingClub, index) => (
                                    <div key={index} className="bg-white rounded-[32px] p-8 shadow-sm border-t-[5px] border-t-primary">
                                          <div className="bg-gradient-to-b from-[#F8F8F899] to-[#F2FFF4] rounded-full size-[70px] flex items-center justify-center mb-6">
                                                <Image
                                                      src={leavingClub.icon}
                                                      alt={leavingClub.title}
                                                      width={80}
                                                      height={80}
                                                      className="size-[80px] object-contain"
                                                />
                                          </div>
                                          <h3 className="text-3xl font-medium mb-4">{leavingClub.title}</h3>
                                          <p className="text-gray-600">{leavingClub.description}</p>
                                    </div>
                              ))}
                        </div>
                  </div>
            </section>
      );
};

export default LeavingClub;
