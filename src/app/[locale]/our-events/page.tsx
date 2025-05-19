import React from 'react';
import Image from 'next/image';
import images from '../../../../public/assets/images';

const OurEvents = () => {
  return (
    // <section className="w-full bg-gray-50 py-12">
    //   <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    //     {/* Title Section */}
    //     <div className="mb-8 text-start">
    //       <h1 className="font-heading text-3xl font-bold text-gray-800 md:text-4xl">
    //         Our Events
    //       </h1>
    //       <h1 className="mt-4 mb-4 text-xl font-bold">
    //         Wing Chun Introductory
    //       </h1>
    //       <a href="https://www.facebook.com/share/1CLq6Jt37P/" target="_blank">
    //         <p className="font-bold">
    //           1. Wednesday 11 June 2025 from 20:00-22:00 +08
    //         </p>
    //       </a>
    //       <a href="https://www.facebook.com/share/1AP1MbEf2K/" target="_blank">
    //         <p className="font-bold">
    //           2. Friday 13 June 2025 from 20:00-22:00 +08
    //         </p>
    //       </a>
    //     </div>
    //     <Image
    //       src={images.ourEvents1}
    //       alt={'Our Events'}
    //       width={775}
    //       height={465}
    //       objectFit="cover"
    //       className="h-auto w-full"
    //       quality={100}
    //       priority
    //     />
    <section>
      <div className="mx-6 my-8 flex flex-col md:mx-8 lg:mx-40">
        <div className="flex flex-col items-start justify-start">
          <h1 className="mb-4 text-3xl font-bold">Our Events</h1>
        </div>
        <div className="mb-8 text-start">
          <figure>
            <blockquote className="border-primary-500 border-l-4 pl-4 text-lg text-gray-700 italic">
              <h1 className="mt-4 mb-4 text-xl font-bold">
                Wing Chun Introductory
              </h1>
              <a
                href="https://www.facebook.com/share/1CLq6Jt37P/"
                target="_blank"
                className="text-blue-600 underline hover:text-blue-800 hover:no-underline"
              >
                <p className="font-bold">
                  1. Wednesday 11 June 2025 from 20:00-22:00 +08
                </p>
              </a>
              <a
                href="https://www.facebook.com/share/1AP1MbEf2K/"
                target="_blank"
                className="text-blue-600 underline hover:text-blue-800 hover:no-underline"
              >
                <p className="font-bold">
                  2. Friday 13 June 2025 from 20:00-22:00 +08
                </p>
              </a>
            </blockquote>
          </figure>
        </div>
        <Image
          src={images.ourEvents1}
          alt={'Our Events'}
          width={775}
          height={465}
          objectFit="cover"
          className="h-auto w-full"
          quality={100}
          priority
        />
      </div>
    </section>
  );
};

export default OurEvents;
