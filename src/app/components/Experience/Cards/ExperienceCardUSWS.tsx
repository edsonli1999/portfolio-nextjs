/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function ExperienceCardUSWS({ }: Props) {
  let websiteLink = 'https://www.u-sws.com/'
  let logoLink = 'https://www.u-sws.com/Content/images/uSWS.gif'

  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[800px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 transition-opacity duration-200 overflow-y-scroll z-10 scrollbar'>
      <Link href={websiteLink} target='_blank'>
        <motion.img
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='w-28 h-28 rounded-full xl:w-[150px] xl:h-[150px] object-cover object-center'
          src={logoLink}
        />
      </Link>

      <div className='px-0 md:px-10'>
        <h4 className='text-2xl md:text-3xl lg:text-3xl font-light'> Graduate Solutions Developer </h4>
        <p className='text-xl md:text-2xl lg:text-2xl font-bold mt-1'> <a href={websiteLink} target='_blank'>Universal Software Solutions</a></p>
        <div className='flex space-x-2 my-2'>
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
          <img
            className='h-10 w-10 rounded-full bg-white'
            src='https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/rest-api-icon.png'
          />
          <img
            className='h-10 w-10 rounded-full bg-white'
            src='https://static-00.iconduck.com/assets.00/azure-subscription-icon-2048x1514-48brw1gw.png'
          />


        </div>
        <p className='uppercase py-4 text-gray-300'> Nov 2023 - Feb 2024 </p>

        <ul className='list-disc space-y-4 ml-5 text-md text-white'>
          <li> Developed and supported the services provided by the company, including updating source code, developing app pages to support multiple clients’ needs, as well as performing API calls to create/read/update/delete various datasets within multiple services. </li>
          <li> Technology used: Full stack (JS, TS, HTML, CSS), Rest API Calls (JS, VB.NET), dev workflow (Azure Devops, Git) </li>
          <li> Reference: Andrew Rigby (andrew.rigby@u-sws.com, 410 469 329)</li>
        </ul>

        <div className='py-5'>
          <p className='py-1 uppercase text-gray-300'>
            Personal summary:
          </p>
          <p className='py-2 text-white'>
            My time at U-SWS was a fruitful one. As the company size was small, I had the privelege of experiencing being a software developer in an intimate environment. Being situated in Croydon, I enjoyed going against the flow of traffic every commute, and got to enjoy the lovely cafes and shops of an outer suburb.
          </p>
          <p className='py-2 text-white'>
            Our application is in summary, a logistics management app. This app allows our clients to schedule jobs, take in requests from their own clients, as well as pass on requests to us. It also allows them to manage their employee's timesheets, and various other administrative tasks. Requests that were passed on to us ranged from simple clarifications, to making new app pages, implementing new features, as well as scheduling reports. 
          </p>
          <p className='py-2 text-white'>
            -- Full stack development -- <br></br>
            Making new pages was decently simple, thanks to the lead developer implementing a 'template editor' page on the app, which comprised of a code editor with multiple tabs(using Monaco). This allowed us to build app pages in house, without ever needing to modify source code. This was mainly done through Javascript, HTML and CSS. This 'template editor' also had some JSON and Javascript pages that took in some additional flags and environment variables, which allowed us to pull in data from different parts of the service. Often times, we would have to first pull in the data using these flags, manipulate them using Javascript to fit some kind of mapping format, and then parse that out through a javascript object. It was fun and challenging, as this was where I largely improved my functional programming. Some important skills include arrow functions, asyncronous functions, anonymous functions, and using array and object functions (Array.prototype.map(), Array.prototype.filter(), Object.groupBy()).
          </p>
          <p className='py-2 text-white'>
            -- API Calls -- <br></br>
            Our API used RESTFul services, using various statements to perform CRUD operations. The first most often 'form' I would use this in would be to make a READ call in the URL, using Select statements as well as filtering somehow to get the data I needed. The app we had allowed for making API calls in the URL, and it was immensely useful in allowing me to make fetch calls and seeing what I got from the browser. This would simply be a fetch call, followed by a string that resembled a URL (containing those select and filter statements).  The next method was more verbose, but had the ability to make all 4 CRUD calls. This took the form of a payload, as well as some kind of call to a certain entity within the service (through a URL, without select and filter statements). The payload contained the select and filters I needed, through a Javascript object, which allowed for much more control over the filters as this also allowed for group filters and nested 'And'/'Or' statements on these filters. Ultimately these methods would be useful for when we needed to mass update some dataset, or to check for special cases in an existing datasaet.
          </p>
          <p className='py-2 text-white'>
            -- Scheduling things -- <br></br>
            Although more rare, scheduling tasks (such as daily reports, daily acknowledgements, etc.) would usually manifest itself in the form of a plugin, using VB.NET. This usually involved making some API call to the server, manipulating that data, and then using some library to get the output we needed. In the example of daily reports, it would be something like manipulating the data for that day into an excel format, and sending that excel file to some person through another API call.
          </p>
          <p className='py-2 text-white'>
            -- Modifying source code -- <br></br>
            This was usually done when we had to change the way our application worked (in TypeScript). One task I worked on involved page routing, where initially our app was routing to the wrong pages in some niche scenarios. It essentially involved taking in the URL string through an object, making some comparisons after splicing it, and returning the right pages afterwards. Another task that I worked on involved cleaning up our existing code to be TypeScript 5.5 friendly, as certain ignore flags would not be allowed once updating to that version. I often found myself changing TypeScript objects to maps, as the way maps were initialised still followed the standards of TypeScript, yet still being flexible enough where it did not involve changing things outside the function scope.
            </p>
          <p className='py-2 text-white'>
            -- Dev workflow -- <br></br>
            Our dev workflow was decently simple. Whenever we had a task from a client, we (the dev team and project manager) would hold a teams call discussing the context as well as what needs to be done, before discussing how we want to allocate this task. If it was simple then usually the task could be wholely given to a single junior developer, otherwise the entire team will have a crack at it. If it was making an app page, then it was as simple as hitting save on our in house template editor, and changing some flags elsewhere on our database to have it deployed as a page. If it involved changing the source code, we would follow a more 'traditional' workflow, creating a separate branch on Azure Devops, committing and pushing regularly, before eventually making a Pull Request where the Lead Developer would have a code review and merge it with the main branch.
          </p>

        </div>
      </div>
    </article>
  )
}

export default ExperienceCardUSWS