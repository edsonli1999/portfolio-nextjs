"use client"
import Projects_1 from "../components/Projects/Projects_1";

const ExperiencePage: React.FC = () => {
  return (
    <div className='flex items-center justify-center p-4 pt-10 h-svh'>
      <section id='experience' className='snap-center'>
        {/* Pass the isSmallScreen state to the WorkExperience component */}
        <Projects_1 isSmallScreen={true} />
      </section>
    </div>
  );
};    
export default ExperiencePage;      