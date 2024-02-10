import { FaEnvelope } from 'react-icons/fa';
import './GMail.css';

export const GMail: React.FC<{ email: string }> = ({ email }) => {
  const handleClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <div className="gmail-container">
      <FaEnvelope
        onClick={handleClick}
        color="black"
        size={25}
        style={{ cursor: 'pointer' }}
        title='Email me'
        className='email-icon'
      />
    </div>
  );
};
