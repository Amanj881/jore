import React from "react";
import Stepper from "./Stepper";
import "../../index.css";

export default {
  title: "Stepper",
  component: Stepper,
};

const stepOneArray = ['Step 1'];
const stepTwoArray = ['Step 1', 'Step 2', 'Step 3'];

export const Ongoing = () => (
	<Stepper steps={stepOneArray} currentStepNumber={1} />
)


export const Completed = () => (
	<Stepper steps={stepTwoArray} currentStepNumber={3} />
)
