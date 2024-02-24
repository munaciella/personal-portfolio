import React from 'react';
import portfolio from '../data/portfolio';
import { PortfolioItem } from './PortfolioItem';


export const Portfolio: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center ml-10 mr-10 mb-40 mt-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {portfolio.map((project) => (
          <PortfolioItem
            imgUrl={project.imgUrl}
            title={project.title}
            stack={project.stack}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};
