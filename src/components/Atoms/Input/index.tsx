import React from 'react';

import { Container } from './styles';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  format: 'default' | 'large';
};

const Input: React.FC<InputProps> = ({ format, ...rest }) => {
  return <Container format={format} {...rest} data-testid="pure_input" />;
};

export default Input;
