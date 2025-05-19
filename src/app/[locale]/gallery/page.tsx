import React from 'react';
import Image from 'next/image';

const images = [
  '/assets/images/events1.jpeg',
  '/assets/images/events2.jpeg',
  '/assets/images/events3.jpeg',
  '/assets/images/events4.jpeg',
];

const Gallery = () => {
  return (
    <section>
      <div className="mx-6 my-8 flex flex-col md:mx-8 lg:mx-40">
        <div className="flex flex-col items-start justify-start">
          <h1 className="mb-4 text-3xl font-bold">Our Galleries</h1>
        </div>
        <div>
          <figure>
            <blockquote className="border-primary-500 border-l-4 pl-4 text-lg text-gray-700 italic">
              Paying respects to the late Grandmaster Ip Man during our yearly
              Hong Kong training visit is standard for DLVT Singapore, which was
              featured at the Ip Man Memorial Hall in Foshan, China, as seen
              during their December 2018 visit.
            </blockquote>
          </figure>
        </div>
        <div className="columns-1 gap-4 py-10 sm:columns-2 md:py-10 lg:columns-3">
          {images.map((src, idx) => (
            <div key={idx} className="mb-4 break-inside-avoid">
              <Image
                src={src}
                alt={src}
                width={750}
                height={425}
                className="w-full rounded-lg object-cover"
              />
            </div>
          ))}
        </div>

        <div className="mb-8 columns-1 justify-center gap-4 lg:columns-2">
          <iframe
            className="mb-4 rounded-lg"
            width="100%"
            height="250"
            src="https://www.youtube.com/embed/ib0ZVd3vOqg?si=F5OpocbeTAgI9VPh"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
          <iframe
            className="mb-4 rounded-lg"
            width="100%"
            height="250"
            src="https://www.youtube.com/embed/1jA6noIYrT0?si=-5U8Jx9RJw_BXZX7"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
      <div className="mx-6 my-8 flex flex-col md:mx-8 lg:mx-40">
        <h1 className="mb-4 text-start text-2xl font-bold">Media Spotlight</h1>
        <div>
          <figure>
            <blockquote className="border-primary-500 border-l-4 pl-4 text-lg text-gray-700 italic">
              Paying respects to the late Grandmaster Ip Man during our yearly
              Hong Kong training visit is standard for DLVT Singapore, which was
              featured at the Ip Man Memorial Hall in Foshan, China, as seen
              during their December 2018 visit.
            </blockquote>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
