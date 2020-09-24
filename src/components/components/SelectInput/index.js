import React,{useState,useEffect} from "react";
import classNames from "classnames";

function SelectInput({
  labelText,
  helperText,
  errorText,
  onChange,
  value,
  defaultValue,
  id,
  options,
  ...others
}) {


  const[selectValue,setSelectValue]=useState(defaultValue);

  const onSelectChange = (value) =>{
    setSelectValue(value);
    onChange(value);
  }

  useEffect(()=>{
    if(defaultValue){
    setSelectValue(defaultValue);
  }
     console.log("values",defaultValue);
  },[defaultValue]);


  const label = labelText ? (
    <label
      htmlFor={id}
      className="block text-sm font-medium leading-5 text-gray-700"
    >
      {labelText}
    </label>
  ) : null;

  const helper = helperText ? (
    <p className="mt-2 text-sm text-gray-500">{helperText}</p>
  ) : null;

  const error = errorText ? (
    <p className="mt-2 text-sm text-red-600">{errorText}</p>
  ) : null;

  const selectClasses = classNames(
    `form-select block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5`,
    {
      [`border-red-300 text-red-900 placeholder-red-300 focus:border-red-300 focus:shadow-outline-red`]:
        errorText != null,
    }
  );

  const input = (
    <select
      id={id}
      className={selectClasses}
      onChange={(e) => onSelectChange(e.target.value)}
      value={selectValue}
    >
     
      {options.map((row, i) => (
        <option
          value={row.value}
          key={row.value}
          // selected={defaultValue === row.value}
        >
          {row.label}
        </option>
      ))}
    </select>
  );

  return (
    <>
      {label}
      <div className="mt-1 relative rounded-md shadow-sm">{input}</div>
      {helper}
      {error}
    </>
  );
}

SelectInput.defaultProps = {
  id: "",
  labelText: null,
  helperText: null,
  errorText: null,
  value: "",
  defaultValue: "",
  options: [],
};

export default SelectInput;
