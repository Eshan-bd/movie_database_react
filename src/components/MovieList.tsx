import { useEffect } from "react";
import { Movie } from "../types/Movie";
import MovieCard from "./MovieCard";
import { restClient } from "../utils/RestClient";

interface MovieListProps {
  movies: Movie[];
  setMovies: (movies: Movie[]) => void;
}

const MovieList: React.FC<MovieListProps> = ({ movies, setMovies }) => {
  if (movies.length === 0) return <p>No movies found.</p>;

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
  }, []); // Include setMovies in dependency array

  return (
    <div className="row">
      {movies.map((movie) => (
        <div className="col-12 col-md-4 mb-4" key={movie.id}>
          <MovieCard movie={movie} />
        </div>
      ))}
    </div>
  );
};

export default MovieList;
