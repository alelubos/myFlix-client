import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import MovieCard from '../movie-card/movie-card';

export class DirectorView extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
    };
  }

  render() {
    const { director, goBack } = this.props;
    return (
      <Container className="mt-5">
        <h1>{director.name}</h1>
        <p>Born in {director.birthYear}</p>
        <h3>BIO: </h3>
        <p>{director.bio}</p>

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
