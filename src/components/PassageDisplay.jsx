import Citation from './Citation';
import '../styles/PassageDisplay.css';

export default function PassageDisplay({ passage }) {
  const displayTitle = passage.title || passage.pieceTitle;

  return (
    <div className="passage">
      <div className="passage__label">Reading</div>

      {displayTitle && <h3 className="passage__title">{displayTitle}</h3>}

      <div className="passage__content">
        {passage.content.split('\n').map((line, i) => (
          <span key={i}>
            {line}
            <br />
          </span>
        ))}
      </div>

      <Citation passage={passage} />
    </div>
  );
}
