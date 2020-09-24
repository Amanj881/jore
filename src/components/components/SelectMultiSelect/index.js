/* eslint-disable jsx-a11y/role-has-required-aria-props */
/* eslint-disable jsx-a11y/aria-activedescendant-has-tabindex */
import React, { useState, useEffect, useRef } from "react";
import useOutsideClicker from "../../utils/useOutsideClicker";
import clsx from "clsx";

export default function ({
  label,
  choices,
  onChange,
  noneSelectedText,
  errorText,
  multiple = false,
}) {
  const [options, setOptions] = useState(choices);
  const [filteredOptions, setFilteredOptions] = useState(choices);
  const [filterText, setFilterText] = useState("");

  const dropdownRef = useRef(null);
  const optionsRef = useRef(null);

  const [open, setOpen] = useState(false);
  const [labelText, setLabelText] = useState(noneSelectedText);
  const [selected, setSelected] = useState(-1);

  const visRef = useOutsideClicker(() => {
    setOpen(false);
  });

  useEffect(() => {
    setFilteredOptions(
      options.filter((o) => {
        return o.label.toLowerCase().includes(filterText.toLowerCase());
      })
    );
  }, [filterText]);

  useEffect(() => {
    setOptions(choices);
    setFilteredOptions(choices);
  }, [choices]);

  useEffect(() => {
    if (options.length) {
      let selectedOptions = options.filter((p) => p.selected);
      onChange(selectedOptions);

      if (selectedOptions.length) {
        let newLabel = selectedOptions.map((p) => p.label).join(", ");
        setLabelText(newLabel);
      } else {
        setLabelText(noneSelectedText);
      }
    }
  }, [options]);

  const onToggle = (option) => {
    console.log("ontoggle", option);

    let newOptions = options;

    // if (multiple === false) {
    //   newOptions = newOptions.map((p) => {
    //     p.selected = false;
    //     return p;
    //   });
    // }

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
        {/* Select popover, show/hide based on select state. */}
        {open && (
          // eslint-disable-next-line react/jsx-no-comment-textnodes
          <div className="absolute mt-1 w-full rounded-md bg-white shadow-lg z-50">
            <ul
              aria-labelledby="listbox-label"
              aria-activedescendant="listbox-item-1"
              role="listbox"
              tabIndex={-1}
              className="max-h-60 rounded-md py-1 text-base leading-6 shadow-xs overflow-auto focus:outline-none sm:text-sm sm:leading-5"
              ref={dropdownRef}
              onKeyDown={(event) => {
                if (event.keyCode == 40) {
                  event.preventDefault();
                  if (selected < options.length - 1) {
                    let newSelected = selected + 1;
                    setSelected(newSelected);
                    let visibleHeight = newSelected * 36;
                    if (visibleHeight > dropdownRef.current.clientHeight) {
                      dropdownRef.current.scrollTop = visibleHeight;
                    }
                  } else {
                    setSelected(0);
                    dropdownRef.current.scrollTop = 0;
                  }
                }
              }}
              onKeyUp={(event) => {
                if (event.keyCode == 38) {
                  event.preventDefault();
                  if (selected > 0) {
                    let newSelected = selected - 1;
                    setSelected(newSelected);
                    let visibleHeight = newSelected * 36;
                    if (visibleHeight < dropdownRef.current.clientHeight) {
                      dropdownRef.current.scrollTop = visibleHeight;
                    }
                  } else {
                    setSelected(options.length - 1);
                    dropdownRef.current.scrollTop = options.length * 36;
                  }
                }
              }}
            >
              <li className="py-2 px-4">
                <div className="mt-1">
                  <input
                    className="form-input block w-full sm:text-sm sm:leading-5"
                    onChange={(e) => {
                      setFilterText(e.target.value);
                    }}
                    value={filterText}
                  />
                </div>
              </li>
              {filteredOptions.map((option, i) => (
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
    </div>
  );
}
