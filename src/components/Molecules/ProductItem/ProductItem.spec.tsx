import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import * as hookCart from '../../../hooks/Cart';

import ProductItem from '.';
import cartProductMock from '../../../mocks/cartProductMock';
import DefaultTemplate from '../../Templates/DefaultTemplate';

jest.mock('../../../hooks/toast', () => {
  return {
    useToast: () => ({
      addToast: jest.fn(),
    }),
  };
});

const mockAddToCart = jest.fn();

describe('ProductItem component tests', () => {
  test('renders without crashing', async () => {
    jest.spyOn(hookCart, 'useCart').mockReturnValue({
      products: [{ ...cartProductMock }],
      getTotalPrice: 0,
      addToCart: mockAddToCart,
      removeToCard: jest.fn(),
    });

    const { getByText, getByTestId } = render(
      <DefaultTemplate>
        <ProductItem product={{ ...cartProductMock }} />
      </DefaultTemplate>,
      { wrapper: BrowserRouter },
    );

    const buyButton = getByText('Comprar');
    userEvent.click(buyButton);

    expect(mockAddToCart).toBeCalledTimes(1);
  });
});
