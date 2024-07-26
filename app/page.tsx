import React from 'react';
import Image from 'next/image';
import backgroundImg from './background.png';
import Link from 'next/link';

const home = () => {
  return (
    <div className="relative flex items-center">
      <Image
        src={backgroundImg}
        alt="Background Image"
        className="z-0 object-cover"
      />
      <div className="absolute left-8 md:left-16 z-10 p-8 md:p-16 space-y-10">
        <h1 className="text-4xl md:text-5xl font-bold text-white max-w-md" style={{ lineHeight: '3rem' }}>
          High Quality General Trading
        </h1>
        <p className="text-lg md:text-xl font-medium text-white max-w-xl">
          UAE-based premier trading company specializing in importing high-quality products from around the world.
        </p>
        <div className="flex space-x-4">
          <Link href="/services" legacyBehavior>
            <a className="button-filled">Our Services</a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a className="button-border">Contact</a>
          </Link>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
        </svg>
      </div>
    </div>
  );
};

export default home;
