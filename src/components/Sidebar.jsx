import '../styles/Sidebar.scss';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import profilePic from '../assets/profile-pick.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

const Sidebar = ({ setActiveSection }) => {
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

    const handleWorkWithMe = () => {
        setActiveSection('contact');
    };

    return (
        <section className="sidebar">
            <ToastContainer />
            <header>
                <figure className="profile-image-container">
                    <img
                        src={profilePic}
                        alt="Patrik Martinec - Web Developer and UI/UX Designer"
                        className="profile-image"
                    />
                </figure>
                <div className="spacer"></div>
                <h3 className="name">Patrik Martinec</h3>
            </header>
            <div className="sidebar-buttons">
                <button
                    className="sidebar-btn work-btn"
                    onClick={handleWorkWithMe}
                    aria-label="Contact me about work opportunities"
                >
                    Work with me
                </button>
                <button className="sidebar-btn cv-btn">View CV</button>
            </div>
            <section className="info-section">
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
            </section>
            <hr className="divider" />
            <footer className="social-links">
                <a
                    href="https://github.com/patrikmartinec23"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                >
                    <FaGithub className="social-icon" />
                </a>
                <a
                    href="https://www.linkedin.com/in/patrik-martinec-244992323/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                >
                    <FaLinkedin className="social-icon" />
                </a>
                <a
                    href="https://x.com/PatMartinec"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                >
                    <FaTwitter className="social-icon" />
                </a>
                <a
                    href="https://www.youtube.com/@patrikmartinec6149"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                >
                    <FaYoutube className="social-icon" />
                </a>
            </footer>
        </section>
    );
};

export default Sidebar;
