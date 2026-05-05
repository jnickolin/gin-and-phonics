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
  const [seenPassages, setSeenPassages] = useState(new Set());

  /** Select a new tag — picks a random passage + the paired recipe. */
  const selectTag = useCallback((tag) => {
    setIsRevealed(false);
    setTimeout(() => {
      const nextPassage = getRandomPassage(tag);
      setSelectedTag(tag);
      setPassage(nextPassage);
      setRecipe(getRecipeForTag(tag));
      setSeenPassages(new Set([nextPassage]));
      setIsRevealed(true);
    }, 150);
  }, []);

  /** Shuffle to an unseen passage within the current tag. */
  const shuffle = useCallback(() => {
    if (!selectedTag) return;
    setIsRevealed(false);
    setTimeout(() => {
      const nextPassage = getRandomPassage(selectedTag, seenPassages);
      setPassage(nextPassage);
      setSeenPassages((prev) => new Set([...prev, nextPassage]));
      setIsRevealed(true);
    }, 150);
  }, [selectedTag, seenPassages]);

  /** Reset seen history and pick a fresh random passage. */
  const resetShuffle = useCallback(() => {
    if (!selectedTag) return;
    setIsRevealed(false);
    setTimeout(() => {
      const nextPassage = getRandomPassage(selectedTag);
      setPassage(nextPassage);
      setSeenPassages(new Set([nextPassage]));
      setIsRevealed(true);
    }, 150);
  }, [selectedTag]);

  const totalForTag = selectedTag ? getPassagesByTag(selectedTag).length : 0;
  const isExhausted = totalForTag > 1 && seenPassages.size >= totalForTag;
  const canShuffle = totalForTag > 1 && !isExhausted;

  return {
    selectedTag,
    passage,
    recipe,
    isRevealed,
    canShuffle,
    isExhausted,
    selectTag,
    shuffle,
    resetShuffle,
  };
}
