import { render, screen } from '@testing-library/react';
import Hero from '../../app/_components/organisms/hero';

describe('Hero', () => {
  it('renders the name as the page level 1 heading', () => {
    render(<Hero />);

    expect(
      screen.getByRole('heading', { level: 1, name: 'Henmi Makoto' }),
    ).toBeInTheDocument();
  });

  it('renders the icon with alternative text', () => {
    render(<Hero />);

    expect(screen.getByAltText('Henmi Makoto')).toBeInTheDocument();
  });

  it('renders the description', () => {
    render(<Hero />);

    expect(
      screen.getByText('ポートフォリオサイトという名のリンク集'),
    ).toBeInTheDocument();
  });
});
