import React from 'react';
import Image from 'next/image';
import backgroundImg from '/public/background.png';
import cardImage1 from '/public/card1.png';
import cardImage2 from '/public/card2.png';
import Link from 'next/link';
import ScrollButton from '../components/ScrollButton';
import Card from '../components/Card';

const Home = () => {
  return (
    <div>
      <div className="relative flex items-center pt-16" style={{ height: 'auto' }}>
        <Image
          src={backgroundImg}
          alt="Background Image"
          className="z-0 object-cover w-full"
        />
        <div className="absolute left-8 md:left-16 z-10 p-8 md:p-16 space-y-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white max-w-md" style={{ lineHeight: '4rem' }}>
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
        <ScrollButton />
      </div>
      <div id="second-section" className="flex flex-col items-center justify-center h-auto bg-white py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">The UAE’s leading trading platform</h2>
        <p className="text-base md:text-lg font-medium text-gray-700 max-w-4xl text-center mb-10">
          Our mission is to deliver quality products from global markets to local retailers, fostering strong business relationships and contributing to the economic growth of the UAE.
        </p>
        <button className="button-custom mb-10">Get Started</button>
        <div className="flex justify-center gap-2 w-full">
          <Card imageSrc={cardImage1} text="International imports" />
          <Card imageSrc={cardImage2} text="Product distribution" />
          <Card imageSrc={cardImage1} text="Retail delivery" />
        </div>
      </div>
    </div>
  );
};

export default Home;