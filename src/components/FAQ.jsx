import './FAQ.css';
import Collapes from './Collapse.jsx';
export default function FAQ() {
  return (
    <section className="faq">
      <div className="wraper">
        <Collapes />
        <div className="faq-img">
          <div className="faq-img-row">
            <div className="faq-text-img">
              <img src="./faq-imgs/Sand-dunes-Socotra.webp" />
            </div>
            <div className="faq-text-img">
              <img src="./faq-imgs/Dragon-Blood-Trees.webp" />
            </div>
          </div>
          <div className="faq-img-row">
            <div className="faq-text-img">
              <img src="./faq-imgs/Blue-lagoon-Socotra.webp" />
            </div>
            <div className="faq-text-img">
              <img src="./faq-imgs/dragon-blood.webp" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
