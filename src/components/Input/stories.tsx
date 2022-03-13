import React from 'react';
import { FiMapPin } from 'react-icons/fi'

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Input } from '.';

export default {
    title: 'Input',
    component: Input,
    argTypes: {
        icon: {
            control: {
                type: null
            }
        }
    }
} as ComponentMeta<typeof Input>;

export const Default: ComponentStory<typeof Input> = (args) => (
    <Input {...args} />
);
Default.args = {
    placeholder: 'teste placeholder'
};

export const WithIcon: ComponentStory<typeof Input> = (args) => (
    <Input {...args} />
);
WithIcon.args = {
    placeholder: 'teste placeholder',
    icon: <FiMapPin />
};


