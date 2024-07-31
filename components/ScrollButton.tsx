"use client";

import React from 'react';

const ScrollButton = () => {
  const scrollToSection = () => {
    const section = document.getElementById('second-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer" onClick={scrollToSection}>
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
      </svg>
    </div>
  );
};

export default ScrollButton;