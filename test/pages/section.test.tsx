import { render, screen } from '@testing-library/react';
import Section from '../../app/_components/atoms/section';

describe('Section', () => {
  it('renders the given title as a level 2 heading', () => {
    render(
      <Section title="Skills">
        <p>content</p>
      </Section>,
    );

    expect(
      screen.getByRole('heading', { level: 2, name: 'Skills' }),
    ).toBeInTheDocument();
  });

  it('renders its children', () => {
    render(
      <Section title="Links">
        <p>content</p>
      </Section>,
    );

    expect(screen.getByText('content')).toBeInTheDocument();
  });
});
