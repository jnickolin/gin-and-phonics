import { useState } from 'react';
import LandingPage from './components/LandingPage';
import Header from './components/Header';
import TagSelector from './components/TagSelector';
import ContentSection from './components/ContentSection';
import EmptyState from './components/EmptyState';
import Footer from './components/Footer';
import usePassageSelection from './hooks/usePassageSelection';
import { getAllTags, getPassageCountsByTag } from './utils/passages';
import './styles/Layout.css';

const tags = getAllTags();
const passageCounts = getPassageCountsByTag();

export default function App() {
  const [showLanding, setShowLanding] = useState(true);
  const {
    selectedTag,
    passage,
    recipe,
    isRevealed,
    canShuffle,
    isExhausted,
    selectTag,
    shuffle,
    resetShuffle,
  } = usePassageSelection();

  if (showLanding) {
    return <LandingPage onEnter={() => setShowLanding(false)} />;
  }

  return (
    <div className="page">
      <Header onLogoClick={() => setShowLanding(true)} />
      <TagSelector
        tags={tags}
        selectedTag={selectedTag}
        passageCounts={passageCounts}
        onSelect={selectTag}
      />
      {passage ? (
        <ContentSection
          passage={passage}
          recipe={recipe}
          isRevealed={isRevealed}
          canShuffle={canShuffle}
          isExhausted={isExhausted}
          onShuffle={shuffle}
          onReset={resetShuffle}
        />
      ) : (
        <EmptyState />
      )}
      <Footer />
    </div>
  );
}
