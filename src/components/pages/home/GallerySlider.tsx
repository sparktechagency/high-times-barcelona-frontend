'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import SliderImage from '@/assets/images/image-slider.jpg';
import 'slick-carousel/slick/slick.css';
// Gallery data
const galleryImages = [
      {
            id: 1,
            src: SliderImage.src,
            alt: 'Cannabis Club Interior',
      },
      {
            id: 2,
            src: SliderImage.src,
            alt: 'Club Lounge Area',
      },
      {
            id: 3,
            src: SliderImage.src,
            alt: 'Club Atmosphere',
      },
      {
            id: 4,
            src: SliderImage.src,
            alt: 'Club Lounge Area',
      },
      {
            id: 5,
            src: SliderImage.src,
            alt: 'Club Atmosphere',
      },
];

const GallerySlider = () => {
      const sliderRef = useRef<Slider>(null);

      // Custom arrow components
      const PrevArrow = () => (
            <div className="absolute left-[80px] bottom-[150px] z-30 cursor-pointer">
                  <button
                        onClick={() => sliderRef.current?.slickPrev()}
                        className="bg-[#FFD700] rounded-full p-4 transform hover:scale-110 transition-transform"
                  >
                        <BsChevronLeft className="text-black text-2xl" />
                  </button>
            </div>
      );

      const NextArrow = () => (
            <div className="absolute right-[80px] bottom-[150px] z-30 cursor-pointer">
                  <button
                        onClick={() => sliderRef.current?.slickNext()}
                        className="bg-[#FFD700] rounded-full p-4 transform hover:scale-110 transition-transform"
                  >
                        <BsChevronRight className="text-black text-2xl" />
                  </button>
            </div>
      );

      // Slider settings
      const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '0',
            arrows: false,
            autoplay: true,
            autoplaySpeed: 5000,
            pauseOnHover: true,
            // customPaging: (i: number) => <div className="w-3 h-3 flex mx-1 rounded-full bg-white transition-colors" />,

            beforeChange: (_: number, next: number) => {
                  const slides = document.querySelectorAll('.slick-slide');
                  slides.forEach((slide) => {
                        slide.classList.remove('scale-125', 'z-20');
                  });
                  const currentSlide = slides[next + 1];
                  if (currentSlide) {
                        currentSlide.classList.add('scale-125', 'z-20', 'rotate-6');
                  }
            },
      };

      return (
            <section className="py-20 bg-[#002611] relative overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute left-0 top-0 w-[400px] h-[400px] opacity-10">
                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                              <path
                                    fill="#FFFFFF"
                                    d="M47.5,-61.5C59.2,-52.9,65,-35.9,67.7,-19.2C70.4,-2.5,69.9,14,63.1,27.2C56.3,40.4,43.2,50.4,28.6,57.3C14,64.2,-2.1,68,-17.9,65.2C-33.7,62.4,-49.2,53,-61.3,38.7C-73.4,24.4,-82.1,5.3,-78.9,-11.6C-75.7,-28.5,-60.6,-43.2,-44.8,-51.1C-29,-59,-14.5,-60.1,2.1,-62.8C18.7,-65.5,37.4,-69.8,47.5,-61.5Z"
                                    transform="translate(100 100)"
                              />
                        </svg>
                  </div>
                  <div className="absolute right-0 bottom-0 w-[400px] h-[400px] opacity-10 rotate-180">
                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                              <path
                                    fill="#FFFFFF"
                                    d="M47.5,-61.5C59.2,-52.9,65,-35.9,67.7,-19.2C70.4,-2.5,69.9,14,63.1,27.2C56.3,40.4,43.2,50.4,28.6,57.3C14,64.2,-2.1,68,-17.9,65.2C-33.7,62.4,-49.2,53,-61.3,38.7C-73.4,24.4,-82.1,5.3,-78.9,-11.6C-75.7,-28.5,-60.6,-43.2,-44.8,-51.1C-29,-59,-14.5,-60.1,2.1,-62.8C18.7,-65.5,37.4,-69.8,47.5,-61.5Z"
                                    transform="translate(100 100)"
                              />
                        </svg>
                  </div>

                  <div className="container relative">
                        {/* Header */}
                        <div className="text-center mb-24">
                              <h2 className="text-3xl md:text-5xl font-medium text-white mb-4">Explore</h2>
                              <h3 className="text-3xl md:text-5xl font-medium text-[#FFD700]">Cannabis Social Club Gallery</h3>
                        </div>

                        {/* Slider */}
                        <div className="relative max-w-[1400px] mx-auto">
                              <PrevArrow />
                              <NextArrow />
                              <Slider ref={sliderRef} {...settings} className="gallery-slider">
                                    {galleryImages.map((image) => (
                                          <div key={image.id} className="px-4 transition-transform duration-500">
                                                <div className="relative aspect-[10/9] rounded-2xl overflow-hidden">
                                                      <Image
                                                            src={image.src}
                                                            alt={image.alt}
                                                            fill
                                                            className="object-cover size-[990px] rounded-2xl"
                                                            priority={image.id === 1}
                                                      />
                                                </div>
                                          </div>
                                    ))}
                              </Slider>
                        </div>
                  </div>
            </section>
      );
};

export default GallerySlider;
