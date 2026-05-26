import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TagListView } from './TagListView';
import { describe, it, expect, vi } from 'vitest';

describe('TagListView Component', () => {
  it('renders all passed tags', () => {
    // Arrange
    const tags = ['react', 'typescript', 'vitest'];
    const mockOnRemoveTag = vi.fn();

    // Act
    render(<TagListView tags={tags} onRemoveTag={mockOnRemoveTag} />);

    // Assert
    expect(screen.getByText('react')).toBeInTheDocument();
    expect(screen.getByText('typescript')).toBeInTheDocument();
    expect(screen.getByText('vitest')).toBeInTheDocument();
  });

  it('calls onRemoveTag with correct tag when x button is clicked', async () => {
    // Arrange
    const user = userEvent.setup();
    const tags = ['react', 'typescript'];
    const mockOnRemoveTag = vi.fn();

    render(<TagListView tags={tags} onRemoveTag={mockOnRemoveTag} />);

    // Act
    const removeButton = screen.getByRole('button', { name: /remove typescript/i });
    await user.click(removeButton);

    // Assert
    expect(mockOnRemoveTag).toHaveBeenCalledTimes(1);
    expect(mockOnRemoveTag).toHaveBeenCalledWith('typescript');
  });
});
