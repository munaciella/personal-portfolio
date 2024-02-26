import React from 'react';

export const Footer: React.FC = () => {
    return (
        <div className="relative bottom-0 right-0 py-5 ml-2 p-3 mt-0">
          <div className="flex items-center">
            <p className="text-sm opacity-50">
              &copy; {new Date().getFullYear()} Francesco Vurchio. All rights reserved.
            </p>
          </div>
        </div>
      );
//   return (
//     <div className="relative bottom-0 right-0" >
//     <div className="absolute p-3 ml-2 m flex items-center py-4">
//       <p className="text-sm mt-5 opacity-50">
//         &copy; {new Date().getFullYear()} Francesco Vurchio. All rights
//         reserved.
//       </p>
//     </div>
//     </div>
//   );
};
