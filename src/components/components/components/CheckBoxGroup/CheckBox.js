import React, { useState } from "react";
import classNames from "classnames";

const CheckBox = React.forwardRef(
  (
    {
      id,
      className = `text-black-4`,
      labelText,
      onChange,
      onClick,
      hideLabel,
      invalid,
      invalidText,
      value,
      name,
      checked,
      option,
      title = "",
      clickId,
      ...other
    },
    ref
  ) => {
    const labelClasses = classNames(`ml-3 text-base text-black-7 leading-6 cursor-pointer`, {
      [`hidden`]: hideLabel
    });

    const errorId = id + "-error-msg";

    const error = invalid ? (
      <div
        className={` text-sm leading-normal mt-2 text-red-dark font-normal `}
        id={errorId}
      >
        {invalidText}
      </div>
    ) : null;

    const inputClasses = classNames(
      `form-checkbox h-4 w-4 text-blue-5 cursor-pointer`,
      className,
      {
        [`transition duration-150 ease-in-out`]: !error,
        [`bg-error-light border-1 border-error`]: error
      }
    );

    const label = labelText ? (
      <label htmlFor={clickId} className={labelClasses}>
        {labelText}
      </label>
    ) : null;

    const handleOnchange = e => {
      if (onChange) {
        onChange(e);

      }
    };
    const handleOnclick = e => {
      if (onClick) {
        onClick(e);
      }
    };

    return (
      <div className="flex">
        <div className="flex items-center mt-2 ">
          <input
            id={clickId}
            type="checkbox"
            className={inputClasses}
            onChange={handleOnchange}
            //onClick={handleOnclick}
            value={value}
            checked={checked}
          />

          {label}
        </div>
      </div>
    );
  }
);

CheckBox.defaultProps = {
  onChange: () => {},
  onClick: () => {},
  invalid: false,
  value: "",
  checked: false
};

export default CheckBox;
