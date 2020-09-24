import React from "react";
import Dropdown from "./Dropdown";
import "../../index.css";
import DropIcon from '../../Icon/DropIcon';

export default {
  title: "Dropdown",
  component: Dropdown,
};

export const Default = () => (
  <div className="w-64">
    <Dropdown labelText="Primary Category" titleText="2019" Icon={<DropIcon />} />
  </div>
);
