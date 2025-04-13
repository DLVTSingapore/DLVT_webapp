'use server';

import React from 'react';
import Image from 'next/image';
import images from '../../public/assets/images';

const Hero = () => {
  return (
    <section id="hero" className="relative">
      <div className="relative w-full">
        {/* Single container for both mobile and desktop */}
        <div className="relative w-full pb-[40.23%]">
          <Image
            src={images.hero}
            alt="Hero Background"
            layout="fill"
            objectFit="contain" // Mobile: full image
            className="md:object-cover" // Desktop: cover container
            quality={100}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
