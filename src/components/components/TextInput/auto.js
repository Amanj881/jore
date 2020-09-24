/* eslint-disable jsx-a11y/aria-activedescendant-has-tabindex */
import React, { useRef, useState, useEffect } from "react";
import classNames from "classnames";
import clsx from "clsx";
import getCourts from "../../services/getCourts";

function AutoSuggest({
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
  multiple,
  ...others
}) {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const [selected, setSelected] = useState(-1);
  const [displayText, setDisplayText] = useState("None");

  useEffect(() => {
    if (options.length) {
      let selectedOptions = options.filter((p) => p.selected);

      if (selectedOptions.length) {
        onChange(selectedOptions);
      }

      if (selectedOptions.length) {
        let newLabel = selectedOptions.map((p) => p.label).join(", ");
        setDisplayText(newLabel);
      } else {
        setDisplayText("None");
      }
    }
  }, [options]);

  const onToggle = (option) => {
    let newOptions = options;

    newOptions = newOptions.map((p) => {
      if (p.value === option.value) {
        p.selected = !p.selected;
      } else {
        if (multiple === false) {
          p.selected = false;
        }
      }
      return p;
    });

    setOptions(newOptions);
  };

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

  const onTyping = async (text) => {
    if (text.length > 1) {
      let courts = await getCourts(text);
      courts = courts.data.map((c) => {
        return {
          value: c.courts_uuid,
          label: c.courts_name,
        };
      });

      console.log(courts.length);

      if (courts.length === 0) {
        setOpen(true);
        setOptions([
          {
            value: "",
            label: "None Found",
          },
        ]);
      } else {
        setOptions(courts);
        setOpen(true);
      }
    } else {
      setOpen(false);
    }
  };

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
      autoComplete="off"
      onChange={(e) => onTyping(e.target.value)}
    />
  );

  return (
    <>
      <div className="relative">
        {label}
        <div className="mt-1 relative rounded-md shadow-sm">{input}</div>
        {helper}
        {error}
        {open && (
          // eslint-disable-next-line react/jsx-no-comment-textnodes
          <div className="absolute mt-1 w-full rounded-md bg-white shadow-lg z-50">
            <ul
              aria-labelledby="listbox-label"
              aria-activedescendant="listbox-item-1"
              role="listbox"
              tabIndex={-1}
              className="max-h-60 rounded-md py-1 text-base leading-6 shadow-xs overflow-auto focus:outline-none sm:text-sm sm:leading-5"
            >
              {options.map((option, i) => (
                <li
                  id={`listbox-item-${i}`}
                  role="option"
                  key={`option${i}`}
                  className={clsx(
                    "cursor-default select-none relative py-2 pl-8 pr-4",
                    { "text-gray-900": selected === -1 },
                    { "text-white bg-indigo-600": selected === i }
                  )}
                  onMouseEnter={(event) => {
                    setSelected(i);
                  }}
                  onMouseLeave={(event) => {
                    setSelected(-1);
                  }}
                  onClick={(event) => {
                    // console.log(event.tat);
                    onToggle(option);
                  }}
                >
                  <span
                    className={clsx(
                      "block truncate",
                      { "font-semibold": option.selected },
                      { "font-normal": !option.selected }
                    )}
                  >
                    {option.label}
                  </span>

                  {option.selected && (
                    <span
                      className={clsx(
                        "absolute inset-y-0 left-0 flex items-center pl-1.5",
                        { "text-indigo-600": selected === -1 },
                        { "text-white": selected === i }
                      )}
                      onMouseEnter={(event) => {
                        setSelected(i);
                      }}
                      onMouseLeave={(event) => {
                        setSelected(-1);
                      }}
                    >
                      <svg
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

AutoSuggest.defaultProps = {
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
  multiple: false,
};

export default AutoSuggest;
