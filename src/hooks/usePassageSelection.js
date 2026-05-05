import { useState, useCallback } from 'react';
import { getRandomPassage, getRecipeForTag, getPassagesByTag } from '../utils/passages';

export default function usePassageSelection() {
  const [selectedTag, setSelectedTag] = useState('');
  const [passage, setPassage] = useState(null);
  const [recipe, setRecipe] = useState(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const selectTag = useCallback((tag) => {
    setIsRevealed(false);
    setTimeout(() => {
      const nextPassage = getRandomPassage(tag);
      setSelectedTag(tag);
      setPassage(nextPassage);
      setRecipe(getRecipeForTag(tag));
      setHistory([nextPassage]);
      setHistoryIndex(0);
      setIsRevealed(true);
    }, 150);
  }, []);

  const shuffle = useCallback(() => {
    if (!selectedTag) return;
    setIsRevealed(false);
    setTimeout(() => {
      const seen = new Set(history.slice(0, historyIndex + 1));
      const nextPassage = getRandomPassage(selectedTag, seen);
      const newHistory = [...history.slice(0, historyIndex + 1), nextPassage];
      setHistory(newHistory);
      setHistoryIndex(newHistory.length - 1);
      setPassage(nextPassage);
      setIsRevealed(true);
    }, 150);
  }, [selectedTag, history, historyIndex]);

  const goBack = useCallback(() => {
    setIsRevealed(false);
    setTimeout(() => {
      const newIndex = historyIndex - 1;
      setHistoryIndex(newIndex);
      setPassage(history[newIndex]);
      setIsRevealed(true);
    }, 150);
  }, [history, historyIndex]);

  const resetShuffle = useCallback(() => {
    if (!selectedTag) return;
    setIsRevealed(false);
    setTimeout(() => {
      const nextPassage = getRandomPassage(selectedTag);
      setPassage(nextPassage);
      setHistory([nextPassage]);
      setHistoryIndex(0);
      setIsRevealed(true);
    }, 150);
  }, [selectedTag]);

  const totalForTag = selectedTag ? getPassagesByTag(selectedTag).length : 0;
  const isExhausted = totalForTag > 1 && historyIndex + 1 >= totalForTag;
  const canShuffle = totalForTag > 1 && !isExhausted;
  const canGoBack = historyIndex > 0;

  return {
    selectedTag,
    passage,
    recipe,
    isRevealed,
    canShuffle,
    isExhausted,
    canGoBack,
    selectTag,
    shuffle,
    goBack,
    resetShuffle,
  };
}
