import PassageDisplay from './PassageDisplay';
import RecipeCard from './RecipeCard';
import EditorNote from './EditorNote';
import '../styles/ContentSection.css';

export default function ContentSection({
  passage,
  recipe,
  isRevealed,
  canShuffle,
  isExhausted,
  canGoBack,
  onShuffle,
  onReset,
  onBack,
}) {
  return (
    <section
      className={`content-section ${isRevealed ? 'content-section--visible' : 'content-section--hidden'}`}
    >
      <div className="content-section__bar">
        <div className="content-section__bar-left">
          {canGoBack && (
            <button
              className="content-section__shuffle"
              onClick={onBack}
              title="Go back to previous passage"
            >
              ← Back
            </button>
          )}
        </div>
        <div className="content-section__bar-right">
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
      </div>

      <div className="content-section__grid">
        <div className="content-section__col">
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
          {!isExhausted && (
            <EditorNote label="From the editor" body={passage.note} />
          )}
        </div>

        <div className="content-section__col">
          <RecipeCard recipe={recipe} />
          <EditorNote label="Bartender's note" body={recipe?.note} />
        </div>
      </div>
    </section>
  );
}
