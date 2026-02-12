import React from 'react'

const logos = [
    { name: 'TikTok', color: '#000', letter: '♪' },
    { name: 'YouTube', color: '#ff0000', letter: '▶' },
    { name: 'Instagram', color: '#e4405f', letter: '◉' },
    { name: 'X / Twitter', color: '#1da1f2', letter: '𝕏' },
    { name: 'LinkedIn', color: '#0a66c2', letter: 'in' },
    { name: 'Spotify', color: '#1db954', letter: '♫' },
    { name: 'Facebook', color: '#1877f2', letter: 'f' },
    { name: 'Snapchat', color: '#fffc00', letter: '👻' },
    { name: 'Pinterest', color: '#e60023', letter: 'P' },
    { name: 'Premiere Pro', color: '#9999ff', letter: 'Pr' },
    { name: 'DaVinci', color: '#e8430a', letter: 'D' },
    { name: 'Final Cut', color: '#999', letter: 'FC' },
]

export default function LogoMarquee() {
    const renderLogos = (items) =>
        items.map((logo, i) => (
            <div className="logo-item" key={i}>
                <div className="logo-icon" style={{ background: logo.color, fontSize: logo.letter.length > 1 ? '12px' : '16px' }}>{logo.letter}</div>
                <span className="logo-name">{logo.name}</span>
            </div>
        ))

    return (
        <div className="logo-marquee">
            <div className="marquee-track">
                {renderLogos(logos)}
                {renderLogos(logos)}
            </div>
        </div>
    )
}
