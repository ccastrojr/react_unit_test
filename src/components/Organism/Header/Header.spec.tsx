import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as hookCart from '../../../hooks/Cart';

import Header from '.';
import cartProductMock from '../../../mocks/cartProductMock';

describe('Header component tests', () => {
  test('renders without crashing and click in links', () => {
    jest.spyOn(hookCart, 'useCart').mockReturnValue({
      products: [{ ...cartProductMock }],
      getTotalPrice: 20,
      addToCart: jest.fn(),
      removeToCart: jest.fn(),
    });

    const { getAllByText, getByTestId, getAllByTestId } = render(<Header />, {
      wrapper: BrowserRouter,
    });

    const hamburgerBtn = getByTestId('hamburguer_btn_container');
    const buyButton = getAllByText('Nossos Produtos');
    const cartButton = getAllByTestId('cart_link_component');

    // Desktop
    userEvent.click(cartButton[0]);
    expect(global.window.location.pathname).toEqual('/cart');
    userEvent.click(buyButton[0]);
    expect(global.window.location.pathname).toEqual('/');

    // Mobile
    userEvent.click(hamburgerBtn);
    userEvent.click(cartButton[1]);
    expect(global.window.location.pathname).toEqual('/cart');
    userEvent.click(buyButton[1]);
    expect(global.window.location.pathname).toEqual('/');
  });
});
