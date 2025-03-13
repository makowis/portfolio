import React from 'react';
import { render } from '@testing-library/react';
import Page from '../../app/page';

it('renders correctly', () => {
  const { container } = render(<Page />);
  expect(container).toMatchSnapshot();
});
