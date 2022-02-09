import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as hookCart from '../../../hooks/Cart';

import Cart from '.';
import cartProductMock from '../../../mocks/cartProductMock';

describe('Cart component tests', () => {
  test('renders without crashing', () => {
    jest.spyOn(hookCart, 'useCart').mockReturnValue({
      products: [],
      addToCart: jest.fn(),
      removeToCard: jest.fn(),
      getTotalPrice: 0,
    });

    const { getByTestId } = render(<Cart />, { wrapper: BrowserRouter });

    expect(getByTestId('cart_link_component')).toBeInTheDocument();
  });

  test('renders label of total items on cart', () => {
    jest.spyOn(hookCart, 'useCart').mockReturnValue({
      products: [{ ...cartProductMock }],
      getTotalPrice: 20,
      addToCart: jest.fn(),
      removeToCard: jest.fn(),
    });

    const { getByText } = render(<Cart />, { wrapper: BrowserRouter });
    const totalItemsLabel = getByText('1');

    expect(totalItemsLabel).toBeInTheDocument();
  });

  test('click on cart to redirect', () => {
    jest.spyOn(hookCart, 'useCart').mockReturnValue({
      products: [{ ...cartProductMock }],
      getTotalPrice: 20,
      addToCart: jest.fn(),
      removeToCard: jest.fn(),
    });

    const { getByTestId } = render(<Cart />, { wrapper: BrowserRouter });

    const cartButton = getByTestId('cart_link_component');
    userEvent.click(cartButton);

    expect(global.window.location.pathname).toEqual('/cart');
  });
});
