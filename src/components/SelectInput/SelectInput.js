import React from 'react'
import PropTypes from 'prop-types'

function SelectInput({value,options,styleClass,onChange,label}) {

  const handleChange = (e) => {
   const {value} = e.target;
   onChange(value);
  };

  return (
    <div>
      {label}
      <select value={value} className={styleClass} onChange={handleChange}>
        <option value="">Please Select</option>
        {options.map((opt,index)=>(
          <option 
            key={index} 
            value={opt.value}>
            {opt.label}
            </option>

        ))}
      </select>
    </div>
  )
}

SelectInput.propTypes = {
  
  label:PropTypes.string,
  value:PropTypes.string,
  options:PropTypes.array.isRequired,
  styleClass:PropTypes.string,
  placeholder:PropTypes.string,
  onChange:PropTypes.func.isRequired
}

SelectInput.defaultProps = {
  value:'',
  styleClass:'',
  placeholder:'',
  label:''
}

export default SelectInput