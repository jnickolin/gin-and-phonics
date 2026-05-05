import { useState, useEffect, useRef } from 'react';
import { TAG_LABELS } from '../data/constants';
import '../styles/TagSelector.css';

export default function TagSelector({ tags, selectedTag, passageCounts = {}, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  function handleSelect(tag) {
    setIsOpen(false);
    onSelect(tag);
  }

  const label = selectedTag ? TAG_LABELS[selectedTag] || selectedTag : 'What\'s on your mind…';
  const selectedCount = selectedTag ? passageCounts[selectedTag] : null;

  return (
    <section className="selector">

      <div className="selector__wrapper" ref={wrapperRef}>
        <button
          className="selector__button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-haspopup="listbox"
        >
          <span>
            {label}
            {selectedCount != null && (
              <span className="selector__count"> · {selectedCount}</span>
            )}
          </span>
          <span className={`selector__arrow ${isOpen ? 'selector__arrow--open' : ''}`}>
            ▾
          </span>
        </button>

        {isOpen && (
          <ul className="selector__list" role="listbox">
            {tags.map((tag) => (
              <li key={tag}>
                <button
                  className={`selector__item ${tag === selectedTag ? 'selector__item--active' : ''}`}
                  onClick={() => handleSelect(tag)}
                  role="option"
                  aria-selected={tag === selectedTag}
                >
                  {TAG_LABELS[tag] || tag}
                  {passageCounts[tag] != null && (
                    <span className="selector__count"> · {passageCounts[tag]}</span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
