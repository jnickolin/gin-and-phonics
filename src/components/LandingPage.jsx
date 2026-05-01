import '../styles/LandingPage.css';

export default function LandingPage({ onEnter }) {
  return (
    <div className="landing">
      <div className="landing__byline">Est. Whenever · By Jojo N.</div>
      <h1 className="landing__title">
        Gin <span className="landing__amp">&amp;</span> Phonics
      </h1>
      <div className="landing__rule" />
      <p className="landing__tagline">
        For wallows, cheerings up, and parties — both pity and regular.
      </p>
      <p className="landing__explain">
        Words compiled with love. Recipes paired somewhat haphazardly.
      </p>
      <button className="landing__cta" onClick={onEnter}>
        What's on your mind
      </button>
      <div className="landing__deco">~ a literary cocktail bar ~</div>
    </div>
  );
}
