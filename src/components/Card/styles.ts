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

export const Card = styled.button<CardStyleProps>`
  ${({ theme, variant }) => css`
    background-color: ${theme.colors[variant!]};
    border: 0;
    border-radius: calc(${theme.spacings.large} / 2);
    max-width: calc(${theme.spacings.large} * 10 + 4rem);
    width: 100%;
    height: calc(${theme.spacings.xxlarge} * 4);
    position: relative;
    text-decoration: none;
    transition: background-color ${theme.transition.fast};
    cursor: pointer;

    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: flex-start;
    padding-top: calc(${theme.spacings.xsmall} + 0.2rem);
    padding-right: 0;
    padding-bottom: calc(${theme.spacings.medium} + 0.4rem);
    padding-left:  calc(${theme.spacings.large} / 2);
    

    @media(max-width: ${theme.breakPoints.moblideLarge}) {
      align-items: center;
      padding: 2.4rem 0;
      max-width: 18.3rem;
    }

    @media(max-width: ${theme.breakPoints.mobileMedium}) {
      max-width: 16.3rem;
    }

    @media(max-width: ${theme.breakPoints.moblideSmall}) {
      max-width: 13.8rem;
    }
    }
  `}
`;

export const CardImage = styled.div`
  ${({ theme }) => css`
    position: absolute;
    right: 0;
    bottom: 0;

    @media (max-width: ${theme.breakPoints.moblideLarge}) {
      position: static;
      max-width: 18.3rem;
      margin-top: auto;
    }

    @media (max-width: ${theme.breakPoints.mobileMedium}) {
      max-width: 12.3rem;
    }

    @media (max-width: ${theme.breakPoints.moblideSmall}) {
      max-width: 9.8rem;
    }
  `}
`;

export const CardButton = styled.span<CardStyleProps>`
  ${({ theme, variant }) => css`
    color: ${theme.font.colors.white};
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.small};
    height: calc(${theme.spacings.medium} + 0.3rem);
    border: 0;
    border-radius: calc(${theme.border.radius} * 2);
    ${ButtonColor[variant!]};
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: ${theme.breakPoints.tablet}) {
      font-size: ${theme.font.sizes.small};
      width: 80%;
    }

    svg {
      font-size: ${theme.font.sizes.medium};
      margin-left: 1rem;
      margin-top: 0.3rem;

      @media (max-width: ${theme.breakPoints.tablet}) {
        font-size: ${theme.font.sizes.small};
      }
    }
  `}
`;

export const CardTitle = styled.h2`
  ${({ theme }) => css`
    color: ${theme.font.colors.white};
    font-size: calc(${theme.font.sizes.xlarge} + 0.4rem);

    @media (max-width: ${theme.breakPoints.moblideLarge}) {
      font-size: ${theme.font.sizes.xlarge};
    }
  `}
`;
