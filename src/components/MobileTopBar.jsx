import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

const MobileTopBar = ({ setActiveSection }) => {
    const copyEmail = () => {
        navigator.clipboard.writeText('patrik.martinec1@gmail.com');
    };

    return (
        <div className="mobile-topbar">
            <div className="mobile-row">
                <div className="mobile-info">
                    <div className="mobile-name-row">
                        <div className="mobile-name">Patrik Martinec</div>
                        <button
                            className="mobile-work-btn"
                            onClick={() =>
                                setActiveSection && setActiveSection('contact')
                            }
                        >
                            Work with me
                        </button>
                    </div>
                    <div className="mobile-location">
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                        <span>Slovenia</span>
                    </div>
                    <div
                        className="mobile-email"
                        onClick={copyEmail}
                        tabIndex={0}
                        role="button"
                        aria-label="Copy email address"
                    >
                        <FontAwesomeIcon icon={faEnvelope} />
                        <span>patrik.martinec1@gmail.com</span>
                    </div>
                </div>
            </div>
            <hr className="mobile-divider" />
            <div className="mobile-socials">
                <a
                    href="https://github.com/patrikmartinec23"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaGithub />
                </a>
                <a
                    href="https://www.linkedin.com/in/patrik-martinec-244992323/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaLinkedin />
                </a>
                <a
                    href="https://x.com/PatMartinec"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaTwitter />
                </a>
                <a
                    href="https://www.youtube.com/@patrikmartinec6149"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaYoutube />
                </a>
            </div>
        </div>
    );
};

export default MobileTopBar;
