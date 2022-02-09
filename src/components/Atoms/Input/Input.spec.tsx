import React from 'react';
import { render } from '@testing-library/react';

import Input from '.';

describe('Input component tests', () => {
  test('renders without crashing', () => {
    const { getByTestId } = render(<Input format="default" />);

    expect(getByTestId('pure_input')).toBeInTheDocument();
  });
});
