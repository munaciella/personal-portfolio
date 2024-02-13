import { FaSquareEnvelope } from 'react-icons/fa6';

// export const GMail: React.FC<{ email: string }> = ({ email }) => {
//   const handleClick = () => {
//     window.location.href = `mailto:${email}`;
//   };

//   return (
//     <div>
//       <FaEnvelope
//         onClick={handleClick}
//         color="black"
//         size={30}
//         style={{ cursor: 'pointer' }}
//       />
//     </div>
//   );
// };

export const GMail: React.FC = () => {
  return (
    <div className="gmail-icon-container absolute top-28 right-5 z-50">
      <a
        href="mailto:francesco.vurchio82@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaSquareEnvelope size={36} className="hover:text-gray-500" />
      </a>
    </div>
  );
};