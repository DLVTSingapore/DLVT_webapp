'use server';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logos from '../../public/assets/logos';
import { navLinks } from '@/constants';
import HeaderClient from './HeaderClient';

const Header = () => {
  return (
    <div>
      <header className="bg-primary z-50 w-full">
        <nav className="max-container start-0 top-0 bg-transparent">
          <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
            <Link
              href="/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <Image
                src={logos.dlvt}
                className="h-auto max-w-[150px] md:max-w-[200px]"
                alt="Lexica"
                width={150}
                height={85}
                priority
              />
            </Link>

            {/* Client Component for Hamburger and Modal */}
            <HeaderClient />

            {/* Navigation Links (Large Screens) */}
            <div className="hidden space-x-4 md:flex">
              <ul className="flex flex-row space-x-8">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-quaternary hover:text-secondary rounded-md px-3 py-2 hover:font-bold"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
