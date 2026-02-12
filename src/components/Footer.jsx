import React from 'react'

export default function Footer() {
    return (
        <>
            <section className="footer-cta">
                <h2 className="footer-cta-title">Stop editing. Start posting.</h2>
                <p className="footer-cta-subtitle">
                    Upload your first video and get clips in minutes. Free to start, no credit card required.
                </p>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <a href="#" className="btn-primary">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M4 2l10 6-10 6V2z" fill="currentColor" />
                        </svg>
                        Upload your first video
                    </a>
                    <a href="#" className="btn-secondary">Book a demo</a>
                </div>
            </section>

            <footer className="footer">
                <div className="footer-links">
                    <a href="#features" onClick={(e) => { e.preventDefault(); document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' }); }}>Features</a>
                    <a href="#pricing" onClick={(e) => { e.preventDefault(); document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' }); }}>Pricing</a>
                    <a href="#examples" onClick={(e) => { e.preventDefault(); document.getElementById('examples')?.scrollIntoView({ behavior: 'smooth' }); }}>Examples</a>
                    <a href="#">Blog</a>
                    <a href="#">Help Center</a>
                    <a href="#">API Docs</a>
                    <a href="#">Privacy</a>
                    <a href="#">Terms</a>
                    <a href="#">Careers</a>
                </div>
                <div className="footer-bottom">
                    Made with <span className="heart">♥</span> for creators everywhere &nbsp;·&nbsp; © 2025 ViralZap Inc.
                </div>
            </footer>
        </>
    )
}
