import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import HomeHero from './components/HomeHero';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import MobileTopBar from './components/MobileTopBar';
import './styles/app.scss';

function App() {
    const [activeSection, setActiveSection] = useState(() => {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('section') || 'home';
    });

    useEffect(() => {
        const url = new URL(window.location);
        if (activeSection === 'home') {
            url.searchParams.delete('section');
        } else {
            url.searchParams.set('section', activeSection);
        }
        window.history.replaceState({}, '', url);
    }, [activeSection]);

    const renderContent = () => {
        switch (activeSection) {
            case 'home':
                return <HomeHero />;
            case 'projects':
                return <Projects />;
            case 'about':
                return <AboutMe />;
            case 'contact':
                return <Contact />;
            default:
                return null;
        }
    };

    return (
        <div className="app-container">
            <a href="#main-content" className="skip-link">
                Skip to main content
            </a>
            <aside className="sidebar-container">
                <Sidebar setActiveSection={setActiveSection} />
            </aside>
            <div className="main-content">
                <header>
                    <Navbar
                        activeSection={activeSection}
                        setActiveSection={setActiveSection}
                    />
                </header>
                <div className="divider-horizontal"></div>

                <main id="main-content" className="content">
                    {renderContent()}
                </main>
                {/* Mobile top bar */}
                <div className="mobile-topbar-wrapper">
                    <MobileTopBar setActiveSection={setActiveSection} />
                </div>
            </div>
        </div>
    );
}

export default App;
