import { darken, lighten } from "polished";
import styled, { css, DefaultTheme } from "styled-components";

export type ButtonStyleProps = {
  variant?: "default" | "transparent";
};

export const Button = styled.button<ButtonStyleProps>`
  ${({ theme, variant }) => css`
    min-height: calc(${theme.spacings.large} + 0.4rem);
    padding: 0 calc(${theme.spacings.small} + 0.2rem);
    border: 0;
    border-radius: ${theme.border.radius.default};
    cursor: pointer;
    transition: background-color ${theme.transition.fast};
    text-align: center;
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};

    ${variants[variant!](theme)}
  `}
`;

const variants = {
  default: (theme: DefaultTheme) => css`
    color: ${theme.font.colors.white};
    background-color: ${theme.colors.primary};

    :hover {
      background-color: ${darken(0.2, theme.colors.primary)};
    }
    :active {
      background-color: ${lighten(0.2, theme.colors.primary)};
    }
  `,
  transparent: (theme: DefaultTheme) => css`
    color: ${theme.colors.primary};
    background-color: transparent;
    :hover {
      color: ${darken(0.3, theme.colors.primary)};
    }
  `,
};
