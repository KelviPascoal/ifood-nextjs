import styled, { css } from "styled-components";

export const HeaderContainer = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.background};
    position: sticky;
    top: 0;
    z-index: ${theme.layers.menu};

    @media (max-width: ${theme.breakPoints.mobileMedium}) {
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

    @media (max-width: ${theme.breakPoints.tablet}) {
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

    @media (max-width: ${theme.breakPoints.moblideLarge}) {
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

export const MenuMobile = styled.div`
  ${({ theme }) => css`
    z-index: ${theme.layers.modal};
    overflow-x: none;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100vh;
    background-color: ${theme.colors.backgroundLight};
    padding: ${theme.spacings.medium}  ${theme.spacings.medium}  10%  ${theme.spacings.medium};
    display: flex;
    flex-direction: column;
    align-items: initial;

    a {
      text-decoration: none;
      color: ${theme.font.colors.black};
      font-size: ${theme.font.sizes.medium};

    }

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;


        }
      }
    }
  `}
`;

export const MenuMobileHeader = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: initial;
  `}
`;

export const MenuMobileInfo = styled.section`
  ${({ theme }) => css`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${theme.spacings.medium};
  `}
`;
