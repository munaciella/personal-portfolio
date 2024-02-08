import {FaGithub} from 'react-icons/fa';
import './GitHub.css'

const GitHub: React.FC = () => {

    return (
        <div className='github-icon-container'>
        <a href='https://github.com/munaciella' target='_blank' rel='noopener noreferrer'>
            <FaGithub size={30} />
        </a>
        </div>
    )
}

export default GitHub