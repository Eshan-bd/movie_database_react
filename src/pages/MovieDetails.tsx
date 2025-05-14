import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap"; // Adjust the path if needed

// interface MovieDetailsProps {
//   movie_id: BigInt;
// }

const MovieDetails: React.FC = () => {
  const queryParams = new URLSearchParams(location.search);
  const movieId = queryParams.get("movie_id");

  return (
    <Container className="my-5">
      <Row>
        <Col md={4}>
          <Card>
            <Card.Img
              variant="top"
              src={movie_id.poster}
              alt={movie_id.title}
            />
          </Card>
        </Col>
        <Col md={8}>
          <Card>
            <Card.Body>
              <Card.Title>{movie_id.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {movie_id.genre}
              </Card.Subtitle>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </Card.Text>
              <Button variant="primary">Watch Trailer</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MovieDetails;
