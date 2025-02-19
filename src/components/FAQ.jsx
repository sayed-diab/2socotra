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
              <img src="./faq-imgs/Dragon-Blood-Trees.jpg" />
            </div>
            <div className="faq-text-img">
              <img src="./faq-imgs/Sand-dunes-Socotra.jpg" />
            </div>
          </div>
          <div className="faq-img-row">
            <div className="faq-text-img">
              <img src="./faq-imgs/Blue-lagoon-Socotra.jpg" />
            </div>
            <div className="faq-text-img">
              <img src="./faq-imgs/dragon-blood.jpg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
