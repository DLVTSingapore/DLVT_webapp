import React from 'react';
import TestimonialMatrix from '@/components/TestimonialMatrix';

const Testimonial = () => {
  return (
    <section>
      <div className="mx-6 my-8 flex flex-col md:mx-8 lg:mx-40">
        <div className="flex flex-col items-start justify-start">
          <h1 className="text-3xl font-bold">Testimonial</h1>
        </div>
      </div>

      <div className="mx-6 my-8 flex flex-col items-center justify-center md:mx-8 lg:mx-40">
        <TestimonialMatrix />
      </div>
    </section>
  );
};

export default Testimonial;
