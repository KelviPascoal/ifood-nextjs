import styled, { css } from "styled-components";
import { CardProps } from ".";

type CardStyleProps = Pick<CardProps, "variant">;

const ButtonColor = {
  primary: () => css`
    background-color: #cc1825;
  `,
  secondary: () => css`
    background-color: #9eb53e;
  `,
};

export const Card = styled.a<CardStyleProps>`
  ${({ theme, variant }) => css`
    background-color: ${theme.colors[variant!]};
    border: 0;
    border-radius: 2rem;
    width: 40.4rem;
    height: 21.1rem;
    position: relative;
    text-decoration: none;
    transition: background-color 0.2s;
    transform: bottom 0.8s;

    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: flex-start;
    padding: 1.8rem 0 3.6rem 2rem;

    @media(max-width: 891px) {
      align-items: center;
      padding: 1.6rem 0;
      min-width: 4rem;
      width: 30.4rem;
    }

    @media(max-width: 682px) {
      align-items: center;
      padding: 1.6rem 0;
      min-width: 4rem;
      width: 20rem;
    }
   
      h2 {
        color: ${theme.font.colors.white};
        font-size: 3.6rem;

        @media(max-width: 891px) {
          font-size: 2rem;
        }
      }

      button {
        color: ${theme.font.colors.white};
        font-weight: 500;
        font-size: 1.6rem;
        padding: 0 1.6rem;
        height: 3.5rem;
        border: 0;
        border-radius: 1.2rem;
        ${ButtonColor[variant!]};
        cursor: pointer;

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
  `}
`;

export const ImgContainer = styled.div`
      position: absolute;
      right: 0;
      bottom: 0;

      @media(max-width: 891px) {
      width: 13.8rem;
      position: static;
      margin-top: auto;
      }
`;
