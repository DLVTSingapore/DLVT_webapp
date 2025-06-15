import React from 'react';
import Image from 'next/image';
import images from '../../../../public/assets/images';
import FAQ from '@/components/FAQ';
import Link from 'next/link';
import { branches } from '@/constants';

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
      <section className="w-full bg-gray-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Title Section */}
          <div className="mb-8 text-center">
            <h1 className="font-heading text-3xl font-bold text-gray-800 md:text-4xl">
              Registration Form
            </h1>
            <figure>
              <blockquote className="border-primary-500 mt-4 border-l-4 pl-4 text-lg text-gray-700 italic">
                <a
                  href="https://linktr.ee/dennisleevtsingapore"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://linktr.ee/dennisleevtsingapore
                </a>
              </blockquote>
            </figure>
          </div>
        </div>
      </section>
      <hr className="mx-6 my-8 text-gray-700 md:mx-8 lg:mx-40" />
      <section className="w-full bg-gray-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Title Section */}
          <div className="mb-8 text-center">
            <h1 className="font-heading text-3xl font-bold text-gray-800 md:text-4xl">
              Feel free to get in touch
            </h1>
          </div>

          {/* Wednesday Class */}
          <div className="mb-12">
            <figure>
              <blockquote className="border-primary-500 mt-4 border-l-4 pl-4 text-lg text-gray-700 italic">
                Wednesday Class
              </blockquote>
            </figure>
            <div className="mb-4">
              <h2 className="font-heading text-xl font-semibold text-gray-800">
                Address
              </h2>
              <p className="text-gray-700">
                Sol Latte 195 Pearls Hill Terrace #01-17 S168976
              </p>
            </div>
            {/* Responsive Grid for Map and Placeholder */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {/* Map (First Column on Large, First Row on Small) */}
              <div className="relative aspect-square w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d719.4318256949579!2d103.8409836218604!3d1.2836970117660644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1973a2873b3b%3A0xadf39eda08baec06!2sPearl's%20Hill%20Terrace!5e0!3m2!1sen!2ssg!4v1747147766220!5m2!1sen!2ssg"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                ></iframe>
              </div>
              {/* Placeholder Image (Second Column on Large, Second Row on Small) */}
              <div className="relative aspect-square w-full">
                <div className="aspect-video w-full max-w-3xl">
                  <iframe
                    src="https://www.youtube.com/embed/tTC8NpIf8Xg"
                    title="YouTube video player"
                    className="h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Friday Class */}
          <div className="mb-12">
            <figure>
              <blockquote className="border-primary-500 mt-4 border-l-4 pl-4 text-lg text-gray-700 italic">
                Friday Class
              </blockquote>
            </figure>
            <div className="mb-4">
              <h2 className="font-heading text-xl font-semibold text-gray-800">
                Address
              </h2>
              <p className="text-gray-700">
                Marymount - 39A Jalan Pemimpin 04-01C, Halcyon Building
              </p>
            </div>
            {/* Responsive Grid for Map and Placeholder */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {/* Map (First Column on Large, First Row on Small) */}
              <div className="relative aspect-square w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1146.8827682836866!2d103.83992023900444!3d1.3496800274460998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da198c5482e785%3A0xbd72f4bfedf25c7d!2sTinystudio!5e0!3m2!1sen!2ssg!4v1747147425038!5m2!1sen!2ssg"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                ></iframe>
              </div>
              {/* Placeholder Image (Second Column on Large, Second Row on Small) */}
              <div className="relative aspect-square w-full">
                <div className="aspect-video w-full max-w-3xl">
                  <iframe
                    src="https://www.youtube.com/embed/K4J8yJ9wivY"
                    title="YouTube video player"
                    className="h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className="mx-6 my-8 text-gray-700 md:mx-8 lg:mx-40" />
      <FAQ />
      <hr className="mx-6 my-8 text-gray-700 md:mx-8 lg:mx-40" />
      <section className="w-full bg-gray-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Title Section */}
          <div className="mb-8 text-center">
            <h1 className="font-heading text-3xl font-bold text-gray-800 md:text-4xl">
              We are connected with
            </h1>
          </div>
          {/* Images Grid */}
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
            {branches.map((branch, index) => (
              <Link
                key={index}
                href={branch.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block" // Added `group` for hover effects and `relative` for positioning
              >
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={branch.src}
                    alt={branch.label || 'Branch'}
                    layout="fill"
                    objectFit="cover" // Crop the image to fit the container
                    className="transition-opacity duration-300 group-hover:opacity-50"
                    quality={100}
                    priority
                  />
                  {/* Label centered on the image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span
                      className="font-body text-lg font-semibold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      style={{ textShadow: '0 0 5px rgba(0, 0, 0, 0.8)' }}
                    >
                      {branch.label || 'Branch Name'}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default ContactUs;
