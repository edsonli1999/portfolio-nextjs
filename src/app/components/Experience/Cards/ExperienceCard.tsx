import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

type ExperienceCardProps = {
  companyName: string;
  companyUrl?: string;
  companyIcon: string;
  position: string;
  tenure: string;
  description: string[];
  summaryNotes: string[];
  techStack: string[];
  isSmallScreen: boolean;
  isExpanded: boolean;
  toggleCardExpansion: (companyName: string) => void;
};

function ExperienceCard({ companyName, companyUrl, companyIcon, position, tenure, description, summaryNotes, techStack, isSmallScreen, isExpanded, toggleCardExpansion }: ExperienceCardProps) {
  const formatTextWithNewlines = (text: string) => {
    return text.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  };

  return (
    <article className={`flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 ${isSmallScreen ? 'w-full' : 'w-[400px] md:w-[600px] xl:w-[800px] snap-center'} bg-[#292929] p-10 ${isExpanded ? 'opacity-100' : 'opacity-40'} md:hover:opacity-100 md:opacity-40 transition-opacity duration-200 overflow-y-scroll z-10 scrollbar`}>

        {companyUrl && (
          <Link href={companyUrl} target='_blank'>
            <motion.img
              initial={{ y: -100, opacity: 0 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='w-28 h-28 rounded-full xl:w-[150px] xl:h-[150px] object-cover object-center'
              src={companyIcon}
              alt={`${companyName}_logo`}
            />
          </Link>
        )}
        <div className='px-0 md:px-10'>
          <h4 className='text-2xl md:text-3xl lg:text-3xl font-light'>{position}</h4>
          <p className='text-xl md:text-2xl lg:text-2xl font-bold mt-1'>
            <a href={companyUrl} target='_blank'>
              {companyName}
            </a>
          </p>
          <div className="flex space-x-2 my-2">
            {techStack.map((link, index) => (
              <img key={index} className="h-10 w-10 rounded-full" src={link} />
            ))}
          </div>
          <p className='uppercase py-4 text-gray-300'>{tenure}</p>
          <ul className="list-disc space-y-4 ml-5 text-md text-white">
            {description.map((desc, index) => (
              <li key={index}>{desc}</li>
            ))}
          </ul>

          <div className="py-5">
            <p className="py-1 uppercase text-gray-500">Personal Summary:</p>
            {summaryNotes.map((point, index) => (
              <p key={index} className='py-2 text-white'>
                {formatTextWithNewlines(point)}
              </p>
            ))}
          </div>
        </div>
      </article>
      );
}

      export default ExperienceCard;