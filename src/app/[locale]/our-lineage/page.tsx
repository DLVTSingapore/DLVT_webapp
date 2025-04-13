import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import images from '../../../../public/assets/images';
import OrganizationChartClient from './OrganizationChartClient';

const Lineage = () => {
  const t = useTranslations('Lineage');
  return (
    <section>
      <div className="mx-6 my-8 flex flex-col md:mx-8 lg:mx-40">
        <div className="flex flex-col items-start justify-start">
          <h1 className="text-3xl font-bold">李煜昌師父</h1>
          <h1 className="text-3xl font-bold">Sifu Dennis Lee</h1>
        </div>
      </div>
      <div className="mx-6 my-8 flex flex-col items-center justify-center md:mx-8 lg:mx-40">
        <Image
          src={images.lineageSifuDennisLee}
          alt="Sifu Dennis Lee"
          width={775}
          height={465}
          objectFit="contain"
          quality={100}
          priority
        />
      </div>

      <div>
        <p className="font-body mx-6 my-8 flex flex-col text-justify text-lg leading-relaxed text-gray-700 md:mx-8 lg:mx-40">
          {t('sifuDennisLee.paragraph1')}
        </p>
        <p className="font-body mx-6 my-8 flex flex-col text-justify text-lg leading-relaxed text-gray-700 md:mx-8 lg:mx-40">
          {t('sifuDennisLee.paragraph2')}
        </p>
        <div className="mx-6 my-8 flex flex-col items-center justify-center md:mx-8 lg:mx-40">
          <Image
            src={images.lineageSifuDennisLee2}
            alt="Sifu Dennis Lee and Sifu Ip Ching"
            width={475}
            height={314}
            objectFit="contain"
            quality={100}
            priority
          />
        </div>
        <p className="font-body mx-6 my-8 flex flex-col text-justify text-lg leading-relaxed text-gray-700 md:mx-8 lg:mx-40">
          {t('sifuDennisLee.paragraph3')}
        </p>
        <p className="font-body mx-6 my-8 flex flex-col text-justify text-lg leading-relaxed text-gray-700 md:mx-8 lg:mx-40">
          {t('sifuDennisLee.paragraph4')}
        </p>
        <p className="font-body mx-6 my-8 flex flex-col text-justify text-lg leading-relaxed text-gray-700 md:mx-8 lg:mx-40">
          {t('sifuDennisLee.paragraph5')}
        </p>
      </div>
      <hr className="mx-6 my-8 text-gray-700 md:mx-8 lg:mx-40" />
      <div className="mx-6 my-8 flex flex-col md:mx-8 lg:mx-40">
        <div className="flex flex-col items-start justify-start">
          <h1 className="text-3xl font-bold">師父</h1>
          <h1 className="text-3xl font-bold">Sifu Andy Chia</h1>
        </div>
      </div>
      <div>
        <p className="font-body mx-6 my-8 flex flex-col text-justify text-lg leading-relaxed text-gray-700 md:mx-8 lg:mx-40">
          {t('sifuAndyChia.paragraph1')}
        </p>

        <p className="font-body mx-6 my-8 flex flex-col text-justify text-lg leading-relaxed text-gray-700 md:mx-8 lg:mx-40">
          {t('sifuAndyChia.paragraph2')}
        </p>

        <p className="font-body mx-6 my-8 flex flex-col text-justify text-lg leading-relaxed text-gray-700 md:mx-8 lg:mx-40">
          {t('sifuAndyChia.paragraph3')}
        </p>
        <div className="mx-6 my-8 flex flex-col items-center justify-center md:mx-8 lg:mx-40">
          <Image
            src={images.lineageSifuAndyChia6}
            alt="Sifu Andy Chia and Sifu Dennis Lee"
            width={475}
            height={314}
            objectFit="contain"
            quality={100}
            priority
          />
        </div>
      </div>
      <hr className="mx-6 my-8 text-gray-700 md:mx-8 lg:mx-40" />
      <div className="mx-6 my-8 flex flex-col md:mx-8 lg:mx-40">
        <div className="flex flex-col items-start justify-start">
          <h1 className="text-3xl font-bold">Our Lineage</h1>
        </div>
      </div>
      <div className="flex items-center justify-center overflow-x-auto rounded p-4">
        {' '}
        <OrganizationChartClient />
      </div>
      <div className="mb-8 flex justify-center">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/8Wqf2DEG7ks?si=REBZuw2rf1vFlnVe"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </section>
  );
};

export default Lineage;
