import React from "react";
import clsx from "clsx";
import Success from "../../assets/Success.js";
import Info from "../../assets/Info.js";
import Error from "../../assets/Error.js";

function Alert({ style, options, message, close }) {
  return (
    <div
      className={clsx(
        "rounded-md p-4 border",
        { "bg-green-50 border-green-200": options.type === "success" },
        { "bg-blue-50 border-blue-200": options.type === "info" },
        { "bg-red-50 border-red-200": options.type === "error" }
      )}
      style={style}
    >
      <div className="flex items-center">
        <div className="flex-shrink-0">
          {options.type === "info" && <Info />}
          {options.type === "success" && <Success />}
          {options.type === "error" && <Error />}
        </div>
        <div className="ml-3">
          <p
            className={clsx(
              "text-sm leading-5 font-medium",
              { "text-green-800": options.type === "success" },
              { "text-blue-800": options.type === "info" },
              { "text-red-800": options.type === "error" }
            )}
          >
            {message}
          </p>
        </div>
        <div className="ml-auto pl-3">
          <div className="-mx-1.5 -my-1.5">
            <button
              className={clsx(
                "inline-flex rounded-md p-1.5 focus:outline-none transition ease-in-out duration-150",
                {
                  "text-green-500 hover:bg-green-100 focus:bg-green-100":
                    options.type === "success",
                },
                {
                  "text-blue-500 hover:bg-blue-100 focus:bg-blue-100":
                    options.type === "info",
                },
                {
                  "text-red-500 hover:bg-red-100 focus:bg-red-100":
                    options.type === "error",
                }
              )}
              aria-label="Dismiss"
              onClick={close}
            >
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Alert;
