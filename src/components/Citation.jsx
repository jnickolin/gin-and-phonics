import '../styles/Citation.css';

export default function Citation({ passage }) {
  const parts = [];
  if (passage.author) parts.push(passage.author);
  if (passage.pieceTitle) parts.push(`"${passage.pieceTitle}"`);
  if (passage.publishedIn) parts.push(passage.publishedIn);

  if (parts.length === 0 && !passage.link) return null;

  return (
    <div className="citation">
      <span className="citation__dash">—</span>
      {parts.join(', ')}
      {passage.link && (
        <>
          {' '}
          <a
            href={passage.link}
            target="_blank"
            rel="noopener noreferrer"
            className="citation__link"
          >
            Source ↗
          </a>
        </>
      )}
    </div>
  );
}
