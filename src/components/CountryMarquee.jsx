import React from 'react'

const creators = [
    { name: 'Podcasters', emoji: '🎙️' },
    { name: 'YouTubers', emoji: '🎬' },
    { name: 'Course creators', emoji: '📚' },
    { name: 'Coaches & consultants', emoji: '🎯' },
    { name: 'Agencies', emoji: '🏢' },
    { name: 'SaaS companies', emoji: '💻' },
    { name: 'Real estate agents', emoji: '🏠' },
    { name: 'Fitness trainers', emoji: '💪' },
    { name: 'Musicians', emoji: '🎵' },
    { name: 'Conference speakers', emoji: '🎤' },
]

const creators2 = [
    { name: 'Streamers', emoji: '🎮' },
    { name: 'News outlets', emoji: '📰' },
    { name: 'Churches & faith orgs', emoji: '⛪' },
    { name: 'Educators', emoji: '🎓' },
    { name: 'Ecommerce brands', emoji: '🛍️' },
    { name: 'Travel vloggers', emoji: '✈️' },
    { name: 'Tech reviewers', emoji: '📱' },
    { name: 'Comedians', emoji: '😂' },
    { name: 'Nonprofits', emoji: '💚' },
    { name: 'Sports teams', emoji: '⚽' },
]

export default function CountryMarquee() {
    return (
        <section className="country-marquee" id="examples">
            <div className="country-marquee-header">
                <div className="section-badge">🌍 For everyone</div>
                <h2 className="country-marquee-title">
                    Podcasts, webinars, tutorials, vlogs — we clip it all, beautifully.
                </h2>
                <p className="section-subtitle" style={{ marginTop: '16px' }}>
                    12,000+ creators across every niche use ViralZap to scale their content.
                </p>
            </div>

            <div className="country-track-wrapper">
                <div className="country-track">
                    {[...creators, ...creators].map((c, i) => (
                        <div className="country-pill" key={i}>
                            <span className="flag">{c.emoji}</span>
                            {c.name}
                        </div>
                    ))}
                </div>
            </div>
            <div className="country-track-wrapper" style={{ marginTop: '8px' }}>
                <div className="country-track reverse">
                    {[...creators2, ...creators2].map((c, i) => (
                        <div className="country-pill" key={i}>
                            <span className="flag">{c.emoji}</span>
                            {c.name}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
