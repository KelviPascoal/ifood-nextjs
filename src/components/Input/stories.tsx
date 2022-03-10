import React from 'react';
import { FiMapPin } from 'react-icons/fi'

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Input } from '.';


export default {
    title: 'Input',
    component: Input,
} as ComponentMeta<typeof Input>;

export const Default: ComponentStory<typeof Input> = (args) => (
    <Input {...args} />
);
Default.args = {
    // icon: <FiMapPin />
};
