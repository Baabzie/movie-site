import React from "react";
import { getAllMovies } from "@/data/data";
import { useState, useEffect, useContext } from "react";
import { SearchContext } from "@/components/layout/SearchContext";

const Movies: React.FC = () => {
  const movies = getAllMovies();
  const lastMovieIndex = movies.length - 1;
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMovieIndex, setActiveMovieIndex] = useState(
    Math.floor(Math.random() * lastMovieIndex)
  );

  const context = useContext(SearchContext);
  if (!context)
    throw new Error("SearchContext must be used within SearchProvider");

  const { searchQuery } = context;

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleButton = (index: number) => {
    setActiveMovieIndex(index);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Filter movies based on searchQuery
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="background-wrapper">
        <img
          className={isScrolled ? "transparent-background" : ""}
          alt={filteredMovies[activeMovieIndex].title}
          src={filteredMovies[activeMovieIndex].background}
        ></img>
        <div className="background-overlay"></div>
      </div>
      <div className="movie-info-wrapper">
        <h2 className={isScrolled ? "transparent-text" : ""}>
          {filteredMovies[activeMovieIndex].title}
        </h2>
        <p className={isScrolled ? "transparent-text" : ""}>
          {filteredMovies[activeMovieIndex].overview}
        </p>
      </div>
      <ul className="movie-list" id="movieList">
        {filteredMovies.map((movie, i) => (
          <li key={movie.id}>
            <button onClick={() => handleButton(i)}>
              <img alt={movie.title} src={movie.poster}></img>
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Movies;
