'use client';
import React from 'react';
import Image from 'next/image';
import Ganja from '@/assets/images/ganja2.svg';
import ClubImage from '@/assets/images/club-image.png';

// Icons for each essential item
import IdCard from '@/assets/images/id-card.png';
import Invitation from '@/assets/images/invitation.png';
import Cash from '@/assets/images/mony.png';

const essentialItems = [
      {
            icon: IdCard,
            title: 'Identity card',
            description:
                  'Your ID or a valid identification is required. Clubs follow the KYC (Know Your Customer) policy and must verify your identity before letting you in.',
      },
      {
            icon: Invitation,
            title: 'Invitation letter',
            description:
                  'To become a member, you must be invited by a valid member of the club or have an invitation from the club itself. Bring your letter to confirm your invitation.',
      },
      {
            icon: Cash,
            title: 'Cash',
            description: 'Cannabis clubs do not accept bank cards, so make sure to bring enough cash to cover your expenses.',
      },
];

const EssentialItems = () => {
      return (
            <section className="py-20 bg-[#F8F8F899]">
                  <div className="container">
                        {/* Header */}
                        <div className="text-center mb-16">
                              <div className="flex items-center justify-center gap-2 mb-4">
                                    <Image src={Ganja} alt="Cannabis" className="size-12" />
                                    <h2 className="text-3xl md:text-5xl font-medium text-[#1A1A1A]">Essential</h2>
                              </div>
                              <h3 className="text-3xl md:text-5xl font-medium text-primary">To Bring With You</h3>
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
                                                <div className="bg-[#E7F6ED] p-3 rounded-xl">
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
