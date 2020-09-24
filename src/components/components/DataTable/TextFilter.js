import React, { forwardRef, useState } from "react";
import eventBus from "../../utils/eventBus";

const TextFilter = forwardRef(function TextFilter({ onChange, ...other }, ref) {
  const [filterText, setFilterText] = useState("");

  eventBus.on("clear", () => {
    setFilterText("");
  });

  const clearText = () => {
    onChange("");
    setFilterText("");
  };

  const handleOnChange = (value) => {
    onChange(value);
    setFilterText(value);
  };

  return (
    <>
      <div className="relative inline-block">
        <div>
          <span className="rounded-md">
            <div
              className="inline-flex justify-center w-full py-2 text-xs leading-5 font-medium text-gray-500 hover:text-gray-500 transition ease-in-out duration-150 uppercase cursor-pointer items-center"
              aria-haspopup="true"
              aria-expanded="true"
            >
              <input
                type="text"
                value={filterText}
                onChange={(e) => {
                  handleOnChange(e.target.value);
                }}
                className="bg-gray-50 text-gray-700 text-xs px-1"
              />

              <svg
                className="-mr-1 ml-2 h-5 w-5 cursor-pointer"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                viewBox="0 0 24 24"
                stroke="#6b7280"
                onClick={clearText}
              >
                {filterText && <path d="M6 18L18 6M6 6l12 12" />}
              </svg>
            </div>
          </span>
        </div>
      </div>
    </>
  );
});

TextFilter.defaultProps = {
  onChange: () => {},
};

export default TextFilter;
