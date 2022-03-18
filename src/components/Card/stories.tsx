import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Card } from '.';

export default {
    title: 'Card',
    component: Card,
} as ComponentMeta<typeof Card>;

export const Default: ComponentStory<typeof Card> = (args) => (
    <Card {...args} />
);
Default.args = {
    image: "https://static-images.ifood.com.br/image/upload/f_auto/webapp/landingV2/restaurant.png",
    title: "Restaurante",
    bgColor: "primary",
    textButton: "Ver opções",
};

export const secundary: ComponentStory<typeof Card> = (args) => (
    <Card {...args} />
);
secundary.args = {
    image: "https://static-images.ifood.com.br/image/upload/f_auto/webapp/landingV2/market.png",
    title: "Mercado",
    bgColor: "secondary",
    textButton: "Buscar lojas",
};
