import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Movie } from "../types/Movie";
import "../assets/styles/MovieCard.css";
import { useNavigate } from "react-router-dom";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/movie?movie_id=${movie.id}`);
  };

  return (
    <Card className="movie-card">
      <Card.Img
        variant="top"
        src={movie.poster}
        alt={movie.title}
        className="movie-card-img"
      />
      <Card.Body
        className="movie-card-body position-relative"
        style={{ height: "200px" }}
      >
        <Card.Title>{movie.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{movie.genre}</Card.Subtitle>
        <Button
          variant="primary"
          className="position-absolute bottom-0 end-0"
          style={{
            borderBottomRightRadius: "var(--bs-card-border-radius)", // or whatever radius you want
            borderTopLeftRadius: "0",
            borderTopRightRadius: "0",
            borderBottomLeftRadius: "0",
          }}
          onClick={handleClick}
        >
          View Details
        </Button>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
