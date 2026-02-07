
import React, { useState } from 'react';
import './ContributePage.css';
import { CATEGORIES } from '../../types';
import type { Prompt, Category } from '../../types';
import type { Page } from '../../App';

interface ContributePageProps {
  onSubmit: (prompt: Prompt) => void;
  onNavigate: (page: Page) => void;
}

function ContributePage({ onSubmit, onNavigate }: ContributePageProps) {
  const [category, setCategory] = useState<string>(CATEGORIES[0]);
  const [question, setQuestion] = useState('');
  const [prompt, setPrompt] = useState('');
  const [contributor, setContributor] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!question.trim()) errs.question = 'Please enter a question or use case.';
    if (!prompt.trim()) errs.prompt = 'Please enter the prompt text.';
    if (question.trim().length < 10) errs.question = 'Question should be at least 10 characters.';
    if (prompt.trim().length < 20) errs.prompt = 'Prompt should be at least 20 characters.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const newPrompt: Prompt = {
      id: Date.now().toString(),
      category,
      question: question.trim(),
      prompt: prompt.trim(),
      contributor: contributor.trim() || 'Anonymous',
      date: new Date().toISOString().split('T')[0],
    };

    onSubmit(newPrompt);
    setSubmitted(true);
    setQuestion('');
    setPrompt('');
    setContributor('');
  };

  if (submitted) {
    return (
      <div className="contribute-page">
        <div className="contribute-success">
          <div className="success-icon">✓</div>
          <h2>Thank you for contributing!</h2>
          <p>Your prompt has been added to the GLAMprompt library.</p>
          <div className="success-actions">
            <button className="btn btn--primary" onClick={() => setSubmitted(false)}>
              Submit Another
            </button>
            <button className="btn btn--secondary" onClick={() => onNavigate('library')}>
              View Library
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="contribute-page">
      <div className="contribute-header">
        <h1>Contribute a Prompt</h1>
        <p>
          Share your AI prompts for the OpenGLAM community. Help build a shared resource for
          digital literacy programs at cultural institutions worldwide.
          <br/>
          <br/>
          <b>This is only a prototype, responses are stored only on your computer.</b>
          <br/>
          You can suggest prompts and ideas permanently here: 💡  
          <a href="https://github.com/loleg/glamprompts/issues">GitHub Issues</a>
        </p>
      </div>

      <form className="contribute-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label" htmlFor="category">Category</label>
          <select
            id="category"
            className="form-select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="question">
            Question / Use Case <span className="required">*</span>
          </label>
          <p className="form-hint">
            Describe the problem or scenario this prompt addresses.
          </p>
          <input
            id="question"
            className={`form-input ${errors.question ? 'form-input--error' : ''}`}
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="e.g., Design an accessible digital platform for…"
          />
          {errors.question && <span className="form-error">{errors.question}</span>}
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="prompt">
            Prompt Text <span className="required">*</span>
          </label>
          <p className="form-hint">
            The full prompt that can be used with an LLM or AI tool.
          </p>
          <textarea
            id="prompt"
            className={`form-textarea ${errors.prompt ? 'form-input--error' : ''}`}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Write the full prompt here…"
            rows={6}
          />
          {errors.prompt && <span className="form-error">{errors.prompt}</span>}
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="contributor">
            Your Name <span className="optional">(optional)</span>
          </label>
          <input
            id="contributor"
            className="form-input"
            type="text"
            value={contributor}
            onChange={(e) => setContributor(e.target.value)}
            placeholder="Anonymous"
          />
        </div>

        <button type="submit" className="btn btn--primary btn--large">
          Submit Prompt
        </button>
      </form>

      <div className="contribute-guidelines">
        <h3>Submission Guidelines</h3>
        <ul>
          <li>Prompts should be relevant to GLAM institutions (Galleries, Libraries, Archives, Museums).</li>
          <li>Focus on open source tools, open data, and community-driven approaches.</li>
          <li>Consider accessibility, inclusion, and ethical implications.</li>
          <li>Prompts should be actionable and detailed enough to produce useful results.</li>
          <li>All contributions are shared openly under the community's terms.</li>
        </ul>
      </div>
    </div>
  );
}

export default ContributePage;
