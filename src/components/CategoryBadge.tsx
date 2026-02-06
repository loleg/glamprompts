
import React from 'react';
import './CategoryBadge.css';

const categoryColors: Record<string, string> = {
  'Accessibility & Inclusion': '#e74c8b',
  'Digital Preservation & Sustainability': '#00b894',
  'Community Engagement & Participation': '#0984e3',
  'Education & Learning': '#fdcb6e',
  'Creativity & Reuse': '#6c5ce7',
};

interface CategoryBadgeProps {
  category: string;
  onClick?: () => void;
  active?: boolean;
  size?: 'sm' | 'md';
}

function CategoryBadge({ category, onClick, active, size = 'sm' }: CategoryBadgeProps) {
  const color = categoryColors[category] || '#888';
  const style: React.CSSProperties = active
    ? { background: color, color: '#fff', borderColor: color }
    : { background: `${color}15`, color, borderColor: `${color}40` };

  return (
    <button
      className={`category-badge category-badge--${size} ${onClick ? 'category-badge--clickable' : ''}`}
      style={style}
      onClick={onClick}
      type="button"
    >
      {category}
    </button>
  );
}

export default CategoryBadge;
