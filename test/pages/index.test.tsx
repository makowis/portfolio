import React from 'react';
import { render } from '@testing-library/react';
import Home from '../../app/page';

it('renders correctly', () => {
  const { container } = render(<Home />);
  expect(container.childNodes).toMatchSnapshot();
});
