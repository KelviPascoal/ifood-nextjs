import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const BannerContainer = styled.div`
  ${({ theme }) => css`
    margin: 0 5rem 7rem 5rem;
    flex-wrap: wrap;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10rem;

    @media (max-width: 600px) {
      margin-top: 0;
    }

    @media (max-width: ${theme.breakpoints.moblideLarge}) {
      margin: 0;
    }
  `}
`;

export const BannerContent = styled.div`
  ${({ theme }) => css`
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
  `}
`;

export const BannerInfo = styled.aside`
  ${({ theme }) => css`
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
  `}
`;
