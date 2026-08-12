import { render, screen } from '@testing-library/react';
import Skills from '../../app/_components/organisms/skills';

describe('Skills', () => {
  it('renders every category as a level 3 heading', () => {
    render(<Skills />);

    ['Language', 'Application Framework', 'DevOps / Cloud'].forEach((name) => {
      expect(
        screen.getByRole('heading', { level: 3, name }),
      ).toBeInTheDocument();
    });
  });

  it('renders the skills of each category', () => {
    render(<Skills />);

    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(screen.getByText('Next.js')).toBeInTheDocument();
    expect(screen.getByText('Docker')).toBeInTheDocument();
  });
});
