import React from 'react'
import { motion } from 'framer-motion'
import ProjectCard from './Cards/ProjectCard';

type Props = {}

function Projects_1({ }: Props) {

  const projects = [
    {
      name: 'Utility-Times',
      imageSrc: 'utimes-transparent.png',
      websiteLink: 'https://shitimes.vercel.app/login',
      githubLink: 'https://github.com/IkePureza/utime',
      technology: ['python', 'javascript'],
      description:
        'A utility app for sharehouses, done during my final semester at university with 4 other students. It features authentication with Firebase, NextJS as the front end using TypeScript, and Firebase as the backend. It is deployed on vercel. Other technologies include Tailwind CSS and DaisyUI.',
    },
    {
      name: 'Corporate Translator', 
      imageSrc: 'corporatise.png', 
      websiteLink: 'https://corporate-translator.vercel.app/',
      githubLink: 'https://github.com/edsonli1999/Corporate-Translate-Flask',  
      technology: ['Python', 'Flask', 'Artificial Intelligence API', 'Google Gemini'], 
      description:
        'Translates everyday-informal phrases into phrases appropriate for a corporate/office setting, using an Artificial Intelligence API (Google Gemini). The front-end is developed using Python Flask and the app is hosted on Vercel. Other features include compatibility with smaller screens and dark mode.', 
    },
    {
      name: 'Weather App', 
      imageSrc: 'https://graphql-engine-cdn.hasura.io/assets/main-site/marketplace/openweather.svg', 
      websiteLink: 'https://edsons-weather-app.fly.dev/',  
      githubLink: 'https://github.com/edsonli1999/WeatherApp-rails',  
      technology: ['Ruby on Rails', 'AWS Elastic Beanstalk', 'Heroku', 'Fly.io', 'PostgreSql', 'Sqlite3', 'OpenWeather API'], 
      description: 'A weather application, pulling weather data from the OpenWeather API, rendering it out using Ruby on Rails and deployed on AWS Elastic Beanstalk, Heroku, and Fly.io. Databases used are Postgresql and Sqlite3. More details on github!',
    },
    {
      name: 'Personal Portfolio Website',
      imageSrc: 'Professional_headshot.jpg',  
      websiteLink: '#hero',
      githubLink: 'https://github.com/edsonli1999/portfolio-nextjs',  
      technology: ['NextJS', 'TypeScript', 'Framer Motion'],  
      description: 'A personal portfolio website, which showcases my experience and skills related to technology. It also serves to show more about myself, including hobbies, interests, and lifestyle. Current technologies include NextJS, TypeScript, and Framer Motion. It is deployed on Vercel, with more technologies to be used in the future. For more details check out my github.', 
    },
    // Add more projects as needed
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='flex relative overflow-hidden flex-col text-left md:flex-row h-screen max-w-full px-10 justify-evenly mx-auto items-center z-10'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl z-10'>
        Projects
      </h3>
      <br></br>
      <div className='h-[90%] w-screen flex justify-start space-x-5 overflow-x-scroll pt-24 pb-8 snap-x snap-mandatory z-10 scrollbar'>
        {projects.map((project, index) => (
          // Render the ProjectCard component for each project
          <div key={index} className='h-full w-screen flex justify-start space-x-5 z-10'>
            <ProjectCard {...project} />
          </div>
        ))}
      </div>

      <div className='w-full absolute top-[30%] bg-[#1e95aa]/10 left-0 h-[500px] skew-y-12 z-0' />
    </motion.div>
  )
}

export default Projects_1