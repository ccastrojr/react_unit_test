import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Toast from '.';

const mockedRemoveToast = jest.fn();
const mockedAddToast = jest.fn();

jest.mock('../../../../hooks/toast', () => {
  return {
    useToast: () => ({
      removeToast: mockedRemoveToast,
      addToast: mockedAddToast,
    }),
  };
});

describe('ToastProvider', () => {
  test('2 - Toast components renders', async () => {
    const Props = {
      styleAnimation: 1,
      message: {
        id: '12',
        title: '',
        description: 'descricao',
      },
    };

    jest.useFakeTimers();

    render(<Toast {...Props} />);

    await waitFor(() => {
      expect(mockedRemoveToast).toHaveBeenCalledWith(
        expect.stringContaining('12'),
      );
    });
  });

  test('Toast components renders', () => {
    const minProps = {
      styleAnimation: 1,
      message: {
        id: '12',
        title: 'message',
      },
    };

    const { getAllByTestId } = render(<Toast {...minProps} />);

    expect.assertions(4);

    expect(getAllByTestId('button-remove')).toHaveLength(1);
    expect(screen.getByText('message')).toBeInTheDocument();
    expect(getAllByTestId('notification-icon')).toHaveLength(1);
    expect(getAllByTestId('close-toast-icon')).toHaveLength(1);
  });

  test('Toast components renders', async () => {
    const Props = {
      styleAnimation: 1,
      message: {
        id: '12',
        title: '',
        description: 'descricao',
      },
    };

    jest.useFakeTimers();

    const { getByTestId, getByText } = render(<Toast {...Props} />);

    const notificationIcon = getByTestId('notification-icon');
    const description = getByText(/descricao/i);

    const buttonRemove = getByTestId('button-remove');
    fireEvent.click(buttonRemove);

    await waitFor(() => {
      expect(mockedRemoveToast).toHaveBeenCalledWith(
        expect.stringContaining('12'),
      );
    });

    expect(description).toBeInTheDocument();
    expect(notificationIcon).toBeInTheDocument();
  });
});
