import React from 'react';

export const Intro: React.FC = () => {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-40 pb-6">
      <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold sm:text-2xl sm:mb-2">
        Francesco Vurchio
      </h1>
      <p className="text-base md:text-xl mb-3 font-medium">Junior Software Engineer & Web Developer</p>
      <div className='relative'>
      <div className='flex justify-center pb-2'>
      <a href='/assets/Francesco Vurchio-2024-CV.pdf' target="_blank" rel="noopener noreferrer" className='text-center'>
        <button className='flex items-center border-1 border-green-400 rounded-md cursor-pointer bg-green-500 hover:text-green-200 p-1'> Project Link</button>
      </a>
    </div>
    </div>
    </div>
  );
};
