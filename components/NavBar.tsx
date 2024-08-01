"use client";

import React, { useState, useEffect } from 'react';
import english_logo from "@/logos/logo.png";
import Image from 'next/image';
import Link from 'next/link';

const NavBar = () => {
  const [selectedLang, setSelectedLang] = useState('EN');
  const [scrolled, setScrolled] = useState(false);

  const handleLanguageChange = (lang: string) => {
    setSelectedLang(lang);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`bg-white flex justify-between items-center p-4 transition-shadow duration-300 ${scrolled ? 'shadow-md' : ''} fixed w-full top-0 left-0 z-50`}>
      <div className="flex items-center">
        <Image src={english_logo} alt="Highend logo" height={65} width={50} /> 
        <div className="flex flex-col ml-2"> 
          <p className="text-xl p-0 m-0 text-my_blue leading-none">HIGH END</p>
          <p className="text-sm p-0 m-0 text-my_gray leading-none">General Trading</p> 
        </div>
      </div>
      <div className="flex justify-center items-center text-my_blue gap-8 h-full">
        <Link href="/markets" className="text-my_blue font-semibold hover:bg-my_blue hover:text-my_gold hover:scale-1.1 px-6 py-4">Markets</Link>
        <Link href="/service" className="text_my_blue font-semibold hover:bg-my_blue hover:text-my_gold hover:scale-1.1 px-6 py-4">Service</Link> 
        <Link href="/about" className="text_my_blue font-semibold hover:bg-my_blue hover:text-my_gold hover:scale-1.1  px-6 py-4">About</Link>
      </div>
      <div className="flex items-center w-25 h-8 gap-0.5"> 
        <button
          className={`button-18 ${selectedLang === 'EN' ? 'selected' : ''}`}
          onClick={() => handleLanguageChange('EN')}
        >
          EN
        </button>
        <button
          className={`button-18 button-switch ${selectedLang === 'AR' ? 'selected' : ''}`}
          onClick={() => handleLanguageChange('AR')}
        >
          AR
        </button>
      </div>
    </nav>
  );
};

export default NavBar;