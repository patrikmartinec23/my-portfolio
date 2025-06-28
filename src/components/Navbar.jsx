import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCompass,
    faPenRuler,
    faUserAstronaut,
} from '@fortawesome/free-solid-svg-icons';
import '../styles/navbar.scss';

const Navbar = ({ activeSection, setActiveSection }) => {
    const [indicatorStyle, setIndicatorStyle] = useState({});
    const navRefs = useRef({});

    const navItems = [
        {
            id: 'home',
            label: 'Overview',
            icon: <FontAwesomeIcon icon={faCompass} />,
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

    const handleSectionChange = (sectionId) => {
        setActiveSection(sectionId);
        // Allow DOM update to process
        setTimeout(() => {
            document.getElementById('main-content').focus();
        }, 100);
    };

    // Update indicator position whenever active section changes or on resize
    const updateIndicatorPosition = () => {
        // If activeSection is not in navItems (like 'contact'), hide the indicator
        const isActiveInNav = navItems.some(
            (item) => item.id === activeSection
        );

        if (!isActiveInNav) {
            // Hide the indicator when on contact page
            setIndicatorStyle({
                opacity: 0,
                width: 0,
            });
            return;
        }

        if (navRefs.current[activeSection]) {
            const activeItem = navRefs.current[activeSection];
            setIndicatorStyle({
                opacity: 1,
                left: `${activeItem.offsetLeft}px`,
                width: `${activeItem.offsetWidth}px`,
            });
        }
    };

    useEffect(() => {
        // Update on section change
        updateIndicatorPosition();

        // Add resize listener
        window.addEventListener('resize', updateIndicatorPosition);

        // Cleanup
        return () => {
            window.removeEventListener('resize', updateIndicatorPosition);
        };
    }, [activeSection]);

    return (
        <nav className="navbar" aria-label="Main navigation">
            <div className="navbar-container">
                {navItems.map((item) => (
                    <button
                        key={item.id}
                        ref={(el) => (navRefs.current[item.id] = el)}
                        className={`nav-item ${
                            activeSection === item.id ? 'active' : ''
                        }`}
                        onClick={() => handleSectionChange(item.id)}
                        aria-current={
                            activeSection === item.id ? 'page' : undefined
                        }
                    >
                        <span className="nav-icon">{item.icon}</span>
                        <span className="nav-label">{item.label}</span>
                    </button>
                ))}
                <div className="nav-indicator" style={indicatorStyle} />
            </div>
        </nav>
    );
};

export default Navbar;
