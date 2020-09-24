import React, { forwardRef } from "react";
import classNames from "classnames";

const Checkbox = forwardRef(function Checkbox(
  { labelText, helperText, errorText, type, id, ...other },
  ref
) {
  const label = labelText ? (
    <label htmlFor={id} className="ml-2 block text-sm leading-5 text-gray-900">
      {labelText}
    </label>
  ) : null;

  // const helper = helperText ? (
  //   <p className="mt-2 text-sm text-gray-500">{helperText}</p>
  // ) : null;

  // const error = errorText ? (
  //   <p className="mt-2 text-sm text-red-600">{errorText}</p>
  // ) : null;

  const inputClasses = classNames(
    `form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out`,
    {
      [`border-red-300 text-red-900 placeholder-red-300 focus:border-red-300 focus:shadow-outline-red`]:
        errorText != null,
    }
  );

  const input = (
    <input
      type={type}
      id={id}
      className={inputClasses}
      placeholder="you@example.com"
    />
  );

  return (
    <>
      <div className="flex items-center">
        {input}
        {label}
      </div>
    </>
  );
});

Checkbox.defaultProps = {
  type: "checkbox",
  id: "",
  labelText: null,
  helperText: null,
  errorText: null,
};

export default Checkbox;
