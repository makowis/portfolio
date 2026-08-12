import { render, screen } from '@testing-library/react';
import Links from '../../app/_components/organisms/links';

describe('Links', () => {
  it('renders every link', () => {
    render(<Links />);

    expect(screen.getAllByRole('link')).toHaveLength(6);
  });

  it('opens every external link without leaking the opener', () => {
    render(<Links />);

    screen.getAllByRole('link').forEach((link) => {
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  it('points each link at the expected destination', () => {
    render(<Links />);

    expect(screen.getByRole('link', { name: 'GitHub' })).toHaveAttribute(
      'href',
      'https://github.com/makowis',
    );
    expect(screen.getByRole('link', { name: 'Twitter' })).toHaveAttribute(
      'href',
      'https://twitter.com/mako_wis',
    );
  });
});
