import React from "react";

function Search({ onSearch, isLoading }) {
  const [searchText, setSearchText] = React.useState("");

  const handleChange = (event) => {
    const { value } = event.target;
    setSearchText(value);
  };

  const handleSubmit = () => {
    if (searchText && typeof onSearch === "function") {
      onSearch(searchText);
    }
  };

  return (
    <div>
      <input
        disabled={isLoading}
        type="text"
        onChange={handleChange}
        value={searchText}
      />
      <button disabled={isLoading} onClick={handleSubmit}>
        Search Author Books
      </button>
      {isLoading && <span>Loading ...</span>}
    </div>
  );
}

Search.defaultProps = {
  isLoading: false,
};

export default Search;
