import { darken } from "polished";
import styled, { css } from "styled-components";
import { ListProps } from ".";

type ListContainerProps = Pick<ListProps, "numberOfSizes">;

export const ListHeader = styled.h5`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.large};

    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      min-height: calc(${theme.spacings.large} + 0.4rem);
      padding: 0 calc(${theme.spacings.small} + 0.2rem);
      border: 0;
      border-radius: ${theme.border.radius.default};
      cursor: pointer;
      transition: background-color ${theme.transition.fast};
      text-align: center;
      font-size: ${theme.font.sizes.medium};
      font-weight: ${theme.font.bold};
      text-decoration: none;

      color: ${theme.colors.primary};
      background-color: transparent;
      :hover {
        color: ${darken(0.3, theme.colors.primary)};
      }
    }
  `}
`;

export const ListContainer = styled.ul`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.large};
    margin-bottom: ${theme.spacings.large};
  `}
`;

export const ListContent = styled.ul<ListContainerProps>`
  ${({ theme, numberOfSizes }) => css`
    width: 100%;
    text-align: start;
    max-height: ${numberOfSizes ? `calc(${numberOfSizes} * 4em)` : "auto"};
    flex-wrap: wrap;

    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.small};

    @media (max-width: ${theme.breakPoints.moblideLarge}) {
      max-height: 100%;
    }
  `}
`;

export const ListTitle = styled.h5`
  ${({ theme }) => css`
    color: ${theme.font.colors.black};
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.bold};
  `}
`;

export const ListItem = styled.li`
  ${({ theme }) => css`
    list-style-type: none;

    a {
      text-decoration: none;
      color: ${theme.font.colors.darkGray};
      font-size: ${theme.font.sizes.medium};
    }
  `}
`;
