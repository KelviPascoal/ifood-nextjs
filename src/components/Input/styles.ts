import styled, { css } from "styled-components";

export const InputContainer = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.backgroundLight};
    min-height: 4.4rem;
    border-radius: 0.4rem;

    display: flex;
    align-items: center;

    svg {
      color: ${theme.colors.primary};
      font-size: ${theme.spacings.small};
      margin: 0 ${theme.spacings.xsmall};
    }

    input {
      font-size: ${theme.font.sizes.medium};
      color: ${theme.font.colors.gray};
      font-weight: 300;
      background-color: transparent;
      border: 0;
      padding-left: ${theme.font.sizes.xsmall};

      :focus {
        outline: none;
      }
    }
  `}
`;
