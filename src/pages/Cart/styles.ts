import styled from 'styled-components';
import { darken } from 'polished';
import Theme from '../../styles/Theme';

export const Container = styled.div`
  margin-top: 110px;
  padding: 0px 15%;

  @media (max-width: ${Theme.breakPoints.ipad}) {
    padding: 0px 5%;
  }
`;

export const Title = styled.h1`
  position: relative;
  font-size: 28px;

  &::after {
    content: '';

    position: absolute;
    top: 40px;
    left: 0;

    height: 3px;
    width: 75px;
    background-color: ${Theme.colors.secondaryLightGray};
  }
`;

export const CartItemsList = styled.ul`
  margin-top: 40px;
`;

export const CartItem = styled.li`
  position: relative;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;

  transition: all 0.25s ease-in-out;

  padding: 0 20px;

  div {
    display: flex;
    align-items: center;

    > span,
    p {
      font-size: 18px;
      font-weight: 600;
      color: ${Theme.colors.gray};
    }

    > span {
      border-right: 1px solid ${Theme.colors.secondaryWhite};
      padding-right: 20px;
    }

    img {
      width: 60px;
      height: auto;

      margin-left: 25px;
      margin-right: 25px;
    }

    p {
      span {
        margin-left: 20px;
        padding-left: 20px;
        border-left: 1px solid ${Theme.colors.secondaryWhite};
      }
    }
  }

  button {
    border: none;
    background-color: transparent;
  }

  & + li {
    margin-top: 20px;

    &::after {
      content: '';
      position: absolute;
      top: -10px;
      left: 0;

      width: 100%;
      height: 1px;
      background-color: ${Theme.colors.tertiaryGray};
    }
  }

  &:hover {
    background-color: ${darken(0.05, Theme.colors.white)};
  }

  @media (max-width: ${Theme.breakPoints.mobile}) {
    padding: 0;

    div {
      p {
        display: flex;
        flex-direction: column;

        font-size: 14px;

        span {
          padding: 0;
          border: none;
          margin-left: 10px;
        }
      }
    }
  }
`;

export const EmptyCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 40vh;

  @media (max-width: ${Theme.breakPoints.mobile}) {
    text-align: center;
  }
`;

export const PageFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;

  margin-top: 50px;
`;

export const FinalPriceContainer = styled.div`
  display: flex;
  width: 100%;

  padding-top: 20px;
  margin-bottom: 30px;

  border-top: 1px solid ${Theme.colors.tertiaryGray};

  p {
    font-size: 18px;
  }
`;
