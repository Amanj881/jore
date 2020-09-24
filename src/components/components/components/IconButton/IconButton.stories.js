import React from "react";
import IconButton from "./IconButton";
import "../../index.css";
import Eye from '../../Icon/Eye';
import Add from '../../Icon/Add';

export default {
  title: "IconButton",
  component: IconButton,
};

export const Default = () => (
  <div className="w-64">
    <IconButton labelText="Preview Courses" type={<Eye />} kind="tertiary"  />
  </div>
);

export const Addicon = () => (
  <div className="w-64">
    <IconButton labelText="Create Course" type={<Add />} kind="primary" />
  </div>
);







