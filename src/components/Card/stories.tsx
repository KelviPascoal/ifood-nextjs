import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Card } from ".";

export default {
  title: "Card",
  component: Card,
} as ComponentMeta<typeof Card>;

export const Default: ComponentStory<typeof Card> = (args) => (
  <Card {...args} />
);
Default.args = {
  image: {
    src: "img/restaurant.webp",
    width: 225,
    height: 157,
  },
  title: "Restaurante",
  variant: "primary",
  textButton: "Ver opções",
};

export const secundary: ComponentStory<typeof Card> = (args) => (
  <Card {...args} />
);
secundary.args = {
  image: {
    src: "img/market.webp",
    width: 225,
    height: 169,
  },
  title: "Mercado",
  variant: "secondary",
  textButton: "Buscar lojas",
};
