import styled, { css } from "styled-components";

export const Header = styled.header`
  ${({ theme }) => css`
    width: calc(${theme.spacings.large} * 31.95);
    height: calc(${theme.spacings.large} * 3 + 1.6rem);
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${theme.spacings.xsmall};
  `}
`;

export const NavigationBar = styled.nav`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.large};
    margin-right: auto;

    a {
      text-decoration: none;
      color: ${theme.font.colors.black};
      font-size: ${theme.font.sizes.medium};
    }

    @media (max-width: ${theme.breakPoints.tablet}) {
      opacity: 0;
      pointer-events: none;
    }
  `}
`;

export const HeaderContainer = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.background};
    position: sticky;
    top: 0;
    z-index: ${theme.layers.menu};
    padding: calc(${theme.spacings.small} + 0.6rem) ${theme.spacings.small};
  `}
`;

export const HeaderImage = styled.div`
  ${({ theme }) => css`
    min-width: calc(${theme.spacings.large} * 2);
    min-height: ${theme.spacings.xlarge};
    margin-right: ${theme.spacings.xxlarge};
  `}
`;

export const NavgationDropDown = styled.button`
  ${({ theme }) => css`
    color: ${theme.font.colors.black};
    background-color: transparent;
    border: none;
    opacity: 0;
    pointer-events: none;
    box-sizing: 0;
    margin-bottom: calc(${theme.spacings.xsmall} + 0.4rem);

    svg {
      font-size: ${theme.font.sizes.xlarge};
    }

    @media (max-width: ${theme.breakPoints.tablet}) {
      opacity: 1;
      pointer-events: visible;
    }
  `}
`;

export const AccessArea = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.xxsmall};
    justify-content: space-between;
    min-width: calc(${theme.spacings.large} * 6);
  `}
`;
