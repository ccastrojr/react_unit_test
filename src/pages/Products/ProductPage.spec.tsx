import React from 'react';
import { render } from '@testing-library/react';

import Products from '.';

describe('Product page tests', () => {
  test('render without crashing', () => {
    const { getByTestId } = render(<Products />);

    const wrapperSection = getByTestId('product_list_wrapper');
    expect(wrapperSection).toBeInTheDocument();
  });
});
