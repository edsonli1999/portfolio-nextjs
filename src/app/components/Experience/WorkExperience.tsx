import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Remove this if not used
import ExperienceCard from './Cards/ExperienceCard'; // Verify the path
import { useRouter } from 'next/navigation';
import { experienceData } from '@/data/experienceData';

// Defining the props interface for the WorkExperience component
type Props = { isSmallScreen: boolean };

// Function component for WorkExperience
function WorkExperience({ isSmallScreen }: Props) {

  // State to keep track of the expanded state of each card individually
  const [expandedCard, setExpandedCard] = useState<{ [key: string]: boolean }>({});
  const router = useRouter();

  // Function to handle the expansion/collapse of an individual card
  const toggleCardExpansion = (companyName: string) => {
    setExpandedCard((prevState) => ({
      ...prevState,
      [companyName]: !prevState[companyName],
    }));
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      // ideal
      className='lg:flex lg:relative lg:overflow-hidden lg:text-left lg:flex-row lg:h-screen lg:max-w-full lg:px-10 lg:justify-evenly lg:mx-auto lg:items-center lg:z-10'
    // Resp A
    // className='lg:flex relative overflow-hidden flex-col text-left md:flex-row h-screen max-w-full px-10 justify-evenly mx-auto items-center z-10'
    // Resp B
    // className='lg:flex lg:relative lg:overflow-hidden lg:flex-col lg:text-left md:flex-row lg:h-screen lg:max-w-full lg:px-10 lg:justify-evenly lg:mx-auto lg:items-center lg:z-10'
    >
      {/* Conditional rendering of the 'Experience' header based on screen size */}
      {isSmallScreen ? (
        <div className='flex flex-col items-center w-full'>
          <h3 className='uppercase tracking-[20px] text-gray-500 text-2xl z-10 text-center w-full'>
            Experience
          </h3>
        </div>
      ) : (
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl z-10'>
          Experience
        </h3>
      )}

      {/* Conditionally rendering the back button based on screen size*/}
      {isSmallScreen && (
        <div className="flex justify-center mt-4">
          <button className="heroButton" onClick={() => router.push('/')} >Back to Home</button>
        </div>
      )}

      <br></br>

      {/* Conditional rendering of Experience Cards */}
      {isSmallScreen ? (
        <div className="w-full">
          {experienceData.map((experience, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleCardExpansion(experience.companyName)}
                className="heroButton w-full text-center border-b-2 border-gray-500"
              >
                {expandedCard[experience.companyName] ? 'Hide' : 'Show'} {experience.companyName}
              </button>
              {expandedCard[experience.companyName] && (
                <ExperienceCard
                  {...experience}
                  // Passing isSmallScreen to ExperienceCard to conditionally render styles
                  isSmallScreen={isSmallScreen}
                  isExpanded={expandedCard[experience.companyName]}
                  toggleCardExpansion={toggleCardExpansion}
                />
              )}
            </div>
          ))}
          <button className="heroButton mt-4" onClick={scrollToTop}>Back to Top</button>
        </div>
      ) : (
        <>
          <div className="h-[90%] w-screen flex justify-start space-x-5 overflow-x-scroll pt-24 pb-8 p-10 snap-x snap-mandatory z-10 scrollbar">
            {experienceData.map((experience, index) => (
              <div key={index} className="h-full w-screen flex justify-start space-x-5 z-10">
                {/* Render the ExperienceCard component in the carousel */}
                <ExperienceCard
                  {...experience}
                  isExpanded={expandedCard[experience.companyName]}
                  toggleCardExpansion={toggleCardExpansion}
                  isSmallScreen={false} />
              </div>
            ))}
          </div>
          {/* Background to be rendered on larger screens */}
          <div className='w-full absolute top-[30%] bg-[#1e95aa]/10 left-0 h-[500px] skew-y-12 z-0' />
        </>

      )}

    </motion.div>

  );
}
export default WorkExperience;  