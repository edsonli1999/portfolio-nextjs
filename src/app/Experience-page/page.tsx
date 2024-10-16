"use client"
import WorkExperience from '../components/Experience/WorkExperience';

const ExperiencePage: React.FC = () => {
  return (
    <div className='flex items-center justify-center p-4 pt-10 h-svh'>
      <section id='experience' className='snap-center'>
        {/* Pass the isSmallScreen state to the WorkExperience component */}
        <WorkExperience isSmallScreen={true} />
      </section>
    </div>
  );
};    
export default ExperiencePage;      