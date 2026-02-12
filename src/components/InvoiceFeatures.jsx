import React from 'react'

const features = [
    { emoji: '🤖', text: 'AI scene detection' },
    { emoji: '💬', text: 'Animated captions' },
    { emoji: '🎨', text: 'Custom brand kits' },
    { emoji: '📐', text: 'Auto 9:16 reframing' },
    { emoji: '🔥', text: 'Virality scoring' },
    { emoji: '📅', text: 'Schedule & auto-post' },
    { emoji: '🌍', text: '29 language support' },
    { emoji: '🎵', text: 'Background music' },
]

const featureCards = [
    {
        icon: '🤖',
        iconBg: '#dbeafe',
        title: 'Smart Scene Detection',
        desc: 'Our AI doesn\'t just split at random. It analyzes speech patterns, emotional peaks, punchlines, and topic shifts to find the perfect clip boundaries.',
    },
    {
        icon: '💬',
        iconBg: '#fef3c7',
        title: 'Animated Captions',
        desc: '93% of social videos are watched without sound. Auto-generated, beautifully animated captions in 29 languages boost engagement by 40%.',
    },
    {
        icon: '🔥',
        iconBg: '#fce7f3',
        title: 'Virality Scoring',
        desc: 'Every clip gets an AI-powered virality score from 0-100 based on hook strength, pacing, emotional arc, and platform trends. Post the winners first.',
    },
    {
        icon: '📐',
        iconBg: '#ede9fe',
        title: 'Smart Reframing',
        desc: 'AI tracks the active speaker and keeps them centered in 9:16 crops. No more cropped-out faces or awkward framing in your vertical clips.',
    },
    {
        icon: '🎨',
        iconBg: '#dcfce7',
        title: 'Brand Kit Builder',
        desc: 'Upload your logo, set your colors and fonts, and every clip gets your brand treatment automatically. Consistent branding without the design work.',
    },
    {
        icon: '📱',
        iconBg: '#e0f2fe',
        title: 'Multi-Platform Export',
        desc: 'Export optimized for TikTok, Instagram Reels, YouTube Shorts, X, LinkedIn, and more. Each platform gets the right aspect ratio and file spec.',
    },
]

export default function InvoiceFeatures() {
    return (
        <section className="invoice-features">
            <div className="invoice-features-content">
                <div className="invoice-features-header">
                    <div className="section-badge">✨ Features</div>
                    <h2 className="invoice-features-title">
                        Everything you need to turn one video into a content empire
                    </h2>
                    <p className="invoice-features-subtitle">
                        Built by creators, for creators. Every feature exists because we needed it ourselves.
                    </p>
                </div>

                <div className="feature-pills">
                    {features.map((f, i) => (
                        <div className="feature-pill" key={i}>
                            <span className="emoji">{f.emoji}</span>
                            {f.text}
                        </div>
                    ))}
                </div>

                <div className="feature-cards">
                    {featureCards.map((card, i) => (
                        <div className="feature-card" key={i}>
                            <div className="feature-card-icon" style={{ background: card.iconBg }}>
                                {card.icon}
                            </div>
                            <h3>{card.title}</h3>
                            <p>{card.desc}</p>
                        </div>
                    ))}
                </div>

                <div style={{ marginTop: '24px', display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <a href="#" className="btn-primary">Start clipping — free</a>
                    <a href="#" className="btn-secondary">View all features</a>
                </div>
            </div>
        </section>
    )
}
