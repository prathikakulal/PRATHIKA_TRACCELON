// AboutUs.jsx
import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div className="about-container">
            {/* Background Grid Effect */}
            <div className="background-grid"></div>

            {/* About Us Hero Section */}
            <section className="about-hero">
                <div className="split-layout">
                    {/* Left Side - Text Content */}
                    <div className="text-content">
                        <span className="overline">ABOUT US</span>
                        <h1 className="main-headline">
                            Defending Your Digital World, <span className="highlight">24/7</span>
                        </h1>
                        <p className="description">
                            For over 15 years, we've been safeguarding organizations from evolving cyber threats.
                            Our team of experts provides end-to-end security solutions — from proactive threat detection
                            and vulnerability assessments to rapid incident response — ensuring your data, systems,
                            and reputation remain fully protected in an ever-changing digital landscape.
                        </p>

                        <div className="cta-section">
                            <button className="btn btn-primary">
                                Start For Free <span className="arrow">→</span>
                            </button>

                            <div className="stat-badge">
                                <span className="stat-number">15</span>
                                <span className="stat-text">Years of Experience</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Visual */}
                    <div className="visual-content">
                        <div className="shield-container">
                            {/* Main Shield */}
                            <div className="shield-3d">
                                <div className="shield-face front"></div>
                                <div className="shield-face back"></div>
                                <div className="shield-face left"></div>
                                <div className="shield-face right"></div>
                                <div className="shield-face top"></div>
                                <div className="shield-face bottom"></div>
                                <div className="shield-logo">🛡️</div>
                            </div>

                            {/* Floating Network Nodes */}
                            <div className="network-nodes">
                                <div className="node central"></div>
                                <div className="node node1"></div>
                                <div className="node node2"></div>
                                <div className="node node3"></div>
                                <div className="node node4"></div>
                                <div className="node node5"></div>
                            </div>

                            {/* Connection Lines */}
                            <svg className="connection-lines" viewBox="0 0 200 200">
                                <line x1="100" y1="100" x2="50" y2="50" stroke="#1e3a8a" strokeWidth="1" strokeOpacity="0.3" />
                                <line x1="100" y1="100" x2="150" y2="50" stroke="#1e3a8a" strokeWidth="1" strokeOpacity="0.3" />
                                <line x1="100" y1="100" x2="50" y2="150" stroke="#1e3a8a" strokeWidth="1" strokeOpacity="0.3" />
                                <line x1="100" y1="100" x2="150" y2="150" stroke="#1e3a8a" strokeWidth="1" strokeOpacity="0.3" />
                                <line x1="100" y1="100" x2="30" y2="100" stroke="#1e3a8a" strokeWidth="1" strokeOpacity="0.3" />
                                <line x1="100" y1="100" x2="170" y2="100" stroke="#1e3a8a" strokeWidth="1" strokeOpacity="0.3" />
                            </svg>

                            {/* Glow Effects */}
                            <div className="glow-effect"></div>
                            <div className="glow-effect secondary"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features/Stats Section */}
            <section className="features-stats-section">
                <h2 className="section-headline">
                    Comprehensive Cybersecurity Solutions <span className="highlight">for Modern Threats</span>
                </h2>

                {/* Stats Badge */}
                <div className="stats-badge-container">
                    <div className="stats-badge">
                        <span className="stats-percentage">99.9%</span>
                        <span className="stats-label">Threat detection and prevention rate</span>
                    </div>
                </div>

                {/* Three Column Feature Grid */}
                <div className="features-grid">
                    {/* Card 1: Vulnerability Assessment */}
                    <div className="feature-card">
                        <div className="card-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#1e3a8a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2 17L12 22L22 17" stroke="#1e3a8a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2 12L12 17L22 12" stroke="#1e3a8a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <h3 className="card-title">Vulnerability Assessment</h3>
                        <p className="card-description">
                            Identify weaknesses before attackers do, reduce risk exposure, and strengthen your overall security posture.
                        </p>
                        <div className="card-footer">
                            <span className="learn-more">Learn More →</span>
                        </div>
                    </div>

                    {/* Card 2: Data Protection */}
                    <div className="feature-card">
                        <div className="card-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#1e3a8a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2 17L12 22L22 17" stroke="#1e3a8a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2 12L12 17L22 12" stroke="#1e3a8a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <circle cx="12" cy="12" r="2" stroke="#1e3a8a" strokeWidth="2" />
                            </svg>
                        </div>
                        <h3 className="card-title">Data Protection</h3>
                        <p className="card-description">
                            Safeguard sensitive data against breaches and leaks with strong encryption, access control, and secure storage.
                        </p>
                        <div className="card-footer">
                            <span className="learn-more">Learn More →</span>
                        </div>
                    </div>

                    {/* Card 3: Brand Reputation */}
                    <div className="feature-card">
                        <div className="card-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2L15 9H22L16 14L19 21L12 16.5L5 21L8 14L2 9H9L12 2Z" stroke="#1e3a8a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <h3 className="card-title">Brand Reputation</h3>
                        <p className="card-description">
                            Maintain customer trust and brand integrity by preventing cyber incidents and demonstrating strong data responsibility.
                        </p>
                        <div className="card-footer">
                            <span className="learn-more">Learn More →</span>
                        </div>
                    </div>
                </div>

                {/* Bottom Stats Bar */}
                <div className="bottom-stats-bar">
                    <div className="stat-item">
                        <span className="stat-value">500+</span>
                        <span className="stat-label">Clients Protected</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-value">15+</span>
                        <span className="stat-label">Years Experience</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-value">24/7</span>
                        <span className="stat-label">Security Monitoring</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-value">99.9%</span>
                        <span className="stat-label">Threat Detection</span>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;