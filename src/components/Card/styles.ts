import styled, { css } from "styled-components";
import { CardProps } from ".";

type CardStyleProps = Pick<CardProps, "bgColor">;

const ButtonColor = {
  primary: () => css`
    background-color: #cc1825;
  `,
  secondary: () => css`
    background-color: #9eb53e;
  `,
};

export const Cart = styled.div<CardStyleProps>`
  ${({ theme, bgColor }) => css`
    background: ${theme.colors[bgColor]};
    border: 0;
    border-radius: 2rem;
    width: 40.4rem;
    height: 21.1rem;
    position: relative;
    padding: 0 2rem;

    display: flex;
    justify-content: space-between;

    div {
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;
      padding: 1.8rem 0 3.6rem 0;

      h2 {
        color: ${theme.font.colors.white};
        font-size: 3.6rem;
      }

      button {
        color: ${theme.font.colors.white};
        font-weight: 500;
        font-size: 1.6rem;
        padding: 0 1.6rem;
        height: 3.5rem;
        border: 0;
        border-radius: 1.2rem;
        ${ButtonColor[bgColor]};

        display: flex;
        align-items: center;
        justify-content: center;

        svg {
          font-size: 1.6rem;
          margin-left: 1rem;
          margin-top: 0.3rem;
        }
      }
    }

    img {
      width: 22.5;
      position: absolute;
      right: 0;
      bottom: 0;
    }
  `}
`;
