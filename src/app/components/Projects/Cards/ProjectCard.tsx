import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

type ProjectCardProps = {
  name: string;
  imageSrc: string;
  websiteLink: string;
  githubLink: string;
  description: string;
};

function ProjectCard({ name, imageSrc, websiteLink, githubLink, description }: ProjectCardProps) {
  return (
    <article className="flex flex-col rounded-lg items-center justify-center space-y-7 flex-shrink-0 w-full md:w-[600px] lg:w-[700px] xl:w-[800px] snap-center bg-[#292929] p-10 lg:hover:opacity-100 lg:opacity-40 opacity-100 transition-opacity duration-200 overflow-y-scroll scrollbar">
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
        <p className='space-y-4 ml-5 text-md p-5'>{description}</p>
      </div>
    </article>
  );
}
export default ProjectCard;