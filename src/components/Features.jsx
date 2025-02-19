import { useEffect } from 'react';
import './Features.css';
import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);
export default function Features() {
  useEffect(() => {
    gsap.fromTo(
      '.features-content',
      { x: 0, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        ease: 'power1.inOut',
        duration: 2,
        delay: 0.5,
        scrollTrigger: {
          trigger: '.features',
          start: 'top 50%',
          end: 'bottom 50%',
        },
      },
    );
    gsap.fromTo(
      '.features-text',
      { x: -20, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        ease: 'power1.inOut',
        duration: 2,
        delay: 0.5,
        scrollTrigger: {
          trigger: '.features',
          start: 'top 50%',
          end: 'bottom 50%',
        },
      },
    );
    gsap.fromTo(
      '.features-img:first-of-type',
      { x: 20, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        ease: 'power1.inOut',
        duration: 2,
        delay: 0.5,
        scrollTrigger: {
          trigger: '.features',
          start: 'top 50%',
          end: 'bottom 50%',
        },
      },
    );
    gsap.fromTo(
      '.features-img:last-of-type',
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: 'power1.inOut',
        duration: 2,
        delay: 0.5,
        scrollTrigger: {
          trigger: '.features',
          start: 'top 50%',
          end: 'bottom 50%',
        },
      },
    );
    gsap.to('.features', {
      '--active-blur': '6px',
      duration: 1,
      scrollTrigger: {
        trigger: '.features',
        start: 'top 30%',
        end: 'bottom 50%',
      },
    });
  });

  return (
    <section className="features">
      <div className="container">
        <div className="features-content">
          <div className="features-text">
            <h2>What's Included:</h2>
            <h4>Accommodation:</h4>
            <ul>
              <li>
                <img src="./check.png" />
                All nights camping, with all camping gears.
              </li>
              <li>
                <img src="./check.png" />
                High-quality double tents, with larger options available for families or couples.
              </li>
              <li>
                <img src="./check.png" />
                Comfortable mattresses, pillows, and sheets.
              </li>
              <li>
                <img src="./check.png" />
                Camping furniture including tables, chairs, and lighting.
              </li>
              <li>
                <img src="./check.png" />
                Sunshade, portable toilets, and showers.
              </li>
            </ul>
            <h4>Transport:</h4>
            <ul>
              <li>
                <img src="./check.png" />
                Airport transfers.
              </li>
              <li>
                <img src="./check.png" />
                Private 4x4 vehicle with premium service throughout the trip, including a driver and fuel.
              </li>
              <li>
                <img src="./check.png" />
                Boat trip to Shoab Beach for a Dolphin, Fishing, and Seabird tour, including life jackets.
              </li>
            </ul>
            <h4>Food and Drinks:</h4>
            <ul>
              <li>
                <img src="./check.png" />
                All meals and soft beverages tailored to your dietary preferences.
              </li>
              <li>
                <img src="./check.png" />
                Personal chef with full cooking equipment.
              </li>
            </ul>
            <h4>Activities:</h4>
            <ul>
              <li>
                <img src="./check.png" />
                All protected area fees covered.
              </li>
              <li>
                <img src="./check.png" />
                Snorkeling equipment rental.
              </li>
            </ul>
          </div>
          <div className="features-text">
            <h2>What's Not Included:</h2>
            <ul>
              <li>
                <img src="./cross.png" />
                Flight tickets
              </li>
              <li>
                <img src="./cross.png" />
                Visa fees
              </li>
              <li>
                <img src="./cross.png" />
                Hotel accommodation (optional, as camping is already included)
              </li>
            </ul>
          </div>
          <img
            className="features-img"
            src="./Dragon-blood-trees-Socotra.jpg"
          />
          <img
            className="features-img"
            src="./camel-drone-traveling-socotra.jpg"
          />
        </div>
      </div>
    </section>
  );
}
