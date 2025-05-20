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
import { useTranslations } from 'next-intl';
export default function FAQSection() {
      const t = useTranslations('faq-section');
      const faqData = [
            /* {
                  icon: GanjaLeaf2,
                  title: t('card.faq1.title'),
                  description: t('card.faq1.description'),
            }, */
            {
                  icon: Tower,
                  title: t('card.faq2.title'),
                  description: t('card.faq2.description'),
            },
            {
                  icon: Peoples,
                  title: t('card.faq3.title'),
                  description: t('card.faq3.description'),
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

      const largeFAQ = {
            icon: GanjaLeaf2,
            title: t('card.faq1.title'),
            description: t('card.faq1.description'),
      };

      return (
            <section className="py-20 bg-gradient-to-b from-[#F8F8F899] to-[#F2FFF4]">
                  <div className="container">
                        <div className="text-center mb-16">
                              <div className="flex items-center justify-center gap-2 mb-4">
                                    <Image width={100} height={100} src={Ganja} alt="Cannabis" className="size-12" />
                                    <h1 className="text-3xl md:text-5xl title-font font-fold text-primary">{t('title')}</h1>
                              </div>
                              {/* <h1 className="text-3xl md:text-5xl font-fold title-font ">Asked Questions</h1> */}
                        </div>
                        
                        <div className="bg-white rounded-2xl p-8 shadow-sm w-[100%] md:max-w-[80%] mx-0 md:mx-auto h-full flex flex-col border-t-[5px] border-t-primary">
                              <div className="mb-6">
                                    <Image src={largeFAQ.icon} alt={largeFAQ.title} width={48} height={48} className="size-[70px] object-contain" />
                              </div>
                              <h3 className="text-2xl  font-medium mb-4">
                                    {largeFAQ.title} <span className=""></span>
                              </h3>
                              <p className="text-gray-600 whitespace-pre-line flex-grow">{largeFAQ.description}</p>
                        </div>

                        <div className='w-[100%] md:max-w-[80%] h-full mx-auto mt-[30px]'>
                              <Swiper
                                    slidesPerView={2}
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
                                                slidesPerView: 2,
                                                spaceBetween: 30,
                                          },
                                    }}
                                    modules={[FreeMode, Pagination]}
                                    className="mySwiper"
                              >
                                    {faqData.map((faq, index) => (
                                          <SwiperSlide key={index}>
                                                <div className="bg-white rounded-2xl p-8 shadow-sm h-full mx-auto flex flex-col border-t-[5px] border-t-primary">
                                                      <div className="mb-6">
                                                            <Image
                                                                  src={faq.icon}
                                                                  alt={faq.title}
                                                                  width={48}
                                                                  height={48}
                                                                  className="size-[70px] object-contain"
                                                            />
                                                      </div>
                                                      <h3 className="text-2xl  font-medium mb-4">
                                                            {faq.title} <span className=""></span>
                                                      </h3>
                                                      <p className="text-gray-600 whitespace-pre-line flex-grow">{faq.description}</p>
                                                </div>
                                          </SwiperSlide>
                                    ))}
                              </Swiper>
                        </div>
                  </div>
            </section>
      );
}
