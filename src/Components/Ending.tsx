import React from 'react';

export const Ending: React.FC = () => {

  return (
    <div className="relative bottom-0 left-0 p-3 ml-2 m flex items-center py-4">
      <p className="font-semibold text-xl">
        Made with <span className="text-red-500">♡</span> by
      </p>
      <img
        className="w-8 h-auto ml-2"
        src="/assets/FranIcon.png"
        alt="Francesco's Image"
      />
    </div>
  );
};