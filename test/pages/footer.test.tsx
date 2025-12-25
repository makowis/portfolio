import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../../app/_layout/footer';

describe('Footer', () => {
  it('renders correctly', () => {
    const { container } = render(<Footer />);
    expect(container).toMatchSnapshot();
  });

  it('renders the link to GitHub', () => {
    render(<Footer />);
    const link = screen.getByRole('link', { name: /Powered by mako_wis/i });
    expect(link).toHaveAttribute('href', 'https://github.com/makowis');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
