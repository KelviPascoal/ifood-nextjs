import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MiniCard } from '.';
import { miniCardMock } from './mock';

export default {
    title: 'MiniCard',
    component: MiniCard,
    
} as ComponentMeta<typeof MiniCard>;

export const Yellow: ComponentStory<typeof MiniCard> = (args) => (
        <MiniCard {...args} />
);

Yellow.args = {...miniCardMock.yellow};

export const Pink: ComponentStory<typeof MiniCard> = (args) => (
    <MiniCard {...args} />
);

Pink.args = {...miniCardMock.pink};

export const Red: ComponentStory<typeof MiniCard> = (args) => (
    <MiniCard {...args} />
);

Red.args = {...miniCardMock.red};

export const Purpure: ComponentStory<typeof MiniCard> = (args) => (
    <MiniCard {...args} />
);

Purpure.args = {...miniCardMock.purpure};