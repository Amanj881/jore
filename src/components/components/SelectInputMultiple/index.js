import React from "react";
import classNames from "classnames";

function SelectInputMultiple({
  labelText,
  helperText,
  errorText,
  onChange,
  value,
  defaultValue,
  id,
  options,
  ...others
}) {
  const label = labelText ? (
    <label
      htmlFor={id}
      className="block text-sm font-medium leading-5 text-gray-700"
    >
      {labelText}
    </label>
  ) : null;

  const helper = helperText ? (
    <p className="mt-2 text-sm text-gray-500">{helperText}</p>
  ) : null;

  const error = errorText ? (
    <p className="mt-2 text-sm text-red-600">{errorText}</p>
  ) : null;

  const selectClasses = classNames(
    `form-select block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5`,
    {
      [`border-red-300 text-red-900 placeholder-red-300 focus:border-red-300 focus:shadow-outline-red`]:
        errorText != null,
    }
  );

  const input = (
    <select
      id={id}
      className={selectClasses}
      onChange={(e) => onChange(e.target.value)}
      defaultValue={defaultValue}
      multiple
    >
      {options.map((row, i) => (
        <option value={row.value} key={row.value}>
          {row.label}
        </option>
      ))}
    </select>
  );

  return (
    <>
      {label}
      <div className="mt-1 relative rounded-md shadow-sm">{input}</div>
      {helper}
      {error}
    </>
  );
}

SelectInputMultiple.defaultProps = {
  id: "",
  labelText: null,
  helperText: null,
  errorText: null,
  value:[],
  defaultValue: [],
  options: [],
};

export default SelectInputMultiple;
