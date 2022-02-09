import React from 'react';
import MockAdapter from 'axios-mock-adapter';
import { render, act, waitFor } from '@testing-library/react';

import api from '../../../services/api';

import ProductsList from '.';
import cartProductMock from '../../../mocks/cartProductMock';

const apiMock = new MockAdapter(api);

describe('ProductsList component tests', () => {
  test('renders without crashing with request', async () => {
    act(() => {
      apiMock.onGet('/products').reply(200, [{ ...cartProductMock }]);
    });

    const { getByText } = render(<ProductsList />);

    await waitFor(() => {
      expect(getByText('Test')).toBeInTheDocument();
    });
  });
});
