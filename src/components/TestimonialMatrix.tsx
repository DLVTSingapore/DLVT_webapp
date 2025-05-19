import React from 'react';
import Image from 'next/image';
import images from '../../public/assets/images';

type Writing = {
  text: string;
  name: string;
  profileImage: string;
};

type CellContent = Writing | string;

type MatrixCell = {
  type: 'image' | 'writing';
  content: CellContent;
};

const writings: Writing[] = [
  {
    text: 'Sifu is patient and creative when passing down his skills to his students: he uses daily life examples to explain abstract theories and make it easy to understand.',
    name: 'Sze Wai',
    profileImage: images.lineageSifuAndyChia7,
  },
  {
    text: 'Sifu Andy has a real gift for explaining the deeper meaning behind each move—how energy flows, structure, and the traditional values behind Wing Chun. His patience and clarity have helped me appreciate Wing Chun on a much deeper level.',
    name: 'Gladys',
    profileImage: images.lineageSifuAndyChia8, // Replace with a different image
  },
  {
    text: 'Training in Wing Chun improved my focus, discipline, and physical fitness, while teaching me a deeper understanding of body mechanics.',
    name: 'Benny',
    profileImage: images.lineageSifuAndyChia9, // Replace with a different image
  },
  {
    text: 'Training Wing Chun with Sifu Andy has helped me appreciate the smaller details of life. Throughout my experience, I have become a much patient person with my own progress and learning.',
    name: 'Andreas',
    profileImage: images.lineageSifuAndyChia9, // Replace with a different image
  },
  // Add more testimonials as needed
];

const photos = [
  images.lineageSifuAndyChia,
  images.lineageSifuAndyChia2,
  images.lineageSifuAndyChia3,
];

const TestimonialMatrix = () => {
  // Function to generate the alternating matrix
  const generateMatrix = () => {
    const matrix: MatrixCell[][] = [];
    let writingIndex = 0;
    let imageIndex = 0;
    let rowIndex = 0;

    // Continue building rows until all writings are used
    while (writingIndex < writings.length) {
      const row: MatrixCell[] = [];
      if (rowIndex % 2 === 0) {
        // Odd row: Image, Writing, Image
        row.push({
          type: 'image',
          content: photos[imageIndex % photos.length],
        });
        if (writingIndex < writings.length) {
          row.push({ type: 'writing', content: writings[writingIndex] });
          writingIndex++;
        }
        row.push({
          type: 'image',
          content: photos[(imageIndex + 1) % photos.length],
        });
        imageIndex += 2;
      } else {
        // Even row: Writing, Image, Writing
        if (writingIndex < writings.length) {
          row.push({ type: 'writing', content: writings[writingIndex] });
          writingIndex++;
        }
        row.push({
          type: 'image',
          content: photos[imageIndex % photos.length],
        });
        if (writingIndex < writings.length) {
          row.push({ type: 'writing', content: writings[writingIndex] });
          writingIndex++;
        }
        imageIndex++;
      }
      matrix.push(row);
      rowIndex++;
    }
    return matrix;
  };

  const matrix = generateMatrix();

  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {matrix.map((row, rowIndex) =>
            row.map((cell, cellIndex) => (
              <div
                key={`${rowIndex}-${cellIndex}`}
                className="overflow-hidden rounded-lg border border-gray-200"
              >
                {cell.type === 'image' ? (
                  <Image
                    src={cell.content as string}
                    alt="Testimonial Image"
                    width={400}
                    height={400}
                    className="h-full w-full object-cover grayscale filter"
                  />
                ) : (
                  <div className="p-4 text-center">
                    <p className="font-body text-lg text-gray-700">
                      {(cell.content as Writing).text}
                    </p>
                    <div className="mt-4">
                      {/* <div className="mx-auto h-12 w-12">
                        <Image
                          src={(cell.content as Writing).profileImage}
                          alt={`${(cell.content as Writing).name} Profile`}
                          width={50}
                          height={50}
                          className="h-full w-full rounded-full object-cover"
                        />
                      </div> */}
                      <p className="font-body mt-2 text-sm text-gray-500">
                        {(cell.content as Writing).name}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )),
          )}
        </div>
      </div>
    </section>
  );
};

// Add font styles to your CSS or Tailwind config
export default TestimonialMatrix;
