import React from 'react'
import TextArea from './TextArea'
import '../../index.css'

export default {
    title: "TextArea",
    component: TextArea,
};

export const Default = () => (
    <TextArea id="default" labelText="Address" placeholder="Enter your address" rows="4" />
);
export const Invalid = () => (
    <TextArea
      id="error"
      invalid={true}
      invalidText="Enter your address"
      placeholder="Enter your address"
      labelText="Address"
      rows="4"
    ></TextArea>
  );
