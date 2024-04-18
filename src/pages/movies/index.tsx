import React from "react";
import { getAllMovies } from "@/data/data";
import Link from "next/link";
import { useState, useEffect } from "react";

const Movies: React.FC = () => {
  const movies = getAllMovies();
  const lastMovieIndex = movies.length - 1;
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMovieIndex, setActiveMovieIndex] = useState(
    Math.floor(Math.random() * lastMovieIndex)
  );

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

  return (
    <>
      <div className="background-wrapper">
        <img
          className={isScrolled ? "transparent-background" : ""}
          alt={movies[activeMovieIndex].title}
          src={movies[activeMovieIndex].background}
        ></img>
        <div className="background-overlay"></div>
      </div>
      <div className="movie-info-wrapper">
        <h2 className={isScrolled ? "transparent-text" : ""}>
          {movies[activeMovieIndex].title}
        </h2>
        <p className={isScrolled ? "transparent-text" : ""}>
          {movies[activeMovieIndex].overview}
        </p>
      </div>
      <ul className="movie-list" id="movieList">
        {movies.map((movie, i) => {
          return (
            <li key={i}>
              <button onClick={() => handleButton(i)}>
                <img alt={movie.title} src={movie.poster}></img>
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Movies;
