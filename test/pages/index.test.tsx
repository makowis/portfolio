import React from 'react';
import { render } from '@testing-library/react';
import Page from '../../app/page';

// Mock the async Instagram component
jest.mock('../../app/_components/organisms/instagram', () => {
  return {
    __esModule: true,
    default: () => <div>Mocked Instagram</div>,
  };
});

it('renders correctly', async () => {
  const jsx = await Page();
  const { container } = render(jsx);
  expect(container).toMatchSnapshot();
});
