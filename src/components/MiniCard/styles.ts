import { css, DefaultTheme } from "styled-components";
import styled from "styled-components";

import { MiniCardProps } from ".";

type MiniCardStyleProps = Pick<MiniCardProps, "variant">;

export const MiniCard = styled.div<MiniCardStyleProps>`
  ${({ theme, variant }) => css`
    border: 0;
    background-color: ${theme.colors[variant]};
    border-radius: ${theme.spacings.xxsmall};
    padding: 0 ${theme.spacings.small};
    text-decoration: none;
    cursor: pointer;

    min-width: calc(${theme.spacings.large} * 4.7);
    height: 4.7rem;

    @media (max-width: ${theme.breakPoints.tablet}) {
      min-width: 15rem;
      height: 3.8rem;
    }
    @media (max-width: ${theme.breakPoints.moblideLarge}) {
      min-width: 12rem;
      height: 2.8rem;
    }

    @media (max-width: ${theme.breakPoints.moblideSmall}) {
      min-width: 10rem;
      height: 2.6rem;
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
      font-size: ${theme.font.sizes.medium};
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

export const ContainerImage = styled.div`
  ${({ theme }) => css`
    max-width: 15rem;

    @media (max-width: ${theme.breakPoints.tablet}) {
      max-width: 12rem;
      max-height: 9rem;
    }

    @media (max-width: ${theme.breakPoints.moblideLarge}) {
      max-width: 9rem;
      max-height: 7rem;
    }

    @media (max-width: ${theme.breakPoints.moblideSmall}) {
      max-width: 8rem;
      max-height: 6.2rem;
    }

    display: flex;
    justify-content: center;
  `}
`;
