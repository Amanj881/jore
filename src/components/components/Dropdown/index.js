import React, { forwardRef, useState } from "react";
import TextInput from "../TextInput";
import CheckBoxGroup from "../Checkbox/CheckBoxGroup";

const Dropdown = forwardRef(function Dropdown(
  { href, labelText, ...other },
  ref
) {
  const [isOn, setIsOn] = useState(false);

  const [selectChoices, setSelectChoices] = useState([]);

  return (
    <>
      <div className="relative inline-block text-left">
        <div>
          <span className="rounded-md">
            <div
              onClick={() => setIsOn(!isOn)}
              className="inline-flex justify-center w-full py-2 text-xs leading-5 font-medium text-gray-500 hover:text-gray-500 transition ease-in-out duration-150 uppercase cursor-pointer"
              id="options-menu"
              aria-haspopup="true"
              aria-expanded="true"
            >
              Options
              <svg
                className="-mr-1 ml-2 h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </span>
        </div>

        {isOn && (
          <div className="origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg font-normal">
            <div className="rounded-md bg-white shadow-xs">
              <div
                className="py-1"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <a
                  href="#"
                  className="block px-4 py-2 text-xs leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                  role="menuitem"
                >
                  Sort By Asc
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-xs leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                  role="menuitem"
                >
                  Sort By Desc
                </a>
                <div className="block px-4 py-2">
                  <TextInput />
                  <CheckBoxGroup
                    options={[
                      { value: "one", label: "Number One" },
                      { value: "two", label: "Number Two" },
                    ]}
                    onChange={(e) => {
                      setSelectChoices([...e]);
                      console.log(selectChoices);
                    }}
                    value={selectChoices}
                  />
                  <div className="block mt-4 text-right">
                    <a href="/">Apply</a>
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

Dropdown.defaultProps = {
  href: null,
  labelText: null,
};

export default Dropdown;
