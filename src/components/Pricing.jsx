import React from 'react'

export default function Pricing() {
    return (
        <section className="pricing-section">
            <div className="pricing-content">
                <div style={{ textAlign: 'center' }}>
                    <div className="section-badge">💰 Pricing</div>
                    <h2 className="pricing-title">Plans that grow with your content</h2>
                    <p className="section-subtitle" style={{ marginTop: '16px' }}>Start free. Upgrade when you're addicted. No credit card required.</p>
                </div>

                <div className="pricing-grid">
                    {/* Free */}
                    <div className="pricing-card">
                        <div className="pricing-card-header">
                            <span className="pricing-label">Starter</span>
                            <div className="pricing-value">
                                <span className="pricing-amount">$0</span>
                                <span className="pricing-unit">/month</span>
                            </div>
                        </div>
                        <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.6' }}>
                            Perfect for trying ClipFlow on your first few videos.
                        </p>
                        <a href="#" className="btn-secondary pricing-cta" style={{ justifyContent: 'center', width: '100%' }}>Start free</a>
                        <div className="pricing-divider"></div>
                        <div className="pricing-features">
                            <div className="pricing-feature-group">
                                <h4>Includes</h4>
                                {[
                                    '3 videos per month',
                                    'Up to 30 min per video',
                                    'AI clip detection',
                                    'Auto-captions (English)',
                                    '720p exports',
                                    'ClipFlow watermark',
                                ].map((f, i) => (
                                    <div className="pricing-feature-item" key={i}>
                                        <span className="check">✓</span>
                                        {f}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Pro */}
                    <div className="pricing-card featured">
                        <div className="pricing-card-header">
                            <span className="pricing-label">Creator Pro</span>
                            <div className="pricing-value">
                                <span className="pricing-amount">$29</span>
                                <span className="pricing-unit">/month</span>
                            </div>
                            <span className="pricing-note">Save 33% billed annually</span>
                        </div>
                        <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.6' }}>
                            For creators who post daily and want to dominate every platform.
                        </p>
                        <a href="#" className="btn-primary pricing-cta" style={{ justifyContent: 'center', width: '100%' }}>Get Creator Pro</a>
                        <div className="pricing-divider"></div>
                        <div className="pricing-features">
                            <div className="pricing-feature-group">
                                <h4>Everything in Starter, plus</h4>
                                {[
                                    'Unlimited videos',
                                    'Up to 4 hours per video',
                                    '1080p & 4K exports',
                                    'No watermark',
                                    '29 language captions',
                                    'Custom brand colors & fonts',
                                    'Virality score per clip',
                                    'Schedule & auto-post',
                                    'Priority processing',
                                ].map((f, i) => (
                                    <div className="pricing-feature-item" key={i}>
                                        <span className="check">✓</span>
                                        {f}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Agency */}
                    <div className="pricing-card">
                        <div className="pricing-card-header">
                            <span className="pricing-label">Agency</span>
                            <div className="pricing-value">
                                <span className="pricing-amount">$99</span>
                                <span className="pricing-unit">/month</span>
                            </div>
                        </div>
                        <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.6' }}>
                            For teams and agencies managing multiple brands and clients.
                        </p>
                        <a href="#" className="btn-secondary pricing-cta" style={{ justifyContent: 'center', width: '100%' }}>Start Agency plan</a>
                        <div className="pricing-divider"></div>
                        <div className="pricing-features">
                            <div className="pricing-feature-group">
                                <h4>Everything in Pro, plus</h4>
                                {[
                                    '10 team seats',
                                    'Unlimited workspaces',
                                    'Client brand kits',
                                    'Bulk upload & batch process',
                                    'API access',
                                    'Dedicated account manager',
                                    'Custom integrations',
                                    'Whitelabel exports',
                                ].map((f, i) => (
                                    <div className="pricing-feature-item" key={i}>
                                        <span className="check">✓</span>
                                        {f}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
