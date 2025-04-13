'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { navLinks } from '@/constants';

const HeaderClient = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <>
      {/* Hamburger Button (Small Screens) */}
      <button
        className="text-quaternary hover:text-secondary p-2 focus:outline-none md:hidden"
        onClick={toggleModal}
        aria-label="Toggle navigation menu"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {/* Modal (Small Screens) */}
      {isModalOpen && (
        <div
          className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black"
          onClick={toggleModal}
        >
          <div
            className="relative mx-auto h-auto max-h-[80vh] w-full max-w-md overflow-y-auto rounded-lg bg-white p-6 shadow-lg"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
              onClick={toggleModal}
              aria-label="Close navigation menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <ul className="mt-12 flex flex-col space-y-4">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="hover:text-primary block rounded-md px-3 py-2 text-gray-800 hover:font-bold"
                    onClick={toggleModal}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default HeaderClient;
