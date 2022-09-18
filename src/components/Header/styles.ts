import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const HeaderContainer = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.background};
    position: sticky;
    top: 0;
    z-index: ${theme.layers.menu};

    @media (max-width: ${theme.breakpoints.mobileMedium}) {
    }
  `}
`;

export const Header = styled.header`
  ${({ theme }) => css`
    width: 127.8rem;
    height: 13.6rem;
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${theme.spacings.xsmall};

    @media (max-width: ${theme.breakpoints.tablet}) {
      height: 8.8rem;
    }
  `}
`;

export const NavigationBar = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.large};
    margin-right: auto;

    a {
      text-decoration: none;
      color: ${theme.font.colors.black};
      font-size: ${theme.font.sizes.medium};
    }

    @media (max-width: ${theme.breakpoints.laptop}) {
      opacity: 0;
      pointer-events: none;
      display: none;
    }
  `}
`;

export const HeaderImage = styled.div`
  ${({ theme }) => css`
    min-width: 8rem;
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
    margin-bottom: 2rem;

    svg {
      font-size: ${theme.font.sizes.xlarge};
    }

    @media (max-width: ${theme.breakpoints.laptop}) {
      opacity: 1;
      pointer-events: visible;
    }
  `}
`;

export const AccessArea = styled.div`
  ${({ theme }) => css`
    margin-left: auto;
    display: flex;
    gap: ${theme.spacings.xxsmall};
    justify-content: space-between;
    min-width: 24rem;

    @media (max-width: ${theme.breakpoints.moblideLarge}) {
      justify-content: center
      gap: 0.2rem;
      min-width: auto;

      button {
        margin-left: auto;
        font-size: 1.2rem;

        :first-child {
        display: none;
        opacity: 0;
      }  
      }
    }
  `}
`;

type MobileMenuProps = {
  menuIsOpen: boolean;
};

export const MenuMobileContainer = styled.nav<MobileMenuProps>`
  ${({ theme, menuIsOpen }) => css`
    z-index: ${theme.layers.overlay};
    overflow-x: none;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);

    opacity: ${menuIsOpen ? 1 : 0};
    pointer-events: ${menuIsOpen ? "all" : "none"};
    transition: opacity 0.3s ease-in-out;
    overflow: hidden;

    ${MenuMobile} {
      transform: ${menuIsOpen ? "translateX(0)" : "translateX(5rem)"};
      transition: transform 0.3s ease-in-out;
    }
  `}
`;

export const MenuMobile = styled.div`
  ${({ theme }) => css`
    z-index: ${theme.layers.modal};
    overflow-x: none;
    position: absolute;
    top: 0;
    left: 20%;
    right: 0;
    bottom: 0;
    height: 100vh;

    @media (max-width: ${theme.breakpoints.mobileMedium}) {
      width: 100vw;
      left: 0;
    }

    background-color: ${theme.colors.backgroundLight};
    padding: ${theme.spacings.medium} ${theme.spacings.medium} 10%
      ${theme.spacings.medium};
    display: flex;
    flex-direction: column;
    align-items: initial;

    a {
      text-decoration: none;
      color: ${theme.font.colors.black};
      font-size: ${theme.font.sizes.medium};

      @media (max-width: ${theme.breakpoints.moblideSmall}) {
        font-size: ${theme.font.sizes.small};
      }
    }

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  `}
`;

export const MenuMobileHeader = styled.div`
  display: flex;
  align-items: initial;
`;

export const MenuMobileNavigation = styled.main`
  ${({ theme }) => css`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${theme.spacings.medium};
  `}
`;
