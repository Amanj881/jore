import React, { forwardRef, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Alert = forwardRef(({ type, labelText, description }, ref) => {
  const alertClasses = classNames("flex leading-6", {
    [`bg-teal-50 border-teal-400`]: type === "informative",
    [`bg-red-50 border-red-400`]: type === "danger",
    [`bg-yellow-50 border-yellow-400`]: type === "warning",
    [`bg-green-50 border-green-400`]: type === "success"
  });

  const alertIcon = classNames({
    [`M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z`]:
      type === "danger",
    [`M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z`]:
      type === "warning",
    [`M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z`]:
      type === "success",
    [`M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z`]:
      type === "informative"
  });

  const svgcolor = classNames({
    [`text-teal-400`]: type === "informative",
    [`text-yellow-400`]: type === "warning",
    [`text-red-400`]: type === "danger",
    [`text-green-400`]: type === "success"
  });

  return (
    <div className={`${alertClasses} border-l-4 p-4`}>
      <div className="flex">
        <div className="flex-shrink-0">
          <svg
            className={`${svgcolor} h-5 w-5 mt-px`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path fillRule="evenodd" d={alertIcon} clipRule="evenodd" />
          </svg>
        </div>
        <div className="ml-3">
          <div className="text-base leading-6 text-black-7 font-medium mb-1 flex items-center">
            {labelText}
          </div>
          <p className="text-sm text-black-7 leading-5 font-normal mr-12 flex items-center">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
});

Alert.propTypes = {
  type: PropTypes.oneOf(["danger", "informative", "success", "warning"]),
  labelText: PropTypes.node.isRequired
};

Alert.defaultProps = {
  type: "informative",
  kind: "informative",
  labelText: "",
  description: ""
};

export default Alert;
