import React from 'react';
import { useTheme } from '../ThemeContext/ThemeContext';

const Content: React.FC = () => {
    const { theme } = useTheme();
  
    return (
      <div style={{ background: theme === 'dark' ? '#333' : '#f4f4f4', color: theme === 'dark' ? '#fff' : '#333' }}>
        <h2>Content</h2>
        <p>This is the content area.</p>
      </div>
    );
  };
  
  export default Content;