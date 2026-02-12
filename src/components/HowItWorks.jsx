import React from 'react'

const steps = [
    {
        num: '1',
        title: 'Upload your video',
        desc: 'Drop any long-form video — podcast, webinar, tutorial, vlog, interview. We support MP4, MOV, MKV up to 4 hours long.',
        visual: {
            label: 'Supported formats',
            tags: ['MP4', 'MOV', 'MKV', 'WEBM', 'AVI'],
            extra: 'Up to 4 hours · 10 GB max',
        }
    },
    {
        num: '2',
        title: 'AI finds the gold',
        desc: 'Our AI analyzes speech, emotion, energy, and engagement signals to find the most clip-worthy moments. Each clip gets a virality score.',
        visual: {
            label: 'AI analysis',
            items: ['🧠 Speech-to-text', '🎭 Emotion detection', '📈 Energy mapping', '🔥 Virality scoring'],
        }
    },
    {
        num: '3',
        title: 'Export & post everywhere',
        desc: 'Get perfectly cropped 9:16 clips with animated captions, brand colors, and platform-optimized exports. One click to download or schedule.',
        visual: {
            label: 'Export to',
            tags: ['TikTok', 'Reels', 'YouTube Shorts', 'X', 'LinkedIn'],
            extra: 'Auto-captions included',
        }
    },
]

export default function HowItWorks() {
    return (
        <section className="detail-section">
            <div className="detail-header">
                <div className="section-badge">🚀 How it works</div>
                <h2 className="detail-title">From podcast to posts in 3 minutes</h2>
                <p className="detail-subtitle">
                    No editing skills needed. No timeline scrubbing. Just upload and let the AI do the heavy lifting.
                </p>
            </div>

            <div className="steps-container">
                {steps.map((step, i) => (
                    <div className="step-card" key={i}>
                        <div className="step-number">{step.num}</div>
                        <h3>{step.title}</h3>
                        <p>{step.desc}</p>
                        <div className="step-visual">
                            <div style={{ fontSize: '11px', fontWeight: 600, color: '#999', marginBottom: '8px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                                {step.visual.label}
                            </div>
                            {step.visual.tags && (
                                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: step.visual.extra ? '8px' : 0 }}>
                                    {step.visual.tags.map((t, j) => (
                                        <span key={j} style={{
                                            padding: '4px 10px', background: '#fff', borderRadius: '6px',
                                            fontSize: '11px', fontWeight: 600, color: '#333',
                                            border: '1px solid rgba(0,0,0,0.06)',
                                        }}>{t}</span>
                                    ))}
                                </div>
                            )}
                            {step.visual.items && (
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                    {step.visual.items.map((item, j) => (
                                        <div key={j} style={{ fontSize: '12px', color: '#555', padding: '4px 0' }}>{item}</div>
                                    ))}
                                </div>
                            )}
                            {step.visual.extra && (
                                <div style={{ fontSize: '11px', color: '#999', fontWeight: 500 }}>{step.visual.extra}</div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
