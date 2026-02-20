// Home.jsx
import React, { useState } from 'react';
import './Home.css';

const Home = () => {
    const [targetUrl, setTargetUrl] = useState('');
    const [generatedLink, setGeneratedLink] = useState('');
    const [isScanning, setIsScanning] = useState(true);

    const handleGenerateLink = () => {
        if (targetUrl) {
            const trackingId = Math.random().toString(36).substring(2, 10);
            setGeneratedLink(`https://tracelon.io/${trackingId}`);
        }
    };

    const handleSimulateClick = () => {
        alert('Target click simulated! Forensic data capture initiated.');
    };

    const handleReset = () => {
        setTargetUrl('');
        setGeneratedLink('');
    };

    return (
        <div className="home-container forensic-theme">
            {/* Background Grid Effect */}
            <div className="background-grid"></div>

            {/* Top Bar - Utility Navigation with Terminal Style */}
            <div className="top-bar">
                <div className="top-bar-content">
                    <div className="terminal-status">
                        <span className="status-indicator active"></span>
                        <span className="status-text">SECUR OS v2.4.1</span>
                    </div>
                    <span className="welcome-text">
                        <span className="prompt">{'>'}</span> Welcome to Secur. <a href="/contact" className="get-in-touch">Need Help? Get In Touch</a>
                    </span>
                </div>
            </div>

            {/* Primary Navigation */}
            <nav className="main-nav">
                <div className="nav-content">
                    <div className="logo">
                        <span className="logo-bracket">{'<'}</span>
                        Secur
                        <span className="logo-bracket">{'/>'}</span>
                    </div>
                    <ul className="nav-menu">
                        <li><a href="/" className="active">Home</a></li>
                        <li><a href="/AboutUs">About</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/pages">Pages</a></li>
                        <li><a href="/blog">Blog</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                    </ul>
                </div>
            </nav>

            {/* Hero Section with Forensic Console Elements */}
            {/* <section className="hero-section">
                <div className="terminal-window">
                    <div className="terminal-header">
                        <div className="window-controls">
                            <span className="control-dot blue"></span>
                            <span className="control-dot light-blue"></span>
                            <span className="control-dot white"></span>
                        </div>
                        <div className="terminal-title">SECUR FORENSIC CONSOLE</div>
                        <div className="terminal-status">
                            <span className="status-indicator active"></span>
                            <span className="status-text">SYSTEM ONLINE</span>
                        </div>
                    </div>

                    <div className="scanline"></div>

                    <div className="hero-content">
                        <div className="hero-text">
                            <div className="terminal-prompt">
                                <span className="prompt-symbol">{'>'}</span>
                                <span className="prompt-command">./deploy-security</span>
                            </div>
                            <h1 className="hero-title">
                                Securing Your Digital World, <span className="highlight">One Click at a Time</span>
                            </h1>
                            <p className="hero-description">
                                <span className="description-meta">[SYSTEM]</span> Since 1999, Secur has safeguarded digital landscapes.
                                Our cloud security solutions protect your data and applications from threats.
                                Fortify your future with Secur.
                            </p>
                            <div className="hero-cta">
                                <button className="btn btn-primary">
                                    GET CONSULTATION <span className="arrow">→</span>
                                </button>
                                <button className="btn btn-ghost">
                                    <span className="play-icon">▶</span> WATCH VIDEO
                                </button>
                            </div>
                        </div>
                        <div className="hero-visual">
                            <div className="visual-container">
                                <div className="grid-lines"></div>

                                
                                <div className="graph-container">
                                    <div className="y-axis">
                                        <span>1000</span>
                                        <span>900</span>
                                        <span>800</span>
                                        <span>700</span>
                                        <span>600</span>
                                        <span>500</span>
                                        <span>400</span>
                                        <span>300</span>
                                        <span>200</span>
                                        <span>100</span>
                                        <span>0</span>
                                    </div>
                                    <div className="graph">
                                        <div className="bar" style={{ height: '450px' }} data-ip="192.168.1.1"></div>
                                        <div className="bar" style={{ height: '650px' }} data-ip="172.16.0.1"></div>
                                        <div className="bar" style={{ height: '300px' }} data-ip="10.0.0.1"></div>
                                        <div className="bar" style={{ height: '800px' }} data-ip="8.8.8.8"></div>
                                        <div className="bar" style={{ height: '200px' }} data-ip="1.1.1.1"></div>
                                    </div>
                                    <div className="x-axis">
                                        <span>192.168.1.1</span>
                                        <span>172.16.0.1</span>
                                        <span>10.0.0.1</span>
                                        <span>8.8.8.8</span>
                                        <span>1.1.1.1</span>
                                    </div>
                                </div>

                                <div className="scanning-radar">
                                    <div className="radar-circle"></div>
                                    <div className="radar-circle inner"></div>
                                    <div className="radar-line"></div>
                                </div>

                                <div className="shield-icon">
                                    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2L3 7V12C3 16.97 7.03 21 12 21C16.97 21 21 16.97 21 12V7L12 2Z" stroke="#1e3a8a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z" stroke="#1e3a8a" strokeWidth="1.5" />
                                        <path d="M12 12V16" stroke="#1e3a8a" strokeWidth="1.5" strokeLinecap="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            <section className="hero-section">
                <div className="terminal-window">
                    <div className="terminal-header">
                        <div className="window-controls">
                            <span className="control-dot blue"></span>
                            <span className="control-dot light-blue"></span>
                            <span className="control-dot white"></span>
                        </div>
                        <div className="terminal-title">SECUR FORENSIC CONSOLE</div>
                        <div className="terminal-status">
                            <span className="status-indicator active"></span>
                            <span className="status-text">SYSTEM ONLINE</span>
                        </div>
                    </div>

                    <div className="scanline"></div>

                    <div className="hero-content">
                        <div className="hero-text">
                            <div className="terminal-prompt">
                                <span className="prompt-symbol">{'>'}</span>
                                <span className="prompt-command">./deploy-security</span>
                            </div>
                            <h1 className="hero-title">
                                Securing Your Digital World, <span className="highlight">One Click at a Time</span>
                            </h1>
                            <p className="hero-description">
                                <span className="description-meta">[SYSTEM]</span> Since 1999, Secur has safeguarded digital landscapes.
                                Our cloud security solutions protect your data and applications from threats.
                                Fortify your future with Secur.
                            </p>
                            <div className="hero-cta">
                                <button className="btn btn-primary">
                                    GET CONSULTATION <span className="arrow">→</span>
                                </button>
                                <button className="btn btn-ghost">
                                    <span className="play-icon">▶</span> WATCH VIDEO
                                </button>
                            </div>

                            {/* ── Small tracking link bar ── */}
                            <div className="hero-link-bar">
                                <input
                                    type="url"
                                    value={targetUrl}
                                    onChange={(e) => setTargetUrl(e.target.value)}
                                    placeholder="https://example.com/target-resource"
                                    className="hero-link-input"
                                />
                                <button
                                    className="hero-link-btn"
                                    onClick={handleGenerateLink}
                                    disabled={!targetUrl}
                                >
                                    ⚡ GENERATE
                                </button>
                            </div>
                        </div>

                        <div className="hero-visual">
                            <div className="visual-container">
                                <div className="grid-lines"></div>

                                {/* Graph with IP Addresses */}
                                <div className="graph-container">
                                    <div className="y-axis">
                                        <span>1000</span>
                                        <span>900</span>
                                        <span>800</span>
                                        <span>700</span>
                                        <span>600</span>
                                        <span>500</span>
                                        <span>400</span>
                                        <span>300</span>
                                        <span>200</span>
                                        <span>100</span>
                                        <span>0</span>
                                    </div>
                                    <div className="graph">
                                        <div className="bar" style={{ height: '450px' }} data-ip="192.168.1.1"></div>
                                        <div className="bar" style={{ height: '650px' }} data-ip="172.16.0.1"></div>
                                        <div className="bar" style={{ height: '300px' }} data-ip="10.0.0.1"></div>
                                        <div className="bar" style={{ height: '800px' }} data-ip="8.8.8.8"></div>
                                        <div className="bar" style={{ height: '200px' }} data-ip="1.1.1.1"></div>
                                    </div>
                                    <div className="x-axis">
                                        <span>192.168.1.1</span>
                                        <span>172.16.0.1</span>
                                        <span>10.0.0.1</span>
                                        <span>8.8.8.8</span>
                                        <span>1.1.1.1</span>
                                    </div>
                                </div>

                                <div className="scanning-radar">
                                    <div className="radar-circle"></div>
                                    <div className="radar-circle inner"></div>
                                    <div className="radar-line"></div>
                                </div>

                                <div className="shield-icon">
                                    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2L3 7V12C3 16.97 7.03 21 12 21C16.97 21 21 16.97 21 12V7L12 2Z" stroke="#1e3a8a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z" stroke="#1e3a8a" strokeWidth="1.5" />
                                        <path d="M12 12V16" stroke="#1e3a8a" strokeWidth="1.5" strokeLinecap="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Forensic Link Generator Section - IMPROVED */}


            {/* Features Section with Terminal Style Cards */}
            <section className="features-section">
                <div className="terminal-header features-header">
                    <div className="terminal-title">SECURITY MODULES</div>
                    <div className="terminal-status">
                        <span className="status-indicator active"></span>
                        <span className="status-text">3 ACTIVE</span>
                    </div>
                </div>

                <div className="features-grid">
                    {/* Card 1: Advanced Threat Detection */}
                    <div className="feature-card">
                        <div className="card-header">
                            <span className="card-badge">[MODULE_01]</span>
                            <div className="card-icon">
                                <span className="icon">🎯</span>
                            </div>
                        </div>
                        <h3 className="card-title">Advanced Threat Detection</h3>
                        <p className="card-description">
                            Proactively identify and respond to emerging threats, safeguarding your critical assets from potential harm.
                        </p>
                        <div className="card-footer">
                            <span className="status-badge active">ACTIVE</span>
                            <span className="metrics">98.7% accuracy</span>
                        </div>
                    </div>

                    {/* Card 2: Robust Data Protection */}
                    <div className="feature-card">
                        <div className="card-header">
                            <span className="card-badge">[MODULE_02]</span>
                            <div className="card-icon">
                                <span className="icon">🔒</span>
                            </div>
                        </div>
                        <h3 className="card-title">Robust Data Protection</h3>
                        <p className="card-description">
                            Safeguard your sensitive data with robust encryption, secure access controls, and data loss prevention measures.
                        </p>
                        <div className="card-footer">
                            <span className="status-badge active">ACTIVE</span>
                            <span className="metrics">AES-256</span>
                        </div>
                    </div>

                    {/* Card 3: 24/7 Security Monitoring */}
                    <div className="feature-card">
                        <div className="card-header">
                            <span className="card-badge">[MODULE_03]</span>
                            <div className="card-icon">
                                <span className="icon">⏰</span>
                            </div>
                        </div>
                        <h3 className="card-title">24/7 Security Monitoring</h3>
                        <p className="card-description">
                            Our team of security experts monitors your environment around the clock, detecting and responding to threats in real-time.
                        </p>
                        <div className="card-footer">
                            <span className="status-badge active">ACTIVE</span>
                            <span className="metrics">&lt;10ms response</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom Credits */}
            <div className="bottom-credits">
                <p>SECUR FORENSIC INTELLIGENCE © 2026 | OSINT-Grade Security Analysis</p>
            </div>
        </div>
    );
};

export default Home;