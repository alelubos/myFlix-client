import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

export class GenreView extends React.Component {
  constructor() {
    super();
    this.state;
  }

  render() {
    const { genre, goBack } = this.props;
    return (
      <Container className="mt-5">
        <h1>{genre.name}</h1>
        <h3>DESCRIPTION: </h3>
        <p>{genre.description}</p>

        {/* <Row className="main-view-width mx-auto justify-content-center mt-3">
          {directedMovies.map((movie) => (
            <MovieCard key={movie._id} movie={movie}>
              {movie.title}
            </MovieCard>
          ))}
        </Row> */}
      </Container>
    );
  }
}
