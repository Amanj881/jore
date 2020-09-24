import React, { forwardRef } from "react";
import classNames from "classnames";

const SelectButtton = forwardRef(function SelectButtton(
  { options, buttonClick, hideLabel, onChange, value },
  ref
) {
  const labelClasses = classNames(`text-sm leading-6 font-medium`, {
    [`hidden`]: hideLabel
  });

  const setSelectedValue = value => {
    onChange(value);
  };

  const PostBtn = options.map((option, index) => {
    return (
      <div
        className={`flex border-1 border rounded-lg mb-4 ${
          value === option.value
            ? "border-blue-600 bg-blue-200"
            : "border-black-4 bg-white"
        }`}
        key={index}
        onClick={e => {
          setSelectedValue(option.value);
        }}
      >
        <label className="w-full flex justify-between  px-4 py-3 cursor-pointer">
          <span className="font-normal text-base leading-6 text-black-7">
            {option.label}
          </span>
          {option.has_child && (
            <svg
              className="cursor-pointer"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 16L14 12L10 8" stroke="#637381" strokeWidth="2" />
            </svg>
          )}
        </label>
      </div>
    );
  });
  return <div>{PostBtn}</div>;
});

export default SelectButtton;
