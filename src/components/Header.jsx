import '../styles/Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="header__rule" />
      <h1 className="header__masthead">Gin &amp; Phonics</h1>
      <p className="header__tagline">A reading. A recipe. A reason to linger.</p>
      <div className="header__rule" />
    </header>
  );
}
