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
    border-radius: 2rem;
    max-width: 40.4rem;
    width: 100%;
    min-height: 21.4rem;
    position: relative;
    text-decoration: none;
    transition: background-color ${theme.transition.fast};
    cursor: pointer;
    padding-top: 1.8rem;
    padding-right: 0;
    padding-bottom: 3.6rem;
    padding-left:  2rem;

    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: flex-start;
    
    
    @media(max-width: ${theme.breakPoints.tablet}) {
      max-width: 33rem;
    }

    @media(max-width: ${theme.breakPoints.moblideLarge}) {
      align-items: center;
      padding: ${theme.spacings.small} 0;
      max-width: 21.7rem;
      min-height: 18rem;
    }

    @media(max-width: ${theme.breakPoints.mobileMedium}) {
      max-width: 16.3rem;
    }

    @media(max-width: ${theme.breakPoints.moblideSmall}) {
      max-width: 14.8rem;
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
      max-width: 21rem;
    }

    @media (max-width: ${theme.breakPoints.moblideLarge}) {
      position: static;
      max-width: 14.7rem;
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
    height: 3.5rem;
    text-align: center;
    border: 0;
    border-radius: calc(${theme.border.radius} * 2);
    padding: 0 1.2rem;
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
      margin-left: 1rem;
      margin-top: 0.3rem;

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
    font-size: 2.4rem;

    @media (max-width: ${theme.breakPoints.moblideLarge}) {
      font-size: ${theme.font.sizes.xlarge};
    }
  `}
`;
