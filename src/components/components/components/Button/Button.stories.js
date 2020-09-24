import React from "react";
import Button from "./Button";
import "../../index.css";

export default {
  title: "Button",
  component: Button
};

export const Default = () => (
  <div className="w-64">
    <Button labelText="Default Button" type="button" kind="big" />
  </div>
);

export const Submit = () => (
  <div className="w-64">
    <Button labelText="Submit Button" type="submit" kind="big" />
  </div>
);

export const MediumButton = () => (
  <div className="w-64">
    <Button labelText="Medium Button" type="button" kind="medium" />
  </div>
);

export const Tertiarybtn = () => (
  <div className="w-64">
    <Button labelText="Tertiarybtn Button" type="button" kind="tertiary" />
  </div>
);

export const Ghostbtn = () => (
  <div className="w-64">
    <Button labelText="Ghostbtn Button" type="button" kind="ghost" />
  </div>
);

export const Blackborderbtn = () => (
  <div className="w-64">
    <Button labelText="Back" type="button" kind="blackborderbtn" />
  </div>
);

export const Roundedbtn = () => (
  <div className="w-64">
    <Button labelText="Filter" type="button" kind="roundedbtn" />
  </div>
);

export const RoundedColorbtn = () => (
  <div className="w-64">
    <Button labelText="Draft" type="button" kind="roundedcolorbtn" />
  </div>
);

export const GhostIconbtn = () => (
  <div className="w-64">
    <Button labelText="+Add Link" type="button" kind="ghosticonbtn" />
  </div>
);
