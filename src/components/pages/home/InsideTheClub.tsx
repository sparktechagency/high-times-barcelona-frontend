'use client';
import React from 'react';
import Image from 'next/image';

// Import images

import cannabisLeaf from '@/assets/images/ganja-leaf.png';
import clubImage from '@/assets/images/inside2.svg';
import medicalPlant from '@/assets/images/inside2.png';
import InsideImage from '@/assets/images/inside.png';
import SectionBackground from '@/components/ui/SectionBackgound';
import { useTranslations } from 'next-intl';

const InsideTheClub = () => {
      const t = useTranslations('inside-club-section');
      return (
            <section className="py-20 bg-[#033f1b] relative">
                  <SectionBackground />
                  <div className="container z-10 relative">
                        {/* Header */}
                        <h2 className="text-4xl title-font md:text-5xl font-bold text-white mb-16 text-center">
                              {/* Inside The <span className="text-secondary  title-font">Club</span> */}
                              {t('title')}
                        </h2>

                        {/* Content Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                              {/* Dispensary Section */}
                              <div>
                                    <div className="bg-[#F9FDF9] rounded-3xl p-6 overflow-hidden">
                                          <div className="rounded-2xl overflow-hidden mb-6">
                                                <Image
                                                      height={320}
                                                      width={320}
                                                      src={clubImage}
                                                      alt="Dispensary"
                                                      className="w-full h-[320px] object-cover"
                                                />
                                          </div>
                                          <div className="flex items-start gap-4 mt-10">
                                                <h3 className="text-2xl ">
                                                      <span className="text-primary">{t('card.card1Title')}</span>
                                                </h3>
                                          </div>
                                          <p className="mt-6 text-gray-600 ">{t('card.card1Description')}</p>
                                    </div>
                                    <div className="mt-6 flex flex-col md:flex-row gap-6 items-center ">
                                          <div className="bg-[#F9FDF9] flex justify-center items-center w-[159px] h-[143px] p-5 rounded-xl ">
                                                <Image
                                                      src={cannabisLeaf}
                                                      alt="Leaf Icon"
                                                      className="w-[129px] h-[118px
                                                ]"
                                                />
                                          </div>
                                          <div className="bg-[#F9FDF9] flex  justify-center items-center w-[100%] h-[143px] p-5 rounded-xl ">
                                                <p className="">{t('card.note')}</p>
                                          </div>
                                    </div>
                              </div>

                              {/* Right Side Sections */}
                              <div className="space-y-4">
                                    {/* Lounge Zone */}
                                    <div className="bg-[#F9FDF9] rounded-3xl p-6">
                                          <div className="flex justify-between flex-col md:flex-row items-start gap-6">
                                                <div>
                                                      <h3 className="text-2xl  mb-4">
                                                            <span className="text-primary">{t('card.card2Title')}</span>
                                                      </h3>
                                                      <p className="text-gray-600 mb-4">{t('card.card2Description')}</p>
                                                </div>
                                                <div className="w-full md:min-w-[263px] h-[315px]">
                                                      <Image
                                                            src={medicalPlant}
                                                            alt="Lounge Zone"
                                                            className="w-full h-full object-cover rounded-xl"
                                                      />
                                                </div>
                                          </div>
                                    </div>

                                    {/* Coworking Area */}
                                    <div className="bg-[#F9FDF9] rounded-3xl p-6">
                                          <div className="flex flex-col md:flex-row justify-between items-start gap-6">
                                                <div>
                                                      <h3 className="text-2xl  mb-4">
                                                            <span className="text-primary">{t('card.card3Title')}</span>
                                                      </h3>
                                                      <p className="text-gray-600 mb-4">{t('card.card3Description')}</p>
                                                </div>
                                                <div className="w-full md:min-w-[263px] h-[315px]">
                                                      <Image
                                                            src={InsideImage}
                                                            alt="Coworking Area"
                                                            className="w-full h-full object-cover rounded-xl"
                                                      />
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </section>
      );
};

export default InsideTheClub;
