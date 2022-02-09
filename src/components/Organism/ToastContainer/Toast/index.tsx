import React, { useEffect, CSSProperties } from 'react';

// Hooks
import { ToastMessage, useToast } from '../../../../hooks/toast';

// Icons & Pictures
import { ReactComponent as CheckIcon } from '../../../../assets/check_outline.svg';
import { ReactComponent as ErrorIcon } from '../../../../assets/error.svg';
import { ReactComponent as CloseIcon } from '../../../../assets/close.svg';
import { ReactComponent as InfoIcon } from '../../../../assets/info.svg';

import { Container } from './styles';
import Theme from '../../../../styles/Theme';

interface ToastProps {
  message: ToastMessage;
  styleAnimation: CSSProperties;
}

const Toast: React.FC<ToastProps> = ({ message, styleAnimation }) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(message.id);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [removeToast, message.id]);

  return (
    <Container
      type={message.type}
      hasdescription={message.description ? '1' : '0'}
      style={styleAnimation}
    >
      {message.type === 'success' && (
        <CheckIcon fill={Theme.colors.green} data-testid="notification-icon" />
      )}
      {message.type === 'error' && (
        <ErrorIcon fill={Theme.colors.red} data-testid="notification-icon" />
      )}
      {(!message.type || message.type === 'info') && (
        <InfoIcon
          fill={Theme.colors.blue}
          stroke={Theme.colors.blue}
          data-testid="notification-icon"
        />
      )}

      <div>
        <strong>{message.title}</strong>
        {message.description && <p>{message.description}</p>}
      </div>

      <button
        type="button"
        onClick={() => removeToast(message.id)}
        data-testid="button-remove"
      >
        <CloseIcon data-testid="close-toast-icon" />
      </button>
    </Container>
  );
};

export default Toast;
