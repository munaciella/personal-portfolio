import React from 'react';

export const Intro: React.FC = () => {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-40 pb-6">
      <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold sm:text-2xl sm:mb-2 mt-2">
        Francesco Vurchio
      </h1>
      <p className="text-lg md:text-xl mb-3 mt-2 font-medium">Junior Software Engineer & Web Developer</p>
      <p className='text-sm max-w-xl mb-6 font-bold'>
        I'm a full-stack developer building my version 
        <br />
        of the digital world one step at a time.
      </p>
      <div className='relative'>
      <div className='flex justify-center pb-2'>
      <a href='/assets/Francesco Vurchio-2024-CV.pdf' target="_blank" rel="noopener noreferrer" className='text-center flex items-center border-1 cursor-pointer p-1 px-5 mt-2 rounded-md py-2 w-max text-base font-medium text-white bg-gradient-to-r from-green-300 to-green-500 drop-shadow-md hover:from-green-400 hover:to-green-600'>
        Resume
      </a>
    </div>
    </div>
    </div>
  );
};
