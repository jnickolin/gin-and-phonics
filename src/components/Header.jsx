import '../styles/Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        Gin <span className="header__amp">&amp;</span> Phonics
      </div>
      <p className="header__tagline">
        For wallows, cheerings up, and parties — both pity and regular.
      </p>
    </header>
  );
}
