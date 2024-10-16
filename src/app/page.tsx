'use client'
import { Metadata } from 'next'
import Header from './components/NavBar/Header'
import Hero from './components/Hero/Hero'
import ContactMe from './components/Contact/ContactMe'
import About from './components/About/About'
import WorkExperience from './components/Experience/WorkExperience'
import Projects_1 from './components/Projects/Projects_1'
import { useState, useEffect } from 'react'
import SmallScreenPage from './components/SmallScreenPage'

// Note: 
// 1. Sonny uses nextjs version (12.3.0) as opposed to my nextjs version (13.4.12) 
//    Which is why the folder structure (and other small stuff) is slightly different

// VsCode Extensions:
// TailwindCSS intellisense
// ES7+ react extension

// export const metadata: Metadata = {
//   title: "Edson's Portfolio",
//   authors: [{ name: "Edson Li", url: "https://edsons-portfolio-nextjs.vercel.app" }],
//   keywords: ["Edson", "Portfolio", "Resume"]
// }

export default function Home() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const isSmall = window.innerWidth < 900;
      setIsSmallScreen(isSmall);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  if (isSmallScreen) {
    return <SmallScreenPage />;
  }
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory 
    overflow-scroll z-0 scrollbar">
      {/* scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#1e95aa]/50 */}

      {/* Head moved to title, as per new nextjs version */}
      <Header />

      {/* To make snap work, need to make parent snap mandatory */}
      <section id="hero" className='snap-center'>
        <Hero isSmallScreen={false} />
      </section>

      <section id='about' className='snap-end'>
        <About />
      </section>

      <section id='experience' className='snap-center'>
        <WorkExperience isSmallScreen={false} />
      </section>

      <section id='projects' className='snap-start '>
        <Projects_1 />
      </section>

      {/* <section id='skills' className='snap-start'>
        <Skills/>
      </section> */}

      <section id="contact" className='snap-center'>
        <ContactMe />
      </section>

    </div>

  )
}
