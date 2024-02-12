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
        <h3>{title}</h3>
        <p>
          {stack.map((item) => (
            <span>{item}</span>
          ))}
        </p>
      </div>
      <a href={link} target="_blank" rel="noopener noreferrer">
        Link
      </a>
    </div>
  );
};
