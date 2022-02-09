import styled from 'styled-components';
import Theme from '../../../styles/Theme';

export const Container = styled.div`
  width: 100%;
`;

export const Title = styled.h1`
  position: relative;
  font-size: 26px;

  margin-bottom: 35px;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 35px;

    width: 70px;
    height: 3px;

    background-color: ${Theme.colors.secondaryLightGray};
  }

  @media (max-width: ${Theme.breakPoints.mobile}) {
    font-size: 22px;
  }
`;

export const List = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;

  @media (max-width: ${Theme.breakPoints.ipadPro}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: ${Theme.breakPoints.ipad}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${Theme.breakPoints.mobile}) {
    row-gap: 70px;
  }
`;
