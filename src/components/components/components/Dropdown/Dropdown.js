import React, { useState, useEffect } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { find } from "lodash";

const Dropdown = React.forwardRef(function Dropdown(
  {
    labelText,
    hideLabel,
    titleText,
    invalidText,
    inputStyles,
    Icon,
    options,
    onChange,
    onClick,
    value,
    id,
    invalid,
    dropdownStyles
  },
  ref
) {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState(value);

  useEffect(() => {
    setSelectedOption(value);
  }, [options]);

  useEffect(() => {
    setSelectedOption(value);
  }, [value]);

  const labelClasses = classNames(
    ` text-sm text-black-100 leading-6 font-medium`,
    {
      [`hidden`]: hideLabel
    }
  );

  const dropdownClasses = classNames(
    `inline-flex justify-between w-full h-12 rounded border border-16-a px-4 py-2 text-base leading-5 font-normal mt-1 items-center`,
    {
      [`${
        dropdownStyles ? dropdownStyles : "border-1 bg-white-100"
      }`]: !invalid,
      [`bg-error-light border-1 border-error`]: invalid
    }
  );

  const label = labelText ? (
    <label className={labelClasses}>{labelText}</label>
  ) : null;

  const errorId = id + "-error-msg";

  const error = invalid ? (
    <div
      className={` text-sm leading-normal mt-2 text-error font-normal`}
      id={errorId}
    >
      {invalidText}
    </div>
  ) : null;

  const handleButtonClick = () => {
    setShowOptions(!showOptions);
  };

  const handledDropdownOptions = value => {
    onClick(value);
    setSelectedOption(value);
    setShowOptions(false);
    onChange(value);
  };

  const dropDownOptions = options.map((option, index) => {
    return (
      <a
        key={index}
        className="block cursor-pointer px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
        role="menuitem"
        value={option.value}
        onChange={e => {
          onChange(option.value);
        }}
        onClick={e => {
          handledDropdownOptions(option.value);
        }}
      >
        {option.label}
      </a>
    );
  });
  return (
    <div>
      <span>
        {label}
        <button
          type="button"
          className={inputStyles ? inputStyles : dropdownClasses}
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
          onChange={onChange}
          onClick={handleButtonClick}
        >
          {selectedOption
            ? find(options, { value: selectedOption })
              ? find(options, { value: selectedOption }).label
              : titleText
            : titleText}
          {Icon}
        </button>
      </span>
      {showOptions ? (
        <div>
          <div className="rounded-md bg-white shadow-xs h-40 overflow-y-scroll">
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              {dropDownOptions}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {error}
    </div>
  );
});

Dropdown.propTypes = {
  label: PropTypes.node.isRequired,
  titleText: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
};

Dropdown.defaultProps = {
  label: "",
  titleText: "",
  onChange: () => {},
  onClick: () => {}
};

export default Dropdown;
