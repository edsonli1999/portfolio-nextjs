'use client'
import { Metadata } from 'next'
import Header from './components/NavBar/Header'
import Hero from './components/Hero/Hero'
import ContactMe from './components/Contact/ContactMe'
import About from './components/About/About'
import WorkExperience from './components/Experience/WorkExperience'
import Projects from './components/Projects/Projects'
import SmallScreenPage from './components/SmallScreenPage'
import ThemeToggle from './components/ThemeToggle'
import { useTheme } from './context/ThemeContext'

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
  // Use the theme context for screen size and theme
  const { isDesktop, theme } = useTheme();
  
  // Small screens always use standard theme and SmallScreenPage
  if (!isDesktop) {
    return <SmallScreenPage />;
  }
  
  // Desktop screens with different themes
  if (theme === 'standard') {
    // Standard theme (current design)
    return (
      <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 scrollbar">
        <Header />
        <ThemeToggle />

        <section id="hero" className='snap-center'>
          <Hero isSmallScreen={false} />
        </section>

        <section id='about' className='snap-end'>
          <About />
        </section>

        <section id='experience' className='snap-center'>
          <WorkExperience isSmallScreen={false} />
        </section>

        <section id='projects' className='snap-start'>
          <Projects isSmallScreen={false} />
        </section>

        <section id="contact" className='snap-center'>
          <ContactMe />
        </section>
      </div>
    );
  } else if (theme === 'detective') {
    // Detective theme - placeholder until we implement the themed components
    return (
      <div className="bg-[#121212] text-[#f0f0f0] h-screen snap-y snap-mandatory overflow-scroll z-0">
        <Header />
        <ThemeToggle />
        
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-3xl font-bold text-[#ffd700] mb-4">Detective Theme</h1>
          <p className="text-[#a0a0a0] mb-8">Coming soon... This theme is under investigation.</p>
          <p className="text-[#a0a0a0]">Switch back to Standard mode using the toggle in the top-right corner.</p>
        </div>
      </div>
    );
  } else if (theme === 'terminal') {
    // Terminal theme - placeholder until we implement the themed components
    return (
      <div className="bg-[#0a0a0a] text-[#00ff00] h-screen snap-y snap-mandatory overflow-scroll z-0 font-mono">
        <Header />
        <ThemeToggle />
        
        <div className="flex flex-col items-center justify-center h-screen">
          <div className="w-full max-w-3xl p-5">
            <p className="mb-2">SYSTEM BOOT SEQUENCE INITIALIZED...</p>
            <p className="mb-2">LOADING PORTFOLIO DATA....</p>
            <p className="mb-2">THEME MODULE: TERMINAL v1.0</p>
            <p className="mb-2">STATUS: IN DEVELOPMENT</p>
            <p className="mb-4">...</p>
            <p className="mb-2">PORTFOLIO: EDSON LI</p>
            <p className="mb-2">ACCESS: GRANTED</p>
            <p className="mb-4">...</p>
            <p className="mb-2">NOTICE: TERMINAL THEME CURRENTLY IN DEVELOPMENT</p>
            <p className="mb-2">RETURN TO STANDARD MODE USING THE TOGGLE IN THE TOP-RIGHT CORNER</p>
            <div className="h-5 w-16 bg-[#00ff00] mt-4 animate-pulse"></div>
          </div>
        </div>
      </div>
    );
  }
  
  // Fallback to standard theme
  return <SmallScreenPage />;
}
