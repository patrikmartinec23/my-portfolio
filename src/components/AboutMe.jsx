import '../styles/about-me.scss';

const AboutMe = () => {
    return (
        <section className="hero-content">
            <article className="about-container">
                <header className="about-header">
                    <h2 className="about-title">
                        More <span className="color">About Me</span>
                    </h2>
                    <hr className="about-divider" />
                </header>

                <section className="about-content">
                    <ul className="about-list">
                        <li>
                            <p>
                                <span className="about-icon">🚀</span>Full Stack
                                Developer | UI / UX Designer
                            </p>
                        </li>
                        <li>
                            <p>
                                <span className="about-icon">👤</span>I Speak 3
                                Languages 🇬🇧 🇩🇪 🇸🇮
                            </p>
                        </li>
                        <li>
                            <p>
                                <span className="about-icon">🏎️</span>I Like
                                Watching Cars Drive Around in Circles
                            </p>
                        </li>
                        <li>
                            <p>
                                <span className="about-icon">🎓</span>Computer
                                Science and Informatics Student
                            </p>
                        </li>
                    </ul>
                </section>
            </article>
        </section>
    );
};

export default AboutMe;
