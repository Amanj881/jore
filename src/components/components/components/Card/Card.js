import PropTypes from "prop-types";
import React, { forwardRef } from "react";
import classNames from "classnames";

const prepareClassNames = props => {
  let str = "";
  if (props.width) {
    str = `${str} w-${props.width}`;
  }
  if (props.maxSize) {
    str = `${str} max-w-${props.maxSize}`;
  }
  if (props.rounded) {
    str = `${str} rounded-${props.rounded}`;
  }
  if (props.overflow) {
    str = `${str} overflow-${props.overflow}`;
  }
  if (props.shadow) {
    str = `${str} shadow-${props.shadow}`;
  }
  if (props.border) {
    str = `${str} border`;
  }
  if (props.borderColor) {
    str = `${str} ${props.borderColor}`;
  }
  if (props.backgroundColor) {
    str = `${str} ${props.backgroundColor}`;
  }
  if (props.hover) {
    str = `${str} ${props.hover}`;
  }
  if (props.className) {
    str = `${str} ${props.className}`;
  }

  return str;
};

const Card = props => {
  let cardClasses = prepareClassNames(props);
  return <div className={cardClasses}>{props.children}</div>;
};

Card.propTypes = {
  className: PropTypes.string,

  disabled: PropTypes.bool,

  id: PropTypes.string,

  onClick: PropTypes.func
};

Card.defaultProps = {
  maxSize: "sm",
  rounded: "sm",
  overflow: "",
  shadow: "sm",
  border: true,
  borderColor: "border-gray-300",
  backgroundColor: "bg-white",
  width: "none",
  hover: "",
  onClick: () => {}
};

export default Card;
