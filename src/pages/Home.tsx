import React, { useCallback, useEffect, useMemo, useState } from "react";
import MovieList from "../components/MovieList";
import SearchBar from "../components/SearchBar";
import { Genre, Movie } from "../types/Movie";
import { restClient } from "../utils/RestClient";

const Home: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedGenre, setSelectedGenre] = useState<Genre>("All");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await restClient.get<Movie[]>("/movies");
        setMovies(data);
      } catch (err) {
        console.error("Failed to fetch movies", err);
      }
    };

    fetchMovies();
  }, []);

  const handleSearchChange = useCallback((query: string) => {
    setSearchQuery(query);
  }, []);

  const handleGenreChange = useCallback((genre: Genre) => {
    setSelectedGenre(genre);
  }, []);

  const filteredMovies = useMemo(() => {
    return movies.filter((movie) => {
      const matchesSearch = movie.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesGenre =
        selectedGenre === "All" || movie.genre === selectedGenre;
      return matchesSearch && matchesGenre;
    });
  }, [movies, searchQuery, selectedGenre]);

  return (
    <main className="container p-5">
      <div className="mb-4 d-flex justify-content-between">
        <SearchBar value={searchQuery} onChange={handleSearchChange} />
        {/* <FilterBar
          options={GENRES}
          selected={selectedGenre}
          onChange={handleGenreChange}
        /> */}
      </div>
      <div className="row">
        <MovieList movies={filteredMovies} setMovies={setMovies} />
      </div>
    </main>
  );
};

export default Home;
