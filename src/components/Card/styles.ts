import styled, { css } from "styled-components";
import { CardProps } from ".";

type CardStyleProps = Pick<CardProps, "variant">;

const ButtonColors = {
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
    max-width: calc(${theme.spacings.large} * 10 + 0.4rem);
    width: 100%;
    min-height: calc(${theme.spacings.large} * 5 + 1.4rem);
    position: relative;
    text-decoration: none;
    transition: background-color ${theme.transition.fast};
    cursor: pointer;
    padding-top: calc(${theme.spacings.xsmall} + 0.2rem);
    padding-right: 0;
    padding-bottom: calc(${theme.spacings.medium} + 0.4rem);
    padding-left:  calc(${theme.spacings.large} / 2);

    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: flex-start;
    
    
    @media(max-width: ${theme.breakPoints.tablet}) {
      max-width: calc(${theme.spacings.medium} * 10 + 1rem);
    }

    @media(max-width: ${theme.breakPoints.moblideLarge}) {
      align-items: center;
      padding: ${theme.spacings.small} 0;
      max-width: calc(${theme.spacings.large} * 5 - 1.7rem);
      min-height: calc(${theme.spacings.large} * 5 - 2rem);
    }

    @media(max-width: ${theme.breakPoints.mobileMedium}) {
      max-width: calc(${theme.spacings.xsmall} * 10 + 0.3rem);
    }

    @media(max-width: ${theme.breakPoints.moblideSmall}) {
      max-width: calc(${theme.spacings.xsmall} * 10 - 2.2rem);
    }
    }
  `}
`;

export const CardImage = styled.div`
  ${({ theme }) => css`
    position: absolute;
    right: 0;
    bottom: 0;

    @media (max-width: ${theme.breakPoints.tablet}) {
      max-width: calc(${theme.spacings.small} * 10 - 3rem);
    }

    @media (max-width: ${theme.breakPoints.moblideLarge}) {
      position: static;
      max-width: calc(${theme.spacings.xsmall} * 10 + 2.3rem);
      margin-top: auto;
    }

    @media (max-width: ${theme.breakPoints.mobileMedium}) {
      max-width: calc(${theme.spacings.large} * 3) + 0.3rem;
    }

    @media (max-width: ${theme.breakPoints.moblideSmall}) {
      max-width: calc(${theme.spacings.large} * 2 + 1.8rem);
    }
  `}
`;

export const CardButton = styled.span<CardStyleProps>`
  ${({ theme, variant }) => css`
    color: ${theme.font.colors.white};
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.small};
    height: calc(${theme.spacings.medium} + 0.3rem);
    text-align: center;
    border: 0;
    border-radius: calc(${theme.border.radius} * 2);
    padding: 0 calc(${theme.spacings.xsmall} - 0.4rem);
    ${ButtonColors[variant!]};
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: ${theme.breakPoints.moblideLarge}) {
      font-size: ${theme.font.sizes.small};
      width: 90%;
    }

    svg {
      font-size: ${theme.font.sizes.medium};
      margin-left: calc(${theme.spacings.xxsmall} + 0.2rem);
      margin-top: calc(${theme.spacings.xxsmall} - 0.5rem);

      @media (max-width: ${theme.breakPoints.tablet}) {
        font-size: ${theme.font.sizes.small};
        margin-left: ${theme.spacings.xxsmall};
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
