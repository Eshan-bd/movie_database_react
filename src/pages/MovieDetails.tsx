import React, { useEffect, useState } from "react";
import { Movie } from "../types/Movie";
import { restClient } from "../utils/RestClient";

export interface MovieDetails extends Movie {
  description: string;
  releaseDate: string;
  director: string;
  cast: string[];
  runtime: number;
  rating: number;
  trailerUrl: string;
}

const MovieDetails: React.FC = () => {
  const queryParams = new URLSearchParams(window.location.search);
  const movieId = queryParams.get("movie_id");

  const [movieDetails, setMovieDetails] = useState<MovieDetails | null>(null);

  useEffect(() => {
    if (!movieId) return;

    const fetchMovieDetails = async () => {
      try {
        const data = await restClient.get<MovieDetails>(`/movies/${movieId}`);
        setMovieDetails(data);
      } catch (err) {
        console.error("Failed to fetch movie details", err);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ padding: "1rem", maxWidth: "800px", margin: "0 auto" }}>
      <h1>{movieDetails.title}</h1>
      <p>
        <strong>Directed by:</strong> {movieDetails.director}
      </p>
      <p>
        <strong>Release Date:</strong> {movieDetails.releaseDate}
      </p>
      <p>
        <strong>Runtime:</strong> {movieDetails.runtime} min
      </p>
      <p>
        <strong>Rating:</strong> {movieDetails.rating}/10
      </p>
      <p>
        <strong>Description:</strong> {movieDetails.description}
      </p>

      <div>
        <strong>Trailer:</strong>
        <br />
        <a
          href={movieDetails.trailerUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Watch Trailer
        </a>
      </div>

      <div>
        <strong>Cast:</strong>
        <ul>
          {movieDetails.cast.map((actor, idx) => (
            <li key={idx}>{actor}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MovieDetails;
