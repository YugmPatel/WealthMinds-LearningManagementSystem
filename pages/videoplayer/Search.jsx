import React, { useState } from "react";

function Navigation() {
  const [courses, setCourses] = useState([
    "Stock Market",
    "Digital Marketing",
    "Cryptocurrency"
  ]);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  // Function to handle changes in the search input
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    const filteredSuggestions = courses.filter(course =>
      course.toLowerCase().includes(query.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
  };

  // Function to handle selection from suggestions
  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
    setSuggestions([]);
  };

  return (
    <div>
      {/* Search input */}
      <form className="d-flex mx-5" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button className="btn btn-outline-warning" type="submit">
          Search
        </button>
      </form>
      
      {/* Suggestions */}
      {searchQuery && (
        <div className="suggestions mx-5 text-light">
          {suggestions.map((suggestion, index) => (
            <div
              key={index}
              className="suggestion"
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Navigation;
