import React from 'react';
import Image from 'next/image';
import images from '../../../../public/assets/images';
import FAQ from '@/components/FAQ';

const ContactUs = () => {
  return (
    <section className="relative w-full">
      <div className="relative w-full">
        {/* Image Container */}
        <div className="relative w-full">
          <Image
            src={images.lineageSifuAndyChia4a}
            alt="Contact Us"
            width={4032}
            height={3024}
            layout="responsive"
            className="h-auto w-full opacity-50"
            quality={100}
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="font-heading text-3xl text-white drop-shadow-lg [text-shadow:_0_0_5px_rgba(255,255,255,0.8),_0_0_15px_rgba(26,48,90,0.6)] md:text-5xl">
              Contact Us
            </h2>
          </div>
        </div>
        {/* Contact Card */}
        <div className="mt-8 w-full max-w-md md:absolute md:top-1/2 md:right-0 md:mt-0 md:w-1/3 md:-translate-y-1/2 md:transform">
          <div className="rounded-lg bg-white p-10 shadow-md">
            <h3 className="font-heading mb-4 text-xl font-extrabold text-gray-800 md:text-2xl">
              Sifu Andy
            </h3>
            <div className="space-y-4">
              <div>
                <span className="font-body font-semibold text-gray-700">
                  WhatsApp:
                </span>
                <p className="font-body text-gray-700">+65 9231 6638</p>
              </div>
              <div>
                <span className="font-body font-semibold text-gray-700">
                  Instagram DM:
                </span>
                <p className="font-body text-gray-700">@dennisleevtsingapore</p>
              </div>
              <div>
                <span className="font-body font-semibold text-gray-700">
                  Email:
                </span>
                <p className="font-body text-gray-700">dlvt2016sg@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="mx-6 my-8 text-gray-700 md:mx-8 lg:mx-40" />
      <FAQ />
    </section>
  );
};

export default ContactUs;
