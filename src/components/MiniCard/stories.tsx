import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MiniCard } from '.';

export default {
    title: 'MiniCard',
    component: MiniCard,
    
} as ComponentMeta<typeof MiniCard>;

export const Yellow: ComponentStory<typeof MiniCard> = (args) => (
        <MiniCard {...args} />
);

Yellow.args =  {
    variant: 'drinks'
};