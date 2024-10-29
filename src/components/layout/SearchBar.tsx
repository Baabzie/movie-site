import { getAllMovies } from "@/data/data";
import React, { useState } from "react";

const SearchBar: React.FC = () => {
  const [isInputVisible, setIsInputVisible] = useState<boolean>(false);
  const movies = getAllMovies();

  const handleButtonClick = () => {
    setIsInputVisible((prev) => !prev);
  };

  return (
    <div className="search-wrapper">
      <input className={isInputVisible ? "visible" : ""} />
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
