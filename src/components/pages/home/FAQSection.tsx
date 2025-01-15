'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import Ganja from '@/assets/images/ganja2.svg';
import { FreeMode, Pagination } from 'swiper/modules';
import Image from 'next/image';
import Peoples from '@/assets/images/people.png';
import GanjaLeaf2 from '@/assets/images/ganja-leaf2.png';
import Tower from '@/assets/images/tower.png';
export default function FAQSection() {
      const faqData = [
            {
                  icon: GanjaLeaf2,
                  title: {
                        part1: 'What is a',
                        part2: 'Cannabis Social Club?',
                  },
                  description:
                        'Cannabis Social Clubs, or Coffee Shops in Barcelona, are private organizations where cannabis is grown and shared among members. There are about 250 clubs in Barcelona, but not all accept new members. Some are selective, while others welcome newcomers and offer services to members.',
            },
            {
                  icon: Tower,
                  title: {
                        part1: 'Why are',
                        part2: 'Cannabis Clubs Members Only?',
                  },
                  description:
                        "In Spain, cannabis use is restricted to private spaces, such as homes or private associations called Cannabis Social Clubs. These clubs require membership to access, operating within legal limits to ensure a safe environment. To join, you need an invitation from a current member or from the club itself, and you'll receive a membership card upon approval.",
            },
            {
                  icon: Peoples,
                  title: {
                        part1: 'Who Can Join',
                        part2: 'Cannabis Club in Spain?',
                  },
                  description:
                        'To join a Cannabis Social Club in Barcelona, you must:\n• Be at least 18-21 years old.\n• Have a passport or valid ID.\n• Must be sponsored by a member or invited by the club.\n• No need to be a Spanish citizen.',
            },
            // {
            //       icon: Tower,
            //       title: {
            //             part1: 'Who Can Join',
            //             part2: 'Cannabis Club in Spain?',
            //       },
            //       description:
            //             'To join a Cannabis Social Club in Barcelona, you must:\n• Be at least 18-21 years old.\n• Have a passport or valid ID.\n• Must be sponsored by a member or invited by the club.\n• No need to be a Spanish citizen.',
            // },
      ];

      return (
            <section className="py-20 bg-gradient-to-b from-[#F8F8F899] to-[#F2FFF4]">
                  <div className="container">
                        <div className="text-center mb-16">
                              <div className="flex items-center justify-center gap-2 mb-4">
                                    <Image width={100} height={100} src={Ganja} alt="Cannabis" className="size-12" />
                                    <h1 className="text-3xl md:text-5xl font-fold text-[#1A1A1A]">Frequently</h1>
                              </div>
                              <h1 className="text-3xl md:text-5xl font-fold text-primary">Asked Questions</h1>
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
                              {faqData.map((faq, index) => (
                                    <SwiperSlide key={index}>
                                          <div className="bg-white rounded-2xl p-8 shadow-sm h-full flex flex-col border-t-[5px] border-t-primary">
                                                <div className="mb-6">
                                                      <Image
                                                            src={faq.icon}
                                                            alt={faq.title.part1}
                                                            width={48}
                                                            height={48}
                                                            className="size-[70px] object-contain"
                                                      />
                                                </div>
                                                <h3 className="text-2xl font-medium mb-4">
                                                      {faq.title.part1} <span className="text-primary">{faq.title.part2}</span>
                                                </h3>
                                                <p className="text-gray-600 whitespace-pre-line flex-grow">{faq.description}</p>
                                          </div>
                                    </SwiperSlide>
                              ))}
                        </Swiper>
                  </div>
            </section>
      );
}
