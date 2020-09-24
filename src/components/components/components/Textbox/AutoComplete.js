import React, { Component, Fragment, useState } from "react";
import PropTypes from "prop-types";
import "./AutoComplete.css";

function Autocomplete(props) {
	const suggestions = [];

	const [state, setState] = useState({
		activeSuggestion: 0,
		filteredSuggestions: [],
		showSuggestions: false,
		userInput: ""
	})

  // Event fired when the input value is changed
  const onChange = e => {
    const suggestions = props.suggestions;

    const userInput = e.currentTarget.value;

    // Filter our suggestions that don't contain the user's input
    const filteredSuggestions = suggestions.filter(
      suggestion =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    setState({
      activeSuggestion: 0,
      filteredSuggestions: filteredSuggestions,
      showSuggestions: true,
      userInput: e.currentTarget.value
    });
  };

  const onClick = e => {
    setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: e.currentTarget.innerText
    });
  };

  const onKeyDown = e => {
    const { activeSuggestion, filteredSuggestions } = state;

    if (e.keyCode === 13) {
      setState({
        activeSuggestion: 0,
        showSuggestions: false,
        userInput: filteredSuggestions[activeSuggestion]
      });
    }

    else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }

      setState({ activeSuggestion: activeSuggestion - 1 });
    }

    else if (e.keyCode === 40) {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }

      setState({ activeSuggestion: activeSuggestion + 1 });
    }
  };

    let suggestionsListComponent;

    if (state.showSuggestions && state.userInput) {
      if (state.filteredSuggestions.length) {
        suggestionsListComponent = (
          <ul class="suggestions">
            {state.filteredSuggestions.map((suggestion, index) => {
              let className;

              if (index === state.activeSuggestion) {
                className = "suggestion-active";
              }

              return (
                <li
                  className={className}
                  key={suggestion}
                  onClick={onClick}
                >
                  {suggestion}
                </li>
              );
            })}
          </ul>
        );
      } else {
        suggestionsListComponent = (
          <div class="no-suggestions">
            <em>No suggestions, you're on your own!</em>
          </div>
        );
      }
    }

    return (
      <Fragment>
        <input
          type="text"
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={state.userInput}
        />
        {suggestionsListComponent}
      </Fragment>
    );
}

export default Autocomplete;
