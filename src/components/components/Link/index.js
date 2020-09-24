import React, { forwardRef } from "react";

const Link = forwardRef(function Link({ href, labelText, ...other }, ref) {
  return (
    <>
      <a
        href={href}
        className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
      >
        {labelText}
      </a>
    </>
  );
});

Link.defaultProps = {
  href: null,
  labelText: null,
};

export default Link;
