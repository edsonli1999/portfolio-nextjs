import Image from 'next/image'
import { Metadata } from 'next'
import Header from './components/Header'
import Hero from './components/Hero'
import ContactMe from './components/ContactMe'
import About from './components/About'
import WorkExperience from './components/WorkExperience'

// Note: 
// 1. Sonny uses nextjs version (12.3.0) as opposed to my nextjs version (13.4.12) 
//    Which is why the folder structure (and other small stuff) is slightly different
// 2. Sonny doens't seem to need to add in "use client" in his component files.

// VsCode Extensions:
// TailwindCSS intellisense
// ES7+ react extension

export const metadata: Metadata = {
  title: "Edson's Portfolio",
}

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory 
    overflow-scroll z-0">
      
      {/* Head moved to title, as per new nextjs version */}
      <Header/>

      {/* To make snap work, need to make parent snap mandatory */}
      <section id="hero" className='snap-center'> 
        <Hero/>
      </section>

      <section id='about' className='snap-end'>
        <About/>
      </section>

      {/* Experience */}
      <section id='experience' className='snap-center'>
        <WorkExperience/>
      </section>

      {/* Skills */}

      {/* Projects */}

      {/* Contact Me */}
      <section id="contact" className='snap-start'> 
        <ContactMe/>
      </section>
      
    </div>

  )
}
