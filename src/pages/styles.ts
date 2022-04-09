import Image from "next/image";
import styled, { css } from "styled-components";


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
    margin-bottom: 3.6rem;

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
  flex-wrap: wrap;
`;

export const Section = styled.section`
  padding: 7rem 0 5rem 0;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  justify-content: center;
  align-items: center;
  
  h3 {
    font-size: 2.4rem;
    font-weight: 400;
  }
`;

export const Row = styled.section`
  display: flex;
  justify-content: center;
  gap: 1.6rem;
  flex-wrap: wrap;

`;

export const Banner = styled.div`
  ${({theme}) => css`
  margin: 0 5rem 7rem 5rem;
  flex-wrap: wrap;


  display: flex;
  justify-content: center;
  gap: 10rem;


  @media(max-width: 1067px) {
    gap: 1.6rem;
    }

  main {
    position: relative;
    width: 47rem;
    height: 45rem;
    background: url('/img/backgroundImageItem.svg') 1% bottom;
    background-repeat: no-repeat;
    background-size: 40rem;

    aside {
      width: 23.7rem;
      height: 13.2;
      margin-left: auto;
      padding: 3.5rem 0;
      margin-top: 7.2rem;

      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      gap: 2.5rem;

      h3 {
        font-size: 3.6rem;
        color: ${theme.font.colors.black};
      }
      
      p {
        font-size: 1.6rem;
        color: ${theme.font.colors.darkGray};
      }
    }

    div {
      position: absolute;
      bottom: -2rem;
      left: 1rem;
    }
  }
  `}
`;

export const AdvertisingCover = styled.div`
  ${({theme}) => css`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 8rem 10.8rem;
  flex-wrap: wrap;


  @media(max-width: 1067px) {
    gap: 1.6rem;
    }

    aside {
      width: 23.7rem;
      height: 35rem;
      padding: 3.5rem 0;

      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
     
      h3 {
        font-size: 3.6rem;
        color: ${theme.font.colors.black};
      }
      
      p {
        font-size: 1.6rem;
        color: ${theme.font.colors.darkGray};
      }
    }
  }
  `}
`;

// export const AdvertisingCoverImage = styled(Image)`

// `;
