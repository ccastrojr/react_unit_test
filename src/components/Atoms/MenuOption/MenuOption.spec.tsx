import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import userEvent from '@testing-library/user-event';
import MenuOption from '.';

describe('MenuOption component tests', () => {
  test('renders without crashing', () => {
    const { getByText } = render(<MenuOption label="Button Test" to="/" />, {
      wrapper: BrowserRouter,
    });

    expect(getByText('Button Test')).toBeInTheDocument();
  });

  test('click to redirect', () => {
    const { getByText } = render(<MenuOption label="Button Test" to="/url" />, {
      wrapper: BrowserRouter,
    });

    const link = getByText('Button Test');

    userEvent.click(link);
    expect(global.window.location.pathname).toEqual('/url');
  });
});
