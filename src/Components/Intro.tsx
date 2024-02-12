import React from 'react';

export const Intro: React.FC = () => {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-40 pb-6">
      <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold sm:text-2xl sm:mb-2">
        Francesco's Portfolio
      </h1>
      <p className="text-base md:text-xl mb-3 font-medium">Junior Software Engineer & Web Developer</p>
      <p className='text-sm max-w-xl mb-6 font-bold'>A junior software developer with a passion for coding and a few months of experience under my belt. I recently completed a coding bootcamp where I learned the fundamentals of programming and gained hands-on experience working on personal projects. I'm proficient in JavaScript, Node.js, React.js, HTML and CSS to name a few, and I'm eager to continue learning and growing as a developer. I'm excited about the opportunity to contribute to a team and work on real-world projects. In my free time, I enjoy working on personal coding projects and participating in coding challenges. I'm a quick learner, a problem-solver, and a team player. I'm excited about the opportunity to bring my skills and enthusiasm to a junior software developer role.</p>
    </div>
  );
};
