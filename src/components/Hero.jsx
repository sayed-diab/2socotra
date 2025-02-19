import { gsap } from 'gsap';

import './Hero.css';
import { useEffect } from 'react';
export default function Hero() {
  useEffect(() => {
    gsap.fromTo('.info', { height: 0 }, { height: '25%', ease: 'power1.inOut', duration: 1.2 });
  });
  return (
    <section className="hero">
      <div className="info">
        <img
          src="./2socotra-icon-192x192.png"
          alt="logo"
        />
        <h1>
          <b className="title">Socotra</b> Island Explore
        </h1>
        <h2>2024/2025</h2>
      </div>
    </section>
  );
}
