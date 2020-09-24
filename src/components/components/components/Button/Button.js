import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { ButtonTypes } from "./Types";
import Loader from "../Loader/Loader";

const Button = React.forwardRef(function Button(
  { type, labelText, size, kind, buttonClick, buttonStyles, btnParentClasses, disable, loading },
  ref
) {
  const [buttonClasses, setButtonClasses] = useState("");
  var btClasses = classNames("flex items-center justify-center leading-6", {
    [`w-full h-10 py-2 ${
      disable ? "text-gray-100" : "text-blue-100"
    } border rounded border-blue-100 font-medium text-base`]:
      kind === "tertiary",
    [`w-16 h-10 py-2 px-4 border rounded border-black-64-a text-black-100 font-medium text-base`]:
      kind === "blackborderbtn",
    [`w-full h-6 text-black-64-a text-sm font-normal`]: kind === "ghost",
    [`w-full h-12 py-3 bg-blue-100 ${
      disable ? "text-gray-100" : "text-white-100"
    } border rounded border-blue-100 font-medium text-base`]: kind === "big",
    [`w-full h-10 py-2 bg-blue-100 text-white-100 border rounded border-blue-100 font-medium text-base`]:
      kind === "medium",
    [`w-full h-10 py-2  border rounded-full border-black-4 text-black-7 w font-normal text-sm hover:border border-blue`]:
      kind === "roundedbtn",
    [`w-full text-peach-dark bg-peach-32-a rounded-full text-sm h-8`]:
      kind === "roundedcolorbtn",
    [`h-6 font-medium text-sm text-blue-100`]: kind === "ghosticonbtn"
  });

  useEffect(() => {
    setButtonClasses(btClasses);
  }, []);

  useEffect(() => {
    if (disable) {
      btClasses = `${btClasses} opacity-50`;
    }
    setButtonClasses(btClasses);
  }, [disable]);

  return (
    <div className={`${!buttonStyles && "text-center"} ${btnParentClasses}`}>
      <button
        type={type}
        className={buttonStyles ? buttonStyles : buttonClasses}
        onClick={buttonClick}
        disabled={disable}
        style={{outline: 'none'}}
      >
        {labelText}
      </button>
      {loading && (
        <div className="absolute" style={{ top: "50%", left: "50%" }}>
          <Loader />
        </div>
      )}
    </div>
  );
});

Button.propTypes = {
  type: PropTypes.string,
  size: PropTypes.string,
  labelText: PropTypes.node.isRequired,
  kind: ButtonTypes.buttonKind.isRequired
};

Button.defaultProps = {
  type: "button",
  kind: "tertiary",
  buttonClick: () => {},
  disable: false,
  loading: false
};

export default Button;
