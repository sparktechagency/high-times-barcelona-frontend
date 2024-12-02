'use client';
import React from 'react';
import Image from 'next/image';

// Import images

import cannabisLeaf from '@/assets/images/ganja-leaf.png';
import clubImage from '@/assets/images/inside.png';
import coworkingSpace from '@/assets/images/inside1.png';
import medicalPlant from '@/assets/images/inside2.png';
import SectionBackground from '@/components/ui/SectionBackgound';

const InsideTheClub = () => {
      return (
            <section className="py-20 bg-[#033f1b] relative">
                  <SectionBackground />
                  <div className="container">
                        {/* Header */}
                        <h2 className="text-4xl md:text-5xl  text-white mb-16 text-center">
                              Inside The <span className="text-secondary">Club</span>
                        </h2>

                        {/* Content Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                              {/* Dispensary Section */}
                              <div>
                                    <div className="bg-white rounded-3xl p-6 overflow-hidden">
                                          <div className="rounded-2xl overflow-hidden mb-6">
                                                <Image
                                                      height={320}
                                                      width={320}
                                                      src={medicalPlant}
                                                      alt="Dispensary"
                                                      className="w-full h-[320px] object-cover"
                                                />
                                          </div>
                                          <div className="flex items-start gap-4 mt-10">
                                                <h3 className="text-2xl ">
                                                      A <span className="text-primary">Dispensary</span>
                                                </h3>
                                          </div>
                                          <p className="mt-6 text-gray-600 ">
                                                Here, you'll find a wide variety of cannabis products, including different weed strains,
                                                pre-rolls, edibles, vapes, and concentrates like wax, resin, and shatter. The dispensary
                                                also offers smoking accessories such as grinders, rolling papers, bongs, pipes, and more to
                                                enhance your experience.
                                          </p>
                                    </div>
                                    <div className="mt-6 flex gap-6 items-center ">
                                          <div className="bg-white flex justify-center items-center w-[159px] h-[143px] p-5 rounded-xl ">
                                                <Image
                                                      src={cannabisLeaf}
                                                      alt="Leaf Icon"
                                                      className="w-[129px] h-[118px
                                                ] "
                                                />
                                          </div>
                                          <div className="bg-white flex justify-center items-center w-[100%] h-[143px] p-5 rounded-xl ">
                                                <p className="">
                                                      <span className="font-bold">N.B.</span> Members are restricted to a monthly
                                                      consumption limit of 100 grams per person, promoting responsible and balanced usage.
                                                </p>
                                          </div>
                                    </div>
                              </div>

                              {/* Right Side Sections */}
                              <div className="space-y-6">
                                    {/* Lounge Zone */}
                                    <div className="bg-white rounded-3xl p-6">
                                          <div className="flex justify-between items-start gap-6">
                                                <div>
                                                      <h3 className="text-2xl  mb-4">
                                                            Lounge <span className="text-primary">Zone</span>
                                                      </h3>
                                                      <p className="text-gray-600 mb-4">
                                                            These spaces have comfy sofas, coffee tables, and spots to relax. Many include
                                                            gaming areas, live music stages, and group spaces for socializing.
                                                      </p>
                                                      <p className="text-gray-600">
                                                            For privacy, clubs often offer separate tables or private rooms, ensuring a
                                                            personal and comfortable experience.
                                                      </p>
                                                </div>
                                                <div className="min-w-[263px] h-[315px]">
                                                      <Image
                                                            src={clubImage}
                                                            alt="Lounge Zone"
                                                            className="w-full h-full object-cover rounded-xl"
                                                      />
                                                </div>
                                          </div>
                                    </div>

                                    {/* Coworking Area */}
                                    <div className="bg-white rounded-3xl p-6">
                                          <div className="flex justify-between items-start gap-6">
                                                <div>
                                                      <h3 className="text-2xl  mb-4">
                                                            Coworking <span className="text-primary">Area</span>
                                                      </h3>
                                                      <p className="text-gray-600 mb-4">
                                                            Some clubs offer tables with Wi-Fi and power outlets, letting you stay connected
                                                            while you work or relax. The setup is ideal for remote work or casual browsing.
                                                      </p>
                                                      <p className="text-gray-600">
                                                            These spaces provide a perfect mix of productivity and comfort, creating a
                                                            relaxed yet functional environment.
                                                      </p>
                                                </div>
                                                <div className="min-w-[263px] h-[315px]">
                                                      <Image
                                                            src={coworkingSpace}
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
