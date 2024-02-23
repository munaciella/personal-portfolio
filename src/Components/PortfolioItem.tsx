import React from 'react';
//import { FaCss3, FaJsSquare } from "react-icons/fa";

interface PortfolioItemProps {
  title: string;
  imgUrl: string;
  stack: string[];
  link: string;
}

export const PortfolioItem: React.FC<PortfolioItemProps> = ({
  title,
  imgUrl,
  stack,
  link,
}) => {
  return (
    <div className='border-2 border-stone-900 rounded-md overflow-hidden'>
      <img
        src={imgUrl}
        alt="portfolio"
        className="w-full h-56 xl:h-100 md:h-80 object-cover cursor-pointer"
      />
      <div className="w-full p-4">
        <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">
          {title}
        </h3>
        <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
          {stack.map((item) => (
            <span
              key={item}
              className="inline-block px-1 pt-2 pb-4 py-6 text-3xl"
            >
              {item}
            </span>
          ))}
        </p>
      </div>
      <div className='relative'>
      <div className='flex justify-center pb-2'>
      <a href={link} target="_blank" rel="noopener noreferrer" className='text-center'>
        <button 
        className='text-center inline-block px-4 py-2 w-max text-base font-medium text-white rounded-md cursor-pointer bg-gradient-to-r from-green-300 to-green-500 drop-shadow-md hover:from-green-400 hover:to-green-600'> 
        Project Link
        </button>
      </a>
    </div>
    </div>
    </div>
  );
};
 
            // className='text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-yellow-300 to-orange-600 drop-shadow-md hover:from-yellow-600 hover:to-orange-600'