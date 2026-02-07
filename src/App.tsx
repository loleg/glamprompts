
import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import LibraryPage from './features/library/LibraryPage';
import ContributePage from './features/contribute/ContributePage';
import LabPage from './features/lab/LabPage';
import ToolsPage from './features/tools/ToolsPage';
import { persistence } from './utils/persistence';
import { seedPrompts } from './data/seedPrompts';
import type { Prompt } from './types';

export type Page = 'library' | 'contribute' | 'lab' | 'tools';

function App() {
  const [page, setPage] = useState<Page>('library');
  const [prompts, setPrompts] = useState<Prompt[]>([]);
  const [loaded, setLoaded] = useState(false);
  const stored = persistence((state) => state.prompts);

  useEffect(() => {
    (async () => {
      if (stored) {
        try {
          setPrompts(JSON.parse(stored));
        } catch {
          setPrompts(seedPrompts);
          persistence.prompts = JSON.stringify(seedPrompts);
        }
      } else {
        setPrompts(seedPrompts);
        persistence.prompts = JSON.stringify(seedPrompts);
      }
      setLoaded(true);
    })();
  }, []);

  const addPrompt = async (prompt: Prompt) => {
    const updated = [...prompts, prompt];
    setPrompts(updated);
    await persistence.set({ prompts: JSON.stringify(updated) });
  };

  if (!loaded) {
    return (
      <div className="app-loading">
        <div className="loading-spinner" />
        <p>Loading GLAMprompt…</p>
      </div>
    );
  }

  return (
    <div className="app">
      <Header currentPage={page} onNavigate={setPage} />
      <main className="app-main">
        {page === 'library' && <LibraryPage prompts={prompts} />}
        {page === 'lab' && <LabPage />}
        {page === 'contribute' && <ContributePage onSubmit={addPrompt} onNavigate={setPage} />}
        {page === 'tools' && <ToolsPage />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
