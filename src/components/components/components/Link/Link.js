import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames";

const Link = ({ className, type, labelText, href, onClick, linkStyle }) => {
  const linkClasses = classNames(" underline font-normal leading-6", {
    [` text-base text-black-7`]: type === "link",
    [`text-sm mt-1 text-black-7`]: type === "errorLink",
    [`text-sm text-black-7`]: type === "smalllink",
    [`text-base text-blue-100`]: type === "otp",
    [`text-base text-black-7`]: type === "largelink"
  });

  return (
    <a
      href={href}
      className={linkStyle ? linkStyle : linkClasses}
      onClick={onClick}
    >
      {labelText}
    </a>
  );
};

Link.propTypes = {
  labelText: PropTypes.node,
  href: PropTypes.string
};

Link.defaultProps = {
  type: "link",
  onClick: () => {}
};

export default Link;
