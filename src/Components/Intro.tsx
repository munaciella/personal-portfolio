import React from 'react';

export const Intro: React.FC = () => {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-40 pb-6">
      <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold sm:text-2xl sm:mb-2">
        Francesco's Portfolio
      </h1>
      <p className="text-base md:text-xl mb-3 font-medium">Junior Software Engineer & Web Developer</p>
      <p className='text-sm max-w-xl mb-6 font-bold'>Bio</p>
    </div>
  );
};
