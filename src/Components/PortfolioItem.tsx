import React from 'react';
import { FaCss3, FaJsSquare } from "react-icons/fa";

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
        className="w-full h-36 md:h-48 object-cover cursor-pointer"
      />
      <div className="w-full p-4">
        <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">
          {title}
        </h3>
        <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
          {stack.map((item) => (
            <span
              key={item}
              className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 rounded-xl"
            >
              {item}
            </span>
          ))}
        </p>
      </div>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <button className='flex flex-wrap flex-row items-center border-1 border-green-400 rounded-md cursor-pointer bg-green-500 hover:text-green-200 justify-center align-middle p-1'> Project Link</button>
      </a>
    </div>
  );
};
