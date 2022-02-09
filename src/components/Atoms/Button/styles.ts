import styled, { css } from 'styled-components';
import Theme from '../../../styles/Theme';

interface ContainerProps {
  size: 'default' | 'large';
}

export const Container = styled.button<ContainerProps>`
  width: 130px;

  ${props =>
    props.size === 'default' &&
    css`
      height: 35px;
    `}

  ${props =>
    props.size === 'large' &&
    css`
      height: 48px;
    `}

  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;

  background-color: ${Theme.colors.black};
  border: none;
  border-radius: 5px;
  color: #fff;
`;
