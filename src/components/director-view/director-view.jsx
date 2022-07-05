import React from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import { MovieCard } from '../movie-card/movie-card';

export class DirectorView extends React.Component {
  render() {
    const { director, directorMovies, goBack } = this.props;
    return (
      <Container className="mt-5">
        <h1>{director.name}</h1>
        <p>―Born in {director.birthYear}―</p>
        <h2 className="subtitle">BIO: </h2>
        <p>{director.bio}</p>
        <h2 className="subtitle">DIRECTED MOVIES: </h2>
        <Row className="main-view-width mx-auto justify-content-center mt-3">
          {directorMovies.map((movie) => (
            <MovieCard key={movie._id} movie={movie}>
              {movie.title}
            </MovieCard>
          ))}
        </Row>
        <Button className="mb-5" variant="outline-primary" onClick={goBack}>
          Go Back
        </Button>
      </Container>
    );
  }
}
