import { Container } from "components/Container";
import styled, { css } from "styled-components";

export const Header = styled.header`
  ${({ theme }) => css`
    justify-content: space-between;
    align-items: center;
    padding: 3rem 0;

    display: flex;
    gap: 1.5rem;

    img {
      margin-right: 6rem;
    }

    nav {
      display: flex;
      gap: 4rem;
      margin-right: auto;

      a {
        text-decoration: none;
        color: ${theme.font.colors.black};
        font-size: 1.6rem;
      }
    }
  `}
`;

export const Containt = styled.div`
  padding: 0 16%;
  margin-top: 5rem;
`;

export const Busca = styled.div`
  display: grid;
  grid-template-columns: 7fr 13rem;
  gap: 2.2rem;
  margin-bottom: 3rem;
`;

export const Tilte = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3rem 0;

    h1 {
      font-size: 3.6rem;
      color: ${theme.font.colors.black};
      font-weight: 500;
    }
    h2 {
      font-size: 1.6rem;
      color: ${theme.font.colors.gray};
      font-weight: 400;
    }
  `}
`;

export const Cards = styled.div`
  gap: 3.6rem;
  padding: 3rem 0;

  display: flex;
  justify-content: center;
`;

export const MiniCards = styled.div`
  gap: 3.6rem;
  padding: 3rem 0;

  display: flex;
  justify-content: center;
`;
