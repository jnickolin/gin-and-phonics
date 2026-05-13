import '../styles/LandingPage.css';
import exLibrisImage from '../assets/images/lp-ex-libris.png';
import bookstoreImage from '../assets/images/lp-bookstore.JPG';
import bookstoreImageMobile from '../assets/images/lp-bookstore-m.JPG';
import arrowIcon from '../assets/images/brown-arrow-icon.png';

export default function LandingPage({ onEnter }) {
  return (
    <div className="landing">
      <div className="landing__header">
        <div className="landing__lockup">
          <div className="landing__est">Est. 2026</div>
          <h1 className="landing__title">
            Gin &amp; Phonics
          </h1>
          <p className="landing__p">A digital archive for passages and recipes I'd save from a flood.</p>
          <p className="landing__p">Currently working on a way to accept suggestions for additions.</p>
        </div>
        <button className="landing__cta" onClick={onEnter}><img src={arrowIcon} alt="Red Arrow" /></button>
        <img className="landing__exlibris" src={exLibrisImage} alt="Ex Libris JoAnn Nickolin" />
      </div>
      <div className="landing__notes">
        <p className="landing__tagline">For wallows, cheerings up, and parties — both pity and regular.</p>
        <p className="landing__explain">Words compiled with love. Recipes paired somewhat haphazardly.</p>
      </div>
      <picture>
        <source media="(max-width: 1124px)" srcSet={bookstoreImageMobile} />
        <img className="landing__image" src={bookstoreImage} alt="Spellbinder Bookstore in Lone Pine, CA" />
      </picture>
    </div>
  );
}
