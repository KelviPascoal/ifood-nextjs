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
    variant: "primary",
    textButton: "Ver opções",
    altImg: "ir para opções de restalrante",
};

export const secundary: ComponentStory<typeof Card> = (args) => (
    <Card {...args} />
);
secundary.args = {
    image: "https://static-images.ifood.com.br/image/upload/f_auto/webapp/landingV2/market.png",
    title: "Mercado",
    variant: "secondary",
    textButton: "Buscar lojas",
    altImg: "ir para opções de restalrante"
};
