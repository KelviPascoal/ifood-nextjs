import { darken } from "polished";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const AdvertisingCover = styled.div`
  ${({ theme }) => css`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 8rem 10.8rem;
  flex-wrap: wrap;

    @media(max-width: ${theme.breakpoints.tablet}) {
      padding: 4rem;
      justify-content: center;
      gap: 1.6rem;
    }

    @media(max-width: ${theme.breakpoints.moblideLarge}) {
      padding: ${theme.spacings.xxsmall};
      align-items: center;
      justify-content: center;
    }

    aside {
      width: 23.7rem;
      height: 35rem;
      padding: 3.5rem 0;

      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
     
      @media(max-width: ${theme.breakpoints.tablet}) {
        width: 100%;
        align-items: center;
        height: auto;
        padding: ${theme.spacings.xsmall};
        gap: ${theme.spacings.xsmall};
      }

      h3 {
        font-size: 3.6rem;
        color: ${theme.font.colors.black};

        @media (max-width: ${theme.breakpoints.moblideLarge}) {
            font-size: ${theme.font.sizes.xxlarge};
          }
      }
      
      p {
        font-size: 1.6rem;
        color: ${theme.font.colors.darkGray};
      }
    }
  }
  `}
`;

export const IfoodBeneficiosImg = styled.div`
  ${({ theme }) => css`
    width: 100%;
    margin: 0 auto;
    height: 10.6rem;
    background: url("/img/ifood-benefits-desktop.webp");
    background-repeat: no-repeat;
    background-size: 100%;

    @media (max-width: ${theme.breakpoints.tablet}) {
      height: 34.9rem;
      background: url("/img/ifood-benefits-mobile.webp");
      background-repeat: no-repeat;
      background-size: 100%;
    }

    @media (max-width: ${theme.breakpoints.moblideLarge}) {
      height: 19.5rem;
    }

    @media (max-width: ${theme.breakpoints.mobileMedium}) {
      height: 17.2rem;
    }

    @media (max-width: ${theme.breakpoints.moblideLarge}) {
      height: 14.2rem;
    }
  `}
`;

export const NavigationsList = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: initial;

    @media (max-width: ${theme.breakpoints.tablet}) {
      grid-template-columns: 1fr 1fr;
    }

    @media (max-width: ${theme.breakpoints.moblideLarge}) {
      grid-template-columns: 1fr;
    }
  `}
`;

export const SocialNetwork = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.large};

    h5 {
      font-size: ${theme.font.sizes.medium};
      color: ${theme.font.colors.black};
      font-weight: ${theme.font.bold};
      margin-bottom: ${theme.spacings.large};
    }

    nav {
      display: flex;
      justify-content: initial;
      gap: ${theme.spacings.medium};

      svg {
        font-size: 3rem;
        color: ${theme.font.colors.darkGray};
        cursor: pointer;

        :hover {
          color: ${darken(0.3, theme.font.colors.darkGray)};
          transition: color ${theme.transition.fast};
        }
      }
    }
  `}
`;
