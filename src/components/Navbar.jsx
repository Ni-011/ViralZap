import React, { useState } from 'react'

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false)

    const scrollToSection = (id) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
            setMobileOpen(false)
        }
    }

    return (
        <>
            <nav className="navbar">
                <div className="navbar-inner">
                    <a href="/" className="navbar-logo">
                        <div className="navbar-logo-icon">⚡</div>
                        viralzap
                    </a>

                    <div className="navbar-links">
                        <a href="#features" onClick={(e) => { e.preventDefault(); scrollToSection('features'); }}>Features</a>
                        <a href="#pricing" onClick={(e) => { e.preventDefault(); scrollToSection('pricing'); }}>Pricing</a>
                        <a href="#examples" onClick={(e) => { e.preventDefault(); scrollToSection('examples'); }}>Examples</a>
                        <a href="#blog">Blog</a>
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
                <a href="#features" onClick={(e) => { e.preventDefault(); scrollToSection('features'); }}>Features</a>
                <a href="#pricing" onClick={(e) => { e.preventDefault(); scrollToSection('pricing'); }}>Pricing</a>
                <a href="#examples" onClick={(e) => { e.preventDefault(); scrollToSection('examples'); }}>Examples</a>
                <a href="#blog" onClick={() => setMobileOpen(false)}>Blog</a>
                <a href="#" onClick={() => setMobileOpen(false)}>Log in</a>
                <div className="mobile-cta">
                    <button className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Start clipping — free</button>
                </div>
            </div>
        </>
    )
}
