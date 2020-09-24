import React from "react";
import SelectButton from "./SelectButton";
import "../../index.css";

export default {
  title: "SelectButton",
  component: SelectButton,
};

const labelText = ['Label 1', 'Label 2'];

export const Default = () => (
	<SelectButton options={labelText} />
);


