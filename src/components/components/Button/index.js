import React from "react";
import classNames from "classnames";

const Button = React.forwardRef(function Button(
  {
    type,
    labelText,
    size,
    kind,
    buttonClick,
    buttonStyles,
    disable,
    width,
    children,
  },
  ref
) {
  const buttonClasses = classNames(
    "py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out capitalize bg-gradient-to-r from-indigo-600 to-indigo-700",
    {
      [`inline-flex items-center`]: width === "default",
      [`w-full flex justify-center `]: width === "full",
    }
  );

  return (
    <button
      type={type}
      className={buttonStyles ? buttonStyles : buttonClasses}
      onClick={buttonClick}
      disabled={disable}
    >
      {children}
    </button>
  );
});

Button.defaultProps = {
  type: "button",
  kind: "small",
  width: "default",
  buttonClick: () => {},
};

export default Button;
