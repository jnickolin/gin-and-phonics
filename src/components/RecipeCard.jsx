import '../styles/RecipeCard.css';

export default function RecipeCard({ recipe }) {
  if (!recipe) return null;

  return (
    <div className="recipe">
      <div className="recipe__label">
        {recipe.type === 'cocktail' ? 'Cocktail Pairing' : 'Non-Alcoholic Pairing'}
      </div>

      <h3 className="recipe__name">{recipe.name}</h3>
      <p className="recipe__why">{recipe.why}</p>

      <div className="recipe__divider" />

      <h4 className="recipe__subhead">Ingredients</h4>
      <ul className="recipe__ingredients">
        {recipe.ingredients.map((ing, i) => (
          <li key={i} className="recipe__ingredient">
            {ing}
          </li>
        ))}
      </ul>

      <h4 className="recipe__subhead">Method</h4>
      <p className="recipe__method">{recipe.instructions}</p>

      {recipe.source && (
        <div className="recipe__source">
          Recipe: {recipe.source.author}
          {recipe.source.publication && `, ${recipe.source.publication}`}
          {recipe.source.link && (
            <>
              {' '}
              <a
                href={recipe.source.link}
                target="_blank"
                rel="noopener noreferrer"
                className="citation__link"
              >
                Source ↗
              </a>
            </>
          )}
        </div>
      )}

      {recipe.note && (
        <div className="recipe__note">
          <div className="recipe__note-label">Editor's note</div>
          <div className="recipe__note-text">{recipe.note}</div>
        </div>
      )}
    </div>
  );
}
