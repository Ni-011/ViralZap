import React from 'react'

export default function FeaturesSection() {
    return (
        <section className="features-section" id="features">
            <div className="features-content">
                <div className="section-header">
                    <div className="section-badge">🤖 AI-Powered</div>
                    <h2 className="section-title">
                        Drop a video. Get back a week's worth of content.
                    </h2>
                    <p className="section-subtitle">
                        Our AI watches your entire video, detects the most engaging moments, crops for vertical, adds animated captions — and exports clips ready to post.
                    </p>
                    <div style={{ marginTop: '32px', display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href="#" className="btn-primary">Try it now — free</a>
                        <a href="#examples" className="btn-secondary" onClick={(e) => { e.preventDefault(); document.getElementById('examples')?.scrollIntoView({ behavior: 'smooth' }); }}>See examples</a>
                    </div>
                </div>

                <div className="mockup-container" style={{ position: 'relative' }}>
                    {/* Left phone: Upload / processing */}
                    <div className="mockup-phone">
                        <div className="mockup-screen">
                            <div className="mockup-statusbar">
                                <span>9:41</span>
                                <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
                                    <div style={{ width: '14px', height: '10px', border: '1.5px solid #000', borderRadius: '2px', position: 'relative' }}>
                                        <div style={{ position: 'absolute', right: '1px', top: '1px', bottom: '1px', width: '60%', background: '#000', borderRadius: '1px' }}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="mockup-nav">
                                <span className="back">‹</span>
                                <span className="title">ViralZap</span>
                                <span style={{ color: '#2563eb', fontSize: '14px', fontWeight: 600 }}>⚙️</span>
                            </div>

                            {/* Video preview */}
                            <div className="mockup-invoice-card" style={{ background: 'linear-gradient(135deg, #0f172a, #1e293b)', borderRadius: '14px', padding: '0', overflow: 'hidden' }}>
                                <div style={{ padding: '40px 20px', textAlign: 'center' }}>
                                    <div style={{ fontSize: '32px', marginBottom: '8px' }}>🎬</div>
                                    <div style={{ color: '#fff', fontSize: '14px', fontWeight: 600, marginBottom: '4px' }}>podcast_ep47_final.mp4</div>
                                    <div style={{ color: '#94a3b8', fontSize: '12px' }}>1h 24m · 1920×1080 · 2.4 GB</div>
                                </div>
                                {/* Progress bar */}
                                <div style={{ padding: '0 16px 16px' }}>
                                    <div style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '100px', height: '6px', overflow: 'hidden' }}>
                                        <div style={{ width: '72%', height: '100%', background: 'linear-gradient(90deg, #2563eb, #7c3aed)', borderRadius: '100px', transition: 'width 0.5s' }}></div>
                                    </div>
                                    <div style={{ color: '#94a3b8', fontSize: '11px', marginTop: '6px', display: 'flex', justifyContent: 'space-between' }}>
                                        <span>🤖 Finding best moments...</span>
                                        <span>72%</span>
                                    </div>
                                </div>
                            </div>

                            {/* AI insights */}
                            <div className="mockup-invoice-card" style={{ marginTop: '12px' }}>
                                <div style={{ fontSize: '12px', fontWeight: 600, color: '#999', marginBottom: '10px', letterSpacing: '0.5px' }}>AI DETECTED</div>
                                {[
                                    ['🔥 Viral moments', '14 found'],
                                    ['😂 Funny bits', '6 clips'],
                                    ['💡 Key insights', '8 clips'],
                                    ['📢 Quotable lines', '11 clips'],
                                ].map(([k, v], i) => (
                                    <div className="mockup-row" key={i}>
                                        <span className="key">{k}</span>
                                        <span className="val" style={{ color: '#2563eb' }}>{v}</span>
                                    </div>
                                ))}
                            </div>

                            <div style={{ flex: 1 }}></div>
                            <div className="mockup-pay-btn">Generate 39 clips →</div>
                        </div>
                    </div>

                    {/* Right phone: Results */}
                    <div className="mockup-phone">
                        <div className="mockup-screen">
                            <div className="mockup-statusbar">
                                <span>9:41</span>
                                <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
                                    <div style={{ width: '14px', height: '10px', border: '1.5px solid #000', borderRadius: '2px', position: 'relative' }}>
                                        <div style={{ position: 'absolute', right: '1px', top: '1px', bottom: '1px', width: '80%', background: '#16a34a', borderRadius: '1px' }}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="mockup-nav">
                                <span className="back">‹</span>
                                <span className="title">Your Clips</span>
                                <span style={{ color: '#2563eb', fontSize: '14px', fontWeight: 600 }}>Share</span>
                            </div>

                            {/* Ready banner */}
                            <div style={{
                                background: 'linear-gradient(135deg, #ecfdf5, #d1fae5)',
                                padding: '14px 16px',
                                borderRadius: '14px',
                                fontSize: '14px',
                                fontWeight: 600,
                                color: '#059669',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                marginBottom: '12px',
                            }}>
                                ✨ 39 clips ready to post!
                            </div>

                            {/* Clip grid */}
                            {[
                                { title: '"The secret to growth is..."', time: '0:42', score: '🔥 94', bg: 'linear-gradient(135deg, #7c3aed22, #2563eb22)' },
                                { title: '"Nobody talks about this..."', time: '0:58', score: '🔥 91', bg: 'linear-gradient(135deg, #f59e0b22, #ef444422)' },
                                { title: '"Here\'s the thing about AI..."', time: '0:31', score: '🔥 87', bg: 'linear-gradient(135deg, #06b6d422, #2563eb22)' },
                            ].map((clip, i) => (
                                <div key={i} className="mockup-invoice-card" style={{ padding: '14px', marginBottom: '8px' }}>
                                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                        <div style={{
                                            width: '48px', height: '64px', borderRadius: '8px',
                                            background: clip.bg, flexShrink: 0,
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            fontSize: '18px',
                                        }}>▶</div>
                                        <div style={{ flex: 1, minWidth: 0 }}>
                                            <div style={{ fontSize: '13px', fontWeight: 600, marginBottom: '4px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{clip.title}</div>
                                            <div style={{ fontSize: '11px', color: '#999', display: 'flex', gap: '8px' }}>
                                                <span>{clip.time}</span>
                                                <span>{clip.score}</span>
                                            </div>
                                        </div>
                                        <div style={{ display: 'flex', gap: '4px' }}>
                                            {['TikTok', 'Reels'].map((p, j) => (
                                                <span key={j} style={{
                                                    padding: '2px 6px', background: '#f0f4ff', borderRadius: '4px',
                                                    fontSize: '9px', fontWeight: 600, color: '#2563eb',
                                                }}>{p}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}

                            <div style={{
                                fontSize: '12px', color: '#999', textAlign: 'center', padding: '8px',
                            }}>
                                + 36 more clips →
                            </div>

                            <div style={{ flex: 1 }}></div>
                            <div className="mockup-pay-btn" style={{ background: 'linear-gradient(135deg, #2563eb, #7c3aed)' }}>Download all clips ↓</div>
                        </div>
                    </div>

                    {/* Floating badges */}
                    <div className="float-badge" style={{ position: 'absolute', top: '60px', right: '30px' }}>
                        🎯 AI virality scoring
                    </div>
                    <div className="float-badge" style={{ position: 'absolute', bottom: '260px', left: '10px', animationDelay: '1s' }}>
                        📐 Auto 9:16 cropping
                    </div>
                    <div className="float-badge" style={{ position: 'absolute', top: '280px', left: '-10px', animationDelay: '0.5s' }}>
                        💬 Animated captions
                    </div>
                    <div className="float-badge" style={{ position: 'absolute', bottom: '180px', right: '20px', animationDelay: '1.5s' }}>
                        📱 Multi-platform export
                    </div>

                    <div className="features-gradient"></div>
                </div>
            </div>
        </section>
    )
}
