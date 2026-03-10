import { useState, useCallback } from 'react';
import { getRandomPassage, getRecipeForTag, getPassagesByTag } from '../utils/passages';

/**
 * Manages the selected tag, current passage, current recipe,
 * and the reveal animation toggle.
 */
export default function usePassageSelection() {
  const [selectedTag, setSelectedTag] = useState('');
  const [passage, setPassage] = useState(null);
  const [recipe, setRecipe] = useState(null);
  const [isRevealed, setIsRevealed] = useState(false);

  /** Select a new tag — picks a random passage + the paired recipe. */
  const selectTag = useCallback((tag) => {
    setIsRevealed(false);
    setTimeout(() => {
      setSelectedTag(tag);
      setPassage(getRandomPassage(tag));
      setRecipe(getRecipeForTag(tag));
      setIsRevealed(true);
    }, 150);
  }, []);

  /** Shuffle to another random passage within the current tag. */
  const shuffle = useCallback(() => {
    if (!selectedTag) return;
    setIsRevealed(false);
    setTimeout(() => {
      setPassage(getRandomPassage(selectedTag));
      setIsRevealed(true);
    }, 150);
  }, [selectedTag]);

  const canShuffle = selectedTag
    ? getPassagesByTag(selectedTag).length > 1
    : false;

  return {
    selectedTag,
    passage,
    recipe,
    isRevealed,
    canShuffle,
    selectTag,
    shuffle,
  };
}
