import {FaLinkedin} from 'react-icons/fa';
import './LinkedIn.css'

const LinkedIn: React.FC = () => {

    return (
        <div className='linkedin-icon-container'>
        <a href='https://www.linkedin.com/in/francesco-vurchio/' target='_blank' rel='noopener noreferrer'>
            <FaLinkedin size={30} />
        </a>
        </div>
    )
}

export default LinkedIn