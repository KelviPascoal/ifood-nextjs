import { CardProps } from ".";

export const cardsMock: CardProps[] = [
  {
    title: "Restaurante",
    variant: "primary",
    textButton: "Ver opções",
    image: {
      src: "/img/restaurant.webp",
      width: 225,
      height: 157,
      alt: "imagem de um sanduiche para representar restaurantes",
    },
  },
  {
    title: "Mercado",
    variant: "secondary",
    textButton: "Buscar lojas",
    image: {
      src: "/img/market.webp",
      width: 225,
      height: 169,
      alt: "imagem de um carrinho de compras para representar supermercados",
    },
  },
];
