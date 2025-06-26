import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import HomeHero from './components/HomeHero';
import AboutMe from './components/AboutMe';
import './styles/App.scss';

function App() {
    const [activeSection, setActiveSection] = useState('home');

    const renderContent = () => {
        switch (activeSection) {
            case 'home':
                return <HomeHero />;
            case 'projects':
                return (
                    <div className="hero-content">
                        <h1>My Projects</h1>
                    </div>
                );
            case 'about':
                return <AboutMe />;
            default:
                return null;
        }
    };

    return (
        <div className="app-container">
            <div className="sidebar-container">
                <Sidebar />
            </div>
            <div className="main-content">
                <Navbar
                    activeSection={activeSection}
                    setActiveSection={setActiveSection}
                />
                <div className="divider-horizontal"></div>
                <main className="content">{renderContent()}</main>
            </div>
        </div>
    );
}

export default App;
