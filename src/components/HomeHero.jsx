import { useEffect, useRef } from 'react';
import {
    faReact,
    faJs,
    faNode,
    faPython,
    faBootstrap,
    faFigma,
    faGit,
    faGithub,
    faPhp,
    faCss3Alt,
    faJava,
} from '@fortawesome/free-brands-svg-icons';
import {
    faDatabase,
    faServer,
    faLeaf,
    faBolt,
    faFire,
} from '@fortawesome/free-solid-svg-icons';
import '../styles/home-hero.scss';

const techStack = [
    {
        id: 'react',
        icon: faReact,
        color: '#61DAFB',
        name: 'React',
    },
    {
        id: 'js',
        icon: faJs,
        color: '#F7DF1E',
        name: 'JS',
    },
    {
        id: 'css',
        icon: faCss3Alt,
        color: '#1572B6',
        name: 'CSS',
    },
    {
        id: 'bootstrap',
        icon: faBootstrap,
        color: '#7952B3',
        name: 'Bootstrap',
    },
    {
        id: 'tailwind',
        icon: faBolt,
        color: '#06B6D4',
        name: 'Tailwind',
    },
    {
        id: 'node',
        icon: faNode,
        color: '#339933',
        name: 'Node',
    },
    {
        id: 'express',
        icon: faServer,
        color: '#000000',
        name: 'Express',
    },
    {
        id: 'mongodb',
        icon: faLeaf, // Leaf icon for MongoDB (growth/nature)
        color: '#47A248',
        name: 'MongoDB',
    },
    {
        id: 'sql',
        icon: faDatabase, // Database icon for SQL
        color: '#4479A1',
        name: 'SQL',
    },
    {
        id: 'java',
        icon: faJava, // Java brand icon
        color: '#ED8B00',
        name: 'Java',
    },
    {
        id: 'python',
        icon: faPython,
        color: '#3776AB',
        name: 'Python',
    },
    {
        id: 'php',
        icon: faPhp,
        color: '#777BB4',
        name: 'PHP',
    },
    {
        id: 'cpp',
        icon: faDatabase,
        color: '#00599C',
        name: 'C++',
    },
    {
        id: 'firebase',
        icon: faFire,
        color: '#FFCA28',
        name: 'Firebase',
    },
    {
        id: 'figma',
        icon: faFigma,
        color: '#F24E1E',
        name: 'Figma',
    },
    {
        id: 'git',
        icon: faGit,
        color: '#F05032',
        name: 'Git',
    },
    {
        id: 'github',
        icon: faGithub,
        color: '#fff',
        name: 'GitHub',
    },
];

