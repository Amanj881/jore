import React, { forwardRef, useState } from "react";
import classNames from "classnames";
import { textAreaProps } from "./util";

const TextArea = forwardRef(function TextArea(
  {
    labelText,
    className = `text-black-4`,
    id,
    placeholder,
    onChange,
    onClick,
    hideLabel,
    invalidText,
    invalid,
    type,
    rows,
    inputStyles,
    value,
    optional,
    styles,
    ...other
  },
  ref
) {
  const errorId = id + "-error-msg";

  const textAreaClasses = classNames(
    `form-textarea rounded block w-full h-12`,
    className,
    {
      [`${styles ? styles : "border-1 bg-white-100"}`]: !invalid,
      [`bg-error-light border-1 border-error`]: invalid
    }
  );

  const sharedTextAreaProps = {
    id,
    value,
    onChange: evt => {
      if (onChange) {
        onChange(evt);
      }
    },
    onClick: evt => {
      if (!other.disabled) {
        onClick(evt);
      }
    },
    placeholder,
    type,
    rows,
    ref,
    className: inputStyles ? inputStyles : textAreaClasses,
    ...other
  };

  //labelClasses
  const labelClasses = classNames(`text-sm leading-6 font-medium`, {
    [`hidden`]: hideLabel
  });

  //labelText
  const label = labelText ? (
    <label htmlFor={id} className={labelClasses}>
      {labelText}
    </label>
  ) : null;

  //invalid
  const error = invalid ? (
    <div className={`text-error text-sm leading-normal mt-1`} id={errorId}>
      {invalidText}
    </div>
  ) : null;

  //input
  const input = (
    <textarea {...textAreaProps({ invalid, sharedTextAreaProps, errorId })} />
  );

  return (
    <div>
      {label}
      &nbsp;
      <span className="text-sm leading-6 text-black-4 font-normal">
        {optional && "(optional)"}
      </span>
      {/* {helperText} */}
      <div data-invalid={invalid || null} className="rounded-md shadow-sm mt-1">
        {input}
      </div>
      {error}
    </div>
  );
});

TextArea.defaultProps = {
  disabled: false,
  onChange: () => {},
  onClick: () => {},
  placeholder: "",
  invalid: false,
  invalidText: "",
  value: ""
};

export default TextArea;
