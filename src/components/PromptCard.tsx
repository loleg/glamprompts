
import React, { useState } from 'react';
import './PromptCard.css';
import CategoryBadge from './CategoryBadge';
import type { Prompt } from '../types';

interface PromptCardProps {
  prompt: Prompt;
}

function PromptCard({ prompt }: PromptCardProps) {
  const [expanded, setExpanded] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(prompt.prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  return (
    <div className={`prompt-card ${expanded ? 'prompt-card--expanded' : ''}`}>
      <div className="prompt-card-header">
        <CategoryBadge category={prompt.category} />
        <span className="prompt-card-id">#{prompt.id}</span>
      </div>
      <h3 className="prompt-card-question">{prompt.question}</h3>
      <div className={`prompt-card-body ${expanded ? 'prompt-card-body--open' : ''}`}>
        <div className="prompt-card-prompt">
          <div className="prompt-label">Prompt</div>
          <p>{prompt.prompt}</p>
        </div>
        {prompt.contributor && (
          <div className="prompt-card-meta">
            <span>Contributed by <strong>{prompt.contributor}</strong></span>
            <span>{prompt.date}</span>
          </div>
        )}
        <button className="copy-btn" onClick={handleCopy}>
          {copied ? '✓ Copied!' : '⧉ Copy Prompt'}
        </button>
      </div>
      <button
        className="prompt-card-toggle"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? 'Collapse ▲' : 'View Prompt ▼'}
      </button>
    </div>
  );
}

export default PromptCard;
