import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { faqs } from '@/constants';
import Link from 'next/link';

const FAQ = () => {
  return (
    <section className="w-full bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:grid md:grid-cols-2 md:gap-8">
          {/* First Column: Title and Contact Prompt */}
          <div className="mb-8 md:mb-0">
            <h1 className="font-heading text-3xl font-bold text-gray-800 md:text-4xl">
              Frequently Asked Questions
            </h1>
            <figure>
              <blockquote className="border-primary-500 mt-4 border-l-4 pl-4 text-lg text-gray-700 italic">
                Can’t find the answer you’re looking for? Please{' '}
                <Link
                  href="https://wa.me/+6592316638"
                  className="font-bold text-[#25D366] underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </Link>{' '}
                Sifu Andy directly.
              </blockquote>
            </figure>
          </div>
          {/* Second Column: Accordion FAQs */}
          <div>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-bold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="font-body text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
