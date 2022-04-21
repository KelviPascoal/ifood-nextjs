import { darken, lighten } from "polished";
import styled, { css, DefaultTheme } from "styled-components";
import { ButtonProps } from ".";

export type ButtonStyleProps = Pick<ButtonProps, "variant" | "fullWidth">;

export const Button = styled.button<ButtonStyleProps>`
  ${({ theme, variant, fullWidth }) => css`
    min-height: calc(${theme.spacings.large} + 0.4rem);
    padding: 0 calc(${theme.spacings.small} + 0.2rem);
    border: 0;
    border-radius: ${theme.border.radius.default};
    cursor: pointer;
    transition: background-color ${theme.transition.fast};
    text-align: center;
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};

    ${buttonModifiers[variant!](theme)}
    ${fullWidth && buttonModifiers.fullWidth()}
  `}
`;

const buttonModifiers = {
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
  fullWidth: () => css`
    width: 100%;
  `,
};
