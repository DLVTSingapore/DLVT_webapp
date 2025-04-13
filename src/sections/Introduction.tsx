'use server';

import React from 'react';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import logos from '../../public/assets/logos';
import images from '../../public/assets/images';

const Introduction = () => {
  const t = useTranslations('Introduction');
  return (
    <section>
      <div className="flex flex-col items-center justify-center gap-4 px-16 py-4 md:px-48">
        <Image
          src={logos.dlvt}
          className="h-auto max-w-[425px]"
          alt="Lexica"
          width={750}
          height={425}
          priority
        />
        <h1 className="font-heading text-4xl font-bold">DLVT Singapore</h1>
        <h1>{t('title')}</h1>
        <p className="font-body text-center">
          Dennis Lee Ving Tsun Martial Arts Association - Singapore (DLVT) is
          the only school in Singapore that is closely linked to the source of
          Ip Man&apos;s Wing Chun. It is also the only school in Singapore that
          is the official representative of Ip Ching&apos;s (son of Ip Man)
          lineage of Wing Chun.
        </p>
        <p className="text-center">
          Ip Man&apos;s Wing Chun has its roots from Ving Tsun Athletic
          Association (VTAA) in Hongkong, set up by the late Ip Man himself. The
          founder of DLVT, Master Dennis Lee is the current Chairman of VTAA and
          is a closed door disciple of Grandmaster Ip Ching. He has more than 25
          years of experience in Wing Chun and is based permanently in Hong
          Kong.
        </p>
        <p className="text-center">
          The Singapore branch of Dennis Lee Ving Tsun Martial Arts Association
          is helmed by Sifu Terrance who is a certified instructor.
        </p>
        <Image
          src={images.introductionImg}
          className="h-auto w-full"
          alt="Lexica"
          width={750}
          height={425}
          quality={100}
          priority
        />
      </div>
    </section>
  );
};

export default Introduction;
