import React from 'react'

export default function Testimonial() {
    return (
        <section className="testimonial-section">
            <div className="testimonial-card">
                <div className="testimonial-stars">
                    {[1, 2, 3, 4, 5].map(i => <span key={i}>★</span>)}
                </div>
                <p className="testimonial-quote">
                    "I used to spend 6 hours editing my podcast into clips. Now I upload to ClipFlow and have 30+ clips ready in minutes. My TikTok grew from 2k to 180k followers in three months using nothing but ClipFlow shorts. This tool is an absolute game-changer."
                </p>
                <div className="testimonial-author">
                    <div className="testimonial-avatar">MR</div>
                    <div className="testimonial-info">
                        <div className="name">Maya Rodriguez</div>
                        <div className="company">Host, The Growth Lab Podcast · 180k followers</div>
                    </div>
                </div>
            </div>
        </section>
    )
}
