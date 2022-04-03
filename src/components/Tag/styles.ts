import Image from "next/image";
import { darken } from "polished";
import styled, { css } from "styled-components";

export const TagStyle = styled.button`
  ${({ theme }) => css`
    padding: 2rem 1.6rem;
    width: 23.3rem;
    height: 13.2rem;
    border-radius: 0.8rem;
    border: 1px solid #dcdcdc;
    position: relative;
    background-color: transparent;
    cursor: pointer;

    :hover {
      border: 1px solid ${darken(0.2, "#dcdcdc")};
    }

    display: flex;
    justify-content: initial;
    align-items: center;
    gap: 1rem;

    svg {
      position: absolute;
      top: 1rem;
      right: 1rem;
      font-size: 1.4rem;
      color: ${theme.colors.primary};
    }

    div {
      display: flex;
      flex-direction: column;
      gap: 0.4rem;

      strong {
        font-size: 1.4rem;
        color: ${theme.font.colors.black};
        font-weight: 400;
      }

      span {
        font-size: 1.2rem;
        font-weight: 300;
        color: ${theme.font.colors.darkGray};
      }
    }
  `}
`;

export const ImageStyled = styled(Image)`
  border-radius: 50%;
`;
