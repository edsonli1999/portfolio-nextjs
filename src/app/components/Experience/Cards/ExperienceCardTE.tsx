import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'


type Props = {}

function ExperienceCardTE({ }: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[800px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 transition-opacity duration-200 overflow-y-scroll z-10 scrollbar'>
      <Link href='https://toppanecquaria.com/' target='_blank'>
        <motion.img
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='w-28 h-28 rounded-full xl:w-[150px] xl:h-[150px] object-cover object-center'
          src='https://images.crunchbase.com/image/upload/c_pad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/2801bc91708af6798450'
        />
      </Link>

      <div className='px-0 md:px-10'>
        <h4 className='text-2xl md:text-3xl lg:text-3xl font-light'> Software Developer Intern </h4>
        <p className='text-xl md:text-2xl lg:text-2xl font-bold mt-1'> <a href="https://toppanecquaria.com/" target='_blank'>Toppan Ecquaria Singapore</a></p>
        <div className='flex space-x-2 my-2'>
          <img
            className='h-10 w-10 rounded-full'
            src='https://w7.pngwing.com/pngs/447/294/png-transparent-python-javascript-logo-clojure-python-logo-blue-angle-text-thumbnail.png'
          />

          <img
            className='h-10 w-10 rounded-full'
            src='https://w7.pngwing.com/pngs/175/494/png-transparent-selenium-computer-icons-test-automation-software-testing-selenium-angle-text-logo-thumbnail.png'
          />


        </div>
        <p className='uppercase py-4 text-gray-300'> Dec 2022 - Feb 2023 </p>

        <ul className='list-disc space-y-4 ml-5 text-md text-white'>
          <li> Support the development of a polling web app used by the Singapore Government in the recent Presidential Election. </li>
          <li> Duties include manual testing, updating test datasets, writing scripts for user acceptance testing, updating database models, and other various administrative tasks.</li>
          <li> Technology used: Data cleaning (excel, python pandas), scripting (python selenium), database modelling (draw.io, AWS), admin (microsoft office) </li>
          <li> Reference: Wei Yang +65 9029 1959</li>
        </ul>

        <div className='py-5'>
          <p className='py-1 uppercase text-gray-300'>
            Personal summary:
          </p>

          <p className='py-2 text-white'>
            I was given a testing script from a full-time developer, coded using Python Selenium. Although functional, the previous developer was in a time crunch, and as such I was tasked to make it more stable, user friendly, and reusable. Additionally, I had to make a new script that was similar, with its purpose to test another part of the website.
          </p>

          <p className='py-2 text-white'>
            After some brainstorming, I decided to first split the single python file with 10,000 lines into multiple files, as well as add in the function of taking in multiple parameters when running to account for different testing scenarios.
          </p>


          <p className='py-2 text-white'>
            I also made it possible to start from an intermediate step (in the user story), for situations when the testing script stopped at a certain step, for whatever reason.
          </p>

          <p className='py-2 text-white'>
            Lastly, I introduced the idea of using a screen recorder while running the testing script. This improved efficiency, as there were situations where we had to check the recording and align the scenario with what was recorded in the database. Previously, the developers relied on their memory of what the script executed on the website. My use of the screen recorder got rid of the possibility for human error, making sure that every single step was recorded and accounted for.
          </p>

          <p className='py-2 text-white'>
            Ultimately, my internship period was over before the project deadline. However, I was told from my coworkers who stayed on that they continued with my methods, with minimal changes to my code. The project eventually completed, to which I have faith that my contributions have made its testing much more efficient.
          </p>
        </div>
      </div>
    </article>
  )
}

export default ExperienceCardTE