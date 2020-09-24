import React from 'react'
import TagInputSuggestion from './TagInputSuggestion'

export default {
    title: "TagInputSuggestion",
    component: TagInputSuggestion,
};

export const Suggestion = () => (
    <TagInputSuggestion tags={[]} allSuggestion={["first","second","third","The hello world"]} />
)

export const SelectedValues = () =>(
	<TagInputSuggestion  tags={["Aman","jain"]}  />
)

