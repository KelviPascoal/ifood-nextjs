import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: 128rem;
    width: 100%;
    margin: 0 auto;
    padding: 0 ${theme.spacings.xsmall};
  `}
`;
