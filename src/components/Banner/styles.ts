import { ThemeDefault } from "./../../styles/emotion.d";
import { BannerProps } from "./index";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

type BannerContainerProps = Pick<BannerProps, "variant">;

const containerVariants = {
  fullWidth: (theme: ThemeDefault) => css`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 8rem 10.8rem;
    flex-wrap: wrap;

    @media (max-width: ${theme.breakpoints.tablet}) {
      padding: 4rem;
      justify-content: center;
      gap: 1.6rem;
    }

    @media (max-width: ${theme.breakpoints.moblideLarge}) {
      padding: ${theme.spacings.xxsmall};
      align-items: center;
    }
  `,

  normal: (theme: ThemeDefault) => css`
    position: relative;
    width: 47rem;
    height: 45rem;
    background: url("/img/backgroundImageItem.svg") 1% bottom;
    background-repeat: no-repeat;
    background-size: 40rem;

    @media (max-width: ${theme.breakpoints.moblideLarge}) {
      background-size: 30rem;
      img {
        width: 4rem;
      }
    }

    @media (max-width: 600px) {
      height: 50rem;
      width: 100%;
    }

    @media (max-width: ${theme.breakpoints.moblideLarge}) {
      display: flex;
      align-items: center;
    }

    div {
      position: absolute;
      bottom: -2rem;
      left: 1rem;
    }
  `,
};

const infoVariants = {
  fullWidth: (theme: ThemeDefault) => css`
    width: 23.7rem;
    height: 35rem;
    padding: 3.5rem 0;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    @media (max-width: ${theme.breakpoints.tablet}) {
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
  `,

  normal: (theme: ThemeDefault) => css`
    width: 23.7rem;
    height: 13.2;
    margin-left: auto;
    padding: 3.5rem 0;
    margin-top: 7.2rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    gap: 2.5rem;

    @media (max-width: 600px) {
      width: 80%;
      margin-top: 0;
    }

    @media (max-width: ${theme.breakpoints.moblideLarge}) {
      align-items: center;
      margin: 0 auto;
      margin-bottom: 18rem;
      width: 100%;
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
  `,
};

export const BannerContent = styled.div<BannerContainerProps>`
  ${({ theme, variant }) => css`
    ${!!variant && containerVariants[variant](theme)}
  `}
`;

export const BannerInfo = styled.aside<BannerContainerProps>`
  ${({ theme, variant }) => css`
    ${!!variant && infoVariants[variant](theme)}
  `}
`;
