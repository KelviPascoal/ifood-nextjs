import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Image from "next/image";
import { darken } from "polished";

export const Tag = styled.button`
  ${({ theme }) => css`
    padding: 2rem 1.6rem;
    max-width: 23.3rem;
    height: 13.2rem;
    width: 100%;
    min-width: 20.4rem;
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
  `}
`;

export const TagImage = styled(Image)`
  border-radius: 50%;
`;

export const TagText = styled.div`
  ${({ theme }) => css`
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
  `}
`;
