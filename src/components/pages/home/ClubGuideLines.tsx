'use client';
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import SectionBackground from '@/components/ui/SectionBackgound';

// Import icons
import Dor from '@/assets/images/door.png';
import HandShake from '@/assets/images/handshake2.png';
import Pc from '@/assets/images/pc.png';
import { useTranslations } from 'next-intl';

const ClubGuideLines = () => {
      const t = useTranslations('guideline-section');

      const guidelineData = [
            {
                  icon: Dor,
                  title: t('card.guideline1.title'),
                  description: t('card.guideline1.description'),
            },
            {
                  icon: Pc,
                  title: t('card.guideline2.title'),
                  description: t('card.guideline2.description'),
            },
            {
                  icon: HandShake,
                  title: t('card.guideline3.title'),
                  description: t('card.guideline3.description'),
            },
            // {
            //       icon: Pc,
            //       title: {
            //             part1: 'At',
            //             part2: 'Receptions',
            //       },
            //       description:
            //             "When you visit a cannabis club for the first time, you'll head to the reception desk to complete your registration. The club will verify your age with a valid ID to ensure only authorized members are on-site. Afterward, the staff will go over the club's rules, explain how everything works, and answer any questions you may have to ensure you have a great experience",
            // },
      ];
      return (
            <section className="py-20 bg-[#033f1b] relative">
                  <SectionBackground />
                  <div className="container relative">
                        {/* Header */}
                        <div className="text-center mb-16">
                              <div className="mb-4">
                                    <h3 className="text-3xl title-font md:text-5xl font-bold text-white">{t('title')}</h3>
                                    {/* <h2 className="text-3xl md:text-5xl title-font font-bold text-secondary mt-2">
                                          Social Club Guidelines
                                    </h2> */}
                              </div>
                        </div>

                        <Swiper
                              slidesPerView={3}
                              spaceBetween={30}
                              freeMode={true}
                              pagination={{
                                    clickable: true,
                              }}
                              breakpoints={{
                                    320: {
                                          slidesPerView: 1,
                                          spaceBetween: 20,
                                    },
                                    768: {
                                          slidesPerView: 2,
                                          spaceBetween: 30,
                                    },
                                    1024: {
                                          slidesPerView: 3,
                                          spaceBetween: 30,
                                    },
                              }}
                              modules={[FreeMode, Pagination]}
                              className="mySwiper"
                        >
                              {guidelineData.map((guideline, index) => (
                                    <SwiperSlide key={index}>
                                          <div
                                                key={index}
                                                className="bg-white rounded-[32px] p-8 shadow-sm border-t-[5px] border-t-primary"
                                          >
                                                <div className="bg-gradient-to-b from-[#F8F8F899] to-[#F2FFF4] rounded-full size-[70px] flex items-center justify-center mb-6">
                                                      <Image
                                                            src={guideline.icon}
                                                            alt={guideline.title}
                                                            width={80}
                                                            height={80}
                                                            className="size-[80px] object-contain"
                                                      />
                                                </div>
                                                <h3 className="text-3xl font-medium mb-4">
                                                      <span className="text-primary">{guideline.title}</span>
                                                </h3>
                                                <p className="text-gray-600">{guideline.description}</p>
                                          </div>
                                    </SwiperSlide>
                              ))}
                        </Swiper>
                  </div>
            </section>
      );
};

export default ClubGuideLines;
