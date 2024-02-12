import { FaLinkedin } from 'react-icons/fa';
import './LinkedIn.css';

const LinkedIn: React.FC = () => {
  return (
    <div className="linkedin-icon-container fixed top-16 right-5">
      <a
        href="https://www.linkedin.com/in/francesco-vurchio/"
        target="_blank"
        rel='noopener noreferrer' className="text-black transition-colors duration-300 relative"
      >
        <FaLinkedin size={35} className="hover:text-gray-500" />
      </a>
    </div>
  );
};

export default LinkedIn;
