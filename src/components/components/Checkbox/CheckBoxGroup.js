import React, { useState } from "react";
import CheckBox from "./CheckBox";
import { includes, indexOf } from "lodash";

const CheckBoxGroup = React.forwardRef(
  (
    {
      options,
      id,
      value,
      name,
      onChange,
      onClick,
      errorText,
      checked,
      remove,
      handleRemove,
    },
    ref
  ) => {
    const error = errorText ? (
      <p className="mt-2 text-sm text-red-600">{errorText}</p>
    ) : null;

    const handleOnchange = (val, checked) => {
      if (onChange) {
        if (checked) {
          let index = indexOf(value, val);
          if (index == -1) {
            value.push(val);
          }
        } else {
          let index = indexOf(value, val);
          if (index != -1) {
            value.splice(index, 1);
          }
        }
        onChange([...value]);
      }
    };

    return (
      <div className="flex flex-col">
        <div className="flex flex-col ">
          {options.map((option, index) => {
            return (
              <div className="flex items-center justify-between" key={index}>
                <CheckBox
                  id={option.label}
                  labelText={option.label}
                  value={option.value}
                  name={option.value}
                  onChange={(e) => {
                    handleOnchange(option.value, e.target.checked);
                  }}
                  checked={checked ? checked : includes(value, option.value)}
                  {...option}
                />
                {remove && (
                  <div
                    className="flex h-6 w-6 pt-2 items-center justify-between cursor-pointer"
                    onClick={() => handleRemove(option.value)}
                  >
                    <svg
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        {error}
      </div>
    );
  }
);

CheckBoxGroup.defaultProps = {
  indeterminate: false,
  onChange: () => {},
  errorText: "",
  onClick: () => {},
  value: "",
  options: [],
  remove: false,
  handleRemove: () => {},
};

export default CheckBoxGroup;
