"use client"
import Projects from "../components/Projects/Projects";
import { useRouter } from 'next/navigation';

const ProjectsPage: React.FC = () => {

  const router = useRouter();
  
  return (
    <div className='flex items-center justify-center p-4 pt-10 h-svh'>
      
      <section id='experience' className='snap-center hidden lg:flex flex-col items-center'>
        <p className="text-lg mb-4">This page is optimized for smaller screens. Please view on a mobile device or resize your browser.</p>
        <button 
          onClick={() => router.push('/')} 
          // className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          className="heroButton"
        >
          Go Back Home
        </button>
      </section>

      <section className='lg:hidden'>
        <Projects isSmallScreen={true} />
      </section>
    </div>
  );
};    
export default ProjectsPage;      