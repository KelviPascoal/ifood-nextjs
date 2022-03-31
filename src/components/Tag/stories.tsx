import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Tag } from '.';

export default {
    title: 'Tag',
    component: Tag,
} as ComponentMeta<typeof Tag>;

export const Default: ComponentStory<typeof Tag> = (args) => (
    <Tag {...args} />
);
Default.args = {
    image: "https://static-images.ifood.com.br/image/upload/t_thumbnail/logosgde/201906182008_2b157a73-7564-4733-94c1-8d0376e7bb39.png",
    title: "Habib's",
    subTitle: "Lanches",
    alt: "outback logo",
    checked: true
};
