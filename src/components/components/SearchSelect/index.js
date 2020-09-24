/* eslint-disable jsx-a11y/role-has-required-aria-props */
/* eslint-disable jsx-a11y/aria-activedescendant-has-tabindex */
import React, { useState, useEffect } from "react";
import useOutsideClicker from "../../utils/useOutsideClicker";
import clsx from "clsx";
import find from "lodash/find";
import remove from "lodash/remove";
import clone from "lodash/clone";

function Notfound() {
  return (
    <div className="absolute mt-1 w-full rounded-md bg-white shadow-lg z-50 h-60 flex items-center justify-center">
      <h3 className="text-gray-400">Not Found</h3>
    </div>
  );
}

function Placeholder() {
  return (
    <div className="absolute mt-1 w-full rounded-md bg-white shadow-lg z-50 h-60 flex items-center justify-center">
      <h3 className="text-gray-400">Start Typing</h3>
    </div>
  );
}

function Searching() {
  return (
    <div className="absolute mt-1 w-full rounded-md bg-white shadow-lg z-50 h-60 flex items-center justify-center">
      <h3 className="text-gray-400">Searching...</h3>
    </div>
  );
}

function Chooser({ options, onToggle, selected }) {
  const [current, setCurrent] = useState(-1);

  const isSelected = (option) => {
    let found = find(selected, { value: option.value });
    return found === undefined ? false : true;
  };

  return (
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
              { "text-gray-900": current === -1 },
              { "text-white bg-indigo-600": current === i }
            )}
            onMouseEnter={(event) => {
              setCurrent(i);
            }}
            onMouseLeave={(event) => {
              setCurrent(-1);
            }}
            onClick={(event) => {
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

            {isSelected(option) && (
              <span
                className={clsx(
                  "absolute inset-y-0 left-0 flex items-center pl-1.5",
                  { "text-indigo-600": selected === -1 },
                  { "text-white": selected === i }
                )}
                onMouseEnter={(event) => {
                  setCurrent(i);
                }}
                onMouseLeave={(event) => {
                  setCurrent(-1);
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
  );
}

export default function ({
  label,
  onChange,
  noneSelectedText,
  errorText,
  multiple = false,
  dataProvider,
  defaultSelected = [],
  keywait = 500,
}) {
  const [options, setOptions] = useState([]);
  const [selected, setSelected] = useState(defaultSelected);
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [labelText, setLabelText] = useState(noneSelectedText);

  const visRef = useOutsideClicker(() => {
    setOpen(false);
  });

  useEffect(() => {
    if (selected.length) {
      let newLabel = selected.map((p) => p.label).join(", ");
      setLabelText(newLabel);
    } else {
      setLabelText(noneSelectedText);
    }
    onChange(selected);
  }, [selected, setLabelText, noneSelectedText, onChange]);

  const onToggle = (option) => {
    if (multiple === false) {
      setOpen(false);
      setSelected([option]);
    } else {
      let found = find(selected, { value: option.value });
      let optionsClone = clone(selected);

      if (found === undefined) {
        console.log("add");
        optionsClone.push(option);
      } else {
        remove(optionsClone, (s) => {
          return s.value === option.value;
        });
      }
      setSelected(optionsClone);
    }
  };

  const error = errorText ? (
    <p className="mt-2 text-sm text-red-600">{errorText}</p>
  ) : null;

  const selectClasses = clsx(
    `cursor-default relative w-full rounded-md border bg-white pl-3 pr-10 py-2 text-left focus:outline-none  transition ease-in-out duration-150 sm:text-sm sm:leading-5`,
    {
      "border-red-300 text-red-900 placeholder-red-300 focus:border-red-300 focus:shadow-outline-red":
        errorText != null,
      "focus:shadow-outline-blue focus:border-blue-300 border-gray-300":
        errorText == null,
    }
  );

  const input = (
    <input
      type={"text"}
      autoComplete="off"
      className="form-input w-full focus:outline-none focus:shadow-outline focus:shadow-none appearance-none"
      placeholder="Type Here"
      onChange={(e) => setText(e.target.value)}
    />
  );

  const onTyping = async (query) => {
    if (query.length > 1) {
      setLoading(true);
      let choices = await dataProvider(query);
      setOptions(choices);
      setLoading(false);
    }
  };

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      onTyping(text);
    }, keywait);
    return () => clearTimeout(debounceTimer);
  }, [text]);

  return (
    <div className="space-y-1" ref={visRef}>
      <label
        id="listbox-label"
        className="block text-sm leading-5 font-medium text-gray-700"
      >
        {label}
      </label>
      <div className="relative">
        <span className="inline-block w-full rounded-md shadow-sm">
          <button
            type="button"
            aria-haspopup="listbox"
            aria-expanded="true"
            aria-labelledby="listbox-label"
            className={selectClasses}
            onClick={() => {
              setOpen(!open);
            }}
          >
            <span className="block truncate">{labelText}</span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
              >
                <path
                  d="M7 7l3-3 3 3m0 6l-3 3-3-3"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
        </span>
        {error}

        {open && input}

        {open && text.length === 0 && <Placeholder />}

        {open && loading && <Searching />}

        {open && text.length !== 0 && !loading && options.length === 0 && (
          <Notfound />
        )}

        {open && !loading && options.length > 0 && (
          <Chooser
            selected={selected}
            options={options}
            onToggle={(option) => {
              onToggle(option);
            }}
          />
        )}
      </div>
    </div>
  );
}
