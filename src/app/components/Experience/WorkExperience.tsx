import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Remove this if not used
import ExperienceCard from './Cards/ExperienceCard'; // Verify the path
import { useRouter } from 'next/navigation'

// Defining the props interface for the WorkExperience component
type Props = { isSmallScreen: boolean };

// Function component for WorkExperience
function WorkExperience({ isSmallScreen }: Props) {
  // Array of experience data
  const experienceData = [
    // DAT
    // {
    //   companyName: 'Workplace 1',
    //   companyUrl: 'https://www.dataannotation.tech/about?',
    //   companyIcon: 'dataannotationtech_logo.jpeg',
    //   position: 'Software Developer - AI Trainer',
    //   techStack: [
    //     'https://w7.pngwing.com/pngs/447/294/png-transparent-python-javascript-logo-clojure-python-logo-blue-angle-text-thumbnail.png',
    //     'https://cdn.iconscout.com/icon/free/png-512/free-typescript-1-1175078.png?f=webp&w=256',
    //     'https://cdn.iconscout.com/icon/free/png-512/free-javascript-1-225993.png?f=webp&w=256',
    //     'https://cdn.iconscout.com/icon/premium/png-512-thumb/html-19-116634.png?f=webp&w=256',
    //     'https://cdn.iconscout.com/icon/premium/png-512-thumb/css-22-116632.png?f=webp&w=256'
    //   ],
    //   tenure: 'Apr 2024 - Present',
    //   description: [
    //     'Collaborated with high-profile clients, contributing to the development and enhancement of widely-used AI technologies.',
    //     'Trained AI LLMs in various aspects, with a heavy emphasis on coding-related tasks.',
    //     'Technology used: Web Development (Python, React JS, TS, HTML+CSS), Scripting (Python), Data Analysis (Python Pandas, Matplotlib), Others (Java, C, Rust)',
    //   ],
    //   summaryNotes: [
    //     "Due to signing an NDA, I can't give too detailed of a summary unfortunately.",
    //     'In summary, I am training AI models by testing responses given by various LLMs (language learning models), mostly relating to code. These could be anything from simple python `hello world` programs, to slightly less-simple react and nextjs applications.',
    //     'As such, I am constantly refreshing my memory on these technologies, as well as consistently learning new ones.',
    //     'Due to being fully remote, as well as allowing myself to dictate my own work hours, I am massively grateful to be given this opportunity to fully explore my passions and hobbies in my spare time. Some of these include helping out with a social media application for the University of Melbourne as an Alumni, as well as upskilling myself and studying for my AWS Associate Solutions Architect certification.'
    //   ],

    // },
    // Universal Software Solutions
    {
      companyName: 'Workplace 2',
      companyUrl: 'https://www.u-sws.com/',
      companyIcon: 'https://www.u-sws.com/Content/images/uSWS.gif',
      position: 'Graduate Software Developer',
      techStack: [
        'https://cdn.iconscout.com/icon/free/png-512/free-typescript-1-1175078.png?f=webp&w=256',
        'https://cdn.iconscout.com/icon/free/png-512/free-javascript-1-225993.png?f=webp&w=256',
        'https://cdn.iconscout.com/icon/premium/png-512-thumb/html-19-116634.png?f=webp&w=256',
        'https://cdn.iconscout.com/icon/premium/png-512-thumb/css-22-116632.png?f=webp&w=256',
        'https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/rest-api-icon.png',
        'https://static-00.iconduck.com/assets.00/azure-subscription-icon-2048x1514-48brw1gw.png'
      ],
      tenure: 'Nov 2023 - Feb 2024',
      description: [
        'Improved the workflow of over 2,000 employees at Roy Hill ($3.2B profit in 2024) and 200 employees at RTC Group ($12M profit in 2024) by developing customized app pages.',
        'Developed and maintained company services, enhancing functionality through source code updates and API integrations.',
        'Technology used: Full stack (JS, TS, HTML, CSS), Rest API Calls (JS, VB.NET), dev workflow (Azure Devops, Git)',
        // 'Reference: Andrew Rigby (andrew.rigby@u-sws.com, 0410 469 329), Vishal Maru (vishal.maru@u-sws.com, 0405 242 694)'
      ],
      summaryNotes: [
        "My time at U-SWS was a fruitful one. As the company size was small, I had the privilege of experiencing being a software developer in an intimate environment. Being situated in Croydon, I enjoyed going against the flow of traffic every commute, and got to enjoy the lovely cafes and shops of an outer suburb.",
        "Our application is in summary, a logistics management app. This app allows our clients to schedule jobs, take in requests from their own clients, as well as pass on requests to us. It also allows them to manage their employees' timesheets, and various other administrative tasks. Requests that were passed on to us ranged from simple clarifications, to making new app pages, implementing new features, as well as scheduling reports.",
        "-- Full stack development -- \nMaking new pages was decently simple, thanks to the lead developer implementing a 'template editor' page on the app, which comprised of a code editor with multiple tabs(using Monaco). This allowed us to build app pages in house, without ever needing to modify source code. This was mainly done through Javascript, HTML and CSS. This 'template editor' also had some JSON and Javascript pages that took in some additional flags and environment variables, which allowed us to pull in data from different parts of the service. Often times, we would have to first pull in the data using these flags, manipulate them using Javascript to fit some kind of mapping format, and then parse that out through a javascript object. It was fun and challenging, as this was where I largely improved my functional programming. Some important skills include arrow functions, asyncronous functions, anonymous functions, and using array and object functions (Array.prototype.map(), Array.prototype.filter(), Object.groupBy()).",
        "-- API Calls -- \nOur API used RESTFul services, using various statements to perform CRUD operations. The first most often 'form' I would use this in would be to make a READ call in the URL, using Select statements as well as filtering somehow to get the data I needed. The app we had allowed for making API calls in the URL, and it was immensely useful in allowing me to make fetch calls and seeing what I got from the browser. This would simply be a fetch call, followed by a string that resembled a URL (containing those select and filter statements).  The next method was more verbose, but had the ability to make all 4 CRUD calls. This took the form of a payload, as well as some kind of call to a certain entity within the service (through a URL, without select and filter statements). The payload contained the select and filters I needed, through a Javascript object, which allowed for much more control over the filters as this also allowed for group filters and nested 'And'/'Or' statements on these filters. Ultimately these methods would be useful for when we needed to mass update some dataset, or to check for special cases in an existing dataset.",
        "-- Scheduling things -- \n Although more rare, scheduling tasks (such as daily reports, daily acknowledgements, etc.) would usually manifest themselves in the form of a plugin, using VB.NET. This usually involved making some API call to the server, manipulating that data, and then using some library to get the output we needed. In the example of daily reports, it would be something like manipulating the data for that day into an excel format, and sending that excel file to some person through another API call.",
        "-- Modifying source code -- \n This was usually done when we had to change the way our application worked (in TypeScript). One task I worked on involved page routing, where initially our app was routing to the wrong pages in some niche scenarios. It essentially involved taking in the URL string through an object, making some comparisons after splicing it, and returning the right pages afterwards. Another task that I worked on involved cleaning up our existing code to be TypeScript 5.5 friendly, as certain ignore flags would not be allowed once updating to that version. I often found myself changing TypeScript objects to maps, as the way maps were initialised still followed the standards of TypeScript, yet still being flexible enough where it did not involve changing things outside the function scope.",
        "-- Dev workflow -- \n Our dev workflow was decently simple. Whenever we had a task from a client, we (the dev team and project manager) would hold a teams call discussing the context as well as what needs to be done, before discussing how we want to allocate this task. If it was simple then usually the task could be wholely given to a single junior developer, otherwise the entire team would have a crack at it. If it was making an app page, then it was as simple as hitting save on our in house template editor, and changing some flags elsewhere on our database to have it deployed as a page. If it involved changing the source code, we would follow a more 'traditional' workflow, creating a separate branch on Azure Devops, committing and pushing regularly, before eventually making a Pull Request where the Lead Developer would have a code review and merge it with the main branch.",
      ],

    },
    // Toppan Ecquaria
    {
      companyName: 'Workplace 3',
      companyUrl: 'https://toppanecquaria.com/',
      companyIcon: 'https://images.crunchbase.com/image/upload/c_pad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/2801bc91708af6798450',
      position: 'Software Developer Intern',
      techStack: [
        'https://w7.pngwing.com/pngs/447/294/png-transparent-python-javascript-logo-clojure-python-logo-blue-angle-text-thumbnail.png',
        'https://w7.pngwing.com/pngs/175/494/png-transparent-selenium-computer-icons-test-automation-software-testing-selenium-angle-text-logo-thumbnail.png'
      ],
      tenure: 'Dec 2022 - Feb 2023',
      description: [
        'Contributed to the development of a polling web application used by the Singapore Government during the 2023 Presidential Election, serving over 2.7 million eligible voters.',
        'Responsibilities included manual testing, updating test datasets, scripting for user acceptance testing, and updating database models.',
        'Technology used: Data cleaning (excel, python pandas), scripting (python selenium), database modelling (draw.io, AWS), admin (microsoft office)',
        // 'Reference: Wei Yang +65 9029 1959'
      ],
      summaryNotes: [
        "I was given a testing script from a full-time developer, coded using Python Selenium. Although functional, the previous developer was in a time crunch, and as such I was tasked to make it more stable, user friendly, and reusable. Additionally, I had to make a new script that was similar, with its purpose to test another part of the website.",
        "After some brainstorming, I decided to first split the single python file with 10,000 lines into multiple files, as well as add in the function of taking in multiple parameters when running to account for different testing scenarios.",
        "I also made it possible to start from an intermediate step (in the user story), for situations when the testing script stopped at a certain step, for whatever reason.",
        "Lastly, I introduced the idea of using a screen recorder while running the testing script. This improved efficiency, as there were situations where we had to check the recording and align the scenario with what was recorded in the database. Previously, the developers relied on their memory of what the script executed on the website. My use of the screen recorder got rid of the possibility for human error, making sure that every single step was recorded and accounted for.",
        "Ultimately, my internship period was over before the project deadline. However, I was told from my coworkers who stayed on that they continued with my methods, with minimal changes to my code. The project eventually completed, to which I have faith that my contributions have made its testing much more efficient."
      ],
    }

  ];

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
        </div>
      ) : (
        <div className="h-[90%] w-screen flex justify-start space-x-5 overflow-x-scroll pt-24 pb-8 p-10 snap-x snap-mandatory z-10 scrollbar">
          {experienceData.map((experience, index) => (
            <div key={index} className="h-full w-screen flex justify-start space-x-5 z-10">
              {/* Render the ExperienceCard component in the carousel */}
              <ExperienceCard
                {...experience}
                isExpanded={expandedCard[experience.companyName]}
                toggleCardExpansion={toggleCardExpansion}
                isSmallScreen={false}
              />
            </div>
          ))}
        </div>
      )}

      {/* Conditionally rendering the back button based on screen size*/}
      {isSmallScreen && (
        <div className="flex justify-center mt-4">
          <button className="heroButton" onClick={() => router.push('/')} >Back to Home</button>
        </div>
      )}

    </motion.div>
  );
}
export default WorkExperience;  