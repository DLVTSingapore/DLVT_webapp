'use server';

import React from 'react';
import Link from 'next/link';

import { footerLinks, socialMedia } from '@/constants';

const Footer = () => {
  return (
    <footer className="mt-auto bg-gray-800 py-4 text-white">
      <div className="flex flex-col justify-between gap-y-6 px-12 py-8 md:flex-row md:px-24 md:py-20">
        <div>
          <div className="flex flex-col gap-4">
            <div>
              <h1 className="text-4xl font-bold">DLVT Singapore</h1>
            </div>
            <div className="flex flex-row gap-2">
              {socialMedia.map((social, idx) => (
                <Link key={idx} href={social.href} target="_blank">
                  <social.src />
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between gap-x-6">
          {footerLinks.map((item, idx) => (
            <div key={idx} className="flex flex-col gap-4">
              <h1 className="text-2xl font-bold">{item.title}</h1>
              {item.links.map((link, idx) => (
                // <Link key={idx} href={link.href}>
                <div key={idx}>{link.name}</div>
                // </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
