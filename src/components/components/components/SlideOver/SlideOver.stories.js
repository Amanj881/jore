import React from "react";
import SlideOver from "./SlideOver";
import "../../index.css";

export default {
  title: "SlideOver",
  component: SlideOver,
};

const slideOverWidth = {
	width: '22.5rem'
};

export const Default = () => (
	<SlideOver 
		openSlider={true}
		slideOverWidth={slideOverWidth}
	/>
);


