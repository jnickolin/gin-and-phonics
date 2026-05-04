import { useState } from 'react';
import LandingPage from './components/LandingPage';
import Header from './components/Header';
import TagSelector from './components/TagSelector';
import ContentSection from './components/ContentSection';
import EmptyState from './components/EmptyState';
import Footer from './components/Footer';
import usePassageSelection from './hooks/usePassageSelection';
import { getAllTags } from './utils/passages';
import './styles/Layout.css';

const tags = getAllTags();

export default function App() {
  const [showLanding, setShowLanding] = useState(true);
  const {
    selectedTag,
    passage,
    recipe,
    isRevealed,
    canShuffle,
    selectTag,
    shuffle,
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
        onSelect={selectTag}
      />
      {passage ? (
        <ContentSection
          passage={passage}
          recipe={recipe}
          isRevealed={isRevealed}
          canShuffle={canShuffle}
          onShuffle={shuffle}
        />
      ) : (
        <EmptyState />
      )}
      <Footer />
    </div>
  );
}
