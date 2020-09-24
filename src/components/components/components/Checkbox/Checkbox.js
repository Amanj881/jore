import React from 'react';
import classNames from "classnames";

const Checkbox = React.forwardRef(function Checkbox(
  {
    id,
    className = `text-black-4`,
    labelText,
    onChange,
    indeterminate,
    hideLabel,
    title = '',
    options,
    errors,
    invalid,
    invalidText,
    ...other
  },
  ref
) {
  const labelClasses = classNames(`ml-3 text-base text-black-7 leading-6`, {
    [`hidden`]: hideLabel,
  });

  const errorId = id + "-error-msg";

  const error = invalid ? (
    <div className={` text-sm leading-normal mt-2 text-red-dark font-normal`} id={errorId}>
      {invalidText}
    </div>
  ) : null;

  const inputClasses = classNames(
    `form-checkbox h-4 w-4 text-blue-5`,
    className,
    {
      [`transition duration-150 ease-in-out`]: !error,
      [`bg-error-light border-1 border-error`]: error,
    }
  );

  const label = labelText ? (
    <label htmlFor={id} className={labelClasses}>
      {labelText}
    </label>
  ) : null;

  const handleOnchange = (option, e) => {
    let checked = e.target.checked;

    if(onChange) {
      onChange(option, checked);
    }
  }

  const checkboxOptions = options.map((option, index) => {
    return (
      <div className="flex items-center mt-2" key={index}>
        <input
          type="checkbox"
          className={inputClasses}
          onChange={(e)=>{handleOnchange(option, e)}}
        />
        <label htmlFor={id} className={labelClasses} title={title || null}>
          <span>{option}</span>
        </label>
      </div>
    )
  })

  return (
    <div>
      { checkboxOptions }
      {error}
    </div>
  );
});

Checkbox.defaultProps = {
  onChange: () => {},
  indeterminate: false,
};

export default Checkbox;