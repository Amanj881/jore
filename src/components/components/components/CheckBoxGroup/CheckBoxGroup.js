import React, { useState, useEffect } from "react";
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
      errors,
      invalid,
      invalidText,
      checked,
      remove,
      handleRemove
    },
    ref
  ) => {
    const [selectedValues, setSelectedValues] = useState(value ? value : []);

    useEffect(() => {
      setSelectedValues(value ? value : []);
    }, [value]);

    const errorId = id + "-error-msg";

    const error = invalid ? (
      <div
        className={` text-sm leading-normal mt-2 text-red-dark font-normal`}
        id={errorId}
      >
        {invalidText}
      </div>
    ) : null;

    const handleOnchange = (val, checked) => {
      if (onChange) {
        if (checked) {
          let index = indexOf(selectedValues, val);
          if (index == -1) {
            selectedValues.push(val);
          }
        } else {
          let index = indexOf(selectedValues, val);
          if (index != -1) {
            selectedValues.splice(index, 1);
          }
        }
        setSelectedValues([...selectedValues]);
        onChange([...selectedValues]);
      }
    };

    return (
      <div className="flex flex-col">
        <div className="flex flex-col ">
          {options.map((option, index) => {
            return (
              <div className="flex items-center justify-between" key={index}>
                <CheckBox
                  clickId={option.label}
                  labelText={option.label}
                  value={option.value}
                  name={option.value}
                  onChange={e => {
                    handleOnchange(option.value, e.target.checked);
                  }}
                  invalid={invalid}
                  checked={
                    checked ? checked : includes(selectedValues, option.value)
                  }
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
  invalid: false,
  invalidText: "",
  onClick: () => {},
  value: "",
  options: [],
  remove: false,
  handleRemove: () => {}
};

export default CheckBoxGroup;
