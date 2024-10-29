import { getAllMovies } from "@/data/data";
import React, { useState, useContext } from "react";
import { SearchContext } from "./SearchContext";

const SearchBar: React.FC = () => {
  const [isInputVisible, setIsInputVisible] = useState<boolean>(false);
  // const movies = getAllMovies();
  const context = useContext(SearchContext);
  if (!context)
    throw new Error("SearchContext must be used within SearchProvider");

  const { searchQuery, setSearchQuery } = context;
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleButtonClick = () => {
    setIsInputVisible((prev) => !prev);
  };

  return (
    <div className="search-wrapper">
      <input
        className={isInputVisible ? "visible" : ""}
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Search..."
      />
      <button
        className={!isInputVisible ? "rounded-corners" : ""}
        onClick={handleButtonClick}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
