import React from 'react';
import Image from 'next/image';
import images from '../../public/assets/images';

// Define types for the matrix cells
type Writing = {
  text: string;
  name: string;
  profileImage: string; // Adjust type based on your `images` export (e.g., StaticImageData if using Next.js Image)
};

type CellContent = Writing | string;

type MatrixCell = {
  type: 'image' | 'writing';
  content: CellContent;
};

// Placeholder data (replace with your content)
const writings: Writing[] = [
  {
    text: 'Be the best version of you.',
    name: 'Sean Lim',
    profileImage: images.lineageSifuAndyChia7,
  },
  {
    text: 'Trust yourself.',
    name: 'Emily Tan',
    profileImage: images.lineageSifuAndyChia8, // Replace with a different image
  },
  {
    text: "You won't know what your true potential is until you give it your best shot.",
    name: 'Michael Wong',
    profileImage: images.lineageSifuAndyChia9, // Replace with a different image
  },
  {
    text: "You don't succeed because you achieved a goal. You succeed because of the person you BECOME when achieving that goal.",
    name: 'Sarah Lee',
    profileImage: images.lineageSifuAndyChia9, // Replace with a different image
  },
  {
    text: 'Embrace every challenge as an opportunity.',
    name: 'James Chen',
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
                      <div className="mx-auto h-12 w-12">
                        <Image
                          src={(cell.content as Writing).profileImage}
                          alt={`${(cell.content as Writing).name} Profile`}
                          width={50}
                          height={50}
                          className="h-full w-full rounded-full object-cover"
                        />
                      </div>
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
