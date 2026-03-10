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
  const {
    selectedTag,
    passage,
    recipe,
    isRevealed,
    canShuffle,
    selectTag,
    shuffle,
  } = usePassageSelection();

  return (
    <div className="page">
      <Header />

      <TagSelector
        tags={tags}
        selectedTag={selectedTag}
        onSelect={selectTag}
      />

      {passage ? (
        <ContentSection
          selectedTag={selectedTag}
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
