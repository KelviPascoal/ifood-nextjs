import { css } from "styled-components";
import styled from "styled-components";

import { MiniCardProps } from ".";
import { lighten } from "polished";

type MiniCardStyleProps = Pick<MiniCardProps, "bgColor">;

export const MiniCard = styled.button<MiniCardStyleProps>`
  ${({ theme, bgColor }) => css`

    border: 0;
    background-color: ${theme.colors[bgColor]};
    border-radius: 2rem;
    min-width: 18rem;
    height: 4.6rem;
    padding: 0 2rem;
    text-decoration: none;
    top: -4.9rem;

    display: flex;

    flex-direction: column;
    justify-content: flex-end;
    align-items: center;

    img {
      max-height: 10rem;
      max-width: 14rem;
    }
  `}
`;

export const ContainerMiniCard = styled.button`
  ${({ theme }) => css`
    padding: 4.4rem 0 0.5rem 0;
    border: 0;
    background-color: transparent;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    span {
      font-size: 1.6rem;
      margin-top: 1.2rem;

      display: flex;
      align-items: center;

      svg {
        margin-top: 0.2rem;
        margin-left: 0.5rem;
        color: ${theme.colors.primary};
      }
    }
  `}
`;
