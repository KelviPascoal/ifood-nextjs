import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MiniCard } from ".";

export default {
  title: "MiniCard",
  component: MiniCard,
} as ComponentMeta<typeof MiniCard>;

export const Yellow: ComponentStory<typeof MiniCard> = (args) => (
  <MiniCard {...args} />
);

Yellow.args = {
  variant: "yellow",
  text: "bebidas",
  image: {
    src: "img/drinks.webp",
    height: 95,
    width: 140,
    alt: "imagem de duas bebidas, refrigerante e cerveja",
  },
};
