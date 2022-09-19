import { css } from "@emotion/react";
import styled from "@emotion/styled";

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

export const SearchArea = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 7fr 13rem;
    gap: 2.2rem;

    @media (max-width: ${theme.breakpoints.tablet}) {
      grid-template-columns: 1fr;
      margin-top: -2rem;
    }
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    padding: 0 16%;

    @media (max-width: ${theme.breakpoints.moblideLarge}) {
      padding: ${theme.spacings.xsmall};
    }
  `}
`;

export const Background = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.background};
    height: 38rem;
  `}
`;
