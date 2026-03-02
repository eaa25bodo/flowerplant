import React from 'react';
import './About.css';
import flowering from '../assets/flowering.jpg';
import gardening2 from '../assets/gardening2.webp';

export default function About() {
  return (
    <div className="about-page">
      <div className="about-content">

        {/* 1) Paragraph left, picture on the right */}
        <section className="about-section">
          <div className="about-row">
            <div className="about-text">
              <p>
                FlowerPlant started as a small community for plant lovers. We focus on
                easy-to-follow care notes and friendly advice so every gardener can
                feel confident keeping plants healthy.
              </p>
            </div>
            <div className="about-image">
              <img src={flowering} alt="Gardening" />
            </div>
          </div>
        </section>

        {/* 2) Full-width paragraph (also gets alternating background per rule) */}
        <section className="about-section">
          <div className="about-full">
            <p>
              Our resources include species profiles, watering reminders, and step-by-step
              guides. We believe learning about plants should be fun and stress-free —
              whether you keep succulents on a windowsill or grow herbs on a balcony.
            </p>
          </div>
        </section>

        {/* 3) Paragraph on the right, picture on the left (reverse row) */}
        <section className="about-section">
          <div className="about-row about-row--reverse">
            <div className="about-image">
              <img src={gardening2} alt="Gardening scene" />
            </div>
            <div className="about-text">
              <p>
                We also host local meetups and swaps. Share cuttings, tips, and triumphs with
                others nearby — plant care is better together.
              </p>
            </div>
          </div>
        </section>

        {/* 4) Even section: background matches header color (and every even section thereafter) */}
        <section className="about-section">
          <div className="about-full">
            <p>
              Join our newsletter for seasonal tips and plant spotlight guides — simple,
              practical, and aimed at helping your collection thrive.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}
