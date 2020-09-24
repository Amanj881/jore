import React from 'react'
import TagInput from './TagInput'


export default {
    title: "TagInput",
    component: TagInput,
};

export const Default = () => (
    <TagInput tags={[]} />
);

export const Added = () => (
    <TagInput tags={["first","second"]} />
);