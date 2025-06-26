import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChevronLeft,
    faChevronRight,
    faExternalLinkAlt,
} from '@fortawesome/free-solid-svg-icons';
import '../styles/projects.scss';

const Projects = () => {
    const [currentProject, setCurrentProject] = useState(0);

    const projects = [
        {
            id: 1,
            title: 'Vera Website',
            description:
                'Bootstrap Business website that could easily be used to fit any business.',
            technologies: ['HTML5', 'CSS3'],
            image: '/cover1.jpg',
            demoUrl: 'https://your-demo-url.com',
            githubUrl: 'https://github.com/yourusername/project1',
        },
        {
            id: 2,
            title: 'E-Commerce Platform',
            description:
                'Full-stack e-commerce solution with React frontend and Node.js backend. Features include user authentication, payment processing, and admin dashboard.',
            technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
            image: '/api/placeholder/600/400', // Replace with actual project image
            demoUrl: 'https://your-demo-url.com',
            githubUrl: 'https://github.com/yourusername/project2',
        },
        {
            id: 3,
            title: 'Task Management App',
            description:
                'Modern task management application with drag-and-drop functionality, real-time updates, and team collaboration features.',
            technologies: ['React', 'Firebase', 'Material-UI', 'JavaScript'],
            image: '/api/placeholder/600/400', // Replace with actual project image
            demoUrl: 'https://your-demo-url.com',
            githubUrl: 'https://github.com/yourusername/project3',
        },
    ];

    const nextProject = () => {
        setCurrentProject((prev) => (prev + 1) % projects.length);
    };

    const prevProject = () => {
        setCurrentProject(
            (prev) => (prev - 1 + projects.length) % projects.length
        );
    };

    const openDemo = () => {
        window.open(projects[currentProject].demoUrl, '_blank');
    };

    return (
        <section className="hero-content">
            <article className="projects-container">
                <header className="projects-header">
                    <h2 className="projects-title">
                        Check Out My <span className="color">Work</span>
                    </h2>
                    <hr className="projects-divider" />
                </header>
                <section className="project-slideshow">
                    <button
                        className="arrow-left"
                        aria-label="Previous project"
                        onClick={prevProject}
                    >
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                    <article
                        className="project-card"
                        onClick={openDemo}
                        onKeyDown={(e) => e.key === 'Enter' && openDemo()}
                        role="button"
                        aria-label={`View ${projects[currentProject].title} project demo`}
                        tabIndex="0"
                    >
                        <div className="project-image-full">
                            <img
                                src={projects[currentProject].image}
                                alt={projects[currentProject].title}
                            />
                            <div className="project-overlay-full">
                                <div className="project-header-full">
                                    <div className="project-title-badge">
                                        {projects[currentProject].title}
                                    </div>
                                    <div className="project-link-badge">
                                        <FontAwesomeIcon
                                            icon={faExternalLinkAlt}
                                        />
                                    </div>
                                </div>
                                <div className="project-footer-full">
                                    <div className="project-description-badge">
                                        {projects[currentProject].description}
                                    </div>
                                    <div className="project-technologies-badges">
                                        {projects[
                                            currentProject
                                        ].technologies.map((tech, index) => (
                                            <span
                                                key={index}
                                                className="tech-badge-full"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                    <button
                        className="arrow-right"
                        aria-label="Next project"
                        onClick={nextProject}
                    >
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                </section>
            </article>
        </section>
    );
};

export default Projects;
