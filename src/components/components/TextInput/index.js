import React, { useRef } from "react";
import classNames from "classnames";

function TextInput({
  labelText,
  helperText,
  errorText,
  type,
  onChange,
  value,
  defaultValue,
  id,
  width,
  valueText,
  disabled,
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

  const inputClasses = classNames(
    `flex-1 form-input block ${width} sm:text-sm sm:leading-5`,
    {
      [`border-red-300 text-red-900 placeholder-red-300 focus:border-red-300 focus:shadow-outline-red`]:
        errorText != null,
      "bg-gray-100 cursor-not-allowed": disabled,
    }
  );

  const myRef = useRef(null);

  // useEffect(() => {
  //   console.log("valueText", valueText, myRef);
  //   myRef.current.value = valueText;
  // }, [valueText]);

  const input = (
    <input
      ref={myRef}
      defaultValue={defaultValue}
      type={type}
      id={id}
      name={id}
      className={inputClasses}
      placeholder=""
      disabled={disabled}
      onChange={(e) => onChange(e.target.value)}
    />
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

TextInput.defaultProps = {
  type: "text",
  id: "",
  labelText: null,
  helperText: null,
  errorText: null,
  valueText: null,
  value: "",
  defaultValue: "",
  width: "w-full",
  disabled: false,
};

export default TextInput;
