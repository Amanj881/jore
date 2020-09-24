import React, { forwardRef, useState, useEffect } from "react";
import clsx from "clsx";
import includes from "lodash/includes";
import indexOf from "lodash/indexOf";
import filter from "lodash/filter";
import map from "lodash/map";
import join from "lodash/join";
import useOutsideClicker from "../../utils/useOutsideClicker";
import eventBus from "../../utils/eventBus";
import { FormattedMessage } from "react-intl";

const SelectFilter = forwardRef(function SelectFilter(
  { onChange, options, selected, ...other },
  ref
) {
  const visRef = useOutsideClicker(() => {
    setIsOn(false);
  });

  const [isOn, setIsOn] = useState(false);
  const [selectedChoices, setSelectedChoices] = useState(selected);
  const [labelText, setLabelText] = useState("");

  const computeLabelText = (choices) => {
    let labels = map(
      filter(options, (p) => {
        return includes(choices, p.value);
      }),
      "label"
    );

    if (labels.length) {
      setLabelText(`(${labels.length}) ` + join(labels, ", "));
    } else {
      setLabelText("");
    }
  };

  useEffect(() => {
    computeLabelText(selectedChoices);
  }, [selectedChoices]);

  eventBus.on("clear", () => {
    setSelectedChoices([]);
    computeLabelText([]);
  });

  const clearFilter = () => {
    setSelectedChoices([]);
    computeLabelText([]);
    onChange([]);
  };

  const handleOnChange = (val, checked) => {
    let value = selectedChoices;

    if (checked) {
      let index = indexOf(value, val);
      if (index === -1) {
        value.push(val);
      }
    } else {
      let index = indexOf(value, val);
      if (index !== -1) {
        value.splice(index, 1);
      }
    }
    setSelectedChoices([...value]);
    computeLabelText([...value]);
    onChange([...value]);
  };

  return (
    <>
      <div className="relative inline-block" ref={visRef}>
        <div>
          <span className="rounded-md">
            <div
              onClick={() => setIsOn(!isOn)}
              className="inline-flex justify-center w-full py-2 text-xs leading-5 font-medium text-gray-500 hover:text-gray-500 transition ease-in-out duration-150 uppercase cursor-pointer items-center"
              aria-haspopup="true"
              aria-expanded="true"
            >
              <input
                value={labelText}
                type="text"
                disabled
                className="bg-gray-100 cursor-not-allowed text-gray-400 text-xs px-1"
              />

              <svg
                className="-mr-1 ml-2 h-3 w-3"
                viewBox="0 0 20 20"
                fill="#6b7280"
              >
                <path
                  fillRule="evenodd"
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </span>
        </div>

        {isOn && (
          <div className="origin-top-left absolute left-0 w-40 rounded-md shadow-lg font-normal">
            <div className="rounded-md bg-white shadow-xs">
              <div
                className="py-1"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <div className="block px-4 py-4">
                  {options.map((option, i) => {
                    return (
                      <div className={clsx({ "mt-1": i > 0 })} key={`row${i}`}>
                        <div className="relative flex items-start items-center">
                          <div className="flex items-center h-5">
                            <input
                              id={`checkbox${option.value}`}
                              type="checkbox"
                              onChange={(e) => {
                                handleOnChange(option.value, e.target.checked);
                              }}
                              checked={includes(selectedChoices, option.value)}
                              value={option.value}
                              className="form-checkbox h-3 w-3 text-indigo-600 transition duration-150 ease-in-out"
                            />
                          </div>
                          <div className="ml-2 text-sm leading-5">
                            <label
                              htmlFor={`checkbox${option.value}`}
                              className="font-normal text-gray-700 text-xs"
                            >
                              {option.label}
                            </label>
                          </div>
                        </div>
                      </div>
                    );
                  })}

                  <div className="text-right mt-2">
                    <span
                      className="cursor-pointer text-gray-500 hover:text-gray-700 text-xs capitalize"
                      onClick={clearFilter}
                    >
                      <FormattedMessage id="ACTIONS.CLEAR" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
});

SelectFilter.defaultProps = {
  onChange: () => {},
  options: [],
  selected: [],
};

export default SelectFilter;
