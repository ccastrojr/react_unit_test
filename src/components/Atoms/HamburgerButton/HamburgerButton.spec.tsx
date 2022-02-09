import React from 'react';
import { render } from '@testing-library/react';

import HamburgerButton from '.';

describe('HamburgerButton component tests', () => {
  it('renders without crashing', () => {
    const { getByTestId } = render(<HamburgerButton checked={false} />);

    expect(getByTestId('hamburger_button')).toBeInTheDocument();
  });
});
