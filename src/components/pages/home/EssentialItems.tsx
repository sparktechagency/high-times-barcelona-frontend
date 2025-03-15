'use client';
import React from 'react';
import Image from 'next/image';
import Ganja from '@/assets/images/ganja2.svg';
import ClubImage from '@/assets/images/club-image.png';

// Icons for each essential item
import IdCard from '@/assets/images/id-card.png';
import Invitation from '@/assets/images/invitation.png';
import Cash from '@/assets/images/mony.png';
import { useTranslations } from 'next-intl';

const EssentialItems = () => {
      const t = useTranslations('essential-items-section');
      const essentialItems = [
            {
                  icon: IdCard,
                  title: t('card.card1Title'),
                  description: t('card.card1Description'),
            },
            {
                  icon: Invitation,
                  title: t('card.card2Title'),
                  description: t('card.card2Description'),
            },
            {
                  icon: Cash,
                  title: t('card.card3Title'),
                  description: t('card.card3Description'),
            },
      ];
      return (
            <section className="py-20 bg-gradient-to-b from-[#F8F8F899] to-[#F2FFF4]">
                  <div className="container">
                        {/* Header */}
                        <div className="text-center mb-16">
                              <div className="flex items-center justify-center gap-2 mb-4">
                                    <Image src={Ganja} alt="Cannabis" className="size-12" />
                                    <h1 className="text-3xl md:text-5xl font-bold title-font text-[#1A1A1A]">{t('title')}</h1>
                              </div>
                              {/* <h1 className="text-3xl md:text-5xl font-bold title-font text-primary">To Bring With You</h1> */}
                        </div>

                        {/* Content Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                              {/* Left Side - Image */}
                              <div className="relative h-[500px] rounded-2xl overflow-hidden">
                                    <Image src={ClubImage} alt="Cannabis Club Interior" fill className="object-cover" priority />
                              </div>

                              {/* Right Side - Essential Items */}
                              <div className="space-y-6">
                                    {essentialItems.map((item, index) => (
                                          <div
                                                key={item.title}
                                                className="bg-white border border-primary rounded-xl p-6 flex gap-4 items-start shadow-sm transition-transform duration-300 hover:scale-[1.02]"
                                          >
                                                <div className="bg-[#E7F6ED] min-w-[80px] h-[80px] rounded-full">
                                                      <Image src={item.icon} alt={item.title} className="size-[80px] m-auto" />
                                                </div>
                                                <div>
                                                      <h4 className="text-xl font-medium text-primary mb-2">{item.title}</h4>
                                                      <p className="text-[#666666] leading-relaxed">{item.description}</p>
                                                </div>
                                          </div>
                                    ))}
                              </div>
                        </div>
                  </div>
            </section>
      );
};

export default EssentialItems;
