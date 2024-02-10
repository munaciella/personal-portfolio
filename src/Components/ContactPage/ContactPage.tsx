import React from 'react';
import {GMail} from '../GMail/GMail';
import './ContactPage.css'

export const ContactPage: React.FC = () => {
  return (
    <div className='contactpage-container'>
      <GMail email="francesco.vurchio82@gmail.com" />
    </div>
  );
};