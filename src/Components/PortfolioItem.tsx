import React from 'react';

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
    <div>
      <img
        src={imgUrl}
        alt="portfolio"
        className="w-full h-36 md:h-48 object-cover cursor-pointer"
      />
      <div className="w-full p-4">
        <h3 className='text-lg md:text-xl mb-2 md:mb-3 font-semibold'>{title}</h3>
        <p>
          {stack.map((index, item) => (
            <span key={index}>{item}</span>
          ))}
        </p>
      </div>
      <a href={link} target="_blank" rel="noopener noreferrer">
        Link
      </a>
    </div>
  );
};
