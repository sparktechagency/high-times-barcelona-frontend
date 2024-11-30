import React from 'react';
import Image from 'next/image';

// Icons
import ClubIcon from '@/assets/images/club.png';
import InvitationIcon from '@/assets/images/invite.png';
import HandshakeIcon from '@/assets/images/handshake.png';
import EditIcon from '@/assets/images/edit.png';

import Ganja from '@/assets/images/ganja2.svg';
import HowToJoinBgImage from '@/assets/images/how-to-join-bg.png';
import Earth from '@/assets/images/earth-round.png';
import Link from 'next/link';
import { Button } from 'antd';
const steps = [
      {
            id: '01',
            icon: ClubIcon,
            title: 'Select a Club',
            description: 'Choose a club from the Weed Map and click "Join Now."',
      },
      {
            id: '02',
            icon: InvitationIcon,
            title: 'Get an invitation',
            description: 'Complete the form and wait for your invitation email.',
      },
      {
            id: '03',
            icon: HandshakeIcon,
            title: 'Visit the Club',
            description: 'Visit the club, show your invitation and a valid ID for registration.',
      },
      {
            id: '04',
            icon: EditIcon,
            title: 'Complete Membership',
            description: 'Check the rules, annual membership fee, and grab your club card!',
      },
];

const HowToJoin = () => {
      return (
            <section className="relative bg-how-to-join bg-[#033f1b] py-20">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute left-10 top-0 w-[400px] h-[400px] opacity-100">
                              <Image src={HowToJoinBgImage.src} alt="pattern" width={400} height={400} className="object-contain" />
                        </div>
                        <div className="absolute right-0 top-10 w-[400px] h-[400px] opacity-100">
                              <Image src={Earth.src} alt="pattern" width={250} height={250} className="object-contain" />
                        </div>
                  </div>
                  <div className="container relative z-10">
                        {/* Heading */}
                        <div className="text-center mb-8 md:mb-16 px-4">
                              <h2 className="text-white text-3xl md:text-5xl font-medium mb-2 md:mb-4">How To Join A</h2>
                              <div className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-2">
                                    <span className="text-secondary text-3xl md:text-5xl font-medium">Cannabis Social Club</span>
                                    <span className="text-white text-3xl md:text-5xl font-medium">In Barcelona ?</span>
                              </div>
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
                              <Link href="/">
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
                                          Become a member
                                    </Button>
                              </Link>
                        </div>
                  </div>
            </section>
      );
};

export default HowToJoin;
