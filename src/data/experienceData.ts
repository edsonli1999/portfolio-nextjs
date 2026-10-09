// Array of experience data
export const experienceData = [
  // IBM
  {
    companyName: 'IBM',
    companyUrl: 'https://www.ibm.com/consulting',
    companyIcon: 'https://media.licdn.com/dms/image/v2/D560BAQGiz5ecgpCtkA/company-logo_400_400/company-logo_400_400/0/1688684715866/ibm_logo?e=1793232000&v=beta&t=jJSjBu2tGbKPlQgySoDHtFCql-GGdVMTyOVhu8iDG_M',
    position: 'Tech Consultant | Associate Infrastructure Specialist',
    techStack: [
      'https://upload.wikimedia.org/wikipedia/commons/d/d8/Red_Hat_logo.svg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original',
      'https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original',
      'https://www.logo.wine/a/logo/Amazon_Web_Services/Amazon_Web_Services-Logo.wine.svg',
      'https://upload.wikimedia.org/wikipedia/commons/4/4b/Bash_Logo_Colored.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original',
      'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original',
    ],
    tenure: 'Jan 2026 - Present',
    sections: [
      {
        subtitle: 'DSO Engineer · Jul 2026 – Present',
        points: [
          "Embedded in at a client's (Singapore Government Defence Tech Company) DevSecOps team, delivering a secure data-sharing platform that is nearing go-live.",
          'Deployed IBM API Connect on Red Hat OpenShift across 3 air-gapped environments, applying each component at the YAML level: namespaces, network policies, operator subscriptions, image mirror config and subsystem custom resources.',
          'Organised the deployment YAMLs into a phased directory structure and wrote a Bash script for each phase, turning an ad hoc process into a repeatable, documented one.',
          'Documented the full deployment, including the manual UI steps needed to connect the API Connect subsystems.',
          'Scanned container images with Trivy before they went into the air-gapped environment, and passed the reports on for vulnerability review.',
          'Applied AWS CloudFormation change sets to infrastructure stacks, and am currently tightening network access controls as part of security hardening.',
        ],
      },
      {
        subtitle: 'Ad hoc engagements · Jan – Jun 2026',
        points: [
          'Supported short engagements for clients in the healthcare and infrastructure sectors through Python scripting and technical documentation.',
          "Learned to pick up project context quickly and turn large, messy contexts into clear, structured documentation.",
        ],
      },
    ],
    description: [
      'Skills: Platform (Red Hat OpenShift, Kubernetes), IBM (API Connect, Software Hub), AWS (CloudFormation, Elastic Load Balancing, Route 53), Scripting (Bash, Python), Security (Trivy)',
    ],
    summaryNotes: [
      "I joined IBM Consulting in Singapore in late January 2026. My first few months were a mix of short ad hoc pieces of work: some Python scripting, and a lot of documentation. The biggest skill I picked up was learning a project's context quickly, and turning large, messy contexts into clear, structured documents.",
      "In July I was onboarded onto my current project as a DevSecOps engineer. In practice it's closer to being a forward deployed engineer at the infrastructure level. The first few weeks were spent learning how to bring our COTS products into an air-gapped environment: downloading them, scanning the images with Trivy, and getting them ready to transfer across.",
      "From there I moved onto OpenShift, deploying IBM API Connect. Its installation is quite barebones, so every resource is applied individually at the YAML level. The earlier deployments had been done under a lot of time pressure, so while shadowing one I organised the YAMLs into phases and documented everything, including a few manual UI steps that aren't obvious. I also wrote Bash scripts for each phase. Honestly, they're as much documentation as automation, and they mostly exist to make my own life easier.",
      "The part that has stuck with me most came during security hardening. Our first attempt at restricting network access broke the application, because of a certificate it didn't recognise. Working out why meant tracing how our hostnames were resolved and which load balancer each request actually went through. That's when networking and certificates stopped being abstract concepts I had no interest in. I still don't fully understand them, but watching them change in real time has genuinely sparked an interest.",
      "Next on my list is the AWS Solutions Architect Associate certification, once this project wraps up.",
    ],
  },
  // Girraphic
  // {
  //   companyName: 'Girraphic',
  //   companyUrl: 'https://girraphic.com',
  //   companyIcon: 'https://media.licdn.com/dms/image/v2/C560BAQGzWA0j1CcLVA/company-logo_200_200/company-logo_200_200/0/1671634988887/girraphic_logo?e=1747267200&v=beta&t=AJ55EVKV6WrptTAjSVw8D4FlMrVNI9rJKKHPE4sa63U',
  //   position: 'Junior Software Developer',
  //   techStack: [
  //     'https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png',
  //     'https://banner2.cleanpng.com/20180831/iua/kisspng-c-programming-language-logo-microsoft-visual-stud-atlas-portfolio-1713945971245.webp',
  //     'https://cdn.iconscout.com/icon/free/png-512/free-typescript-1-1175078.png?f=webp&w=256',
  //     'https://cdn.iconscout.com/icon/free/png-512/free-javascript-1-225993.png?f=webp&w=256',
  //     'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/microsoft-dot-net-icon.png',
  //     'https://i18nexus.com/_next/static/media/nextjs.e54be70c.svg',
  //     'https://external-preview.redd.it/-YYoQ4Dt0Vnf3MebCZLt4qMD0uPlT9gtEyo1jutJMco.jpg?width=1080&crop=smart&auto=webp&s=b5524ffc9aa1d3eb273427961dd78f65038a8e3f',
      
  //   ],
  //   tenure: 'Jan 2025 - Present',
  //   description: [
  //     'Developing software to streamline workflows for Graphic Operators during live sports broadcasting events. My work focuses on creating smooth, user-friendly UI/UX experiences, ensuring graphical overlays display accurate athlete information, and maintaining a bug-free application.',
  //     'Skills: Languages (Python, C#, TypeScript), Frameworks (.NET, Reactjs, Nextjs), Libraries (Raylib, Tkinter), Others (VizRt, Sockets)',
  //   ],
  // },
  // Circula
  {
    companyName: 'Circula',
    companyUrl: 'https://www.circula.life',
    companyIcon: 'https://media.licdn.com/dms/image/v2/D560BAQGoCfUzW7eWzw/company-logo_200_200/company-logo_200_200/0/1727828754030/circulaco_logo?e=1754524800&v=beta&t=o41vUDndQFqvi2jNJ9robEafpOiSSjgB9AM_POEt66E',
    position: 'Founding Web Developer (Front-end, DevOps, QA/Testing)',
    techStack: [
      'https://i18nexus.com/_next/static/media/nextjs.e54be70c.svg',
      'https://cdn.iconscout.com/icon/free/png-512/free-typescript-1-1175078.png?f=webp&w=256',
      'https://cdn.iconscout.com/icon/free/png-512/free-javascript-1-225993.png?f=webp&w=256',
      'https://cdn.iconscout.com/icon/free/png-512/free-firebase-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-brand-vol-3-pack-logos-icons-2944871.png?f=webp&w=256',
      'https://cdn.iconscout.com/icon/free/png-512/free-kubernets-logo-icon-download-in-svg-png-gif-file-formats--company-brand-world-logos-vol-14-pack-icons-283489.png?f=webp&w=256',
      'https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/2/playwright-y50bnthygb3rvsppvkm9e.png/playwright-q55xzpenhgjsodksybst.png?_a=DATAdtAAZAA0',
      'https://avatars.githubusercontent.com/u/103283236?s=200&v=4'
    ],
    tenure: 'Jul 2024 - Present',
    description: [
      'Landing page: https://www.circula.life',
      'LinkedIn: https://www.linkedin.com/company/circulalife',
      'Leading the development of an event-discovery web application for university students.',
      'Solely responsible for building the front-end in its initial stages, using Next.js app router, TypeScript, and Tailwind CSS.',
      'Expanded scope to backend development, contributing new API endpoints in the existing Python FastAPI backend.',
      'Implemented Jest unit tests and Playwright E2E tests to reduce regressions and ensure long-term reliability.',
      'Improved internal front-end workflows by building tools like a “devmode” feature, enabling development even when the backend server is down.',
      'Skills: Web Development (Next JS, TypeScript), FastAPI (Python), Testing (Jest, Playwright), DevOps (DX)',
    ],
    summaryNotes: [
      "I was first approached by Mia, the founder, whilst doing some of my programming work at the bouldering gym",
      "When she asked if I wanted to help out with her team, I immediately said yes. I have always wanted to use my programming skills for a cause that is personal and genuine to me. The purpose of this app and company aligned with my goals, and as such I joined without hesitation.",
      "I quickly found out that I was pretty much the sole front-end developer, to which I took on the mantle without hesitation.",
      "Once I properly wrapped my head around our use case, I proposed a tech stack that would fit the goals of our application, with technologies that I had some familiarity with.",
      "I consulted with our back-end developer what his plans were for the back-end, and made sure that my proposed front-end (NextJS), could incorporate his vision as well.",
      "The starting process wasn't easy. I often found myself stuck in analysis paralysis at times, not wanting to head in the wrong direction. However, once I got the ball rolling, things were much easier.",
      "I utilised various external resources to build the front-end, and consulted with GPT-4 on the best course of action on technologies to implement.",
      "Once I finished building the state management component, things were much more streamlined from then on. We have since managed to secure a spot as an industry partner for a UniMelb masters subject, which essentially saw us taking on a group of software developer students as our interns.",
      "Taking on a pseudo managerial position was quite interesting, as I saw myself being faced with questions that required me to quickly identify the root cause of.",
      "One particular instance was when I was told our external call to a Google API seemed to not work suddenly. I was given little information, and I had to get the student to contact me, asking them context questions to identify the root cause. Ultimately, we found that our Google Cloud Project hadn't enabled `Places API`, which was strange since this was working prior even without this API enabled.",
      "One of the biggest lessons I have learned so far is working with different coding styles. Being flexible in different ways of coding is key, as I needed to understand their implementations in order to give proper advice and thoughts.",
      "Another lesson is in managing external expectations, particularly with parties that don't have much developing experience. I needed to explain things in ways that were understandable for them, highlighting why certain features and app pages may take a certain time frame to implement.",
      "Recently, I had the pleasure of representing the company (alongside other members) at a networking event. It was inspiring to connect with so many other passionate groups of people."
    ],
  },
  // DAT
  {
    companyName: 'Data Annotation Tech',
    companyUrl: 'https://www.dataannotation.tech/about?',
    companyIcon: 'dataannotationtech_logo.jpeg',
    position: 'Software Developer - AI Trainer',
    techStack: [
      'https://w7.pngwing.com/pngs/447/294/png-transparent-python-javascript-logo-clojure-python-logo-blue-angle-text-thumbnail.png',
      'https://cdn.iconscout.com/icon/free/png-512/free-typescript-1-1175078.png?f=webp&w=256',
      'https://cdn.iconscout.com/icon/free/png-512/free-javascript-1-225993.png?f=webp&w=256',
      'https://cdn.iconscout.com/icon/premium/png-512-thumb/html-19-116634.png?f=webp&w=256',
      'https://cdn.iconscout.com/icon/premium/png-512-thumb/css-22-116632.png?f=webp&w=256'
    ],
    tenure: 'Apr 2024 - Present',
    description: [
      'Ongoing casual role',
      'Collaborated with high-profile clients, contributing to the development and enhancement of widely-used AI technologies.',
      'Trained AI LLMs in various aspects, with a heavy emphasis on coding-related tasks.',
      'Skills: Web Development (Python, React JS, TS, HTML+CSS), Scripting (Python), Data Analysis (Python Pandas, Matplotlib), Others (Java, C, Rust)',
    ],
    summaryNotes: [
      "Due to signing an NDA, I can't give too detailed of a summary unfortunately.",
      'In summary, I am training AI models by testing responses given by various LLMs (language learning models), mostly relating to code. These could be anything from simple python `hello world` programs, to slightly less-simple react and nextjs applications.',
      'As such, I am constantly refreshing my memory on these technologies, as well as consistently learning new ones.',
      'Being fully remote and able to set my own hours, I’m incredibly grateful for the opportunity to explore my passions and hobbies in my spare time. These include regularly contributing to a startup I’m involved in (Circula) and upskilling through study towards my AWS Associate Solutions Architect certification.'
    ],
  },
  // Universal Software Solutions
  {
    companyName: 'Universal Software Solutions',
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
      'Skills: Full stack (JS, TS, HTML, CSS), Rest API Calls (JS, VB.NET), dev workflow (Azure Devops, Git)',
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
    companyName: 'Toppan Ecquaria',
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
      'Skills: Data cleaning (excel, python pandas), scripting (python selenium), database modelling (draw.io, AWS), admin (microsoft office)',
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
  // End
];