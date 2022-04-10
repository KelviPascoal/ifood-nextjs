import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import { NavigationList } from ".";
import { cidadesListMock } from "./listMock";

export default {
  title: "NavigationList",
  component: NavigationList,
} as ComponentMeta<typeof NavigationList>;

export const Default: ComponentStory<typeof NavigationList> = (args) => (
  <NavigationList {...args} />
);
Default.args = {
  title: "Explore por cidades",
  items: cidadesListMock,
  numberOfSizes: 5,
};
