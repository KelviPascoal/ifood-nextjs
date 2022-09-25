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
