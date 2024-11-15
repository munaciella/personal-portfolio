import React from 'react';
import { TimelineItem } from './TimelineItem';
import timeline from '../data/timeline';
import { Title } from './Title';

export const Timeline: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center my-20 p-5">
      <div className="w-full md:w-7/12">
        <Title>Timeline</Title>
        {timeline.map((item, index) => (
          <TimelineItem
            key={index}
            year={item.year}
            title={item.title}
            duration={item.duration}
            details={item.details}
          />
        ))}
      </div>
    </div>
  );
};