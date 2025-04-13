import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import images from '../../../../public/assets/images';
import { trainingProgression } from '@/constants';

const TraditionalTraining = () => {
  const t = useTranslations('Lineage');
  return (
    <section>
      <div className="mx-6 my-8 flex flex-col md:mx-8 lg:mx-40">
        <div className="mb-12 flex flex-col items-start justify-start">
          <h1 className="text-3xl font-bold">Training Progression</h1>
        </div>
        <div>
          {trainingProgression.map((progression, index) => (
            <div key={index} className="mb-10">
              <h1 className="mb-4 text-xl font-bold">{progression.heading}</h1>
              <div className="flex flex-col gap-8 md:flex-row">
                <div className="w-full flex-none md:w-96">
                  <Image
                    src={progression.imageSrc}
                    alt={progression.altText}
                    width={775}
                    height={465}
                    className="h-auto w-full"
                    quality={100}
                    priority
                  />
                </div>
                <p className="font-body text-lg leading-relaxed text-gray-700 md:flex-1">
                  {t(progression.translationKey)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr className="mx-6 my-8 text-gray-700 md:mx-8 lg:mx-40" />

      <div className="font-body mx-6 my-8 flex flex-col text-justify text-lg leading-relaxed text-gray-700 md:mx-8 lg:mx-40">
        <h2 className="my-10 text-xl font-bold">Training T-shirt</h2>
        <div className="flex flex-col-reverse gap-4 md:flex-row">
          <ol className="list-with-spacing">
            {' '}
            {/* Add a class to the <ol> */}
            <li>
              1) On the left-hand sleeve features a copyrighted &quot;Wing
              Chun&quot; in Chinese, Handwritten by the late Grandmaster{' '}
              <span className="font-bold">Ip Man</span>
            </li>
            <li>
              2) On the back of the school T-shirt features a copyrighted
              &quot;Ching&quot; in Chinese, symbolising Grandmaster{' '}
              <span className="font-bold">Ip Ching</span>&apos;s lineage
            </li>
            <li>
              3) Left chest area features the school logo of Sifu{' '}
              <span className="font-bold">Dennis Lee</span> - Dennis Lee Ving
              Tsun Martial Arts Association.
            </li>
            <li>
              4) ​The colours of the school T-Shirts signifies the level of
              achievement in the school.
            </li>
          </ol>
          <Image
            src={images.tshirtImg}
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

export default TraditionalTraining;
