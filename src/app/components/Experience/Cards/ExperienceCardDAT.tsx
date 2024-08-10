/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

type Props = {}

function ExperienceCardDAT({ }: Props) {

  let websiteLink = 'https://www.dataannotation.tech/about?'

  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[800px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 transition-opacity duration-200 overflow-y-scroll z-10 scrollbar'>
      <Link href={websiteLink} target='_blank'>
        <motion.img
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='w-28 h-28 rounded-full xl:w-[150px] xl:h-[150px] object-cover object-center'
          src='dataannotationtech_logo.jpeg'
        />
      </Link>

      <div className='px-0 md:px-10'>
        <h4 className='text-2xl md:text-3xl lg:text-3xl font-light'> Software Developer - AI trainer (contract) </h4>
        <p className='text-xl md:text-2xl lg:text-2xl font-bold mt-1'> <a href="https://www.dataannotation.tech/about?" target='_blank'>Data Annotation Technology</a></p>
        <div className='flex space-x-2 my-2'>
          <img
            className='h-10 w-10 rounded-full'
            src='https://w7.pngwing.com/pngs/447/294/png-transparent-python-javascript-logo-clojure-python-logo-blue-angle-text-thumbnail.png'
          />

          <img
            className='h-10 w-10 rounded-full'
            src='https://cdn.iconscout.com/icon/free/png-512/free-typescript-1-1175078.png?f=webp&w=256'
          />
          <img
            className='h-10 w-10 rounded-full'
            src='https://cdn.iconscout.com/icon/free/png-512/free-javascript-1-225993.png?f=webp&w=256'
          />
          <img
            className='h-10 w-10 rounded-full'
            src='https://cdn.iconscout.com/icon/premium/png-512-thumb/html-19-116634.png?f=webp&w=256'
          />
          <img
            className='h-10 w-10 rounded-full'
            src='https://cdn.iconscout.com/icon/premium/png-512-thumb/css-22-116632.png?f=webp&w=256'
          />

        </div>
        
        <p className='uppercase py-4 text-gray-300'> April 2024 - Current </p>

        <ul className='list-disc space-y-4 ml-5 text-md text-white'>
          <li> Analysed language model outputs to improve the efficacy of end-user interactions with AI. </li>
          <li> Technology used: Web Development (Python, React JS, TS, HTML+CSS), Scripting (Python), Data Analysis (Python Pandas, Matplotlib) </li>
        </ul>

        <div className='py-5'>
          <p className='py-1 uppercase text-gray-300'>
            Personal summary:
          </p>

          <p className='py-2 text-white'>
            Due to signing an NDA, I can&apos;t give too detailed of a summary unfortunately.
          </p>

          <p className='py-2 text-white'>
            In summary, I am training AI models by testing responses given by various LLMs (language learning models), mostly relating to code. These could be anything from simple python `hello world` programs, to slightly less-simple react and nextjs applications.
          </p>

          <p className='py-2 text-white'>
            As such, I am constantly refreshing my memory on these technologies, as well as consistently learning new ones.
          </p>

          <p className='py-2 text-white'>
            Due to being fully remote, as well as allowing myself to dictate my own work hours, I am massively grateful to be given this opportunity to fully explore my passions and hobbies in my spare time. Some of these include helping out with a social media application for the University of Melbourne as an Alumni, as well as upskilling myself and studying for my AWS Associate Solutions Architect certification.
          </p>

        </div>
      </div>
    </article>
  )
}

export default ExperienceCardDAT