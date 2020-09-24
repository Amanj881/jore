import React, { forwardRef, useEffect } from 'react'
import './Taginput.css'
import Close from '../../Icon/Close'

const TagInput = forwardRef(function TagInput(props)
{
  const [tags, setTags] = React.useState(props.tags);

  const addTag = event => {
    if (event.key === "Enter" && event.target.value !== "") {
      setTags([...tags, event.target.value]);
      event.target.value = "";
    }
  };

  {tags.map((tag, index) => (
    <li key={index}>
      <span>{tag}</span>
      <button className="icons" onClick={() => removeTag(index)}><Close /></button>
    </li>
  ))}

  const removeTag = index => {
    setTags([...tags.filter(tag => tags.indexOf(tag) !== index)]);
  };

  return(
    <div className="tags-input">
      <ul>
        {tags.map((tag, index) => (
          <li key={index}>
            <span>{tag}</span>
            <button className="icons" onClick={() => removeTag(index)}><Close /></button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        onKeyUp = {event => addTag(event)}
        placeholder="Press enter to add tag"
      />
  </div>
  )
});
          
export default TagInput;