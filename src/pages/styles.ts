import styled, { css } from "styled-components";

export const Content = styled.div`
  ${({ theme }) => css`
    padding: 0 16%;

    @media (max-width: ${theme.breakPoints.moblideLarge}) {
      padding: ${theme.spacings.xsmall};
    }
  `}
`;

export const SearchArea = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 7fr 13rem;
    gap: 2.2rem;

    @media (max-width: ${theme.breakPoints.moblideLarge}) {
      grid-template-columns: 1fr;
      margin-top: -2rem;
    }
  `}
`;

export const Background = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.background};
    height: 38rem;
  `}
`;

export const Tilte = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3rem 0;
    margin-bottom: 3.6rem;

    h1 {
      font-size: 3.6rem;
      color: ${theme.font.colors.black};
      font-weight: 500;
    }
    h2 {
      font-size: 1.6rem;
      color: ${theme.font.colors.gray};
      font-weight: 400;
    }
  `}
`;

export const Cards = styled.div`
  ${({ theme }) => css`
    margin-top: -14rem;
    gap: 3.6rem;
    padding: 3rem 0;

    display: flex;
    justify-content: center;

    @media (max-width: ${theme.breakPoints.moblideLarge}) {
      padding: ${theme.spacings.xsmall};
      flex-wrap: wrap;
      margin-top: 0;
      button {
        width: 100%;
      }
    }
  `}
`;

export const MiniCards = styled.div`
  ${({ theme }) => css`
    gap: 3.6rem;
    padding: 3rem 0;

    display: flex;
    justify-content: center;

    @media (max-width: ${theme.breakPoints.moblideLarge}) {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  `}
`;

export const Section = styled.section`
  padding: 7rem 0 5rem 0;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  justify-content: center;
  align-items: center;

  h3 {
    font-size: 2.4rem;
    font-weight: 400;
  }
`;

export const Row = styled.section`
  display: flex;
  justify-content: center;
  gap: 1.6rem;
  flex-wrap: wrap;
`;

export const Banner = styled.div`
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

    @media (max-width: ${theme.breakPoints.moblideLarge}) {
      margin: 0;
    }

    main {
      position: relative;
      width: 47rem;
      height: 45rem;
      background: url("/img/backgroundImageItem.svg") 1% bottom;
      background-repeat: no-repeat;
      background-size: 40rem;

      @media (max-width: ${theme.breakPoints.moblideLarge}) {
        background-size: 30rem;
        img {
          width: 4rem;
        }
      }

      @media (max-width: 600px) {
        height: 50rem;
        width: 100%;
      }

      @media (max-width: ${theme.breakPoints.moblideLarge}) {
        display: flex;
        align-items: center;
      }

      aside {
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

        @media (max-width: ${theme.breakPoints.moblideLarge}) {
          align-items: center;
          margin: 0 auto;
          margin-bottom: 12rem;
          width: 100%;
        }

        h3 {
          font-size: 3.6rem;
          color: ${theme.font.colors.black};

          @media (max-width: ${theme.breakPoints.moblideLarge}) {
            font-size: ${theme.font.sizes.xxlarge};
          }
        }

        p {
          font-size: 1.6rem;
          color: ${theme.font.colors.darkGray};
        }
      }

      div {
        position: absolute;
        bottom: -2rem;
        left: 1rem;
      }
    }
  `}
`;

export const AdvertisingCover = styled.div`
  ${({ theme }) => css`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 8rem 10.8rem;
  flex-wrap: wrap;

    @media(max-width: ${theme.breakPoints.tablet}) {
      padding: 4rem;
      justify-content: center;
      gap: 1.6rem;
    }

    @media(max-width: ${theme.breakPoints.moblideLarge}) {
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
     
      @media(max-width: ${theme.breakPoints.tablet}) {
        width: 100%;
        align-items: center;
        height: auto;
        padding: ${theme.spacings.xsmall};
        gap: ${theme.spacings.xsmall};
      }

      h3 {
        font-size: 3.6rem;
        color: ${theme.font.colors.black};

        @media (max-width: ${theme.breakPoints.moblideLarge}) {
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
