import { TAG_LABELS } from '../data/constants';
import PassageDisplay from './PassageDisplay';
import RecipeCard from './RecipeCard';
import '../styles/ContentSection.css';

export default function ContentSection({
  selectedTag,
  passage,
  recipe,
  isRevealed,
  canShuffle,
  onShuffle,
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
      </div>

      <div className="content-section__grid">
        <PassageDisplay passage={passage} />
        <RecipeCard recipe={recipe} />
      </div>
    </section>
  );
}
