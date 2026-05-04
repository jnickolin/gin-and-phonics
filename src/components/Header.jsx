import '../styles/Header.css';

export default function Header({ onLogoClick }) {
  return (
    <header className="header">
      <button className="header__logo" onClick={onLogoClick}>
        Gin <span className="header__amp">&amp;</span> Phonics
      </button>
      <p className="header__tagline">
        For wallows, cheerings up, and parties — both pity and regular.
      </p>
    </header>
  );
}
