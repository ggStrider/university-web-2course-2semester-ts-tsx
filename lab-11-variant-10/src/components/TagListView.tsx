import React from 'react';
import { TagListProps } from './TagList';

export const TagListView = ({ tags, onRemoveTag }: TagListProps) => {
  return (
    <ul>
      {tags.map((tag) => (
        <li key={tag}>
          <span>{tag}</span>
          <button
            aria-label={`remove ${tag}`}
            onClick={() => onRemoveTag(tag)}
          >
            x
          </button>
        </li>
      ))}
    </ul>
  );
};
