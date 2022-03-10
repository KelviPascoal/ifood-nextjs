import styled, { css } from "styled-components";

export const Button = styled.button`
  ${({ theme }) => css`
    min-height: 4.4rem;
    border-radius: 0.4rem;
    padding: 0 2.2rem;
    background-color: ${theme.colors.primary};
    border: 0;
    border-radius: ${theme.border.radius};
    color: ${theme.font.colors.secondary};
    cursor: pointer;

    :hover {
      background-color: ;
    }
  `}
`;
