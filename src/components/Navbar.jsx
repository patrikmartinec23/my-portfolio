import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHouseChimney,
    faPenRuler,
    faUserAstronaut,
} from '@fortawesome/free-solid-svg-icons';
import '../styles/Navbar.scss';

const Navbar = ({ activeSection, setActiveSection }) => {
    const navItems = [
        {
            id: 'home',
            label: 'Overview',
            icon: <FontAwesomeIcon icon={faHouseChimney} />,
        },
        {
            id: 'projects',
            label: 'Projects',
            icon: <FontAwesomeIcon icon={faPenRuler} />,
        },
        {
            id: 'about',
            label: 'About Me',
            icon: <FontAwesomeIcon icon={faUserAstronaut} />,
        },
    ];

    return (
        <nav className="navbar">
            <div className="navbar-container">
                {navItems.map((item) => (
                    <button
                        key={item.id}
                        className={`nav-item ${
                            activeSection === item.id ? 'active' : ''
                        }`}
                        onClick={() => setActiveSection(item.id)}
                    >
                        <span className="nav-icon">{item.icon}</span>
                        <span className="nav-label">{item.label}</span>
                    </button>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
