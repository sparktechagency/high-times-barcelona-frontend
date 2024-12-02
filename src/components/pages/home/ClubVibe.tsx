'use client';
import React from 'react';
import Image from 'next/image';
import { BsPlayCircleFill } from 'react-icons/bs';
import SectionBackground from '@/components/ui/SectionBackgound';

import ClubVibeImage1 from '@/assets/images/image-slider.jpg';

const ClubVibe = () => {
      return (
            <section className="py-20 bg-[#033f1b] relative">
                  <SectionBackground />
                  <div className="container relative">
                        {/* Header */}
                        <div className="text-center mb-16">
                              <h2 className="text-3xl md:text-5xl font-medium text-white mb-2">Explore</h2>
                              <div className="text-3xl md:text-5xl font-medium">
                                    <span className="text-white">Cannabis Social </span>
                                    <span className="text-secondary">Club Vibe</span>
                              </div>
                        </div>

                        {/* Video Grid */}

                        <div className="grid grid-cols-12 gap-8 md:h-[534px]">
                              <div className="col-span-12 md:col-span-8 relative rounded-3xl overflow-hidden">
                                    <Image
                                          src={ClubVibeImage1}
                                          alt="Cannabis Club Vibe"
                                          width={1000}
                                          height={1000}
                                          className="w-full h-full object-cover"
                                    />
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                          <BsPlayCircleFill className="text-6xl text-white" />
                                    </div>
                              </div>
                              <div className="col-span-12 md:col-span-4 space-y-4">
                                    <div className="w-full h-[255px] rounded-xl relative">
                                          <Image
                                                src={ClubVibeImage1}
                                                alt="Cannabis Club Vibe"
                                                width={300}
                                                height={300}
                                                className="w-full h-full object-cover rounded-xl"
                                          />
                                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                                <BsPlayCircleFill className="text-6xl text-white" />
                                          </div>
                                    </div>
                                    <div className="w-full h-[255px] rounded-xl relative">
                                          <Image
                                                src={ClubVibeImage1}
                                                alt="Cannabis Club Vibe"
                                                width={300}
                                                height={300}
                                                className="w-full h-full object-cover rounded-xl"
                                          />
                                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                                <BsPlayCircleFill className="text-6xl text-white" />
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </section>
      );
};

export default ClubVibe;
