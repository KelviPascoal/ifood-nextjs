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
    max-width: 40.4rem;
    width: 100%;
    min-width: 6.4rem;
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
      max-width: 30.4rem;
    }

    @media(max-width: 682px) {
      padding: 1.6rem 0;
      max-width: 20rem;
    }

    @media(max-width: 322px) {
      padding: 1.6rem 0;
      max-width: 16rem;
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

        @media(max-width: 891px) {
        font-size: 1.4rem;
        width: 80%;

        }

        @media(max-width: 682px) {
        font-size: 1.2rem;
        }

        svg {
          font-size: 1.6rem;
          margin-left: 1rem;
          margin-top: 0.3rem;

          @media(max-width: 891px) {
          font-size: 1.4rem;
          }

          @media(max-width: 682px) {
          font-size: 1.2rem;
          }
        }
      }
    }
  `}
`;

export const ImgContainer = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;

  @media (max-width: 891px) {
    max-width: 15.8rem;
    position: static;
    margin-top: auto;
  }

  @media (max-width: 740px) {
    position: static;
    margin-top: auto;
    max-width: 13.8rem;
  }
`;