const HomeHero = () => {
    const canvasRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        const ctx = canvas.getContext('2d');

        // Set canvas to full container size
        canvas.width = container.offsetWidth;
        canvas.height = container.offsetHeight;

        // Simple boundary margins from the container edges
        const MARGIN = 5;
        const playArea = {
            left: MARGIN,
            right: canvas.width - MARGIN,
            top: MARGIN,
            bottom: canvas.height - MARGIN,
        };

        // Physics constants
        const GRAVITY = 0.4;
        const FRICTION = 0.98;
        const BOUNCE = 0.75;

        // Responsive ball sizing: smaller on small screens, larger on big screens
        const getBallRadius = () => {
            if (window.innerWidth >= 1600) {
                return 64; // Ultra-wide screens
            } else if (window.innerWidth >= 1280) {
                return 52; // Large screens
            } else if (window.innerWidth >= 850) {
                return 44; // Tablet
            } else if (window.innerWidth >= 600) {
                return 32; // Small tablets/large phones
            } else {
                return 28; // Small phones
            }
        };

        const BALL_RADIUS = getBallRadius();

        // Always show all balls, just smaller on mobile
        const visibleTech = techStack;

        // Create balls
        const balls = visibleTech.map((tech, index) => ({
            id: tech.id,
            x:
                MARGIN +
                BALL_RADIUS +
                Math.random() *
                    (playArea.right - playArea.left - BALL_RADIUS * 2),
            y:
                MARGIN +
                BALL_RADIUS +
                Math.random() * ((playArea.bottom - playArea.top) * 0.6),
            dx: (Math.random() - 0.5) * 4,
            dy: Math.random() * 2,
            radius: BALL_RADIUS,
            icon: tech.icon,
            color: tech.color,
            name: tech.name,
            mass: 1,
        }));

        const mouse = { x: null, y: null };

        const drawBall = (ball) => {
            // Draw ball background (black circle)
            ctx.beginPath();
            ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
            ctx.fillStyle = '#000000'; // Black background
            ctx.fill();

            // Draw colored border
            ctx.strokeStyle = ball.color;
            ctx.lineWidth = 3;
            ctx.stroke();
            ctx.closePath();

            // Draw Font Awesome icons for brands that have them, alternatives for others
            ctx.fillStyle = ball.color;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';

            // Check if this tech has a real Font Awesome brand icon
            const hasRealIcon = [
                'react',
                'js',
                'css',
                'bootstrap',
                'node',
                'java',
                'python',
                'php',
                'figma',
                'git',
                'github',
            ].includes(ball.id);

            if (hasRealIcon) {
                ctx.font = `${
                    ball.radius * 1.5
                }px "Font Awesome 6 Free", "Font Awesome 6 Brands"`;

                // Font Awesome unicode mappings for real icons
                let iconUnicode = '';
                switch (ball.id) {
                    case 'react':
                        iconUnicode = '\uf41b';
                        break; // React
                    case 'js':
                        iconUnicode = '\uf3b8';
                        break; // JavaScript
                    case 'css':
                        iconUnicode = '\uf38b';
                        break; // CSS3
                    case 'bootstrap':
                        iconUnicode = '\uf836';
                        break; // Bootstrap
                    case 'node':
                        iconUnicode = '\uf419';
                        break; // Node.js
                    case 'java':
                        iconUnicode = '\uf4e4';
                        break; // Java
                    case 'python':
                        iconUnicode = '\uf3e2';
                        break; // Python
                    case 'php':
                        iconUnicode = '\uf457';
                        break; // PHP
                    case 'figma':
                        iconUnicode = '\uf799';
                        break; // Figma
                    case 'git':
                        iconUnicode = '\uf841';
                        break; // Git
                    case 'github':
                        iconUnicode = '\uf09b';
                        break; // GitHub
                }

                ctx.fillText(iconUnicode, ball.x, ball.y);
            } else {
                // Use alternative symbols for techs without Font Awesome brand icons
                ctx.font = `bold ${ball.radius * 0.6}px Arial`;

                let symbol = '';
                switch (ball.id) {
                    case 'tailwind':
                        symbol = '⚡';
                        break; // Lightning for TailwindCSS
                    case 'express':
                        symbol = '🚀';
                        break; // Rocket for Express
                    case 'mongodb':
                        symbol = '🍃';
                        break; // Leaf for MongoDB
                    case 'sql':
                        symbol = '🗄️';
                        break; // File cabinet for SQL
                    case 'cpp':
                        symbol = 'C++';
                        break; // C++ text
                    case 'firebase':
                        symbol = '🔥';
                        break; // Fire emoji for Firebase
                    default:
                        symbol = ball.name.charAt(0);
                }

                ctx.fillText(symbol, ball.x, ball.y);
            }
        };

        const distance = (ball1, ball2) => {
            return Math.hypot(ball1.x - ball2.x, ball1.y - ball2.y);
        };

        const collideWithBall = (ball1, ball2) => {
            const dist = distance(ball1, ball2);
            const minDist = ball1.radius + ball2.radius;

            if (dist < minDist) {
                // Separate balls
                const overlap = minDist - dist;
                const dx = ball2.x - ball1.x;
                const dy = ball2.y - ball1.y;
                const angle = Math.atan2(dy, dx);

                const moveX = Math.cos(angle) * overlap * 0.5;
                const moveY = Math.sin(angle) * overlap * 0.5;

                ball1.x -= moveX;
                ball1.y -= moveY;
                ball2.x += moveX;
                ball2.y += moveY;

                // Collision response
                const normalX = dx / dist;
                const normalY = dy / dist;

                const relativeVelocityX = ball2.dx - ball1.dx;
                const relativeVelocityY = ball2.dy - ball1.dy;

                const velocityInNormalDirection =
                    relativeVelocityX * normalX + relativeVelocityY * normalY;

                if (velocityInNormalDirection > 0) return;

                const restitution = 0.8;
                const impulse =
                    ((1 + restitution) * velocityInNormalDirection) /
                    (ball1.mass + ball2.mass);

                ball1.dx += impulse * ball2.mass * normalX;
                ball1.dy += impulse * ball2.mass * normalY;
                ball2.dx -= impulse * ball1.mass * normalX;
                ball2.dy -= impulse * ball1.mass * normalY;
            }
        };

        const updateBall = (ball) => {
            // Apply gravity
            ball.dy += GRAVITY;

            // Update position
            ball.x += ball.dx;
            ball.y += ball.dy;

            // Bounce off container boundaries
            if (ball.x + ball.radius >= playArea.right) {
                ball.x = playArea.right - ball.radius;
                ball.dx *= -BOUNCE;
            }
            if (ball.x - ball.radius <= playArea.left) {
                ball.x = playArea.left + ball.radius;
                ball.dx *= -BOUNCE;
            }
            if (ball.y + ball.radius >= playArea.bottom) {
                ball.y = playArea.bottom - ball.radius;
                ball.dy *= -BOUNCE;
                ball.dx *= FRICTION;
            }
            if (ball.y - ball.radius <= playArea.top) {
                ball.y = playArea.top + ball.radius;
                ball.dy *= -BOUNCE;
            }

            if (mouse.x !== null && mouse.y !== null) {
                const dist = Math.hypot(ball.x - mouse.x, ball.y - mouse.y);
                const influenceRadius = 130;

                if (dist < influenceRadius && dist > 0) {
                    // Calculate direction from mouse to ball (repulsion)
                    const angle = Math.atan2(
                        ball.y - mouse.y,
                        ball.x - mouse.x
                    );
                    const force =
                        ((influenceRadius - dist) / influenceRadius) * 1.0;

                    // Apply force away from mouse (including upward)
                    ball.dx += Math.cos(angle) * force;
                    ball.dy += Math.sin(angle) * force;

                    // Special case: if mouse is below the ball, add extra upward force
                    if (mouse.y > ball.y) {
                        const upwardBoost = force * 1.0;
                        ball.dy -= upwardBoost; // Negative dy moves ball up
                    }

                    // Limit velocity to prevent balls from flying off screen
                    const maxVelocity = 18;
                    const currentSpeed = Math.hypot(ball.dx, ball.dy);
                    if (currentSpeed > maxVelocity) {
                        ball.dx = (ball.dx / currentSpeed) * maxVelocity;
                        ball.dy = (ball.dy / currentSpeed) * maxVelocity;
                    }
                }
            }

            // Air resistance
            ball.dx *= 0.999;
            ball.dy *= 0.999;
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Update all balls
            balls.forEach(updateBall);

            // Check collisions between all balls
            for (let i = 0; i < balls.length; i++) {
                for (let j = i + 1; j < balls.length; j++) {
                    collideWithBall(balls[i], balls[j]);
                }
            }

            // Draw all balls
            balls.forEach(drawBall);

            requestAnimationFrame(animate);
        };

        // Mouse event listeners
        canvas.addEventListener('mousemove', (e) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        });

        canvas.addEventListener('mouseleave', () => {
            mouse.x = null;
            mouse.y = null;
        });

        // --- Add these for touch support ---
        canvas.addEventListener(
            'touchmove',
            (e) => {
                const rect = canvas.getBoundingClientRect();
                if (e.touches && e.touches.length > 0) {
                    mouse.x = e.touches[0].clientX - rect.left;
                    mouse.y = e.touches[0].clientY - rect.top;
                }
            },
            { passive: false }
        );

        canvas.addEventListener('touchend', () => {
            mouse.x = null;
            mouse.y = null;
        });

        // Start animation
        animate();

        // Resize handler
        const handleResize = () => {
            const newRadius = getBallRadius();

            // Update canvas size
            canvas.width = container.offsetWidth;
            canvas.height = container.offsetHeight;
            playArea.right = canvas.width - MARGIN;
            playArea.bottom = canvas.height - MARGIN;

            // Update ball radius for all balls
            balls.forEach((ball) => {
                ball.radius = newRadius;

                // Keep balls within new boundaries
                if (ball.x + ball.radius > playArea.right) {
                    ball.x = playArea.right - ball.radius;
                }
                if (ball.x - ball.radius < playArea.left) {
                    ball.x = playArea.left + ball.radius;
                }
                if (ball.y + ball.radius > playArea.bottom) {
                    ball.y = playArea.bottom - ball.radius;
                }
                if (ball.y - ball.radius < playArea.top) {
                    ball.y = playArea.top + ball.radius;
                }
            });
        };

        // Add resize event listener
        window.addEventListener('resize', handleResize);

        // Cleanup function
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <section className="hero-content">
            <article className="hero-container" ref={containerRef}>
                <header>
                    <h1 className="hero-title">
                        Hi there! I'm <br />{' '}
                        <span className="color">Patrik.</span> 👋
                    </h1>
                    <hr className="hero-divider" />
                </header>
                <h2 className="hero-subtitle">
                    Web Developer & UI/UX Designer
                </h2>
                <canvas ref={canvasRef} className="hero-canvas"></canvas>
            </article>
        </section>
    );
};

export default HomeHero;
