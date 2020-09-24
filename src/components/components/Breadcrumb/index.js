import React, { useEffect, useState } from "react";

export default function ({ items }) {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    let crumbs = [];

    items.forEach((item) => {
      crumbs.push(item);
      if (item.type === "link") {
        crumbs.push({
          type: "divider",
        });
      }
    });

    setLinks(crumbs);
  }, [items]);

  return (
    <>
      <div className="flex-1 min-w-0">
        <ul className="flex">
          {links.map((link, i) => {
            if (link.type === "link") {
              return (
                <li className="mr-2" key={`crumbs${i}`}>
                  <span
                    className="text-blue-500 hover:text-blue-800 capitalize cursor-pointer"
                    onClick={() => {
                      link.onClick();
                    }}
                  >
                    {link.label}
                  </span>
                </li>
              );
            }

            if (link.type === "divider") {
              return (
                <li className="mr-2" key={`crumbs${i}`}>
                  {" "}
                  /{" "}
                </li>
              );
            }

            if (link.type === "last") {
              return (
                <li key={`crumbs${i}`}>
                  <span className="text-gray-400 cursor-not-allowed capitalize">
                    {link.label}
                  </span>
                </li>
              );
            }

            return <></>;
          })}
        </ul>
      </div>
    </>
  );
}
