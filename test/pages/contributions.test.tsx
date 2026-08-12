import { render, screen } from '@testing-library/react';
import Contributions from '../../app/_components/organisms/contributions';

// The calendar fetches the GitHub contribution API on mount, so it is stubbed out.
jest.mock('react-github-calendar', () => ({
  GitHubCalendar: () => <div data-testid="github-calendar" />,
}));

describe('Contributions', () => {
  it('renders the calendar once the client only chunk has loaded', async () => {
    render(<Contributions />);

    expect(await screen.findByTestId('github-calendar')).toBeInTheDocument();
  });

  it('links to the GitHub profile', () => {
    render(<Contributions />);

    expect(
      screen.getByRole('link', { name: '@makowis on GitHub' }),
    ).toHaveAttribute('href', 'https://github.com/makowis');
  });
});
