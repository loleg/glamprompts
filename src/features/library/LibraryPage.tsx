
import React, { useState, useMemo } from 'react';
import './LibraryPage.css';
import SearchBar from '../../components/SearchBar';
import CategoryBadge from '../../components/CategoryBadge';
import PromptCard from '../../components/PromptCard';
import { CATEGORIES } from '../../types';
import type { Prompt } from '../../types';

interface LibraryPageProps {
  prompts: Prompt[];
}

function LibraryPage({ prompts }: LibraryPageProps) {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return prompts.filter((p) => {
      const matchesCategory = !activeCategory || p.category === activeCategory;
      const query = search.toLowerCase();
      const matchesSearch =
        !query ||
        p.question.toLowerCase().includes(query) ||
        p.prompt.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [prompts, search, activeCategory]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    prompts.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, [prompts]);

  return (
    <div className="library-page">
      <div className="library-hero">
        <div className="hero-decoration">
          <div className="hero-circle hero-circle--1" />
          <div className="hero-circle hero-circle--2" />
          <div className="hero-circle hero-circle--3" />
        </div>
        <h1 className="library-title">
          Discover prompts for <span className="highlight">OpenGLAM</span>
        </h1>
        <p className="library-subtitle">
          A curated library of AI prompts for galleries, libraries, archives, and museums.
          Explore, copy, and adapt prompts for your digital literacy programs.
        </p>
        <SearchBar value={search} onChange={setSearch} />
      </div>

      <div className="library-filters">
        <button
          className={`filter-all ${!activeCategory ? 'filter-all--active' : ''}`}
          onClick={() => setActiveCategory(null)}
        >
          All ({prompts.length})
        </button>
        {CATEGORIES.map((cat) => (
          <CategoryBadge
            key={cat}
            category={cat}
            size="md"
            active={activeCategory === cat}
            onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
          />
        ))}
      </div>

      <div className="library-stats">
        <span>{filtered.length} prompt{filtered.length !== 1 ? 's' : ''} found</span>
        {activeCategory && (
          <button className="clear-filter" onClick={() => setActiveCategory(null)}>
            Clear filter ✕
          </button>
        )}
      </div>

      <div className="library-grid">
        {filtered.map((p) => (
          <PromptCard key={p.id} prompt={p} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="library-empty">
          <div className="empty-icon">◇</div>
          <h3>No prompts found</h3>
          <p>Try adjusting your search or filters.</p>
        </div>
      )}
    </div>
  );
}

export default LibraryPage;
