import '../styles/Sidebar.scss';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import profilePic from '../assets/profile-pick.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

const Sidebar = () => {
    const copyEmail = () => {
        navigator.clipboard.writeText('patrik.martinec1@gmail.com');
        toast.success('Email copied!', {
            position: 'top-center',
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
    };

    return (
        <div className="sidebar">
            <ToastContainer /> {/* Toast container for notifications */}
            <div className="profile-image-container">
                <img
                    src={profilePic}
                    alt="Patrik Martinec - Web Developer and UI/UX Designer"
                    className="profile-image"
                />
            </div>
            <div className="spacer"></div>
            <h1 className="name">Patrik Martinec</h1>
            <button className="work-with-me-btn">Work with me</button>
            <div className="info-section">
                <div className="info-item">
                    <FontAwesomeIcon
                        icon={faMapMarkerAlt}
                        className="info-icon"
                    />
                    <span className="info-text">Slovenia, Maribor</span>
                </div>

                <div
                    className="info-item email-item"
                    onClick={copyEmail}
                    onKeyDown={(e) => e.key === 'Enter' && copyEmail()}
                    tabIndex="0"
                    role="button"
                    aria-label="Copy email address to clipboard"
                >
                    <FontAwesomeIcon icon={faEnvelope} className="info-icon" />
                    <span className="info-text">
                        patrik.martinec1@gmail.com
                    </span>
                </div>
            </div>
            <hr className="divider" />
            <div className="social-links">
                <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                >
                    <FaGithub className="social-icon" />
                </a>
                <a
                    href="https://linkedin.com/in/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                >
                    <FaLinkedin className="social-icon" />
                </a>
                <a
                    href="https://twitter.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                >
                    <FaTwitter className="social-icon" />
                </a>
                <a
                    href="https://youtube.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                >
                    <FaYoutube className="social-icon" />
                </a>
            </div>
        </div>
    );
};

export default Sidebar;
