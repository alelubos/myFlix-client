import React from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import { MovieCard } from '../movie-card/movie-card';

export class GenreView extends React.Component {
  constructor() {
    super();
    this.state;
  }

  render() {
    const { genre, genreMovies, goBack } = this.props;
    return (
      <Container className="mt-5" style={{ width: '80%' }}>
        <h1 className="mb-1">{genre.name}</h1>
        <Button className="mb-4" variant="warning" onClick={goBack}>
          « Back
        </Button>

        <h2 className="subtitle">DESCRIPTION: </h2>
        <p>{genre.description}</p>
        <h2 className="subtitle">MOVIES ON THIS GENRE: </h2>
        <Row className="justify-content-center mt-3">
          {genreMovies.map((movie) => (
            <MovieCard key={movie._id} movie={movie}>
              {movie.title}
            </MovieCard>
          ))}
        </Row>
      </Container>
    );
  }
}
