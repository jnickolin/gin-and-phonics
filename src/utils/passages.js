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
 * Returns a single random passage for the given tag, excluding any in excludeSet.
 * Falls back to the full pool if all passages are excluded.
 */
export function getRandomPassage(tag, excludeSet = null) {
  const matches = getPassagesByTag(tag);
  if (matches.length === 0) return null;
  const pool =
    excludeSet && excludeSet.size < matches.length
      ? matches.filter((p) => !excludeSet.has(p))
      : matches;
  return pool[Math.floor(Math.random() * pool.length)];
}

/**
 * Returns the recipe paired with a given tag, or null.
 */
export function getRecipeForTag(tag) {
  return recipes[tag] || null;
}

/**
 * Returns a map of tag → passage count for all tags.
 */
export function getPassageCountsByTag() {
  return passages.reduce((acc, p) => {
    if (p.tag) acc[p.tag] = (acc[p.tag] || 0) + 1;
    return acc;
  }, {});
}
