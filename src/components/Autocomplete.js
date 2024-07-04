import React,{useEffect, useState} from "react";
import '../App.css';
import { debounce } from 'lodash';
function Autocomplete(props)
{

    useEffect(()=>{
        console.log('props')
        console.log(props);
        
    },[props])
    const [inputValue, setInputValue] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    const debouncedSearch = debounce((value) => {
        // Perform the search or API call with searchTerm
        if (value.length > 0) {
            
            const filteredSuggestions = props.data.filter(suggestion =>
              suggestion.title.toLowerCase().includes(value.toLowerCase())
            );
            setSuggestions(filteredSuggestions.length>0?filteredSuggestions:[{title:'Song Not Found'}]);
          } else {
            setSuggestions([]);
          }
      }, 500);

    //// Function run on every key pressed
    const handleInputChange = (event) => {
        const value = event.target.value;
        setInputValue(value);
        debouncedSearch(value);

       
      };

      //// Function that select targeted value
      const handleSuggestionClick = (value) => {
        setInputValue(value.title);
        setSuggestions([]);
      };
   
      return (
        <div>
                <p>
        Start Searching Songs...
    </p>
        <div className="autocomplete-wrapper">
            <div className="search-container">
          <input
          className=""
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            
        
            placeholder="Search"
            // Additional props
          />
          </div>
          {suggestions.length > 0 && (
            <ul id="autocomplete-list" className="suggestions-list" role="listbox">
              {suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                  role="option"
                >
                  {suggestion.title}
                </li>
              ))}
            </ul>
          )}
        </div>
        </div>
      );

    
}

export default Autocomplete;