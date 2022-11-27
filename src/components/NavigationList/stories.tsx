import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import { NavigationList } from ".";
import { cidadesListMock } from "./list.mock";

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
  viwerAll: {
    active: false,
    path: "/",
  },
};
