import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Cards = styled.div`
  ${({ theme }) => css`
    margin-top: -14rem;
    gap: 3.6rem;
    padding: 3rem 0;

    display: flex;
    justify-content: center;

    @media (max-width: ${theme.breakpoints.tablet}) {
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

    @media (max-width: ${theme.breakpoints.laptop}) {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  `}
`;
