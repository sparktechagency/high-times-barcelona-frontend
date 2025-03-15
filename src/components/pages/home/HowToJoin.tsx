'use client';
import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
// Icons
import ClubIcon from '@/assets/images/club.png';
import InvitationIcon from '@/assets/images/invite.png';
import HandshakeIcon from '@/assets/images/handshake.png';
import EditIcon from '@/assets/images/edit.png';
import Ganja from '@/assets/images/ganja2.svg';
import Link from 'next/link';
import { Button } from 'antd';
import SectionBackground from '@/components/ui/SectionBackgound';

const HowToJoin = () => {
      const t = useTranslations('join-club-section');

      const steps = [
            {
                  id: '01',
                  icon: ClubIcon,
                  title: t('card.step1.title'),
                  description: t('card.step1.description'),
            },
            {
                  id: '02',
                  icon: InvitationIcon,
                  title: t('card.step2.title'),
                  description: t('card.step2.description'),
            },
            {
                  id: '03',
                  icon: HandshakeIcon,
                  title: t('card.step3.title'),
                  description: t('card.step3.description'),
            },
            {
                  id: '04',
                  icon: EditIcon,
                  title: t('card.step4.title'),
                  description: t('card.step4.description'),
            },
      ];

      return (
            <section className="relative bg-how-to-join bg-[#033f1b] py-20">
                  {/* Background Pattern */}
                  <SectionBackground />
                  <div className="container relative z-10">
                        {/* Heading */}
                        <div className="text-center mb-8 md:mb-16 px-4 max-w-3xl mx-auto">
                              <h2 className="text-secondary title-font text-3xl md:text-5xl font-bold mb-2 md:mb-6">{t('title')}</h2>
                        </div>

                        {/* Steps Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                              {steps.map((step) => (
                                    <div key={step.id} className="bg-[#F9FDF9] rounded-lg p-8 text-center">
                                          {/* Step Number */}
                                          <div>
                                                {/* Icon */}
                                                <div className="flex relative justify-center items-center mb-6 size-[145px] m-auto rounded-full shadow-md bg-[#FFFFFF]">
                                                      <Image
                                                            src={step.icon}
                                                            alt={step.title}
                                                            width={48}
                                                            height={48}
                                                            className="w-12 h-12"
                                                      />
                                                      <div className="absolute top-0 left-0 inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#B7DACC] text-primary font-medium mb-6">
                                                            {step.id}
                                                      </div>
                                                </div>
                                          </div>

                                          {/* Content */}
                                          <h3 className="text-primary text-xl font-medium mb-2">{step.title}</h3>
                                          <p className="text-[#475467]">{step.description}</p>
                                    </div>
                              ))}
                        </div>

                        {/* CTA Button */}
                        <div className="flex justify-center mt-12">
                              <Link href="/#cannabis-clubs">
                                    <Button
                                          style={{
                                                backgroundColor: '#00863D',
                                                color: '#EFFBF0',
                                                height: 46,
                                          }}
                                          iconPosition="end"
                                          icon={<Image src={Ganja} alt="Ganja" />}
                                          type="primary"
                                    >
                                          {t('button')}
                                    </Button>
                              </Link>
                        </div>
                  </div>
            </section>
      );
};

export default HowToJoin;
