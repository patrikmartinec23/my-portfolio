import { useState } from 'react';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faSpinner } from '@fortawesome/free-solid-svg-icons';
import '../styles/contact.scss';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Formspree integration
            const response = await fetch('https://formspree.io/f/xovwyrrk', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                toast.success('Message sent successfully!', {
                    position: 'top-center',
                    autoClose: 3000,
                });
                // Reset form
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: '',
                });
            } else {
                toast.error('Failed to send message. Please try again.', {
                    position: 'top-center',
                    autoClose: 3000,
                });
            }
        } catch (error) {
            toast.error('Network error. Please check your connection.', {
                position: 'top-center',
                autoClose: 3000,
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="hero-content">
            <article className="contact-container">
                <header className="contact-header">
                    <h2 className="contact-title">
                        Let's <span className="color">Connect</span>
                    </h2>
                    <hr className="contact-divider" />
                </header>

                <div className="contact-content">
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="contact-form-layout">
                            {/* Left Column */}
                            <div className="contact-form-left">
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        aria-required="true"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        aria-required="true"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="subject">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        aria-required="true"
                                    />
                                </div>
                            </div>

                            {/* Right Column */}
                            <div className="contact-form-right">
                                <div className="form-group message-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="5"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        aria-required="true"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="submit-btn"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <FontAwesomeIcon
                                                icon={faSpinner}
                                                spin
                                            />{' '}
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <FontAwesomeIcon
                                                icon={faPaperPlane}
                                            />{' '}
                                            Send Message
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </article>
        </section>
    );
};

export default Contact;
