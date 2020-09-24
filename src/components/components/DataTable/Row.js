import React, { forwardRef } from "react";
import clsx from "clsx";

const Row = forwardRef(function Row({ item, config, i }, ref) {
  return (
    <tr
      className={clsx(
        { "bg-gray-50": i % 2 !== 0 },
        { "bg-white": i % 2 === 0 }
      )}
      key={`tr${i}`}
    >
      {config.map((c, j) => (
        <td
          key={`td${i}${j}`}
          className={clsx(
            "px-6 py-4 whitespace-no-wrap text-sm leading-5",
            {
              "font-medium text-gray-900": c.actions !== true && j === 0,
            },
            {
              "text-gray-500": c.actions !== true && j > 0,
            },
            {
              "text-right font-medium flex items-center justify-end":
                c.actions === true,
            }
          )}
        >
          {c.actions !== true && c.resolver(item)}
          {c.actions === true &&
            c.links.map((link, i) => {
              if (link.condition(item)) {
                return (
                  <button
                    type="button"
                    onClick={() => {
                      link.resolver(item);
                    }}
                    className={clsx(
                      "text-indigo-600 hover:text-indigo-900 capitalize inline-block cursor-pointer",
                      {
                        "ml-2": i > 0,
                      }
                    )}
                    key={`link${i}`}
                  >
                    {link.label}
                  </button>
                );
              }
            })}
        </td>
      ))}
    </tr>
  );
});

Row.defaultProps = {};

export default Row;
