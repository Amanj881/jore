import React, { forwardRef, useEffect } from 'react'
import './TagInputSuggestion.css'
import Close from '../../Icon/Close'
import {useRef} from 'react'
import { indexOf } from "lodash";


const TagInputSuggestion = forwardRef(function TagInputSuggestion(props,refs)
{

  const errorId = props.id + "-error-msg";
  const [tags, setTags] = React.useState(props.tags);
  const [allSuggestion, setAllSuggestion] = React.useState(props.allSuggestion);
  const [filteredSuggestion, setFilteredSuggestion] = React.useState([]);
  const keywordRef = useRef(null); 
  
  const addTag = event => {
    if (event.key==='Enter' && event.target.value !== "" ) {
      // if(tags.find(tag=>tag.toLowerCase()===event.target.value.toLowerCase()))
      // {
      //  return tags;
      // }
      setTags([...tags, event.target.value]);
      // props.onclick(tags);
      props.selectedTags([...tags, event.target.value]);
      event.target.value = "";
       
    }
    // else if (event.key === 'Backspace' && !event.target.value) {
    //    setTags(tags.length - 1);
    // }
    
    else if(event.target.value !== ""){
      setFilteredSuggestion([...allSuggestion.filter(o => o.includes(event.target.value))]); 
    }

    else{
      setFilteredSuggestion([])
    }
};
  const selectedKeyword = (options) => {

    // if(tags.find(tag=>tag.toLowerCase()===options.toLowerCase()))
    //   {
    //    return options;
    //   }

    setTags([...tags,options]);
    setFilteredSuggestion([]) 
    keywordRef.current.value = "";
    // props.onclick(options);

  }
   
const removeTag = index => {
  setTags([...tags.filter(tag => tags.indexOf(tag) !== index)]);
  //console.log(index);
  props.handleRemove(index);
};
const error = props.invalid ? (
    <div className={`text-error text-sm leading-normal mt-1`} id={errorId}>
      {props.invalidText}
    </div>
  ) : null;
  
  return(
    <div className="main">
    <div className="tags-input">
            <ul className="">
                {tags.map((tag, index) => (
                    <li key={index} className="px-2 m-2 rounded border-1 border border-blue-100 bg-gray-100" >
                        <span>{tag}</span>
                        <span className="icons" onClick={() => removeTag(index)}><Close /></span>
                    </li>
                ))}
            </ul>
            <input
                type="text"
                onKeyUp={event => addTag(event)}
                placeholder="Press enter to add tag"
                className={props.inputStyle ? props.inputStyle :'input-tag'}
                ref={keywordRef}
                invalid={props.invalid}    
            />
            
            </div>
            <div>
            {error}
            </div>
            <div className="dropdown-div">
            <ul className="dropdown">
            {filteredSuggestion.map((options, index) => (
            <li className="dropdown-content" key={index} onClick={() => selectedKeyword(options,index)}>
              <label>{options}</label>
            </li>
          ))} 
            </ul>

            </div>
            </div>
        
  )
});
          
export default TagInputSuggestion;