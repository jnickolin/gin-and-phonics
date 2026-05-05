import PassageDisplay from './PassageDisplay';
import RecipeCard from './RecipeCard';
import '../styles/ContentSection.css';

export default function ContentSection({
  passage,
  recipe,
  isRevealed,
  canShuffle,
  isExhausted,
  onShuffle,
  onReset,
}) {
  return (
    <section
      className={`content-section ${isRevealed ? 'content-section--visible' : 'content-section--hidden'}`}
    >
      <div className="content-section__bar">
        {canShuffle && (
          <button
            className="content-section__shuffle"
            onClick={onShuffle}
            title="Show another passage"
          >
            Anotha one ↻
          </button>
        )}
        {isExhausted && (
          <button
            className="content-section__shuffle"
            onClick={onReset}
            title="Start over from the beginning"
          >
            Pour another round ↻
          </button>
        )}
      </div>

      <div className="content-section__grid">
        {isExhausted ? (
          <div className="content-section__barrel-kicked">
            <p className="content-section__barrel-kicked-heading">The barrel is kicked.</p>
            <p className="content-section__barrel-kicked-body">
              You&rsquo;ve read every passage for this theme. Pour another round to go again.
            </p>
          </div>
        ) : (
          <PassageDisplay passage={passage} />
        )}
        <RecipeCard recipe={recipe} />
      </div>
    </section>
  );
}
