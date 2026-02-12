import React, { useState } from 'react'

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false)

    return (
        <>
            <nav className="navbar">
                <div className="navbar-inner">
                    <a href="/" className="navbar-logo">
                        <div className="navbar-logo-icon">▶</div>
                        clipflow
                    </a>

                    <div className="navbar-links">
                        <a href="#">Features</a>
                        <a href="#">Pricing</a>
                        <a href="#">Examples</a>
                        <a href="#">Blog</a>
                    </div>

                    <div className="navbar-actions">
                        <button className="btn-login">Log in</button>
                        <button className="btn-signup">Try free</button>
                    </div>

                    <button className="hamburger" onClick={() => setMobileOpen(!mobileOpen)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </nav>

            <div className={`mobile-menu ${mobileOpen ? 'active' : ''}`}>
                <a href="#" onClick={() => setMobileOpen(false)}>Features</a>
                <a href="#" onClick={() => setMobileOpen(false)}>Pricing</a>
                <a href="#" onClick={() => setMobileOpen(false)}>Examples</a>
                <a href="#" onClick={() => setMobileOpen(false)}>Blog</a>
                <a href="#" onClick={() => setMobileOpen(false)}>Log in</a>
                <div className="mobile-cta">
                    <button className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Start clipping — free</button>
                </div>
            </div>
        </>
    )
}
