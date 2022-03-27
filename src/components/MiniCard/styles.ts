import { css } from "styled-components";
import styled from "styled-components";

import { MiniCardProps } from ".";

type MiniCardStyleProps = Pick<MiniCardProps, "bgColor">;

export const MiniCard = styled.div<MiniCardStyleProps>`
  ${({ theme, bgColor }) => css`
    border: 0;
    background-color: ${theme.colors[bgColor]};
    border-radius: 2rem;
    padding: 0 2rem;
    text-decoration: none;
    top: -4.9rem;
    cursor: pointer;

    min-width: 18rem;
    height: 4.6rem;

    :hover {
      min-width: 18.8rem ;
      height: 4.68rem ;
    }

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;

    img {
      min-height: 10rem;
      min-width: 14rem;
      
      :hover {
        min-height: 10.8rem;
        min-width: 14.8rem;
      }
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
