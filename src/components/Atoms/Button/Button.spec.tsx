import React from 'react';
import { render } from '@testing-library/react';

import Button from '.';

describe('Button component tests', () => {
  test('renders without crashing', () => {
    const { getByTestId } = render(<Button size="default" />);

    expect(getByTestId('pure_button')).toBeInTheDocument();
  });
});
