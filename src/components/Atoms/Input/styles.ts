import styled, { css } from 'styled-components';

import Theme from '../../../styles/Theme';

interface ContainerProps {
  format: 'default' | 'large';
}

export const Container = styled.input<ContainerProps>`
  width: 260px;

  ${props =>
    props.format === 'default' &&
    css`
      height: 35px;
    `}

  ${props =>
    props.format === 'large' &&
    css`
      height: 48px;
    `}

  padding: 0 16px;

  border: none;
  border-radius: 5px;

  color: ${Theme.colors.lightGray};
`;
