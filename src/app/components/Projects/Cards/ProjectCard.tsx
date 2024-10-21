// ProjectCard.tsx
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

type ProjectCardProps = {
  name: string;
  imageSrc: string;
  websiteLink: string;
  githubLink: string;
  technology?: string[]; // optional technology prop
  description: string;
  isSmallScreen: boolean;
};

function ProjectCard({ name, imageSrc, websiteLink, githubLink, technology, description, isSmallScreen }: ProjectCardProps) {
  return (
    <article className={`flex flex-col rounded-lg items-center justify-center space-y-7 flex-shrink-0 ${isSmallScreen ? 'w-full' : 'w-[500px] md:w-[600px] lg:w-[700px] xl:w-[800px]'} snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 transition-opacity duration-200 overflow-y-scroll scrollbar`}>
      <Link href={websiteLink} target='_blank'>
        <motion.img
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='w-32 h-32 rounded-full xl:w-[160px] xl:h-[160px] object-cover object-center'
          src={imageSrc}
        />
      </Link>

      <div className='px-0 md:px-10'>
        <h4 className='text-2xl md:text-3xl lg:text-3xl font-semibold text-center'>
          <span className='underline decoration-[#1e95aa]/50'>{name}</span>
        </h4>
        <p className='text-lg md:text-2xl lg:text-2xl font-light mt-1 text-center'>
          <a href={websiteLink} target='_blank'>Link to the website</a>
        </p>
        <p className='text-lg md:text-2xl lg:text-2xl font-light mt-1 text-center'>
          <a href={githubLink} target='_blank'>Link to Github</a>
        </p>
        {/* {technology && (
          <div className='flex space-x-2 my-2 justify-center'>
            {technology.map((tech, index) => (
              <img key={index} className='h-10 w-10 rounded-full' src={`/path/to/${tech}.png`} />
            ))}
          </div>
        )} */}
        <p className='space-y-4 ml-5 text-md p-5'>{description}</p>
      </div>
    </article>
  );
}
export default ProjectCard;