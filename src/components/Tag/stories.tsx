import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Tag } from ".";

export default {
  title: "Tag",
  component: Tag,
} as ComponentMeta<typeof Tag>;

export const Default: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;
Default.args = {
  image: {
    src: "img/cocoBambu.webp",
    alt: "imagem de duas bebidas, refrigerante e cerveja",
  },
  title: "Habib's",
  subTitle: "Lanches",
  checked: true,
};
