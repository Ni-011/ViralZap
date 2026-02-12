import React from 'react'

export default function Hero() {
    return (
        <section className="hero">
            <div className="hero-content">
                <div className="hero-badge">
                    <span className="badge-dot"></span>
                    Now with auto-captions & AI scene detection
                </div>
                <h1 className="hero-title">
                    One video,<br /><span className="line2">endless shorts</span>
                </h1>
                <p className="hero-subtitle">
                    Drop a long-form video and our AI instantly finds the best moments, adds captions, and exports perfectly cropped shorts for every platform.
                </p>
                <div className="hero-ctas">
                    <a href="#" className="btn-primary">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M4 2l10 6-10 6V2z" fill="currentColor" />
                        </svg>
                        Upload your first video
                    </a>
                    <a href="#" className="btn-secondary">
                        Watch demo
                    </a>
                </div>
                <div className="hero-trust">
                    <span className="dot"></span>
                    Trusted by 12,000+ creators, agencies & media teams
                </div>
                <div className="hero-stats">
                    <div className="hero-stat">
                        <div className="number">2M+</div>
                        <div className="label">Clips created</div>
                    </div>
                    <div className="hero-stat">
                        <div className="number">12k+</div>
                        <div className="label">Creators</div>
                    </div>
                    <div className="hero-stat">
                        <div className="number">85%</div>
                        <div className="label">Time saved</div>
                    </div>
                    <div className="hero-stat">
                        <div className="number">3.2x</div>
                        <div className="label">More reach</div>
                    </div>
                </div>
            </div>
        </section>
    )
}
