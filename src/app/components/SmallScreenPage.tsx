'use client';

import React, { useState, useEffect } from 'react';
import Header from './NavBar/Header';
import Hero from './Hero/Hero';
import ContactMe from './Contact/ContactMe';

const ThemeTeaser = () => {
  const [mounted, setMounted] = useState(false);
  
  // Only render after component mounts on the client
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) return null;
  
  return (
    <div className="fixed bottom-5 left-0 right-0 mx-auto w-max bg-gray-800 text-white text-xs px-4 py-2 rounded-full opacity-80 z-50">
      <p>A more cinematic experience available on desktop! ;)</p>
    </div>
  );
};

const SmallScreenPage: React.FC = () => {
    return (
        <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 scrollbar">
            {/* scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#1e95aa]/50 */}

            {/* Head moved to title, as per new nextjs version */}
            <Header />

            {/* To make snap work, need to make parent snap mandatory */}
            <section id="hero" className='snap-center'>
                <Hero isSmallScreen={true} />
            </section>

            {/* <section id='about' className='snap-end'>
                <About />
            </section> */}

            {/* Make work experience and projects external pages */}

            {/* <section id='skills' className='snap-start'> <Skills/> </section> */}

            <section id="contact" className='snap-center'>
                <ContactMe />
            </section>

            {/* Add desktop theme teaser */}
            <ThemeTeaser />
        </div>
    );
};

export default SmallScreenPage;