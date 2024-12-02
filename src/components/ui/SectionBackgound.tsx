import React from 'react';
import Image from 'next/image';
import HowToJoinBgImage from '@/assets/images/how-to-join-bg.png';
import Earth from '@/assets/images/earth-round.png';

const SectionBackground = () => {
      return (
            <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute left-10 top-0 w-[400px] h-[400px] opacity-10">
                        <Image src={HowToJoinBgImage.src} alt="pattern" width={400} height={400} className="object-contain" />
                  </div>
                  <div className="absolute right-0 top-10 w-[400px] h-[400px] opacity-10">
                        <Image src={Earth.src} alt="pattern" width={250} height={250} className="object-contain" />
                  </div>
            </div>
      );
};

export default SectionBackground;
