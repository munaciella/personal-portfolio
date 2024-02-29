import React from 'react';

interface PortfolioItemProps {
  title: string;
  imgUrl: string;
  stack: React.ReactNode[];
  link: string;
}

export const PortfolioItem: React.FC<PortfolioItemProps> = ({
  title,
  imgUrl,
  stack,
  link,
}) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="border-2 border-stone-900 dark:border-white rounded-md overflow-hidden p-2"
    >
      <img
        src={imgUrl}
        alt="portfolio"
        className="w-full h-56 xl:h-80 md:h-60 object-cover cursor-pointer"
        style={{ objectFit: 'cover', width: '100%' }}
      />
      <div className="w-full p-4">
        <h3 className="text-lg md:text-xl dark:text-white mb-2 md:mb-3 font-semibold">
          {title}
        </h3>
        <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
          {stack.map((item, index) => (
            <span
              key={index}
              className="inline-block px-1 pt-2 pb-4 py-6 text-3xl"
            >
              {item}
            </span>
          ))}
        </p>
      </div>
    </a>
  );
};

// return (
//   <div className='border-2 border-stone-900 dark:border-white rounded-md overflow-hidden'>
//     <img
//       src={imgUrl}
//       alt="portfolio"
//       className="w-full h-56 xl:h-100 md:h-80 object-cover cursor-pointer"
//     />
//     <div className="w-full p-4">
//       <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">
//         {title}
//       </h3>
//       <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
//         {stack.map((item, index) => (
//           <span
//             key={index}
//             className="inline-block px-1 pt-2 pb-4 py-6 text-3xl"
//           >
//             {item}
//           </span>
//         ))}
//       </p>
//     </div>
//     <div className='relative'>
//     <div className='flex justify-center pb-2'>
//     <a href={link} target="_blank" rel="noopener noreferrer" className='text-center'>
//       <button
//       className='text-center inline-block px-4 py-2 w-max text-base font-medium text-white rounded-md cursor-pointer bg-gradient-to-r from-green-300 to-green-500 drop-shadow-md hover:from-green-400 hover:to-green-600'>
//       Project Link
//       </button>
//     </a>
//   </div>
//   </div>
//   </div>
// );
// };
