import React from 'react';
import Header from './NavBar/Header';
import Hero from './Hero/Hero';
import About from './About/About';
import ContactMe from './Contact/ContactMe';

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

        </div>
    );
};

export default SmallScreenPage;