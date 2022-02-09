import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import * as hookCart from '../../hooks/Cart';

import Cart from '.';
import cartProductMock from '../../mocks/cartProductMock';

jest.mock('../../hooks/toast', () => {
  return {
    useToast: () => ({
      addToast: jest.fn(),
    }),
  };
});

const mockedRemoveToCart = jest.fn();

describe('Cart page component tests', () => {
  test('renders without items on cart', async () => {
    jest.spyOn(hookCart, 'useCart').mockReturnValue({
      products: [],
      getTotalPrice: 0,
      addToCart: jest.fn(),
      removeToCart: jest.fn(),
    });

    const { getByTestId } = render(<Cart />);

    expect(getByTestId('empty_cart_container')).toBeInTheDocument();
  });

  test('renders with items on cart', () => {
    jest.spyOn(hookCart, 'useCart').mockReturnValue({
      products: [{ ...cartProductMock }],
      getTotalPrice: 20,
      addToCart: jest.fn(),
      removeToCart: jest.fn(),
    });

    const { getByText } = render(<Cart />);

    const itemOnCart = getByText('Test');

    expect(itemOnCart).toBeInTheDocument();
  });

  test('remove item to cart', async () => {
    jest.spyOn(hookCart, 'useCart').mockReturnValue({
      products: [{ ...cartProductMock }],
      getTotalPrice: 20,
      addToCart: jest.fn(),
      removeToCart: mockedRemoveToCart,
    });

    const { getByTestId } = render(<Cart />);

    const itemToBeRemoved = getByTestId('remove_item_cart');
    userEvent.click(itemToBeRemoved);

    expect(mockedRemoveToCart).toBeCalledTimes(1);
  });
});
