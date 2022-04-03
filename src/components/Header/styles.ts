import styled, { css } from "styled-components";

export const Header = styled.header`
  ${({ theme }) => css`
    width: 127.8rem;
    height: 13.6rem;
    background-color: ${theme.colors.background};
    width: 100%;
    /* position: fixed;
    top: 0; */

    justify-content: space-between;

    align-items: center;
    padding: 3rem 0;

    display: flex;
    gap: 1.5rem;

    nav {
      display: flex;
      gap: 4rem;
      margin-right: auto;
      background-color: ${theme.colors.background};

      @media(max-width: 959px) {
        opacity: 0;
        pointer-events: none;
      }


      a {
        text-decoration: none;
        color: ${theme.font.colors.black};
        font-size: 1.6rem;
      }
    }
  `}
`;

export const ContainerImage = styled.div`
  min-width: 8.2rem;
  min-height: 4.5rem;
  margin-right: 6rem;

`
