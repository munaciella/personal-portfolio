import { FaGithub } from 'react-icons/fa';
import './GitHub.css';

const GitHub: React.FC = () => {
  return (
    <div className="github-icon-container fixed top-5 right-5 z-50">
      <a
        href="https://github.com/munaciella"
        target="_blank"
        rel="noopener noreferrer"
        className="text-black transition-colors duration-300 relative"
      >
        <FaGithub size={35} className="hover:text-gray-500" />
      </a>
    </div>
  );
};

export default GitHub;
