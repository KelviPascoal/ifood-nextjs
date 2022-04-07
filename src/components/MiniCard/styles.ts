import { css, DefaultTheme } from "styled-components";
import styled from "styled-components";

import { MiniCardProps } from ".";

type MiniCardStyleProps = Pick<MiniCardProps, "variant">;
// variant: "drinks" | "pharmacy" | "express" | "petshop";
const variants = {
  colors: {
    drinks: (theme: DefaultTheme) => css`
      background-color: ${theme.colors.yellow};
    `,
    pharmacy: (theme: DefaultTheme) => css`
      background-color: ${theme.colors.pink};
    `,
    express: (theme: DefaultTheme) => css`
      background-color: ${theme.colors.red};
    `,
    petshop: (theme: DefaultTheme) => css`
      background-color: ${theme.colors.purpure};
    `,
  },
  sizes: {
    drinks: () => css`
      max-width: 14rem;
      /* min-height: 9.5rem; */
    `,
    pharmacy: () => css`
      max-width: 10rem;
      /* min-height: 8.6rem; */
    `,
    express: () => css`
      max-width: 9.7rem;
      /* min-height: 9.3rem; */
    `,
    petshop: () => css`
      max-width: 13.5rem;
      /* min-height: 7.7rem; */
    `,
  },
};

export const MiniCard = styled.div<MiniCardStyleProps>`
  ${({ theme, variant }) => css`
    border: 0;
    ${variants.colors[variant](theme)}
    border-radius: 0.8rem;
    padding: 0 2rem;
    text-decoration: none;
    top: -4.9rem;
    cursor: pointer;

    min-width: 18.8rem;
    height: 4.7rem;

      @media(max-width: 835px) {
        min-width: 15.8rem;
        height: 3.8rem;
      }
      /// large mobile
      @media(max-width: 415px) {
        min-width: 10.8rem;
        height: 2.5rem;
      }


    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
  `}
`;

export const ContainerMiniCard = styled.button`
  ${({ theme }) => css`
    padding: 4.4rem 0 0.5rem 0;
    border: 0;
    background-color: transparent;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    span {
      font-size: 1.6rem;
      margin-top: 1.2rem;

      display: flex;
      align-items: center;

      svg {
        margin-top: 0.2rem;
        margin-left: 0.5rem;
        color: ${theme.colors.primary};
      }
    }
  `}
`;

export const ContainerImage = styled.div<MiniCardStyleProps>`
  ${({ variant }) => css`
      max-width: 15rem;

    ${variants.sizes[variant]}
      ///tablet
      @media(max-width: 835px) {
        max-width: 12rem;
        max-height: 9rem;

      }
      /// large mobile
      @media(max-width: 415px) {
        max-width: 9rem;
        max-height: 7rem;
      }
 

    display: flex;
    justify-content: center;
  `}
`;
