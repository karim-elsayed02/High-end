import React from 'react';
import Image from 'next/image';
import backgroundImg from '/public/background.png';
import cardImage1 from '/public/card1.png';
import cardImage2 from '/public/card2.png';
import Link from 'next/link';
import ScrollButton from '../components/ScrollButton';
import Card from '../components/Card';
import BackgrounImg2 from '@/logos/image 3.png'
import ellipse from '@/logos/Ellipse 2.svg'
import ContactCard from '@/components/ContactCard';

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
      {/** contact us section */}
      <div className='relative my-8 h-full'>
        <Image className="w-full z-0 object-cover" src={BackgrounImg2} alt="Background image" />
        <Image src={ellipse}  className="absolute top-0 right-0 w-[79%]  h-full object-cover z-2"/>
        <div className="flex flex-col absolute left-16 top-16 w-[47%] h-[79%] z-3 bg-white justify-between items-start pl-10">
          <div>
            <div className='bg-my_gold text-white w-[36%] h-[9%] absolute top-0 left-10  rounded-b-3xl flex items-center font-medium text-2xl justify-center'>Contact Us</div>
            
          </div>
          <p className='text-my_gray font-normal w-[88%] mt-8'>Please enter your details and your enquiry and we will get back to you as soon as possible</p>
          <div className='flex items-center justify-between w-[88%]'>
            <div className='flex flex-col justify-between space-y-4 h-[100%] w-[50%]'>
            <input
              type="text"
              id="nameInput"
              placeholder="First Name"
              className='w-[80%] rounded-lg border-2 border-[#BCB9B9] h-[40%] p-3 shadow-md'
              />
            <input
              type="text"
              id="nameInput"
              placeholder="Email"
              className='w-[80%] rounded-lg border-2 border-[#BCB9B9] h-[40%] p-3 shadow-md'
              />
            </div>
            <div className='flex flex-col justify-between space-y-4 w-[50%]'>
            <input
              type="text"
              id="nameInput"
              placeholder="Last Name"
              className='w-[80%] rounded-lg border-2 border-[#BCB9B9] h-[40%] p-3 shadow-md'
              />
            <input
              type="text"
              id="nameInput"
              placeholder="Phone Number"
              className='w-[80%] rounded-lg border-2 border-[#BCB9B9] h-[40%] p-3 shadow-md'
              />
            </div>
          </div>
          <input
              type="text"
              id="nameInput"
              placeholder="Message"
              className='w-[88%] rounded-lg border-2 border-[#BCB9B9] h-[38%] p-3 shadow-md'
              />
          <button className='button-custom w-[30%] h-[10%] rounded-none  bg-my_blue mb-7'>
            Submit 
          </button>
           
        </div>
      </div>
    </div>
  );
};

export default Home;