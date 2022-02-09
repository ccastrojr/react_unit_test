import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { waitFor, act } from '@testing-library/react';

import { CartProvider, useCart } from '.';

describe('Cart hook tests', () => {
  test('add items to local storage and get it when screen is loaded', async () => {
    const { result } = renderHook(() => useCart(), {
      wrapper: CartProvider,
    });

    const itemAddedToCart = {
      id: 1,
      createdAt: 'some_value',
      name: 'Product Test',
      price: 90,
      image: 'image_path',
      stock: 9,
    };

    act(() => {
      result.current.addToCart(itemAddedToCart);
    });

    await waitFor(() => {
      expect(result.current.products[0].name).toEqual('Product Test');
    });

    /* Get item from local storage */
    jest.spyOn(Storage.prototype, 'getItem').mockImplementation(key => {
      switch (key) {
        case '@ReactUnitTest:cart':
          return JSON.stringify([itemAddedToCart]);

        default:
          return null;
      }
    });

    await waitFor(() => {
      expect(result.current.products[0].name).toEqual('Product Test');
    });
  });
});
