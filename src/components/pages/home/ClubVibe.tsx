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
                              <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">Explore</h2>
                              <div className="text-3xl md:text-5xl font-bold">
                                    <span className="text-white">Cannabis Social </span>
                                    <span className="text-secondary">Club Vibe</span>
                              </div>
                        </div>

                        {/* Video Grid */}

                        <div className="grid grid-cols-12 gap-8 md:h-[534px]">
                              <div className="col-span-12 md:col-span-8 relative rounded-3xl overflow-hidden">
                                    <iframe
                                          className="w-full h-full object-cover rounded-3xl"
                                          src="https://www.youtube.com/embed/sE1LABmGhNA?si=UsFYLgv7VrDOk4yN"
                                          title="YouTube video player"
                                    ></iframe>
                              </div>
                              <div className="col-span-12 md:col-span-4 space-y-4">
                                    <div className="w-full h-[255px] rounded-xl relative">
                                          <iframe
                                                className="w-full h-full object-cover rounded-xl"
                                                src="https://www.youtube.com/embed/3-TVFsVlNe8?si=oJWn9bmEnhIe-Bgy"
                                                title="YouTube video player"
                                                allowFullScreen
                                          ></iframe>
                                    </div>
                                    <div className="w-full h-[255px] rounded-xl relative">
                                          <iframe
                                                className="w-full h-full object-cover rounded-xl"
                                                src="https://www.youtube.com/embed/ASr9wTpe4t4?si=XPmayDimQdNg9ZJW"
                                                title="YouTube video player"
                                                allowFullScreen
                                          ></iframe>
                                    </div>
                              </div>
                        </div>
                  </div>
            </section>
      );
};

export default ClubVibe;
