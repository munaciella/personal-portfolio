import { FaEnvelope } from 'react-icons/fa';

export const GMail: React.FC<{ email: string }> = ({ email }) => {
  const handleClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <div>
      <FaEnvelope
        onClick={handleClick}
        color="black"
        size={30}
        style={{ cursor: 'pointer' }}
      />
    </div>
  );
};
