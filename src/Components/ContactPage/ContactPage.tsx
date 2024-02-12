import React from 'react';
import { GMail } from '../GMail/GMail';

export const ContactPage: React.FC = () => {
  return (
    <div className="contactpage-container fixed top-28 right-6 z-50">
      <GMail email="francesco.vurchio82@gmail.com" />
    </div>
  );
};
