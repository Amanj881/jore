import React from "react";
import CheckBox from "./CheckBox";
import CheckBoxGroup from "./CheckBoxGroup";
import "../../index.css";

export default {
  title: "CheckBoxGroup",
  component: CheckBoxGroup
};

export const Default = () => (
  <div className="w-64">
    <CheckBoxGroup
      options={[
        { value: "1", label: "one" },
        { value: "2", label: "two" },
        { value: "3", label: "three" },
        { value: "4", label: "four" }
      ]}
      id="numbers"
      name="numbers"
      onChange={e => {
        console.log("setValue", e);
        //setValue([...e]);
      }}
      value={["1"]}
    />
  </div>
);
export const Invalid = () => (
  <CheckBoxGroup
    options={[
      { value: "1", label: "one" },
      { value: "2", label: "two" },
      { value: "3", label: "three" },
      { value: "4", label: "four" }
    ]}
    id="numbers"
    name="numbers"
    onChange={e => {
      console.log("setValue", e);
      //setValue([...e]);
    }}
    invalid={true}
    invalidText={"Please select"}
  />
);
