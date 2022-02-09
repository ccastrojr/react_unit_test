import styled from 'styled-components';

import Theme from '../../../styles/Theme';

export const Container = styled.li`
  width: 216px;

  transition: all 0.25s ease-in-out;

  img {
    width: 216px;
    height: auto;

    margin-bottom: -6px;
  }

  &:hover {
    background-color: ${Theme.colors.light};
  }

  @media (max-width: ${Theme.breakPoints.mobile}) {
    width: 130px;

    img {
      width: 130px;
      height: auto;

      margin-bottom: -6px;
    }
  }
`;

export const ProductDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 154px;

  padding: 5px 0;

  h4 {
    text-transform: capitalize;
    color: ${Theme.colors.higherGray};
    font-size: 16px;
    font-weight: 500;
  }

  p {
    margin-top: 8px;
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 2px;
  }

  span {
    color: ${Theme.colors.higherGray};
    font-size: 14px;
    margin-bottom: 14px;
  }

  @media (max-width: ${Theme.breakPoints.mobile}) {
    height: 100px;

    h4 {
      font-size: 14px;
      min-height: 40px;
    }

    p {
      font-size: 18px;
    }

    span {
      font-size: 12px;
    }
  }
`;
