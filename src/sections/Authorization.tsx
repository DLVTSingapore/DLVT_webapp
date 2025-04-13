import React from 'react';
import Image from 'next/image';

import images from '../../public/assets/images';

const Authorization = () => {
  return (
    <section>
      <div className="flex flex-col gap-4 px-16 py-4 md:px-48">
        <h2 className="mb-4 text-start text-2xl font-bold">
          Authorization by Ving Tsun Ip Ching Athletic Association
        </h2>
        <div className="flex flex-col-reverse gap-4 md:flex-row">
          <p>
            We are pleased to announce that with effect from 8th August 2018,
            Dennis Lee Ving Tsun Martial Arts Association (Singapore) is the
            only school in Singapore officially authorized by Ving Tsun Ip Ching
            Athletic Association to represent Grand Master Ip Ching&apos;s Wing
            Chun in Singapore. This certification is an assurance of the
            standard of training you will receive at our school.
          </p>
          <Image
            src={images.authorizationImg}
            className="h-auto w-full"
            alt="Lexica"
            width={750}
            height={425}
            objectFit="contain"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Authorization;
