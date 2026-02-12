import React from 'react'

const stars = Array.from({ length: 30 }, (_, i) => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 3}s`,
    size: `${1 + Math.random() * 2}px`,
}))

export default function FounderLetter() {
    return (
        <section className="founder-section">
            <div className="founder-bg"></div>
            <div className="founder-stars">
                {stars.map((s, i) => (
                    <div
                        key={i}
                        className="star"
                        style={{
                            top: s.top, left: s.left,
                            animationDelay: s.delay,
                            width: s.size, height: s.size,
                        }}
                    />
                ))}
            </div>

            <div className="founder-card">
                <div className="founder-letter">
                    <span className="greeting">Dear creator,</span>
                    <span className="body">
                        We built ViralZap because we lived the pain. We'd spend 4 hours recording a podcast, then another 6 hours cutting it into clips for TikTok and Reels. By the time we were done editing, we were too exhausted to actually create.
                        <br /><br />
                        We tried every tool out there. Some were clunky. Some gave us garbage clips. None of them understood what made a moment actually worth sharing.
                        <br /><br />
                        So we built the tool we wished existed — one that watches your video the way a great editor would, finds the moments that make people stop scrolling, and packages them beautifully.
                        <br /><br />
                        Your job is to create. Our job is to make sure the world sees it.
                    </span>
                    <span className="signoff">Keep creating. ✌️</span>
                    <div style={{ marginTop: '16px' }}>
                        <span className="name">The ViralZap Team</span>
                        <br />
                        <span className="title-role">Creators building for creators</span>
                    </div>
                </div>
            </div>

            <div className="founder-message">
                <p>
                    We believe every long video has 10 short masterpieces hiding inside it. Our AI just helps you find them.
                </p>
                <a href="#" className="about-link">
                    Our story →
                </a>
            </div>
        </section>
    )
}
