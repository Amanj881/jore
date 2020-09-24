import React from "react";
import Checkbox from "./Checkbox";
import "../../index.css";

export default {
	title: "Checkbox",
	component: Checkbox
};
const options = ["a", "b"];

export const Default = () => (
	<div className="w-64">
		<Checkbox options={options} />
	</div>
);
