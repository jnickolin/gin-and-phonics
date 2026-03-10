import passages from '../data/passages';
import recipes from '../data/recipes';

/**
 * Returns a sorted, deduplicated array of all tags present in the passages data.
 */
export function getAllTags() {
  const tagSet = new Set(
    passages.map((p) => p.tag).filter(Boolean)
  );
  return [...tagSet].sort();
}

/**
 * Returns all passages that match the given tag.
 */
export function getPassagesByTag(tag) {
  return passages.filter((p) => p.tag === tag);
}

/**
 * Returns a single random passage for the given tag.
 */
export function getRandomPassage(tag) {
  const matches = getPassagesByTag(tag);
  if (matches.length === 0) return null;
  return matches[Math.floor(Math.random() * matches.length)];
}

/**
 * Returns the recipe paired with a given tag, or null.
 */
export function getRecipeForTag(tag) {
  return recipes[tag] || null;
}
