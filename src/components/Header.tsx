
import React, { useState } from 'react';
import './Header.css';
import type { Page } from '../App';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const navItems: { page: Page; label: string }[] = [
  { page: 'library', label: 'Prompt Library' },
  { page: 'lab', label: 'Innovation Lab' },
  { page: 'contribute', label: 'Contribute' },
  { page: 'tools', label: 'Tools & Credits' },
];

function Header({ currentPage, onNavigate }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-inner">
        <button className="header-logo" onClick={() => onNavigate('library')}>
          <span className="logo-icon">◆</span>
          <span className="logo-text">GLAM<span className="logo-accent">prompt</span></span>
        </button>
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={`header-nav ${menuOpen ? 'header-nav--open' : ''}`}>
          {navItems.map((item) => (
            <button
              key={item.page}
              className={`nav-link ${currentPage === item.page ? 'nav-link--active' : ''}`}
              onClick={() => { onNavigate(item.page); setMenuOpen(false); }}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
